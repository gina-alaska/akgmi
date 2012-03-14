Geologic Map Index of Alaska Web Application
============================================

Requirements
------------

* Applictaion requirements
  * Webserver (ex. Apache)
  * Browser
* Development requirements 
  * Ruby
  * Compass  

Installation
------------

* Checkout the repository code, [see the parent directory README on how to do this](https://github.com/gina-alaska/akgmi/blob/master/README.md)
* Copy or link the public directory to a web accessible directory.
* Modify the web/public/javascript/config.js file to point at the correct URL (restUrl) for the rest application.
* Configure the webserver to point at the public directory as the document root.

Development Information
-----------------------

Files in the public/stylesheet directory should not be directly modified.  Instead edit he appropriate file in the sass directory, and then compile the stylesheets using compass.  This will combine and compress the stylesheets for deployment.

    $ cd <<CHECKOUT DIRECTORY>>/web
    $ compass compile
    unchanged sass/ie.scss
    overwrite public/stylesheets/print.css 
    overwrite public/stylesheets/screen.css

Code structure information

    web/
      public/
        ext/                 # Symlink to the EXTJS library code
        ext-4.0.7/           # ExtJS Library code
        images/              # Misc images used by the application
        
        javascript/
          app/               # Main application code, EXTJS 4.0.7 Application (http://sencha.com/extjs)
          
          gina-map-layers/   # Submodule for the gina map layers using by 
                             # openlayers (http://github.com/gina-alaska/gina-map-layers)
                             
          OpenLayers-2.11/   # Openlayers library (http://openlayers.org)
          
          proj4js/           # Proj4JS library used for rendering tiles and coordinates in other projects
                             # for openlayers (http://proj4js.org)
                             
          ux/                # User extension files for openlayers and extjs.
          
          application.js     # Main startup file for the extjs application, handles loading files 
                             # from the app directory
                             
          config.js          # Modify various strings used in the application and also update 
                             # restUrl to point at the rest application for fetching data
                             
          custom_layers.js   # Contains the customized definitions for the map layers used,
                             # To change the layers names edit this file
                             
        stylesheets/         # Compiled stylesheets, do not modify instead edit files in the sass directory
        
      sass                   # SCSS/SASS stylesheets, compiled into the public/stylesheets directory using compass


@author Will Fisher
@email will@gina.alaksa.edu