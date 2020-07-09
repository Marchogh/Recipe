<template>
  <div class="home">
    <ul v-for="recipe in recipes" :key="recipe.id">
      <router-link :to="{ name: 'Recipe', params: { id: recipe.id } }">
        <li>{{ recipe.title }}</li>
      </router-link>
      <li>
        <router-link :to="{ name: 'Recipe', params: { id: recipe.id } }">
          <img :src="`${recipe.image}`" width="200" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { recipesCollection } from "../firebase";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      recipeTitle: "",
      recipeDescription: "",
      recipeIngredients: "",
      recipeImage: "",
      recipes: {}
    };
  },
  firestore() {
    return {
      recipes: recipesCollection.orderBy("createdAt", "desc")
    };
  }
};
</script>
