#!/bin/bash

if [ ! -d ../build/ ]; then
  echo 'No build directory found! Start building site...'
  ./buildSite.sh
fi

if [ -d ./build ]; then
  rm -Rf ./build/
fi
cp -R ../build/ ./build/

docker build -t registry.docker.cogindo.net/fkrauthan_de:1.0 .
