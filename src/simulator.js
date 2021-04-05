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
"use strict";
/**
 * @module simulator
 */
import * as BABYLON from "babylonjs";

export class simulator {
    /**
     * Constructor
     * @param {Object} options
     * @param {function} options.events - event emitter
     * @param {Object} options.canvas - canvas element
     */
    constructor(options = {}) {
        this.canvas = options.canvas
        this.events = options.events
        // Load the 3D engine
        this.engine = new BABYLON.Engine(this.canvas, true, {
          preserveDrawingBuffer: true,
          stencil: true
        });
    }
}