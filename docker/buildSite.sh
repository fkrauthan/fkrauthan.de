#!/bin/bash

cd ../


if [ -d ./build/ ]; then
  rm -Rf ./build/
fi
./wintersmith build -v -o ./build/


cd ./docker/
