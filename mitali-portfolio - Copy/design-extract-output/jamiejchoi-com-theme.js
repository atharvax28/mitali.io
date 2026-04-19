// React Theme — extracted from https://www.jamiejchoi.com/work/manoa-bakery-cafe
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
 *   };
 *   fonts: {
    body: string;
    heading: string;
 *   };
 *   fontSizes: {
    '0': string;
    '10': string;
    '16': string;
    '48': string;
    '43.648': string;
    '31.36': string;
    '21.0432': string;
    '17.536': string;
    '14.464': string;
 *   };
 *   space: {
    '1': string;
    '13': string;
    '24': string;
    '38': string;
    '48': string;
    '64': string;
    '84': string;
    '96': string;
    '127': string;
    '295': string;
    '328': string;
    '340': string;
    '393': string;
    '412': string;
    '443': string;
    '451': string;
 *   };
 *   radii: {

 *   };
 *   shadows: {
    sm: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#22181c",
    "secondary": "#fe8357",
    "accent": "#ffede8",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#ffffff"
  },
  "fonts": {
    "body": "'sans-serif', sans-serif",
    "heading": "'adobe-caslon-pro', sans-serif"
  },
  "fontSizes": {
    "0": "0px",
    "10": "10px",
    "16": "16px",
    "48": "48px",
    "43.648": "43.648px",
    "31.36": "31.36px",
    "21.0432": "21.0432px",
    "17.536": "17.536px",
    "14.464": "14.464px"
  },
  "space": {
    "1": "1px",
    "13": "13px",
    "24": "24px",
    "38": "38px",
    "48": "48px",
    "64": "64px",
    "84": "84px",
    "96": "96px",
    "127": "127px",
    "295": "295px",
    "328": "328px",
    "340": "340px",
    "393": "393px",
    "412": "412px",
    "443": "443px",
    "451": "451px"
  },
  "radii": {},
  "shadows": {
    "sm": "rgba(255, 255, 255, 0) 3.5072px 0px 0px 0px, rgba(255, 255, 255, 0) -3.5072px 0px 0px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#22181c",
      "light": "hsl(336, 17%, 26%)",
      "dark": "hsl(336, 17%, 10%)"
    },
    "secondary": {
      "main": "#fe8357",
      "light": "hsl(16, 99%, 82%)",
      "dark": "hsl(16, 99%, 52%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#ffede8"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#22181c"
    }
  },
  "typography": {
    "fontFamily": "'sans-serif', sans-serif",
    "h1": {
      "fontSize": "43.648px",
      "fontWeight": "600",
      "lineHeight": "56.7075px",
      "fontFamily": "'adobe-caslon-pro', sans-serif"
    },
    "h2": {
      "fontSize": "31.36px",
      "fontWeight": "600",
      "lineHeight": "42.1478px",
      "fontFamily": "'adobe-caslon-pro', sans-serif"
    },
    "h3": {
      "fontSize": "21.0432px",
      "fontWeight": "300",
      "lineHeight": "21.0432px",
      "fontFamily": "'adobe-caslon-pro', sans-serif"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "normal"
    }
  },
  "shape": {},
  "shadows": [
    "rgba(255, 255, 255, 0) 3.5072px 0px 0px 0px, rgba(255, 255, 255, 0) -3.5072px 0px 0px 0px"
  ]
};

export default theme;
