const button = document.getElementById('toggle-mode');
const root = document.documentElement;

const darkColors = {
  '--heading-color': '#fff',
  '--background-color': '#282b36',
  '--button-background': '#fff',
  '--button-color': '#282b36',
}

const lightColors = {
  '--heading-color': '#282b36',
  '--background-color': '#fff',
  '--button-background': '#282b36',
  '--button-color': '#fff',
}

const setColors = (mode, palette) => {
  button.textContent = mode[0].toUpperCase() + mode.substring(1);
  for (const [key, value] of Object.entries(palette)) {
    root.style.setProperty(key, value);
  }
}

button.addEventListener('click', () => {
  root.classList.toggle('dark-mode');
  if (root.classList.contains('dark-mode')) {
    setColors('light', darkColors);
  } else {
    setColors('dark', lightColors);
  }
})
