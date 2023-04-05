let header = document.querySelectorAll(".tabs h1");
let pcontain = document.querySelectorAll(".dipla");
console.log(header[0]);
console.log();

pcontain.forEach((element) => {
  element.style.display = "none";
});

pcontain[0].style.display = "block";

header.forEach((element) => {
  element.addEventListener("click", () => {
    pcontain.forEach((element) => {
      element.style.display = "none";
    });
    header.forEach((element) => {
      element.style.backgroundColor = `rgb(${110}, ${138}, ${214})`;
    });

    element.style.backgroundColor = "white";
    element.style.color = "black";

    if (element.innerHTML == "Html") {
      pcontain[0].style.display = "block";
    } else if (element.innerHTML == "Css") {
      pcontain[1].style.display = "block";
    } else {
      pcontain[2].style.display = "block";
    }
  });
});
