export const main = document.querySelector("main");
const competences = document.createElement("section");
main.appendChild(competences);
competences.className = "flex flex-col gap-3 px-2 self-center text-center";
competences.innerHTML = `
    <h2 class="font-9 lg:font-11 weight-400 letter-spacing-1 rellax" data-rellax-speed="1">{ Compétences }</h2>
    <p class="font-5 lg:font-7 max-w-1024 weight-300 rellax" data-rellax-speed="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet ex vel justo vehicula imperdiet id elementum lacus. Praesent posuere nec sapien quis iaculis. Nullam sit amet ex vel justo vehicula imperdiet id elementum lacus.</p>
    <p class="weight-500 font-5 lg:font-6 max-w-600 self-center letter-spacing-1 bracket-notation">conception de site web - intégration web - javascript - html - css - sass - node.js - sql - wordpress - figma - suite adobe</p>
`;