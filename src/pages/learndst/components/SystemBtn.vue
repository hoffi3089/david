<template>
    <div>
        <div class="system-btn" :style="{width: size, height: size, backgroundColor: bgColor}">{{ title }}</div>
    </div>
</template>

<script>
    export default {
        name: 'SystemBtn',
        props: [
             "title", "size", "bgColor"
        ]
    }

    
</script>

<style scoped>
    .system-btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        margin: 0.8em;
        font-size: 1vw;
    }
    @media screen and (max-width: 669px) {
      .system-btn {
        width: 5em !important;
        height: 5em !important;
        font-size: 1em;
        margin: 10px;
      }
   }
   @media screen and (min-width: 1700px) {
      .system-btn {
        font-size: 1em;
      }
   }
</style>