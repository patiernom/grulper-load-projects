var path = require('path'),
    loadSettings = require('./lib/option-project-reader');

module.exports = function(configJSONFile){
    var settings = loadSettings(configJSONFile),
        getBasePath = function(){
            return settings.projectDirectory + settings.projectConfig + '/';
        };

    return {
        getLibrary: function (name) {
            var file = getBasePath() + name;

            return require(path.resolve(file));
        },
        projectSetting: settings
    };
};
