document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const playerListItem = createPlayerListItem(event.target);
  const playerList = document.querySelector('#player-list');
  playerList.appendChild(playerListItem);

  event.target.reset();
}

const createPlayerListItem = function (form) {
  const playerListItem = document.createElement('li');
  playerListItem.classList.add('player-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  playerListItem.appendChild(name);

  const position = document.createElement('p');
  position.textContent = form.position.value;
  playerListItem.appendChild(position);

  const shirtNumber = document.createElement('p');
  shirtNumber.textContent = form.shirtNumber.value;
  playerListItem.appendChild(shirtNumber);

  const nationality = document.createElement('p');
  nationality.textContent = form.nationality.value;
  playerListItem.appendChild(nationality);

  return playerListItem
}

const handleDeleteAllClick = function (event) {
  const playerList = document.querySelector('#player-list');
  playerList.innerHTML = '';
}
