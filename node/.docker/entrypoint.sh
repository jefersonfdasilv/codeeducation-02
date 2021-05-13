#!/bin/bash

npm install

pm2 start app.js --watch

pm2 logs