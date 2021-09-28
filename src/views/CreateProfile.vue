<template>
  <div v-if="userData">
    <NavbarLoggedIn />
    <div v-if="!userData.emailVerified" class="bg-gradient-to-r from-backgroundGradient to-white py-10">
      <VerifyEmail class="min-h-screen" />
    </div>
    <div v-if="userData.emailVerified" class="bg-gradient-to-r from-white via-yellowBackgroundStart to-yellowBackgroundEnd min-h-screen py-10">
      <!-- STEP 1 -->
      <div
        v-if="step === 1"
        class="container"
      >
        <div class="bg-white rounded-2xl shadow px-10 py-10">
          <div class="flex flex-col">
            <span class="font-heading text-xl">Let's get you started</span>
            <div class="py-2">
              <label class="block text-left text-formLabel font-formText pb-2">Full name</label>
              <input v-model="user.name" class="apperance-none bg-backgroundGradient rounded-xl w-full py-4 px-4 text-primaryDark border-0 focus:outline-none focus:shadow-outline" type="text" placeholder="First and last name">
            </div>
            <div class="py-2">
              <label class="block text-left text-formLabel font-formText pb-2">Business name</label>
              <input v-model="user.business" class="apperance-none bg-backgroundGradient rounded-xl w-full py-4 px-4 text-primaryDark border-0 focus:outline-none focus:shadow-outline" type="text" placeholder="Brand name">
            </div>
            <div class="flex flex-row items-center py-4">
              <button
                class="text-left font-body font-bold text-primaryDark"
                @click="selectImage"
              >
                Upload brand logo
              </button>
              <span v-if="imgData" class="ml-4">{{ imgData.name }}</span>
              <input type="file" ref="logotype" accept="image/*" class="hidden" @change="previewImage" />
            </div>
          </div>
          <div>
            <span>Choose your tone of voice</span>
            <div class="flex flex-row flex-wrap py-4">
              <button
                v-for="(tone, i) in tones"
                :key="i"
                @click="selectTone(tone)"
                :class="`rounded-full border border-primaryDark font-number text-${tone.text} py-2 px-4 mx-2 bg-${tone.color}`"
              >
                {{ tone.name }}
              </button>
            </div>
          </div>
          <div>
            <span>Choose what you sell:</span>
            <div class="flex flex-row flex-wrap py-4">
              <button
                v-for="(type, i) in types"
                :key="i"
                @click="selectType(type)"
                :class="`rounded-full border border-primaryDark font-number text-${type.text} py-2 px-4 mx-2 bg-${type.color}`"
              >
                {{ type.name }}
              </button>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="py-4">
              <button
                @click="step++"
                class="font-body font-bold text-white rounded-full bg-primaryDark py-4 px-4"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- STEP 2 -->
      <div
        v-if="step === 2"
        class="container"
      >
        <div class="bg-white rounded-2xl shadow px-10 py-10">
          <div class="flex flex-col">
            <div class="flex flex-row justify-start">  
              <span class="font-heading text-2xl">Choose your content themes: (up to 5)</span>
            </div>
            <div class="flex flex-row justify-between items-center">
              <button
                @click="previousPage()"
                class="rounded-full bg-primaryLight font-bold text-primaryDark py-2 px-2 h-10 w-12"
              >
                <img src="../assets/icons/chevron-left.png" class="w-full h-full" />
              </button>
              <div class="grid grid-cols-3 gap-4 py-4 px-4">
                <div
                  v-for="i in sections"
                  :key="i"
                >
                  <template v-if="(i + themesPage) - 1 < themes.length">  
                    <button @click="selectTheme(i)" class="flex flex-col justify-start items-center h-full rounded-2xl">
                      <div class="flex rounded-2xl relative">
                        <img
                          :src="themes[(i + themesPage) - 1].img"
                          class="object-cover mx-auto h-56 w-96 rounded-2xl"
                        />
                        <div class="absolute h-56 w-full opacity-30 bg-gradient-to-t from-primaryDark to-transparent rounded-2xl"></div>
                      </div>
                      <div class="flex jusitfy-start w-full">
                        <span class="capitalize text-2xl text-white font-themes -mt-10 ml-5 z-50">
                          {{ themes[(i + themesPage) - 1].name }}
                        </span>
                      </div>
                    </button>
                  </template>
                </div>
              </div>
              <button
                @click="nextPage()"
                class="rounded-full bg-primaryLight font-bold text-primaryDark py-2 px-2 h-10 w-12"
              >
                <img src="../assets/icons/chevron-right.png" class="w-full h-full" />
              </button>
            </div>
            <div class="flex flex-col">
              <span class="font-body">{{ (themesPage/sections) + 1 }}/{{ sections }}</span>
              <span class="font-body text-lg text-left pb-4">Selected: (click to remove)</span>
              <div class="flex flex-row">
                <button
                  v-for="(theme, i) in selectedThemes"
                  :key="i"
                  @click="removeTheme(i)"
                  class="rounded-full border border-primaryDark font-number text-primaryDark py-2 px-4 mx-2 my-2 bg-white"
                >
                  <span class="mx-4 capitalize">{{ theme.name }}</span>
                </button>
              </div>
            </div>
            <div class="flex justify-between">
              <div class="py-4">
                <button
                  @click="step--"
                  class="font-body font-bold text-primaryDark rounded-full hover:bg-offWhite py-4 px-4"
                >
                  Back
                </button>
              </div>
              <div class="py-4">
                <button
                  @click="step=step+2"
                  class="font-body font-bold text-white rounded-full bg-primaryDark py-4 px-4"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- STEP 3
      <div
        v-if="step === 3"
        class="container"
      >
        <div class="bg-white rounded-2xl shadow px-10 py-10">
          <div class="flex flex-col">
            <div class="flex flex-row justify-start">  
              <span class="font-heading text-2xl">Choose the social media holidays you'd like to celebrate and are important to your brand and customers</span>
            </div>
            <div
              v-for="(month, i) in holidaysFirebase"
              :key="i"
              class="py-4"
            >
              <label class="block text-left text-formLabel font-formText pb-2">{{ month.name }}</label>
              <div class="flex flex-row flex-wrap">
                <button
                  v-for="(day, j) in month.days"
                  :key="j"
                  @click="selectHolidays(day)"
                  :class="`rounded-full border border-primaryDark font-number text-${day.text} py-2 px-4 mx-2 my-2 bg-${day.color}`"
                >
                  {{ day.name }}
                </button>
              </div>
            </div>
            <div class="flex justify-between">
              <div class="py-4">
                <button
                  @click="step--"
                  class="font-body font-bold text-primaryDark rounded-full hover:bg-offWhite py-4 px-4"
                >
                  Back
                </button>
              </div>
              <div class="py-4">
                <button
                  @click="step++"
                  class="font-body font-bold text-white rounded-full bg-primaryDark py-4 px-4"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- STEP 4 -->
      <div
        v-if="step === 4"
        class="container"
      >
        <div class="bg-white rounded-2xl shadow px-10 py-10">
          <div class="flex flex-col">
            <div class="flex flex-row pb-4">
              <span class="font-heading text-2xl">If you could have a magic wand to wave over Capsho and get exactly what you want, what would you wish for?</span>
            </div>
            <textarea v-model="user.expectation" class="apperance-none border-0 bg-backgroundGradient rounded-xl resize-none w-full py-4 px-4 text-primaryDark focus:outline-none focus:shadow-outline" rows="5" id="comment" placeholder="We love meeting (and exceeding!) expectations so let us know what you're looking forward to!"></textarea>
            <div class="flex justify-between">
              <div class="py-4">
                <button
                  @click="step=step-2"
                  class="font-body font-bold text-primaryDark rounded-full hover:bg-offWhite py-4 px-4"
                >
                  Back
                </button>
              </div>
              <div class="py-4">
                <button
                  @click="step++"
                  class="font-body font-bold text-white rounded-full bg-primaryDark py-4 px-4"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- STEP 5 -->
      <div
        v-if="step === 5"
        class="container"
      >
        <div class="bg-white rounded-2xl shadow px-10 py-10">
          <div class="flex flex-col items-center">
            <iframe src="https://player.vimeo.com/video/611198993?h=58b059483b" width="890" height="500" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <div class="flex w-full justify-between">
              <div class="py-4">
                <button
                  @click="step--"
                  class="font-body font-bold text-primaryDark rounded-full hover:bg-offWhite py-4 px-4"
                >
                  Back
                </button>
              </div>
              <div class="py-4">
                <button
                  @click="saveProfile"
                  class="font-body font-bold text-white rounded-full bg-primaryDark py-4 px-4"
                >
                  Let's begin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavbarLoggedIn from '../components/NavbarLoggedIn.vue'
