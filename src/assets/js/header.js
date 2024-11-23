const header = document.querySelector("header");
header.innerHTML = `
<div class="flex items-cente space-between px-1 pt-1 animate__backInDown">
    <ul class="flex items-center gap-1 list-notype">
        <li><a href="#projets" class="color-secondary font-6 weight-400 letter-spacing-1 no-underline hover-underline">projets</a></li>
        <li><a href="#contact" class="color-secondary font-6 weight-400 letter-spacing-1 no-underline hover-underline">contact</a></li>
    </ul>
    <button class="font-8 color-secondary no-border bg-transparent theme-btn">
        <i class="fa-regular fa-moon pointer theme-icon theme-notation"></i>
    </button>
</div>

<section class="grow-1 flex flex-col w-full gap-2 letter-spacing-1">
    <h1 class="px-1 flex flex-col weight-400">
        <span class="w-fit font-10 circle-notation">Bonjour,</span>
        <span class="font-10">Je m'appelle <span class="=w-fit weight-500 uppercase box-notation">Alexis.</span></span>
    </h1>
    <h2 class="font-6 weight-300 px-1">Je suis un <span class="weight-500">concepteur web passionné</span>, qui souhaite offrir la meilleure <span class="under-notation">expérience utilisateur</span> possible.</h2>
</section>

<div class="self-center flex flex-col items-center gap-1 pb-2">
    <p class="font-6 weight-400 letter-spacing-2 px-1 animate__animated animate__bounce animate__infinite animate__slower">scroll</p>
    <div class="bg-secondary h-40 w-px-1"></div>
</div>
`;