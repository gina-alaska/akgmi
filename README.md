Geologic Map Index of Alaska
============================

There will be two parts to this project

* RoR Rest interface to serve data from oracle database (/rest)
* ExtJS HTML5 front end to show the map and search results for publications (/web)

Requirements
------------

To checkout the code you will need to use git (http://git-scm.com)

Additional requirements are listed in the README.md file in each subproject directory.

Access to the code
------------------

This is restricted to users authorized as collaborators in the project.

The code can be viewed online at http://github.com/gina-alaska/akgmi or checked out from Github by doing

    $ cd ~/gits # or any directory you with to install this application
    $ git clone git@github.com:gina-alaska/akgmi
    
Installation instructions can be found in:

* [rest/README.md](https://github.com/gina-alaska/akgmi/blob/master/rest/README.md)
* [web/README.md](https://github.com/gina-alaska/akgmi/blob/master/web/README.md)

General Update Instructions
---------------------------

In order to pull the latest code from github you will need to make sure that ssh agent forwarding enabled
with access to the ssh key that was added to your github.com account (https://github.com/account/ssh)

Log into the webdev account on the machine with the running application and run the following commands:

    $ cd ~/repos/akgmi
    $ git pull
    $ git submodule init
    $ git submodule update
    $ cd rest
    $ bundle install
    $ touch tmp/restart.txt

That's it, now open the application in a browser and make sure it starts up  
