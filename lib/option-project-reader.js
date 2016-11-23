"use strict";

var fs = require('fs'),
    path = require('path'),
    minimist = require('minimist'),
    knownOptions = {
        string: 'env',
        default: {env: process.env.NODE_ENV || 'development'}
    },
    options = minimist(process.argv.slice(2), knownOptions),
    getOptions = function (opt) {
        return (options[opt]) ? options[opt] : '';
    },
    getProjectOptions = function (source, name) {
        var projectOpts,
            projectConfig = [],
            current;

        if (fs.existsSync(source)) {
            projectOpts = require(path.resolve(source));
            if (projectOpts.hasOwnProperty(name)) {
                current = projectOpts[name];
                projectConfig[0] = current.rootDirectory;
                projectConfig[1] = current.configuration.base;
                projectConfig[3] = current.tasks.base;
                projectConfig[4] = current.tasks.default;
                projectConfig[5] = current.outputDirectory;
            }
        }

        return {
            projectName: name,
            projectDirectory: projectConfig[0],
            projectDestinationDirectory: projectConfig[5],
            projectConfig: projectConfig[1],
            projectTasks: projectConfig[3],
            projectTasksDefault: projectConfig[4],
            projectPkg: projectConfig[0] + '/package.json',
            processPkg: path.resolve('package.json')
        };
    };

module.exports = function (configJSONFile) {
    return getProjectOptions(
            configJSONFile || './gulp/config.json',
            getOptions('project') || 'default')
        || {};
};
