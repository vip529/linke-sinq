#!/usr/bin/env ts-node

/**
 * Theme CSS Generator
 *
 * This script generates CSS custom properties from design tokens.
 * Run automatically before builds to ensure CSS is always in sync with tokens.
 *
 * Usage: pnpm run generate:theme
 */

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { designTokens } from '../src/lib/theme/designTokens';

const generateThemeCSS = () => {
  const { colors } = designTokens;

  const cssLines: string[] = [
    '/**',
    ' * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY',
    ' *',
    ' * This file is generated from src/lib/theme/designTokens.ts',
    ' * Run `pnpm run generate:theme` to regenerate',
    ' */',
    '',
    '/* ==========================================',
    ' * DARK THEME (Default)',
    ' * ========================================== */',
    ':root {',
  ];

  // Dark theme (default)
  Object.entries(colors.dark).forEach(([category, values]) => {
    cssLines.push(`  /* ${category.charAt(0).toUpperCase() + category.slice(1)} Colors */`);
    Object.entries(values).forEach(([key, value]) => {
      const varName = `--${category}-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      const cssValue = typeof value === 'string' ? value.toLowerCase() : value;
      cssLines.push(`  ${varName}: ${cssValue};`);
    });
    cssLines.push('');
  });

  // Shadow colors for dark mode
  cssLines.push('  /* Shadow Colors */');
  cssLines.push('  --shadow-color: rgba(0, 0, 0, 0.5);');
  cssLines.push('  --glow-color: rgba(94, 91, 255, 0.3);');
  cssLines.push('');
  cssLines.push('  color-scheme: dark;');
  cssLines.push('}');
  cssLines.push('');

  // Light theme
  cssLines.push('/* ==========================================');
  cssLines.push(' * LIGHT THEME');
  cssLines.push(' * ========================================== */');
  cssLines.push('[data-theme="light"] {');

  Object.entries(colors.light).forEach(([category, values]) => {
    cssLines.push(`  /* ${category.charAt(0).toUpperCase() + category.slice(1)} Colors */`);
    Object.entries(values).forEach(([key, value]) => {
      const varName = `--${category}-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      const cssValue = typeof value === 'string' ? value.toLowerCase() : value;
      cssLines.push(`  ${varName}: ${cssValue};`);
    });
    cssLines.push('');
  });

  // Shadow colors for light mode
  cssLines.push('  /* Shadow Colors */');
  cssLines.push('  --shadow-color: rgba(0, 0, 0, 0.1);');
  cssLines.push('  --glow-color: rgba(94, 91, 255, 0.2);');
  cssLines.push('');
  cssLines.push('  color-scheme: light;');
  cssLines.push('}');
  cssLines.push(''); // Trailing newline for Biome

  const cssContent = cssLines.join('\n');

  // Write to file
  const outputPath = join(__dirname, '..', 'src', 'styles', 'generated-theme.css');
  writeFileSync(outputPath, cssContent, 'utf-8');

  console.log('✅ Theme CSS generated successfully at src/styles/generated-theme.css');
};

// Run the generator
try {
  generateThemeCSS();
} catch (error) {
  console.error('❌ Failed to generate theme CSS:', error);
  process.exit(1);
}
