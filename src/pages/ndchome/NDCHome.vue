<template>
  <div class="container construction">
    <div class="title">UNDER CONSTRUCTION</div>
    <img src='../../assets/construction.png' width="300" alt="">
    <div class="desc">Website under construction!</div>
  </div>
</template>

<script>
export default {
  name: 'NDCHome',
  // Component logic here
};
</script>

<style scoped>
.construction {
  width: 100%;
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;  
  gap: 1em;


  .title {
    text-align: center;
    font-size: 3em;
    font-weight: 700;
  }
  .desc {
    text-align: center;
    font-size: 1.3em;
    font-weight: 600;
    font-style: italic;
  }
    
  @media screen and (max-width: 669px) {
      .title {
        font-size: 2em;
      }
      .desc {
        font-size: 1em;
      }
   }
}
</style>
