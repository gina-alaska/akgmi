Geologic Map Index of Alaska Rest Application
=============================================

Requirements
------------

* Ruby 1.9.2
* Web Server (Apache, NGNIX, etc...)
* Passenger (http://www.modrails.com)
* Oracle Instant Client Libraries (http://ruby-oci8.rubyforge.org/en/ for more info on setup)
* Rails 3.1

Installation
------------

Follow the install instructions for ruby-oci8 @ http://ruby-oci8.rubyforge.org/en/InstallForInstantClient.html

Checkout the code and install libraries:

    $ git clone git@github.com:gina-alaska/akgmi.git
    $ cd akgmi
    $ git submodule init
    $ git submodule update
    $ cd rest
    $ bundle install
    
Configure the database connection

    $ cp config/database.yml.example config/database.yml
    $ vim config/database.yml # Replace <<DBUSERNAME>>,<<DBPASSWORD>> and <<DBHOST>> with the correct values
    
Setup Apache with Passenger (http://www.modrails.com/install.html)

Configure Apache to point at the rails application

    $ sudo vim /etc/httpd/conf.d/akgmi_rest.conf
   
    <VirtualHost *:80>
      ServerName <<URL TO ACCESS SITE FROM>>
      DocumentRoot <<PATH TO REPO CHECKOUT>>/akgmi/rest/public
    </VirtualHost>
    
    $ sudo /etc/init.d/httpd configtest
    $ sudo /etc/init.d/httpd reload
    
The rest application should now be up and available for the web application to access. Updates might be required in the web application config files to point at the correct url for the rest application
    
Other information
-----------------

Application logging: Log files are created in the <<CHECKOUT LOCATION>>/akgmi/rest/logs directory.  To watch messages as they occur run:

    $ cd <<CHECKOUT LOCATION>>/akgmi/rest
    $ tail -f log/production.log

Restarting the application, updating the time stamp on tmp/restart.txt tells passenger to internally restart the application.  This is only necessary when updating the code or configuration files.

    $ cd <<CHECKOUT LOCATION>>/akgmi/rest
    $ touch tmp/restart.txt
   
Clearing out tmp files in the application

    $ cd <<CHECKOUT LOCATION>>/akgmi/rest
    $ bundle exec rake tmp:clear