<template>
    <div class="header-home">
      <location></location> 
      <weather></weather> 
      <search-input></search-input>
      <hot-word></hot-word>
    </div>
  </template>
  
  <script>
import Location from './Location'
import Weather from './Weather'
import SearchInput from './SearchInput'
import HotWord from './HotWord'
export default{
    components: {
      Location,Weather,SearchInput,HotWord
    }
}
</script>

  

  <style scoped>
 .header-home{
   width: 100vw;
   height: 6rem;
   background-image: linear-gradient(90deg,#0af,#0085ff); 
 }
  </style>