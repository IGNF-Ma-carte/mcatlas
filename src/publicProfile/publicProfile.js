import { getUserURL, encodeTitleURL } from 'mcutils/api/serviceURL';
import md2html from 'mcutils/md/md2html';

const lut = {
  public_name: 'name',
  profile_picture: 'image'
}

/** Display public profil in the content element
 * @param {Object} user
 * @param {Element} contentElt
 */
function publicProfile(obj, contentElt) {
  const isOrga = obj.members;
  contentElt.querySelectorAll('[data-attr]').forEach(elt => {
    let attribute = elt.dataset.attr;
    if (isOrga) attribute = lut[attribute] || attribute;
    let value = obj[attribute];
    displayAttribute(elt, attribute, value);
  });
  const publicLink = contentElt.querySelector('a.article.button');
  if (publicLink) {
    const publicName = encodeTitleURL(isOrga ? obj.name : obj.public_name);
    publicLink.href = getUserURL(publicName + '_' + obj.public_id);
  }
}

// Social media urls
const socialNetwork = {
  twitter_account: 'https://twitter.com/',
  facebook_account: 'https://www.facebook.com/',
  linkedin_account: 'https://linkedin.com/in/',
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
      elt.querySelector('a').setAttribute('title', attribute.split('_')[0]);
      break;
    }
    // Others
    default: {
      if (elt.tagName === 'IMG') {
        elt.src = value;
      } else if (elt.dataset.bgimg) {
        elt.style.backgroundImage = value ? 'url("'+ value +'")' : '';
      } else if (elt.dataset.date) {
        elt.innerText = (new Date(value.split('T')[0])).toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
      } else {
        elt.innerText = (value && value.toLocaleString) ? value.toLocaleString() : value || '';
      }
      break;
    }
  }
}

export default publicProfile