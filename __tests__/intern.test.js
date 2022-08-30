const Intern = require("../lib/Intern");

describe("Can set school via constructor", () => {
    const testValue = "UPenn";
    const t = new Intern("Brandon", 1, "test@test.com", testValue);
    expect(t.school).toBe(testValue);
});

describe("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const t = new Intern("Brandon", 1, "test@test.com", "UPenn");
    expect(t.getRole).toBe(testValue);
});

describe("Can get school via getSchool()", () => {
    const testValue = "UPenn";
    const t = new Intern("Brandon", 1, "test@test.com", testValue);
    expect(t.getSchool).toBe(testValue);
});