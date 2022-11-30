<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::user() && Auth::user()->is_admin = 1) { // If the authenticated user is an Admin
            return $next($request); // Allows the user to proceed 
        }

        return response([ // If the authenticated user is NOT an Admin, return error message and forbidden code
            'message' => 'You do not have permission to perform this action'
        ], 403);
    }
}
