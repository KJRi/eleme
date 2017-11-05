<template>
  <div class="recommand">
      <h5 style="padding-left: 15px;">推荐商家</h5>
      <div class="loading">
                <span v-if="status == 'loading'" class="fa fa-spinner fa-pulse fa-3x fa-fw"></span>
                <span v-if="status == 'fail'">加载失败...</span>
            </div>
      <div v-for="item in recom" class="eachRec" v-if="status == 'success'"  >
                <img v-if="item.image_path.slice(32)=='png'" :src="'http://fuss10.elemecdn.com/'+item.image_path+'.png'" style="float: left;" alt="">
               <img v-if="item.image_path.slice(-4) =='jpeg'" :src="'http://fuss10.elemecdn.com/'+item.image_path+'.jpeg'" style="float: left;" alt=""> 
          <div style="float: left;padding-top: 15px;width: calc(100vw - 145px);position: relative;" >
          	<div style="height: 110px; width: 100%;border-bottom: 1px dashed #EEEEEE;">         	
              <div style="float: left;">
                  <h5>{{item.name}}</h5>
                  <p style="margin-top:10px">{{item.rating}} 月售{{item.recent_order_num}}单</p>
                  <div style="margin-top:10px">
                  <p style="float:left">￥{{item.float_minimum_order_amount}}元起送 | 配送费￥{{item.float_delivery_fee}}元</p>
                  <span style="position:absolute; right:0;">{{item.distance}}m | {{item.order_lead_time}}分钟</span>
                    </div>
              </div>

              </div>

              <div v-for="act in item.activities" style="line-height: 20px;">
                  <i v-bind:style="{ backgroundColor: '#'+act.icon_color} " style="color: #FFFFFF;display: inline;">{{act.icon_name}}</i>  
                  <p style="display: inline;">{{act.name}}</p>
              </div>
             <p style="position: absolute;top: 130px;right: 0;" @mouseout="backMenu" @mouseover="dropMenu" >{{item.activities.length}}个活动	<span class="fa fa-angle-down"></span></p>

          </div>

          

      </div>
      <div v-if="status == 'success'" class="load-more">
                <span class="fa fa-spinner fa-pulse fa-2x fa-fw"></span>
                正在加载更多
            </div>
  </div>
</template>

<script>

export default {
 
   data () {
            return {
                 status:'loading',
                recom:[],
                isLoading: false,
                // activ: activno
               
            }
        },
        methods: {
         backMenu(){
             var arrRec =  document.getElementsByClassName('eachRec');
             for(var i = 0;i<arrRec.length;i++){
                 arrRec[i].style.height = "180px"
             }
         },
         dropMenu(){
             var arrRec =  document.getElementsByClassName('eachRec');
             for(var i = 0;i<arrRec.length;i++){
                 arrRec[i].style.height = "100%"
             }
         },
          didScroll(){
            var bodyH = document.body.clientHeight;//页面的总高度
            var scrollTop = document.scrollingElement.scrollTop;//页面滚动时被卷去的高度
            var windowH = document.documentElement.clientHeight;//可视页面的高度
            if (windowH+scrollTop >= bodyH-10) {
                console.log('加载更多');
                if (!this.isLoading) {
                    this.loadMore();
                }
            }
          }, 
          loadMore(){
            this.isLoading = true;
            this.http.get('/elmapi/shopping/restaurants?latitude=37.87059&longitude=112.550667&offset=0&limit=20&extras[]=activities&terminal=h5&extra_filters=home',{
                params:{offset:this.recom.length/20}
            })
            .then(res=>{
                    this.recom = this.recom.concat(res.data);
                this.isLoading = false;
            },err=>{
                this.isLoading = false;   
            }) 
          }
        },
        mounted () {
            window.onscroll = this.didScroll;
             this.http.get('/elmapi/shopping/restaurants?latitude=37.87059&longitude=112.550667&offset=0&limit=20&extras[]=activities&terminal=h5&extra_filters=home').then(res=>{       
          if (res.data) {
              this.status = 'success';
              this.recom = res.data;
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
		height: 180px;
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
 .loading{
    text-align: center;
}
.load-more{
    text-align: center;
    font-size: 0.5rem;
}

</style>
