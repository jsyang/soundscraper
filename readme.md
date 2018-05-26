# Soundscrape

Grabs all "beep" sounds 2 seconds or less in length from soundsnap.com

```
# Install all dependencies
yarn

# Begin scraping, it will indicate when downloads have happened
# After a certain period of time if you hit ENTER and see that no new
# downloads have finished, you can CTRL-C to quit the script
yarn start

# Convert all MP3 files to WAV for playback with `aplay` which is pre-installed on Raspbian
yarn convert

```
