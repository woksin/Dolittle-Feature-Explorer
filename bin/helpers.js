'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readJsonFromUriSync = readJsonFromUriSync;

var _vscode = require('vscode');

var fs = require('fs-extra');

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Reads json object from file given by uri
 *
 * @export
 * @param {Uri} uri
 * @returns {any}
 */
function readJsonFromUriSync(uri) {
  if (uri.scheme !== 'file') throw uri.fsPath + ' is not a file';
  return fs.readJsonSync(uri.fsPath);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NvdXJjZS9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbInJlYWRKc29uRnJvbVVyaVN5bmMiLCJmcyIsInJlcXVpcmUiLCJ1cmkiLCJzY2hlbWUiLCJmc1BhdGgiLCJyZWFkSnNvblN5bmMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBZWlCQSxtQixHQUFBQSxtQjs7QUFmakI7O0FBQ0EsSUFBTUMsS0FBS0MsUUFBUSxVQUFSLENBQVg7O0FBRUE7Ozs7O0FBS0M7Ozs7Ozs7QUFPTyxTQUFTRixtQkFBVCxDQUE2QkcsR0FBN0IsRUFBa0M7QUFDdEMsTUFBSUEsSUFBSUMsTUFBSixLQUFlLE1BQW5CLEVBQTJCLE1BQVNELElBQUlFLE1BQWI7QUFDM0IsU0FBT0osR0FBR0ssWUFBSCxDQUFnQkgsSUFBSUUsTUFBcEIsQ0FBUDtBQUNGIiwiZmlsZSI6ImhlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVcmkgfSBmcm9tIFwidnNjb2RlXCI7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzLWV4dHJhJyk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuIC8qKlxuICAqIFJlYWRzIGpzb24gb2JqZWN0IGZyb20gZmlsZSBnaXZlbiBieSB1cmlcbiAgKlxuICAqIEBleHBvcnRcbiAgKiBAcGFyYW0ge1VyaX0gdXJpXG4gICogQHJldHVybnMge2FueX1cbiAgKi9cbiBleHBvcnQgZnVuY3Rpb24gcmVhZEpzb25Gcm9tVXJpU3luYyh1cmkpIHtcbiAgICBpZiAodXJpLnNjaGVtZSAhPT0gJ2ZpbGUnKSB0aHJvdyBgJHt1cmkuZnNQYXRofSBpcyBub3QgYSBmaWxlYFxuICAgIHJldHVybiBmcy5yZWFkSnNvblN5bmModXJpLmZzUGF0aCk7XG4gfSJdfQ==