<template>
  <div>
    <div class="container" id="my-cellar">
      <div class="text">ma cave</div>
    </div>
    <div class="row">
      <div class="container" id="last-add">
        <div class="text">dernier ajout</div>
      </div>
      <div class="container" id="next-one">
        <div class="text">La prochaine ?</div>
      </div>
    </div>
    <div class="container" id="suggestion-of-day">
      <div class="text">Suggestion du jour</div>
    </div>
    <div class="container" id="degustation-book">
      <div class="text">Cahier de degustation</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  color: white;
}
.container {
  border: solid 1px;
  border-color: var(--grey-light);
  border-radius: 10px;
  margin: auto;
  margin-bottom: 2vh;
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 5px;
}
.text {
  color: var(--grey-light);
}
.row {
  display: flex;
  justify-content: center;
}

#my-cellar {
  box-sizing: border-box;
  width: 85%;
  height: 168px;
  background-image: url("../assets/ma-cave.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#last-add {
  box-sizing: border-box;
  width: 138px;
  height: 152px;
  background-image: url("../assets/dernier-ajout.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#next-one {
  box-sizing: border-box;
  width: 138px;
  height: 152px;
  background-image: url("../assets/la-prochaine.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#suggestion-of-day {
  box-sizing: border-box;
  width: 85%;
  height: 77px;
  background-image: url("../assets/suggestion.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 4vh;
}
#degustation-book {
  box-sizing: border-box;
  width: 85%;
  height: 158px;
  background-image: url("../assets/cahier-degustation.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
