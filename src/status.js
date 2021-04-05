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
 * @module status
 */


export class status {
    /**
     * Constructor
     * @param {function} options.events - event emitter
     */
    constructor(options = {}) {
        this.events = options.events
        this.status = {
            Device: false,
            "Other Clients": false,
            Mathematica: false,
            mqtt: false
        }
        this.events.on('status', (message) => {
            this.processStatus(message);
        })
    }

    /**
     * process message
     * @param {Object} statusMsg
     */
    processStatus(statusMsg) {
        if (typeof statusMsg !== 'object') {
            return false;
        }
        for (let key in statusMsg) {
            let val = statusMsg[key];
            this.status[key] = val
        }
    }

    /**
     * Get status
     * @returns {Object}
     */
    getStatus() {
        return this.status
    }

}