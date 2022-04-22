<template>

 <div class="form_wrapper">
    <FormKit
      type="text"
      name="username"
      v-model="username"
      label="Username"
      />
      <FormKit
      type="password"
      name="password"
      v-model="password"
      label="Password"
      />
      <FormKit type="submit" label="Sign up" class="submit_button" />
   </div>
</template>

<script>

export default {
  name: "registerComponent",
}
</script>

<style scoped>
.form_wrapper {
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
}
button {
  padding: 10px;
}
</style>