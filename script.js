// script.js
const elements = [
  { number: 1, symbol: "H", name: "Hydrogen", group: 1 },
  { number: 2, symbol: "He", name: "Helium", group: 18 },
  { number: 3, symbol: "Li", name: "Lithium", group: 1 },
  // Add more elements...
];

const table = document.getElementById('periodic-table');
const details = document.getElementById('element-details');

// Generate periodic table
elements.forEach(element => {
  const div = document.createElement('div');
  div.classList.add('element');
  div.innerHTML = `<strong>${element.symbol}</strong><br>${element.number}`;
  div.addEventListener('click', () => showDetails(element));
  table.appendChild(div);
});

// Show element details
function showDetails(element) {
  details.innerHTML = `
    <h2>${element.name} (${element.symbol})</h2>
    <p>Atomic Number: ${element.number}</p>
    <p>Group: ${element.group}</p>
  `;
  details.classList.remove('hidden');
}

// Search function
function searchElements() {
  const searchValue = document.getElementById('search').value.toLowerCase();
  const elementDivs = document.querySelectorAll('.element');
  
  elementDivs.forEach((div, index) => {
    const element = elements[index];
    if (
      element.name.toLowerCase().includes(searchValue) ||
      element.symbol.toLowerCase().includes(searchValue)
    ) {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });
}
