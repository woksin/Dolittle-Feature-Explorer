'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApplicationConfiguration = exports.loadApplicationConfiguration = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Loads application configurations from the current workspace
 * @returns {Promise<ApplicationConfiguration>}
 * @export
 */
var loadApplicationConfiguration = exports.loadApplicationConfiguration = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var vscode;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        vscode = require('vscode');


                        console.log('Loading application configuration');
                        vscode.window.showInformationMessage('Loading application configuration');

                        return _context.abrupt('return', vscode.workspace.findFiles('**/application.json', '**/node_modules/**', 2).then(function (result) {
                            if (!result || result.length == 0) {
                                vscode.window.showErrorMessage('Error loading application configuration');
                                console.error('Couldn\'t find any \'application.json\' file in the current workspace');

                                throw 'Couldn\'t find any \'application.json\' file in the current workspace';
                            }
                            if (result.length > 1) {
                                vscode.window.showErrorMessage('Error loading application configuration');
                                console.error('Found more than one \'application.json\' file in the current workspace');

                                throw 'Found more than one \'application.json\' file in the current workspace';
                            }

                            var uri = result[0];
                            var filePath = uri.fsPath;
                            var jsonObj = (0, _helpers.readJsonFromUriSync)(uri);
                            console.log(jsonObj);

                            var applicationId = jsonObj['id'];
                            var applicationName = jsonObj['name'];
                            if (applicationId === undefined || applicationName === undefined) {
                                vscode.window.showErrorMessage('Found an invalid application configuration at path ' + filePath);
                            } else {
                                return new ApplicationConfiguration({ id: applicationId, name: applicationName }, filePath);
                            };
                        }, function (error) {
                            throw error;
                        }));

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function loadApplicationConfiguration() {
        return _ref.apply(this, arguments);
    };
}();

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApplicationConfiguration = exports.ApplicationConfiguration = function () {

    /**
     *Creates an instance of ApplicationConfiguration.
     * @param {{id: string, name: string}} application
     * @param {string} rootPath path
     * @memberof ApplicationConfiguration
     */
    function ApplicationConfiguration(application, rootPath) {
        (0, _classCallCheck3.default)(this, ApplicationConfiguration);

        this._application = application;
        this._rootPath = rootPath;
    }

    /**
     * Gets the application configuration
     * @returns {{id:string, name:string}} The path to the application configuration file
     * @readonly
     * @memberof ApplicationConfiguration
     */


    (0, _createClass3.default)(ApplicationConfiguration, [{
        key: 'application',
        get: function get() {
            return this._application;
        }
        /**
         * Gets the application configuration's path
         * @returns {string} The path to the application configuration file
         * @readonly
         * @memberof ApplicationConfiguration
         */

    }, {
        key: 'rootPath',
        get: function get() {
            return this._rootPath;
        }
    }]);
    return ApplicationConfiguration;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1NvdXJjZS9Db25maWd1cmF0aW9uL0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJ2c2NvZGUiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNob3dJbmZvcm1hdGlvbk1lc3NhZ2UiLCJ3b3Jrc3BhY2UiLCJmaW5kRmlsZXMiLCJ0aGVuIiwicmVzdWx0IiwibGVuZ3RoIiwic2hvd0Vycm9yTWVzc2FnZSIsImVycm9yIiwidXJpIiwiZmlsZVBhdGgiLCJmc1BhdGgiLCJqc29uT2JqIiwiYXBwbGljYXRpb25JZCIsImFwcGxpY2F0aW9uTmFtZSIsInVuZGVmaW5lZCIsIkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiIsImlkIiwibmFtZSIsImxvYWRBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24iLCJhcHBsaWNhdGlvbiIsInJvb3RQYXRoIiwiX2FwcGxpY2F0aW9uIiwiX3Jvb3RQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztBQUtBOzs7Ozs7d0ZBS087QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0dBLDhCQURILEdBQ1lDLFFBQVEsUUFBUixDQURaOzs7QUFHSEMsZ0NBQVFDLEdBQVIsQ0FBWSxtQ0FBWjtBQUNBSCwrQkFBT0ksTUFBUCxDQUFjQyxzQkFBZCxDQUFxQyxtQ0FBckM7O0FBSkcseURBTUlMLE9BQU9NLFNBQVAsQ0FBaUJDLFNBQWpCLENBQTJCLHFCQUEzQixFQUFrRCxvQkFBbEQsRUFBd0UsQ0FBeEUsRUFDRkMsSUFERSxDQUNHLGtCQUFVO0FBQ1osZ0NBQUksQ0FBQ0MsTUFBRCxJQUFXQSxPQUFPQyxNQUFQLElBQWlCLENBQWhDLEVBQW1DO0FBQy9CVix1Q0FBT0ksTUFBUCxDQUFjTyxnQkFBZCxDQUErQix5Q0FBL0I7QUFDQVQsd0NBQVFVLEtBQVIsQ0FBYyx1RUFBZDs7QUFFQSxzQ0FBTSx1RUFBTjtBQUNIO0FBQ0QsZ0NBQUlILE9BQU9DLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJWLHVDQUFPSSxNQUFQLENBQWNPLGdCQUFkLENBQStCLHlDQUEvQjtBQUNBVCx3Q0FBUVUsS0FBUixDQUFjLHdFQUFkOztBQUVBLHNDQUFNLHdFQUFOO0FBQ0g7O0FBRUQsZ0NBQU1DLE1BQU1KLE9BQU8sQ0FBUCxDQUFaO0FBQ0EsZ0NBQU1LLFdBQVdELElBQUlFLE1BQXJCO0FBQ0EsZ0NBQU1DLFVBQVUsa0NBQW9CSCxHQUFwQixDQUFoQjtBQUNBWCxvQ0FBUUMsR0FBUixDQUFZYSxPQUFaOztBQUVBLGdDQUFNQyxnQkFBZ0JELFFBQVEsSUFBUixDQUF0QjtBQUNBLGdDQUFNRSxrQkFBa0JGLFFBQVEsTUFBUixDQUF4QjtBQUNBLGdDQUFJQyxrQkFBa0JFLFNBQWxCLElBQStCRCxvQkFBb0JDLFNBQXZELEVBQWtFO0FBQzlEbkIsdUNBQU9JLE1BQVAsQ0FBY08sZ0JBQWQseURBQXFGRyxRQUFyRjtBQUNILDZCQUZELE1BRU87QUFDSCx1Q0FBTyxJQUFJTSx3QkFBSixDQUE2QixFQUFDQyxJQUFJSixhQUFMLEVBQW9CSyxNQUFNSixlQUExQixFQUE3QixFQUF5RUosUUFBekUsQ0FBUDtBQUNIO0FBQ0oseUJBM0JFLEVBMkJBLGlCQUFTO0FBQ1Isa0NBQU1GLEtBQU47QUFDSCx5QkE3QkUsQ0FOSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOztvQkFBZVcsNEI7Ozs7O0FBWnRCOzs7O0lBa0RhSCx3QixXQUFBQSx3Qjs7QUFFVDs7Ozs7O0FBTUEsc0NBQWFJLFdBQWIsRUFBMEJDLFFBQTFCLEVBQW9DO0FBQUE7O0FBQ2hDLGFBQUtDLFlBQUwsR0FBb0JGLFdBQXBCO0FBQ0EsYUFBS0csU0FBTCxHQUFpQkYsUUFBakI7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs0QkFNaUI7QUFDYixtQkFBTyxLQUFLQyxZQUFaO0FBQ0g7QUFDRDs7Ozs7Ozs7OzRCQU1jO0FBQ1YsbUJBQU8sS0FBS0MsU0FBWjtBQUNIIiwiZmlsZSI6IkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRKc29uRnJvbVVyaVN5bmMgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKipcbiAqIExvYWRzIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb25zIGZyb20gdGhlIGN1cnJlbnQgd29ya3NwYWNlXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24+fVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICBjb25zdCB2c2NvZGUgPSByZXF1aXJlKCd2c2NvZGUnKTtcblxuICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24nKTtcbiAgICB2c2NvZGUud2luZG93LnNob3dJbmZvcm1hdGlvbk1lc3NhZ2UoJ0xvYWRpbmcgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbicpO1xuXG4gICAgcmV0dXJuIHZzY29kZS53b3Jrc3BhY2UuZmluZEZpbGVzKCcqKi9hcHBsaWNhdGlvbi5qc29uJywgJyoqL25vZGVfbW9kdWxlcy8qKicsIDIpXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCB8fCByZXN1bHQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0Vycm9yIGxvYWRpbmcgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkblxcJ3QgZmluZCBhbnkgXFwnYXBwbGljYXRpb24uanNvblxcJyBmaWxlIGluIHRoZSBjdXJyZW50IHdvcmtzcGFjZScpO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgJ0NvdWxkblxcJ3QgZmluZCBhbnkgXFwnYXBwbGljYXRpb24uanNvblxcJyBmaWxlIGluIHRoZSBjdXJyZW50IHdvcmtzcGFjZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICB2c2NvZGUud2luZG93LnNob3dFcnJvck1lc3NhZ2UoJ0Vycm9yIGxvYWRpbmcgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZvdW5kIG1vcmUgdGhhbiBvbmUgXFwnYXBwbGljYXRpb24uanNvblxcJyBmaWxlIGluIHRoZSBjdXJyZW50IHdvcmtzcGFjZScpO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgJ0ZvdW5kIG1vcmUgdGhhbiBvbmUgXFwnYXBwbGljYXRpb24uanNvblxcJyBmaWxlIGluIHRoZSBjdXJyZW50IHdvcmtzcGFjZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHVyaSA9IHJlc3VsdFswXTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gdXJpLmZzUGF0aDtcbiAgICAgICAgICAgIGNvbnN0IGpzb25PYmogPSByZWFkSnNvbkZyb21VcmlTeW5jKHVyaSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uT2JqKTtcblxuICAgICAgICAgICAgY29uc3QgYXBwbGljYXRpb25JZCA9IGpzb25PYmpbJ2lkJ107XG4gICAgICAgICAgICBjb25zdCBhcHBsaWNhdGlvbk5hbWUgPSBqc29uT2JqWyduYW1lJ107XG4gICAgICAgICAgICBpZiAoYXBwbGljYXRpb25JZCA9PT0gdW5kZWZpbmVkIHx8wqBhcHBsaWNhdGlvbk5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZzY29kZS53aW5kb3cuc2hvd0Vycm9yTWVzc2FnZShgRm91bmQgYW4gaW52YWxpZCBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uIGF0IHBhdGggJHtmaWxlUGF0aH1gKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbih7aWQ6IGFwcGxpY2F0aW9uSWQsIG5hbWU6IGFwcGxpY2F0aW9uTmFtZX0sIGZpbGVQYXRoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcblxufVxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB7XG5cbiAgICAvKipcbiAgICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQXBwbGljYXRpb25Db25maWd1cmF0aW9uLlxuICAgICAqIEBwYXJhbSB7e2lkOiBzdHJpbmcsIG5hbWU6IHN0cmluZ319IGFwcGxpY2F0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJvb3RQYXRoIHBhdGhcbiAgICAgKiBAbWVtYmVyb2YgQXBwbGljYXRpb25Db25maWd1cmF0aW9uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGFwcGxpY2F0aW9uLCByb290UGF0aCkge1xuICAgICAgICB0aGlzLl9hcHBsaWNhdGlvbiA9IGFwcGxpY2F0aW9uO1xuICAgICAgICB0aGlzLl9yb290UGF0aCA9IHJvb3RQYXRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAcmV0dXJucyB7e2lkOnN0cmluZywgbmFtZTpzdHJpbmd9fSBUaGUgcGF0aCB0byB0aGUgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbiBmaWxlXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIGdldCBhcHBsaWNhdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24ncyBwYXRoXG4gICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHBhdGggdG8gdGhlIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBnZXQgcm9vdFBhdGgoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3RQYXRoO1xuICAgIH1cbn0iXX0=