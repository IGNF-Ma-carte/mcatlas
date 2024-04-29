// import './localhostapi' ;
import './mcversion'
import charte from 'mcutils/charte/macarte'
import api from 'mcutils/api/api'
import ListCarte from 'mcutils/api/ListCarte'
import dialog from 'mcutils/dialog/dialog';
import 'mcutils/font/loadFonts'
import { getViewerURL } from 'mcutils/api/serviceURL';
import 'mcutils/api/ListCarte.responsive.css'

import publicProfile from './publicProfile/publicProfile';
import dialogProfile from './publicProfile/publicProfile-dialog.html'

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
list.on('select:user', (user) => {
  dialog.showWait('Recherche de l\'utilisateur...');
  // Get user
  api.getUser(user.user_id, user => {
    // Show user dialog
    if (user.error) {
      dialog.showAlert('Impossible d\'accéder à l\'utilisateur...')
    } else {
      dialog.show({ 
        className: 'profile-dialog user-dialog',
        content: dialogProfile, 
        buttons: { ok: 'ok' } 
      });
      publicProfile(user, dialog.getContentElement());
    }
  })
})

// Show team dialog info on select:team
list.on('select:team', team => {
  dialog.showWait('Recherche de l\'équipe...');
  // Get user
  api.getTeam(team.id, t => {
    // Show user dialog
    if (t.error) {
      dialog.showAlert('Impossible d\'accéder à l\'équipe...')
    } else {
      dialog.show({ 
        className: 'profile-dialog team-dialog',
        content: dialogProfile, 
        buttons: { ok: 'ok' } 
      });
      publicProfile(t, dialog.getContentElement());
    }
  }, true)
})

// Show list on start
list.search();
