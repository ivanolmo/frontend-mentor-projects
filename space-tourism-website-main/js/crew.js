const crewList = { commander: 0, specialist: 1, pilot: 2, engineer: 3 };

const commanderTab = document
  .getElementById('commander')
  .addEventListener('click', (e) => {
    handleCrew(e.target.id);
  });

const specialistTab = document
  .getElementById('specialist')
  .addEventListener('click', (e) => {
    handleCrew(e.target.id);
  });

const pilotTab = document
  .getElementById('pilot')
  .addEventListener('click', (e) => {
    handleCrew(e.target.id);
  });

const engineerTab = document
  .getElementById('engineer')
  .addEventListener('click', (e) => {
    handleCrew(e.target.id);
  });

function handleTabs(crewMember) {
  const tabList = document.querySelector('.dot-indicators');
  const tabs = tabList.querySelectorAll('button');

  tabs.forEach((tab) => {
    if (tab.id === crewMember) {
      tab.setAttribute('aria-selected', 'true');
    } else {
      tab.setAttribute('aria-selected', 'false');
    }
  });
}

function handleCrew(crewMember) {
  handleTabs(crewMember);
  const image = document.querySelector('.crew-image > img');
  const role = document.querySelector('.crew-role');
  const name = document.querySelector('.crew-name');
  const bio = document.querySelector('.crew-bio');

  fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
      const { crew } = data;

      image.setAttribute('src', crew[crewList[crewMember]].images.png);
      role.innerHTML = crew[crewList[crewMember]].role;
      name.innerHTML = crew[crewList[crewMember]].name;
      bio.innerHTML = crew[crewList[crewMember]].bio;
    });
}
