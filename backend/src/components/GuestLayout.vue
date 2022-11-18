<template>
   <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          {{title}}
        </h2>
      </div>
      <!-- For GuestLayout we'll only have 3 views: Login, RequestPassWord and ResetPassword -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuestLayout",
  props: {
    title: {
      type: String,
      required: true
    }
  }

}
</script>

<style>

</style>