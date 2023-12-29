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
  }
}

function showSuggestions(results, inputVal) {
  // TODO
}

function useSuggestion(e) {
  // TODO
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
