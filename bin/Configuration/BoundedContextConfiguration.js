"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BoundedContextConfiguration = exports.loadBoundedContextConfigurations = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * Loads the bounded context configurations
 * @export
 * @returns {Promise<BoundedContextConfiguration[]>}
 */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var loadBoundedContextConfigurations = exports.loadBoundedContextConfigurations = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var vscode;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        vscode = require('vscode');

                        console.log('Loading bounded context configurations');
                        vscode.window.showInformationMessage('Loading bounded context configuration');

                        return _context.abrupt("return", vscode.workspace.findFiles('**/bounded-context.json', '**/node_modules/**', 2).then(function (result) {
                            if (!result || result.length == 0) {
                                vscode.window.showErrorMessage('Error loading bounded context configuration');
                                console.error('Couldn\'t find any \'bounded-context.json\' file in the current workspace');

                                throw 'Couldn\'t find any \'bounded-context.json\' file in the current workspace';
                            }
                            var boundedContextConfigs = [];
                            result.forEach(function (uri) {
                                var filePath = uri.fsPath;
                                var jsonObj = (0, _helpers.readJsonFromUriSync)(uri);

                                var application = jsonObj['application'];
                                var boundedContext = jsonObj['boundedContext'];
                                var boundedContextName = jsonObj['boundedContextName'];
                                var core = jsonObj['core'];
                                var coreLanguage = core || core.language || undefined;
                                if (application === undefined || boundedContext === undefined || boundedContextName === undefined || coreLanguage === undefined) {
                                    vscode.window.showErrorMessage("Found an invalid bounded context configuration at path " + filePath);
                                } else {
                                    boundedContextConfigs.push(new BoundedContextConfiguration(application, boundedContext, boundedContextName, new _Core.Core(coreLanguage), filePath));
                                }
                            });

                            return boundedContextConfigs;
                        }, function (error) {
                            throw error;
                        }));

                    case 4:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function loadBoundedContextConfigurations() {
        return _ref.apply(this, arguments);
    };
}();

