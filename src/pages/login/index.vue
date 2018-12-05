<template>
  <div class="login-page-main">
    <div class="logo">
      <router-link to="/">
        <img height="35" src="images/logo.png" alt="">
      </router-link>
    </div>
    <div class="main-container">
      <Login :isLoginPage="true"></Login>
    </div>
  </div>
</template>

<script>
import Login from '@/components/login';
export default {
  name: 'login',
  components: {
    Login
  },
  data(){
    return {
      
    }
  },
  computed: {
    
  },
  mounted(){
    
  },
  methods: {
    
  }
}
</script>

<style scoped>
  .login-page-main{
    height: calc(100vh + 1px);
  }
  .main-container{
    width: 300px;
    margin: 0 auto;
  }
</style>
