<template>
  <nav role="navigation">
    <div class="logo"></div>
    <h1 class="title">Accueil</h1>
    <Slide right>
      <a href="#">Ma cave</a>
      <a href="#">Ajouter une bouteille</a>
      <a href="#">Dernier ajout</a>
      <a href="#">La prochaine</a>
      <a href="#">Suggestion du jour</a>
      <a href="#">Cahier de dégustations</a>
    </Slide>
  </nav>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  components: {
    Slide,
  },
  data() {
    return {
      checked: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
nav {
  display: grid;
  height: 70px;
  grid:
    "logo title burger" auto
    / 70px auto;
  background: grey;
}

.logo {
  grid-area: logo;
  background: black;
  size: 50px;
  color: rgb(235, 18, 18);
}
.title {
  grid-area: title;
  text-align: center;
}
.burger {
  grid-area: burger;
  display: block;
  margin: auto;
}

ul {
  flex-direction: column;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: black;
}
.menu {
  position: absolute;
  z-index: 1;
}
</style>
