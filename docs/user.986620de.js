function e(e,t,a,r){Object.defineProperty(e,t,{get:a,set:r,enumerable:!0,configurable:!0})}var t=globalThis,a={},r={},i=t.parcelRequire2518;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire2518=i);var o=i.register;o("cDaqT",function(t,a){e(t.exports,"getUrlParameter",()=>s);var r=i("ffKDs");let o=new(i("jEzQ5")).default;function s(e){return e?o.getUrlParam(e):o.getUrlParams()}(0,r.default).addControl(o)}),o("jEzQ5",function(t,a){e(t.exports,"default",()=>c);var r=i("ejLRd"),o=i("4DafG"),s=i("gzr8q"),n=i("iQyfo"),l=i("4TTbe"),c=class extends o.default{constructor(e){var t=e||{},a=document.createElement("div");super({element:a,target:t.target});var r=this,i=document.createElement("button");if((0,n.default).create("I",{parent:i}),this.replaceState_=!1!==t.urlReplace,this.fixed_=t.fixed||6,this.hash_=t.anchor?"#":"?",this._localStorage=t.localStorage,!this._localStorage)try{localStorage.removeItem("ol@permalink")}catch(e){console.warn("Failed to access localStorage...")}function o(){"function"==typeof t.onclick?t.onclick(r.getLink()):r.setUrlReplace(!r.replaceState_)}i.addEventListener("click",o,!1),i.addEventListener("touchstart",o,!1),a.className=(t.className||"ol-permalink")+" ol-unselectable ol-control",a.appendChild(i),(t.hidden||!1===t.visible)&&(0,n.default).hide(a),this.set("geohash",t.geohash),this.set("initial",!1),this.on("change",this.viewChange_.bind(this)),this.search_={};var s={},c=document.location.hash||document.location.search||"";if(this.replaceState_&&!c&&this._localStorage)try{c=localStorage["ol@permalink"]}catch(e){console.warn("Failed to access localStorage...")}if(c){c=c.replace(/(^#|^\?)/,"").split("&");for(var h=0;h<c.length;h++){var u=c[h].split("=");switch(u[0]){case"lon":case"lat":case"z":case"r":s[u[0]]=u[1];break;case"gh":{let e=u[1].split("-"),t=(0,l.toLonLat)(e[0]);s.lon=t[0],s.lat=t[1],s.z=e[1];break}case"l":break;default:this.search_[u[0]]=u[1]}}}s.hasOwnProperty("lon")&&this.set("initial",s),this.replaceState_&&this.setPosition()}getInitialPosition(){return this.get("initial")}setMap(e){this._listener&&((0,r.unByKey)(this._listener.change),(0,r.unByKey)(this._listener.moveend)),this._listener=null,super.setMap.call(this,e),e&&(this._listener={change:e.getLayerGroup().on("change",this.layerChange_.bind(this)),moveend:e.on("moveend",this.viewChange_.bind(this))},this.setPosition())}getLayerByLink(e,t){!t&&this.getMap()&&(t=this.getMap().getLayers().getArray());for(var a=0;a<t.length;a++){if(t[a].get("permalink")==e)return t[a];if(t[a].getLayers){var r=this.getLayerByLink(e,t[a].getLayers().getArray());if(r)return r}}return!1}setGeohash(e){this.set("geohash",e),this.setUrlParam()}setPosition(e){var t=this.getMap();if(t){var a=this.replaceState_||e?document.location.hash||document.location.search:"";if(!a&&this._localStorage)try{a=localStorage["ol@permalink"]}catch(e){console.warn("Failed to access localStorage...")}if(a){var r,i,o={};for(r=0,a=a.replace(/(^#|^\?)/,"").split("&");r<a.length;r++)o[(i=a[r].split("="))[0]]=i[1];if(o.gh){var n=o.gh.split("-"),c=(0,l.toLonLat)(n[0]);o.lon=c[0],o.lat=c[1],o.z=n[1]}var h=(0,s.transform)([Number(o.lon),Number(o.lat)],"EPSG:4326",t.getView().getProjection());if(h[0]&&h[1]&&t.getView().setCenter(h),o.z&&t.getView().setZoom(Number(o.z)),o.r&&t.getView().setRotation(Number(o.r)),o.l){(function e(a){a||(a=t.getLayers().getArray());for(var r=0;r<a.length;r++)a[r].get("permalink")&&a[r].setVisible(!1),a[r].getLayers&&e(a[r].getLayers().getArray())})();var u=o.l.split("|");for(r=0;r<u.length;r++){i=u[r].split(":");var d=this.getLayerByLink(i[0]),g=Number(i[1]);d&&(d.setOpacity(g),d.setVisible(!0))}}}}}getUrlParams(){return this.search_}setUrlParam(e,t){e&&(void 0===t||""===t?delete this.search_[encodeURIComponent(e)]:this.search_[encodeURIComponent(e)]=encodeURIComponent(t)),this.viewChange_()}getUrlParam(e){return decodeURIComponent(this.search_[encodeURIComponent(e)]||"")}hasUrlParam(e){return this.search_.hasOwnProperty(encodeURIComponent(e))}getLink(e){var t=this.getMap(),a=(0,s.transform)(t.getView().getCenter(),t.getView().getProjection(),"EPSG:4326"),r=Math.round(10*t.getView().getZoom())/10,i=t.getView().getRotation(),o=this.layerStr_,n=(i?"&r="+Math.round(1e4*i)/1e4:"")+(o?"&l="+o:"");if(n=this.get("geohash")?"gh="+(0,l.fromLonLat)(a,8)+"-"+r+n:"lon="+a[0].toFixed(this.fixed_)+"&lat="+a[1].toFixed(this.fixed_)+"&z="+r+n,"position"===e)return n;for(var c in this.search_)n+="&"+c+(void 0!==this.search_[c]?"="+this.search_[c]:"");return e?n:document.location.protocol+"//"+document.location.host+document.location.pathname+this.hash_+n}getUrlReplace(){return this.replaceState_}setUrlReplace(e){try{if(this.replaceState_=e,e)window.history.replaceState(null,null,this.getLink());else{var t="";for(var a in this.search_)t+=(""==t?"?":"&")+a+(void 0!==this.search_[a]?"="+this.search_[a]:"");window.history.replaceState(null,null,document.location.origin+document.location.pathname+t)}}catch(e){}}viewChange_(){try{this.replaceState_&&window.history.replaceState(null,null,this.getLink())}catch(e){}if(this._localStorage)try{localStorage["ol@permalink"]=this.getLink(this._localStorage)}catch(e){console.warn("Failed to access localStorage...")}}layerChange_(){this._tout&&(clearTimeout(this._tout),this._tout=null),this._tout=setTimeout((function(){this._tout=null;var e="";(function t(a){for(var r=0;r<a.length;r++)a[r].getVisible()&&a[r].get("permalink")&&(e&&(e+="|"),e+=a[r].get("permalink")+":"+a[r].get("opacity")),a[r].getLayers&&t(a[r].getLayers().getArray())})(this.getMap().getLayers().getArray()),this.layerStr_=e,this.viewChange_()}).bind(this),200)}}}),o("4TTbe",function(t,a){e(t.exports,"fromLonLat",()=>i),e(t.exports,"toLonLat",()=>o);var r={base32:"0123456789bcdefghjkmnpqrstuvwxyz"},i=function(e,t){var a=e[0],s=e[1];if(!t){for(var n=1;n<=12;n++){var l=i([a,s],n),c=o(l);if(c.lat==s&&c.lon==a)return l}t=12}(t<1||t>12)&&(t=12);for(var h=0,u=0,d=!0,g="",f=-90,p=90,m=-180,v=180;g.length<t;){if(d){var y=(m+v)/2;a>=y?(h=2*h+1,m=y):(h*=2,v=y)}else{var _=(f+p)/2;s>=_?(h=2*h+1,f=_):(h*=2,p=_)}d=!d,5==++u&&(g+=r.base32.charAt(h),u=0,h=0)}return g},o=function(e){var t=s(e),a=t[1],r=t[0],i=t[3],o=t[2],n=(a+i)/2,l=(r+o)/2;return n=n.toFixed(Math.floor(2-Math.log(i-a)/Math.LN10)),[Number(l=l.toFixed(Math.floor(2-Math.log(o-r)/Math.LN10))),Number(n)]},s=function(e){if(!e)return!1;e=e.toLowerCase();for(var t=!0,a=-90,i=90,o=-180,s=180,n=0;n<e.length;n++){var l=e.charAt(n),c=r.base32.indexOf(l);if(-1==c)return!1;for(var h=4;h>=0;h--){var u=c>>h&1;if(t){var d=(o+s)/2;1==u?o=d:s=d}else{var g=(a+i)/2;1==u?a=g:i=g}t=!t}}return[o,a,s,i]}}),o("3KPPy",function(t,a){e(t.exports,"getViewerURL",()=>n);var r=i("cxYyG"),o=i("bQI6B");/\/$/.test(r.default.server)||(r.default.server+="/");let s={home:r.default.server,signal:r.default.server+"signaler",contact:r.default.server+"nous-contacter",accessibility:r.default.server+"declaration-daccessibilite-rgaa.pdf",logout:r.default.server+"deconnexion",api:r.default.server+"api",media:r.default.server+"api/image",macarte:r.default.server+"edition/carte",mestat:r.default.server+"edition/statistique",narration:r.default.server+"edition/narration",geocod:r.default.server+"edition/adresses",search:r.default.server+"atlas",createAccount:r.default.server+"creer-un-compte",initPassword:r.default.server+"recuperer-mon-mot-de-passe",unlockAccount:r.default.server+"debloquer-mon-compte",user:r.default.server+"mon-compte",profil:r.default.server+"mon-compte/#profil",mescartes:r.default.server+"mon-compte/#cartes",mesmedias:r.default.server+"mon-compte/#medias",mesequipes:r.default.server+"mes-equipes",mention:r.default.server+"mentions-legales",cgu:r.default.server+"cgu",cookie:r.default.server+"cookies-et-statistiques",doc:r.default.server+"aide",blog:r.default.server+"aide/blog",tuto:r.default.server+"aide/tutoriels",faq:r.default.server+"aide/faq",version:r.default.server+"aide/notes-de-version"};for(let e in s)r.default[e]&&(s[e]=r.default[e]);function n(e,t){var a;let i=e.view_id||e.id;if(!i)return"";let s=(a=e.title||"macarte",a=(a=(0,o.default)(a)).replace(/[^a-zA-Z0-9]/g,"-").replace(/-{2,}/g,"-")),n=(0,r.default).viewer.replace("$ID",i).replace("$TITLE",encodeURIComponent(s)).replace("$NOTITLE",!1===e.showTitle?"notitle":"");if(n=n.replace(/[?|&]$/,""),e.position&&e.position.length){let t="lon="+e.position[0]+"&lat="+e.position[1]+"&z="+e.position[2];n+=/\?/.test(n)?"&"+t:"?"+t}return t&&(n+=(/\?/.test(n)?"&":"?")+"tab"),e.noZoom&&(n+=(/\?/.test(n)?"&":"?")+"noZoom"),n}}),o("kA3Tc",function(t,a){let r;e(t.exports,"default",()=>l);var o=i("iQyfo");let s=(0,o.default).create("DIV",{className:"page-loader hidden",html:"<div><p></p></div>",parent:document.body}),n=(0,o.default).create("DIV",{className:"info",parent:s});var l={show:(e,t)=>{n.innerHTML=t||"",s.style.display="block",r&&clearTimeout(r),0===e?s.classList.remove("hidden"):r=setTimeout(()=>{s.classList.remove("hidden")},e||200)},hide:()=>{s.classList.add("hidden"),r&&clearTimeout(r),r=setTimeout(()=>{s.style.display="none"},200)}}});