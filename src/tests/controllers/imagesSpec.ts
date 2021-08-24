import imageController from "../../controllers/images";

// it("expect myFunc(5) to equal 25", () => {
//   expect(myFunc(5)).toEqual(26);
// });

it("Response with cache on 2nd call", () => {
  expect(imageController.resize({{
  query: {
    filename: "",
    height: "",
    width: ""
  }
}}))
});

