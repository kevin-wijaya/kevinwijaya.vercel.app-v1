const body = document.body;
const buttonModals = document.getElementsByClassName("portcard");
const overlay = document.getElementById("overlay");
const sliders = document.getElementsByClassName('slider');
const buttonPrevs = document.getElementsByClassName('buttonPrev');
const buttonNexts = document.getElementsByClassName('buttonNext');
const carousels = document.getElementsByClassName("carousel");
const descs = document.getElementsByClassName("desc");

for (let i=0; i < buttonModals.length; i++) {
    let buttonModal = buttonModals[i];
    let slider = sliders[i];
    let buttonPrev = buttonPrevs[i];
    let buttonNext = buttonNexts[i];
    let carousel = carousels[i];
    let id = buttonModal.getAttribute("modal");
    let modal = document.getElementById(id);
    descs[i].innerHTML = descs[i].getAttribute("string");
    carousel.innerHTML = "1/" + carousel.getAttribute("max");

    buttonModal.addEventListener('click', () => {
        buttonModal.classList.remove('hover:bg-info','hover:scale-x-[1.03]','hover:scale-y-[1.05]');
        modal.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";
        smallMenu.classList.add('hidden');
        smallMenu.classList.remove('visible');
    });
    overlay.addEventListener('click', () => {
       buttonModal.classList.add('hover:bg-info','hover:scale-x-[1.03]','hover:scale-y-[1.05]');
        modal.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "";
    });
    
    buttonPrev.addEventListener('click', () => {
        var offset = slider.offsetWidth;
        slider.scrollLeft -= offset;
    });
    
    buttonNext.addEventListener('click', () => {
        var offset = slider.offsetWidth;
        slider.scrollLeft += offset;
    });

    slider.addEventListener('scroll', (e) => {
        var moveWidth = slider.scrollLeft;
        var maxWidth = slider.offsetWidth;
        var pos = Math.floor(moveWidth/maxWidth + 0.5) + 1
        carousel.innerHTML = pos + "/" + carousel.getAttribute("max");
    })

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            buttonModal.classList.add('hover:bg-info','hover:scale-x-[1.03]','hover:scale-y-[1.05]');
            modal.style.display = "none";
            overlay.style.display = "none";
            body.style.overflow = "";
        }
        else if (event.key === "ArrowLeft") {
            var offset = slider.offsetWidth;
            slider.scrollLeft -= offset;
        }
        else if (event.key === "ArrowRight") {
            var offset = slider.offsetWidth;
            slider.scrollLeft += offset;
        }
    });
}