import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions,
} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Palette extends MuiPallete {
    list: {
      lightbg: string;
    };
    landing: {
      bgcolor: string;
    };
    mainColor: {
      lightBorder: string;
      lightBg: string;
    };
  }

  interface PaletteOptions extends MuiPaletteOptions {
    list?: {
      lightbg: string;
    };
    landing?: {
      bgcolor: string;
    };
    mainColor?: {
      lightBorder: string;
      lightBg: string;
    };
  }
}
