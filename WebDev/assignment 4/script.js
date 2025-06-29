//question 2
function visibility(){
    const div=document.getElementById('toggle');
    div.style.display=(div.style.display ==='none')?'block':'none';
}
//question 3
function addItem() {
  const input = document.getElementById('itemInput');
  const li = document.createElement('li');
  li.textContent = input.value;
  document.getElementById('itemList').appendChild(li);
  input.value = '';
}
  //question 4
  document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('hover');
  const original = img.src;      // store the initial source
  const hover = 'hover.png';     // set your hover image here

  img.addEventListener('mouseover', () => {
    img.src = hover;
  });

  img.addEventListener('mouseout', () => {
    img.src = original;
  });
});
//question 5
function showalert(event) {
  event.preventDefault();
  const input = document.getElementById('userInput').value;
  alert(`You entered: ${input}`);
}
//question 6
function changeBackgroundColor() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}
//question 7
function updateCharCount() {
  const count = document.getElementById('textArea').value.length;
  document.getElementById('charCount').textContent = count;
}
//question 8
document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('list');

  list.addEventListener('click', event => {
    if (event.target.matches('.delete-btn')) {
      event.target.closest('li').remove();
    }
  });
});





