"use strict";

var exec = require("cordova/exec");

/**
 * The Cordova plugin ID for this plugin.
 */
var PLUGIN_ID = "SpinnerPlugin";

/**
 * The plugin which will be exported and exposed in the global scope.
 */
var SpinnerPlugin = {};

/**
 * Blocks user input using an indeterminate spinner.
 * 
 * An optional label can be shown below the spinner.
 * 
 * @param [string] labelText - The optional value to show in a label.
 * @param [options] options - The optional options object used to customize behavior.
 * @param [function] successCallback - The success callback for this asynchronous function.
 * @param [function] failureCallback - The failure callback for this asynchronous function; receives an error string.
 */
SpinnerPlugin.activityStart = function activityStart(labelText, options, successCallback, failureCallback) {

	// Ensure that only string values are passed in.
	if (typeof(labelText) !== "string") {
		labelText = "";
	}

	if (!options || typeof(options) !== "object") {
		options = {};
	}

	if (typeof(options.dimBackground) !== "boolean") {
		options.dimBackground = true;
	}

	exec(successCallback, failureCallback, PLUGIN_ID, "activityStart", [labelText, options.dimBackground]);
};

/**
 * Allows user input by hiding the indeterminate spinner.
 * 
 * @param [function] successCallback - The success callback for this asynchronous function.
 * @param [function] failureCallback - The failure callback for this asynchronous function; receives an error string.
 */
SpinnerPlugin.activityStop = function activityStop(successCallback, failureCallback) {
	exec(successCallback, failureCallback, PLUGIN_ID, "activityStop", []);
};

module.exports = SpinnerPlugin;
