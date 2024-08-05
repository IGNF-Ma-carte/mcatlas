// import './localhostapi' ;
import './mcversion'
import charte from 'mcutils/charte/macarte'
import api from 'mcutils/api/api'
import ListCarte from 'mcutils/api/ListCarte'
import 'mcutils/font/loadFonts'
import { getTeamURL, getViewerURL } from 'mcutils/api/serviceURL';
import 'mcutils/api/ListCarte.responsive.css'

import { teamDialog, userDialog } from './publicProfile/dialog';

import 'ol/ol.css'
import 'ol-ext/dist/ol-ext.css'
import './index.css'

// Set charte Macarte
charte.setApp('atlas', 'Ma carte')

// Create atlas list
const list = new ListCarte(api, { 
  context: 'atlas',
  selection: false,
  search: true,
  permalink: true,
  target: charte.getAppElement() 
});

// Scroll top on drawlist
list.on('draw:list', () => {
  window.scroll(0, 0);
});

// Show carte on select / click
list.on('click', (e) => {
  window.open(getViewerURL(e.item), '_blank');
});


// Show a user dialog info on select:user
list.on('select:user', userDialog)

// Show team dialog info on select:team
list.on('select:team', teamDialog)

// Show list on start
list.search();

// On team change => change page
charte.on('header:team', e => {
  document.location = getTeamURL(e.team);
})