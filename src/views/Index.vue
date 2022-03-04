<template>
  <div class="h-screen w-full h-full p-4 flex flex-col w-screen">
    <div>press red key on your keyboard or press keys with mouse</div>
   <div class="pt-4 space-y-2">
     <div class="font-medium">ToDo :</div>
     <div class="pl-6">improve ui</div>
     <div class="pl-6">add select octave</div>
     <div class="pl-6">add support multi press key</div>
     <div class="pl-6">add feature for input note and play it automatically</div>
   </div>

    <div class="flex-1 flex items-center justify-center">
    <div class="flex p-8 rounded-xl main-bg">
      <div @mousedown="pressKey(key.key)" @mouseup="releaseKey(key.key)" class="flex  -mb-16" :id="key.key" :class="[(key.type === 'white')? 'white-key':'black-key',{'spacer':key.spacer}]" v-for="(key,index) in keys" :key="index">
        <div class="flex flex-col items-center  ">
        <span class="text-red-500">{{key.key}}</span>
        <span>{{key.label}}</span>
        </div>
      </div>

    </div>
    </div>
  </div>
</template>

<script>

const keys = [
  {
    type: 'white',
    label: 'C',
    key: 'a'
  },
  {
    type: 'black',
    label: '#C',
    key: 'w'
  },
  {
    type: 'white',
    label: 'D',
    key: 's'
  },
  {
    type: 'black',
    label: '#D',
    key: 'e'
  },
  {
    type: 'white',
    label: 'E',
    key: 'd',
    spacer: true
  },
  {
    type: 'white',
    label: 'F',
    key: 'f'
  },
  {
    type: 'black',
    label: '#F',
    key: 't'
  },
  {
    type: 'white',
    label: 'G',
    key: 'g'
  },
  {
    type: 'black',
    label: '#G',
    key: 'y'
  },
  {
    type: 'white',
    label: 'A',
    key: 'h'
  },
  {
    type: 'black',
    label: '#A',
    key: 'u'
  },
  {
    type: 'white',
    label: 'B',
    key: 'j',
    spacer: true
  },
  {
    type: 'white',
    label: 'C',
    key: 'k'
  },
  {
    type: 'black',
    label: '#C',
    key: 'o'
  },
  {
    type: 'white',
    label: 'D',
    key: 'l'
  },
  {
    type: 'black',
    label: '#D',
    key: 'p'
  },
  {
    type: 'white',
    label: 'E',
    key: ';'
  }

]
const validKeys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k', 'o', 'l', 'p', ';']

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      keys,
      validKeys,
      pressed: false
    }
  },
  mounted () {
    window.addEventListener('keydown', (event) => this.pressKey(event.key))
    window.addEventListener('keyup', (event) => this.releaseKey(event.key))
  },
  methods: {
    pressKey (key) {
      if (!this.pressed && this.validateKey(key)) {
        this.pressed = true
        const audio = new Audio()
        audio.src = require(`../assets/mp3/${key}.mp3`)
        audio.play()
        const elm = document.getElementById(key)
        if (elm) {
          elm.classList.add('active-key')
        }
      }
    },
    releaseKey (key) {
      if (this.pressed && this.validateKey(key)) {
        this.pressed = false
        const elm = document.getElementById(key)
        if (elm) {
          elm.classList.remove('active-key')
        }
      }
    },
    // to prevent numbers and utf-8 languages
    validateKey (key) {
      return validKeys.includes(key)
    }
  }
}
</script>
