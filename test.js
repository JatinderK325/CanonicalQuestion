const { describe, test, expect } = require("@jest/globals");
const { idina_response } = require('./myData.js');

// Test case to check whether our data is empty or not. If the test fails, it means that the idina_response data is empty.
describe("idina_response", () => {
    test("data is not empty", () => {
        expect(idina_response).toBeTruthy();
    });
});
