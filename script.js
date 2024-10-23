function init() {
    const lenis = new Lenis({
        duration: 1, // speed
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: "vertical", // vertical, horizontal
        gestureDirection: "vertical", // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 0.5, // sensibility
        smoothTouch: false, // Mobile
        touchMultiplier: 2, // sensibility on mobile
        infinite: false // Infinite scrolling
    });

    lenis.on("scroll", ({className}) => {
        console.log(className);
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    function addAnotherSection() {
        const element = document.createElement("div");
        element.classList.add("section");
        element.innerHTML = "LAST SECTION";
        document.body.appendChild(element);
    }

    requestAnimationFrame(raf);
    setTimeout(addAnotherSection, 2000);
}
