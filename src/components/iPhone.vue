<template>
  <div class="flex flex-col w-full items-center">
    <div v-if="output === 'grid'" class="flex flex-row flex-wrap">
      <div
        v-for="(space, i) in template"
        :key="i"
        class="w-1/3 h-auto px-2 py-2"
      >
        <div class="bg-gradient-to-br from-primaryLight to-bacgkroundGradient px-2 py-2 rounded-2xl h-full border border-primaryLight">
          <span class="capitalize font-bold text-xl">{{ space.creative }}</span><br>
          <span v-if="space.text">{{ space.text }}</span>
          <span v-else>No caption yet keep using other story telling tools to fill this space!</span>
        </div>
      </div>
    </div>
    <div v-if="output === 'captions'" class="flex flex-row w-4/5 justify-end" >
      <div class="w-1/2">
        <div class="bg-white rounded-3xl border-2 shadow h-iphoneHeight w-iphoneWidth mx-auto">
          <div class="flex flex-col">
            <!-- Status bar -->
            <img src="../assets/iphone/top.svg" class="px-2" />
            <!-- Name -->
            <div class="flex justify-center py-2">
              <span>{{ user.businessName }}</span>
            </div>
            <!-- DP, Followers -->
            <div class="flex flex-row items-center justify-evenly text-center">
              <UserIcon class="w-16 h-16" />
              <div class="flex flex-col">
                <span>1,476</span>
                <span class="text-sm">Posts</span>
              </div>
              <div class="flex flex-col">
                <span>898</span>
                <span class="text-sm">Followers</span>
              </div>
              <div class="flex flex-col">
                <span>564</span>
                <span class="text-sm">Following</span>
              </div>
            </div>
            <!-- Name + Bio -->
            <div class="flex flex-col">
              <span class="font-bold text-xs px-2 pt-2">{{ user.businessName }}</span>
              <p class="text-xs px-2 pb-2">Your Instagram bio should be a combination of the benefit you create for your customer and what you sell</p>
            </div>
            <!-- Buttons -->
            <img src="../assets/iphone/buttons.jpeg" />
            <!-- Gallery -->
            <img src="../assets/iphone/gallery.svg" />
            <!-- Posts -->
            <div class="flex flex-row flex-wrap">
              <div 
                v-for="(space, i) in template"
                :key="i"
                class="flex justify-center h-ig w-ig border border-gray-100"
              >
                <button
                  @click="showCaption(space, i)"
                  :disabled="space.text === ''"
                  class="disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <img class="object-cover h-ig" :src="space.image" />
                </button>
              </div>
            </div>
          </div>
          <img src="../assets/iphone/bar.svg" class="mx-auto rounded-2xl" />
        </div>
      </div>
      <div class="w-1/2">
        <div 
          v-if="shownCaption"
          class="flex flex-col w-iphoneWidth mx-auto"
        >
          <div class="pb-4 flex flex-row">
            <button @click="refreshCaption" class="w-full border border-primaryDark text-primaryDark font-bold rounded-full bg-white py-4">
              Refresh
            </button>
            <button @click="shownCaption = null" class="ml-4 text-primaryDark">Close</button>
          </div>
          <div class="flex flex-col bg-white rounded-3xl border-2 shadow">
            <img class="rounded-t-3xl" :src="shownCaption.image" />
            <span
              v-for="(piece, j) in shownCaption.caption.split('\n')"
              :key="j"
              class="font-body py-4 text-center px-6"
            >
              {{ piece }}
            </span>
            <div class="flex flex-row py-4">
              <button
                @click="downloadText"
                class="flex flex-row items-center px-4"
              >
                <span class="text-gray-400">Download text</span>
                <img src="../assets/icons/download.svg" class="h-4 w-4 ml-2" />
              </button>
              <button
                @click="doCopy"
                class="flex flex-row items-center px-4"
              >
                <span class="text-gray-400">Copy text</span>
                <img src="../assets/icons/copy.svg" class="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
          <div v-if="copiedSuccessfully" class="flex flex-row justify-center items-center pt-4">
            <img src="../assets/icons/check.svg" class="w-6 h-6 mr-2" />
            <span class="text-green-500">Copied Successfully!</span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="py-10 flex justify-evenly">
        <Popup buttonText="Watch this video" video="https://player.vimeo.com/video/611198993?h=58b059483b" />
        <button
          v-if="output === 'captions'"
          class="flex flex-row text-white bg-primaryDark rounded-full items-center py-4 px-4"
          @click="output = 'grid'"
        >
          <!-- <img src="../assets/icons/save.svg" class="h-4 w-4 mr-2" /> -->
          <span>View all as text</span> 
        </button>
        <button
          v-if="output === 'grid'"
          class="flex flex-row text-white bg-primaryDark rounded-full items-center py-4 px-4"
          @click="output = 'captions'"
        >
          <!-- <img src="../assets/icons/save.svg" class="h-4 w-4 mr-2" /> -->
          <span>View all as grid</span> 
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../db'
import { mapGetters } from 'vuex'
import UserIcon from '../components/UserIcon.vue'
import Popup from '../components/Popup.vue'

