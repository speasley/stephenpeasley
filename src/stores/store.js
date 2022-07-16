import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "theme",
  state: () => ({
    theme: {
      name: "",
      role: "",
      primary: "",
      secondary: "",
      darkText: "",
      lightText: "",
    },
  }),
  getters: {
    getTheme: (state) => state.theme,
  },
  actions: {
    setTheme(newTheme) {
      switch (newTheme) {
        case "dev":
          this.theme = {
            name: "dev",
            role: "web dev",
            primary: "16c213",
            secondary: "16c213",
            darkText: "194f19",
            lightText: "fff",
          };
          break;
        case "improv":
          this.theme = {
            name: "improv",
            role: "improv",
            primary: "5c2296",
            secondary: "5c2296",
            darkText: "2e114b",
            lightText: "fff",
          };
          break;
        case "default":
          this.theme = {
            name: "ux",
            role: "UX design",
            primary: "2c3f51",
            secondary: "2c3f51",
            darkText: "fff",
            lightText: "fff",
          };
          break;
      }
    },
  },
});
