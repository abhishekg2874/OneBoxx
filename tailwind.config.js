module.exports = {
      mode: "jit",
      content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
      darkMode: "class",
      theme: {
        screens: { md: { max: "1050px" }, sm: { max: "550px" } },
        extend: {
          colors: {
            gray: {
              50: "#f8fafc",
              100: "#f6f6f6",
              200: "#e7e7e7",
              300: "#e6e6e6",
              400: "#bab9bd",
              500: "#909296",
              600: "#888585",
              700: "#5c5f66",
              800: "#41464b",
              900: "#25262b",
              "300_04": "#e1e0e0",
              "50_03": "#f8fafc",
              "100_01": "#f5f5f5",
              "300_01": "#e1e0e0",
              "400_01": "#bfbfbf",
              "400_02": "#b9b9b9",
              "400_03": "#aeaeae",
              "400_04": "#c1c2c5",
              "500_01": "#adadad",
              "500_02": "#9e9e9e",
              "50_33": "#f8fafc33",
              "50_66": "#fbfbfb66",
              "600_01": "#707071",
              "600_02": "#7f7f7f",
              "600_7c": "#8383837c",
              "700_01": "#636970",
              "800_01": "#444134",
              "800_02": "#403f3f",
              "800_03": "#343a40",
              "800_04": "#444234",
              "900_01": "#101113",
              "900_02": "#23272c",
              "900_03": "#171819",
              "900_04": "#212426",
              "900_05": "#141517",
              "900_06": "#232528",
              "900_07": "#1e1e1e",
              "900_08": "#111214",
              "900_09": "#121212",
            },
            black: { 900: "#000000" },
            blue: { 500: "#1e88f7", "900_fc": "#0423bffc", a200: "#4285f4" },
            blue_gray: {
              100: "#cccccc",
              200: "#a9aeb3",
              700: "#4a5055",
              800: "#484e53",
              900: "#323440",
              "100_01": "#d2d6da",
              "100_02": "#d9d9d9",
              "900_01": "#34383c",
              "900_02": "#33383f",
              "900_03": "#2f3338",
              "900_04": "#2e3236",
              "900_05": "#2d3833",
              "900_06": "#352f3c",
              "900_07": "#2f3030",
              "900_08": "#2a2e31",
              "900_09": "#343533",
              "900_19": "#25273819",
            },
            deep_purple: { 300: "#9c62e6", "300_99": "#9c62e699" },
            green: { a200: "#57e0a6", a200_99: "#57e0a699" },
            indigo: { 400: "#4a62dd", a200: "#5c7cfa", a200_01: "#626fe6", a200_99: "#626fe699" },
            lime: { 400: "#e6d062" },
            red: { 500: "#ea4335", 900: "#a81818", a200: "#fa5252" },
            white: {
              a700: "#ffffff",
              a700_05: "#ffffff05",
              a700_0c: "#ffffff0c",
              a700_14: "#ffffff14",
              a700_19: "#ffffff19",
              a700_33: "#ffffff33",
              a700_66: "#ffffff66",
            },
            yellow: { 700: "#ecbf21" },
          },
          boxShadow: { xs: "0 4px 8px 0 #ffffff14", bs: "inset 0 -186px 120px 0 #25273819" },
          backgroundImage: {
            gradient: "linear-gradient(116deg, #fa5252,#a81818)",
            gradient1: "linear-gradient(116deg, #4a62dd,#0423bffc)",
            gradient2: "linear-gradient(145deg, #111214,#121212)",
            gradient3: "linear-gradient(180deg, #141517,#232528)",
          },
          fontFamily: { opensans: "Open Sans", inter: "Inter", sfpro: "SF Pro", dmsans: "DM Sans" },
        },
      },
      plugins: [require("@tailwindcss/forms")],
    };