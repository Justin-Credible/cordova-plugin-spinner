/// <reference path="cordova-plugin-spinner.d.ts" />

let options: SpinnerPlugin.Options = {
    dimBackground: true
};

SpinnerPlugin.activityStart();
SpinnerPlugin.activityStart("a");
SpinnerPlugin.activityStart("a", null);
SpinnerPlugin.activityStart("a", options);
SpinnerPlugin.activityStart("a", options, () => {});
SpinnerPlugin.activityStart("a", options, () => {}, () => {});

SpinnerPlugin.activityStop();
SpinnerPlugin.activityStop(() => {});
SpinnerPlugin.activityStop(() => {}, () => {});