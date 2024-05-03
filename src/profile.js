import charte from 'mcutils/charte/macarte'
import loader from 'mcutils/dialog/loader'
import { getUrlParameter } from 'mcutils/control/url'
import dialog from 'mcutils/dialog/dialog'
import api from 'mcutils/api/api';
import ListCarte from 'mcutils/api/ListCarte';
import ol_ext_element from 'ol-ext/util/element'
import serviceURL, { getViewerURL } from 'mcutils/api/serviceURL';

import publicProfile from './publicProfile/publicProfile';
import { teamDialog } from './publicProfile/dialog'

import 'mcutils/font/loadFonts';
import 'mcutils/api/ListCarte.responsive.css';
import './mcversion'

import contentHtml from './publicProfile/publicProfile-page.html';
import './publicProfile/publicProfile.css';

loader.show(0);

// Get ID in search parameters
let userID = getUrlParameter('user').split('_').pop();
let teamID = getUrlParameter('team').split('_').pop();

// Try to get ID in the url path: path/NAME_ID
if (!userID && !teamID) {
  const path = document.location.pathname.split('/');
  const id = path.pop().split('_').pop();
  if (path.pop() === 'equipe') {
    teamID = id;
  } else {
    userID = id;
  }
}

// 
// Set charte Macarte
charte.setApp('profil', 'Ma carte');

if (!userID && !teamID) {
  showError();
} else {
  const contentElt = charte.getAppElement();
  contentElt.innerHTML = contentHtml;

  const list = new ListCarte(api, {
    context: 'atlas',
    search: true,
    mode: 'gallery',
    target: contentElt.querySelector('.maps-result')
  });
  list.setMode('gallery');
  // Show carte on click
  list.on('click', (e) => {
    window.open(getViewerURL(e.item), '_blank');
  });

  if (userID) {
    api.getUser(userID, (response) => {
      if (!response || response.error) {
        showError();
        return;
      }
      const user = response;
      document.body.dataset.module = 'user';
      document.title = document.title.replace('profil', user.public_name);
      // Search user maps
      list.removeFilter('user');
      list.setFilter('user', user.public_name);
      list.search();
      loader.hide();
      publicProfile(user, contentElt);
      // User teams
      list.on('select:team', teamDialog)
    })
  } else {
    api.getTeam(teamID, (response) => {
      if (!response || response.error) {
        showError();
        return;
      }
      const team = response;
      document.body.dataset.module = 'team';
      document.title = document.title.replace('profil', team.name);
      // Search team maps
      list.removeFilter('organization');
      list.setFilter('organization', teamID);
      list.search();
      loader.hide();
      publicProfile(team, contentElt, true);
    }, true)
  }  
}

/** Show error page */
function showError(){
  const elt = ol_ext_element.create('A',{
    html: 'consulter l\'atlas...<i class="fa fa-external-link"></i>',
    href: serviceURL.search,
    parent: dialog.getContentElement()
  });
  // Error
  loader.hide();
  dialog.show404(elt , 'Impossible d\'accéder à l\'équipe.');
}