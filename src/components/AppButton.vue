<script setup>
const props = defineProps({
    text: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <el-button type="primary" class="btn">
        {{ text }}
    </el-button>

</template>

<style lang="sass" scoped>
@use "../assets/styles/index" as area;

.btn 
    background-color: #4d0690
    font-size: 17px
    padding: 20px 24px
    border-radius: 4px
</style>
