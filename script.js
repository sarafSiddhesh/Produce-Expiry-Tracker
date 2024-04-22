const itemList = document.getElementById('item-list');
const addItemForm = document.getElementById('add-item-form');

addItemForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const itemName = document.getElementById('item-name').value;
  const expiryDate = document.getElementById('expiry-date').value;

  // Add item data to an object (you can use local storage for persistence)
  const item = {
    name: itemName,
    expiry: new Date(expiryDate)
  }

  // Add item to the list
  const listItem = document.createElement('li');
  listItem.textContent = `${itemName} (Expires: ${expiryDate})`;
  itemList.appendChild(listItem);

  // Clear the form
  addItemForm.reset();

 
});
