<a name="authClass"></a>

## authClass
authClass

**Kind**: global class  

* [authClass](#authClass)
    * [.checkTokenAndRefresh()](#authClass+checkTokenAndRefresh) ⇒ <code>Promise</code>
    * [.setStatus(status)](#authClass+setStatus)
    * [.logIn(params)](#authClass+logIn) ⇒ <code>Promise</code>
    * [.loggedIn(tokenData)](#authClass+loggedIn) ⇒
    * [.logout()](#authClass+logout)
    * [.refreshTokenData()](#authClass+refreshTokenData)

<a name="authClass+checkTokenAndRefresh"></a>

### authClass.checkTokenAndRefresh() ⇒ <code>Promise</code>
Verify token and refresh if valid

**Kind**: instance method of [<code>authClass</code>](#authClass)  
**Returns**: <code>Promise</code> - A promise that is resolved with token if token is valid but rejected otherwise  
<a name="authClass+setStatus"></a>

### authClass.setStatus(status)
persist token & other data in local storage

**Kind**: instance method of [<code>authClass</code>](#authClass)  

| Param | Type |
| --- | --- |
| status | <code>Object</code> | 
| status.token | <code>string</code> | 
| status.broker | <code>string</code> | 
| status.botId | <code>string</code> | 

<a name="authClass+logIn"></a>

### authClass.logIn(params) ⇒ <code>Promise</code>
Log in and get token from FarmBot REST API

**Kind**: instance method of [<code>authClass</code>](#authClass)  
**Returns**: <code>Promise</code> - A promise that is resolved with token if log in is successful or rejected if unsuccessful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | {user: {email, password}} |
| params.email | <code>string</code> | FarmBot webapp email |
| params.password | <code>string</code> | FarmBot webapp email |

<a name="authClass+loggedIn"></a>

### authClass.loggedIn(tokenData) ⇒
Save token received from REST API to local storage

**Kind**: instance method of [<code>authClass</code>](#authClass)  
**Returns**: void  

| Param | Type | Description |
| --- | --- | --- |
| tokenData | <code>object</code> | response from REST API |

<a name="authClass+logout"></a>

### authClass.logout()
Logout. Delete token from localStorage

**Kind**: instance method of [<code>authClass</code>](#authClass)  
<a name="authClass+refreshTokenData"></a>

### authClass.refreshTokenData()
update FarmBot parameters (broker, token, botId) of this instance from local storage

**Kind**: instance method of [<code>authClass</code>](#authClass)  
