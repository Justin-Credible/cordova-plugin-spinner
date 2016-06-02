// Type definitions for cordova-plugin-spinner 1.1.0
// Project: https://github.com/Justin-Credible/cordova-plugin-spinner
// Definitions by: Justin Unterreiner <https://github.com/Justin-Credible>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module SpinnerPlugin {

    interface SpinnerPluginStatic {

        /**
         * Blocks user input using an indeterminate spinner.
         * 
         * An optional label can be shown below the spinner.
         * 
         * @param labelText The optional value to show in a label.
         * @param options - The optional options object used to customize behavior.
         * @param successCallback The success callback for this asynchronous function.
         * @param failureCallback The failure callback for this asynchronous function; receives an error string.
         */
        activityStart(labelText?: string, options?: Options, successCallback?: () => void, failureCallback?: (error: string) => void): void;

        /**
         * Allows user input by hiding the indeterminate spinner.
         * 
         * @param successCallback The success callback for this asynchronous function.
         * @param failureCallback The failure callback for this asynchronous function; receives an error string.
         */
        activityStop(successCallback?: () => void, failureCallback?: (error: string) => void): void;
    }

    /**
     * The options object used to customize the dialog's behavior.
     */
    interface Options {

        /**
         * True to use a dimmed background which overlays all content.
         * 
         * If not provided, defaults to true.
         */
        dimBackground?: boolean;
    }
}

declare var SpinnerPlugin: SpinnerPlugin.SpinnerPluginStatic;
