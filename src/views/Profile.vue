<template>
  <div class="bg-gradient-to-r from-backgroundGradient min-h-screen to-white">
    <NavbarLoggedIn />
    <div class="container flex flex-row">
      <div class="flex flex-col w-1/4">
        <div class="pt-4">
          <UserIcon class="w-1/2" />
        </div>
        <span class="font-heading text-2xl text-left py-8">Settings</span>
        <div class="flex flex-col">
          <button
            v-for="(option, i) in menu"
            :key="i"
            :class="`font-${option.weight} text-${option.color} text-left py-2 w-1/2`"
            @click="changeMenu(option)"
          >
            {{ option.name }}
          </button>
        </div>
      </div>
      <div class="w-3/4 px-10 pb-10">
        <!-- Edit Profile -->
        <div v-if="selected === 0" class="flex flex-col">
          <!-- Personal data -->
          <div v-if="user.data" class="flex flex-col pb-8">
            <span class="font-heading text-3xl text-left pb-2">Creator's Name</span>
            <div class="flex flex-col py-4">
              <label class="block text-left text-formLabel font-formText pb-2">Full name</label>
              <input v-model="user.data.displayName" class="apperance-none bg-backgroundGradient rounded-xl w-full py-4 px-4 text-primaryDark border-0 focus:outline-none focus:shadow-outline" type="text" placeholder="First and last name">
            </div>
            <div class="flex flex-col py-4">
              <label class="block text-left text-formLabel font-formText pb-2">Email address</label>
              <input v-model="user.data.email" class="apperance-none bg-backgroundGradient rounded-xl w-full py-4 px-4 text-gray-400 border-0 focus:outline-none focus:shadow-outline disabled:cursor-not-allowed" disabled type="email" placeholder="Email">
            </div>
            <div class="flex flex-col py-4">
              <button
                @click="resetPw"
                class="text-left font-body font-bold text-primaryDark"
              >
                Change password
              </button>
              <label class="block text-left text-formLabel font-formText pt-2">A recovery email will be sent and you will be logged out of Capsho</label>
            </div>
          </div>
          <!-- Company data -->
          <div v-if="user.businessName" class="flex flex-col py-8">
            <span class="font-heading text-3xl text-left pb-2">Company Info</span>
            <div class="flex flex-col py-4">
              <label class="block text-left text-formLabel font-formText pb-2">Business name</label>
              <input v-model="user.businessName" class="apperance-none bg-backgroundGradient rounded-xl w-full py-4 px-4 text-primaryDark border-0 focus:outline-none focus:shadow-outline" type="text" placeholder="Business name">
            </div>
            <div class="flex flex-col py-4">
              <UploadImage />
              <label class="block text-left text-formLabel font-formText pt-2">When uploading a new photo, your current one will be deleted</label>
            </div>
            <div class="flex flex-col py-4">
              <label class="block text-left text-formLabel font-formText pb-2">Tone of voice</label>
              <select v-model="user.toneOfVoice" class="apperance-none bg-backgroundGradient rounded-xl py-4 px-4 text-primaryDark border-0 focus:outline-none focus:shadow-outline">
                <option
                  v-for="(tone, i) in tones"
                  :key="i"
                  :value="tone.id"
                >
                  <span class="capitalize">{{ tone.name }}</span>
                </option>
              </select>
            </div>
          </div>
          <!-- Billing data -->
          <div class="flex flex-col py-8">
            <span class="font-heading text-3xl text-left pb-2">Account Info</span>
            <div class="flex flex-col py-4">
              <label class="block text-left text-formLabel font-formText pb-2">Manage billing info</label>
              <button
                class="text-left font-body font-bold text-primaryDark"
              >
                Manage account
              </button>
            </div>
          </div>
          <div class="flex justify-end">
            <button
              @click="updateUser"
              class="font-body text-white rounded-full bg-primaryDark py-4 px-4"
            >
              Save profile
            </button>
          </div>
        </div>
        <!-- Selected inputs -->
        <div v-if="selected === 1" class="flex flex-col">
          <span class="font-heading text-left text-2xl">Answer sets</span>
          <div class="flex flex-col overflow-y-auto pt-8">
            <div
              v-for="(set, i) in sets"
              :key="i"
              class="flex flex-row bg-gradient-to-br from-white to-primaryLight border border-backgroundGradient rounded-2xl py-4 px-4 my-2 justify-between"
            >
              <div class="flex flex-col">
                <span class="capitalize text-left">{{ set.tool.replaceAll("_", " ") }}</span>
                <span>Created at: {{ set.createdAt.toDate().getDate() }}/{{ set.createdAt.toDate().getMonth() + 1 }}/{{ set.createdAt.toDate().getFullYear() }}</span>
              </div>
              <div class="flex flex-row">
                <button
                  @click="getQA(set)"
                  class="px-4 py-2 rounded-full text-primaryDark border border-primaryDark"
                >
                  Show answers
                </button>
                <div class="flex flex-row items-center pl-8">
                  <input v-model="set.enabled" type="checkbox" class="rounded text-primaryDark border-primaryLight">
                  <span class="pl-2 text-primaryDark">Enabled</span>
                </div>
              </div>
            </div>
            <div class="flex flex-row justify-end items-center py-4">
              <div v-if="success" class="flex flex-row items-center">
                <img src="../assets/icons/check.svg" class="w-6 h-6 mr-2" />
                <span class="text-green-500 pr-4">Preferences updated</span>
              </div>
              <button
                @click="updateSets"
                class="py-2 px-4 bg-primaryDark rounded-full text-white font-bold"
              >
                Save
              </button>
            </div>
          </div>
          <div v-if="answers.length > 0" class="flex flex-col h-1/2">
            <div class="flex flex-col">
              <span class="capitalize text-left">{{ currentSet.tool.replaceAll("_", " ") }}</span>
              <span class="text-left">Created at: {{ currentSet.createdAt.toDate().getDate() }}/{{ currentSet.createdAt.toDate().getMonth() + 1 }}/{{ currentSet.createdAt.toDate().getFullYear() }}</span>
            </div>
            <div
              v-for="(answer, i) in answers"
              :key="i"
              class="py-2"
            >
              <label class="block text-left text-formLabel font-formText pb-2">{{ questions[i] }}</label>
              <input v-model="answers[i]" class="apperance-none bg-backgroundGradient rounded-xl w-full py-4 px-4 text-gray-400 border-0 disabled:cursor-not-allowed" disabled type="text" placeholder="Answer">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarLoggedIn from '../components/NavbarLoggedIn.vue'
