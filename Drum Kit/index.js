function drumkit() {
  const nums = document.querySelectorAll(".keys .key");
  console.log(nums);

  // creates an array of HTML elements - defaults to false
  for (let num of nums) {
    let playing = false,
      name = num.querySelector(".sound").innerHTML,
      drumkey = num.attributes["data-key"].value, // num key
      drum = document.querySelector(`audio[data-key="${drumkey}"]`); // sound

    // On mouseup, playing
    num.addEventListener("mouseup", (event) => {
      event.preventDefault();
      playing = true;
      console.log(name);

      drum.play(); // play sound
      num.classList.add("playing"); // add border but then remove instantly
      setInterval(() => num.classList.remove("playing"), 200);
    });
  }
}

drumkit();
