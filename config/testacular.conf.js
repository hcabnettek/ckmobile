basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'public/js/libs/angular.min.js',
  'test/lib/angular/angular-mocks.js',
  'public/js/app/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
