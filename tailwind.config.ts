import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./components/**/*.ts", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      "colors": {
        "on-secondary-fixed": "#001c39",
        "on-error-container": "#93000a",
        "surface-container-low": "#f6f3ee",
        "on-primary-fixed": "#001f23",
        "on-tertiary-fixed-variant": "#4f3d73",
        "surface-container-highest": "#e5e2dd",
        "surface-container": "#f0ede9",
        "tertiary-fixed": "#ebddff",
        "error": "#ba1a1a",
        "on-surface": "#1c1c19",
        "tertiary-container": "#b29cda",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#335682",
        "surface": "#fcf9f4",
        "surface-container-lowest": "#ffffff",
        "surface-variant": "#e5e2dd",
        "surface-dim": "#dcdad5",
        "secondary-fixed-dim": "#a7c8fb",
        "tertiary-fixed-dim": "#d3bcfc",
        "surface-bright": "#fcf9f4",
        "inverse-primary": "#55d8e6",
        "secondary-fixed": "#d4e3ff",
        "on-tertiary": "#ffffff",
        "background": "#fcf9f4",
        "on-tertiary-fixed": "#230f45",
        "inverse-on-surface": "#f3f0eb",
        "on-secondary-fixed-variant": "#244873",
        "outline": "#6c797b",
        "primary-fixed": "#8af2ff",
        "on-primary": "#ffffff",
        "error-container": "#ffdad6",
        "tertiary": "#68548d",
        "on-background": "#1c1c19",
        "surface-container-high": "#eae8e3",
        "primary-fixed-dim": "#55d8e6",
        "inverse-surface": "#31302d",
        "on-primary-container": "#004349",
        "secondary": "#3e608d",
        "on-tertiary-container": "#443267",
        "on-error": "#ffffff",
        "outline-variant": "#bcc9cb",
        "on-primary-fixed-variant": "#004f56",
        "primary": "#006972",
        "primary-container": "#23b7c5",
        "surface-tint": "#006972",
        "secondary-container": "#aacbfe",
        "on-surface-variant": "#3c494b"
      },
      "borderRadius": {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      "spacing": {
        "space-xl": "2.5rem",
        "gutter-mobile": "1rem",
        "space-3xl": "6rem",
        "space-sm": "0.5rem",
        "space-lg": "1.5rem",
        "margin-mobile": "1.25rem",
        "gutter": "1.5rem",
        "space-xs": "0.25rem",
        "space-md": "1rem",
        "margin": "3rem",
        "space-2xl": "4rem"
      },
      "fontFamily": {
        "caption": [
          "DM Sans"
        ],
        "body-lg": [
          "DM Sans"
        ],
        "label-price": [
          "Outfit"
        ],
        "headline-md": [
          "Outfit"
        ],
        "display-hero-mobile": [
          "Outfit"
        ],
        "headline-sm": [
          "Outfit"
        ],
        "headline-lg": [
          "Outfit"
        ],
        "display-hero": [
          "Outfit"
        ],
        "body-md": [
          "DM Sans"
        ],
        "body-sm": [
          "DM Sans"
        ],
        "headline-xl": [
          "Outfit"
        ],
        "headline-xl-mobile": [
          "Outfit"
        ],
        "label-badge": [
          "DM Sans"
        ]
      },
      "fontSize": {
        "caption": [
          "12px",
          {
            "lineHeight": "16px",
            "fontWeight": "400"
          }
        ],
        "body-lg": [
          "18px",
          {
            "lineHeight": "28px",
            "fontWeight": "400"
          }
        ],
        "label-price": [
          "22px",
          {
            "lineHeight": "28px",
            "letterSpacing": "0.01em",
            "fontWeight": "600"
          }
        ],
        "headline-md": [
          "24px",
          {
            "lineHeight": "32px",
            "fontWeight": "500"
          }
        ],
        "display-hero-mobile": [
          "36px",
          {
            "lineHeight": "44px",
            "letterSpacing": "-0.02em",
            "fontWeight": "600"
          }
        ],
        "headline-sm": [
          "20px",
          {
            "lineHeight": "28px",
            "fontWeight": "600"
          }
        ],
        "headline-lg": [
          "32px",
          {
            "lineHeight": "40px",
            "fontWeight": "500"
          }
        ],
        "display-hero": [
          "56px",
          {
            "lineHeight": "64px",
            "letterSpacing": "-0.03em",
            "fontWeight": "600"
          }
        ],
        "body-md": [
          "16px",
          {
            "lineHeight": "24px",
            "fontWeight": "400"
          }
        ],
        "body-sm": [
          "14px",
          {
            "lineHeight": "20px",
            "fontWeight": "400"
          }
        ],
        "headline-xl": [
          "40px",
          {
            "lineHeight": "48px",
            "letterSpacing": "-0.02em",
            "fontWeight": "500"
          }
        ],
        "headline-xl-mobile": [
          "28px",
          {
            "lineHeight": "36px",
            "letterSpacing": "-0.01em",
            "fontWeight": "500"
          }
        ],
        "label-badge": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.04em",
            "fontWeight": "700"
          }
        ]
      }
    },
  },
  plugins: [forms],
};

export default config;
