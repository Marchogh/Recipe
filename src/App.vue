<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/recipe">Recipe</router-link>
    </div>
    <router-view />
    <form>
      <label for="title">Title:</label>
      <input type="text" v-model="recipeTitle" />
      <label for="title">Image url:</label>
      <input type="text" v-model="recipeImage" />
      <label for="description">Description:</label>
      <textarea v-model="recipeDescription"></textarea>
      <label for="ingredients">Ingredients:</label>
      <textarea v-model="recipeIngredients"></textarea>
      <button type="submit" @click.prevent="addRecipe()">ADD</button>
    </form>
    <ul v-for="recipe in recipes" :key="recipe.id">
      <li>{{ recipe.title }}</li>
      <li>{{ recipe.description }}</li>
      <li>{{ recipe.ingredients }}</li>
      <li>
        <img :src="`${recipe.image}`" width="200" />
      </li>
    </ul>
  </div>
</template>

<script>
import { recipesCollection } from "./firebase";

export default {
  name: "app",
  data() {
    return {
      recipeTitle: "",
      recipeDescription: "",
      recipeIngredients: "",
      recipeImage: "",
      recipes: []
    };
  },
  firestore() {
    return {
      recipes: recipesCollection.orderBy("createdAt", "desc")
    };
  },
  methods: {
    addRecipe() {
      recipesCollection
        .add({
          title: this.recipeTitle,
          image: this.recipeImage,
          description: this.recipeDescription,
          ingredients: this.recipeIngredients,
          createdAt: new Date()
        })
        .then(function(docRef) {
          console.log("document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.log("Error adding document:", error);
        });
    }
  }
};
</script>

<style lang="scss">
:root {
  $font-size: 26px;
}

body {
  font-size: $font-size;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
