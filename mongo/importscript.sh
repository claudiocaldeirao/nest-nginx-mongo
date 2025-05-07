#!/bin/bash

mongoimport --db=${MONGO_INITDB_DATABASE} --collection='posts' --file='/tmp/posts.json' --jsonArray --username=${MONGO_INITDB_ROOT_USERNAME} --password=${MONGO_INITDB_ROOT_PASSWORD} --authenticationDatabase=admin
