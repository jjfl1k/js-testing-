
const panel = document.getElementById('sidePanel');
const showBtn = document.getElementById('showPanel');
const closeBtn = document.getElementById('closePanel');

showBtn.addEventListener('click', () => {
  panel.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  panel.classList.remove('active');
});




showBtn.addEventListener('click', () => {
  panel.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  panel.classList.remove('active');
});

const addButtons = document.querySelectorAll('.add-to-cart');

addButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const name = product.dataset.name; 

    
    const li = document.createElement('li');
    li.textContent = name;
    cartItems.appendChild(li);

    
    panel.classList.add('active');
  });
});

