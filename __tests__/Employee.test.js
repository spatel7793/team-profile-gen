const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Should set a new employee", () => {
        const t = new Employee();
        expect(typeof (t)).toBe("object");
    });

    it("Should set name via constructor arguments", () => {
        const t = new Employee(name);
        const name = "Brandon";
        expect(t.name).toBe(name);
    });

    it("Should set id via constructor arguments", () => {
        const t = new Employee("Brandon", id);
        const id = 1;
        expect(t.id).toBe(id);
    });

    it("Should set email via constructor arguments", () => {
        const t = new Employee("Brandon", 1, email);
        const email = "test@test.com";
        expect(t.email).toBe(email);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const t = new Employee(testName);
            const testValue = "Brandon";
            expect(t.getName()).toBe(testValue);
        });
    });

    describe("getId", () => {
        it("Can get id via getId()", () => {
            const t = new Employee("Brandon", testId);
            const testValue = "Brandon";
            expect(t.getId()).toBe(testId);
        });
    });
   
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const t = new Employee("Brandon", 1, testEmail);
            const testValue = "test@test.com";
            expect(t.getEmail()).toBe(testEmail);
        });
    });

    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const t = new Employee("Brandon", 1, "test@test.com");
            const testValue = "test@test.com";
            expect(t.getRole()).toBe(testValue);
        });
    });
})