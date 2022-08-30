const Engineer = require("../lib/Engineer");

describe("Can set Github acc via constructor", () => {
    const testValue = "GithubUser";
    const t = new Engineer("Brandon", 1, "test@test.com", testValue);
    expect(t.github).toBe(testValue);
});

describe("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const t = new Engineer("Brandon", 1, "test@test.com", "githubUser");
    expect(t.getRole).toBe(testValue);
});

describe("Can get school via getGithub()", () => {
    const testValue = "GIthubUser";
    const t = new Engineer("Brandon", 1, "test@test.com", testValue);
    expect(t.getGithub).toBe(testValue);
});