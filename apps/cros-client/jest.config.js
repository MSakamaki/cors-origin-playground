module.exports = {
  name: 'cros-client',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cros-client',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
