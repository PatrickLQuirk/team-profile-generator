const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Sharon', 2, 'sharon@fake.com', 215);

    expect(manager.name).toBe('Sharon');
    expect(manager.id).toBe(2);
    expect(manager.email).toBe('sharon@fake.com');
    expect(manager.officeNumber).toBe(215);
});

test("gets a manager's role", () => {
    const manager = new Manager('Sharon', 2, 'sharon@fake.com', 215);
    expect(manager.getRole()).toEqual("Manager");
});