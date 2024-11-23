const footer = document.querySelector("footer");
footer.innerHTML = `
    <section id="contact" class="flex flex-col gap-4 grow-1 p-2 w-full font-8 max-w-540 self-center">
        <h2 class="weight-400">Une <span class="weight-500">idée</span> de projet <span class="weight-500">en tête</span> ?</h2>
        <a href="mailto:dev@aturcotte.com" class="no-underline border-2 items-center flex space-between px-2 py-1 font-7 weight-500 shadow-sm color-secondary transition btn-primary-hover tilt-link">
            <span>discutons</span>
            <i class="fa-solid fa-arrow-right"></i>
        </a>
    </section>

    <a href="https://www.linkedin.com/in/alexis-turcotte-1a326228b" target="_blank" class="no-underline self-center color-secondary font-13 animate__animated animate__bounce animate__infinite animate__slower">
        <i class="fa-brands fa-linkedin"></i>
    </a>
    <p class="copyright self-center font-3 weight-300 text-center">© copyright ${new Date().getFullYear()} alexis turcotte</p>
`;