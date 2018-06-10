const [nodeBin, workingPath, soundQuery] = process.argv;

console.log(process.argv);
process.exit(0);

const {exec} = require('child_process');
const puppeteer = require('puppeteer');

const SOUNDSNAP_SOUND_PRELOAD_URL = /play\.php/gi;

const onRequest = r => {
  const {_url} = r;
  if(SOUNDSNAP_SOUND_PRELOAD_URL.test(_url)) {
    // https://stackoverflow.com/a/7451779
    exec(`curl -OJ "${_url}"`, ()=> console.log('Downloaded sound file.'));
  }
}

// Save all mp3 files in one location
process.chdir('mp3');

puppeteer.launch().then(async browser => {
  
  const getAllSoundsFromPageNumber = async pageNumber => {
    const page = await browser.newPage();
    page.on('request', onRequest);
    page.on('load', ()=>{
      page.close();
    });
    page.goto(`https://www.soundsnap.com/search/audio/${soundQuery}/shortest/2sec?page=${pageNumber}`);
  };

  let i;
  for(let i=1; i<=66; i++){
    getAllSoundsFromPageNumber(i);
  }

});


