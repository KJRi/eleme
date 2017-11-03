<template>
    <div class="location">
                <span class="fa fa-map-marker fa-1g"></span>
                <span>{{locationaddress | maplocation}}</span>
                <span class="fa fa-sort-desc"></span>
     </div>
</template>


<script>
import Vue from 'vue'

Vue.filter('maplocation',value=>{
     if (value.length >= 8) {
        return value.slice(0,7)+"..."
     } else {
        return value;
     }
 });

 
export default{
    data () {
    return {
        locationaddress:'',
    }
},
  mounted () {
      this.http.get('/elmapi/v2/pois/ww8p3nhuhtsh').then(res=>{
        console.log(res.data);
        if (res.data) {
            this.status = 'success';
            this.locationaddress = res.data.name;
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
.location{
    float: left;
    padding-left: 1rem;
}
span{
    font-size: 0.6rem;
    color: #ffffff
}
</style>
