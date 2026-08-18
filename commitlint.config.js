// @ts-check

/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    // ── Allowed commit types ────────────────────────────────────────────
    // 2 = error, 'always' = must match
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'refactor', // Code refactoring (no bug fix / no new feature)
        'update',   // Updates to files, config, or minor maintenance
        'chore',    // Maintenance tasks (same intent as 'update')
        'docs',     // Documentation changes only
        'style',    // Code style / formatting (no logic change)
        'test',     // Adding or updating tests
        'perf',     // Performance improvements
      ],
    ],

    // ── Header length must not exceed 72 characters ─────────────────────
    'header-max-length': [2, 'always', 72],

    // ── Type must be lowercase ───────────────────────────────────────────
    'type-case': [2, 'always', 'lower-case'],

    // ── Type must not be empty ───────────────────────────────────────────
    'type-empty': [2, 'never'],

    // ── Subject must not be empty ────────────────────────────────────────
    'subject-empty': [2, 'never'],

    // ── Subject must not end with a period ───────────────────────────────
    'subject-full-stop': [2, 'never', '.'],

    // ── Scope (optional) must be lowercase if provided ───────────────────
    'scope-case': [2, 'always', 'lower-case'],
  },
};

module.exports = config;
