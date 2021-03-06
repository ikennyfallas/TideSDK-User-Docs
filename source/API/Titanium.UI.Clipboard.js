/**
* A module used for accessing clipboard data.
* @class Titanium.UI.Clipboard
* @member Titanium.UI
*/
Titanium.UI.Clipboard = {
/**
* Clear data of the given mime-type from the clipboard. If no mime-type is given, clear all data from the clipboard.
* @param {String} type (optional) The mime-type of the data to clear.
* @return {String}
* @member Titanium.UI.Clipboard
*/
clearData: function(type){},

/**
* Clear the text portion of the clipboard.
* @return {String}
* @member Titanium.UI.Clipboard
*/
clearText: function(){},

/**
* Get the data on the clipboard from the portion which contains data of the given mime-type.
* @param {String} type The mime-type of the data to get.
* @return {String}
* @member Titanium.UI.Clipboard
*/
getData: function(type){},

/**
* Get the current text on the clipboard.
* @return {String}
* @member Titanium.UI.Clipboard
*/
getText: function(){},

/**
* Return true if there is any content of the given mime-type on the clipboard.
* @param {String} type (optional) The mime-type of the data to check.
* @return {Boolean}
* @member Titanium.UI.Clipboard
*/
hasData: function(type){},

/**
* Return true if there is any content in the text portion of the clipboard.
* @return {Boolean}
* @member Titanium.UI.Clipboard
*/
hasText: function(){},

/**
* Set the data on the clipboard given a mime-type and the new data. This method will set data on the appropriate portion of the clipboard for the given mime-type.
* @param {String} type The mime-type of the data to set.
* @param {String} data The new clipboard text.
* @return {String}
* @member Titanium.UI.Clipboard
*/
setData: function(type, data){},

/**
* Set the text on the clipboard. This will overwrite the current contents of the clipboard.
* @param {String} newText The new clipboard text. If the text is an empty string, the text portion of the clipboard will be cleared.
* @return {String}
* @member Titanium.UI.Clipboard
*/
setText: function(newText){}}

