/**
 * Theme definitions for the Portfolio Generator
 * Each theme includes both light and dark mode CSS variables
 */

const THEMES = {
  'minimal-light': {
    name: 'Minimal Light',
    light: {
      '--color-primary': '#666666',
      '--color-primary-dark': '#4D4D4D',
      '--color-primary-light': '#808080',
      '--color-bg': '#FAFAFA',
      '--color-bg-secondary': '#F5F5F5',
      '--color-bg-tertiary': '#EEEEEE',
      '--color-bg-elevated': '#FFFFFF',
      '--color-text': '#1A1A1A',
      '--color-text-secondary': '#6B6B6B',
      '--color-text-tertiary': '#888888',
      '--color-border': '#E5E5E5',
      '--color-border-hover': '#D5D5D5',
    },
    dark: {
      '--color-primary': '#888888',
      '--color-primary-dark': '#666666',
      '--color-primary-light': '#AAAAAA',
      '--color-bg': '#1A1A1A',
      '--color-bg-secondary': '#222222',
      '--color-bg-tertiary': '#2A2A2A',
      '--color-bg-elevated': '#252525',
      '--color-text': '#F5F5F5',
      '--color-text-secondary': '#A0A0A0',
      '--color-text-tertiary': '#777777',
      '--color-border': '#333333',
      '--color-border-hover': '#444444',
    }
  },
  'forest': {
    name: 'Forest Green',
    light: {
      '--color-primary': '#5B8A72',
      '--color-primary-dark': '#4A7260',
      '--color-primary-light': '#7BA593',
      '--color-bg': '#F9FAF9',
      '--color-bg-secondary': '#F3F5F4',
      '--color-bg-tertiary': '#E9EDEB',
      '--color-bg-elevated': '#FFFFFF',
      '--color-text': '#1A1D1B',
      '--color-text-secondary': '#5A6560',
      '--color-text-tertiary': '#7A857F',
      '--color-border': '#DDE3DF',
      '--color-border-hover': '#C8D1CC',
    },
    dark: {
      '--color-primary': '#7BA593',
      '--color-primary-dark': '#5B8A72',
      '--color-primary-light': '#9BBFAB',
      '--color-bg': '#1A1D1B',
      '--color-bg-secondary': '#222524',
      '--color-bg-tertiary': '#2A2E2C',
      '--color-bg-elevated': '#262A28',
      '--color-text': '#F3F5F4',
      '--color-text-secondary': '#A5ADA9',
      '--color-text-tertiary': '#707770',
      '--color-border': '#333833',
      '--color-border-hover': '#444A44',
    }
  },
  'warm': {
    name: 'Warm Terracotta',
    light: {
      '--color-primary': '#C17B5F',
      '--color-primary-dark': '#A66248',
      '--color-primary-light': '#D4967D',
      '--color-bg': '#FAFAF8',
      '--color-bg-secondary': '#F5F5F3',
      '--color-bg-tertiary': '#EEEEE9',
      '--color-bg-elevated': '#FFFFFF',
      '--color-text': '#1A1A1A',
      '--color-text-secondary': '#6B6B6B',
      '--color-text-tertiary': '#888888',
      '--color-border': '#E8E6E3',
      '--color-border-hover': '#D8D6D3',
    },
    dark: {
      '--color-primary': '#D4967D',
      '--color-primary-dark': '#C17B5F',
      '--color-primary-light': '#E5B09A',
      '--color-bg': '#1A1A1A',
      '--color-bg-secondary': '#222222',
      '--color-bg-tertiary': '#2A2A2A',
      '--color-bg-elevated': '#252525',
      '--color-text': '#F5F4F2',
      '--color-text-secondary': '#A0A0A0',
      '--color-text-tertiary': '#777777',
      '--color-border': '#333333',
      '--color-border-hover': '#444444',
    }
  },
  'cool': {
    name: 'Cool Blue',
    light: {
      '--color-primary': '#4A7C9B',
      '--color-primary-dark': '#3A6580',
      '--color-primary-light': '#6A9AB8',
      '--color-bg': '#F8FAFB',
      '--color-bg-secondary': '#F2F5F7',
      '--color-bg-tertiary': '#E8EDF0',
      '--color-bg-elevated': '#FFFFFF',
      '--color-text': '#1A1D21',
      '--color-text-secondary': '#5A6570',
      '--color-text-tertiary': '#8090A0',
      '--color-border': '#DCE3E8',
      '--color-border-hover': '#C8D3DC',
    },
    dark: {
      '--color-primary': '#6A9AB8',
      '--color-primary-dark': '#4A7C9B',
      '--color-primary-light': '#8AB4CC',
      '--color-bg': '#1A1D21',
      '--color-bg-secondary': '#22262B',
      '--color-bg-tertiary': '#2A2F35',
      '--color-bg-elevated': '#262B31',
      '--color-text': '#F2F5F7',
      '--color-text-secondary': '#A0AAB5',
      '--color-text-tertiary': '#707A85',
      '--color-border': '#333840',
      '--color-border-hover': '#444B55',
    }
  }
};

/**
 * Get CSS variables string for a theme
 * @param {string} themeId - Theme identifier
 * @param {string} mode - 'light' or 'dark'
 * @returns {string} CSS variables as string
 */
function getThemeVariables(themeId, mode) {
  const theme = THEMES[themeId];
  if (!theme) return '';

  const vars = theme[mode];
  return Object.entries(vars)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n');
}

/**
 * Generate full CSS for a theme
 * @param {string} themeId - Theme identifier
 * @returns {string} Complete CSS with light and dark mode
 */
function generateThemeCSS(themeId) {
  const lightVars = getThemeVariables(themeId, 'light');
  const darkVars = getThemeVariables(themeId, 'dark');

  return `
:root {
${lightVars}
}

[data-theme="dark"] {
${darkVars}
}
`.trim();
}
