let e;var t,a=globalThis,r={},i={},l=a.parcelRequire2518;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},a.parcelRequire2518=l),l.register;var s=l("5eAJY"),o=l("iQyfo");const n=(0,o.default).create("DIV",{className:"page-loader hidden",html:"<div><p></p></div>",parent:document.body}),c=(0,o.default).create("DIV",{className:"info",parent:n});var h={show:(t,a)=>{c.innerHTML=a||"",n.style.display="block",e&&clearTimeout(e),0===t?n.classList.remove("hidden"):e=setTimeout(()=>{n.classList.remove("hidden")},t||200)},hide:()=>{n.classList.add("hidden"),e&&clearTimeout(e),e=setTimeout(()=>{n.style.display="none"},200)}},d=l("ffKDs"),u=l("ejLRd"),p=l("4DafG"),g=l("gzr8q"),o=l("iQyfo"),f={base32:"0123456789bcdefghjkmnpqrstuvwxyz"},m=function(e,t){var a=e[0],r=e[1];if(!t){for(var i=1;i<=12;i++){var l=m([a,r],i),s=v(l);if(s.lat==r&&s.lon==a)return l}t=12}(t<1||t>12)&&(t=12);for(var o=0,n=0,c=!0,h="",d=-90,u=90,p=-180,g=180;h.length<t;){if(c){var _=(p+g)/2;a>=_?(o=2*o+1,p=_):(o*=2,g=_)}else{var y=(d+u)/2;r>=y?(o=2*o+1,d=y):(o*=2,u=y)}c=!c,5==++n&&(h+=f.base32.charAt(o),n=0,o=0)}return h},v=function(e){var t=_(e),a=t[1],r=t[0],i=t[3],l=t[2],s=(a+i)/2,o=(r+l)/2;return s=s.toFixed(Math.floor(2-Math.log(i-a)/Math.LN10)),[Number(o=o.toFixed(Math.floor(2-Math.log(l-r)/Math.LN10))),Number(s)]},_=function(e){if(!e)return!1;e=e.toLowerCase();for(var t=!0,a=-90,r=90,i=-180,l=180,s=0;s<e.length;s++){var o=e.charAt(s),n=f.base32.indexOf(o);if(-1==n)return!1;for(var c=4;c>=0;c--){var h=n>>c&1;if(t){var d=(i+l)/2;1==h?i=d:l=d}else{var u=(a+r)/2;1==h?a=u:r=u}t=!t}}return[i,a,l,r]};const y=new class extends p.default{constructor(e){var t=e||{},a=document.createElement("div");super({element:a,target:t.target});var r=this,i=document.createElement("button");if((0,o.default).create("I",{parent:i}),this.replaceState_=!1!==t.urlReplace,this.fixed_=t.fixed||6,this.hash_=t.anchor?"#":"?",this._localStorage=t.localStorage,!this._localStorage)try{localStorage.removeItem("ol@permalink")}catch(e){console.warn("Failed to access localStorage...")}function l(){"function"==typeof t.onclick?t.onclick(r.getLink()):r.setUrlReplace(!r.replaceState_)}i.addEventListener("click",l,!1),i.addEventListener("touchstart",l,!1),a.className=(t.className||"ol-permalink")+" ol-unselectable ol-control",a.appendChild(i),(t.hidden||!1===t.visible)&&(0,o.default).hide(a),this.set("geohash",t.geohash),this.set("initial",!1),this.on("change",this.viewChange_.bind(this)),this.search_={};var s={},n=document.location.hash||document.location.search||"";if(this.replaceState_&&!n&&this._localStorage)try{n=localStorage["ol@permalink"]}catch(e){console.warn("Failed to access localStorage...")}if(n){n=n.replace(/(^#|^\?)/,"").split("&");for(var c=0;c<n.length;c++){var h=n[c].split("=");switch(h[0]){case"lon":case"lat":case"z":case"r":s[h[0]]=h[1];break;case"gh":{let e=h[1].split("-"),t=v(e[0]);s.lon=t[0],s.lat=t[1],s.z=e[1];break}case"l":break;default:this.search_[h[0]]=h[1]}}}s.hasOwnProperty("lon")&&this.set("initial",s),this.replaceState_&&this.setPosition()}getInitialPosition(){return this.get("initial")}setMap(e){this._listener&&((0,u.unByKey)(this._listener.change),(0,u.unByKey)(this._listener.moveend)),this._listener=null,super.setMap.call(this,e),e&&(this._listener={change:e.getLayerGroup().on("change",this.layerChange_.bind(this)),moveend:e.on("moveend",this.viewChange_.bind(this))},this.setPosition())}getLayerByLink(e,t){!t&&this.getMap()&&(t=this.getMap().getLayers().getArray());for(var a=0;a<t.length;a++){if(t[a].get("permalink")==e)return t[a];if(t[a].getLayers){var r=this.getLayerByLink(e,t[a].getLayers().getArray());if(r)return r}}return!1}setGeohash(e){this.set("geohash",e),this.setUrlParam()}setPosition(e){var t=this.getMap();if(t){var a=this.replaceState_||e?document.location.hash||document.location.search:"";if(!a&&this._localStorage)try{a=localStorage["ol@permalink"]}catch(e){console.warn("Failed to access localStorage...")}if(a){var r,i,l={};for(r=0,a=a.replace(/(^#|^\?)/,"").split("&");r<a.length;r++)l[(i=a[r].split("="))[0]]=i[1];if(l.gh){var s=l.gh.split("-"),o=v(s[0]);l.lon=o[0],l.lat=o[1],l.z=s[1]}var n=(0,g.transform)([Number(l.lon),Number(l.lat)],"EPSG:4326",t.getView().getProjection());if(n[0]&&n[1]&&t.getView().setCenter(n),l.z&&t.getView().setZoom(Number(l.z)),l.r&&t.getView().setRotation(Number(l.r)),l.l){!function e(a){a||(a=t.getLayers().getArray());for(var r=0;r<a.length;r++)a[r].get("permalink")&&a[r].setVisible(!1),a[r].getLayers&&e(a[r].getLayers().getArray())}();var c=l.l.split("|");for(r=0;r<c.length;r++){i=c[r].split(":");var h=this.getLayerByLink(i[0]),d=Number(i[1]);h&&(h.setOpacity(d),h.setVisible(!0))}}}}}getUrlParams(){return this.search_}setUrlParam(e,t){e&&(void 0===t||""===t?delete this.search_[encodeURIComponent(e)]:this.search_[encodeURIComponent(e)]=encodeURIComponent(t)),this.viewChange_()}getUrlParam(e){return decodeURIComponent(this.search_[encodeURIComponent(e)]||"")}hasUrlParam(e){return this.search_.hasOwnProperty(encodeURIComponent(e))}getLink(e){var t=this.getMap(),a=(0,g.transform)(t.getView().getCenter(),t.getView().getProjection(),"EPSG:4326"),r=Math.round(10*t.getView().getZoom())/10,i=t.getView().getRotation(),l=this.layerStr_,s=(i?"&r="+Math.round(1e4*i)/1e4:"")+(l?"&l="+l:"");if(s=this.get("geohash")?"gh="+m(a,8)+"-"+r+s:"lon="+a[0].toFixed(this.fixed_)+"&lat="+a[1].toFixed(this.fixed_)+"&z="+r+s,"position"===e)return s;for(var o in this.search_)s+="&"+o+(void 0!==this.search_[o]?"="+this.search_[o]:"");return e?s:document.location.protocol+"//"+document.location.host+document.location.pathname+this.hash_+s}getUrlReplace(){return this.replaceState_}setUrlReplace(e){try{if(this.replaceState_=e,e)window.history.replaceState(null,null,this.getLink());else{var t="";for(var a in this.search_)t+=(""==t?"?":"&")+a+(void 0!==this.search_[a]?"="+this.search_[a]:"");window.history.replaceState(null,null,document.location.origin+document.location.pathname+t)}}catch(e){}}viewChange_(){try{this.replaceState_&&window.history.replaceState(null,null,this.getLink())}catch(e){}if(this._localStorage)try{localStorage["ol@permalink"]=this.getLink(this._localStorage)}catch(e){console.warn("Failed to access localStorage...")}}layerChange_(){this._tout&&(clearTimeout(this._tout),this._tout=null),this._tout=setTimeout((function(){this._tout=null;var e="";(function t(a){for(var r=0;r<a.length;r++)a[r].getVisible()&&a[r].get("permalink")&&(e&&(e+="|"),e+=a[r].get("permalink")+":"+a[r].get("opacity")),a[r].getLayers&&t(a[r].getLayers().getArray())})(this.getMap().getLayers().getArray()),this.layerStr_=e,this.viewChange_()}).bind(this),200)}};function b(e){return e?y.getUrlParam(e):y.getUrlParams()}(0,d.default).addControl(y);var w=l("g3PuQ"),k=l("avjdK"),L=l("9qTgy"),o=l("iQyfo"),S=l("cmWwo"),M=l("6YKa7");l("aODzy"),l("4xRKW");var x={};x='<div data-attr="cover_picture" data-bgimg="1"></div><div class="header-profile"> <div data-attr="profile_picture" data-bgimg="1"></div> <br> <div class="social-networks"> <ul> <li class="social-network" data-attr="twitter_account" title="X / twitter"><a target="_blank"> <i class="fi-x-twitter" aria-hidden="true"></i> </a></li> <li class="social-network" data-attr="facebook_account" title="facebook"><a target="_blank"> <i class="fi-facebook" aria-hidden="true"></i> </a></li> <li class="social-network" data-attr="linkedin_account" title="linkedin"><a target="_blank"> <i class="fi-linkedin" aria-hidden="true"></i> </a></li> </ul> </div> <h1 data-attr="public_name"></h1> <ul class="header-info"> <li title="nombre de cartes partagées"> <i class="fi-map"></i> <span data-attr="nb_shared_maps"></span> carte<span class="plural">s</span> </li> <li title="nombre de vues"> <i class="fi-visible"></i> <span data-attr="nb_views"></span> vue<span class="plural">s</span> </li> <li title="depuis"> <i class="fi-calendar"></i> <span data-attr="registered_at" data-date="1"></span> <span data-attr="created_at" data-date="1"></span> </li> </ul> </div><div class="md subheader" data-attr="presentation"> </div><div class="maps-result"></div>',h.show(0);let C=b("user").split("_").pop(),U=b("team").split("_").pop();if(!C&&!U){let e=document.location.pathname.split("/"),t=e.pop().split("_").pop();"equipe"===e.pop()?U=t:C=t}if((0,s.default).setApp("profil","Ma carte"),C||U){let e=(0,s.default).getAppElement();e.innerHTML=(t=x)&&t.__esModule?t.default:t;let a=new L.default(k.default,{context:"atlas",search:!0,mode:"gallery",target:e.querySelector(".maps-result")});a.setMode("gallery"),a.on("click",e=>{window.open((0,S.getViewerURL)(e.item),"_blank")}),C?(0,k.default).getUser(C,t=>{if(!t||t.error){P();return}document.body.dataset.module="user",document.title=document.title.replace("profil",t.public_name),a.removeFilter("user"),a.setFilter("user",t.public_name),a.search(),h.hide(),(0,M.default)(t,e)}):(0,k.default).getTeam(U,t=>{if(!t||t.error){P();return}document.body.dataset.module="team",document.title=document.title.replace("profil",t.name),a.removeFilter("organization"),a.setFilter("organization",U),a.search(),h.hide(),(0,M.default)(t,e)},!0)}else P();function P(){let e=(0,o.default).create("A",{html:'consulter l\'atlas...<i class="fa fa-external-link"></i>',href:S.default.search,parent:(0,w.default).getContentElement()});h.hide(),(0,w.default).show404(e,"Impossible d'accéder à l'équipe.")}