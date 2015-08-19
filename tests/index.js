'use strict';

var chai = require('chai'),
    expect = chai.expect,
    rewire = require('rewire');

describe('Grulper Projects Loader', function () {
    var testGrulperLoadProjects;

    before(function (done) {
        testGrulperLoadProjects = rewire('../index');
        done();
    });

    describe('node module function', function () {
        it('task module exists', function (done) {
            expect(testGrulperLoadProjects).to.exist;
            expect(typeof testGrulperLoadProjects).to.equal('function');
            done();
        });
    });

    describe('check module operation', function () {
        var testProjectLoaded;

        beforeEach(function (done) {

            var loadSettingsMock = function (jsonFile) {
                return {
                    projectName: 'default',
                    projectDirectory: './tests',
                    projectConfig: '/stubFiles',
                    projectTasks: './tests/stubFiles/tasks',
                    projectTasksDefault: [
                        "stub"
                    ],
                    projectPkg: './tests/stubPackage.json',
                    processPkg: './rootDir/package.json'
                }
            };
            testGrulperLoadProjects.__set__("loadSettings", loadSettingsMock);

            testProjectLoaded = testGrulperLoadProjects('stubConfig.json');
            done();
        });

        it('module load target configuration', function (done) {
            expect(typeof testProjectLoaded).to.not.be.undefined;
            expect(typeof testProjectLoaded).to.equal('object');

            done();
        });

        it('check some projectSetting properties', function (done) {
            var testProjSettings = testProjectLoaded.projectSetting;

            expect(typeof testProjSettings.projectName).to.equal('string');
            expect(typeof testProjSettings.projectName).to.not.be.empty;

            expect(typeof testProjSettings.projectDirectory).to.equal('string');
            expect(typeof testProjSettings.projectDirectory).to.not.be.empty;

            done();
        });

        describe('heck getLibrary function', function () {
            it('function exist', function (done) {
                expect(testProjectLoaded.getLibrary).to.exist;
                expect(typeof testProjectLoaded.getLibrary).to.equal('function');

                done();
            });

            it('function get Library', function (done) {
                var lib = testProjectLoaded.getLibrary('stubBuild').js;

                expect(typeof lib).to.not.be.undefined;
                expect(typeof lib).to.equal('object');

                done();
            });
        });
    });
});