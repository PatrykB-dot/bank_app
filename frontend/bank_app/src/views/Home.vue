<template>
 <section class="main_section" id="main_section">
    <div class="background_wrapper">
      <img src="..\assets\background_image.jpg" alt="">
        </div>
        <div class="app_wrapper">
            <div class="app_content_wrapper">
                <div class="app_logo_wrapper"></div>
                <div class="app_menu_wrapper">
                    <div class="chose_app_wrapper">
                            <div class="nav_link_wrapper">
                            <router-link class="nav-link" to="/">Home</router-link>
                            </div>
                            <div class="nav_link_wrapper">
                            
                            </div>
                    </div>
                    <div class="data_app_wrapper">
                        <div class="welcome_wrapper">
                            <div>
                                <h1>Welcome !</h1>
                            </div>
                            <div>
                            <p>Already user?</p><br>
                            <p>Log in</p><br>
                            <p>Dont have account?</p><br>
                            <router-link class="nav-link" to="/register">Register</router-link>
                            </div>
                        </div>
                        <router-view/>
                    </div>
                </div>
                <div class="app_footer_wrapper"></div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  name: "homeComponent",
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
html {
    box-sizing: border-box;
    font-family: "Open Sans";
  }
*, *:before, *:after {
    box-sizing: inherit;
    margin:0;
    padding:0;
    font-family: 'Open Sans';
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
.chose_app_wrapper {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    font-size:1.2rem;
    border-right: 2px solid white;
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

.register_name {
    margin-bottom:20px;
}
.nav-link {
    text-decoration: none;
    color:white;
}
.nav_link_wrapper {
    margin-bottom: 20px;
    border-bottom: 2px solid white;
}
button {
    padding:5px 10px;
    border-radius: 8px;
    background-color: #555555;
    color:white;
}
.welcome_wrapper {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 50%;
}
</style>