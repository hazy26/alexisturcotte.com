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
    padding: [0, 0],
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
    iterations: 1,
  });
  annotation.show();
});

const brackets = document.querySelectorAll(".bracket-notation");
brackets.forEach((bracket) => {
  const annotation = annotate(bracket, {
    color: "#7fbb8f",
    type: "bracket",
    brackets: ["left", "right"],
    padding: [0, 4],
  });
  annotation.show();
});
