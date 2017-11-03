<template>
  <div class="hot-word">
      <div id="word">
     <a href="#" v-for="item in hotword"> {{item.word}} </a>
  </div>
  </div>
</template>

<script>
    export default{
        data () {
            return {
                hotword:[]
            }
        },
        mounted () {
            this.http.get('/elmapi/shopping/v3/hot_search_words?latitude=37.87059&longitude=112.550667').then(res=>{
        
        if (res.data) {
            this.status = 'success';
            this.hotword = res.data;console.log(res.data);
        } else {
            this.status = 'fail';
        }
    },err=>{
        console.log(err);
        this.status = 'fail'
    });
        }
    }
</script>

<style scoped>
.hot-word{
    float: left;
    overflow-x: auto;
    width: 90vw;
    margin: 0 5vw;
}
#word{
    width: 120vw;
}
  a{
      font-size: 0.5rem;
      color: #ffffff;
      margin: 0.1rem;
  }
</style>
