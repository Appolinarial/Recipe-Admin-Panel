cript setup>
import AppLayout from '@/layouts/AppLayout.vue';
import AppButton from '@/components/AppButton.vue';
</script>

<template>
    <AppLayout>
        <template #title>Рецепты</template>
        <template #controls>
            <AppButton text="Добавить рецепт"/>
        </template>
    </AppLayout>
</template>
