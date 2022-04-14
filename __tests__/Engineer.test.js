const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Jake', 7, 'jake@fake.com', 'FakeUsername');

    expect(engineer.name).toBe('Jake');
    expect(engineer.id).toBe(7);
    expect(engineer.email).toBe('jake@fake.com');
    expect(engineer.github).toBe('FakeUsername');
});

test("gets an engineer's role", () => {
    const engineer = new Engineer('Jake', 7, 'jake@fake.com', 'FakeUsername');

    expect(engineer.getRole()).toEqual("Engineer");
});

test("gets an engineer's GitHub username", () => {
    const engineer = new Engineer('Jake', 7, 'jake@fake.com', 'FakeUsername');

    expect(engineer.getGithub()).toEqual('FakeUsername');
});