var _Core = require("./Core");

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoundedContextConfiguration = exports.BoundedContextConfiguration = function () {
    /**
      * Instantiates an instance of BoundedContext
      * @param {string} application 
      * @param {string} boundedContext 
      * @param {string} boundedContextName 
      * @param {Core} core 
      */
    function BoundedContextConfiguration(application, boundedContext, boundedContextName, core, rootPath) {
        (0, _classCallCheck3.default)(this, BoundedContextConfiguration);

        this._application = application;
        this._boundedContext = boundedContext;
        this._boundedContextName = boundedContextName;
        this._core = core;
        this._rootPath = rootPath;
    }
    /**
      * Gets the application GUID
      * @returns {string} The GUID of the Application
      */


    (0, _createClass3.default)(BoundedContextConfiguration, [{
        key: "application",
        get: function get() {
            return this._application;
        }
        /**
          * Gets the bounded context GUID
          * @returns {string} The GUID of the bounded context
          */

    }, {
        key: "boundedContext",
        get: function get() {
            return this._boundedContext;
        }
        /**
          * Gets the name of the bounded context
          * @returns {string} Bounded Context name
          */

    }, {
        key: "boundedContextName",
        get: function get() {
            return this._boundedContextName;
        }
        /**
          * Gets the core configuration 
          * @returns {Core}
          */

    }, {
        key: "core",
        get: function get() {
            return this._core;
        }
        /**
         * Gets the path of the configuration file
         * 
         * @returns {string} 
         * @readonly
         * @memberof BoundedContextConfiguration
         */

    }, {
        key: "rootPath",
        get: function get() {
            return this._rootPath;
        }
    }]);
    return BoundedContextConfiguration;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0JvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJ2c2NvZGUiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNob3dJbmZvcm1hdGlvbk1lc3NhZ2UiLCJ3b3Jrc3BhY2UiLCJmaW5kRmlsZXMiLCJ0aGVuIiwicmVzdWx0IiwibGVuZ3RoIiwic2hvd0Vycm9yTWVzc2FnZSIsImVycm9yIiwiYm91bmRlZENvbnRleHRDb25maWdzIiwiZm9yRWFjaCIsImZpbGVQYXRoIiwidXJpIiwiZnNQYXRoIiwianNvbk9iaiIsImFwcGxpY2F0aW9uIiwiYm91bmRlZENvbnRleHQiLCJib3VuZGVkQ29udGV4dE5hbWUiLCJjb3JlIiwiY29yZUxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJ1bmRlZmluZWQiLCJwdXNoIiwiQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uIiwiQ29yZSIsImxvYWRCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25zIiwicm9vdFBhdGgiLCJfYXBwbGljYXRpb24iLCJfYm91bmRlZENvbnRleHQiLCJfYm91bmRlZENvbnRleHROYW1lIiwiX2NvcmUiLCJfcm9vdFBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7Ozs7O0FBUEE7Ozs7O3dGQVlPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHQSw4QkFESCxHQUNZQyxRQUFRLFFBQVIsQ0FEWjs7QUFFSEMsZ0NBQVFDLEdBQVIsQ0FBWSx3Q0FBWjtBQUNBSCwrQkFBT0ksTUFBUCxDQUFjQyxzQkFBZCxDQUFxQyx1Q0FBckM7O0FBSEcseURBS0lMLE9BQU9NLFNBQVAsQ0FBaUJDLFNBQWpCLENBQTJCLHlCQUEzQixFQUFzRCxvQkFBdEQsRUFBNEUsQ0FBNUUsRUFDRkMsSUFERSxDQUNHLGtCQUFVO0FBQ1osZ0NBQUksQ0FBQ0MsTUFBRCxJQUFXQSxPQUFPQyxNQUFQLElBQWlCLENBQWhDLEVBQW1DO0FBQy9CVix1Q0FBT0ksTUFBUCxDQUFjTyxnQkFBZCxDQUErQiw2Q0FBL0I7QUFDQVQsd0NBQVFVLEtBQVIsQ0FBYywyRUFBZDs7QUFFQSxzQ0FBTSwyRUFBTjtBQUNIO0FBQ0QsZ0NBQUlDLHdCQUF3QixFQUE1QjtBQUNBSixtQ0FBT0ssT0FBUCxDQUFnQixlQUFPO0FBQ25CLG9DQUFNQyxXQUFXQyxJQUFJQyxNQUFyQjtBQUNBLG9DQUFNQyxVQUFVLGtDQUFvQkYsR0FBcEIsQ0FBaEI7O0FBRUEsb0NBQU1HLGNBQWNELFFBQVEsYUFBUixDQUFwQjtBQUNBLG9DQUFNRSxpQkFBaUJGLFFBQVEsZ0JBQVIsQ0FBdkI7QUFDQSxvQ0FBTUcscUJBQXFCSCxRQUFRLG9CQUFSLENBQTNCO0FBQ0Esb0NBQU1JLE9BQU9KLFFBQVEsTUFBUixDQUFiO0FBQ0Esb0NBQU1LLGVBQWVELFFBQVFBLEtBQUtFLFFBQWIsSUFBeUJDLFNBQTlDO0FBQ0Esb0NBQUlOLGdCQUFnQk0sU0FBaEIsSUFBNkJMLG1CQUFtQkssU0FBaEQsSUFBNkRKLHVCQUF1QkksU0FBcEYsSUFBaUdGLGlCQUFpQkUsU0FBdEgsRUFBaUk7QUFDN0h6QiwyQ0FBT0ksTUFBUCxDQUFjTyxnQkFBZCw2REFBeUZJLFFBQXpGO0FBQ0gsaUNBRkQsTUFFTztBQUNIRiwwREFBc0JhLElBQXRCLENBQTJCLElBQUlDLDJCQUFKLENBQWdDUixXQUFoQyxFQUE2Q0MsY0FBN0MsRUFBNkRDLGtCQUE3RCxFQUFpRixJQUFJTyxVQUFKLENBQVNMLFlBQVQsQ0FBakYsRUFBeUdSLFFBQXpHLENBQTNCO0FBQ0g7QUFDSiw2QkFkRDs7QUFnQkEsbUNBQU9GLHFCQUFQO0FBRUgseUJBM0JFLEVBMkJBLGlCQUFTO0FBQ1Isa0NBQU1ELEtBQU47QUFDSCx5QkE3QkUsQ0FMSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOztvQkFBZWlCLGdDOzs7OztBQVJ0Qjs7QUFDQTs7OztJQTJDYUYsMkIsV0FBQUEsMkI7QUFDVDs7Ozs7OztBQU9DLHlDQUFhUixXQUFiLEVBQTBCQyxjQUExQixFQUEwQ0Msa0JBQTFDLEVBQThEQyxJQUE5RCxFQUFvRVEsUUFBcEUsRUFBOEU7QUFBQTs7QUFDM0UsYUFBS0MsWUFBTCxHQUFvQlosV0FBcEI7QUFDQSxhQUFLYSxlQUFMLEdBQXVCWixjQUF2QjtBQUNBLGFBQUthLG1CQUFMLEdBQTJCWixrQkFBM0I7QUFDQSxhQUFLYSxLQUFMLEdBQWFaLElBQWI7QUFDQSxhQUFLYSxTQUFMLEdBQWlCTCxRQUFqQjtBQUNIO0FBQ0Q7Ozs7Ozs7OzRCQUlrQjtBQUNkLG1CQUFPLEtBQUtDLFlBQVo7QUFDSDtBQUNEOzs7Ozs7OzRCQUlxQjtBQUNqQixtQkFBTyxLQUFLQyxlQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs0QkFJeUI7QUFDckIsbUJBQU8sS0FBS0MsbUJBQVo7QUFDSDtBQUNEOzs7Ozs7OzRCQUlXO0FBQ1AsbUJBQU8sS0FBS0MsS0FBWjtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7NEJBT2U7QUFDWCxtQkFBTyxLQUFLQyxTQUFaO0FBQ0giLCJmaWxlIjoiQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuL0NvcmVcIjtcbmltcG9ydCB7IHJlYWRKc29uRnJvbVVyaVN5bmMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuXG4vKipcbiAqIExvYWRzIHRoZSBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbnNcbiAqIEBleHBvcnRcbiAqIEByZXR1cm5zIHtQcm9taXNlPEJvdW5kZWRDb250ZXh0Q29uZmlndXJhdGlvbltdPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb25zKCkge1xuICAgIGNvbnN0IHZzY29kZSA9IHJlcXVpcmUoJ3ZzY29kZScpO1xuICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9ucycpO1xuICAgIHZzY29kZS53aW5kb3cuc2hvd0luZm9ybWF0aW9uTWVzc2FnZSgnTG9hZGluZyBib3VuZGVkIGNvbnRleHQgY29uZmlndXJhdGlvbicpO1xuXG4gICAgcmV0dXJuIHZzY29kZS53b3Jrc3BhY2UuZmluZEZpbGVzKCcqKi9ib3VuZGVkLWNvbnRleHQuanNvbicsICcqKi9ub2RlX21vZHVsZXMvKionLCAyKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQgfHwgcmVzdWx0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKCdFcnJvciBsb2FkaW5nIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ291bGRuXFwndCBmaW5kIGFueSBcXCdib3VuZGVkLWNvbnRleHQuanNvblxcJyBmaWxlIGluIHRoZSBjdXJyZW50IHdvcmtzcGFjZScpO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgJ0NvdWxkblxcJ3QgZmluZCBhbnkgXFwnYm91bmRlZC1jb250ZXh0Lmpzb25cXCcgZmlsZSBpbiB0aGUgY3VycmVudCB3b3Jrc3BhY2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGJvdW5kZWRDb250ZXh0Q29uZmlncyA9IFtdO1xuICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goIHVyaSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSB1cmkuZnNQYXRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25PYmogPSByZWFkSnNvbkZyb21VcmlTeW5jKHVyaSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwbGljYXRpb24gPSBqc29uT2JqWydhcHBsaWNhdGlvbiddO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvdW5kZWRDb250ZXh0ID0ganNvbk9ialsnYm91bmRlZENvbnRleHQnXTtcbiAgICAgICAgICAgICAgICBjb25zdCBib3VuZGVkQ29udGV4dE5hbWUgPSBqc29uT2JqWydib3VuZGVkQ29udGV4dE5hbWUnXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3JlID0ganNvbk9ialsnY29yZSddO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvcmVMYW5ndWFnZSA9IGNvcmUgfHwgY29yZS5sYW5ndWFnZSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgaWYgKGFwcGxpY2F0aW9uID09PSB1bmRlZmluZWQgfHzCoGJvdW5kZWRDb250ZXh0ID09PSB1bmRlZmluZWQgfHwgYm91bmRlZENvbnRleHROYW1lID09PSB1bmRlZmluZWQgfHwgY29yZUxhbmd1YWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdnNjb2RlLndpbmRvdy5zaG93RXJyb3JNZXNzYWdlKGBGb3VuZCBhbiBpbnZhbGlkIGJvdW5kZWQgY29udGV4dCBjb25maWd1cmF0aW9uIGF0IHBhdGggJHtmaWxlUGF0aH1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBib3VuZGVkQ29udGV4dENvbmZpZ3MucHVzaChuZXcgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uKGFwcGxpY2F0aW9uLCBib3VuZGVkQ29udGV4dCwgYm91bmRlZENvbnRleHROYW1lLCBuZXcgQ29yZShjb3JlTGFuZ3VhZ2UpLCBmaWxlUGF0aCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYm91bmRlZENvbnRleHRDb25maWdzO1xuICAgICAgICAgICAgXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbn1cbmV4cG9ydCBjbGFzcyBCb3VuZGVkQ29udGV4dENvbmZpZ3VyYXRpb24ge1xuICAgIC8qKlxuICAgICAgKiBJbnN0YW50aWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQm91bmRlZENvbnRleHRcbiAgICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcGxpY2F0aW9uIFxuICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYm91bmRlZENvbnRleHQgXG4gICAgICAqIEBwYXJhbSB7c3RyaW5nfSBib3VuZGVkQ29udGV4dE5hbWUgXG4gICAgICAqIEBwYXJhbSB7Q29yZX0gY29yZSBcbiAgICAgICovXG4gICAgIGNvbnN0cnVjdG9yIChhcHBsaWNhdGlvbiwgYm91bmRlZENvbnRleHQsIGJvdW5kZWRDb250ZXh0TmFtZSwgY29yZSwgcm9vdFBhdGgpIHtcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb24gPSBhcHBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5fYm91bmRlZENvbnRleHQgPSBib3VuZGVkQ29udGV4dDtcbiAgICAgICAgdGhpcy5fYm91bmRlZENvbnRleHROYW1lID0gYm91bmRlZENvbnRleHROYW1lO1xuICAgICAgICB0aGlzLl9jb3JlID0gY29yZTtcbiAgICAgICAgdGhpcy5fcm9vdFBhdGggPSByb290UGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICAqIEdldHMgdGhlIGFwcGxpY2F0aW9uIEdVSURcbiAgICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIEdVSUQgb2YgdGhlIEFwcGxpY2F0aW9uXG4gICAgICAqL1xuICAgIGdldCBhcHBsaWNhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgICogR2V0cyB0aGUgYm91bmRlZCBjb250ZXh0IEdVSURcbiAgICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIEdVSUQgb2YgdGhlIGJvdW5kZWQgY29udGV4dFxuICAgICAgKi9cbiAgICBnZXQgYm91bmRlZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZGVkQ29udGV4dDtcbiAgICB9XG4gICAgLyoqXG4gICAgICAqIEdldHMgdGhlIG5hbWUgb2YgdGhlIGJvdW5kZWQgY29udGV4dFxuICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBCb3VuZGVkIENvbnRleHQgbmFtZVxuICAgICAgKi9cbiAgICBnZXQgYm91bmRlZENvbnRleHROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRlZENvbnRleHROYW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgICogR2V0cyB0aGUgY29yZSBjb25maWd1cmF0aW9uIFxuICAgICAgKiBAcmV0dXJucyB7Q29yZX1cbiAgICAgICovXG4gICAgZ2V0IGNvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwYXRoIG9mIHRoZSBjb25maWd1cmF0aW9uIGZpbGVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQm91bmRlZENvbnRleHRDb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgZ2V0IHJvb3RQYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdFBhdGg7XG4gICAgfVxufSJdfQ==