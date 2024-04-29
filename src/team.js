import api from 'mcutils/api/api'

import charte from 'mcutils/charte/macarte'
import loader from 'mcutils/dialog/loader'
import { getUrlParameter } from 'mcutils/control/url'
import dialog from 'mcutils/dialog/dialog'
import api from 'mcutils/api/api';
import ListCarte from 'mcutils/api/ListCarte';
import ol_ext_element from 'ol-ext/util/element'
import serviceURL from 'mcutils/api/serviceURL'
import { getViewerURL } from 'mcutils/api/ServiceURL';

import publicProfile from './publicProfile/publicProfile';

import 'mcutils/font/loadFonts';
import 'mcutils/api/ListCarte.responsive.css';

import contentHtml from './publicProfile/publicProfile-page.html';
import './publicProfile/publicProfile.css';

// Set charte Macarte
charte.setApp('user', 'Ma carte');
loader.show(0);

const contentElt = charte.getAppElement();
contentElt.innerHTML = contentHtml;

// Get ID in search parameters
let teamID = getUrlParameter('team').split('_').pop();

// Try to get ID in the url path: path/ID/TITLE
if (!teamID) {
  // path = <public_name encodé url>_<public_id>
  const path = document.location.pathname.split('/');
  teamID = path.pop().split('_').pop();
}

// If no user, show error
if (teamID) {
  api.getTeam(teamID, (t) => {
    if (!t || t.error) {
      showError();
      return;
    }
    // Search team maps
    list.removeFilter('organization');
    list.setFilter('organization', teamID);
    list.search();
    loader.hide();
    publicProfile(t, contentElt);
  }, true)
} else {
  showError();
}

// Create atlas list for the user
const list = new ListCarte(api, {
  context: 'atlas',
  search: true,
  mode: 'gallery',
  target: contentElt.querySelector('.maps-result')
});
list.setMode('gallery');
window.list = list

// Show carte on click
list.on('click', (e) => {
  window.open(getViewerURL(e.item), '_blank');
});

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