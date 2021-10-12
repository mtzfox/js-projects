// creates an array of HTML elements
const nums = document.querySelectorAll(".keys .key");

function startPlaying() {}
// for each elements in the array
for (let num of nums) {
  //find the data-key value and assign
  let datakey = num.attributes["data-key"].value;

  // listen for mouseup event
  num.addEventListener("mouseup", (event) => {
    // prevent default
    event.preventDefault();
    // log the element for testing
    console.log(document.querySelector(`audio[data-key="${datakey}"]`));
    // add playing class to css
    num.classList.add("playing");
    // find the cooresponding audio element and play
    document.querySelector(`audio[data-key="${datakey}"]`).play();
    // remove the playing element after .1 seconds to give animation effect
    setInterval(() => num.classList.remove("playing"), 100);
  });
}
