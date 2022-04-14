const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Patrick', 27818, 'fake@fake.com');

    expect(employee.name).toBe('Patrick');
    expect(employee.id).toBe(27818);
    expect(employee.email).toBe('fake@fake.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Patrick', 27818, 'fake@fake.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test("gets employee's id", () => {
    const employee = new Employee('Patrick', 27818, 'fake@fake.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's role", () => {
    const employee = new Employee('Patrick', 27818, 'fake@fake.com');
    expect(employee.getRole()).toEqual("Employee");
});