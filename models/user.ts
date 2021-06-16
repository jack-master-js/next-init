import { types } from "mobx-state-tree";

export const User = types
  .model({
    name: "test",
  })
  .views((self) => ({
    get fullName() {
      return `${self.name} lastname`;
    },
  }))
  .actions((self) => ({
    toggle() {
      self.name = self.name === "test" ? "test1" : "test";
    },
  }));
