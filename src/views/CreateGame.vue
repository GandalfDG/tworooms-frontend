<template>
  <form>
    <div class="form-group">
      <label for="playerName">Enter Your Name</label>
      <input
        v-model="name"
        type="text"
        class="form-control"
        id="playerName"
        placeholder="John Smith"
      />
    </div>
    <button @click="newGame" type="button" class="btn btn-primary">
      Create Game
    </button>
  </form>
</template>

<script>
export default {
  name: 'Create',
  data: {
    name: "",
  },
  methods: {
    newGame() {
      // websocket stuff
    }
  }
}
</script>