(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},o={app:0},r={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b5784391"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"81e6dc63"}[t]+".css",r=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],p.parentNode.removeChild(p),a(i)},p.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){o[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}r[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/pdl.provider-directory.client/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("71ec"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("551c"),a("8a81"),a("d1e7"),a("15f5");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"white",flat:"",height:"163",width:"100%"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"d-flex align-center",staticStyle:{"padding-left":"115px"}},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"CHSLI Logo",contain:"",src:"https://chspp-prod.chsli.org/sites/default/files/logo-chs-physycian-partners382x97_1.png",transition:"scale-transition",width:"382"}})],1)])],1),a("v-row",{staticStyle:{"background-color":"#5FA6D0"}},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"d-flex align-center link",staticStyle:{color:"black","font-weight":"bold","padding-left":"115px"},on:{click:t.goHome}},[t._v("HOME")])])],1)],1)],1),a("v-content",[a("keep-alive",[a("router-view")],1)],1)],1)},r=[],i={name:"App",data:function(){return{}},beforeMount:function(){this.$store.dispatch("FETCH_AUTOCOMPLETE_LIST"),this.$store.dispatch("FETCH_PROVIDER_LIST")},computed:{runDateTime:function(){return new Date(this.$store.getters.DATA_DATE).toLocaleString()}},methods:{goHome:function(){window.open("https://chspp-prod.chsli.org","_self")}}},s=i,c=(a("034f"),a("2877")),l=a("6544"),u=a.n(l),d=a("7496"),p=a("40dc"),h=a("62ad"),f=a("a523"),v=a("a75b"),m=a("adda"),g=a("0fd9"),b=Object(c["a"])(s,o,r,!1,null,null,null),_=b.exports;u()(b,{VApp:d["a"],VAppBar:p["a"],VCol:h["a"],VContainer:f["a"],VContent:v["a"],VImg:m["a"],VRow:g["a"]});var w=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"4"}},[a("v-autocomplete",{attrs:{items:t.autocompleteList,"item-text":"value","item-value":"npi",placeholder:"Provider Name/Practice/Speciality","append-icon":"magnify","prepend-inner-icon":"search",outlined:"","return-object":"","hide-no-data":"",filter:t.filterSearchArray,dense:"","hide-details":""},on:{change:t.nameSearch},model:{value:t.searchItem,callback:function(e){t.searchItem=e},expression:"searchItem"}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-combobox",{attrs:{"hide-details":"",dense:"",items:t.locationList,placeholder:"Zip Code",outlined:"",clearable:"","append-icon":""},scopedSlots:t._u([{key:"item",fn:function(e){return[a("v-icon",[t._v("near_me")]),t._v("\n              "+t._s(e.item)+"\n            ")]}}]),model:{value:t.searchLocation,callback:function(e){t.searchLocation=e},expression:"searchLocation"}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-combobox",{attrs:{dense:"","hide-details":"","item-value":t.locationRangeList.value,"item-text":t.locationRangeList.text,items:t.locationRangeList,placeholder:"Range",outlined:""},model:{value:t.searchLocationRange,callback:function(e){t.searchLocationRange=e},expression:"searchLocationRange"}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-btn",{attrs:{block:""},on:{click:t.search}},[t._v("Search")])],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"2"}},[a("v-combobox",{attrs:{"hide-details":"",dense:"","item-text":t.genderList.text,items:t.genderList,placeholder:"Gender",outlined:""},model:{value:t.searchGender,callback:function(e){t.searchGender=e},expression:"searchGender"}})],1),a("v-col",{attrs:{cols:"3"}},[a("v-checkbox",{attrs:{label:"Stat Visits Accepted",dense:"","hide-details":""},model:{value:t.searchStatVisits,callback:function(e){t.searchStatVisits=e},expression:"searchStatVisits"}})],1)],1)],1)],1),t.displayResults?a("div",[a("v-layout",{attrs:{row:"",wrap:""}},[a("div",{staticStyle:{color:"rgba(36,32,44,.5)","margin-bottom":"15px"}},[t._v("Search Results: "+t._s(t.selectedItems.length)+" record(s) found.")])]),t._l(t.selectedItems,(function(e){return a("v-layout",{key:e.npi,staticClass:"mb-5 pa-3 provider-row",attrs:{row:"",wrap:""}},[a("v-col",{staticClass:"content-container",attrs:{cols:"12",sm:"12",md:"6"}},[a("h3",{staticClass:"link",on:{click:function(a){return t.showProvider(e.NPI)}}},[t._v("\n          "+t._s(e.Prov_Name+", "+e.Degree)+"\n          "),a("v-btn",{attrs:{small:"",color:"#49157c",dark:""}},[t._v("VIEW FULL BIO")])],1),a("div",{staticClass:"mb-3"},[t._v(t._s(e.Speciality))]),a("h4",[t._v("Hospital Affiliations")]),t._l(e.Hospital_Affiliations,(function(n,o){return a("div",{key:o},[o===Object.keys(e.Hospital_Affiliations).length-1?a("div",{staticStyle:{"margin-bottom":"50px"}},[t._v(t._s(n.Hospital_Name))]):a("div",[t._v(t._s(n.Hospital_Name))])])})),"captive"===e.Provider_Type.toLowerCase()?a("div",{staticClass:"content-bottom",attrs:{"align-center":""}},[a("v-img",{staticClass:"shrink mr-2",staticStyle:{float:"left"},attrs:{alt:"CHSLI Logo",contain:"",src:"https://www.chsli.org/themes/custom/chsli/logo.png",transition:"scale-transition",width:"100"}}),a("span",{staticClass:"employed"},[t._v("CHS Physician Partners Medical Group")])],1):t._e()],2),a("v-col",{attrs:{cols:"12",sm:"6",md:"2"}},[a("v-img",{staticClass:"results",attrs:{contain:"",height:"auto",width:"150",src:t.imagePath+"/"+e.NPI+".jpg"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},t._l(e.Location,(function(n,o){return a("div",{key:o},[0===o||t.showLocation(e.NPI)?a("v-card",{key:t.refreshKey,staticStyle:{"margin-bottom":"5px"}},[a("v-card-text",[a("div",[t._v(t._s(n.Practice))]),a("div",[t._v(t._s(n.Address))]),a("div",[t._v(t._s(n.City+", "+n.State+" "+n.Zip))]),n.Phone?a("div",[a("span",{staticClass:"material-icons",staticStyle:{"vertical-align":"middle"}},[t._v("call")]),t._v("\n                "+t._s(n.Phone)+"\n              ")]):t._e(),n.Fax?a("div",[a("span",{staticClass:"material-icons",staticStyle:{"vertical-align":"middle"}},[t._v("print")]),t._v("\n                "+t._s(n.Fax)+"\n              ")]):t._e(),n.range?a("div",{staticClass:"link",staticStyle:{"margin-top":"5px"},on:{click:function(e){return t.showMap(n.Address+" "+n.Zip)}}},[a("u",[a("span",{staticClass:"material-icons",staticStyle:{"vertical-align":"middle"}},[t._v("location_on")]),t._v("\n                  "+t._s(n.range)+" miles away\n                ")])]):t._e()])],1):t._e(),e.Location.length>1&&o===e.Location.length-1?a("div",[e.NPI!=t.locationNpiToShow?a("v-btn",{attrs:{text:"",small:""},on:{click:function(a){return t.toggleLocation(e.NPI,e.Location.length)}}},[t._v("\n              Show All Locations\n              "),a("span",{staticClass:"material-icons"},[t._v("keyboard_arrow_down")])]):t._e(),e.NPI===t.locationNpiToShow?a("v-btn",{attrs:{text:"",small:""},on:{click:function(e){return t.toggleLocation("")}}},[t._v("\n              Hide All Locations\n              "),a("span",{staticClass:"material-icons"},[t._v("keyboard_arrow_up")])]):t._e()],1):t._e()],1)})),0)],1)})),a("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toTop}},[a("v-icon",[t._v("keyboard_arrow_up")])],1)],2):t._e(),a("GmapMap",{ref:"gmap",staticStyle:{width:"0px",height:"0px"},attrs:{center:{lat:10,lng:10},zoom:15,"map-type-id":"roadmap"}})],1)},L=[],S=(a("55dd"),a("2909")),I=(a("96cf"),a("1da1")),x=(a("5df3"),a("1c4c"),a("6762"),a("2fdb"),a("7dc5")),P=a("755e"),T=(a("bc3a"),{name:"CHSoogle",data:function(){return{refreshKey:0,fab:!1,selectedItems:[{lastname:null,firstname:null,title:null,specialty:null}],searchItem:{NPI:null,value:null},searchLocation:null,searchLocationRange:null,searchGender:null,searchStatVisits:null,displayResults:!1,hidden:!0,locationNpiToShow:"",locationList:["Current Location"],locationRangeList:[{value:5,text:"5 Miles"},{value:15,text:"15 Miles"},{value:25,text:"25 Miles"},{value:50,text:"50 Miles"}],genderList:[{abbr:"F",text:"Female"},{abbr:"M",text:"Male"},{abbr:"No Preference",text:"No Preference"}],imagePath:x.imageUrl}},computed:{google:P["gmapApi"],providerData:function(){return this.$store.getters.PROVIDER_LIST},autocompleteList:function(){return this.$store.getters.AUTOCOMPLETE_LIST}},watch:{},methods:{showProvider:function(t){$.push({name:"provider",params:{npi:t}})},filterSearchArray:function(t,e,a){return!(!t.header&&!t.divider)||(!(!t.NPI||!t.value.toLowerCase().includes(e.toLowerCase()))||(!(!t.specialty&&!t.practice||!t.value.toLowerCase().includes(e.toLowerCase()))||void 0))},filterNames:function(t){var e=this;return t.NPI?this.providerData.filter((function(e){return e.NPI==t.NPI})):t.specialty?this.providerData.filter((function(e){return e.Speciality.includes(t.value)})):t.practice?this.providerData.filter((function(t){return t.Location.some((function(t){return t.Practice===e.searchItem.value}))})):Array.from(this.providerData)},nameSearch:function(t){t.NPI&&(this.selectedItems=this.providerData.filter((function(e){return e.NPI==t.NPI})),this.displayResults=!0)},search:function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(){var e,a,n,o,r,i,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("searching..."),this.displayResults=!1,this.selectedItems=Object(S["a"])(this.providerData),this.searchItem.value&&(this.selectedItems=this.filterNames(this.searchItem)),this.searchGender&&"No Preference"!=this.searchGender.text&&(this.selectedItems=this.selectedItems.filter((function(t){if(t.Gender)return t.Gender.toLowerCase()===s.searchGender.abbr.toLowerCase()}))),this.searchStatVisits&&(this.selectedItems=this.selectedItems.filter((function(t){return"true"===t.stat_visit}))),!this.searchLocation){t.next=21;break}if(e={},"Current Location"!==this.searchLocation){t.next=16;break}return t.next=11,C();case 11:a=t.sent,e.lat=a.coords.latitude,e.lng=a.coords.longitude,t.next=19;break;case 16:return t.next=18,this.geocodeZip(this.searchLocation);case 18:e=t.sent;case 19:for(n=0;n<this.selectedItems.length;n++)if(this.selectedItems[n].Location){for(o=0;o<this.selectedItems[n].Location.length;o++)r=this.selectedItems[n].Location[o],r.Latitude&&r.Longitude&&(i=k(e.lat,e.lng,r.Latitude,r.Longitude,"M"),this.selectedItems[n].Location[o].range=(Math.round(100*i)/100).toFixed(1));this.selectedItems[n].Location.sort((function(t,e){return t.range<e.range?-1:1}))}this.selectedItems=this.selectedItems.filter((function(t){for(var e=0;e<t.Location.length;e++)if(t.Location[e].range<s.searchLocationRange.value)return!0;return!1}));case 21:this.selectedItems.sort((function(t,e){return t.Prov_Name<e.Prov_Name?-1:1})),this.displayResults=!0;case 23:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),geocodeZip:function(t){return new Promise((function(e,a){var n=new google.maps.Geocoder;n.geocode({address:t},(function(t,n){"OK"==n?e({lat:t[0].geometry.location.lat(),lng:t[0].geometry.location.lng()}):a({lat:0,lng:0})}))}))},showLocation:function(t){return this.locationNpiToShow===t},toggleLocation:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e<=3?(this.locationNpiToShow=t,this.refreshKey++):this.showProvider(t)},onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)},showMap:function(t){window.open("http://maps.google.com/maps?q=".concat(t),"_blank")}}}),C=function(t){return new Promise((function(e,a){navigator.geolocation.getCurrentPosition(e,a,t)}))};function k(t,e,a,n,o){if(t==a&&e==n)return 0;var r=Math.PI*t/180,i=Math.PI*a/180,s=e-n,c=Math.PI*s/180,l=Math.sin(r)*Math.sin(i)+Math.cos(r)*Math.cos(i)*Math.cos(c);return l>1&&(l=1),l=Math.acos(l),l=180*l/Math.PI,l=60*l*1.1515,"K"==o&&(l*=1.609344),"N"==o&&(l*=.8684),l}var E=T,A=(a("cccb"),a("c6a6")),O=a("8336"),N=a("b0af"),M=a("99d9"),R=a("ac7c"),V=a("2b5d"),D=a("132d"),j=a("a722"),F=a("269a"),H=a.n(F),U=a("f977"),G=Object(c["a"])(E,y,L,!1,null,null,null),B=G.exports;u()(G,{VAutocomplete:A["a"],VBtn:O["a"],VCard:N["a"],VCardText:M["a"],VCheckbox:R["a"],VCol:h["a"],VCombobox:V["a"],VContainer:f["a"],VIcon:D["a"],VImg:m["a"],VLayout:j["a"],VRow:g["a"]}),H()(G,{Scroll:U["b"]}),n["a"].use(w["a"]);var $=new w["a"]({mode:"history",base:"/pdl.provider-directory.client/",routes:[{path:"/",name:"home",component:B},{path:"/provider",name:"provider",component:function(){return a.e("about").then(a.bind(null,"b5d1"))},props:{default:!0}}]}),K=a("2f62"),Z=a("bc3a"),q={providers:[],dataDate:null,autocomplete:[]},z={PROVIDER_LIST:function(t){return t.providers},DATA_DATE:function(t){return t.dataDate},AUTOCOMPLETE_LIST:function(t){return t.autocomplete}},J={SET_PROVIDER_LIST:function(t,e){t.providers=e},SET_DATA_DATE:function(t,e){t.dataDate=e},SET_AUTOCOMPLETE_LIST:function(t,e){t.autocomplete=e}},Q={FETCH_PROVIDER_LIST:function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.get("".concat(x.jsonUrl).concat(x.dataFile));case 2:a=t.sent,e.commit("SET_PROVIDER_LIST",a.data[0].providerData),e.commit("SET_DATA_DATE",a.data[0].runDateTime);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),FETCH_AUTOCOMPLETE_LIST:function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.get("".concat(x.jsonUrl).concat(x.autocompleteFile));case 2:a=t.sent,e.commit("SET_AUTOCOMPLETE_LIST",a.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},W={state:q,getters:z,mutations:J,actions:Q};n["a"].use(K["a"]);var Y=new K["a"].Store({modules:{providers:W}}),X=a("f309");n["a"].use(X["a"]);var tt=new X["a"]({});a("db4d"),a("6b42");n["a"].config.productionTip=!1,n["a"].use(P,{load:{key:"AIzaSyAeEZOnkIiBUzEJKwiuQwUks8Nbe5PUmlo",libraries:"places"}}),new n["a"]({router:$,store:Y,vuetify:tt,VueGoogleMaps:P,render:function(t){return t(_)},icons:{iconfont:"fa"}}).$mount("#app")},"71ec":function(t,e,a){},"7dc5":function(t){t.exports=JSON.parse('{"jsonUrl":"https://intranet.chsli.org/provider-files.php?file=","jsonUrl_dev":"https://intranet-staging.chsli.org/provider-files.php?file=","dataFile":"PDLProviderListing","autocompleteFile":"PDLAutocompleteListing","imageUrl":"https://www.chsli.org/sites/default/files/md-photos","gMapsKey":"AIzaSyBoBoVxHwq1bcVmqS5QGFyte0uFF051_a4"}')},cccb:function(t,e,a){"use strict";var n=a("ff99"),o=a.n(n);o.a},ff99:function(t,e,a){}});
//# sourceMappingURL=app.39490f26.js.map