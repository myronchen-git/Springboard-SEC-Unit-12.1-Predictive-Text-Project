const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana 🍌",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry 🫐",
  "Boysenberry",
  "Currant",
  "Cherry 🍒",
  "Coconut 🥥",
  "Cranberry",
  "Cucumber 🥒",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape 🍇",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit 🥝",
  "Kumquat",
  "Lemon 🍋",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon 🍉",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

/**
 * Searches the fruits list for a fruit containing the given string of characters.
 *
 * @param {String} str A string of characters to find in a fruit name.
 * @returns An array of fruits that contain the given string of characters.
 */
function search(str) {
  return fruits.filter((fruit) =>
    fruit.toLowerCase().includes(str.toLowerCase())
  );
}

/**
 * Handles the processing of the search text and displaying of possible results.
 *
 * @param {Event} e The event created from typing into the search bar.
 */
function searchHandler(e) {
  const inputText = e.target.value;

  if (inputText !== "") {
    const fruitResults = search(inputText);
    showSuggestions(fruitResults, inputText);
  } else {
    suggestions.replaceChildren();
  }
}

/**
 * Creates "li" elements for each fruit in the results and appends it to the unordered list in the suggestions div
 * element.  This also will bold the part of the fruit name that contains the inputVal text.
 *
 * @param {Array} results The array of fruits to show as suggestions.
 * @param {String} inputVal The search bar text used to generate the results.
 */
function showSuggestions(results, inputVal) {
  const liElements = results.map((fruit) => {
    const separatedString = separateStringForBolding(fruit, inputVal);
    const li = document.createElement("li");
    const b = document.createElement("b");
    b.innerText = separatedString[1];

    li.append(separatedString[0]);
    li.append(b);
    li.append(separatedString[2]);

    return li;
  });
  suggestions.replaceChildren(...liElements);
}

function useSuggestion(e) {
  // TODO
}

/**
 * Splits a string into an array according to a substring, so that it is easier to put a portion of the string into a
 * bold HTML element.
 *
 * @param {*} str String to split.
 * @param {*} substr The substring within the string.
 * @returns An array containing the pieces of the string, with the piece to bold being the second element.
 */
function separateStringForBolding(str, substr) {
  const i = str.toLowerCase().indexOf(substr.toLowerCase());
  return [
    str.slice(0, i),
    str.slice(i, i + substr.length),
    str.slice(i + substr.length),
  ];
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
