<template>
  <div class="banner">
    <div class="bannershow" v-for="item in banner">              <img :src="'http://fuss10.elemecdn.com/' + item.image_hash  + '.jpeg'" >  
        <p>{{item.name}} </p>
    </div>
    <button id="point1" class="point" @click="toFirst"></button>
    <button id="point2" class="point"></button>

  </div>
</template>


<script>

    export default{
        components: {

        },
        methods: {
          toFirst(){
              console.log(11111);
          }  
        },
        data () {
            return {
                banner:[]
            }
        },
        mounted () {
             this.http.get('/elmapi/shopping/v2/entries?latitude=37.87059&longitude=112.550667&templates[]=main_template').then(res=>{       
          if (res.data) {
              this.status = 'success';
              this.banner = res.data[0].entries;
              console.log(res.data);
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
.banner{
    width: 200vw;
    background-color: #ffffff;
    height: 11rem;
}
.bannershow{
    float: left;
    padding: 0.5rem;
}
img{
    width: 3rem;
}
p{
    font-size: 0.5rem;
    text-align: center;
    color: #666666;
}
.point{
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: black;
}
</style>
