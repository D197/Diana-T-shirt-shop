//////////
// CONFIG

// Skapa en express-app (vår server)

const express = require('express');

const app = express();

// express behöver body-parser för att läsa in request body (som json)

const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb' }));

// porten vi servar på (som i http://localhost:3000 )

const port = 3000;


///////////////////////////

// REST API

app.get('/api/andras/modeler', async (req, res) => {

  let result = [
    {
      id: "annans-1",
      namn: 'Orange',
      beskrivning: 'Orange grund färg med flicka i siluette',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CYwyalpSD_23fYnqMCyjA-Tr0VjSEKLDpnR7BQuJNtMA9p2HsQ',
      pris: 199
    },
    {
      id: "annans-2",
      namn: 'Multi färgad',
      beskrivning: 'Fåglar och moln',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Ng5bDUzzvTTMqDp89HP4Pw91GDP0g_4FZpxbwIh7gA9siDftiQ',
      pris: 199
    },
    {
      id: "annans-3",
      namn: 'Vit ko',
      beskrivning: 'Vit med två kor',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfBXAuHgVwgbxRpTE_mSrHw2HaBRGshb18eCp8sPliG4WaD1ySA',
      pris: 199
    },
    {
      id: "annans-4",
      namn: 'Grå katt',
      beskrivning: 'Grå med katt',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpGGHLhH_jI83oXb5V9uxH1g1vxBW99UdBiAuAEHHGPadJUV73vw',
      pris: 199
    },
    {
      id: "annans-5",
      namn: 'Vit med rött',
      beskrivning: 'Vit med röd blomma och kollibri',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeVharsbENVj_LU0mcuKmG9HauWgrs-k3XzTtsdDtfeYouRNd',
      pris: 199
    },
    {
      id: "annans-6",
      namn: 'Vit med kafe',
      beskrivning: 'Vit med kafe siluette',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX91g9aZRsvrAMoO-oDfBQmNRKbxjaCZcDF-QUaLMS5Sd6T5NehQ',
      pris: 199
    }
  ]

  res.json(result)

})

// ska fånga alla utstående anrop till /rest som inte matchat någon tabell ovan

app.all('/api/*', async (req, res) => {

  console.log('not found', req.path, req.method);

  res.status(404).end();

});


// serve frontend files (all existing files in the client folder will respond)

app.use(express.static('./client/'));

// also catch all remaining requests

// and send them to our index.html file

// because that is how we get virtual routes in the front-end (and front-end 404's)

// use a little regex for that (not match rest)

app.get('*', async (req, res) => {

  res.sendFile(path.normalize(__dirname + '/client/index.html'));

});


// servern startas

app.listen(port, () => {

  console.log('server running on port ' + port);

})