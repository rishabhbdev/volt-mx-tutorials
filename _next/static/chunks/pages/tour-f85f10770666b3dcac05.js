_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[44],{"6EMX":function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var n=o("o0o1"),a=o.n(n),i=o("HaE+"),s=o("vDqi"),c=o.n(s),l=o("8SHQ"),r=function(){var e=Object(i.a)(a.a.mark((function e(t){var o,n,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.map((function(e){return c.a.get("".concat(l.b,"/contents/").concat(e,"/tours.json"))})),e.next=3,c.a.all(o);case 3:return n=e.sent,i=n.map((function(e){return e.data})),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},"8SHQ":function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return a}));var n="production"!==(e&&e.env,"production"),a=n?"http://localhost:3200":"https://opensource.hcltechsw.com/volt-mx-tutorials"}).call(this,o("8oxB"))},XKlS:function(e,t,o){"use strict";var n=o("nKUr"),a=(o("q1tI"),o("4IMT")),i=o.n(a),s=o("zk85"),c=o.n(s),l=o("mOvS"),r=o.n(l)()().publicRuntimeConfig,u=function(e){if(e)return Object(n.jsx)("img",{src:"".concat(r.asset,"/static/dist/images/icons/filterCross.svg"),alt:"icon",className:c.a.filterCloseIcon})},d=function(e){return"download"===e?Object(n.jsx)("img",{src:"".concat(r.asset,"/static/dist/images/download.svg"),alt:"Download icon",className:c.a.downloadIcon}):null},m=function(e){return e?Object(n.jsx)("img",{src:"".concat(r.asset,"/static/dist/images/icons/codeIcon.png"),alt:"Code icon",className:c.a.codeIcon}):null},p=function(e){var t=e.title,o=e.type,a=e.color,s=e.active,l=e.selected,r=e.children,p=e.className,v=e.onClick,f=e.featured,b=e.href,g=e.target,j=e.disabled,h=e.isCode;return Object(n.jsxs)(i.a,{title:t,className:"\n      ".concat(c.a.konyButton,"\n      ").concat(c.a[o]?c.a[o]:"","\n      ").concat(c.a[a]?c.a[a]:"","\n      ").concat(s?c.a.active:"","\n      ").concat(l?c.a.selected:"","\n      ").concat(f?c.a.featured:"","\n      ").concat(p,"\n    "),onClick:v,href:b||null,target:g,disabled:j,children:[d(o),m(h),r||t,u(l)]})};p.defaultProps={title:"Button",type:"normal",color:"",active:!1,featured:!1,selected:!1,children:"",className:"",href:"",target:null,onClick:function(){},disabled:!1,isCode:!1},t.a=p},kACj:function(e,t,o){"use strict";o.r(t);var n=o("nKUr"),a=o("o0o1"),i=o.n(a),s=o("HaE+"),c=o("q1tI"),l=(o("K4dc"),o("Djov")),r=o("9xET"),u=o.n(r),d=o("ZPTe"),m=o.n(d),p=o("DG/x"),v=o("XKlS"),f=o("PGnZ"),b=o.n(f),g=o("mOvS"),j=o.n(g),h=o("6EMX"),S=o("8SHQ"),x=j()().publicRuntimeConfig.hikesData;t.default=function(e){var t,o=e.url,a=Object(c.useState)(null),r=a[0],d=a[1],f=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,a,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.a?o.asPath.substring(1):o.asPath.replace("/volt-mx-tutorials","").substring(1),e.next=3,Object(h.a)(x);case 3:n=e.sent,a=n.filter((function(e){return e.categoryTours.some((function(e){return e.alias==t}))})),s=a.map((function(e){return Object.assign({},e,{categoryTours:e.categoryTours})})),c=s[0].categoryTours.filter((function(e){return e.alias==t})),d(c[0]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){return f(),function(){}}),[]);var g=function(e){return e.preventDefault(),e.message=function(){var e=new Date;return{namespace:"hike",msg_id:"id_".concat(e.getTime()),msg_type:"POST",request:{context:"tour",category:null===r||void 0===r?void 0:r.category,title:null===r||void 0===r?void 0:r.title,checksum:null===r||void 0===r?void 0:r.checksum,download_url:"".concat(null===r||void 0===r?void 0:r.fileURL),version:null===r||void 0===r?void 0:r.hikeVersion,filename:null===r||void 0===r?void 0:r.fileName,kuid:null===r||void 0===r?void 0:r.kuid,id:"".concat(null===r||void 0===r?void 0:r.nid).concat(null===r||void 0===r?void 0:r.fid).concat(e.getTime())}}}(),"undefined"!==typeof e.message&&getVizSource().postMessage(e.message,"*"),!1};return Object(n.jsxs)("div",{className:b.a.hikeBody,children:[Object(n.jsx)(l.a,{search:null}),Object(n.jsxs)("div",{className:b.a.tourContainer,children:[Object(n.jsx)(p.a,{title:null===r||void 0===r?void 0:r.title,search:null}),Object(n.jsxs)("div",{className:b.a.tourInfo,children:[Object(n.jsx)("div",{className:b.a.tourThumb,children:Object(n.jsx)("img",{src:null===r||void 0===r?void 0:r.image,alt:"Hike Thumbnail"})}),Object(n.jsxs)("div",{className:b.a.tourDesc,children:[Object(n.jsx)("h2",{className:b.a.tourTitle,children:null===r||void 0===r?void 0:r.title}),Object(n.jsxs)("h3",{className:b.a.tourVersion,children:["Hike Version: ",null===r||void 0===r?void 0:r.hikeVersion]}),Object(n.jsx)("div",{className:b.a.tourBody,dangerouslySetInnerHTML:{__html:null===r||void 0===r?void 0:r.description}}),Object(n.jsxs)(u.a,{className:b.a.metaData,children:[Object(n.jsxs)(m.a,{span:6,sm:24,xs:24,md:6,lg:6,className:b.a.innerTabWrapper,children:[Object(n.jsx)("h3",{className:b.a.tourHeader,children:"Platform Version"}),Object(n.jsx)("div",{className:b.a.tourContent,children:null===r||void 0===r?void 0:r.platformVersion})]}),Object(n.jsxs)(m.a,{span:6,sm:24,xs:24,md:6,lg:6,className:b.a.innerTabWrapper,children:[Object(n.jsx)("h3",{className:b.a.tourHeader,children:"Categories"}),Object(n.jsx)("ul",{className:b.a.tourContent,children:null===r||void 0===r||null===(t=r.category)||void 0===t?void 0:t.map((function(e){return Object(n.jsx)("li",{children:e})}))})]})]}),Object(n.jsx)("h3",{className:b.a.tourTime,children:"".concat(null===r||void 0===r?void 0:r.cards," Steps - ").concat(null===r||void 0===r?void 0:r.time)}),Object(n.jsx)("div",{className:b.a.tourDetails,dangerouslySetInnerHTML:{__html:null===r||void 0===r?void 0:r.details}})]})]}),Object(n.jsx)("div",{className:b.a.startBtn,children:Object(n.jsx)(v.a,{title:"START",type:"blue",onClick:function(e){return g(e)}})})]})]})}},zJMs:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tour",function(){return o("kACj")}])},zk85:function(e,t,o){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",konyButton:"_1zJKe",normal:"_3Ekqs",active:"_2LeOg",filter:"Orjkm",selected:"_2bLYr",downloadIcon:"_3AqOe",codeIcon:"_2n6ua",action:"I6ToG",download:"_2oNV4",blue:"nUQSe",red:"_1xDUH",lightBlue:"_1g8e2",skyBlue:"UHdfC",lightGreen:"_2T8V3",appPreview:"_2Hptp",featured:"_16x0J",filterCloseIcon:"shvlF"}}},[["zJMs",1,2,8,5,0,3,4,6,7,27,10]]]);