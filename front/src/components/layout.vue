<template>
  <nav role="navigation">
    <div class="logo"></div>
    <h1 class="title">Accueil</h1>
    <Menu
      class="menuBurger"
      v-bind="this.$attrs"
      @openMenu="openMenu"
      @closeMenu="closeMenu"
      right
    >
      <a href="#">Accueil</a>
      <a href="#">Ma cave</a>
      <a href="#">Ajouter une bouteille</a>
      <a href="#">Dernier ajout</a>
      <a href="#">La prochaine</a>
      <a href="#">Suggestion du jour</a>
      <a href="#">Cahier de degustations</a>
    </Menu>
  </nav>
</template>

<script>
import Menu from "./menu";
export default {
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
}
nav {
  display: grid;
  height: 70px;
  grid-template-columns: repeat(3, 1fr);
  grid: "logo title menuBurger";
  background: var(--dark);
}

.logo {
  grid-area: logo;
  position: relative;
  background-size: cover;
  background-image: url("../assets/logo-tire-bouchon.png");
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
}
</style>
