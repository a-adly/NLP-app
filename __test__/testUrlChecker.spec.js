import {
    checkForURL
} from "../src/client/js/urlChecker"

describe("Testing the submit functionality", () => {
    test("Testing the checkForURL() function", () => {
        expect(checkForURL).toBeDefined();
    })
    test("Testing the checkForURL() function", () => {
        const validURL = "https://www.domain.com/path/to/article"
        expect(checkForURL(validURL)).toBeTruthy();
    })
    test("Testing the checkForURL() function", () => {
        const invalidURL = "https://domain/path/to/article"
        expect(checkForURL(invalidURL)).toBeFalsy();
    })
});