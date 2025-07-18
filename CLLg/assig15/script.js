//1. Click Event
const clickBtn = document.getElementById('clickBtn');
clickBtn.addEventListener('click', () => {
  alert('Button was clicked!');
});


//2. Hover Event
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => {
  hoverBox.style.backgroundColor = '#cceeff';
  hoverBox.textContent = 'You are hovering!';
});
hoverBox.addEventListener('mouseleave', () => {
  hoverBox.style.backgroundColor = '';
  hoverBox.textContent = 'Hover over me!';
});

//3. Form Submit
const form = document.getElementById('todo-form');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = '';
  }
});



// 4. Keyboard Event
const keyInput = document.getElementById('keyInput');
const keyLog = document.getElementById('keyLog');

keyInput.addEventListener('keydown', (e) => {
  keyLog.textContent = `Key Pressed: ${e.key}`;
});
