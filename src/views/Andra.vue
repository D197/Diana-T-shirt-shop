<template>
    <div class="andra">
        Andra

    <div class="columns">
      <div class="column is-one-third">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Orange</p>
          </header>
          <div class="card-content">
            <img
              alt="Andra"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CYwyalpSD_23fYnqMCyjA-Tr0VjSEKLDpnR7BQuJNtMA9p2HsQ"
              style="height: 100px;"
            />
            <span>Orange grund färg med flicka i siluette. <b>199kr</b></span>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <router-link :to="{ name: 'annans', params: {designId: 'annans-1' } }">
                  <button class="button is-link">Mer info</button>
                </router-link>
              </span>
            </p>
          </footer>
        </div>
      </div>
   
      <div class="column is-one-third">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Multi färgad</p>
          </header>
          <div class="card-content">
            <img
              alt="Andra"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Ng5bDUzzvTTMqDp89HP4Pw91GDP0g_4FZpxbwIh7gA9siDftiQ"
              style="height: 100px;"
            />
            <span>Fåglar och moln. <b>199kr</b></span>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <router-link :to="{ name: 'annans', params: {designId: 'annans-2' } }">
                  <button class="button is-link">Mer info</button>
                </router-link>
              </span>
            </p>
          </footer>
        </div>
      </div>
    
      <div class="column is-one-third">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Vit ko</p>
          </header>
          <div class="card-content">
            <img
              alt="Andra"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfBXAuHgVwgbxRpTE_mSrHw2HaBRGshb18eCp8sPliG4WaD1ySA"
              style="height: 100px;"
            />
            <span>Vit med två kor. <b>199kr</b></span>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <router-link :to="{ name: 'annans', params: {designId: 'annans-3' } }">
                  <button class="button is-link">Mer info</button>
                </router-link>
              </span>
            </p>
          </footer>
        </div>
      </div>
  
      </div>
          <div class="columns">

      <div class="column is-one-third">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Grå katt</p>
          </header>
          <div class="card-content">
            <img
              alt="Andra"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpGGHLhH_jI83oXb5V9uxH1g1vxBW99UdBiAuAEHHGPadJUV73vw"
              style="height: 100px;"
            />
            <span>Grå med katt. <b>199kr</b></span>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <router-link :to="{ name: 'annans', params: {designId: 'annans-4' } }">
                  <button class="button is-link">Mer info</button>
                </router-link>
              </span>
            </p>
          </footer>
        </div>
      </div>  

      <div class="column is-one-third">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Vit med rött</p>
          </header>
          <div class="card-content">
            <img
              alt="Andra"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeVharsbENVj_LU0mcuKmG9HauWgrs-k3XzTtsdDtfeYouRNd"
              style="height: 100px;"
            />
            <span>Vit med röd blomma och kollibri. <b>199kr</b></span>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <router-link :to="{ name: 'annans', params: {designId: 'annans-5' } }">
                  <button class="button is-link">Mer info</button>
                </router-link>
              </span>
            </p>
          </footer>
        </div>
      </div>
  
      <div class="column is-one-third">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Vit med kafe</p>
          </header>
          <div class="card-content">
            <img
              alt="Andra"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX91g9aZRsvrAMoO-oDfBQmNRKbxjaCZcDF-QUaLMS5Sd6T5NehQ"
              style="height: 100px;"
            />
            <span>Vit med kafe siluette. <b>199kr</b></span>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <router-link :to="{ name: 'annans', params: {designId: 'annans-6' } }">
                  <button class="button is-link">Mer info</button>
                </router-link>
              </span>
            </p>
          </footer>
        </div>
      </div>
    </div>


        <img alt="doggos" src="https://omfgdogs.com/omfgdogs@2X.gif" style="height: 200px; width: 100%">
        <video controls="" autoplay="true" src="https://omfgdogs.com/omfgdogs.mp3" type="audio/mp3" style="height: 10px;"></video>
    </div>
</template>