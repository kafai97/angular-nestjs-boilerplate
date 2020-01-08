const { LiveReloadCompiler } = require('@nestjs/ng-universal');

const compiler = new LiveReloadCompiler({
  projectName: 'angular-universal-nestjs-typeorm-template'
});
compiler.run();
