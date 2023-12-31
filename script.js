const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruits = [
  "Apple 🍎",
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
  "Lime 🍋‍🟩",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango 🥭",
  "Mangosteen",
  "Marionberry",
  "Melon 🍈",
  "Cantaloupe",
  "Honeydew",
  "Watermelon 🍉",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive 🫒",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine 🍊",
  "Papaya",
  "Passionfruit",
  "Peach 🍑",
  "Pear 🍐",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple 🍍",
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
  "Strawberry 🍓",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
  "Tomato 🍅",
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

  if (inputText.length > 1) {
    const fruitResults = search(inputText);
    createSuggestions(fruitResults, inputText);
  } else {
    suggestions.replaceChildren();
  }

  showSuggestions();
}

/**
 * Creates "li" elements for each fruit in the results and appends it to the unordered list in the suggestions div
 * element.  This also will bold the part of the fruit name that contains the inputVal text.
 *
 * @param {Array} results The array of fruits to show as suggestions.
 * @param {String} inputVal The search bar text used to generate the results.
 */
function createSuggestions(results, inputVal) {
  const liElements = results.map((fruit) => {
    const separatedString = separateStringForBolding(fruit, inputVal);
    const li = document.createElement("li");
    const b = document.createElement("b");
    b.innerText = separatedString[1];

    li.append(separatedString[0]);
    li.append(b);
    li.append(separatedString[2]);
    li.classList.add("suggestions__search-result");

    return li;
  });
  suggestions.replaceChildren(...liElements);
}

/**
 * Shows the unordered list of suggestions, whether or not it is hidden.
 */
function showSuggestions() {
  suggestions.classList.remove("hide");
}

/**
 * Hides the suggestions if the event target is an element in the search-container div.
 *
 * @param {Event} e The event that possibly contains an element in the search-container div.
 */
function hideSuggestions(e) {
  if (
    !(
      e.target.tagName === "INPUT" &&
      e.target.parentElement.classList.contains("search-container")
    ) &&
    !(
      e.target.tagName === "LI" &&
      e.target.classList.contains("suggestions__search-result")
    )
  ) {
    suggestions.classList.add("hide");
  }
}

/**
 * Takes the event target's text, which will be a search result suggestion, and places it into the search bar.
 *
 * @param {Event} e The event that will contain the list item element of a suggested fruit search result.
 */
function useSuggestion(e) {
  let li = e.target;

  // In case the event target is the bold element that is within the list item element.
  if (e.target.parentElement.tagName == "LI") {
    li = e.target.parentElement;
  }

  input.value = li.innerText;
  suggestions.replaceChildren();
}

/**
 * Splits a string into an array according to a substring, so that it is easier to put a portion of the string into a
 * bold HTML element.
 *
 * @param {String} str String to split.
 * @param {String} substr The substring within the string.
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

input.addEventListener("click", showSuggestions);
document.body.addEventListener("click", hideSuggestions);
