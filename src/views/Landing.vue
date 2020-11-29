<template>
  <h1>Two Rooms and a Boom</h1>
  <button @click="createGame">Create Game</button>
  <button @click="joinGame">Join Game</button>
</template>

<script>
export default {
  name: 'Landing',
  methods: {
    createGame() {
      this.$router.push('/create/')
    },
    joinGame() {
      this.$router.push('/join/')
    }
  }
}
</script>