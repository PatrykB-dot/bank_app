<template>
   <section class="main_section" id="main_section">
    <div class="background_wrapper">
      <img src="./assets/background_image.jpg" alt="">
        </div>
        <div class="app_wrapper">
            <div class="app_content_wrapper">
                <div class="app_logo_wrapper"></div>
                <div class="app_menu_wrapper">
                    <div class="chose_app_wrapper">
                        <div class="to_register"><p>Login</p></div>
                        <div class="to_login">Register</div>
                    </div>
                    <div class="data_app_wrapper">
                        <div class="register_name">
                            <h2>Register here</h2>
                        </div>
                        <registerForm/>
                    </div>
                </div>
                <div class="app_footer_wrapper"></div>
            </div>
        </div>
    </section>
</template>

<script>
import registerForm from "./components/register.vue"

export default {
  name: 'App',
  components: {
   registerForm,
  }
}
</script>
<style>
html {
    box-sizing: border-box;
  }
*, *:before, *:after {
    box-sizing: inherit;
    margin:0;
    padding:0;
}
/* main blured background */
.main_section {
    display: flex;
    color:white;
}
.background_wrapper {
    width: 70%;
    max-height:100%; 
    max-width:100%;
    margin: auto;
    height: 100vh;
    display: flex;
}
.background_wrapper img {
    max-height:100%; 
    max-width:100%;
    margin: auto;
}
.background_wrapper::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);
}
/* end of background */
.app_wrapper {
    width: 100%;
    height: 100%;
    z-index:9;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

}
.app_content_wrapper {
    width: 50%;
    height: 80%;
    border-radius:3%;
    background-color: rgba(0, 0, 0, 0.5);
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.app_menu_wrapper {
    width: 100%;
    height: 80%;
    display:flex;
}
.app_logo_wrapper {
    width: 100%;
    height: 10%;
}
.app_footer_wrapper {
    width: 100%;
    height: 10%;
}
input {
    outline: none;
    opacity: 0.5;
    border:none;
    padding: 0.3rem;
    border-radius: 10px;
}
.chose_app_wrapper {
    width: 30%;
    height: 100%;
    border-right: 2px solid white;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.data_app_wrapper {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    letter-spacing: 2px;
    text-align: center;
    display: flex;
    flex-direction: column;
}
button {
    background-color: transparent;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px 24px;
    color:white;
    cursor: pointer;
    letter-spacing: 1px;
}
</style>

