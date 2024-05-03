import { getUserURL, encodeTitleURL, getTeamURL } from 'mcutils/api/serviceURL';
import md2html from 'mcutils/md/md2html';

// LookUpTable: convert user atts to team
const lut = {
  public_name: 'name'
}

// Social media urls
const socialNetwork = {
  twitter_account: 'https://twitter.com/',
  facebook_account: 'https://www.facebook.com/',
  linkedin_account: 'https://linkedin.com/in/',
}

/** Display public profil in the content element
 * @param {Object} user
 * @param {Element} contentElt
 */
function publicProfile(obj, contentElt, isTeam) {
  // Update attributes
  contentElt.querySelectorAll('[data-attr]').forEach(elt => {
    let attribute = elt.dataset.attr;
    if (isTeam) attribute = lut[attribute] || attribute;
    let value = obj[attribute];
    displayAttribute(elt, attribute, value);
  });
  // Link to profile page
  const publicLink = contentElt.querySelector('a.article.button');
  if (publicLink) {
    if (isTeam) {
      const publicName = encodeTitleURL(obj.name);
      publicLink.href = getTeamURL(publicName + '_' + obj.public_id);
    } else {
      const publicName = encodeTitleURL(obj.public_name);
      publicLink.href = getUserURL(publicName + '_' + obj.public_id);
    }
  }
}

/** Display attribute in element
 * @param {Element} elt 
 * @param {string} attribute attribute name
 * @param {*} value 
 */
function displayAttribute(elt, attribute, value){
  switch (attribute){
    case 'presentation': {
      md2html.element(value, elt);
      break;
    }
    // Social media links
    case 'twitter_account': 
    case 'facebook_account': 
    case 'linkedin_account': {
      elt.querySelector('a').setAttribute('href', value ? socialNetwork[attribute] + value : '');
      break;
    }
    // Others
    default: {
      if (elt.tagName === 'IMG') {
        elt.src = value || '';
      } else if (elt.dataset.bgimg) {
        elt.style.backgroundImage = value ? 'url("'+ value +'")' : '';
      } else if (elt.dataset.date && value && value.split) {
        elt.innerText = (new Date(value.split('T')[0])).toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
      } else {
        elt.innerText = (value && value.toLocaleString) ? value.toLocaleString() : value || '';
        if (typeof(value) === 'number' && value > 1) {
          elt.parentNode.dataset.plural = '';
        }
      }
      break;
    }
  }
}

export default publicProfile