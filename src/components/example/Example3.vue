<template>
  <div class="container">
    <div>
      answer is: {{ answer }}
    </div>
    <md-button class="md-raised md-warn" @click.native="call">call api</md-button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data: function () {
      return {
        answer: 'NA'
      }
    },
    methods: {
      call: function () {
        let _this = this
        axios.get('https://yesno.wtf/api')
        .then(function (response) {
          _this.answer = response.data.answer
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 20px;
  }
</style>
