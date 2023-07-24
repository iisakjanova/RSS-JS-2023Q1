
(()=>{"use strict";var e={229:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([e.id,".app-container {\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 10px;\n}\n\n.navigation {\n  margin-bottom: 10px;\n}\n\n.nav-btn {\n  padding: 5px;\n  margin: 3px;\n  border: transparent;\n  border-radius: 3px;\n  background: linear-gradient(90deg, #800080, #d8bfd8);\n}\n\n.nav-btn:not([disabled]):hover {\n  background: linear-gradient(90deg, #d8bfd8, #800080);\n  cursor: pointer;\n}\n",""]);const s=o},719:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([e.id,".car-block {\n  border-bottom: 1px dotted white;\n}\n\n.car-block-header {\n  margin-bottom: 10px;\n}\n\n.car-block-header * {\n  margin-right: 5px;\n}\n\n.car-block button {\n  padding: 5px;\n  margin: 3px;\n  border: transparent;\n  border-radius: 3px;\n  background: radial-gradient(circle, #6ac7ff, #007bff);\n}\n\n.car-block button:not([disabled]):hover {\n  background: radial-gradient(circle, #007bff, #6ac7ff);\n  cursor: pointer;\n}\n\n.car-name {\n  color: lightblue;\n}\n\n.track {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n\n.car {\n  display: flex;\n  align-items: flex-start;\n}\n\n.car-image {\n  position: absolute;\n  left: 100px;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transition: left 0.5s;\n  width: 100px;\n}\n\n.car-image.animation {\n  animation: carAnimation linear forwards;\n}\n\n.flag {\n  margin-right: 20%;\n  width: 40px;\n}\n\n@keyframes carAnimation {\n  0% {\n    left: 100px;\n  }\n  99.9% {\n    left: 90%;\n  }\n  100% {\n    left: 90%;\n  }\n}\n",""]);const s=o},378:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([e.id,".input-wrapper {\n  display: flex;\n  margin-bottom: 10px;\n}\n\n.form input {\n  margin-right: 5px;\n}\n\n.form .btn {\n  width: 50px;\n  padding: 5px;\n  border: transparent;\n  border-radius: 3px;\n  background: radial-gradient(circle, #6ac7ff, #007bff);\n  cursor: pointer;\n}\n\n.form .btn:hover {\n  background: radial-gradient(circle, #007bff, #6ac7ff);\n}\n",""]);const s=o},859:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([e.id,".garage-page {\n  position: relative;\n}\n\n.race-buttons {\n  margin-bottom: 10px;\n}\n\n.race-buttons button {\n  padding: 5px;\n  margin: 3px;\n  border: transparent;\n  border-radius: 3px;\n  background: linear-gradient(to right, #ff9800, #ff9800, #ffffff);\n  cursor: pointer;\n}\n\n.race-buttons button:hover {\n  background: linear-gradient(to left, #ff9800, #ff9800, #ffffff);\n}\n\n.garage-page .title {\n  color: white;\n}\n\n.winner-message {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 30px;\n  font-weight: 900;\n  color: blueviolet;\n}\n",""]);const s=o},291:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([e.id,".winners-page {\n  margin: 0 auto;\n  max-width: 500px;\n  color: white;\n}\n.winners-page .title {\n  text-align: center;\n}\n\n.winners {\n  display: flex;\n  flex-direction: column;\n}\n\n.winners-table-row span {\n  flex: 1;\n  max-width: 100px;\n  word-wrap: break-word;\n  text-align: center;\n}\n\n.winners-table-rows {\n  display: flex;\n  flex-direction: column;\n}\n\n.winners-table-row {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n}\n\n.winners-table-row svg {\n  max-width: 30px;\n}\n",""]);const s=o},426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([e.id,"body {\n  background: black;\n}\n",""]);const s=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},298:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"7f2507d6daf51f7ce43b93a0b3367dfa.svg"},329:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var r=t(379),i=t.n(r),a=t(795),o=t.n(a),s=t(569),c=t.n(s),l=t(565),d=t.n(l),u=t(216),h=t.n(u),f=t(589),m=t.n(f),p=t(229),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=h(),i()(p.Z,g);const v=p.Z&&p.Z.locals?p.Z.locals:void 0},652:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var r=t(379),i=t.n(r),a=t(795),o=t.n(a),s=t(569),c=t.n(s),l=t(565),d=t.n(l),u=t(216),h=t.n(u),f=t(589),m=t.n(f),p=t(719),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=h(),i()(p.Z,g);const v=p.Z&&p.Z.locals?p.Z.locals:void 0},344:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var r=t(379),i=t.n(r),a=t(795),o=t.n(a),s=t(569),c=t.n(s),l=t(565),d=t.n(l),u=t(216),h=t.n(u),f=t(589),m=t.n(f),p=t(378),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=h(),i()(p.Z,g);const v=p.Z&&p.Z.locals?p.Z.locals:void 0},140:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var r=t(379),i=t.n(r),a=t(795),o=t.n(a),s=t(569),c=t.n(s),l=t(565),d=t.n(l),u=t(216),h=t.n(u),f=t(589),m=t.n(f),p=t(859),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=h(),i()(p.Z,g);const v=p.Z&&p.Z.locals?p.Z.locals:void 0},380:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var r=t(379),i=t.n(r),a=t(795),o=t.n(a),s=t(569),c=t.n(s),l=t(565),d=t.n(l),u=t(216),h=t.n(u),f=t(589),m=t.n(f),p=t(291),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=h(),i()(p.Z,g);const v=p.Z&&p.Z.locals?p.Z.locals:void 0},75:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var r=t(379),i=t.n(r),a=t(795),o=t.n(a),s=t(569),c=t.n(s),l=t(565),d=t.n(l),u=t(216),h=t.n(u),f=t(589),m=t.n(f),p=t(426),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=h(),i()(p.Z,g);const v=p.Z&&p.Z.locals?p.Z.locals:void 0},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},o=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var h=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)n[h].references++,n[h].updater(f);else{var m=i(f,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}o.push(u)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=t(a[o]);n[s].references--}for(var c=r(e,i),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},203:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.removeWinner=n.removeCar=n.createCar=n.getWinners=n.getWinner=n.updateWinner=n.createWinner=n.setDriveMode=n.stopEngine=n.startEngine=n.getCars=void 0;const i=t(601);n.getCars=function(){return r(this,void 0,void 0,(function*(){try{const e=yield fetch(`${i.API_URL}${i.URL_ENDPOINT_GARAGE}`);return yield e.json()}catch(e){return e instanceof Error?console.error("Error:",e.message):console.error("Unknown error:",e),null}}))},n.startEngine=function(e){return r(this,void 0,void 0,(function*(){try{const n=yield fetch(`${i.API_URL}engine?id=${e}&status=started`,{method:"PATCH"});return yield n.json()}catch(e){return e instanceof Error?console.error("Error:",e.message):console.error("Unknown error:",e),null}}))},n.stopEngine=function(e){return r(this,void 0,void 0,(function*(){try{const n=yield fetch(`${i.API_URL}engine?id=${e}&status=stopped`,{method:"PATCH"});return yield n.json()}catch(e){return e instanceof Error?console.error("Error:",e.message):console.error("Unknown error:",e),null}}))},n.setDriveMode=function(e){return r(this,void 0,void 0,(function*(){try{const n=yield fetch(`${i.API_URL}engine?id=${e}&status=drive`,{method:"PATCH"});return 500===n.status?i.STOP:yield n.json()}catch(e){return e instanceof Error?console.error("Error:",e.message):console.error("Unknown error:",e),null}}))},n.createWinner=function(e){return r(this,void 0,void 0,(function*(){try{const n=yield fetch(`${i.API_URL}${i.URL_ENDPOINT_WINNERS}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return yield n.json()}catch(e){return e instanceof Error?console.error("Error:",e.message):console.error("Unknown error:",e),null}}))},n.updateWinner=function(e){return r(this,void 0,void 0,(function*(){const n={wins:e.wins,time:e.time};try{const t=yield fetch(`${i.API_URL}winners/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return yield t.json()}catch(e){return e instanceof Error?console.error("Error:",e.message):console.error("Unknown error:",e),null}}))},n.getWinner=function(e){return r(this,void 0,void 0,(function*(){try{const n=yield fetch(`${i.API_URL}${i.URL_ENDPOINT_WINNERS}${e}`);return yield n.json()}catch(e){return e instanceof Error?console.error("Error:",e.message):console.error("Unknown error:",e),!1}}))},n.getWinners=function(){return r(this,void 0,void 0,(function*(){try{const e=yield fetch(`${i.API_URL}${i.URL_ENDPOINT_WINNERS}`);return yield e.json()}catch(e){return e instanceof Error?console.error("Error:",e.message):console.error("Unknown error:",e),!1}}))},n.createCar=function(e){return r(this,void 0,void 0,(function*(){try{const n=yield fetch(`${i.API_URL}${i.URL_ENDPOINT_GARAGE}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return yield n.json()}catch(e){return e instanceof Error?console.error("Error:",e.message):console.error("Unknown error:",e),null}}))},n.removeCar=function(e){return r(this,void 0,void 0,(function*(){try{const n=yield fetch(`${i.API_URL}${i.URL_ENDPOINT_GARAGE}${e}`,{method:"DELETE"});return yield n.json()}catch(e){return e instanceof Error?console.error("Error:",e.message):console.error("Unknown error:",e),null}}))},n.removeWinner=function(e){return r(this,void 0,void 0,(function*(){try{const n=yield fetch(`${i.API_URL}${i.URL_ENDPOINT_WINNERS}${e}`,{method:"DELETE"});return yield n.json()}catch(e){return e instanceof Error?console.error("Error:",e.message):console.error("Unknown error:",e),null}}))}},717:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}c((r=r.apply(e,n||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const a=i(t(535)),o=t(203),s=i(t(654)),c=t(457);t(329),n.default=class{constructor(){this.handleClickToGarageButton=()=>{const e=this.container.querySelector(".winners-page");e&&this.container.removeChild(e),this.garage=new a.default(this.garageData,this.onChangeCars.bind(this));const n=this.garage.render();this.container.appendChild(n),this.toGarageBtn&&this.toWinnersBtn&&(this.toGarageBtn.disabled=!0,this.toWinnersBtn.disabled=!1)},this.handleClickToWinnersButton=()=>r(this,void 0,void 0,(function*(){this.winnersData=yield(0,o.getWinners)(),this.garageData=yield(0,o.getCars)();const e=this.createWinnersPageData(),n=this.container.querySelector(".garage-page");n&&this.container.removeChild(n);const t=new s.default(e).render();this.container.appendChild(t),this.toGarageBtn&&this.toWinnersBtn&&(this.toGarageBtn.disabled=!1,this.toWinnersBtn.disabled=!0)})),this.container=document.createElement("div"),this.winnersData=[],this.garageData=[],this.toGarageBtn=null,this.toWinnersBtn=null,this.garage=null}createWinnersPageData(){return this.winnersData.map((e=>{const n=this.garageData.find((n=>n.id===e.id));return n?{name:n.name,color:n.color,id:n.id,wins:e.wins,time:e.time}:{name:"Unknown Car",color:"white",id:e.id,wins:e.wins,time:e.time}}))}createNavigation(){const e=(0,c.createElement)("div","navigation"),n=(0,c.createElement)("button","nav-btn","to garage");n instanceof HTMLButtonElement&&(this.toGarageBtn=n,this.toGarageBtn.addEventListener("click",this.handleClickToGarageButton),e.append(this.toGarageBtn));const t=(0,c.createElement)("button","nav-btn","to winners");return t instanceof HTMLButtonElement&&(this.toWinnersBtn=t,this.toWinnersBtn.addEventListener("click",this.handleClickToWinnersButton),e.append(this.toWinnersBtn)),e}onChangeCars(){return r(this,void 0,void 0,(function*(){this.garageData=yield(0,o.getCars)(),this.garage&&(this.garage.setCarsData(this.garageData),this.garage.rerenderCars())}))}render(){return r(this,void 0,void 0,(function*(){this.container.className="app-container",this.winnersData=yield(0,o.getWinners)(),this.garageData=yield(0,o.getCars)();const e=this.createNavigation();this.garage=new a.default(this.garageData,this.onChangeCars.bind(this));const n=this.garage.render();return this.toGarageBtn&&(this.toGarageBtn.disabled=!0),this.container&&this.container.append(e,n),this.container}))}}},881:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}c((r=r.apply(e,n||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),t(652);const a=i(t(927)),o=i(t(298)),s=t(457),c=t(203),l=t(601);n.default=class{constructor(e,n){this.handleRemoveCar=()=>r(this,void 0,void 0,(function*(){yield(0,c.removeCar)(this.id),yield(0,c.removeWinner)(this.id),this.onChangeCars()})),this.name=e.name,this.color=e.color,this.id=e.id,this.carBlockElement=document.createElement("div"),this.velocity=0,this.distance=0,this.carRaceTime="0",this.engineStartButtonElement=(0,s.createElement)("button","engine-button","A"),this.engineStopButtonElement=(0,s.createElement)("button","engine-button","B"),this.onChangeCars=n}startCarEngine(){return r(this,void 0,void 0,(function*(){this.engineStartButtonElement instanceof HTMLButtonElement&&this.engineStopButtonElement instanceof HTMLButtonElement&&(this.engineStartButtonElement.disabled=!0,this.engineStopButtonElement.disabled=!1);const e=yield(0,c.startEngine)(this.id);this.velocity=e.velocity,this.distance=e.distance;const n=document.querySelector(`[data-id="${this.id}"]`);if(n instanceof HTMLElement){n.classList.add("animation");const e=Math.round(this.distance/this.velocity).toString();n.style.animationDuration=`${e}ms`,this.carRaceTime=e}(yield(0,c.setDriveMode)(this.id))===l.STOP&&this.stopCarEngine(!0)}))}stopCarEngine(e=!1){return r(this,void 0,void 0,(function*(){this.engineStartButtonElement instanceof HTMLButtonElement&&this.engineStopButtonElement instanceof HTMLButtonElement&&(this.engineStartButtonElement.disabled=!1,this.engineStopButtonElement.disabled=!0),yield(0,c.stopEngine)(this.id);const n=document.querySelector(`[data-id="${this.id}"]`);if(n instanceof HTMLElement){if(e){const e=getComputedStyle(n);n.style.left=e.getPropertyValue("left")}n.classList.remove("animation")}}))}resetCarPosition(){const e=this.carBlockElement.querySelector(".car-image");e instanceof HTMLDivElement&&(e.style.left=l.CAR_LEFT_POSITION)}createCarBlockHeaderElement(e){const n=(0,s.createElement)("div","car-block-header"),t=(0,s.createElement)("button","car-button","select"),r=(0,s.createElement)("button","car-button","remove");r.addEventListener("click",this.handleRemoveCar);const i=(0,s.createElement)("span","car-name",e);return n.append(t,r,i),n}createTrackElement(e,n){const t=(0,s.createElement)("div","track"),r=(0,s.createElement)("div","car"),i=(0,s.createElement)("div","car-image",a.default);i.setAttribute("data-id",`${n}`),i.style.fill=e,r.append(this.engineStartButtonElement,this.engineStopButtonElement,i),this.engineStopButtonElement instanceof HTMLButtonElement&&(this.engineStopButtonElement.disabled=!0);const c=(0,s.createElement)("img","flag");return c instanceof HTMLImageElement&&(c.src=o.default),t.append(r,c),this.engineStartButtonElement.addEventListener("click",(()=>{this.startCarEngine()})),this.engineStopButtonElement.addEventListener("click",(()=>{this.stopCarEngine()})),t}render(){this.carBlockElement.className="car-block";const e=this.createCarBlockHeaderElement(this.name),n=this.createTrackElement(this.color,this.id);return this.carBlockElement.append(e,n),this.carBlockElement}}},927:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default='<svg\nxmlns="http://www.w3.org/2000/svg"\nenable-background="new 0 0 1000 600"\noverflow="visible"\nversion="1.1"\nviewBox="0 0 1000 600"\n>\n<path d="m251.99 369.53c-3.653 0-6.615 2.962-6.615 6.615s2.962 6.615 6.615 6.615 6.615-2.962 6.615-6.615-2.961-6.615-6.615-6.615zm0 18.772c-1.548 0-2.804 1.256-2.804 2.805 0 1.548 1.255 2.804 2.804 2.804s2.804-1.256 2.804-2.804c0-1.549-1.255-2.805-2.804-2.805zm7.431 8.607v22.711c6.642-1.127 12.776-3.74 18.053-7.483l-16.059-16.059c-0.648 0.307-1.312 0.587-1.994 0.831zm12.505-11.337l16.058 16.058c3.744-5.276 6.354-11.413 7.482-18.055h-22.713c-0.245 0.682-0.52 1.349-0.827 1.997zm-2e-3 -18.852c0.307 0.648 0.585 1.313 0.83 1.995h22.712c-1.127-6.642-3.74-12.776-7.483-18.054l-16.059 16.059zm-29.358-10.507c0.649-0.308 1.313-0.587 1.995-0.831v-22.711c-6.642 1.127-12.776 3.74-18.053 7.483l16.058 16.059zm9.424-52.279c-39.881 0-72.212 32.33-72.212 72.212s32.331 72.212 72.212 72.212c39.882 0 72.212-32.33 72.212-72.212s-32.33-72.212-72.212-72.212zm0 123.79c-28.487 0-51.58-23.093-51.58-51.58 0-28.486 23.093-51.58 51.58-51.58s51.58 23.094 51.58 51.58c0 28.487-23.093 51.58-51.58 51.58zm0-63.739c1.549 0 2.804-1.256 2.804-2.805 0-1.548-1.255-2.804-2.804-2.804-1.548 0-2.804 1.256-2.804 2.804 1e-3 1.549 1.256 2.805 2.804 2.805zm25.484-23.834c-5.276-3.743-11.412-6.355-18.053-7.482v22.711c0.682 0.244 1.347 0.522 1.995 0.83l16.058-16.059zm-45.418 26.566l-16.058-16.059c-3.744 5.277-6.355 11.413-7.482 18.055h22.713c0.244-0.682 0.519-1.348 0.827-1.996zm-5.55 45.419c5.277 3.743 11.413 6.355 18.055 7.482v-22.711c-0.682-0.244-1.348-0.522-1.996-0.83l-16.059 16.059zm4.721-28.563h-22.711c1.127 6.642 3.739 12.777 7.482 18.055l16.059-16.06c-0.307-0.648-0.586-1.313-0.83-1.995zm8.606-7.431c0-1.549-1.255-2.804-2.804-2.804s-2.804 1.255-2.804 2.804 1.255 2.804 2.804 2.804c1.548 0 2.804-1.255 2.804-2.804zm24.315 0c0 1.549 1.255 2.804 2.804 2.804s2.804-1.255 2.804-2.804-1.255-2.804-2.804-2.804c-1.549 1e-3 -2.804 1.256-2.804 2.804zm547.49-6.614c-3.653 0-6.615 2.962-6.615 6.615s2.962 6.615 6.615 6.615 6.615-2.962 6.615-6.615-2.962-6.615-6.615-6.615zm-9.424-13.317c0.648-0.308 1.313-0.587 1.994-0.831v-22.711c-6.642 1.127-12.776 3.74-18.054 7.483l16.06 16.059zm9.424 32.089c-1.549 0-2.804 1.256-2.804 2.805 0 1.548 1.255 2.804 2.804 2.804s2.804-1.256 2.804-2.804c-1e-3 -1.549-1.256-2.805-2.804-2.805zm7.43 8.607v22.711c6.642-1.127 12.775-3.74 18.053-7.483l-16.059-16.059c-0.648 0.307-1.312 0.587-1.994 0.831zm13.331-13.334c-0.244 0.682-0.52 1.349-0.826 1.997l16.058 16.058c3.744-5.276 6.354-11.413 7.482-18.055h-22.714zm104.87-91.42c-9.801-15.004-34.896-20.235-54.012-26.477-133.49-32.242-177.88-21.747-200.16-24.888-4.495-1.199-8.503-5.123-12.179-7.413-8.057-5.019-16.418-9.434-24.358-14.298-13.119-8.036-73.653-41.146-90.02-47.128-35.963-13.142-92.818-23.68-229.82-12.708-5.56-1.528-8.916-6.016-14.826-7.414-5.846-1.383-11.214 1.693-15.356 2.648 0.075 4.491-0.326 8.136-1.059 11.649-26.775 11.291-53.869 19.953-80.488 31.242-11.108 4.711-22.569 9.32-33.89 14.297-7.042 3.097-13.77 7.495-21.71 10.062-8.624 2.786-18.051 1.527-27.536 3.706-17.267 3.967-35.99 4.497-55.071 4.766-2.181 3.738-5.977 7.503-6.884 12.18 3.305 1.02 4.412 3.298 4.236 7.942-5.84 8.653-4.274 20.981-4.236 34.949-12.441 6.37-14.333 29.711-11.12 48.187l-1.059 4.767c0.665 5.223 2.365 10.742 2.647 16.415 4.672 3.133 9.968 8.167 13.238 12.709 1.595 2.215 2.371 6.033 5.295 6.884 15.631 11.41 94.785 13.768 94.785 13.768l4.164 0.228c-0.637-3.934-0.973-7.969-0.973-12.082 0-41.478 33.625-75.102 75.102-75.102 41.478 0 75.102 33.624 75.102 75.102 0 6.966-0.952 18.277-2.728 24.678l416.07-0.736c-2.527-7.52-3.898-15.57-3.898-23.941 0-41.478 33.624-75.102 75.102-75.102s75.102 33.624 75.102 75.102c0 7.27-1.036 14.297-2.964 20.945l4.252-0.089s32.779-1.584 40.773-5.296c7.994-3.711 11.12-14.297 11.12-14.297l-2.118-22.24c1e-3 -1e-3 9.847-47.13-0.529-63.015zm-664.56-54.536c-24.887-16.535-11.702-35.842-12.373-35.781-0.398 0.354-0.685 0.636-0.865 0.827 0.528-0.559 0.788-0.82 0.865-0.827 6.412-5.714 43.006-31.271 172.82-31.474 4.06 22.768 8.12 52.68 12.179 75.446-52.233-1.583-155.04-0.7-172.63-8.191zm334.66 8.467c-11.408 0-124.97-0.031-124.97-0.031s-18.331-48.33-24.887-75.157c0.763 0.07 23.298 1.055 23.298 1.055s44.613 5.079 72.546 14.298c21.976 7.253 65.363 36.403 66.19 38.126-13.053 0.668-16.143 10.95-12.178 21.709zm204.26 57.848c-39.882 0-72.212 32.33-72.212 72.212s32.33 72.212 72.212 72.212 72.212-32.33 72.212-72.212-32.331-72.212-72.212-72.212zm0 123.79c-28.486 0-51.58-23.093-51.58-51.58 0-28.486 23.094-51.58 51.58-51.58 28.487 0 51.58 23.094 51.58 51.58 0 28.487-23.093 51.58-51.58 51.58zm-19.935-61.007l-16.059-16.059c-3.743 5.277-6.354 11.413-7.481 18.055h22.713c0.244-0.682 0.519-1.348 0.827-1.996zm7.777 9.425c0-1.549-1.256-2.804-2.805-2.804-1.548 0-2.804 1.255-2.804 2.804s1.256 2.804 2.804 2.804c1.55 0 2.805-1.255 2.805-2.804zm12.158-12.157c1.549 0 2.804-1.256 2.804-2.805 0-1.548-1.255-2.804-2.804-2.804s-2.804 1.256-2.804 2.804c0 1.549 1.255 2.805 2.804 2.805zm25.484-23.834c-5.277-3.743-11.412-6.355-18.054-7.482v22.711c0.682 0.244 1.347 0.522 1.995 0.83l16.059-16.059zm-13.327 35.991c0 1.549 1.256 2.804 2.805 2.804 1.548 0 2.804-1.255 2.804-2.804s-1.256-2.804-2.804-2.804c-1.549 1e-3 -2.805 1.256-2.805 2.804zm-37.642 35.994c5.277 3.743 11.413 6.355 18.055 7.482v-22.711c-0.683-0.244-1.348-0.522-1.996-0.83l-16.059 16.059zm4.721-28.563h-22.711c1.127 6.642 3.739 12.777 7.482 18.055l16.059-16.06c-0.308-0.648-0.586-1.313-0.83-1.995zm41.527-14.86h22.711c-1.127-6.642-3.739-12.776-7.482-18.054l-16.059 16.059c0.307 0.648 0.586 1.313 0.83 1.995z" />\n</svg>'},682:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0});const i=t(203),a=t(457);t(344),n.default=class{constructor(e,n){this.formElement=(0,a.createElement)("form","form"),this.btnText=e,this.onChangeCars=n,this.input=null,this.colorInput=null}createInputElement(){const e=(0,a.createElement)("div","input-wrapper");this.input=(0,a.createElement)("input","car-input"),this.colorInput=(0,a.createElement)("input",""),this.colorInput instanceof HTMLInputElement&&(this.colorInput.type="color");const n=(0,a.createElement)("button","btn",`${this.btnText}`);return e.append(this.input,this.colorInput,n),e}handleFormSubmit(){return r(this,void 0,void 0,(function*(){if(this.input instanceof HTMLInputElement&&this.colorInput instanceof HTMLInputElement){const e={name:this.input.value,color:this.colorInput.value};yield(0,i.createCar)(e),this.input.value=""}this.onChangeCars()}))}render(){this.formElement.addEventListener("submit",(e=>{e.preventDefault(),this.handleFormSubmit()}));const e=this.createInputElement();return this.formElement.append(e),this.formElement}}},601:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.URL_ENDPOINT_WINNERS=n.URL_ENDPOINT_GARAGE=n.CAR_LEFT_POSITION=n.STOP=n.API_URL=void 0,n.API_URL="http://localhost:3000/",n.STOP="stop",n.CAR_LEFT_POSITION="100px",n.URL_ENDPOINT_GARAGE="garage/",n.URL_ENDPOINT_WINNERS="winners/"},457:(e,n)=>{function t(e,n,t=""){const r=document.createElement(`${e}`);return r.className=`${n}`,t&&(r.innerHTML=`${t}`),r}Object.defineProperty(n,"__esModule",{value:!0}),n.createWinnersTableHeader=n.createElement=void 0,n.createElement=t,n.createWinnersTableHeader=()=>{const e=t("span","","Number"),n=t("span","","Cars"),r=t("span","","Name"),i=t("span","","Wins"),a=t("span","","Best time(sec)"),o=t("div","winners-table-row");return o.append(e,n,r,i,a),o}},607:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}c((r=r.apply(e,n||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const a=i(t(717));t(75),function(){r(this,void 0,void 0,(function*(){const e=document.querySelector("body");if(e){const n=new a.default,t=yield n.render();e.append(t)}}))}()},535:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}c((r=r.apply(e,n||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const a=t(457),o=i(t(881));t(140);const s=t(203),c=i(t(682));class l{constructor(e,n){this.handleAnimationEnd=e=>{if(!this.raceCompleted){if(e.target instanceof HTMLDivElement){const n=e.target.closest(".car");if(n){const e=n.querySelector(".car-image");if(e instanceof HTMLElement){const n=Number(e.getAttribute("data-id"));this.showWinner(n);const t=this.cars.filter((e=>e.id===n)),r=Number(t[0].carRaceTime)/1e3;l.saveWinner(n,r)}}}this.raceCompleted=!0}},this.page=document.createElement("div"),this.carsData=e,this.onChangeCars=n,this.cars=this.createCars(),this.raceCompleted=!0,this.winnerMessage=(0,a.createElement)("div","winner-message")}createCars(){const e=[];for(let n=0;n<this.carsData.length;n+=1){const t=new o.default(this.carsData[n],this.onChangeCars.bind(this));e.push(t)}return e}createCarsElement(){const e=(0,a.createElement)("h2","title",`Garage (${this.carsData.length})`),n=(0,a.createElement)("div","cars");n.append(e);for(let e=0;e<this.cars.length;e+=1){const t=this.cars[e].render();n.append(t)}return n.addEventListener("animationend",this.handleAnimationEnd),n}startRace(){this.raceCompleted=!1;for(let e=0;e<this.cars.length;e+=1)this.cars[e].startCarEngine()}stopRace(){for(let e=0;e<this.cars.length;e+=1)this.cars[e].stopCarEngine(),this.cars[e].resetCarPosition();this.raceCompleted=!0;const e=document.querySelector(".winner-message");e instanceof HTMLDivElement&&(e.innerText="")}getWinnerName(e){const n=this.carsData.find((n=>n.id===e));return n?n.name:""}showWinner(e){const n=this.getWinnerName(e);this.winnerMessage.innerText=`${n} won!`}static saveWinner(e,n){return r(this,void 0,void 0,(function*(){const t={id:e,wins:1,time:n},r=yield(0,s.getWinner)(e);Object.keys(r).length>0?(t.wins=r.wins+1,t.time=Math.min(r.time,t.time),(0,s.updateWinner)(t)):(0,s.createWinner)(t)}))}setCarsData(e){this.carsData=e}rerenderCars(){const e=this.page.querySelector(".cars");if(e){this.page.removeChild(e),this.cars=this.createCars();const n=this.createCarsElement();this.page.append(n)}}render(){this.page.className="garage-page";const e=new c.default("create",this.onChangeCars.bind(this)).render(),n=new c.default("update",this.onChangeCars.bind(this)).render(),t=(0,a.createElement)("div","race-buttons"),r=(0,a.createElement)("button","race-button","race");r.addEventListener("click",(()=>{this.startRace()}));const i=(0,a.createElement)("button","reset-button","reset");i.addEventListener("click",(()=>{this.stopRace()})),t.append(r,i);const o=this.createCarsElement();return this.page.append(e,n,t,o,this.winnerMessage),this.page}}n.default=l},654:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const i=t(457),a=r(t(927));t(380),n.default=class{constructor(e){this.page=(0,i.createElement)("div","winners-page"),this.winners=e}createWinnersTableRows(){const e=(0,i.createElement)("div","winners-table-rows");for(let n=0;n<this.winners.length;n+=1){const t=(0,i.createElement)("span","",`${n+1}`),r=(0,i.createElement)("span","car-img",`${a.default}`);r.style.fill=`${this.winners[n].color}`;const o=(0,i.createElement)("span","",`${this.winners[n].name}`),s=(0,i.createElement)("span","",`${this.winners[n].wins}`),c=(0,i.createElement)("span","",`${this.winners[n].time}`),l=(0,i.createElement)("div","winners-table-row");l.append(t,r,o,s,c),e.append(l)}return e}createWinnersTableElement(){const e=(0,i.createElement)("div","winners"),n=(0,i.createWinnersTableHeader)(),t=this.createWinnersTableRows();return e.append(n,t),e}render(){const e=(0,i.createElement)("h2","title",`Winners (${this.winners.length})`),n=this.createWinnersTableElement();return this.page.append(e,n),this.page}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var a=n[r]={id:r,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!e;)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,t(607)})();

