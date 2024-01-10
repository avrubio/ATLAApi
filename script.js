(() => {
  let btn = document.querySelector(".button-85");
  btn.addEventListener("click", getRandomCharacter);
  let data;
  let characters;

  async function getRandomCharacter() {
    let characterName = document.querySelector(".characterName");
    let image = document.querySelector("#image");

    data = await axios("https://last-airbender-api.fly.dev/api/v1/characters");

    characters = data.data;

    console.log(characters);

    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters[randomIndex];
    console.log(randomCharacter);
    image.src = randomCharacter.photoUrl;
    characterName.textContent = randomCharacter.name;
  }

  let btnAllies = document.querySelector(".button-allies-keyframe");

  btnAllies.addEventListener("click", getAllies);
  function getAllies(characters) {
    console.log(data);
  }
  let btnEnemies = document.querySelector(".button-enemies-keyframe");
})();
