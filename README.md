# WebApp Blog

![](https://img.shields.io/badge/Building-Process-green) ![](https://img.shields.io/badge/Python3-Django-brightgreen)

# Environment

- OS linux - Ubuntu 18.04
- Python 3.6+
- Django 3.2.5.

# Before run

- Execute the Application isolated with virtualenv python3.

    ### Install pip first
    ```Bash
    sudo apt-get install python3-pip
    ```

    ### Then install virtualenv using pip3
    ```Bash
    sudo pip3 install virtualenv
    ```

    ### Now create a virtual environment
    ```Bash
    virtualenv App 
    ```

    ### Active your virtual environment
    ```Bash
    source App/bin/activate
    ```

    ### Move inside App virtualenv
    ```Bash
    cd App
    ```

    ### Clone the project from github page
    ```Bash
    https://github.com/VictorZ94/ListingApp.git
    ```


Now you have all environment ready for getting started working with it.

- Create DB:
    ### Move inside listingBack
    ```Bash
    cd listingBack
    ```
    Now you'll see your prompt look like. `listingBack$`

    ### Install requirements
    ```Bash
    pip3 install -r requirements
    ```


return to the previous folder.
```Bash
cd ..
```

- Migrations

    ## Run the command to create tables models of Django
    ```Bash
    python3 manage.py makemigrations 
    ```

    ## Run the command to create models into DB
    ```Bash
    python3 manage.py migrate 
    ```

## Fixtures
- [Optional] can be uploaded data contained in folder fixtures

    ```Bash
    python3 manage.py loaddata fixtures/data.json
    ```
    Note: If you don't upload this data, you should be to create each user and post from scratch

## Run Blog App

```Bash
python3 manage.py runserver
```
Django use by default port 8000.


Now open your preferred browser and type the http address.
```Bash
http://localhost:8000/
```

## Created By

> Victor Zuluaga
