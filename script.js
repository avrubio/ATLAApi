(() => {
  let btn = document.querySelector("button");
  btn.addEventListener("click", getRandomCharacter);

  async function getRandomCharacter() {
    let characterName = document.querySelector(".characterName");
    let image = document.querySelector("#image");

    let data = await axios(
      "https://last-airbender-api.fly.dev/api/v1/characters"
    );

    const characters = data.data;
    // console.log(responseFromApi);

    // console.log(btn, image, characterName);
    console.log(characters);

    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters[randomIndex];
    console.log(randomCharacter);
    image.src = randomCharacter.photoUrl;
    characterName.textContent = randomCharacter.name;
  }
})();
