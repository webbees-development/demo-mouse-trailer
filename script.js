const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
          y = e.clientY - trailer.offsetHeight / 2;

    // set the mouse trailer instantly
    // trailer.style.transform = `translate(${x}px, ${y}px)`;

    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
    }

    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    });
}

window.onmousemove = (e) => {
    const interactable = e.target.closest(".interactable"), interacting = interactable !== null;

    animateTrailer(e, interacting);

    trailer.innerHTML = interacting ? interactable.dataset.trailer : "";

}