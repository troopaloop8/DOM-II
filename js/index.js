// Your code goes here

const logoHeading = document.querySelector(".logo-heading");
logoHeading.style.color = "black";
logoHeading.addEventListener("dblclick", () => {
  const curColor = logoHeading.style.color;
  console.log(curColor);
  if (curColor === "black") {
    logoHeading.style.color = "blue";
    logoHeading.style.transition = "all 0.5s";
  } else if (curColor === "blue") {
    logoHeading.style.color = "black";
    logoHeading.style.transition = "all 0.5s";
  }
});

const navLinks = document.querySelectorAll(".nav-link");

const navLinkAddBorder = event => {
  event.target.style.borderBottom = "1px solid blue";
  event.stopPropagation();
};

const navLinkRemoveBorder = event => {
  event.target.style.borderBottom = "none";
  event.stopPropagation();
};

navLinks.forEach(nav => {
  nav.addEventListener("mouseenter", navLinkAddBorder);
});

navLinks.forEach(nav => {
  nav.addEventListener("mouseleave", navLinkRemoveBorder);

});

const body = document.querySelector("body");
body.addEventListener('click', (event) => {
    body.style.backgroundColor = "gold";
    event.stopPropagation();
})

const intro = document.querySelector(".intro");
intro.addEventListener('click', (event) => {
    intro.style.backgroundColor = "darksalmon";
    event.stopPropagation();
})

const introHeader = document.querySelector('.intro h2');
introHeader.addEventListener('click', (event) => {
    introHeader.style.fontSize = "3.6rem";
    introHeader.style.transition = "all 0.5s ease-in";
    event.stopPropagation();
});

const textContent = document.querySelectorAll(".text-content *");
const changeFont = (event) => {
    event.target.style.fontFamily = "fantasy";
    event.stopPropagation();
}

textContent.forEach(text => {
    text.addEventListener('wheel', changeFont)
});

const busImg = document.querySelector('.intro img');

busImg.addEventListener('drag', () => {
    busImg.src = "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/13051621_1352889851404289_1245026227868630394_n.jpg?_nc_cat=105&_nc_ohc=W37pDvY91TYAX9KEJCK&_nc_ht=scontent-nrt1-1.xx&oh=71ecd66e579588e0efcc506aa1643551&oe=5E9B18A8"
})

const buttons = document.querySelectorAll('.btn');
const changeBtn = (event) => {
    event.target.style.borderRadius = "50%";
    event.target.style.transition = "all 1s "
    event.stopPropagation();
};

buttons.forEach(btn => {
    btn.addEventListener('mouseover', changeBtn);
   
})


const images = document.querySelectorAll("div img");
const copyMsg = (event) => {
    alert("Make sure to accredit the image!");
}

images.forEach(img => {
    img.addEventListener('copy', copyMsg)
    
})

const msg = document.querySelector('*')

msg.addEventListener('copy', () => {
    alert("Make sure to accredit the this page!");
});



const paras = document.querySelectorAll("p");
paras.forEach((event) => {
    event.addEventListener('mousedown', function(e)  {
        e.stopPropagation();
        e.target.style.backgroundColor = "black";
        e.target.style.color = "white"
        e.target.style.fontSize = "3rem"
        e.target.style.transition = "all 0.2s ease-in"
    })
    event.addEventListener('mouseup', function(e)  {
        e.stopPropagation();
        e.target.style.backgroundColor = "gold";
        e.target.style.color = "black"
        e.target.style.fontSize = "1.6rem"
    })
})

function copyMessage() {
    alert("You copied this image!!!")
};