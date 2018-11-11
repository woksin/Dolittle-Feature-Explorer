import { Uri } from "vscode";
const fs = require('fs-extra');

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
 export function readJsonFromUriSync(uri) {
    if (uri.scheme !== 'file') throw `${uri.fsPath} is not a file`
    return fs.readJsonSync(uri.fsPath);
 }