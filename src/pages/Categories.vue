<script setup>
import { ref, computed } from 'vue'
import { useRootStore } from '@/stores/root';
import AppLayout from '@/layouts/AppLayout.vue';
import AppButton from '@/components/AppButton.vue';


const rootStore = useRootStore()
const categories = computed(() => rootStore.categories)
</script>

<template>
    <AppLayout>
        <template #title>Categories</template>
        <template #controls>
            <AppButton text="Add Category"/>
        </template>
        <template #inner>  
            <el-table :data="categories" style="width: 100%;">
                <el-table-column prop="strCategory" label="Category"/>
            </el-table>
        </template>
    </AppLayout>
</template>
