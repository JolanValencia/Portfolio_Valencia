const buttons = document.querySelectorAll('.tab-button');
const boxes = document.querySelectorAll('.picture-box');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Deactivate all buttons and boxes
    buttons.forEach(btn => btn.classList.remove('active'));
    boxes.forEach(box => box.classList.remove('active'));

    // Activate the clicked button and corresponding box
    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});