import UserIcon from '../components/UserIcon.vue'
import UploadImage from '../components/UploadImage'
import { db, resetPassword, updateUserProfile } from '../db'
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  components: {
    NavbarLoggedIn,
    UserIcon,
    UploadImage
  },
  data: () => ({
    selected: 0,
    menu: [
      { name: 'Profile', isSelected: true, color: 'primaryDark', weight: 'bold' },
      { name: 'Saved inputs', isSelected: false, color: 'gray-800', weight: 'normal' }
    ],
    tones: [],
    sets: [],
    answers: [],
    questions: [],
    success: false,
    currentSet: null,
  }),
  methods: {
    updateUser() {
      updateUserProfile(this.user)
      this.$router.push('/dashboard')
    },
    resetPw() {
      resetPassword()
    },
    changeMenu(option) {
      if (option.isSelected) {
        return
      } else {
        this.selected = this.menu.indexOf(option)
        this.menu.forEach((otherOption) => {
          if (option.name === otherOption.name) {
            this.optionType = otherOption.name
            otherOption.isSelected = true
            otherOption.color = 'primaryDark'
            otherOption.weight = 'bold'
          } else {
            otherOption.isSelected = false
            otherOption.color = 'gray-800'
            otherOption.weight = 'normal'
          }
        })
      }
    },
    updateSets() {
      this.success = false
      db.collection('users_data')
        .doc(this.user.data.id)
        .update({
          sets: this.sets
        })
        .then(() => {
          this.success = true
        })
    },
    getQA(set) {
      this.currentSet = set
      db.collection('sets')
        .doc(set.name)
        .get()
        .then((doc) => {
          this.answers = doc.data().answers
          this.questions = doc.data().questions 
        })
    },
    getSets() {
      db.collection('users_data')
        .doc(this.user.data.id)
        .get()
        .then((doc) => {
          this.sets = doc.data().sets
        })
    },
    getTones() {
      db.collection('about_me')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let tone = doc.id.replaceAll("_", " ")
            this.tones.push({
              name: tone,
              id: doc.id
            })
          })
        })
    }
  },
  computed: {
    ...mapGetters(['userData', 'user'])
  },
  watch: {
    userData(newVal) {  
      if (newVal) {  
        this.getSets(newVal.id)
      }
    }
  },
  mounted() {
    if (this.userData) {
      this.getSets(this.userData.id)
    }
    this.getTones()
  },
}
</script>