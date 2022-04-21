<a name="sceneController"></a>

## sceneController
sceneController

**Kind**: global class  

* [sceneController](#sceneController)
    * [.checkTokenAndRefresh()](#sceneController+checkTokenAndRefresh) ⇒ <code>Promise</code>
    * [.setStatus(status)](#sceneController+setStatus)
    * [.allScenes()](#sceneController+allScenes) ⇒ <code>Array</code>

<a name="sceneController+checkTokenAndRefresh"></a>

### sceneController.checkTokenAndRefresh() ⇒ <code>Promise</code>
Verify token and refresh if valid

**Kind**: instance method of [<code>sceneController</code>](#sceneController)  
**Returns**: <code>Promise</code> - A promise that is resolved with token if token is valid but rejected otherwise  
<a name="sceneController+setStatus"></a>

### sceneController.setStatus(status)
persist token & other data in local storage

**Kind**: instance method of [<code>sceneController</code>](#sceneController)  

| Param | Type |
| --- | --- |
| status | <code>Object</code> | 
| status.token | <code>string</code> | 
| status.broker | <code>string</code> | 
| status.botId | <code>string</code> | 

<a name="sceneController+allScenes"></a>

### sceneController.allScenes() ⇒ <code>Array</code>
List all scenes

**Kind**: instance method of [<code>sceneController</code>](#sceneController)  
**Returns**: <code>Array</code> - - Array of scenes  
