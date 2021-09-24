<template>
  <div>
    <NavbarLoggedIn />
    <div class="flex flex-row justify-center">
      <button @click="$router.push('/dashboard')" class="pr-4">
        Return
      </button>
      <select v-model="selectedTool" @change="selectCaption()" class="apperance-none bg-backgroundGradient rounded-xl w-1/2 py-4 px-4 text-primaryDark border-0 focus:outline-none focus:shadow-outline">
        <option
          v-for="(tool, i) in tools"
          :key="i"
        >
          {{ tool }}
        </option>
      </select>
    </div>
    <div class="grid grid-cols-3 gap-4 px-4 py-4">
      <div
        v-for="(caption, i) in displayCaptions"
        :key="i"
        class="bg-backgroundGradient rounded-2xl py-2 px-2 flex flex-col"
      >
        <span class="pb-4 capitalize">{{ caption.tool }}</span>
        <span
          v-for="(piece, j) in caption.text.split('\n')"
          :key="j"
          class="font-body py-4 text-center px-6"
        >
          {{ piece }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarLoggedIn from '../components/NavbarLoggedIn.vue'
import { db } from '../db'

export default {
  name: 'Test',
  components: {
    NavbarLoggedIn
  },
  data: () => ({
    captions: [],
    displayCaptions: [],
    tools: [],
    selectedTool: '',
  }),
  methods: {
    selectCaption() {
      this.displayCaptions = []
      this.captions.forEach((caption) => {
        if (caption.tool === this.selectedTool) {
          this.displayCaptions.push(caption)
        }
      })
    }
  },
  mounted() {
    db.collection('users_data')
      .doc(this.$store.getters.data.id)
      .get()
      .then((doc) => {
        this.captions = doc.data().captions
      })
      .then(() => {
        let temp = []
        this.captions.forEach((caption) => {
          caption.tool = caption.tool.replaceAll("_", " ")
          temp.push(caption.tool)
        })

        temp.map(x => {
          if (!this.tools.includes(x)) {
            this.tools.push(x)
          }
        })
      })
  }
}
</script>