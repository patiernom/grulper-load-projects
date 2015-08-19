'use strict';

var chai = require('chai'),
    expect = chai.expect;

describe('Grulper Projects Loader', function() {
    describe('node module function', function() {
        var testGrulperLoadProjects;

        beforeEach(function(done) {
            testGrulperLoadProjects = require('../index');
            done();
        });

        it('task module exists', function(done) {
            expect(testGrulperLoadProjects).to.exist;
            expect(typeof testGrulperLoadProjects).to.equal('function');
            done();
        });

        it('module load target configuration', function(done) {
            var settings = testGrulperLoadProjects('./tests/stubFiles/myStubConfiguration.json');
            expect(typeof settings).to.not.be.undefined;
            expect(typeof settings).to.equal('object');
            settings.projectDirectory

            done();
        });

        it('check some property', function(done) {
            var settings = testGrulperLoadProjects('./tests/stubFiles/myStubConfiguration.json');
            expect(typeof settings.projectDirectory).to.equal('string');
            expect(typeof settings.projectDirectory).to.not.be.empty;

            done();
        });
    });
});