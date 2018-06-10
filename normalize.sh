#!/bin/sh

# You need to install https://github.com/slhck/ffmpeg-normalize

# git clone https://github.com/slhck/ffmpeg-normalize
# cd ffmpeg-normalize
# sudo pip install .

pushd mp3
ffmpeg-normalize *.mp3 -pr


