<template>
  <form action="">
    <div class="flex flex-col mb-4">
      <label for="email" class="font-bold">Email</label>
      <InputText type="email" class="tw-input"  />
    </div>

    <div class="flex flex-col mb-4">
      <label for="password" class="font-bold">Password</label>
      <input
        id="password"
        type="password"
        name=""
        class="min-w-[300px] p-2 border-2 border-neutral focus:border-primary transition-all rounded-md"
      />
    </div>

    <div class="flex gap-4 items-center">
      <button
        type="submit"
        class="bg-primary px-3 py-2 rounded-md text-secondary font-bold min-w-[100px]"
      >
        Login
      </button>
      <NuxtLink href="/auth/forgot-password">
        <span class="text-narrow underline">Forgot your password ?</span>
      </NuxtLink>
    </div>
  </form>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';

definePageMeta({
  layout: "auth",
});
</script>

<style lang="scss"></style>
