<template>
    <div class="main">
        <styled-header />
        <router-view />
    </div>
</template>
  
<script>
import StyledHeader from './StyledHeader.vue';

export default {
    name: 'VueLayout',
    components: {
        StyledHeader,
    },
};
</script>
  
<style scoped>
.main {
    width: 100%;
    display: 'flex';
    flex-direction: column;
}
</style>
  