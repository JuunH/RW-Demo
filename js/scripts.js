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