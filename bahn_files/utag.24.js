//tealium universal tag - utag.24 ut4.0.202412100645, Copyright 2024 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
u.ev={view:1};u.initialized=false;u.map={"_sm_24_1":"base_url","exCampaign":"campaign","exSendAlways":"sendAlways","dom.referrer":"referrer","dom.domain":"host","dom.pathname":"site","_sm_24_7":"search","page_section":"category_name","page_name":"page_name","exSitegroup":"sitegroup","exSubid":"subid","exOrderId":"orderid","exProductNames":"product_name","exProductPrices":"product_price","exProductQuantities":"qty","exLevel":"level","exTotalPrice":"totalprice","selectedConnectionHinfahrt_start_name":"startbhf","selectedConnectionHinfahrt_destination_name":"zielbhf","user_customerClass":"kundenstatus","user_customerType":"kundentyp","exCrossUser":"crossuser"};u.extend=[function(a,b){try{b['_sm_24_1']="https://track.adform.net/Serving/Cookie/?adfaction=getjs;adfcookname=uid";}catch(e){utag.DB(e);}
try{b['_sm_24_7']=window.location.search;}catch(e){utag.DB(e);}},function(a,b){try{if(1){b.exSendAlways=['campaign','sitegroup','referrer','host','site','search','category_name','page_name','subid','product_name','level','kundentyp','crossuser'];window.utag_cfg_ovrd=window.utag_cfg_ovrd||{};b.exCampaign='61ebd8bbf58b97c6bd78caa06b839874';if(b.site_environment&&b.site_environment==='prd--default'){b.exCampaign='4bb3a5de3602f335b9ba113928205e62';}
b.exSitegroup=b.page_section||'Content';var has_subid=false;if(b.page_name){if(b.page_name==='Buchungsbestaetigung'){b.exSitegroup=b.page_name;}else if(b.page_name.indexOf('reisen_view_verbindung_')>-1){b.exSitegroup='SEO Verbindungen';has_subid=true;}}
if(has_subid===true){var page_parts=b.page_name.split('_');var page_size=page_parts.length;b.exSubid=page_parts[page_size-2]+'_'+page_parts[page_size-1];}
b.exOrderId=(b._corder)?b._corder:undefined;b.exTotalPrice=(b._ctotal)?b._ctotal:undefined;if(window.teal.checkArray(b.selectedOffers_products_info_name)){b.exProductNames=(window.teal.checkArray(b._cprodname))?b._cprodname.join(','):undefined;b.exProductPrices=(window.teal.checkArray(b._cprice))?b._cprice.join(','):undefined;b.exProductQuantities=(window.teal.checkArray(b._cquan))?b._cquan.join(','):undefined;}
if(b.user_loginStatus&&b.user_customerNumberHash&&b.user_loginStatus.toLowerCase().indexOf('login')>-1){b.exCrossUser=b.user_customerNumberHash;}
if(b.exProductNames){b.exLevel='Sonstige'
var prodNames=b.exProductNames.toLowerCase();var levelMapping={'jugend bahncard 25':'Jugend BahnCard','sparpreis gruppe':'Sparpreis Gruppe','sparpreis europa gruppe':'Sparpreis Europa Gruppe','sparpreis mehrpersonenrabatt':'Sparpreis Mehrpersonenrabatt','sparpreis europa':'Sparpreis Europa','sparpreis young':'Sparpreis Young','sparpreis senior':'Sparpreis Senioren','sparpreis':'Sparpreis','flexpreis':'Flexpreis','normalpreis':'Flexpreis','my bahncard 25':'My BahnCard','bahncard 25':'BahnCard 25','bahncard business 25':'BahnCard 25','my bahncard 50':'My BahnCard','bahncard 50':'BahnCard 50','bahncard business 50':'BahnCard 50','bahncard 100':'BahnCard 100','quer-durchs-land-ticket':'Laenderticket','baden-württemberg':'Laenderticket','bayern':'Laenderticket','brandenburg':'Laenderticket','hessen':'Laenderticket','mecklenburg-vorpommern':'Laenderticket','niedersachsen':'Laenderticket','schönertagticket':'Laenderticket','rheinland':'Laenderticket','saarland':'Laenderticket','sachsen':'Laenderticket','schleswig-holstein':'Laenderticket','thüringen':'Laenderticket','bwtag':'Laenderticket','metropol':'Laenderticket','regio x':'Laenderticket','egronet':'Laenderticket','hopper':'Laenderticket','gäubodenbahn':'Laenderticket','garmischer':'Laenderticket','niederbayern':'Laenderticket','legoland':'Laenderticket','schwaben':'Laenderticket','donau':'Laenderticket','main-spessart':'Laenderticket','regio-ticket':'Laenderticket','regioticket':'Laenderticket','studi-spar':'Laenderticket','traun-alz':'Laenderticket','waldbahn':'Laenderticket','stadt-land-meer':'Laenderticket','einfachweiter':'Laenderticket','nrw':'Laenderticket','pfalz':'Laenderticket','luxemburg':'Laenderticket','regio120':'Laenderticket','franken':'Laenderticket','werdenfels':'Laenderticket','deutschlandticket':'Deutschlandticket','deutschland-ticket':'Deutschlandticket','reservierung':'Reservierung'};for(var key in levelMapping){if(levelMapping.hasOwnProperty(key)&&prodNames.indexOf(key)>-1){b.exLevel=levelMapping[key];break;}}
if((b.exLevel==='Sonstige'||b.exLevel==='Deutschlandticket'||b.exLevel==='Reservierung'||b.exLevel==='Laenderticket')&&b.products_verbund_quantity&&b.products_verbund_quantity>0){b.exLevel='Verbundticket';}}}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"base_url":"https://track.adform.net/Serving/Cookie/?adfaction=getjs;adfcookname=uid","sendAlways":[]
};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
window.exactag=window.exactag||{};u.customLoader=function(src,id){return new Promise(function(resolve,reject){let s;s=document.createElement("script");s.src=src;s.language="javascript";s.type="text/javascript";s.async=1;s.charset="utf-8";s.id=id;s.onload=resolve;s.onerror=reject;utag.DB("Attach to script"+": "+src);var s2=document.getElementsByTagName('script')[0];s2.parentNode.insertBefore(s,s2);});};u.loadExLibandTrack=function(){if(!u.initialized){"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var i,n,r,o,a,s=gap,c=e[t];switch(c&&"object"==typeof c&&"function"==typeof c.toJSON&&(c=c.toJSON(t)),"function"==typeof rep&&(c=rep.call(e,t,c)),typeof c){case"string":return quote(c);case"number":return isFinite(c)?String(c):"null";case"boolean":case"null":return String(c);case"object":if(!c)return"null";if(gap+=indent,a=[],"[object Array]"===Object.prototype.toString.apply(c)){for(o=c.length,i=0;i<o;i+=1)a[i]=str(i,c)||"null";return r=0===a.length?"[]":gap?"[\n"+gap+a.join(",\n"+gap)+"\n"+s+"]":"["+a.join(",")+"]",gap=s,r}if(rep&&"object"==typeof rep)for(o=rep.length,i=0;i<o;i+=1)"string"==typeof rep[i]&&(n=rep[i],r=str(n,c),r&&a.push(quote(n)+(gap?": ":":")+r));else for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(r=str(n,c),r&&a.push(quote(n)+(gap?": ":":")+r));return r=0===a.length?"{}":gap?"{\n"+gap+a.join(",\n"+gap)+"\n"+s+"}":"{"+a.join(",")+"}",gap=s,r}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={g:"\\b",h:"\\t",i:"\\n",j:"\\f",k:"\\r",l:'\\"',m:"\\\\"},JSON.stringify=function(t,e,i){var n;if(gap="",indent="","number"==typeof i)for(n=0;n<i;n+=1)indent+=" ";else"string"==typeof i&&(indent=i);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{o:t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(t,e){var i,n,r=t[e];if(r&&"object"==typeof r)for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n=walk(r,i),void 0!==n?r[i]=n:delete r[i]);return reviver.call(t,e,r)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({o:j},""):j;throw new SyntaxError("JSON.parse")})}(),function(t){"use strict";try{"string"==typeof window.top.location.toString()&&(t=window.top)}catch(e){t=window.self}t.exactag=t.exactag||{};var pi,e=t.document,i=t.console||{},n=window.JSON||{},r=function(){},o=function(){},getTrackingDomain=function(sub){var domainCopy=t.location.hostname||'';if((/\.bahn\.com$/i.test(domainCopy))||(domainCopy.toString().toLowerCase()==='bahn.com')){return('//'+sub+'.bahn.com');}else{return('//'+sub+'.bahn.de')}},a=function(){function t(t,e,i,n){var r,o,a,s,c,u,f,h,p,l=0;for(r=e||[0],i=i||0,u=i>>>3,p=n===-1?3:0,s=0;s<t.length;s+=1)for(o=t.charCodeAt(s),a=[],128>o?a.push(o):2048>o?(a.push(192|o>>>6),a.push(128|63&o)):55296>o||57344<=o?a.push(224|o>>>12,128|o>>>6&63,128|63&o):(s+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(s)),a.push(240|o>>>18,128|o>>>12&63,128|o>>>6&63,128|63&o)),c=0;c<a.length;c+=1){for(h=l+u,f=h>>>2;r.length<=f;)r.push(0);r[f]|=a[c]<<8*(p+n*(h%4)),l+=1}return{value:r,p:8*l+i}}function e(t,e,i,n){var r,o,a,s,c,u,f="",h=e/8,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";for(u=i===-1?3:0,r=0;r<h;r+=3)for(s=r+1<h?t[r+1>>>2]:0,c=r+2<h?t[r+2>>>2]:0,a=(t[r>>>2]>>>8*(u+i*(r%4))&255)<<16|(s>>>8*(u+i*((r+1)%4))&255)<<8|c>>>8*(u+i*((r+2)%4))&255,o=0;o<4;o+=1)f+=8*r+6*o<=e?p.charAt(a>>>6*(3-o)&63):n.q;return f}function i(t,e){return t>>>e|t<<32-e}function n(t,e){return t>>>e}function r(t,e){var r,o,a,s,c,u,f,h,p,l,g,d,y,m,v,b,x,C,w,O,S,j,_,A,k,D,N,J=[];for(g=64,y=1,_=Number,m=function(t,e){var i=(65535&t)+(65535&e),n=(t>>>16)+(e>>>16)+(i>>>16);return(65535&n)<<16|65535&i},v=function(t,e,i,n){var r=(65535&t)+(65535&e)+(65535&i)+(65535&n),o=(t>>>16)+(e>>>16)+(i>>>16)+(n>>>16)+(r>>>16);return(65535&o)<<16|65535&r},b=function(t,e,i,n,r){var o=(65535&t)+(65535&e)+(65535&i)+(65535&n)+(65535&r),a=(t>>>16)+(e>>>16)+(i>>>16)+(n>>>16)+(r>>>16)+(o>>>16);return(65535&a)<<16|65535&o},x=function(t){return i(t,7)^i(t,18)^n(t,3)},C=function(t){return i(t,17)^i(t,19)^n(t,10)},w=function(t){return i(t,2)^i(t,13)^i(t,22)},O=function(t){return i(t,6)^i(t,11)^i(t,25)},j=function(t,e,i){return t&e^t&i^e&i},S=function(t,e,i){return t&e^~t&i},N=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],r=e[0],o=e[1],a=e[2],s=e[3],c=e[4],u=e[5],f=e[6],h=e[7],d=0;d<g;d+=1)d<16?(D=d*y,A=t.length<=D?0:t[D],k=t.length<=D+1?0:t[D+1],J[d]=new _(A,k)):J[d]=v(C(J[d-2]),J[d-7],x(J[d-15]),J[d-16]),p=b(h,O(c),S(c,u,f),N[d],J[d]),l=m(w(r),j(r,o,a)),h=f,f=u,u=c,c=m(s,p),s=a,a=o,o=r,r=m(p,l);return e[0]=m(r,e[0]),e[1]=m(o,e[1]),e[2]=m(a,e[2]),e[3]=m(s,e[3]),e[4]=m(c,e[4]),e[5]=m(u,e[5]),e[6]=m(f,e[6]),e[7]=m(h,e[7]),e}function o(t,e,i,n){var o,s,c,u,f;for(c=(e+65>>>9<<4)+15,u=16;t.length<=c;)t.push(0);for(t[e>>>5]|=128<<24-e%32,f=e+i,t[c]=4294967295&f,t[c-1]=f/a|0,s=t.length,o=0;o<s;o+=u)n=r(t.slice(o,o+u),n);return n}var a=4294967296;return function(i){var n,a,s,c=0,u=[],f=0,h=-1;s=function(t){return t.slice()},a=function(e,i,n){return t(e,i,n,h)},n=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.update=function(t){var e,i,o,s,h,p=0,l=16;for(e=a(t,u,f),i=e.p,s=e.value,o=i>>>5,h=0;h<o;h+=l)p+512<=i&&(n=r(s.slice(h,h+l),n),p+=512);c+=p,u=s.slice(p>>>5),f=i%512},this.s=function(){var t,i;return t={q:"=",t:!1,u:-1},i=o(u.slice(),f,c,s(n),256),e(i,256,h,t)},this.update(i)}}();void 0===i.log&&(i.log=function(){}),r.prototype={version:"3.0.20160921",cfg:{type:"Content",conversiontype:"",referrer:e.referrer,host:t.location.host,site:t.location.pathname,search:t.location.search,protocol:t.location.protocol,campaign:"",screensize:"",pitype:"",uk:"",trackingURL:getTrackingDomain('at'),cdnURL:getTrackingDomain('cdn-at')},v:"exactag",A:!1,B:{start:(new Date).getTime()},C:null,D:null,item:{},F:[],G:1e3,H:new Date(2013,0,26),I:!1,J:!1,nfif:!1,enabled:!0,style:"position:absolute; z-index:-1; width:0px; height:0px; overflow: hidden; border: 0;",init:function(){return this.K(),null===e.body?void t.setTimeout(this.L(this,this.init),10):(this.M("pi.init"),this.N(),void this.O())},L:function(t,e){return function(i){e.apply(t,arguments,i)}},N:function(){var t=e.createElement("iframe");t.setAttribute("id",this.v+"_"+this.D),t.style.cssText=this.style,e.body.appendChild(t),this.C=this.P(t);try{this.C.open("text/html","replace"),e=this.R>0&&this.R<9?t.document||this.C:this.C,this.C.close()}catch(t){return void this.report("accessing root iframe failed","error")}this.A=this.C.createElement("div"),this.A.id=this.v+"_pi_content",this.C.body.appendChild(this.A),this.log("this.rootDoc filled ",this.D)},S:function(e){if("object"!=typeof e)return void this.report("no valid tracking object passed","error");if(!this.J)return this.log("not ready to track yet ... retrying in 10ms"),void t.setTimeout(this.L(this,this.S),10,e);this.M("pi.processItem");var i,n;if(this.item=this.T(e),this.log("trackingConfig",this.item),this.M("exctag.callHandler"),n=this.item.trackingURL+"/pi.aspx?campaign="+this.item.campaign+"&pitype="+this.item.type+"&convtype="+this.item.conversiontype+"&rnd="+this.U(12),this.nfif===!0)try{this.post(n+"&retmode=6",{items:this.stringify(this.item)})}catch(t){this.report("post to pi.aspx failed","error")}else try{n+="&items="+encodeURIComponent(this.stringify(this.item)),i=this.C.createElement("script"),i.setAttribute("src",n),i.setAttribute("type","text/javascript"),this.C.body.appendChild(i)}catch(t){this.report("calling pi.aspx in script failed","error")}this.M("pi.handlerCalled"),t.exactag=new o,this.log("exactag reinit",exactag)},P:function(t){var i,n=null;try{n=t.contentDocument||t.contentWindow.document||t.document}catch(r){i="javascript",t.setAttribute("src",i+':(function(){document.open();document.domain="'+e.domain+'";})()'),n=t.contentDocument||t.contentWindow.document||t.document}return n},V:function(t,e,i){var n;n=this.C.createElement("input"),n.setAttribute("type","hidden"),n.setAttribute("name",t),n.setAttribute("value",e),i.appendChild(n)},W:function(t){var e,i=this.C.getElementById(t);return null===i&&(e=this.C.createElement("div"),e.id=t,this.C.body.appendChild(e)),e},log:function(){var t,e=arguments;if(this.F.push(e),this.debug)if(e[0]=this.D+" - "+e[0],this.R>=9)t=Function.prototype.bind.call(i.log,i),t.apply(i,arguments);else if(Function.prototype.bind||"undefined"===i||"object"!=typeof i.log)try{i.log.apply(i,arguments)}catch(t){i.log(arguments)}else Function.prototype.call.call(i.log,i,Array.prototype.slice.call(arguments))},report:function(e,i){var n,r={};r.type=i||"error",r.D=this.D,r.component="tracking",r.X=e,r.exactag=this.item,r.campaign=this.item.campaign||"",r.host=t.location.host,r.site=t.location.pathname,r.search=t.location.search,r.ua=navigator.userAgent,r.log=this.F,r.version=this.version,n=this.Y(this.cfg),"error"===r.type?(this.post(n.trackingURL+"/jstrace.aspx",{data:this.stringify(r)}),this.log("ERROR: "+e)):(this.log(e,this.stringify(r)),(this.I||this.debug)&&this.post(n.trackingURL+"/jstrace.aspx",{data:this.stringify(r)}))},Z:function(){var e=t.location.hash.indexOf(this.v+"_debug")>-1?1:0;return this.debug=!(1!==e),this.debug},M:function(t){var e,i=(new Date).getTime();e=i-this.B.start,this.log(t+": "+e/1e3+"s")},$:function(){return this.D||(this.D=this.U(4)),this.D},U:function(t){var e,i="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(e=0;e<t;e++)i+=n.charAt(Math.floor(Math.random()*n.length));return i},K:function(){if(void 0===this._){this.Z(),this.$(),this.cfg.uk=this.aa("et_uk"),this.F=[],this.item={},this.B.start=(new Date).getTime();try{exactag.nfif===!0&&(this.nfif=exactag.nfif,delete exactag.nfif),this.G>0&&Math.ceil(Math.random()*this.G)===this.G&&this.H.getTime()>(new Date).getTime()&&(this.log("trace enabled"),this.I=!0)}catch(t){}this._=!0}},extend:function(t,e){var i;for(i in e)"function"!=typeof e[i]&&void 0!==e[i]&&(t[i]=e[i]);return t},O:function(){this.J=!0},getItem:function(t){var e,i={};for(e in t)"function"!=typeof t[e]&&(i[e]=t[e]);return i},Y:function(t){return n.parse(n.stringify(t))},T:function(t){var e,i=this.Y(this.cfg);for(e in t)void 0!==t[e]&&(i[e]=t[e]);return i},stringify:function(t){return n.stringify(t)},post:function(t,e){var i,n,r,o;i=this.v+"_"+this.U(5);try{n=this.C.createElement("<iframe id='"+i+"' name='"+i+"'>")}catch(t){n=this.C.createElement("iframe"),n.setAttribute("id",i),n.setAttribute("name",i)}this.C.body.appendChild(n),r=this.C.createElement("form"),r.setAttribute("action",t),r.setAttribute("target",i),r.setAttribute("method","POST");for(o in e)void 0!==e[o]&&this.V(o,encodeURIComponent(e[o]),r);this.C.body.appendChild(r),r.submit()},disable:function(t){this.log("ERROR: "+t),this.enabled=!1},aa:function(i){var n,r;return e.cookie.length>0&&(n=e.cookie.indexOf(i+"="),n!==-1)?(n=n+i.length+1,r=e.cookie.indexOf(";",n),r===-1&&(r=e.cookie.length),t.unescape(e.cookie.substring(n,r))):""}},o.prototype={track:function(t){var pi=new r;pi.init(),pi.M("exactag.track"),void 0===t?(t=pi.getItem(this),pi.log("item read from exactag object",t)):pi.log("object injected into exactag.track",t),"string"==typeof t.campaign&&pi.S(t)},Track:function(t){this.track(t)},hash:function(t){var e=t.replace(/^\s+|\s+$/gm,"").toLowerCase();return new a(e).s()}},"string"==typeof t.exactag.campaign&&(pi=new r,pi.init(),pi.log("found item in exactag",t.exactag),pi.S(pi.getItem(t.exactag))),t.exactag=new o}(window);u.initialized=true;}else{if(window.exactag&&typeof window.exactag.Track==='function'){window.exactag.Track();}}};u.mapUidToExactag=function(){if(window.hasOwnProperty("Adform")&&window.Adform.hasOwnProperty("_uid")){window.exactag['a_uid']=window.Adform._uid;}else{window.exactag['a_uid']='';}};for(var key in u.data){if(key!=='base_url'&&key!=='sendAlways'&&(u.data.sendAlways.length===0||u.data.sendAlways.indexOf(key)>=0||u.data.orderid)){window.exactag[key]=u.data[key];}}
u.loader_cb=function(){u.mapUidToExactag();u.loadExLibandTrack();};if(window.exactag.orderid){u.mapUidToExactag();if(window.exactag['a_uid']){u.loadExLibandTrack();}else{u.customLoader(u.data.base_url,'utag_24')
.then(u.loader_cb,u.loader_cb)}}else{u.loadExLibandTrack();}
}};utag.o[loader].loader.LOAD(id);})("24","bahntms.next-main");}catch(error){utag.DB(error);}
