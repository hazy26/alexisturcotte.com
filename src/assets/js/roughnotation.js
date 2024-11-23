import { annotate } from "rough-notation";

export default function roughNotation() {
    const themeAnnotation = document.querySelector(".theme-notation");
    const annotation = annotate(themeAnnotation, {
      color: "#7fbb8f",
      type: "box",
    });
    annotation.show();
}
roughNotation();

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