const { addItem, removeItem } = require('../src/inventoryManager');

describe('VALID TESTS - Expected to Pass', () => {
  test('should add 3 apples to empty inventory', () => {
    const inventory = {};
    addItem(inventory, 'apples', 3);
    expect(inventory.apples).toBe(3);
  });

  test('should add 5 oranges to existing inventory with apples', () => {
    const inventory = { apples: 3 };
    addItem(inventory, 'oranges', 5);
    expect(inventory.apples).toBe(3);
    expect(inventory.oranges).toBe(5);
    expect(Object.keys(inventory).length).toBe(2);
  });

  test('should remove 2 apples from inventory with 5 apples', () => {
    const inventory = { apples: 5 };
    removeItem(inventory, 'apples', 2);
    expect(inventory.apples).toBe(3);
  });
});

describe('INVALID TESTS - Handles Wrong Input Properly', () => {
  test('should throw error when adding negative quantity', () => {
    const inventory = {};
    expect(() => {
      addItem(inventory, 'bananas', -5);
    }).toThrow('Quantity must be a positive integer');
  });

  test('should throw error when item name is empty string', () => {
    const inventory = {};
    expect(() => {
      addItem(inventory, '', 10);
    }).toThrow('Item must be a non-empty string');
  });

  test('should throw error when quantity is a decimal', () => {
    const inventory = {};
    expect(() => {
      addItem(inventory, 'grapes', 2.5);
    }).toThrow('Quantity must be a positive integer');
  });

  test('should throw error when removing from empty stock', () => {
    const inventory = {};
    expect(() => {
      removeItem(inventory, 'apples', 5);
    }).toThrow("Item 'apples' does not exist in inventory");
  });

  test('should throw error when removing more than available quantity', () => {
    const inventory = { apples: 3 };
    expect(() => {
      removeItem(inventory, 'apples', 10);
    }).toThrow('Insufficient quantity');
  });
});

describe('INTENTIONAL BREAK TEST - Fails on Purpose', () => {
  test('BREAK - expect incorrect inventory count', () => {
    const inventory = { apples: 5 };
    addItem(inventory, 'apples', 3);
    expect(inventory.apples).toBe(10);
  });
});