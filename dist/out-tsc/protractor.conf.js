"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
exports.config = {
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
        print: function () { }
    },
    maxSessions: 2,
    noGlobals: true,
    onPrepare: function () {
        jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({ spec: { displayStacktrace: true } }));
    },
    params: {
        baseUrl: 'https://angularjs.org'
    },
    specs: ['/home/prashant/code-repo/protarctor/pro-doc-test-repo/dist/out-tsc/scripts/tests/First.spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub'
    // directConnect: true
};
