<template>
  <div class="recommand">
      <h5 style="padding-left: 15px;">推荐商家</h5>
      <div v-for="item in recom" class="eachRec">
                <img v-if="item.image_path.slice(32)=='png'" :src="'http://fuss10.elemecdn.com/'+item.image_path+'.png'" style="float: left;" alt="">
               <img v-if="item.image_path.slice(-4) =='jpeg'" :src="'http://fuss10.elemecdn.com/'+item.image_path+'.jpeg'" style="float: left;" alt=""> 
          <div style="float: left;padding-top: 15px;width: calc(100vw - 140px)">
          	<div style="height: 110px; width: 100%;border-bottom: 1px dashed #EEEEEE;">         	
              <div style="float: left;">
                  <h5>{{item.name}}</h5>
                  <p>{{item.rating}} 月售{{item.recent_order_num}}单</p>
                  <p>￥{{item.float_minimum_order_amount}}元起送 | 配送费￥{{item.float_delivery_fee}}元</p>

              </div>

              <div style="float: right;">
                  <span>{{item.distance}}m | {{item.order_lead_time}}分钟</span>
              </div>
              </div>

              <div v-for="act in item.activities" >
                  <i v-bind:style="{ color: '#'+act.icon_color}">{{act.icon_name}}</i>  
                  <p>{{act.name}}1</p>
              </div>
              <p style="float: right;">{{item.activities.length}}个活动</p>

          </div>

      </div>
  </div>
</template>

<script>
export default {
   data () {
            return {
                recom:[]
            }
        },
        mounted () {
             this.http.get('/elmapi/shopping/restaurants?latitude=37.87059&longitude=112.550667&offset=0&limit=20&extras[]=activities&terminal=h5&extra_filters=home').then(res=>{       
          if (res.data) {
              this.status = 'success';
              this.recom = res.data;
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
	.recommand{
		background-color: #FFFFFF;
		margin-top: 20px;
		padding: 20px 0px;
	}
	.eachRec{
		width: 100vw;
		height: 200px;
		background-color: #FFFFFF;
		border-bottom: 1px solid #EEEEEE;
		overflow: hidden;
	}
 img{
     width: 100px;
     height: 100px;
     margin: 20px 15px;
 }
 h5{
 	font-size: 22px;
 	font-weight: 500;
 }
 p,span,i{
 	font-size: 15px;
 	color: #666666;
 }
</style>
