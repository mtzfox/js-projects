// creates an array of HTML elements
const nums = document.querySelectorAll(".keys .key");

// for each elements in the array
for (let num of nums) {
  //find the data-key value and assign
  let datakey = num.attributes["data-key"].value;

  // listen for mouseup event
  num.addEventListener("mouseup", (event) => {
    //prevent default
    event.preventDefault();
    //log the element for testing
    console.log(document.querySelector(`audio[data-key="${datakey}"]`));
    // find the cooresponding audio element and play, then stop
    document.querySelector(`audio[data-key="${datakey}"]`).play();
    document.querySelector(`audio[data-key="${datakey}"]`).stop();
  });
}
