<template>
  <div class="flex flex-row items-center">
    <button
      class="text-left font-body font-bold text-primaryDark"
      @click="selectImage"
    >
      Upload brand logotype
    </button>
    <span v-if="imgData" class="ml-4">{{ imgData.name }}</span>
    <input type="file" ref="logotype" accept="image/*" class="hidden" @change="previewImage" />
  </div>
</template>

<script>
import { saveImage } from '../db'

export default {
  name: 'Upload Image',
  data: () => ({
    imgData: null,
  }),
  methods: {
    previewImage(event) {
      this.imgData = event.target.files[0]
      saveImage(this.imgData)
    },
    selectImage() {
      this.$refs.logotype.click()
    },
  }
}
</script>