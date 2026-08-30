import 'i18next';

// Without this, t() is typed `string | null`, which cannot be passed to string
// props such as alt or aria-label. Mirrors `returnNull: false` in config.ts.
declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}
