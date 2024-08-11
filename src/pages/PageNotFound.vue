<template>
    <div class="container">
        <div class="not-found">
            <img src="../assets/404.png" alt="" width="400">
            <div class="h1">Page Not Found!</div>
            <router-link to="/" class="link">Go to Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageNotFound'
}
</script>

<style>
.not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    .link {
        background-color: rgb(56, 56, 56);
        border: none;
        color: white;
        padding: .5em 1.5em;
        border-radius: .3em;
        text-decoration: none;
    }
    img {
        margin-top: 2em;
    }
}
</style>