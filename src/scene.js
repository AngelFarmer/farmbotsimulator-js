/* Copyright 2020 Brian Onang'o
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const allScenes = {
    "2d": "2D",
    "3dconly": "Light 3D",
    "3dbab": "Heavy 3D",
}

/**
* sceneController
*/

class sceneController {
    constructor() {

    }
    /**
     * List all scenes
     * @returns {Array} - Array of scenes
     */
    allScenes() {
        return Object.values(allScenes);
    }

    /**
     * Get default scene
     * @returns {string} - Default scene
     */
    defaultScene() {
        let allScenes = this.allScenes()
        return allScenes[0]
        // let keys = Object.keys(allScenes)
        // return allScenes[keys[0]]
    }

    /**
     * Change the selected scene
     * @param {string} scene - Selected Scene
     */
    setScene(scene) {
        window.localStorage.setItem('farmbotSimulator-scene', scene);
    }

    /**
     * Get the current scene
     * @returns {string} - Current scene
     */
    getScene() {
        let scene;
        try {
            //    scene = JSON.parse(window.localStorage.getItem('farmbotSimulator-scene')) || false
            scene = window.localStorage.getItem('farmbotSimulator-scene') || false
        } catch (err) {
        }
        if (!scene) {
            scene = this.defaultScene();
            this.setScene(scene)
        }
        return scene
    }
    addRule(selector, css) {
        const getStyleRuleIndexBySelector = (selector, prop) => {
            let result = []
            for (let j = 0; j < document.styleSheets.length; j++) {
                let styleSheet = document.styleSheets[j];
                const rules = styleSheet.cssRules;
                let
                    i,
                    value = (prop ? selector + "{" + prop + "}" : selector).replace(/\s/g, ''), // remove whitespaces
                    s = prop ? "cssText" : "selectorText";

                for (i = 0; i < rules.length; i++) {
                    try {
                        let re = new RegExp(value.replace(/\(/g, '\\(').replace(/\)/g, '\\)'), 'g');
                        if (rules[i][s].match(re)) {
                            result.push([styleSheet, i, rules[i][s]]);
                        }
                    } catch (err) { }
                }

            }
            return result;

        }
        let sheets = getStyleRuleIndexBySelector(selector,)
        sheets.map(([sheet, ruleIndex, ruleName]) => {
            let propText = typeof css === "string" ? css : Object.keys(css).map(function (p) {
                return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
            }).join(";");
            sheet.deleteRule(ruleIndex);
            sheet.insertRule(ruleName + "{" + propText + "}", sheet.cssRules.length);
        })
    };
}

export const scene = new sceneController();