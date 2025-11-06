function addItem(inventory, item, qty) {
  if (!inventory || typeof inventory !== 'object') {
    throw new Error('Inventory must be a valid object');
  }
  
  if (!item || typeof item !== 'string' || item.trim() === '') {
    throw new Error('Item must be a non-empty string');
  }
  
  if (typeof qty !== 'number' || qty <= 0 || !Number.isInteger(qty)) {
    throw new Error('Quantity must be a positive integer');
  }
  
  if (!inventory[item]) {
    inventory[item] = 0;
  }
  
  inventory[item] += qty;
  
  return inventory;
}

function removeItem(inventory, item, qty) {
  if (!inventory || typeof inventory !== 'object') {
    throw new Error('Inventory must be a valid object');
  }
  
  if (!item || typeof item !== 'string' || item.trim() === '') {
    throw new Error('Item must be a non-empty string');
  }
  
  if (typeof qty !== 'number' || qty <= 0 || !Number.isInteger(qty)) {
    throw new Error('Quantity must be a positive integer');
  }
  
  if (!inventory[item]) {
    throw new Error(`Item '${item}' does not exist in inventory`);
  }
  
  if (inventory[item] < qty) {
    throw new Error(`Insufficient quantity. Available: ${inventory[item]}, Requested: ${qty}`);
  }
  
  inventory[item] -= qty;
  
  if (inventory[item] === 0) {
    delete inventory[item];
  }
  
  return inventory;
}

module.exports = {
  addItem,
  removeItem
};