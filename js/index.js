// Your code goes here


const logoHeading = document.querySelector(".logo-heading");
logoHeading.style.color = "black";
logoHeading.addEventListener('dblclick', () => {
    const curColor = logoHeading.style.color;
    console.log(curColor)
    if (curColor === "black") {
        logoHeading.style.color = "blue";
        logoHeading.style.transition = "all 0.5s";
    }
    else if (curColor === "blue") {
        logoHeading.style.color = "black";
        logoHeading.style.transition = "all 0.5s";
    }
});

const navLinkAddBorder = (event) => {
    event.target.style.borderBottom = "1px solid black";
};

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(nav => {
    nav.addEventListener('mouseenter', navLinkAddBorder);
});
    
const navLinkRemoveBorder = (event) => {
    event.target.style.borderBottom = "none";
};

navLinks.forEach(nav => {
    nav.addEventListener('mouseleave', navLinkRemoveBorder);
});
      






