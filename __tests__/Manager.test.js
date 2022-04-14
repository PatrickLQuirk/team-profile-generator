const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Sharon', 2, 'sharon@fake.com', 215);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets a manager's role", () => {
    const manager = new Manager('Sharon', 2, 'sharon@fake.com', 215);
    expect(manager.getRole()).toEqual("Manager");
});