<template>
  <section>
    <h1>Add a recipe</h1>
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
    <p v-if="displayMessage">Recipe successfully added</p>
  </section>
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
      displayMessage: false
    };
  },
  methods: {
    addRecipe() {
      let self = this;
      recipesCollection
        .add({
          title: this.recipeTitle,
          image: this.recipeImage,
          description: this.recipeDescription,
          ingredients: this.recipeIngredients,
          createdAt: new Date()
        })
        .then(function(docRef) {
          self.displayMessage = true;
          console.log("document written with ID: ", docRef.id);
          return self.displayMessage;
        })
        .catch(function(error) {
          console.log("Error adding document:", error);
        });
    }
  }
};
</script>

<style></style>
