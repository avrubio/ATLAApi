(() => {
  // API base URL
  let url = "https://last-airbender-api.fly.dev";
  // DOM elements
  let btn = document.querySelector(".randomBtn");
  let characterName = document.querySelector(".characterName");
  let image = document.querySelector("#image");

  // Event listener for the "Random Character" button
  btn.addEventListener("click", getRandomCharacter);

  // Variables to store random character information
  let randomCharacter;

  // Function to fetch and display a random character
  async function getRandomCharacter() {
    // Fetch all characters from the API
    let data = await axios(url + "/api/v1/characters");

    // Extract characters array from the response data
    let characters = data.data;

    // Loop to select a random character with a photoUrl
    do {
      randomCharacter =
        characters[Math.floor(Math.random() * characters.length)];

      // Check if the selected character has a photoUrl
      if (!randomCharacter.photoUrl) {
        // Handle the case when the selected character has no photoUrl
        console.log("Skipping character without photoUrl");
      }
    } while (!randomCharacter.photoUrl);

    // Set the random character information for display
    let randomCharacterName = randomCharacter.name;
    image.src = randomCharacter.photoUrl;
    characterName.textContent = randomCharacterName;
  }

  // Event listener for the "Search" button
  let searchBtn = document.querySelector(".btn");
  searchBtn.addEventListener("click", searchCharacter);

  // Function to search for a character by name
  async function searchCharacter() {
    // Get the character name input value
    let characterNameSearch = document.querySelector("input").value;

    try {
      // Make API call to search for characters by name
      let response = await axios(
        url + `/api/v1/characters?name=${characterNameSearch}`
      );
      let character = response.data;

      // Check if any characters are found
      if (character.length > 0) {
        // Character found
        image.src = character[0].photoUrl;
        characterName.textContent = character[0].name;
      } else {
        // No data returned from the API
        characterName.textContent =
          "Oops! This character isn't in my database.";
        // You may want to clear the image source or set a default image in this case
        image.src = "https://i.gifer.com/Syak.gif"; // or set a default image URL
      }
    } catch (error) {
      console.error("Error fetching character data:", error);
      // Handle any other errors that may occur during the API call
    }
  }
})();
