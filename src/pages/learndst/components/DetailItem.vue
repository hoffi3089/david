<template>
    <div>
        <div class="detail-btn" :style="{backgroundColor: bgColor}">{{ title }}</div>
    </div>
</template>

<script>
    export default {
        name: 'DetailItem',
        props: [
             "title", "bgColor"
        ]
    }

    
</script>

<style scoped>
    .detail-btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        color: white;
        padding: 0.4em 1.5em;
        margin: 0.4em 0.8em;
        font-size: 1vw;
    }
    @media screen and (max-width: 669px) {
            .detail-btn {
                margin: 10px 0;
                font-size: 1em;
            }
        }
</style>