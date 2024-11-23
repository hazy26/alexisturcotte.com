import { main } from "./competences";
import projectsData from "../data/projects.json";
const projectsContainer = document.createElement("section");
main.appendChild(projectsContainer);
projectsContainer.className = "flex flex-col gap-3";
projectsContainer.innerHTML = `
    <h2 class="font-10 weight-400 px-1">{ Projets }</h2>
    <ul id="projets" class="projects-list list-notype flex flex-col gap-6 even-child">
    </ul>
`;

const projectsList = document.querySelector(".projects-list");
projectsData.forEach((project) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <li class="flex flex-col">
      <h3 class="flex items-center gap-1 w-60 font-10 weight-400 max-w-520"><span class="bg-highlight h-12 w-full"></span><span>${project.id}</span></h3>
      <div class="px-1 py-1 flex flex-col gap-1">
        <figure class="flex flex-col gap-1">
          <figcaption class="font-6 weight-400">${project.name}</figcaption>
          <img src="${project.img}" alt="${project.alt}"  class="h-200 cover w-60 max-w-280 parallax"/>
        </figure>
        <h4 class="font-4 weight-500">${project.category}</h4>
        <h4 class="font-4 weight-500">${project.techs}</h4>
        <p class="font-4 weight-300 w-75 max-w-340">${project.desc}</p>
        <a class="see-more border-1 no-underline w-fit px-1 font-4 weight-400 shadow-sm color-secondary letter-spacing-3 tilt-link transition animate__animated animate__pulse animate__infinite animate__slow" href="${project.href}" target="_blank"> 
          <i class="fa-regular fa-eye font-3"></i>
          <span class="letter-spacing-1">voir le projet</span>
        </a>
      </div>
    </li>`;
  projectsList.appendChild(listItem);
});