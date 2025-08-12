document.getElementById('animateBtn').addEventListener('click', function () {
  const input = document.getElementById('userText');
  const output = document.getElementById('output');
  const text = input.value.trim();

  if (text === '') {
    output.innerHTML = '<p style="color: #f00;">Please enter some text!</p>';
    return;
  }

  output.innerHTML = `<h1 class="glow-text">${text}</h1>`;
});

