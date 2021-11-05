const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
const states = [];

// fetches endpoint, returns blob (object) and converts to JSON
// then pushes info to cities with spread operator
// logs error if can't fetch
// stress that getting data first is the most important step
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data))
  .catch((err) => console.log(err));

// console.log(searchInput)
// console.log(cities.map(item => item.find(input)))

// Query selector changes based on input, logs to displayMatches
const searchInput = document.querySelector(".search");

// Any element that changes in this will log into to variable suggestions
const suggestions = document.querySelector(".suggestions");

// Need to separate the event listener part from the call above in order to hoist the event listener
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

// This takes word match and array, returns a filter of array based on regex match of either city or state
function findData(wordMatch, cities) {
  return cities.filter((place) => {
    let regex = new RegExp(wordMatch, "gi");

    return place.city.match(regex) || place.state.match(regex);
  });
}

// Adds comma to the the population
function addComma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  // finds the data and logs to matchArray using findData()
  const matchArray = findData(this.value, cities);

  // creates html variable that maps above over HTML elements with template literal
  const html = matchArray
    .map((place) => {
      // this helps highlight the number and make sure capital letters aren't needed
      let regex = new RegExp(this.value, "gi");
      let cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      let stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
        <li>
        <span name="name">${cityName}, ${stateName}</span>
        <span class="population">${addComma(place.population)}</span>
        </li>
        `;
      // array.join here will turn it from array into a big string
    })
    .join("");

  // then adds to the suggestions query selector
  suggestions.innerHTML = html;
}
