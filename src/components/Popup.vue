<template>
  <button
    @click="modal = true"
    class="flex flex-row items-center font-body hover:bg-backgroundGradient py-4 px-4 rounded-full"
  >
    <img class="pr-6 -mb-1" src="../assets/icons/video.svg" />
    <span class="font-body font-bold text-primaryDark">{{ buttonText }}</span>
  </button>
  <div v-if="modal" class="overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none flex">
    <div class="relative m-auto w-1/2 h-1/2 flex items-center">
      <div class="flex flex-col bg-backgroundGradient relative w-full h-full rounded-2xl px-4 pb-4 font-body">
        <div class="flex justify-end pb-4 pt-4">
          <button @click="modal = false">
            <img src="../assets/icons/x.svg" class="w-4 h-4" />
          </button>
        </div>
        <iframe class="w-full h-full" :src="video" allowfullscreen></iframe>
      </div>
    </div>
  </div>
  <div v-if="modal" class="opacity-50 fixed inset-y-0 right-0 z-40 bg-black w-screen"></div>
</template>

<script>
export default {
  name: 'Popup',
  props: ['buttonText', 'video'],
  data: () => ({
    modal: false
  })
}
</script>