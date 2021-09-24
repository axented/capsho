<template>
  <img v-if="userData" :src="userData.photoURL" class="rounded-full" />
  <img v-else src="../assets/icons/user.svg" class="rounded-full" />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'User Icon',
  data: () => ({
  }),
  computed: {
    ...mapGetters(['userData'])
  }
}
</script>