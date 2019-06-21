cumulocity-ui-plugin-examples
=============================

This repository contains an application with sample plugins based on the legacy [Web SDK for plugins](https://cumulocity.com/guides/web/web-sdk-for-plugins/).

After version after version 1004.0.0 the platform built-in applications are now hybrid apps using Angular and angularJS.
The build process has also changed using a webpack based process.

A project using custom plugins can be migrated with minimum effort, as in version 1004.0.x it's still  possible to build pure angularJS apps.


Plugins
-------

* **myplugin**
Simple hello world plugin.

* **myBranding**
Sample branding base on the base (`core/c8yBranding`). You can inspect the less files to inspect the many less variables available for configuration.

* **deviceContact**
Application embedded plugin that adds a new tab to device details view named *Contact* which displays a simple form for providing contact details. Contact details are stored in Managed Object's data.

* **deviceEventsRealTime**
Application embedded plugin that adds a new tab to device details view and displays the list of incoming device events in real-time.

## Install dependencies

```
npm install @c8y/style@^1004.0.0 @c8y/ng1-modules@^1004.0.0
npm install -D @c8y/cli@^1004.0.0 @angular-devkit/build-angular@8.0.4
```

## Using legacy targets

Although target files are deprecated, they can still be used in version 1004.0.x by building a pure angularJS application.
Using the current repo as an example you should run

```
npx c8ycli server node_modules/@c8y/ng1-modules/apps/* --env.target=targets/examples.json --app.dynamicOptionsUrl=/apps/public/public-options/options.js
```


How to run the examples
-----------------------
* Make sure you have node.js >=12 installed
* Clone or download [`cumulocity-ui-plugin-examples`](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples) repository,
* Run `npm install`,
* Run local development server: `npm run serve`
* Open in browser: *http://localhost:9000/apps/<appname>*
