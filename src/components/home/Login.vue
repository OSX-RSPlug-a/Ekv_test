<template>
      
    <div class="container1">

        <h1><img src="https://avatars2.githubusercontent.com/u/38920488?s=200&v=4" />
        <br/>Eskive</h1>

        <form @submit.prevent="pressed">
   
            <input type="email" name="email" placeholder="Email Address" required>
   
            <input type="password" name="password" placeholder="Password" required>
   
            <button @click="signIn">Login</button>
   
        </form>
        <div class="error" v-if="error">!{{error.message}}!</div>
    </div>

</template>

<script>
export default {
  name: 'Login',
   methods: {
    signIn() {
      this.$router.replace({ name: "Dashboard" });
    }
  }
}
</script>

<style scoped lang="scss">

  .container1 {
        max-width: 450px;
        margin: auto;
        margin-top: 25vh;
        border-top: 5px solid #435757;
        background: #ddd;
        box-shadow: 10px 10px 0 0px rgba(0, 0, 0, .1);
        user-select: none;
        text-align: center;
    }

    .container1 > h1 {
        margin: 0 0 20px 0;
        padding: 20px;
        background-color: rgba(255, 255, 255, .4);
        font-size: 1.8em;
        text-align: center;
    }

    .container1 i {
        display: inline-block;
        color: #66beff;
        font-size: 40px;
    }

    input[type="email"],
    input[type="password"] {
        outline: none;
        height: 40px;
        font-size: 14px;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        margin-bottom: 8px;
        width: 90%;
        background-image: url("https://a2.muscache.com/airbnb/static/signinup/text-field-icons-9c18e4e23864cb33a8f0f7c32c0b86ee.png");
        background-repeat: no-repeat;
    }

    input[type="email"] {
        background-position: right -33px;
    }

    .container1 img {
        height: 50px;
        width: 50px;
    }

    input[type="password"] {
        background-position: right -77px;
    }

    .container1 button {
        margin: 0 0 20px 0;
        border: 1px solid;
        color: #fff;
        border-radius: 2px;
        border-color: #ff5a5f;
        border-bottom-color: #e00007;
        background-color: #ff5a5f;
        padding: 9px 27px;
        font-size: 16px;
        width: 90%;
    }

    .container1 button:hover {
        opacity: 0.6;
    }

    .container1  .error {
        margin-top: 2vh;
        background: #ff5a5f;
    }

</style>
