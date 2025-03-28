<script setup>
import { ref, onMounted } from 'vue'
import { RecipeService } from '@/services';
import { ROUTES_PATHS } from '@/constants'
import AppLayout from '@/layouts/AppLayout.vue';
import AppButton from '@/components/AppButton.vue';
import AppLoader from '@/components/AppLoader.vue';

const recipes = ref()
const isLoading = ref(false)

const fetchRecipes = async () => {
    try{
        isLoading.value = true
        recipes.value = await RecipeService.getRecipesByLetter()
        isLoading.value = false
    }
    catch{}
};

const getRecipePath = (id) => {
    return `${ROUTES_PATHS.RECIPE.split(':')[0]}${id}`
}

onMounted(fetchRecipes)
</script>

<template>
    <AppLayout>
        <template #title>Recipes</template>
        <template #controls>
            <router-link :to="getRecipePath('new')"><AppButton text="Add Recipe"/></router-link>           
        </template>
        <template #inner>
            <AppLoader v-if="isLoading"/>
            <div v-else class="wrapper">
                <el-table :data="recipes" style="width: 100%">
                    <el-table-column prop="idMeal" label="Id" />
                    <el-table-column label="Image">
                        <template #default="scope">
                            <router-link :to="getRecipePath(scope.row.idMeal)">
                                <img :src="scope.row.strMealThumb" class="image"/>
                            </router-link>
                        </template>
                    </el-table-column>
                    <el-table-column prop="strMeal" label="Name" />
                    <el-table-column prop="strArea" label="Area" />
                    <el-table-column prop="strCategory" label="Category" />
                    <el-table-column prop="strTags" label="Tags" >
                        <template #default="scope">
                            <template v-if="scope?.row?.strTags">
                                <el-tag 
                                v-for="(tag, key) in scope.row.strTags.split(',')"
                                :key="key"
                                type="primary" class="tag">
                                {{ tag }}
                                </el-tag>
                            </template>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </template>
    </AppLayout>
</template>

<style lang="sass" scoped>
@use "../assets/styles/index" as area

.tag
    margin: 2px 3px

.image 
    width: 70px
    height: 70px
</style>
