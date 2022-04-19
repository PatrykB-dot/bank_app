<template>
  <div class="form_wrapper">
    <form action="http://localhost:5000/api/users/" class="login_form" id="loginForm" name="loginForm" >
    <label for="username">Username</label>
    <input type="text" name="username" id="username"/> <br><br>
    <label for="password">Password</label>
    <input type="text" name="password" id="password"/><br><br>
    <button type="submit" value="Submit" id="submit_button">Submit</button>
    </form>
   </div>
</template>

<script>
export default {
  name: 'registerForm',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
