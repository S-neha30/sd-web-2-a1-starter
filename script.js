"use strict";

// sample data - expanded Star Wars characters with varied ages
const characters = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

const brokenCharacters = [
  { id: 1, age: 30 },
  { id: 2, age: 50 },
  { id: 3 },
];

//function to create list item

function createListItem(text) {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
}

//function to display error message

function showError(message, errorContainerId) {
  console.error(message);

  const errorContainer = document.getElementById(errorContainerId);
  const p = document.createElement("p");
  p.textContent = message;

  errorContainer.appendChild(p);
}


// 1. Iterate through the characters array and output each character's name to the console using console.log(). Then, dynamically create <li> elements for each character name and append them to the HTML unordered list element with the id "names-list".

const namesList = document.getElementById("names-list");

characters.forEach(character => {
  console.log(character.name);
  namesList.appendChild(createListItem(character.name));

});


// 2. Filter the characters array to find only those characters whose age property is less than 40. Log each filtered character's name to the console. Then, dynamically create <li> elements for each filtered character and append them to the HTML unordered list element with the id "young-characters-list".
 const youngCharactersList = document.getElementById(
  "young-characters-list"
);

const youngCharacters = characters.filter(
  character => character.age < 40
);

youngCharacters.forEach(character => {
  console.log(character.name);
  youngCharactersList.appendChild(createListItem(character.name));
});


// 3. Build a reusable function that accepts an array of character objects as a parameter. Inside the function, iterate through the array and extract each character's name property. Dynamically generate <li> elements for each name and append them to a target HTML list element. Call this function with the characters array and render the results in the unordered list with id "function-list".

function renderCharacterList(array) {
  const list = document.getElementById("function-list");
  

  array.forEach(character => {
    const li = document.createElement("li");
    li.textContent = character.name;
    list.appendChild(li);
  });
}

// Call the function
renderCharacterList(characters);

// 4. Write a function that accepts two parameters: an array of character objects and a numeric age threshold. Inside the function, filter the array to include only characters whose age is below the threshold value. For each filtered character, create an <li> element with their name and append it to the target list. Call this function and render the results in the unordered list with id "age-filter-list".
 function renderCharactersByAge(array, ageThreshold) {
  const list = document.getElementById("age-filter-list");

  const filteredCharacters = array.filter(character => character.age < ageThreshold);

  filteredCharacters.forEach(character => {
    const li = document.createElement("li");
    li.textContent = character.name;
    list.appendChild(li);
  });
}

// Call the function
renderCharactersByAge(characters, 40);

// 5. Enhance your rendering functions from exercises 3 and 4 with error handling logic. Before accessing the name property of each character object, check whether the "name" property exists. If a character object is missing the name property, use console.error() to log a descriptive error message to the console, and dynamically create and display the error message in the HTML div element with id "error-messages".

// EXERCISE 3 with error handling-------------------------------------------------------------------------------------
function renderCharacterList(array) {
  const list = document.getElementById("function-list");
  const errorContainer = document.getElementById("error-messages");

  //error handling
  array.forEach(character => {
    if (!character.name) {
      const errorMessage = "Error: Character object is missing a name property.";
      console.log(errorMessage);

      const p = document.createElement("p");
      p.textContent = errorMessage;
      errorContainer.appendChild(p);
    } else {
      const li = document.createElement("li");
      li.textContent = character.name;
      list.appendChild(li);
    }
  });
}
renderCharacterList(characters, "error-messages");

//EXERCISE 4 after error handling---------------------------------------------------------------------------------------
function renderCharactersByAge(array, ageThreshold) {
  const list = document.getElementById("age-filter-list");
   const errorContainer = document.getElementById("error-messages");

  const filteredCharacters = array.filter(character => character.age < ageThreshold);

  filteredCharacters.forEach(character => {
    if (!character.name) {
      const errorMessage = "Error: Character object is missing a name property.";
      console.log(errorMessage);

      const p = document.createElement("p");
      p.textContent = errorMessage;
      errorContainer.appendChild(p);
    } else {
      const li = document.createElement("li");
      li.textContent = character.name;
      list.appendChild(li);
    }
  });
}
// Call the function
renderCharactersByAge(characters, 40);

// 6. Create a second array called "brokenCharacters" that intentionally contains objects with missing name properties (e.g., objects with only id and age). Pass this broken array to your error-handling functions from exercise 5. Verify that your error handling correctly identifies the missing name properties, logs appropriate error messages to the console, and displays those error messages in the HTML div element with id "broken-array-errors".

function renderBrokenCharacters(array) {
  const list = document.getElementById("broken-array-list");
  const errorContainer = document.getElementById("broken-array-errors");


  array.forEach(character => {
    if (!character.name) {
      const errorMessage =
        "Error: Character object is missing a name property.";
      console.error(errorMessage);

      
      const p = document.createElement("p");
      p.textContent = errorMessage;
      errorContainer.appendChild(p);
    } else {
      const li = document.createElement("li");
      li.textContent = character.name;
      list.appendChild(li);
    }
  });
}

renderBrokenCharacters(brokenCharacters);