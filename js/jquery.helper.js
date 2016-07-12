var FraggyHelper = function () {

    this.prototype = {
        loadScripts: function (scripts, path) {
            scripts = $.map(scripts, function (scr) {
                return $.getScript((path || '') + scr);
            });

            scripts.push($.Deferred(function (deferred) {
                $(deferred.resolve);
            }));

            return $.when.apply($, scripts);
        }
    };

    return {
        loadScripts: loadScripts,
    };
};

// Gettting error: TypeError: FraggyHelper.loadScripts is not a function
FraggyHelper.loadScripts();
    