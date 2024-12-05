const html = document.querySelector("html");
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  const theme = html.getAttribute("data-theme");
  switchTheme(theme);
});

function switchTheme(theme) {
  if (theme == "dark") {
    html.setAttribute("data-theme", "light");
    themeBtn.innerHTML = `
        <i class="fa-regular fa-moon pointer theme-icon theme-notation"></i>
    `;
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    themeBtn.innerHTML = `
        <i class="fa-regular fa-sun pointer theme-icon theme-notation"></i>
    `;
    localStorage.setItem("theme", "dark");
  }
}

function getTheme() {
  const theme = localStorage.getItem("theme");
  if (theme == "light") {
    html.setAttribute("data-theme", "light");
    themeBtn.innerHTML = `
        <i class="fa-regular fa-moon pointer theme-icon theme-notation"></i>
    `;
  } else {
    html.setAttribute("data-theme", "dark");
    themeBtn.innerHTML = `
        <i class="fa-regular fa-sun pointer theme-icon theme-notation"></i>
    `;
  }
}
getTheme();
