<template>
    <div class="home">
      
      <header-home></header-home>
      <banner></banner>
      <flex></flex>
      <recommand></recommand>
    </div>
  </template>
  
  <script>
  import HeaderHome from './Header/HeaderHome'
  import Banner from './Body/Banner'
  import Flex from './Body/Flex'
  import Recommand from './Body/Recommand'
export default{
  components: {
    HeaderHome,Banner,Flex,Recommand
  }

}
</script>

  

  <style scoped>
.home{
  overflow-x: hidden;
}
  </style>