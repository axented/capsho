<template>
  <div class="pt-10">
    <button @click="signOutUser">Log Out</button>
  </div>
</template>

<script>
import { logOut } from '../db'

export default {
  name: 'Post Sign In',
  data: () => ({
  }),
  methods: {
    signOutUser() {
      logOut();
    }
  }
}
</script>