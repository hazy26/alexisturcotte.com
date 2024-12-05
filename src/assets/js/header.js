const header = document.querySelector("header");
header.innerHTML = `
<div class="flex items-cente space-between p-1 lg:p-2 animate__backInDown max-w-1280 mx-auto my-0 w-full">
    <ul class="flex items-center gap-2 list-notype font-6 lg:font-7">
        <li><a href="#projets" class="color-secondary weight-400 letter-spacing-1 no-underline hover-underline">projets</a></li>
        <li><a href="#contact" class="color-secondary weight-400 letter-spacing-1 no-underline hover-underline">contact</a></li>
    </ul>
    <button class="font-8 lg:font-9 color-secondary no-border bg-transparent theme-btn">
        <i class="fa-regular fa-moon pointer theme-icon"></i>
    </button>
</div>

<section class="grow-1 flex flex-col w-fit letter-spacing-1 max-w-1280 mx-auto my-0 self-center text-center">
    <h1 class="px-1 flex flex-col weight-400">
        <span class="w-fit font-10 lg:font-14 self-center">Bonjour!</span>
        <span class="font-10 lg:font-14">Je m'appelle <span class="=w-fit weight-500 uppercase circle-notation">Alexis</span></span>
    </h1>
    <h2 class="font-5 lg:font-8 weight-300 px-1 pt-2 pb-1"><span class="weight-500 highligh-notation bracket-notation">Concepteur & développeur web.</span></h2>
    <h3 class="weight-200 px-1 lg:font-7 max-w-480 self-center">Je suis un passionné qui souhaite offrir la meilleure <span>expérience</span> <span>utilisateur</span> possible.</h3>
</section>

<div class="self-center flex flex-col items-center gap-1 pb-2 max-w-1280 mx-auto my-0 w-full">
    <p class="font-6 lg:font-8 weight-400 letter-spacing-2 px-1">scroll</p>
    <div class="bg-secondary h-40 w-px-1"></div>
</div>
`;
