/**
* An HTTPClient which can be used as an alternative to XMLHttpRequest.
* @class Titanium.Network.HTTPClient
* @member Titanium.Network
*/
Titanium.Network.HTTPClient = {
/**
* Aborts an in progress connection
* @return {String}
* @member Titanium.Network.HTTPClient
*/
abort: function(){},

/**
* Clear any cookies set on the request
* @return {String}
* @member Titanium.Network.HTTPClient
*/
clearCookies: function(){},

/**
* Whether an HTTPClient object is connected or not
* @property {String}
* @member Titanium.Network.HTTPClient
*/
connected: null,

/**
* Amount of data received from server so far. Updated on HTTP_DATA_RECEIVED event.
* @property {String}
* @member Titanium.Network.HTTPClient
*/
dataReceived: null,

/**
* Amount of data sent to server so far. Updated on HTTP_DATA_SENT event.
* @property {String}
* @member Titanium.Network.HTTPClient
*/
dataSent: null,

/**
* The DONE readyState property
* @property {String}
* @member Titanium.Network.HTTPClient
*/
DONE: null,

/**
* Get a HTTP cookie from the response.
* @param {String} name name of the cookie to get
* @return {Titanium.Network.HTTPCookie}
* @member Titanium.Network.HTTPClient
*/
getCookie: function(name){},

/**
* "Return the value of a response header, given it's name. If the given name occurs multiple times, this method will only return one occurence."
* @param {String} name The response header name.
* @return {String}
* @member Titanium.Network.HTTPClient
*/
getResponseHeader: function(name){},

/**
* Get the maximum number of redirects to follow. The default is -1, which means that there is no maximum limit to the number of redirects to follow.
* @return {Number}
* @member Titanium.Network.HTTPClient
*/
getMaxRedirects: function(){},

/**
* Return all response headers as an array of two element arrays.
* @return {Array<Array<String, String>>}
* @member Titanium.Network.HTTPClient
*/
getResponseHeaders: function(){},

/**
* Return the current timeout setting of this Network.HTTPClient
* object in milliseconds. Thie value may be -1 to indicate no
* timeout. The default timeout value is five minutes.
* @return {Number}
* @member Titanium.Network.HTTPClient
*/
getTimeout: function(){},

/**
* The HEADERS_RECEIVED readyState property
* @property {String}
* @member Titanium.Network.HTTPClient
*/
HEADERS_RECEIVED: null,

/**
* The LOADING readyState property
* @property {String}
* @member Titanium.Network.HTTPClient
*/
LOADING: null,

/**
* The handler function that will be fired as stream data is received from an HTTP request
* @property {String}
* @member Titanium.Network.HTTPClient
*/
ondatastream: null,

/**
* The handler function that will be fired when request is completed
* @property {String}
* @member Titanium.Network.HTTPClient
*/
onload: null,

/**
* The handler function that will be fired when the readyState code of an HTTPClient object changes.
* @property {String}
* @member Titanium.Network.HTTPClient
*/
onreadystatechange: null,

/**
* The handler function that will be fired as the stream data is sent.
* @property {String}
* @member Titanium.Network.HTTPClient
*/
onsendstream: null,

/**
* Opens an HTTP connection
* @param {String} method The HTTP method to use e.g. POST
* @param {String} url The url to connect to
* @param {Boolean} asynchronous "(optional) Whether or not the request should be asynchronous (default: True)"
* @param {String} username (optional) The HTTP username to use
* @param {String} password (optional) The HTTP password to use
* @return {Boolean}
* @member Titanium.Network.HTTPClient
*/
open: function(method, url, asynchronous, username, password){},

/**
* The OPENED readyState property
* @property {String}
* @member Titanium.Network.HTTPClient
*/
OPENED: null,

/**
* The ready-state status for the connection
* @property {String}
* @member Titanium.Network.HTTPClient
*/
readyState: null,

/**
* Sends a request to the server and receive data with the provided handler.
* @param {Object|Function} handler A handler to receive the response data. handler can either be Titanium.Filesystem.File or a Function.
* @param {Object|String|null} data (optional) Data to send to the server.
* @return {Boolean}
* @member Titanium.Network.HTTPClient
*/
receive: function(handler, data){},

/**
* The response of an HTTP request as a Bytes. Currently this property is only valid after the request has been completed.
* @property {String}
* @member Titanium.Network.HTTPClient
*/
responseData: null,

/**
* The response of an HTTP request as text
* @property {String}
* @member Titanium.Network.HTTPClient
*/
responseText: null,

/**
* The response of an HTTP request as parsable XML
* @property {String}
* @member Titanium.Network.HTTPClient
*/
responseXML: null,

/**
* Sends data through the HTTP connection
* @param {Object|String|null} data (optional) Data to send to the server.
* @return {Boolean}
* @member Titanium.Network.HTTPClient
*/
send: function(data){},

/**
* Sends the contents of a file as body content
* @param {Titanium.Filesystem.File} file the File object to send
* @return {String}
* @member Titanium.Network.HTTPClient
*/
sendFile: function(file){},

/**
* Set the basic authentication credentials
* @param {String} username The username to use or an empty String to use none.
* @param {String} password The password to use or an empty String to use none.
* @return {String}
* @member Titanium.Network.HTTPClient
*/
setBasicCredentials: function(username, password){},

/**
* Set a HTTP cookie in the request.
* @param {String} name the cookie name
* @param {String} value the cookie value
* @return {String}
* @member Titanium.Network.HTTPClient
*/
setCookie: function(name, value){},

/**
* Set the authentication credentials for the HTTPClient.
* @param {String} username The username to use or an empty String to use none.
* @param {String} password The password to use or an empty String to use none.
* @return {String}
* @member Titanium.Network.HTTPClient
*/
setCredentials: function(username, password){},

/**
* Set the maximum number of redirects to follow. The default is -1, which means that there is no maximum limit to the number of redirects to follow.
* @param {Number} amount the number of redirects to follow.
* @return {String}
* @member Titanium.Network.HTTPClient
*/
setMaxRedirects: function(amount){},

/**
* Sets a request header for the connection
* @param {String} header request header name
* @param {String} value request header value
* @return {String}
* @member Titanium.Network.HTTPClient
*/
setRequestHeader: function(header, value){},

/**
* Set the timeout setting of this Network.HTTPClient.
* Thie value may be -1 to indicate no timeout. The default
* timeout value is five minutes.
* @param {Number} timeout The new timeout value in milliseconds.
* @return {String}
* @member Titanium.Network.HTTPClient
*/
setTimeout: function(timeout){},

/**
* The response status code of an HTTP request
* @property {String}
* @member Titanium.Network.HTTPClient
*/
status: null,

/**
* The response status text of an HTTP Request
* @property {String}
* @member Titanium.Network.HTTPClient
*/
statusText: null,

/**
* True if HTTP request timed out
* @property {String}
* @member Titanium.Network.HTTPClient
*/
timedOut: null,

/**
* The UNSENT readyState property.
* @property {String}
* @member Titanium.Network.HTTPClient
*/
UNSENT: null,

/**
* The request URL. This value will be updated on redirect events.
* @property {String}
* @member Titanium.Network.HTTPClient
*/
url: null,

/**
* "User agent string to use for requests. (Default: Titanium.userAgent)"
* @property {String}
* @member Titanium.Network.HTTPClient
*/
userAgent: null}