import VerifyEmail from '../components/VerifyEmail.vue'
import { db, updateUserInfo, addUserToCollection, saveImage } from '../db'

export default {
  name: 'Create Profile',
  components: {
    NavbarLoggedIn,
    VerifyEmail
  },
  data: () => ({
    step: 1,
    selectedHolidays: [],
    selectedThemes: [],
    imgData: null,
    user: {
      name: null,
      photo: null,
      business: null,
      tone: null,
      type: null,
      expectation: null
    },
    holidaysFirebase: [],
    themes: [],
    themesPage: 0,
    sections: 0,
    tones: [],
    types: [
      { name: 'Product', db: 'product', color: 'white', text: 'primaryDark', isEnabled: false },
      { name: 'Service/Coach', db: 'service', color: 'white', text: 'primaryDark', isEnabled: false }
    ]
  }),
  methods: {
    previewImage(event) {
      this.imgData = event.target.files[0]
      this.user.photo = saveImage(this.imgData)
    },
    selectImage() {
      this.$refs.logotype.click()
    },
    nextPage() {
      let sum = this.themesPage + this.sections
      if (sum <= this.themes.length) {
        this.themesPage = sum
      }
    },
    previousPage() {
      let sub = this.themesPage - this.sections
      if (sub >= 0) {
        this.themesPage = sub
      } else {
        this.themesPage = 0
      }
    },
    selectTheme(i) {
      if (this.selectedThemes.length < 5) {
        let obj = {
          id: this.themes[i + this.themesPage - 1].id,
          name: this.themes[i + this.themesPage - 1].name
        }
        let isIncluded = this.selectedThemes.includes(obj)
        if (!isIncluded) {
          this.selectedThemes.push(obj)
        }
      }
    },
    removeTheme(i) {
      this.selectedThemes.splice(i, 1)
    },
    selectType(type) {
      if (type.isEnabled) {
        return
      } else {
        this.types.forEach((otherType) => {
          if (type.name === otherType.name) {
            otherType.isEnabled = true
            this.user.type = type.db
            otherType.text = 'white'
            otherType.color = 'primaryDark'
          } else {
            otherType.isEnabled = false
            otherType.text = 'primaryDark'
            otherType.color = 'white'
          }
        })
      }
    },
    selectTone(tone) {
      if (tone.isEnabled) {
        return
      } else {
        this.tones.forEach((otherTone) => {
          if (tone.name === otherTone.name) {
            otherTone.isEnabled = true
            this.user.tone = tone.db
            otherTone.text = 'white'
            otherTone.color = 'primaryDark'
          } else {
            otherTone.isEnabled = false
            otherTone.text = 'primaryDark'
            otherTone.color = 'white'
          }
        })
      }
    },
    changeColor(chip) {
      if (chip.isEnabled) {
        chip.color = 'white'
        chip.text = 'primaryDark'
      } else {
        chip.color = 'primaryDark'
        chip.text = 'white'
      }
      chip.isEnabled = !chip.isEnabled
    },
    selectHolidays(day) {
      let isIncluded = this.selectedHolidays.includes(day)

      if (!isIncluded) {
        this.changeColor(day)
        this.selectedHolidays.push(day)
      } else {
        this.changeColor(day)
        let index = this.selectedHolidays.indexOf(day)
        this.selectedHolidays.splice(index, 1)
      }
    },
    saveProfile() {
      let tempHolidays = []
      let tempThemes = []

      this.selectedHolidays.forEach((holiday) => {
        tempHolidays.push({ date: holiday.date, name: holiday.name, month: holiday.month })
      })
      this.selectedThemes.forEach((theme) => {
        tempThemes.push(theme.id)
      })

      updateUserInfo(this.user.name, this.user.photo)
      addUserToCollection(this.user.tone, this.user.type, this.user.business, tempHolidays, tempThemes, this.user.expectation)
    },
    loadImages() {
      let images = []
      this.themes.forEach((theme) => {
        let image = new Image()
        image.src = theme.img
        images.push(image.src)
      })
    }
  },
  computed: {
    ...mapGetters(['userData'])
  },
  mounted () {
    this.loadImages()
    db.collection('about_me')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((tone) => {
          let display = tone.id.replaceAll("_", " ")
          display = display[0].toUpperCase() + display.substring(1)
          this.tones.push({
            name: display,
            db: tone.id,
            color: 'white',
            text: 'primaryDark',
            isEneabled: false
          })
        })
      })


    db.collection('themes')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((theme) => {
          let newName = theme.id.replaceAll("_", " & ")
          this.themes.push({
            name: newName,
            img: theme.data().img,
            id: theme.id
          })
        })
      })
      .then(() => {
        this.sections = Math.ceil(this.themes.length / 6)
      })
      .then(() => {
        this.loadImages()
      })

    db.collection('holidays')
      .orderBy('order')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((month) => {
          let temp = []
          month.data().days.forEach((day) => {
            let obj = { name: day.day, date: day.date, month: month.data().month, color: 'white', text: 'primaryDark', isEnabled: false }
            temp.push(obj)
          })
          this.holidaysFirebase.push({
            name: month.data().month,
            days: temp
          })
        })
      })
  }
}
</script>