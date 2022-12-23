import { saveInitialAppearance, saveAppearance } from "./index";

describe("save and local appearance from localStorage", () => {
  jest.spyOn(Object.getPrototypeOf(localStorage), "getItem");
  jest.spyOn(Object.getPrototypeOf(localStorage), "setItem");
  it("should call localStorage with true", () => {
    saveAppearance(true);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it("should call localStorage with  false", () => {
    saveAppearance(false);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it("should call localStorage get item", () => {
    saveInitialAppearance();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
});
