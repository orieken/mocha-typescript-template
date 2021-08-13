module.exports = {
  color: true,
  extension: ['ts'],
  global: [
    'jQuery',
    '$',
    'expect'
  ],
  parallel: true,
  reporter: 'spec',
  require: [
    'ts-node/register',
    'chai/register-expect'
  ],
  spec: [
    'specs/**/*.spec.ts'
  ],
  timeout: '2000',
};
