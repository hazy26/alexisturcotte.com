import "../sass/main.scss";
import "./header.js";
import "./competences.js";
import "./projects.js";
import "./footer.js";

import SimpleParallax from "simple-parallax-js";
let images = document.querySelectorAll(".parallax");
new simpleParallax(images, {
  orientation: "down",
  scale: 1.8,
});

$(document).ready(function () {
  $(".tilt-link").tilt({
    maxTilt: 20,
    speed: 400,
    perspective: 1000,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  });
});

import { annotate } from "rough-notation";

const highlights = document.querySelectorAll(".highlight-notation");
highlights.forEach((highlight) => {
  const annotation = annotate(highlight, {
    color: "#7fbb8f",
    multiline: true,
    type: "highlight",
  });
  annotation.show();
});

const boxes = document.querySelectorAll(".box-notation");
boxes.forEach((box) => {
  const annotation = annotate(box, {
    color: "#7fbb8f",
    type: "box",
  });
  annotation.show();
});

const underlines = document.querySelectorAll(".under-notation");
underlines.forEach((underline) => {
  const annotation = annotate(underline, {
    color: "#7fbb8f",
    type: "underline",
  });
  annotation.show();
});

const circles = document.querySelectorAll(".circle-notation");
circles.forEach((circle) => {
  const annotation = annotate(circle, {
    color: "#7fbb8f",
    type: "circle",
  });
  annotation.show();
});

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  const html = document.querySelector("html");
  const theme = html.getAttribute("data-theme");

  if (theme == "light") {
    html.setAttribute("data-theme", "dark");
    themeBtn.innerHTML = `
        <i class="fa-regular fa-sun pointer theme-icon theme-notation"></i>
    `;
    roughNotation();
  } else {
    html.setAttribute("data-theme", "light");
    themeBtn.innerHTML = `
        <i class="fa-regular fa-moon pointer theme-icon theme-notation"></i>
    `;
    roughNotation();
  }
});

function roughNotation() {
  const themeAnnotation = document.querySelector(".theme-notation");
  const annotation = annotate(themeAnnotation, {
    color: "#7fbb8f",
    type: "box",
  });
  annotation.show();
}
roughNotation();
