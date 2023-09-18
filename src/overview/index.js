import charte from "mcutils/charte/macarte";

import contentHtml from './overview.html'
import './index.css'

// Set charte Macarte
charte.setApp('overview', 'Ma carte');

const contentElt = charte.getAppElement();
contentElt.innerHTML = contentHtml;
