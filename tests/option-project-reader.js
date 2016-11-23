'use strict';

let chai = require('chai'),
    expect = chai.expect;

describe('Option Project Reader Library', function () {
    'use strict';

    let testOptionProjectLoader;

    beforeEach(function (done) {
        testOptionProjectLoader = require('../lib/option-project-reader');
        done();
    });

    it('module exists', function (done) {
        expect(testOptionProjectLoader).to.exist;
        expect(typeof testOptionProjectLoader).to.equal('function');
        done();
    });

    it('module loads target json', function (done) {
        'use strict';

        let settings = testOptionProjectLoader('./tests/stubFiles/myStubConfiguration.json');
        expect(typeof settings).to.not.be.undefined;
        expect(typeof settings).to.equal('object');

        done();
    });

    describe('check some properties', function () {
        var settings;

        beforeEach(function (done) {
            settings = testOptionProjectLoader('./tests/stubFiles/myStubConfiguration.json');
            done();
        });

        it('check projectName property', function (done) {
            expect(typeof settings.projectName).to.equal('string');
            expect(typeof settings.projectName).to.not.be.empty;

            done();
        });

        it('check projectDirectory property', function (done) {
            expect(typeof settings.projectDirectory).to.equal('string');
            expect(typeof settings.projectDirectory).to.not.be.empty;

            done();
        });

        it('check projectConfig property', function (done) {
            expect(typeof settings.projectConfig).to.equal('string');
            expect(typeof settings.projectConfig).to.not.be.empty;

            done();
        });

        it('check projectPkg property', function (done) {
            expect(typeof settings.projectPkg).to.equal('string');
            expect(typeof settings.projectPkg).to.not.be.empty;

            done();
        });

        it('check projectTasksDefault property', function (done) {
            expect(typeof settings.projectTasksDefault).to.equal('object');
            expect(typeof settings.projectTasksDefault).to.not.be.empty;

            done();
        });

        it('check projectDestinationDirectory property', function (done) {
            expect(typeof settings.projectDestinationDirectory).to.equal('string');
            expect(typeof settings.projectDestinationDirectory).to.not.be.empty;

            done();
        });
    });
});