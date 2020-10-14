module.exports = {
  extends: [
    'airbnb-base',
  ],
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_id',
        ],
        allowAfterThis: true,
        allowAfterSuper: true,
      },
    ],
    'no-confusing-arrow': 'error',
    'class-methods-use-this': 0,
    complexity: ['error', 5],
    'max-nested-callbacks': ['error', 3],
    'max-depth': ['error', 3],
    'max-classes-per-file': ['error', 1],
    'no-else-return': 'error',
    'max-params': ['error', 5],
    'function-paren-newline': ['error', 'consistent'],
  },
};
