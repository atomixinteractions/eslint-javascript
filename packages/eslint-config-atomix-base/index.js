module.exports = {
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'off',
    'no-unused-vars': ['warn', { ignoreRestSiblings: false }],
    semi: ['error', 'never'],
    'no-confusing-arrow': 'off',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      functions: 'never',
    }],
    'operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
        '&&': 'before',
        '+': 'before',
        '||': 'before',
      } },
    ],
    'brace-style': ['error', 'stroustrup'],
    'quote-props': ['error', 'as-needed'],

    // 'import/no-extraneous-dependencies': 'off'
    'import/no-unresolved': 'off',
    'import/extensions': ['error', 'never',
      [
        'json', 'json5',
        'styl', 'css', 'scss', 'sass', 'styl',
        'jpeg', 'jpg', 'png', 'svg', 'bmp', 'gif',
      ].reduce((obj, ext) => Object.assign(obj, { [ext]: 'always' }), {}),
    ],
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
  },
}
