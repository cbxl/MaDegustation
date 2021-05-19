<template>
  <div>
    <div class="filtre">
      <div class="types">
        <h3>Types</h3>
        <label class="container">
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>Rouge
        </label>
        <label class="container">
          <input type="checkbox" />
          <span class="checkmark"></span>Blanc
        </label>
        <label class="container">
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>Rosé
        </label>
      </div>
      <div class="dish">
        <h3>Mêts</h3>
        <label class="container">
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>Viande rouge
        </label>
        <label class="container">
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>Viande blanche
        </label>
        <label class="container">
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>Poisson
        </label>
      </div>
      <div class="origin">
        <h3>Origine</h3>
        <label class="container">
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>Bordeaux
        </label>
        <label class="container">
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>Langedoc
        </label>
      </div>
    </div>
    <Card />
  </div>
</template>

<script>
import Card from "./layout/card"
export default {
  components: {
    Card,
  },
};
</script>

<style scoped>
h3 {
  color: white;
  font-family: var(--font);
  font-weight: 500;
}
label {
  color: white;
}
.filtre {
  display: grid;
  height: 20vh;
  grid-template-columns: repeat(3, 1fr);
  grid: "types dish origin";
  background: var(--red);
  margin: 20px;
  border-radius: 10px;
}

/*Types*/
.types {
  grid-area: types;
  text-align: center;
}
/* The container */
.container {
  display: block;
}

.dish {
  grid-area: dish;
  text-align: center;
}
.origin {
  grid-area: origin;
  text-align: center;
}
</style>
