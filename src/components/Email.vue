<template>
  <div v-if="shownEmails.length > 0" class="flex flex-col items-center">
    <div class="pb-8 flex justify-center w-full">
      <select v-model="selectedTool" @change="getTemplate()" class="apperance-none bg-backgroundGradient rounded-xl w-1/2 py-4 px-4 text-primaryDark border-0 focus:outline-none focus:shadow-outline">
        <option
          v-for="(tool, i) in tools"
          :key="i"
          :value="tool"
        >
          <span>{{ tool.replaceAll("_", " ") }}</span>
        </option>
      </select>
    </div>
    <div
      v-for="(email, i) in shownEmails"
      :key="i"
      class="flex flex-col items-center"
    >
      <div class="flex flex-col justify-center bg-white rounded-2xl shadow w-2/3 my-4 pb-4">
        <div class="py-4">
          <img src="../assets/email-logo.png" class="w-1/5 mx-auto" />
        </div>
        <div class="py-4">
          <img src="../assets/email-img.png" />
        </div>
        <span class="text-center font-heading text-2xl py-4">{{ email.esl.text }}</span>
        <span
          v-for="(piece, j) in email.email.text.split('\n')"
          :key="j"
          class="font-body py-1 text-center px-6"
        >
          {{ piece }}
        </span>
        <div class="flex flex-col pt-8">
          <div class="flex justify-center">
            <button class="rounded-xl bg-blue-700 px-10 py-6">
              <span class="uppercase text-white font-body font-bold">Order</span>
            </button>
          </div>
          <div class="flex flex-row py-4 justify-center">
            <img src="../assets/socials/instagram.png" class="h-10 w-10 mx-2" />
            <img src="../assets/socials/dribbble.png" class="h-10 w-10 mx-2" />
            <img src="../assets/socials/twitter.png" class="h-10 w-10 mx-2" />
            <img src="../assets/socials/youtube.png" class="h-10 w-10 mx-2" />
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="py-10 flex justify-evenly">
          <button
            @click="viewAllEmails()"
            class="border border-primaryDark flex flex-row text-primaryDark items-center rounded-full px-6"
          >
            <span>View all</span> 
          </button>
          <button
            @click="selectEmail()"
            class="border border-primaryDark flex flex-row text-primaryDark items-center rounded-full px-6"
          >
            <span>Refresh</span> 
          </button>
          <button
            @click="saveFile()"
            class="flex flex-row text-white bg-primaryDark rounded-full items-center py-4 px-4"
          >
            <img src="../assets/icons/download2.svg" class="h-4 w-4 mr-2" />
            <span>Download</span> 
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    You dont have any emails yet, click on a storytelling tool to generate some
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { db } from '../db'

export default {
  name: 'Email',
  data: () => ({
    emails: [],
    emailSubjectLines: [],
    currEmail: 0,
    shownEmails: [],
    shownEsl: [],
    template: [],
    selectedTool: '',
    tools: []
  }),
  methods: {
    saveFile() {
      const text = "<SUBJECT LINE>" + this.shownEmails[0].esl.text + "<SUBJECT LINE> \n\n" + this.shownEmails[0].email.text
      const FileSaver = require('file-saver')
      let blob = new Blob([text], { type: "text/plain;charset=utf-8" })
      FileSaver.saveAs(blob, 'email.txt')
    },
    getEmails(id) {
      let temp = []
      db.collection('users_data').doc(id).get()
      .then((doc) => {
        doc.data().emails.forEach((email) => {
          let test = eval("`" + email.text + "`")
          this.emails.push({
            text: test,
            tool: email.tool
          })
          temp.push(email.tool)
        })
        doc.data().email_subject_lines.forEach((esl) => {
          let test = eval("`" + esl.text + "`")
          this.emailSubjectLines.push({
            text: test,
            tool: esl.tool
          })
        })
        if (this.emails.length > 0) {  
          this.selectedTool = this.emails[0].tool
        }
      })
      .then(() => {
        temp.map(x => {
          if (!this.tools.includes(x)) {
            this.tools.push(x)
          }
        })
        this.getTemplate()
      })
    },
    getTemplate() {
      db.collection('templates').doc('email').get()
      .then((doc) => {
        this.template = doc.data()
      })
      .then(() => {
        this.selectEmail()
      })
    },
    viewAllEmails() {
      const displayEmails = []
      const displaySubjectLines = []
      this.shownEmails = []

      this.emails.forEach((email) => {
        if (email.tool === this.selectedTool) {
          displayEmails.push(email)
        }
      })
      this.emailSubjectLines.forEach((esl) => {
        if (esl.tool === this.selectedTool) {
          displaySubjectLines.push(esl)
        }
      })

      for (let i = 0; i < displayEmails.length; i++) {
        this.shownEmails.push({
          email: displayEmails[i],
          esl: displaySubjectLines[i]
        })
      }
    },
    selectEmail() {
      const displayEmails = []
      const displaySubjectLines = []
      this.shownEmails = []

      this.emails.forEach((email) => {
        if (email.tool === this.selectedTool) {
          displayEmails.push(email)
        }
      })
      this.emailSubjectLines.forEach((esl) => {
        if (esl.tool === this.selectedTool) {
          displaySubjectLines.push(esl)
        }
      })

      const rand = Math.floor(Math.random() * displayEmails.length)
      const randEsl = Math.floor(Math.random() * displaySubjectLines.length)

      if (displayEmails.length > 0 && displaySubjectLines.length > 0) {
        this.shownEmails.push({
          email: displayEmails[rand],
          esl: displaySubjectLines[randEsl]
        })
      }
    }
  },
  computed: {
    ...mapGetters(['userData', 'user'])
  },
  watch: {
    userData(newVal) {
      if (newVal) {  
        this.getEmails(newVal.id)
      }
    }
  },
  mounted() {
    if (this.userData) {
      this.getEmails(this.userData.id)
    }
  }
}
</script>