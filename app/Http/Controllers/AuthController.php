<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Sanctum\PersonalAccessToken;
use Laravel\Sanctum\Sanctum;
use Laravel\Sanctum\HasApiTokens;



class AuthController extends Controller
{
    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => ['requeired', 'email'],
            'password' => 'required',
            'remember' => 'boolean'
        ]);
        $remember = $credentials['remember'] ?? false; // If it's not set, then remember is set to false
        unset($credentials['remember']);
        if (!Auth::attempt($credentials, $remember)) { // Auth will attempt to login with the given credentials and remember flags
            return response([
                // If the login attempt fails, returns error message and status code 422 and exits
                'message' => 'Email or password is incorrect'
            ], 422);
        }

        // Login attempt was successful

        /** @var \App\Models\MyUserModel $user **/
        $user = Auth::user();

        if (!$user->is_admin) {
            // Check if the user is NOT Admin
            Auth::logout();
            return response([
                // Returns error message and status code forbidden 403
                'message' => 'You don\'t have the permission to authenticate as admin.'
            ], 403);
        } 
        // Login was successful and IS Admin
        $token = $user->createToken('main')->plainTextToken; // Creates token for the user

        return response([
            'user' => $user,
            'token' => $token 
        ]);
    }

    public function logout() {
        $user = Auth::user();
        /** @var \App\Models\MyUserModel $user **/
        $user->currentAccessToken()->delete();
        return response('', 204); // Everything occurred successfully
    }
}