export default {
  name: 'iPhone',
  components: {
    UserIcon,
    Popup
  },
  data: () => ({
    shownCaption: null,
    copiedSuccessfully: false,
    template: [],
    captions: [],
    sets: [],
    test: '',
    output: 'captions'
  }),
  methods: {
    doCopy() {
      this.$copyText(this.shownCaption.caption)
      this.copiedSuccessfully = true
      this.$nextTick(() => {
        window.setInterval(() => {
          this.copiedSuccessfully = false
        }, 4000)
      })
    },
    downloadText() {
      const FileSaver = require('file-saver')
      let blob = new Blob([this.shownCaption.caption], { type: "text/plain;charset=utf-8" })
      FileSaver.saveAs(blob, 'caption.txt')
    },
    refreshCaption() {
      let availableCaptions = []
      this.captions.forEach((caption) => {
        if (caption.type === this.shownCaption.type) {
          availableCaptions.push(caption)
        } else if (caption.tool === this.shownCaption.tool) {
          availableCaptions.push(caption)
        }
      })
      let num = Math.floor(Math.random() * availableCaptions.length)

      this.shownCaption.caption = availableCaptions[num].text
      this.template[this.shownCaption.pos].caption = availableCaptions[num].text
    },
    showCaption(space, i) {
      this.shownCaption = {
        caption: space.text,
        tool: space.tool,
        image: space.image,
        type: space.type,
        pos: i
      }
    },
    getTemplate(id, template, type) {
      if (template) {
        db.collection('templates').doc(type + "_" + template).get()
        .then((doc) => {
          this.template = doc.data().outputs

          return db.collection('users_data').doc(id).get()
        })
        .then((doc) => {
          doc.data().sets.forEach((set) => {
            if (set.enabled) {
              this.sets.push(set.name)
            }
          })
          doc.data().captions.forEach((caption) => {
            this.captions.push(caption)
            for (let i = 0; i < this.template.length; i++) {
              if (this.template[i].type === caption.type && this.template[i].text === '') {
                if (this.sets.includes(caption.set)) {  
                  this.template[i].text = caption.text
                  i = 9
                }
              } else if (this.template[i].tool === caption.tool && this.template[i].text === '') {
                if (this.sets.includes(caption.set)) {  
                  this.template[i].text = caption.text
                  i = 9
                }
              }
            }
          })
        })
      }
    }
  },
  computed: {
    ...mapGetters(['userData', 'user']),
  },
  watch: {
    userData(newVal) {
      if (newVal) {  
        this.getTemplate(newVal.id, this.user.template, this.user.type)
      }
    }
  },
  mounted() {
    if (this.userData) {
      this.getTemplate(this.user.data.id, this.user.template, this.user.type)
    }
  }
}
</script>