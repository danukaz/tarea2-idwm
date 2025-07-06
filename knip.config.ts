import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  project: ['src/**/*.{ts,tsx}'],
  ignore: [
    'src/components/ui/**', // Ignora componentes shadcn/ui
    'postcss.config.mjs', // Ignora config de postcss
  ],
  ignoreDependencies: [
    '@types/*',
    'eslint-*',
    'tailwindcss',
    'tw-animate-css',
    'lint-staged',
  ],
  ignoreExportsUsedInFile: true,
}

export default config
