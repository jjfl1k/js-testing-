
const panel = document.getElementById('sidePanel');
const showBtn = document.getElementById('showPanel');
const closeBtn = document.getElementById('closePanel');
const nbtn = document.getElementById('all');

nbtn.addEventListener('click',()=>{
  panel.classList.add('active')
});
closeBtn.addEventListener('click', () => {
  panel.classList.remove('active');
});
showBtn.addEventListener('click',()=>{
  panel.classList.add('active')
})