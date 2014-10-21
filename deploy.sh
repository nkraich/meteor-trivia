#! /bin/sh

APP=kraich
HOST=kraich.com

echo "Building app."
meteor build .

echo "Sending build."
scp $APP.tar.gz root@$HOST:/home/$APP
#rm $APP.tar.gz

echo "Deploying on server."
ssh root@$HOST "
  cd /home/$APP
  tar -zxf /home/$APP/$APP.tar.gz
  rm -rf /home/$APP/bundle/programs/server/npm/npm-bcrypt/node_modules/bcrypt/
  cd /home/$APP/bundle/programs/server
  npm install
  cp -r /home/$APP/bundle/programs/server/node_modules/bcrypt /home/$APP/bundle/programs/server/npm/npm-bcrypt/node_modules/bcrypt/
  restart $APP
"
