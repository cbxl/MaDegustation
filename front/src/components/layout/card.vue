<template>
  <div class="card">
    <h3>nom bouteille</h3>
    <div class="card-container">
      <div>
        <ul>
          <li>- date ajout</li>
          <li>- categorie</li>
          <li>- origine</li>
          <li>- contenance</li>
        </ul>
      </div>
      <div>
        <img
          src="https://png.pngtree.com/png-clipart/20201230/ourmid/pngtree-black-wine-bottle-png-image_2677334.jpg"
        />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border-radius: 10px;
  background: var(--grey-light);
  height: 158px;
  width: 158px;
  margin: 20px;
}
h3 {
  text-align: center;
}
.card-container {
  display: flex;
}
img {
  height: 50px;
  width: auto;
}
</style>
