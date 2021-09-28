<template>
  <div>
    <NavbarLoggedIn />
    <div class="container flex flex-col justify-center pt-4">
      <div class="flex flex-col py-4">
        <span class="font-heading text-2xl capitalize py-8">{{ title }}</span>
      </div>
      <div class="relative mx-auto w-2/3 py-10">
        <img :src="progressbar" class="w-full" />
        <div :style="`width: ${calculatePercentage}%`" class="absolute inset-y-0 right-0 h-full opacity-90 bg-white"></div>
      </div>
      <div class="flex flex-row pt-10">
        <div class="flex flex-col w-1/2 pr-8">
          <div class="flex flex-col border-2 max-h-80 rounded-2xl py-4 px-4 text-left overflow-y-auto">
            <span class="pb-4 font-bold">Storytelling results</span>
            <div class="flex flex-col">
              <div
                v-for="(question, i) in arrQuestions"
                :key="i"
              >
             
                <span v-if="question.holidayDropdown" class="pr-1">
                  {{ question.narrative }} <span class="font-bold">{{ captionAnswers[i].name }}</span>
                </span>
                <span v-else class="pr-1">
                  {{ question.narrative }} <span class="font-bold">{{ captionAnswers[i] }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-1/2">
          <div v-if="arrQuestions.length > 0" class="flex flex-col text-left py-4">
            <span
              v-for="(piece, i) in arrQuestions[step].question.split('\n')"
              :key="i"
              class="text-left text-primaryDark font-formText"
            >
              {{ piece }}
            </span>
            <div class="flex flex-row py-2 items-center">
              <span>Pro tip:</span>
              <Popup v-if="arrQuestions.length > 0" buttonText="Watch this video" :video="arrQuestions[step].video" />
            </div>
            <label class="block text-left text-formLabel font-formText pb-2">{{ arrQuestions[step].narrative }}</label>
            <select v-if="arrQuestions[step].holidayDropdown" v-model="captionAnswers[step]" class="apperance-none bg-backgroundGradient rounded-xl w-full py-4 px-4 text-primaryDark border-0 focus:outline-none focus:shadow-outline">
              <option
                v-for="(holiday, i) in holidays"
                :key="i"
                :value="holiday"
              >
                {{ holiday.name }}
              </option>
            </select>
            <input v-else-if="!arrQuestions[step].dropdown" v-model="captionAnswers[step]" class="apperance-none bg-backgroundGradient rounded-xl w-full py-4 px-4 text-primaryDark border-0 focus:outline-none focus:shadow-outline" type="text" :placeholder="placeholder" />
            <select v-else v-model="captionAnswers[step]" class="apperance-none bg-backgroundGradient rounded-xl w-full py-4 px-4 text-primaryDark border-0 focus:outline-none focus:shadow-outline">
              <option
                v-for="(emotion, i) in emotions"
                :key="i"
                :value="emotion.name"
              >
                {{ emotion.name }}
              </option>
            </select>
          </div>
          <div class="flex flex-row justify-between py-8">
            <button
              v-if="step === 0"
              class="font-body font-bold text-primaryDark rounded-full hover:bg-offWhite py-4 px-4"
            >
              <!-- Need some inspiration? -->
            </button>
            <button
              v-else
              class="font-body font-bold text-primaryDark rounded-full border border-primaryDark py-4 px-4"
              @click="step--"
            >
              Previous
            </button>
            <button
              v-if="step === arrQuestions.length-1 && title === 'holidays'"
              class="font-body font-bold text-white rounded-full bg-green-500 py-4 px-4"
              @click="addHolidayAnswers(captionAnswers)"
            >
              Submit and view my holiday creation
            </button>
            <button
              v-else-if="step === arrQuestions.length-1"
              class="font-body font-bold text-white rounded-full bg-green-500 py-4 px-4"
              @click="addAnswers(captionAnswers)"
            >
              Submit and view my creation
            </button>
            <button
              v-else
              class="font-body font-bold text-white rounded-full bg-primaryDark py-4 px-4"
              @click="step++"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, saveAnswersSet, saveCaption, saveEmail, saveSubjectLine } from '../db'
