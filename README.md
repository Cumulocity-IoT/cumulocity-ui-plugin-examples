cumulocity-ui-plugin-examples
=============================

Repository contains an application with sample plugins described in [Plugin Developer Guide](http://www.cumulocity.com/).

Plugins
-------

* **myplugin**
Simple hello world plugin.

* **myBranding**
Sample branding base on the base (`core/c8yBranding`). You can inspect the less files to inspect the many less variables available for configuration.

* **deviceContact**
Application embedded plugin that adds a new tab to device details view named *Contact* which displays a simple form for providing contact details. Contact details are stored in Managed Object’s data.

* **deviceEventsRealTime**
Application embedded plugin that adds a new tab to device details view and displays the list of incoming device events in real-time.


How to run the examples
-----------------------
* Make sure you have node.js >6.7 installed
* Install the Cumulocity CLI globally: ```npm i cumulocity-tools -g```
* Clone or download [`cumulocity-ui-plugin-examples`](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples) repository,
* Run `c8y install latest`,
* Adjust application manifest file `cumulocity.json`:
    * change `contextPath` to something unique for your tenant,
    * change `key` to something unique for platform, (?)
    * change `name` to something unique for platform, (?)
* Create the application on your tenant: ```c8y deploy:app <appContextPath>```
* Run local development server: *c8y server*
* Open in browser: *http://localhost:9000/apps/<appname>*
