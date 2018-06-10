# Soundscrape

Grabs all sounds found matching a query that are 2 seconds or less in length from soundsnap.com

This project was created as part of a hack: read about my [random sound tin project here](http://jsyang.ca/hacks/random-sound-tin/).

```
  1. Download all matching sound files
  2. (optional) Normalize them in terms of loudness
  3. (optional) Convert them into WAV
```

You will need to install `ffmpeg` and `ffmpeg-normalize` to convert and normalize the retrieved files.

## Usage

```
# 0. Install all dependencies
yarn

# Begin scraping, it will indicate when downloads have happened
# After a certain period of time if you hit ENTER and see that no new
# downloads have finished, you can CTRL-C to quit the script

# 1. "beep" will grab all sounds matching "beep" query
yarn start beep

# 2. Normalize loudness for all mp3 files
yarn normalize

# 3. Convert all MP3 files to WAV for playback with `aplay` which is pre-installed on Raspbian
yarn convert
```
