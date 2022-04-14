const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Patrick', 62832, 'fake@fake.com', 'Truman');

    expect(intern.name).toBe('Patrick');
    expect(intern.id).toBe(62832);
    expect(intern.email).toEqual('fake@fake.com');
    expect(intern.school).toEqual('Truman');
});

test("gets an intern's school", () => {
    const intern = new Intern('Patrick', 62832, 'fake@fake.com', 'Truman');

    expect(intern.getSchool()).toEqual('Truman');
});

test("gets an intern's role", () => {
    const intern = new Intern('Patrick', 62832, 'fake@fake.com', 'Truman');

    expect(intern.getRole()).toEqual('Intern');
});