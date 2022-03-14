const url = 'https://api.adviceslip.com/advice';
const heading = document.getElementById('heading__text');
const textBox = document.getElementById('advice__text');
const btn = document.getElementById('advice__btn');

async function fetchAdvice() {
  const response = await fetch(url);
  const data = await response.json();

  return data.slip;
}

async function updateUI() {
  const { id, advice } = await fetchAdvice();
  heading.innerHTML = `Advice # ${id}`;
  textBox.innerHTML = `&ldquo;${advice}&rdquo;`;
}

async function handleUpdate() {
  await updateUI();
}

// show advice on initial load
updateUI();
