/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        '2.5xl': "28px",
        '3.2xl': "32px",
        'sm+': "15px",
        'h1': ["56px", {
          lineHeight: "58px",
          letterSpacing: "2px",
          fontWeight: "bold"
        }],
        'h2': ["40px", {
          lineHeight: "44px",
          letterSpacing: "1.5px",
          fontWeight: "bold"
        }],
        'h3': ["32px", {
          lineHeight: "36px",
          letterSpacing: "1.15px",
          fontWeight: "bold"
        }],
        'h4': ["28px", {
          lineHeight: "38px",
          letterSpacing: "2px",
          fontWeight: "bold"
        }],
        'h5': ["24px", {
          lineHeight: "33px",
          letterSpacing: "1.7px",
          fontWeight: "bold"
        }],
        'h6': ["18px", {
          lineHeight: "24px",
          letterSpacing: "1.3px",
          fontWeight: "bold"
        }],
        'overline': ["14px", {
          lineHeight: "19px",
          letterSpacing: "10px",
          fontWeight: "regular"
        }],
        'sub': ["13px", {
          lineHeight: "25px",
          letterSpacing: "1px",
          fontWeight: "bold"
        }],
        "body": ["15px", {
          lineHeight: "25px",
          fontWeight: "medium",
        }],
        "label": ["12px", {
          lineHeight: "auto",
          letterSpacing: "-0.21px",
          fontWeight: "bold"
        }]
      },
      colors: {
        'primary': "#D87D4A",
        'secondary': "#101010",
        'tertiary': "#F1F1F1",
        'background': "#fafafa",
        'error': "#cd2c2c"
      },
      lineHeight: {
        '25': '25px'
      },
      spacing: {
        "88": "88px",
        '120': "120px",
        "160": '160px'
      }
    },
  },
  plugins: [
    require("@kamona/tailwindcss-perspective")
  ],
}

