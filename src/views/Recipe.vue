<template>
  <div>
    <h1>{{ recipe.title }}</h1>
    <h3>{{ recipe.de }}</h3>
    <img :src="`${recipe.image}`" width="500" />
    <p>{{ recipe.ingredients }}</p>
    <p>{{ recipe.description }}</p>
  </div>
</template>

<script>
import { recipesCollection } from "../firebase";

export default {
  name: "Recipe",
  components: {},
  data() {
    return {
      recipeId: this.$route.params.id,
      recipe: {}
    };
  },
  created() {
    this.getRecipeData(this.recipeId).then(response => {
      this.recipe = response;
    });
  },
  methods: {
    async getRecipeData(resId) {
      try {
        let recipe = {};
        let resSnap = await recipesCollection.doc(resId).get();
        recipe = resSnap.data();
        return recipe;
      } catch (e) {
        return {
          errorMsg: e
        };
      }
    }
  }
};
</script>
