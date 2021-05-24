//  Menu Icon Function  //


const menuicon = document.getElementById('menuicon');
const options = document.getElementById('menulist');

function toggleOptions() {
  menuicon.classList.toggle('active');
  options.classList.toggle('active');
}

menuicon.addEventListener('click', () => {
  toggleOptions()
})


// Bounce Animation control


const arrow = document.getElementById('arrow');

document.addEventListener('scroll', () => {
  scrollposition = window.pageYOffset
  if (scrollposition > 0) {
    arrow.classList.add('invisible');
  }
  else {
    arrow.classList.remove('invisible');
  }
})