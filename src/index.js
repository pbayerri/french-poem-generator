function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  new Typewriter("#poem", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    cursor: null,
    delay: 5,
  });
}

let poemElementForm = document.querySelector("#poem-generator-form");
poemElementForm.addEventListener("submit", generatePoem);
