import charte from "mcutils/charte/macarte";
import ol_ext_element from 'ol-ext/util/element'

import contentHtml from './overview.html'
import './index.css'

// Set charte Macarte
charte.setApp('overview', 'Ma carte');

const contentElt = charte.getAppElement();
contentElt.innerHTML = contentHtml;