import NavbarLoggedIn from '../components/NavbarLoggedIn.vue'
import Popup from '../components/Popup.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Questions',
  components: {
    NavbarLoggedIn,
    Popup
  },
  data: () => ({
    title: '',
    step: 0,
    show: false,
    progressbar: '',
    arrCaptions: [],
    arrQuestions: [],
    arrEmails: [],
    arrSubjectLines: [],
    emotions: [],
    holidays: [],
    captionAnswers: [],
    displayAnswers: [],
    selectedHoliday: null,
  }),
  methods: {
    addHolidayAnswers(Q) {
      const route = this.$route.params.tool
      const tool = route.replaceAll("-", "_")
      let questions = []
      let set = null

      this.arrQuestions.forEach((question) => {
        questions.push(question.question)
      })

      const captionsPromise = this.getHolidaysCaptions(Q)
      const emailPromise = this.getHolidaysEmails(Q)
      const eslPromise = this.getHolidaysEsl(Q)
      const setPromise = saveAnswersSet(this.captionAnswers, questions, tool)

      setPromise.then((data) => {
        set = data

        return captionsPromise
      })
      .then((captions) => {
        for (let i = 0; i < captions.length; i++) {
          let temp = captions[0]
          let tempText = null
          captions.shift()
          tempText = eval("`" + temp + "`")
          captions.push(tempText)
          saveCaption(tempText, 'holidays', set)
        }

        return emailPromise
      })
      .then((emails) => {
        for (let i = 0; i < emails.length; i++) {
          let temp = emails[0]
          let tempText = null
          emails.shift()
          tempText = eval("`" + temp + "`")
          emails.push(tempText)
          saveEmail(tempText, 'holidays', set)
        }

        return eslPromise
      })
      .then((esls) => {
        if (Q[0].month) {
          Q[0] = Q[0].name
        }
        for (let i = 0; i < esls.length; i++) {
          let temp = esls[0]
          let tempText = null
          esls.shift()
          tempText = eval("`" + temp + "`")
          esls.push(tempText)
          saveSubjectLine(tempText, 'holidays', set)
        }
      })
      .then(() => {
        this.$router.push('/dashboard')
      })
    },
    getHolidaysEsl(Q) {
      return db.collection('holidays').doc(Q[0].month).get()
      .then((doc) => {
        const days = doc.data().days
        const eslPromises = []

        days.forEach((day) => {
          if (Q[0].name === day.day) {
            day.email_subject_lines.forEach((esl) => {
              const p = esl.get()
              eslPromises.push(p)
            })
          }
        })

        return Promise.all(eslPromises)
      })
      .then((eslData) => {
        const esls = []

        eslData.forEach((esl) => {
          esls.push(esl.data().text)
        })

        return esls
      })
    },
    getHolidaysEmails(Q){
      return db.collection('holidays').doc(Q[0].month).get()
      .then((doc) => {
        const days = doc.data().days
        const emailPromises = []

        days.forEach((day) => {
          if (Q[0].name === day.day) {
            day.emails.forEach((email) => {
              const p = email.get()
              emailPromises.push(p)
            })
          }
        })

        return Promise.all(emailPromises)
      })
      .then((emailsData) => {
        const emails = []

        emailsData.forEach((email) => {
          emails.push(email.data().text)
        })

        return emails
      })
    },
    getHolidaysCaptions(Q) {
      return db.collection('holidays').doc(Q[0].month).get()
      .then((doc) => {
        const days = doc.data().days
        let captionPromises = []

        days.forEach((day) => {
          if (Q[0].name === day.day) {
            day.captions.forEach((caption) => {
              const p = caption.get()
              captionPromises.push(p)
            })
          }
        })

        return Promise.all(captionPromises)
      })
      .then((captionsData) => {
        const captions = []

        captionsData.forEach((caption) => {
          captions.push(caption.data().text)
        })

        return captions
      })
    },
    addAnswers(Q) {
      if (this.captionAnswers.includes('')) {
        alert('Please make sure to add all answers!')
      } else {
        Q
        let E = []
        const route = this.$route.params.tool
        const tool = route.replaceAll("-", "_")
        let questions = []

        this.arrQuestions.forEach((question) => {
          questions.push(question.question)
        })

        const set = saveAnswersSet(this.captionAnswers, questions, tool)

        for (let i = 0; i < this.arrQuestions.length; i++) {
          let num = Math.floor(Math.random() * 3)
          if (this.arrQuestions[i].dropdown) {
            let pos = this.emotions.map(function(e) { return e.name }).indexOf(this.captionAnswers[i])
            E.push(this.emotions[pos].options[num])
          } else {
            E.push(this.captionAnswers[i])
          }
        }

        set.then((data) => {
          this.arrCaptions.forEach(() => {
            let temp = this.arrCaptions[0].text
            let tempText = null
            const type = this.arrCaptions[0].type
            this.arrCaptions.shift()
            tempText = eval("`" + temp + "`")
            this.arrCaptions.push(tempText)
            saveCaption(tempText, tool, data, type)
          })

          this.arrEmails.forEach(() => {
            let temp = this.arrEmails[0].text
            let tempText = null
            this.arrEmails.shift()
            tempText = eval("`" + temp + "`")
            this.arrEmails.push(tempText)
            saveEmail(tempText, tool, data)
          })

          this.arrSubjectLines.forEach(() => {
            let temp = this.arrSubjectLines[0].text
            let tempText = null
            this.arrSubjectLines.shift()
            tempText = eval("`" + temp + "`")
            this.arrSubjectLines.push(tempText)
            saveSubjectLine(tempText, tool, data)
          })
        })

        this.$router.push('/dashboard')
      }
    },
    getQuestions(toneOfVoice) {
      const tool = this.$route.params.tool.replaceAll("-", "_")
      const tone = toneOfVoice.replaceAll("-", "_")
      let globalData = null

      db.collection(tool).doc(tone).get()
      .then((doc) => {
        globalData = doc.data()
        const promises = []
        this.progressbar = doc.data().progressbar

        globalData.questions.forEach((question) => {
          const p = question.get()
          promises.push(p)
        })
        
        return Promise.all(promises)
      })
      .then((questionsSnapshot) => {
        questionsSnapshot.forEach((question) => {
          const rand = Math.floor(Math.random() * question.data().examples.length)
          let isDropdown = false
          if (question.data().dropdown) {
            isDropdown = true
          }
          const temp = eval("`" + question.data().question + "`")
          this.arrQuestions.push({
            question: temp,
            order: question.data().order,
            dropdown: isDropdown,
            narrative: question.data().lead_in,
            placeholder: question.data().examples[rand],
            video: question.data().video
          })
          this.captionAnswers.push('')
        })
      })
      .then(() => {
        const promises = []

        globalData.captions.forEach((caption) => {
          const p = caption.get()
          promises.push(p)
        })

        return Promise.all(promises)
      })
      .then((captionsSnapshot) => {
        captionsSnapshot.forEach((caption) => {
          this.arrCaptions.push(caption.data())
        })
      })
      .then(() => {
        if (globalData.emails) {
          const promises = []

          globalData.emails.forEach((email) => {
            const p = email.get()
            promises.push(p)
          })

          return Promise.all(promises)
        } else {
          return null
        }
      })
      .then((emailsSnapshot) => {
        if (emailsSnapshot) {
          emailsSnapshot.forEach((email) => {
            this.arrEmails.push(email.data())
          })
        }
      })
      .then(() => {
        if (globalData.email_subject_lines) {
          const promises = []

          globalData.email_subject_lines.forEach((esl) => {
            const p = esl.get()
            promises.push(p)
          })

          return Promise.all(promises)
        } else {
          return null
        }
      })
      .then((eslSnapshot) => {
        if (eslSnapshot) {
          eslSnapshot.forEach((esl) => {
            this.arrSubjectLines.push(esl.data())
          })
        }
      })
    },
    getEmotions() {
      db.collection('emotions')
        .get()
        .then((querySnapshot) => {
          this.emotions = []
          querySnapshot.forEach((emotion) => {
            let temp = []
            emotion.data().options.forEach((option) => {
              temp.push(option)
            })
            this.emotions.push({
              name: emotion.id,
              options: temp
            })
          })
        })
    },
    getHolidaysQuestions(id) {
      db.collection('holidays')
        .doc('April')
        .get()
        .then((doc) => {
          doc.data().questions.forEach((question) => {
            question.get().then((ref) => {
              let rand = Math.floor(Math.random() * ref.data().examples.length)
              this.arrQuestions.push({
                question: ref.data().question,
                holidayDropdown: ref.data().holiday_dropdown,
                narrative: ref.data().lead_in,
                placeholder: ref.data().examples[rand],
                video: ref.data().video
              })
              this.captionAnswers.push('')
            })
          })
        })
        .then(() => {
          db.collection('users')
            .doc(id)
            .get()
            .then((doc) => {
              doc.data().holidays.forEach((holiday) => {
                this.holidays.push(holiday)
              })
            })
        })
    }
  },
  computed: {
    ...mapGetters(['userData', 'user']),
    placeholder() {
      return this.arrQuestions[this.step].placeholder
    },
    calculatePercentage() {
      return 100 - Math.floor(((this.step)/(this.arrQuestions.length)) * 100)
    }
  },
  watch: {
    user(newVal) {
      if (this.title === 'holidays') {
        this.getHolidaysQuestions(newVal.data.id)
      } else {
        this.getQuestions(newVal.toneOfVoice)
      }
    }
  },
  mounted() {
    this.getEmotions()
    this.title = this.$route.params.tool.replaceAll("-", " ")
    if (this.userData) {
      if (this.title === 'holidays') {
        this.getHolidaysQuestions(this.userData.id)
      } else {
        this.getQuestions(this.user.toneOfVoice)
      }
    }
  }
}
</script>