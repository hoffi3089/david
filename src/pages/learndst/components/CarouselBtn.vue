<template>
    <div class="carousel-btn">{{ title }}</div>
</template>
<script>
    export default {
        name: 'CarouselBtn',
        props: [
             "title"
        ]
    }
</script>
<style scoped>
    .carousel-btn {
        border-radius: 20px;
        border: solid 1px lightgray;
        padding: 5px 10px;
        cursor: pointer;
    }
</style>