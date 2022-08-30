const Manager = require("../lib/Manager");

describe("Can set office number via constructor", () => {
    const testValue = 1;
    const t = new Manager("Brandon", 1, "test@test.com", testValue);
    expect(t.officeNumber).toBe(testValue);
});

describe("getRole() should return \"Manager\"", () => {
    const testValue = "Intern";
    const t = new Manager("Brandon", 1, "test@test.com", 1);
    expect(t.getRole).toBe(testValue);
});

describe("Can get office number via getOffice()", () => {
    const testValue = 1;
    const t = new Manager("Brandon", 1, "test@test.com", testValue);
    expect(t.getOfficeNumber).toBe(testValue);
});