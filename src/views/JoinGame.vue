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
      <label for="accessCode">Enter Game Access Code</label>
      <input
        v-model="accessCode"
        type="text"
        class="form-control"
        id="accessCode"
        placeholder="123ABC"
      />
    </div>
    <button @click="join" type="button" class="btn btn-primary">
      Join Game
    </button>
  </form>
</template>

<script>
export default {
  name: 'Join'
}
</script>