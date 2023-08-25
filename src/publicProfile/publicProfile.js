import { getUserURL, encodeTitleURL } from 'mcutils/api/serviceURL';
import md2html from 'mcutils/md/md2html';

/** Display public profil in the content element
 * @param {Object} user
 * @param {Element} contentElt
 */
function publicProfile(user, contentElt) {
  contentElt.querySelectorAll('[data-attr]').forEach(elt => {
    let attribute = elt.dataset.attr;
    let value = user[attribute];
    displayAttribute(elt, attribute, value);
  });
  const publicLink = contentElt.querySelector('a.article.button');
  if (publicLink) {
    const publicName = encodeTitleURL(user.public_name);
    publicLink.href = getUserURL(publicName + '_' + user.public_id);
    publicLink.querySelector('span').innerText = user.public_name;
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
    case 'twitter_account': 
    case 'facebook_account': 
    case 'linkedin_account': {
      elt.querySelector('a').setAttribute('href', value ? socialNetwork[attribute] + value : '');
      elt.querySelector('a').setAttribute('title', attribute.split('_')[0]);
      break;
    }
    case 'profile_picture':
    case 'cover_picture': {
      elt.style.backgroundImage = value ? 'url("'+ value +'")' : '';
      break;
    }
    case 'registered_at': {
      elt.innerText = (new Date(value.split('T')[0])).toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
      break;
    }
    default: {
      elt.innerText = value.toLocaleString();
      break;
    }
  }
}

export default publicProfile