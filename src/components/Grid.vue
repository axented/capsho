<template>
  <div
    v-for="(space, i) in gridSpaces"
    :key="i"
  >
    {{ space }}
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: ['gridSpaces'],
  data: () => ({
  })
}
</script>