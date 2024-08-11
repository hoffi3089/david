<template>
    <div class="select" v-for="(i, k) in options" :key="k">
        <div class="title">{{ i.title }}</div>
        <select v-model="selected">
            <option>True</option>
            <option>False</option>
        </select>
        <div class="warning">captured from excel</div>
    </div>
</template>

<script>

export default {
    name: 'SelectField',
    props: ["options"]
};
</script>

<style scoped>
/* Your styles for the select field */
.select {
    padding: .5em 1em;
    display: flex;
    flex-direction: column;
    gap: .2em;

    .title {
        font-size: 12px;
        color: var(--primary);
        font-weight: 700;
    }

    select {
        width: 100%;
        padding: .5em 1em;
        font-size: 14px;
        border-radius: .3em;
        outline: none;
        border: 1px solid var(--gray)
    }

    .warning {
        font-size: 13px;
        color: var(--purple);
        font-weight: 600;
    }
}</style>
