import roughNotation from "./roughnotation";

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