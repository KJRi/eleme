<template>
  <div class="weather">
     <h5 >{{temptrue.temperature+"°"}}</h5>  
     <img src="//fuss10.elemecdn.com/9/b9/c8e482821be2080edcffbb3a8d376png.png?imageMogr/thumbnail/!69x69r/gravity/Center/crop/69x69 ">
      <p >{{temptrue.description}}</p>
  </div>
</template>

<script>
    export default{
        data () {
            return {
                temptrue:{}
            }
        },
        mounted () {
             this.http.get('/elmapi/bgs/weather/current?latitude=37.87059&longitude=112.550667').then(res=>{
        if (res.data) {
            this.status = 'success';
            this.temptrue = res.data;
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
.weather{
    float: right;
    position: relative;
    padding: 0.3rem;
    color: white;
    font-size: 0.5rem;
}

img{
  width: 1rem;
  float: right;
  margin-top: -0.5rem;
}
p{

    display: block;
    float: left;
}

</style>
