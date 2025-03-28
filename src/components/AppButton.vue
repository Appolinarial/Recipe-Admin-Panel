<script setup>
const props = defineProps({
    text: {
        type: String,
        default: '',
    },
    circle: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <el-button v-if="!circle" type="primary" class="btn">
        {{ text }}
    </el-button>
    <el-button v-else :icon="icon" type="primary" circle class="circle"/>
</template>

<style lang="sass" scoped>
@use "../assets/styles/index" as area

.btn 
    background-color: #4d0690
    font-size: 17px
    padding: 20px 24px
    border-radius: 4px

.circle
    background-color: #4d0690
    font-size: 16px 
</style>
