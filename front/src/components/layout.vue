<template>
  <nav role="navigation">
    <div class="logo"></div>
    <h1 class="title">{{ this.name }}</h1>
    <Menu
      class="menuBurger"
      v-bind="this.$attrs"
      @openMenu="openMenu"
      @closeMenu="closeMenu"
      right
    >
      <router-link to="/">Accueil</router-link>
      <router-link to="/maCave">Ma cave</router-link>
      <router-link to="/ajoutBouteille">Ajouter une bouteille</router-link>
      <router-link to="/maBouteille">Dernier ajout</router-link>
      <router-link to="/maBouteille">La prochaine</router-link>
      <router-link to="/maBouteille">Suggestion du jour</router-link>
      <router-link to="/carnetDegustation">Cahier de degustations</router-link>
    </Menu>
  </nav>
</template>

<script>
import Menu from "./menu";
export default {
  props: ["name"],
  name: "slide",
  components: {
    Menu: Menu,
  },

  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
    closeMenu() {
      this.$emit("closeMenu");
    },
  },
};
</script>
<style scoped>
h1 {
  color: var(--grey-light);
  font-family: var(--font-title);
}
nav {
  display: grid;
  height: 10vh;
  grid-template-columns: repeat(3, 1fr);
  grid: "logo title menuBurger";
  background: var(--dark);
}

.logo {
  grid-area: logo;
  background-image: url("../assets/logo-tire-bouchon.png");
  height: 60px;
  background-size: 70px;
  background-repeat: no-repeat;
  background-position: unset;
}
.title {
  grid-area: title;
  text-align: center;
}
.menuBurger {
  grid-area: menuBurger;
}
a {
  text-decoration: none;
  color: var(--grey-light);
  font-family: var(--font-nav);
}
</style>
