window.onload = () => {
  fadeOut();
}
// back to top
let toTop = document.querySelector('.back-to-top');

let navCol = document.querySelector('.navbar-collapse');
let navLinks = document.querySelector('.navbar ul');
let navToggle = document.querySelector('.navbar-toggler');

navLinks.addEventListener('click', () => {
  navCol.classList.remove('show');
  navToggle.classList.add('collapsed');
});

// widow onscroll
window.onscroll = () => {
  //back to top
  if(window.scrollY >= 600) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }

  // indector
  let posit = document.documentElement.scrollTop;
  let calHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scroll = posit * 100 / calHeight;
  document.getElementById('indector').style.width = scroll + "%";
}

//back to top
toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  navCol.classList.remove('show');
  navToggle.classList.add('collapsed');
});

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 3000);
}