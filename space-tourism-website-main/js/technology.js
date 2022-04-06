const technologyList = { vehicle: 0, spaceport: 1, capsule: 2 };

const vehicleTab = document
  .getElementById('vehicle')
  .addEventListener('click', (e) => {
    handleTechnology(e.target.id);
  });

const spaceportTab = document
  .getElementById('spaceport')
  .addEventListener('click', (e) => {
    handleTechnology(e.target.id);
  });

const capsuleTab = document
  .getElementById('capsule')
  .addEventListener('click', (e) => {
    handleTechnology(e.target.id);
  });

function handleTabs(tech) {
  const tabList = document.querySelector('.number-indicators');
  const tabs = tabList.querySelectorAll('button');

  tabs.forEach((tab) => {
    if (tab.id === tech) {
      tab.setAttribute('aria-selected', 'true');
    } else {
      tab.setAttribute('aria-selected', 'false');
    }
  });
}

function handleTechnology(tech) {
  handleTabs(tech);
  const imageLand = document.querySelector('.technology-image-land');
  const imagePort = document.querySelector('.technology-image-port');
  const name = document.querySelector('.technology-info > p');
  const description = document.querySelector('.technology-bio');

  fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
      const { technology } = data;

      imageLand.setAttribute(
        'src',
        technology[technologyList[tech]].images.landscape
      );
      imagePort.setAttribute(
        'src',
        technology[technologyList[tech]].images.portrait
      );
      name.innerHTML = technology[technologyList[tech]].name;
      description.innerHTML = technology[technologyList[tech]].description;
    });
}
