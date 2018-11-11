/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Core } from "./Core";
import { readJsonFromUriSync } from "../helpers";

/**
 * Loads the bounded context configurations
 * @export
 * @returns {Promise<BoundedContextConfiguration[]>}
 */
export async function loadBoundedContextConfigurations() {
    const vscode = require('vscode');
    console.log('Loading bounded context configurations');
    vscode.window.showInformationMessage('Loading bounded context configuration');

    return vscode.workspace.findFiles('**/bounded-context.json', '**/node_modules/**', 2)
        .then(result => {
            if (!result || result.length == 0) {
                vscode.window.showErrorMessage('Error loading bounded context configuration');
                console.error('Couldn\'t find any \'bounded-context.json\' file in the current workspace');

                throw 'Couldn\'t find any \'bounded-context.json\' file in the current workspace';
            }
            let boundedContextConfigs = [];
            result.forEach( uri => {
                const filePath = uri.fsPath;
                const jsonObj = readJsonFromUriSync(uri);
                
                const application = jsonObj['application'];
                const boundedContext = jsonObj['boundedContext'];
                const boundedContextName = jsonObj['boundedContextName'];
                const core = jsonObj['core'];
                const coreLanguage = core || core.language || undefined;
                if (application === undefined || boundedContext === undefined || boundedContextName === undefined || coreLanguage === undefined) {
                    vscode.window.showErrorMessage(`Found an invalid bounded context configuration at path ${filePath}`);
                } else {
                    boundedContextConfigs.push(new BoundedContextConfiguration(application, boundedContext, boundedContextName, new Core(coreLanguage), filePath));
                }
            });

            return boundedContextConfigs;
            
        }, error => {
            throw error;
        });
}
export class BoundedContextConfiguration {
    /**
      * Instantiates an instance of BoundedContext
      * @param {string} application 
      * @param {string} boundedContext 
      * @param {string} boundedContextName 
      * @param {Core} core 
      */
     constructor (application, boundedContext, boundedContextName, core, rootPath) {
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
    get application() {
        return this._application;
    }
    /**
      * Gets the bounded context GUID
      * @returns {string} The GUID of the bounded context
      */
    get boundedContext() {
        return this._boundedContext;
    }
    /**
      * Gets the name of the bounded context
      * @returns {string} Bounded Context name
      */
    get boundedContextName() {
        return this._boundedContextName;
    }
    /**
      * Gets the core configuration 
      * @returns {Core}
      */
    get core() {
        return this._core;
    }
    /**
     * Gets the path of the configuration file
     * 
     * @returns {string} 
     * @readonly
     * @memberof BoundedContextConfiguration
     */
    get rootPath() {
        return this._rootPath;
    }
}