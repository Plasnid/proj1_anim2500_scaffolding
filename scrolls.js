gsap.registerPlugin(ScrollToPlugin);
let navOffset = document.querySelector("nav").offsetHeight+10;
console.log(navOffset);

gsap.to(document.querySelector("body"),
    {scrollTop:0, duration:.1, ease:"power2.inOut"}
);

let navElements = document.querySelectorAll("nav a[href^='#']");
navElements.forEach(el => el.addEventListener("click", navClickAction));

function navClickAction(e){
    e.preventDefault();
    let hrefAttr = e.target.getAttribute("href");
    console.log(document.querySelector(hrefAttr).offsetTop);
    let scrollToVal =document.querySelector(hrefAttr).offsetTop -navOffset;
    gsap.to(window, 
        {scrollTo:{y: scrollToVal}, duration: 1, ease:"circ.out"}
    );
}
