#!/bin/sh

mkdir -p wav

pushd mp3

for file in *
do
  ffmpeg -i "$file" "../wav/$file.wav"
done

