(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var s=a[o];0!==i[s]&&(r=!1)}r&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},o={app:0},i={app:0},n=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a44e0f5e"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"81e6dc63"}[t]+".css",i=c.p+r,n=document.getElementsByTagName("link"),s=0;s<n.length;s++){var l=n[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||i,n=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=r,delete o[t],p.parentNode.removeChild(p),a(n)},p.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(p)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,a){r=i[t]=[e,a]}));e.push(r[2]=n);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=i[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,a[1](d)}i[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/pdl.provider-directory.client/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("71ec"),o=a.n(r);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("551c"),a("8a81"),a("d1e7"),a("15f5");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"white",flat:"",height:"163",width:"100%"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"d-flex align-center",staticStyle:{"padding-left":"115px"}},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"CHSLI Logo",contain:"",src:"https://chspp-prod.chsli.org/sites/default/files/logo-chs-physycian-partners382x97_1.png",transition:"scale-transition",width:"382"}})],1)])],1),a("v-row",{staticStyle:{"background-color":"#5FA6D0"}},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"d-flex align-center link",staticStyle:{color:"black","font-weight":"bold","padding-left":"115px"},on:{click:t.goHome}},[t._v("HOME")])])],1)],1)],1),a("v-content",[a("keep-alive",[a("router-view")],1)],1)],1)},i=[],n={name:"App",data:function(){return{}},beforeMount:function(){this.$store.dispatch("FETCH_AUTOCOMPLETE_LIST"),this.$store.dispatch("FETCH_PROVIDER_LIST")},computed:{runDateTime:function(){return new Date(this.$store.getters.DATA_DATE).toLocaleString()}},methods:{goHome:function(){window.open("https://chspp-prod.chsli.org","_self")}}},s=n,c=(a("034f"),a("2877")),l=a("6544"),u=a.n(l),d=a("7496"),p=a("40dc"),v=a("62ad"),h=a("a523"),m=a("a75b"),f=a("adda"),g=a("0fd9"),b=Object(c["a"])(s,o,i,!1,null,null,null),_=b.exports;u()(b,{VApp:d["a"],VAppBar:p["a"],VCol:v["a"],VContainer:h["a"],VContent:m["a"],VImg:f["a"],VRow:g["a"]});var y=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h3",{staticStyle:{color:"#312E7D","margin-bottom":"10px","margin-top":"10px"}},[t._v("Provider Directory (IPA Physicians Only)")]),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-card",[a("v-tabs",{attrs:{centered:"","fixed-tabs":"","icons-and-text":"","background-color":"#4d9bcb",color:"#312E7D","slider-color":"#312E7D",dark:""},on:{change:t.clearFields},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab",{attrs:{href:"#tab-1"}},[t._v("\n            Specialty\n            "),a("i",{staticClass:"fas fa-stethoscope"})]),a("v-tab",{attrs:{href:"#tab-3"}},[t._v("\n            Name\n            "),a("i",{staticClass:"fas fa-user-md"})]),a("v-tab",{attrs:{href:"#tab-4"}},[t._v("\n            Practice\n            "),a("i",{staticClass:"fas fa-clinic-medical"})])],1),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",{attrs:{value:"tab-1"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-autocomplete",{ref:"objSpecialty",attrs:{items:t.autocompleteListSpecialty,"item-text":"value","item-value":"npi",placeholder:"Speciality","append-icon":"magnify","prepend-inner-icon":"search","auto-select-first":"",outlined:"","return-object":"","hide-no-data":"",filter:t.filterSearchArray,dense:"","hide-details":"",error:t.error},on:{change:t.nameSearch,keydown:t.captureEnterKey},model:{value:t.searchItem,callback:function(e){t.searchItem=e},expression:"searchItem"}})],1)],1)],1),a("v-tab-item",{attrs:{value:"tab-3"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-autocomplete",{ref:"objName",attrs:{items:t.autocompleteListName,"item-text":"value","item-value":"npi",placeholder:"Name","append-icon":"magnify","prepend-inner-icon":"search","auto-select-first":"",outlined:"","return-object":"","hide-no-data":"",filter:t.filterSearchArray,error:t.error,dense:"","hide-details":""},on:{change:t.nameSearch,keydown:t.captureEnterKey},model:{value:t.searchItem,callback:function(e){t.searchItem=e},expression:"searchItem"}})],1)],1)],1),a("v-tab-item",{attrs:{value:"tab-4"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-autocomplete",{ref:"objPractice",attrs:{items:t.autocompleteListPractice,"item-text":"value","item-value":"npi",placeholder:"Practice","append-icon":"magnify","prepend-inner-icon":"search","auto-select-first":"",outlined:"","return-object":"","hide-no-data":"",filter:t.filterSearchArray,error:t.error,dense:"","hide-details":""},on:{change:t.nameSearch,keydown:t.captureEnterKey},model:{value:t.searchItem,callback:function(e){t.searchItem=e},expression:"searchItem"}})],1)],1)],1)],1),a("v-row",[a("div",{staticStyle:{"margin-left":"30px","font-size":"12px"}},[t._v("Optional")])]),a("v-row",{attrs:{cols:"12"}},[a("v-divider",{staticStyle:{"margin-left":"30px","margin-right":"30px","margin-bottom":"5px"}})],1),a("v-row",[a("v-col",{staticStyle:{"margin-left":"16px","padding-top":"0px"},attrs:{cols:"2"}},[a("v-combobox",{attrs:{"hide-details":"",dense:"",items_notused:"locationList",placeholder:"Zip Code",outlined:"",clearable:"","append-icon":""},scopedSlots:t._u([{key:"item",fn:function(e){return[a("v-icon",[t._v("near_me")]),t._v("\n                "+t._s(e.item)+"\n              ")]}}]),model:{value:t.searchLocation,callback:function(e){t.searchLocation=e},expression:"searchLocation"}})],1),a("v-col",{staticStyle:{"padding-top":"0px"},attrs:{cols:"2"}},[a("v-combobox",{attrs:{dense:"","hide-details":"","item-value":t.locationRangeList.value,"item-text":t.locationRangeList.text,items:t.locationRangeList,placeholder:"Zip Code Within",outlined:""},model:{value:t.searchLocationRange,callback:function(e){t.searchLocationRange=e},expression:"searchLocationRange"}})],1),a("v-col",{staticStyle:{"padding-top":"0px"},attrs:{cols:"2",offset:"1"}},[a("v-combobox",{attrs:{"hide-details":"",dense:"","item-text":t.genderList.text,items:t.genderList,placeholder:"Gender",outlined:""},model:{value:t.searchGender,callback:function(e){t.searchGender=e},expression:"searchGender"}})],1),a("v-col",{staticStyle:{"padding-top":"0px"},attrs:{cols:"3"}},[a("v-checkbox",{attrs:{label:"Stat Visits Accepted",dense:"","hide-details":""},model:{value:t.searchStatVisits,callback:function(e){t.searchStatVisits=e},expression:"searchStatVisits"}})],1)],1),a("v-btn",{ref:"btnSearch",staticClass:"chs-button chs-color",on:{click:t.search}},[t._v("Search")])],1)],1)],1),t.displayResults?a("div",[a("v-layout",{attrs:{row:"",wrap:""}},[a("div",{staticStyle:{color:"rgba(36,32,44,.5)","margin-bottom":"15px"}},[t._v("Search Results: "+t._s(t.selectedItems.length)+" record(s) found.")])]),t._l(t.selectedItems,(function(e){return a("v-layout",{key:e.npi,staticClass:"mb-5 pa-3 provider-row",attrs:{row:"",wrap:""}},[a("v-col",{staticClass:"content-container",attrs:{cols:"12",sm:"12",md:"6"}},[a("div",{staticClass:"mb-3"},[a("v-container",{staticStyle:{"padding-top":"1px"},attrs:{full:""}},[a("v-row",[a("v-col",{staticStyle:{padding:"0px"},attrs:{cols:"9"}},[a("h3",{staticClass:"link",on:{click:function(a){return t.showProvider(e.NPI)}}},[t._v("\n                  "+t._s(e.Prov_Name+", "+e.Degree)+"\n                ")])]),a("v-col",{staticStyle:{padding:"0px"},attrs:{cols:"3"}},[a("v-btn",{staticClass:"link",staticStyle:{float:"right",width:"100%"},attrs:{small:"",color:"#49157c",dark:""},on:{click:function(a){return t.showProvider(e.NPI)}}},[t._v("VIEW FULL BIO")])],1)],1),a("v-row",[a("v-col",{staticStyle:{padding:"0px"},attrs:{cols:"9"}},t._l(e.Speciality.split(";"),(function(e){return a("div",{key:e},[a("div",[t._v(t._s(e))])])})),0),a("v-col",{staticStyle:{padding:"0px"},attrs:{cols:"3"}},[a("div",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.Tier))])])],1)],1)],1),a("h4",[t._v("Hospital Affiliations")]),null==e.Hospital_Affiliations?a("div",{staticStyle:{"margin-bottom":"50px"}}):t._e(),t._l(e.Hospital_Affiliations,(function(r,o){return a("div",{key:o},[o===Object.keys(e.Hospital_Affiliations).length-1?a("div",{staticStyle:{"margin-bottom":"50px"}},[t._v(t._s(r.Hospital_Name))]):a("div",[t._v(t._s(r.Hospital_Name))])])})),"captive"===e.Provider_Type.toLowerCase()?a("div",{staticClass:"content-bottom",attrs:{"align-center":""}},[a("v-img",{staticClass:"shrink mr-2",staticStyle:{float:"left"},attrs:{alt:"CHSLI Logo",contain:"",src:"https://www.chsli.org/themes/custom/chsli/logo.png",transition:"scale-transition",width:"100"}}),a("span",{staticClass:"employed"},[t._v("CHS Physician Partners Medical Group")])],1):t._e()],2),a("v-col",{attrs:{cols:"12",sm:"6",md:"2"}},[a("v-img",{staticClass:"results",attrs:{contain:"",height:"auto",width:"150",src:t.imagePath+"/"+e.NPI+".jpg"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},t._l(e.Location,(function(r,o){return a("div",{key:o},[0===o||t.showLocation(e.NPI)?a("v-card",{key:t.refreshKey,staticStyle:{"margin-bottom":"5px"}},[a("v-card-text",[a("div",[t._v(t._s(r.Practice))]),a("div",[t._v(t._s(r.Address))]),a("div",[t._v(t._s(r.City+", "+r.State+" "+r.Zip))]),r.Phone?a("div",[a("span",{staticClass:"material-icons",staticStyle:{"vertical-align":"middle"}},[t._v("call")]),t._v("\n                "+t._s(r.Phone)+"\n              ")]):t._e(),r.Fax?a("div",[a("span",{staticClass:"material-icons",staticStyle:{"vertical-align":"middle"}},[t._v("print")]),t._v("\n                "+t._s(r.Fax)+"\n              ")]):t._e(),r.range?a("div",{staticClass:"link",staticStyle:{"margin-top":"5px"},on:{click:function(e){return t.showMap(r.Address+" "+r.Zip)}}},[a("u",[a("span",{staticClass:"material-icons",staticStyle:{"vertical-align":"middle"}},[t._v("location_on")]),t._v("\n                  "+t._s(r.range)+" miles away\n                ")])]):t._e()])],1):t._e(),e.Location.length>1&&o===e.Location.length-1?a("div",[e.NPI!=t.locationNpiToShow?a("v-btn",{attrs:{text:"",small:""},on:{click:function(a){return t.toggleLocation(e.NPI,e.Location.length)}}},[t._v("\n              Show All Locations\n              "),a("span",{staticClass:"material-icons"},[t._v("keyboard_arrow_down")])]):t._e(),e.NPI===t.locationNpiToShow?a("v-btn",{attrs:{text:"",small:""},on:{click:function(e){return t.toggleLocation("")}}},[t._v("\n              Hide All Locations\n              "),a("span",{staticClass:"material-icons"},[t._v("keyboard_arrow_up")])]):t._e()],1):t._e()],1)})),0)],1)})),a("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticStyle:{right:"80px"},attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toPrint}},[a("v-icon",[t._v("print")])],1),a("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toTop}},[a("v-icon",[t._v("keyboard_arrow_up")])],1)],2):t._e(),a("div",{staticClass:"do-not-display",attrs:{id:"printContainer"}},[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("h1",[t._v("Catholic Health Referral Listing")])]),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-col",[a("div",[t._v(t._s(t.searchItem.value))])]),a("v-col",[t.searchLocation?a("div",[t._v("Location: "+t._s(t.searchLocation)+" within "+t._s(t.searchLocationRange.text))]):t._e()]),a("v-col")],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("div",{staticStyle:{color:"rgba(36,32,44,.5)","margin-bottom":"15px"}},[t._v("Search Results: "+t._s(t.selectedItems.length)+" record(s) found.")])]),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-col",[a("v-divider")],1)],1),t._l(t.selectedItems,(function(e){return a("v-layout",{key:e.npi,staticClass:"mb-5 pa-3 provider-row",attrs:{row:"",wrap:""}},[a("v-col",{staticClass:"content-container",attrs:{cols:"12",sm:"12",md:"6"}},[a("h3",{staticClass:"link",on:{click:function(a){return t.showProvider(e.NPI)}}},[t._v("\n            "+t._s(e.Prov_Name+", "+e.Degree)+"\n          ")]),a("div",{staticClass:"mb-3"},t._l(e.Speciality.split(";"),(function(e){return a("div",{key:e},[a("div",[t._v(t._s(e))])])})),0),a("h4",[t._v("Hospital Affiliations")]),null==e.Hospital_Affiliations?a("div",{staticStyle:{"margin-bottom":"50px"}}):t._e(),t._l(e.Hospital_Affiliations,(function(r,o){return a("div",{key:o},[o===Object.keys(e.Hospital_Affiliations).length-1?a("div",{staticStyle:{"margin-bottom":"50px"}},[t._v(t._s(r.Hospital_Name))]):a("div",[t._v(t._s(r.Hospital_Name))])])})),"captive"===e.Provider_Type.toLowerCase()?a("div",{staticClass:"content-bottom",attrs:{"align-center":""}},[a("span",{staticClass:"employed"},[t._v("CHS Physician Partners Medical Group")])]):t._e()],2),a("v-col",{attrs:{cols:"12",sm:"6",md:"2"}},[a("div",[t._v(t._s(e.Tier))])]),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},t._l(e.Location,(function(e,r){return a("div",{key:r},[a("v-card",{staticStyle:{"margin-bottom":"5px"}},[a("v-card-text",[0!=r?a("div",[a("v-divider")],1):t._e(),a("div",[t._v(t._s(e.Practice))]),a("div",[t._v(t._s(e.Address))]),a("div",[t._v(t._s(e.City+", "+e.State+" "+e.Zip))]),e.Phone?a("div",[t._v("Phone: "+t._s(e.Phone))]):t._e(),e.Fax?a("div",[t._v("Fax: "+t._s(e.Fax))]):t._e(),e.range?a("div",{staticClass:"link",staticStyle:{"margin-top":"5px"},on:{click:function(a){return t.showMap(e.Address+" "+e.Zip)}}},[a("u",[t._v(" "+t._s(e.range)+" miles away ")])]):t._e()])],1)],1)})),0),a("v-col",{attrs:{cols:"12"}},[a("v-divider")],1)],1)}))],2)],1),a("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticStyle:{right:"80px"},attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toPrint}},[a("v-icon",[t._v("print")])],1),a("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toTop}},[a("v-icon",[t._v("keyboard_arrow_up")])],1),a("GmapMap",{ref:"gmap",staticStyle:{width:"0px",height:"0px"},attrs:{center:{lat:10,lng:10},zoom:15,"map-type-id":"roadmap"}})],1)},x=[],S=(a("55dd"),a("2909")),L=(a("96cf"),a("1da1")),P=(a("5df3"),a("1c4c"),a("6762"),a("2fdb"),a("755e")),I=a("7dc5"),k=(a("bc3a"),I["production"]),C={name:"CHSoogle",data:function(){return{refreshKey:0,fab:!1,tab:null,selectedItems:[{lastname:null,firstname:null,title:null,Speciality:"",Provider_Type:""}],searchItem:{NPI:null,value:null},searchLocation:null,searchLocationRange:null,searchGender:null,searchStatVisits:null,displayResults:!1,hidden:!0,locationNpiToShow:"",locationList:["Current Location"],locationRangeList:[{value:5,text:"5 Miles"},{value:15,text:"15 Miles"},{value:25,text:"25 Miles"},{value:50,text:"50 Miles"}],genderList:[{abbr:"F",text:"Female"},{abbr:"M",text:"Male"},{abbr:"No Preference",text:"No Preference"}],imagePath:k.imageUrl,error:!1,errorMessage:"",errowShow:!1}},computed:{google:P["gmapApi"],providerData:function(){return this.$store.getters.PROVIDER_LIST},autocompleteList:function(){return this.$store.getters.AUTOCOMPLETE_LIST},autocompleteListSpecialty:function(){return this.autocompleteList.filter((function(t){return t.specialty}))},autocompleteListName:function(){return this.autocompleteList.filter((function(t){return t.NPI}))},autocompleteListPractice:function(){return this.autocompleteList.filter((function(t){return t.practice}))}},watch:{},methods:{setFocus:function(){var t=document.getElementsByClassName("v-tab--active");t[0].innerText.indexOf("SPECIALTY")>=0?this.$refs.objSpecialty.focus():t[0].innerText.indexOf("NAME")>=0?this.$refs.objName.focus():t[0].innerText.indexOf("PRACTICE")>=0&&this.$refs.objPractice.focus(),this.error=!0},clearFields:function(){this.error=!1,this.searchLocation="",this.searchLocationRange="",this.searchGender="",this.searchStatVisits="",this.searchItem={NPI:null,value:null}},captureEnterKey:function(t,e){"Enter"===t.key&&this.$refs.btnSearch.$el.focus(),this.error=!1},showProvider:function(t){Y.push({name:"provider",params:{npi:t}})},filterSearchArray:function(t,e,a){return!(!t.header&&!t.divider)||(!(!t.NPI||!t.value.toLowerCase().includes(e.toLowerCase()))||(!(!t.specialty&&!t.practice||!t.value.toLowerCase().includes(e.toLowerCase()))||void 0))},filterNames:function(t){var e=this;return t.NPI?this.providerData.filter((function(e){return e.NPI==t.NPI})):t.specialty?this.providerData.filter((function(e){return e.Speciality.includes(t.value)})):t.practice?this.providerData.filter((function(t){return t.Location.some((function(t){return t.Practice===e.searchItem.value}))})):Array.from(this.providerData)},nameSearch:function(t){t.NPI&&(this.selectedItems=this.providerData.filter((function(e){return e.NPI==t.NPI})),this.displayResults=!0)},search:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(){var e,a,r,o,i,n,s,c=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("searching..."),e=document.getElementsByClassName("v-tab--active"),null!==this.searchItem.value&&""!==this.searchItem.value||-1!=e[0].innerText.indexOf("LOCATION")){t.next=6;break}return console.log("not searching..."),this.setFocus(),t.abrupt("return");case 6:if(this.displayResults=!1,this.selectedItems=Object(S["a"])(this.providerData),this.searchItem&&this.searchItem.value&&(this.selectedItems=this.filterNames(this.searchItem)),this.searchGender&&"No Preference"!=this.searchGender.text&&(this.selectedItems=this.selectedItems.filter((function(t){if(t.Gender)return t.Gender.toLowerCase()===c.searchGender.abbr.toLowerCase()}))),this.searchStatVisits&&(this.selectedItems=this.selectedItems.filter((function(t){return"Yes"===t.Stat_Visits_Accepted}))),!this.searchLocation){t.next=26;break}if(a={},"Current Location"!==this.searchLocation){t.next=21;break}return t.next=16,T();case 16:r=t.sent,a.lat=r.coords.latitude,a.lng=r.coords.longitude,t.next=24;break;case 21:return t.next=23,this.geocodeZip(this.searchLocation);case 23:a=t.sent;case 24:for(o=0;o<this.selectedItems.length;o++)if(this.selectedItems[o].Location){for(i=0;i<this.selectedItems[o].Location.length;i++)n=this.selectedItems[o].Location[i],n.Latitude&&n.Longitude&&(s=A(a.lat,a.lng,n.Latitude,n.Longitude,"M"),this.selectedItems[o].Location[i].range=(Math.round(100*s)/100).toFixed(1));this.selectedItems[o].Location.sort((function(t,e){return t.range<e.range?-1:1}))}this.selectedItems=this.selectedItems.filter((function(t){for(var e=0;e<t.Location.length;e++)if(t.Location[e].range<c.searchLocationRange.value)return!0;return!1}));case 26:this.selectedItems.sort((function(t,e){return t.Tier>e.Tier?1:t.Tier<e.Tier?-1:t.Prov_Name>e.Prov_Name?1:t.Prov_Name<e.Prov_Name?-1:void 0})),this.displayResults=!0;case 28:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),geocodeZip:function(t){return new Promise((function(e,a){var r=new google.maps.Geocoder;r.geocode({address:t},(function(t,r){"OK"==r?e({lat:t[0].geometry.location.lat(),lng:t[0].geometry.location.lng()}):a({lat:0,lng:0})}))}))},showLocation:function(t){return this.locationNpiToShow===t},toggleLocation:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e<=3?(this.locationNpiToShow=t,this.refreshKey++):this.showProvider(t)},onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)},showMap:function(t){window.open("http://maps.google.com/maps?q=".concat(t),"_blank")},toPrint:function(){this.$htmlToPaper("printContainer")}}},T=function(t){return new Promise((function(e,a){navigator.geolocation.getCurrentPosition(e,a,t)}))};function A(t,e,a,r,o){if(t==a&&e==r)return 0;var i=Math.PI*t/180,n=Math.PI*a/180,s=e-r,c=Math.PI*s/180,l=Math.sin(i)*Math.sin(n)+Math.cos(i)*Math.cos(n)*Math.cos(c);return l>1&&(l=1),l=Math.acos(l),l=180*l/Math.PI,l=60*l*1.1515,"K"==o&&(l*=1.609344),"N"==o&&(l*=.8684),l}var N=C,E=(a("cccb"),a("c6a6")),O=a("8336"),V=a("b0af"),D=a("99d9"),M=a("ac7c"),R=a("2b5d"),j=a("ce7e"),F=a("0e8f"),H=a("132d"),G=a("a722"),U=a("71a3"),$=a("c671"),B=a("fe57"),K=a("aac8"),Z=a("269a"),q=a.n(Z),z=a("f977"),J=Object(c["a"])(N,w,x,!1,null,null,null),Q=J.exports;u()(J,{VAutocomplete:E["a"],VBtn:O["a"],VCard:V["a"],VCardText:D["a"],VCheckbox:M["a"],VCol:v["a"],VCombobox:R["a"],VContainer:h["a"],VDivider:j["a"],VFlex:F["a"],VIcon:H["a"],VImg:f["a"],VLayout:G["a"],VRow:g["a"],VTab:U["a"],VTabItem:$["a"],VTabs:B["a"],VTabsItems:K["a"]}),q()(J,{Scroll:z["b"]}),r["a"].use(y["a"]);var Y=new y["a"]({mode:"history",base:"/pdl.provider-directory.client/",routes:[{path:"/",name:"home",component:Q},{path:"/provider",name:"provider",component:function(){return a.e("about").then(a.bind(null,"b5d1"))},props:{default:!0}}]}),W=a("2f62"),X=a("bc3a"),tt=I["production"],et={providers:[],dataDate:null,autocomplete:[]},at={PROVIDER_LIST:function(t){return t.providers},DATA_DATE:function(t){return t.dataDate},AUTOCOMPLETE_LIST:function(t){return t.autocomplete}},rt={SET_PROVIDER_LIST:function(t,e){t.providers=e},SET_DATA_DATE:function(t,e){t.dataDate=e},SET_AUTOCOMPLETE_LIST:function(t,e){t.autocomplete=e}},ot={FETCH_PROVIDER_LIST:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,X.get("".concat(tt.jsonUrl).concat(tt.dataFile));case 2:a=t.sent,e.commit("SET_PROVIDER_LIST",a.data[0].providerData),e.commit("SET_DATA_DATE",a.data[0].runDateTime);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),FETCH_AUTOCOMPLETE_LIST:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,X.get("".concat(tt.jsonUrl).concat(tt.autocompleteFile));case 2:a=t.sent,e.commit("SET_AUTOCOMPLETE_LIST",a.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},it={state:et,getters:at,mutations:rt,actions:ot};r["a"].use(W["a"]);var nt=new W["a"].Store({modules:{providers:it}}),st=a("f309");r["a"].use(st["a"]);var ct=new st["a"]({}),lt=(a("db4d"),a("6b42"),a("7898")),ut=a.n(lt),dt={name:"_blank",specs:["fullscreen=yes","titlebar=yes","scrollbars=yes"],styles:["https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css","https://unpkg.com/kidlat-css/css/kidlat.css"]};r["a"].config.productionTip=!1,r["a"].use(P,{load:{key:"AIzaSyAeEZOnkIiBUzEJKwiuQwUks8Nbe5PUmlo",libraries:"places"}}),r["a"].use(ut.a,dt),new r["a"]({router:Y,store:nt,vuetify:ct,VueGoogleMaps:P,render:function(t){return t(_)},icons:{iconfont:"fa"}}).$mount("#app")},"71ec":function(t,e,a){},"7dc5":function(t){t.exports=JSON.parse('{"production":{"jsonUrl":"https://intranet.chsli.org/provider-files.php?file=","dataFile":"PDLProviderListing","autocompleteFile":"PDLAutocompleteListing","imageUrl":"https://www.chsli.org/sites/default/files/md-photos","gMapsKey":"AIzaSyBoBoVxHwq1bcVmqS5QGFyte0uFF051_a4"},"development":{"jsonUrl":"https://intranet-staging.chsli.org/provider-files.php?file=","dataFile":"PDLProviderListing","autocompleteFile":"PDLAutocompleteListing","imageUrl":"https://www.chsli.org/sites/default/files/md-photos","gMapsKey":"AIzaSyBoBoVxHwq1bcVmqS5QGFyte0uFF051_a4"}}')},cccb:function(t,e,a){"use strict";var r=a("ff99"),o=a.n(r);o.a},ff99:function(t,e,a){}});
//# sourceMappingURL=app.a7e6cab7.js.map