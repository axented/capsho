<template>
  <div class="container">
    <nav class="flex flex-col items-center sm:hidden">
      <div class="py-4">
        <router-link to="/">
          <img class="px-10 mx-auto h-10" src="../assets/logo-purple.png" />
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar Mobile'
}
</script>