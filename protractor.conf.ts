// Because this file imports from `protractor` npm package, 
// you'll need to have it as a project dependency. 
//
// `baseUrl` property is passed in as a param
import { Config, browser } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';

export let config: Config = {
  allScriptsTimeout: 110000,
  framework: 'jasmine',
  // capabilities: {
  //   browserName: 'chrome'
  // },
  multiCapabilities: [{
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome'
  }],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 150000,
    print: function() {}
  },
  maxSessions: 2,
  noGlobals: true,
  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  params: {
      baseUrl: 'https://angularjs.org'
  },

  specs: [ '/home/prashant/code-repo/protarctor/pro-doc-test-repo/dist/out-tsc/scripts/tests/First.spec.js' ],

  seleniumAddress: 'http://localhost:4444/wd/hub'
  // directConnect: true
};
