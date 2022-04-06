const destList = { moon: 0, mars: 1, europa: 2, titan: 3 };

const moonTab = document
  .getElementById('moon')
  .addEventListener('click', (e) => {
    handleDestination(e.target.id);
  });

const marsTab = document
  .getElementById('mars')
  .addEventListener('click', (e) => {
    handleDestination(e.target.id);
  });

const europaTab = document
  .getElementById('europa')
  .addEventListener('click', (e) => {
    handleDestination(e.target.id);
  });

const titanTab = document
  .getElementById('titan')
  .addEventListener('click', (e) => {
    handleDestination(e.target.id);
  });

function handleTabs(dest) {
  const tabList = document.querySelector('.tab-list');
  const tabs = tabList.querySelectorAll('button');

  tabs.forEach((tab) => {
    if (tab.id === dest) {
      tab.setAttribute('aria-selected', 'true');
    } else {
      tab.setAttribute('aria-selected', 'false');
    }
  });
}

function handleDestination(dest) {
  handleTabs(dest);
  const image = document.querySelector('.destination-image > img');
  const name = document.querySelector('.destination-info > h2');
  const text = document.querySelector('.destination-info > p');
  const distance = document.querySelector('.distance');
  const travel = document.querySelector('.travel');

  fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
      const { destinations } = data;

      image.setAttribute('src', destinations[destList[dest]].images.png);
      name.innerHTML = destinations[destList[dest]].name;
      text.innerHTML = destinations[destList[dest]].description;
      distance.innerHTML = destinations[destList[dest]].distance;
      travel.innerHTML = destinations[destList[dest]].travel;
    });
}
