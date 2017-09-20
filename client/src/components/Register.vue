<template>
  <div class="register">
    <h1>Register here:</h1>
    <br />
    <input
      type="email"
      name="email"
      placeholder="email..."
      v-model="email"
    />
    <br />
    <input
      type="password"
      name="password"
      placeholder="your password..."
      v-model="password"
    />
    <br />
    <button
      @click="newRegister"
    >Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Users',
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async newRegister() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
