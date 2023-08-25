// import './localhostapi' ;

import charte from 'mcutils/charte/macarte'
import { getUrlParameter } from 'mcutils/control/url'
import serviceURL from 'mcutils/api/serviceURL'
import dialog from 'mcutils/dialog/dialog'
import api from 'mcutils/api/api';
import ListCarte from 'mcutils/api/ListCarte';
import ol_ext_element from 'ol-ext/util/element'
import { getViewerURL } from 'mcutils/api/ServiceURL';

import 'mcutils/font/loadFonts';
import 'mcutils/api/ListCarte.responsive.css';

import loader from 'mcutils/dialog/loader'
import publicProfile from './publicProfile/publicProfile';

import contentHtml from './publicProfile/publicProfile.html';
import './publicProfile/publicProfile.css';

// Set charte Macarte
charte.setApp('user', 'Ma carte');
loader.show(0);

const contentElt = charte.getAppElement();
contentElt.innerHTML = contentHtml;

/* bread scrum
contentElt.querySelectorAll("a[data-link]").forEach( (a) => {
  a.setAttribute('href', serviceURL[a.dataset.link]);
});
*/

/************/
/* GET USER */
/************/
// Get ID in search parameters
let user;
let userID = getUrlParameter('user').split('_').pop();

// Try to get ID in the url path: path/ID/TITLE
if (!userID) {
  // path = <public_name encodé url>_<public_id>
  const path = document.location.pathname.split('/');
  userID = path.pop().split('_').pop();
}

// If no user, show error
if (userID) {
  api.getUser(userID, (response) => {
    if (!response || response.error) {
      showError();
      return;
    }
    user = response;
    list.removeFilter('user');
    list.setFilter('user', user.public_name);
    list.search();
    loader.hide();
    publicProfile(user, contentElt);
  })
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

// Show carte on click
list.on('click', (e) => {
  window.open(getViewerURL(e.item), '_blank');
});

/** Show error page */
function showError(){
  loader.hide();
  dialog.show404(elt , 'Utilisateur inexistant');

  // Error
  const elt = ol_ext_element.create('A',{
    html: 'consulter l\'atlas...<i class="fa fa-external-link"></i>',
    href: serviceURL.search,
    parent: dialog.getContentElement()
  });
}