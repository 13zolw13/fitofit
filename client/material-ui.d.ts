import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions,
} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Palette extends MuiPallete {
    list: {
      lightbg: string;
    };
  }

  interface PaletteOptions extends MuiPaletteOptions {
    list?: {
      lightbg: string
    };
  }
}
