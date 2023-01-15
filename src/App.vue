<template>
  <h1>{{ title }}</h1>
  <router-view></router-view>
</template>

<script>
import axios from 'axios';
  export default {
    name: 'App',
    data() {
        return {
            title: 'Hello Vue',
            apiBaseUrl: 'http://localhost:8000/api',
            posts: []
        }
    },
    mounted(){
      axios.get(`${this.apiBaseUrl}/posts`).then((response) => {
            console.log(response);
            if (response.data.success) {
                this.posts = response.data.posts;
            } else {
                // redirect alla pagina 404
                this.$router.push({ name: 'not-found' })
            }
        });
    }
    }
  
</script>

<style lang="scss" scoped>

</style>