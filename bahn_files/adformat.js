(function(){var l=k;function k(a,b){var c,d,e=m(window.top);for(c=e.length;c--;)try{if((d=e[c])&&(d=d[a])&&(d=d.shared))return d}catch(f){}return window[a].shared=b}function m(a,b){try{var c=a.frames}catch(e){}if(c){(b=b||[]).push(a);for(var d=0;c&&d<c.length;d++)m(a.frames[d],b)}return b};var p=n;function n(a){try{return a()}catch(b){}};var aa=r,ba=window.top;function r(a){for(var b,c,d=window;d;){if(p(function(){return d.frames[a]})){b=d;break}if(d===ba)break;d=d.parent}b&&(c=!p(function(){return!!b.document.getElementById}));return{frameRef:b,isCrossDomain:c}};var ca=window.setTimeout,t,u,v,w,x={},y=1,z=[],A=[],B=window.Adform=window.Adform||{};B.getConsent=da;B.waitForConsent=C;B.hasConsent=ea;D();E();l("Adform",{});F();function ea(a){C(function(b){a(null===b?!0:b.adform_consent)},1E4,!0)}
function C(a,b,c){b=void 0===b?1E4:b;c=void 0===c?!1:c;D();E();t||window.__tcfapi||v||window.__gpp?(c?A.push(a):z.push(a),F(),ca(function(){var c=[G(z,a),G(A,a)],b=l("Adform",{}),f=b.gdpr,q=b.gdpr_consent,g=b.adform_consent,h=b.gpp;b=b.gpp_sid;if(-1<c[0])z.splice(c[0],1)[0]({gdpr:f,gdpr_consent:q,adform_consent:g,gpp:h,gpp_sid:b});if(-1<c[1])A.splice(c[1],1)[0]({gdpr:f,gdpr_consent:q,adform_consent:g,gpp:h,gpp_sid:b})},b)):a(null,"CMP not found.")}
function D(){var a=H("tcfapi"),b=a.isCrossDomain;t=a.frame;u=b;return{cmpFrame:t,isCrossDomainCmp:u}}function E(){var a=H("gpp"),b=a.isCrossDomain;v=a.frame;w=b;return{gppFrame:v,isCrossDomainGpp:w}}function H(a){if(!b&&(a=aa("__"+a+"Locator"),a.frameRef)){var b=a.frameRef;var c=a.isCrossDomain}return{frame:b,isCrossDomain:c}}function da(){F();var a=l("Adform",{});return{gdpr:a.gdpr,gdpr_consent:a.gdpr_consent,gpp:a.gpp,gpp_sid:a.gpp_sid}}function F(){I("__tcfapi");I("__gpp")}
function J(a,b){var c=a.api,d=a.frame,e=a.command,f=a.callback,q=a.parameter,g="__gpp"===c;c+="Call";var h=window,P=g?K:L;h.removeEventListener?h.removeEventListener("message",P,!1):h.detachEvent&&h.detachEvent("onmessage",P);h=window;g=g?K:L;h.addEventListener?h.addEventListener("message",g,!1):h.attachEvent&&h.attachEvent("onmessage",g);g={};e=(g[c]={command:e,callId:y,parameter:q},g);x[y]="function"===typeof f?f:b;y++;d.postMessage(e,"*")}
function K(a){if((a=a.data&&"string"===typeof a.data&&-1<a.data.indexOf("__gppReturn")?JSON.parse(a.data):a.data)&&a.__gppReturn&&a.__gppReturn.callId&&(a=a.__gppReturn,x.hasOwnProperty(a.callId)))x[a.callId](a.returnValue)}function M(a,b){var c=a.api,d=a.frame,e=a.command,f=a.callback,q=a.parameter,g="__gpp"===c,h=g?w:u;(c=d&&!h?d[c]:window[c])&&(g?fa({__api:c,command:e,callback:f,parameter:q,resultCallback:b}):ha({__api:c,command:e,callback:f}))}
function fa(a){var b=a.__api,c=a.command,d=a.callback,e=a.parameter,f=a.resultCallback;p(function(){d?b(c,d):f(b(c,d,e))})}function ha(a){var b=a.__api,c=a.command,d=a.callback;p(function(){b(c,null,d)})}function I(a){var b="__gpp"===a,c=b?v:t;(b?w:u)&&c&&c.postMessage?J({api:a,frame:c,command:"addEventListener",callback:b?N:null}):M({api:a,frame:c,command:"addEventListener",callback:b?N:O})}
function N(a){a&&("sectionChange"===a.eventName||a.pingData&&"loaded"===a.pingData.cmpStatus)&&(a=v,w&&a&&a.postMessage?J({api:"__gpp",frame:a,command:"getGPPData",callback:Q}):M({api:"__gpp",frame:a,command:"getGPPData",callback:Q}))}
function L(a){var b=a.data;"string"===typeof b&&(b=p(function(){return window.JSON.parse(b)}));b&&(b=(b.__tcfapiReturn||{}).returnValue);b&&null!=b.gdprApplies&&(a=b,O({gdprApplies:a.gdprApplies,tcString:a.tcString,purpose:a.purpose,vendor:a.vendor,restrictions:a.restrictions,eventStatus:a.eventStatus}))}
function O(a){if((a=void 0===a?{}:a)&&"cmpuishown"!==a.eventStatus){var b=R(a.gdprApplies),c=l("Adform",{});c.gdpr=b;c.gdpr_consent=a.tcString;if(b=!(!a.purpose||!a.vendor)||0===b){var d=a;a=d.gdprApplies;var e=S(d,"purpose.consents.1",!1),f=S(d,"vendor.consents.50",!1);d=S(d,"restrictions.1.50",1);a=0===R(a)?!0:e&&f&&0!==d;c.adform_consent=a}a=c.gdpr;e=c.gdpr_consent;f=c.adform_consent;d=c.gpp;c=c.gpp_sid;if(void 0!==f&&b)for(;A.length;)A.shift()({gdpr:a,gdpr_consent:e,adform_consent:f,gpp:d,gpp_sid:c});
for(;z.length;)z.shift()({gdpr:a,gdpr_consent:e,adform_consent:f,gpp:d,gpp_sid:c})}}
function Q(a){if(a=void 0===a?{}:a){var b=w,c=v,d=l("Adform",{});a&&(d.gpp=a.gppString,d.gpp_sid=a.applicableSections&&a.applicableSections.join(","));if(a&&a.sectionList&&0<=G(a.sectionList,2))b&&c&&c.postMessage?J({api:"__gpp",frame:c,command:"getSection",callback:T,parameter:"tcfeuv2"}):M({api:"__gpp",frame:c,command:"getSection",parameter:"tcfeuv2"},T);else{void 0===d.adform_consent&&(d.adform_consent=!0);a=d.gdpr;b=d.gdpr_consent;c=d.adform_consent;var e=d.gpp;for(d=d.gpp_sid;A.length;)A.shift()({gdpr:a,
gdpr_consent:b,adform_consent:c,gpp:e,gpp_sid:d});for(;z.length;)z.shift()({gdpr:a,gdpr_consent:b,adform_consent:c,gpp:e,gpp_sid:d})}}}
function T(a){var b=l("Adform",{}),c=!!(a&&a.PurposeConsents&&a.VendorConsents);if(c){var d=S(a,"PurposeConsents.1",!1),e=0<=G(a.VendorConsents,50)||!1;a=S(a,"PublisherRestrictions.1.50",1);b.adform_consent=d&&e&&0!==a}d=b.gdpr;e=b.gdpr_consent;a=b.adform_consent;var f=b.gpp;b=b.gpp_sid;if(void 0!==a&&c)for(;A.length;)A.shift()({gdpr:d,gdpr_consent:e,adform_consent:a,gpp:f,gpp_sid:b});for(;z.length;)z.shift()({gdpr:d,gdpr_consent:e,adform_consent:a,gpp:f,gpp_sid:b})}
function R(a){if("1"==a)return 1;if("0"==a)return 0}function G(a,b){var c=a.length;if(a.indexOf)return a.indexOf(b);for(;c--&&a[c]!==b;);return c}function S(a,b,c){b=b.split(".");for(var d=0;d<b.length;d++)if(a=a[b[d]],void 0===a){a=c;break}return a};for(var ia=Array.prototype.slice,U={},V={init:ja,cookieSegments:ka},W=window.AdformAT&&window.AdformAT.q||[];0 in W;)X(W.shift());W.push=X;window.AdformAT=Y;function ka(a){var b=U.baseUrl+"/cookiesegments?token="+U.token;C(function(c){c&&(void 0!==c.gdpr&&(b+="&gdpr="+Z(c.gdpr)+"&gdpr_consent="+Z(c.gdpr_consent)),void 0!==c.gpp&&(b+="&gpp="+Z(c.gpp)+"&gpp_sid="+Z(c.gpp_sid)));la(b,a)})}
function la(a,b){var c=new window.XMLHttpRequest;c.open("GET",a,!0);c.setRequestHeader("Accept","application/json");c.withCredentials=!0;c.onreadystatechange=function(){c.readyState===window.XMLHttpRequest.DONE&&b(c.status,c.response||c.responseText,c)};c.onerror=function(){return b(null,"Error",c)};c.ontimeout=function(){return b(null,"Timeout",c)};c.send()}function ja(a,b){U.token=a;U.baseUrl=b||"https://dmp.adform.net/audiencetag"}
function Y(a){V[a]&&V[a].apply(null,ia.call(arguments,1));return Y}function Z(a){return void 0===a?"":""+a}function X(a){return Y.apply(null,a)};})();