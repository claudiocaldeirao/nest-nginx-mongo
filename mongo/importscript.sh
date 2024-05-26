#!/bin/bash

mongoimport --db=${MONGO_INITDB_DATABASE} --collection='restaurants' --file='/tmp/restaurants.json' --jsonArray --username=${MONGO_INITDB_ROOT_USERNAME} --password=${MONGO_INITDB_ROOT_PASSWORD} --authenticationDatabase=admin
