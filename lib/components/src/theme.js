export const baseFonts = {
  fontFamily:
    '-apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", "Arial", sans-serif',
  color: '#444',
  WebkitFontSmoothing: 'antialiased',
};

export const monoFonts = {
  fontFamily:
    '"Operator Mono", "Fira Code Retina", "Fira Code", "FiraCode-Retina", "Andale Mono", "Lucida Console", Consolas, Monaco, monospace',
  color: '#444',
  WebkitFontSmoothing: 'antialiased',
};

export const normal = {
  mainBackground: '#F7F7F7',
  mainBorder: '1px solid rgba(0,0,0,0.1)',
  mainBorderRadius: 4,
  mainFill: 'rgba(255,255,255,0.99)',
  mainTextFace: baseFonts.fontFamily,
  mainTextColor: baseFonts.color,
  mainTextSize: 13,
  monoTextFace: monoFonts.color,
  layoutMargin: '10px',
};
