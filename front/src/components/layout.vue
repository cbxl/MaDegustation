<template>
  <nav role="navigation">
    <div class="logo"></div>
    <h1 class="title">Accueil</h1>
    <div class="burger">
      <div class="icons">
        <i v-if="!checked" class="fa fa-bars fa-2x" @click="toggle" />
        <i v-if="checked" class="fas fa-times" @click="toggle"></i>
      </div>
      <ul v-show="checked" class="menu">
        <a href="#"><li>Ma cave</li></a>
        <a href="#"><li>Ajouter une bouteille</li></a>
        <a href="#"><li>Dernier ajout</li></a>
        <a href="#"><li>La prochaine</li></a>
        <a href="#"><li>Suggestion du jour</li></a>
        <a href="#"><li>Cahier de dégustations</li></a>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    toggle() {
      this.checked = !this.checked;
    },
  },
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
