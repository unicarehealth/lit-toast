import { tCase } from "../src/tCase.js";

test("tCaseOneWork", () => {
    expect(tCase("one")).toBe("One");
});

test("tCaseTwoWords", () => {
    expect(tCase("one two")).toBe("One Two");
});


// import { LitProductChooser } from "../src/lit-product-chooser";
// test("basic", () => {
//   expect(LitProductChooser.demoTest()).toBe("test ok");
// });
// test("basic again", () => {
//   expect(sum(1, 2)).toBe(3);
// });