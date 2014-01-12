/*
need:
__proto__
array.filter
*/
"use strict";
var verbose=1;
//▒··························
function DoNothing(){};
function EachIn(m,f){for(var i in m){f(m[i])}};
//▒·······················································································
var trace={};
(function(o,v){var f=(v&&o)?function(p){trace[p]=function(s){if(s!=""){o[p](s)}}}:function(p){trace[p]=DoNothing};EachIn(["log","info","warn","dir"],f)})(console,verbose);
//▒
var Error=Error||{};
var Exception={isNot:{}};
EachIn(['Array','Data','Function'],function(s){Exception.isNot[s]=function(o,k){var b='\u0020';if(o instanceof Error){o.message='‹'+o.message+'›'+b+'isn\'t'+b+s+b+'('+(k?k:'as expected')+').';throw o}}});//''Defined,'Object',,'String','Number'
//▒
var is={
 not:{
	defined:(function(u){return function(o){return o==u}})(void(0))//, …
 }//, …
};
//▒
EachIn(['Array','Function'],function(p){var f=Object.prototype.toString,a='[object\u0020',b=']';is[p]=function(o){return f.call(o)==(a+p+b)}});//,'Boolean' ,'Object','String','Function','Number','RegExp','Date'
//▒··································································································································································································································································································································································
is.Array=Array.isArray||is.Array;
(function(e,p){if(!e[p]){e[p]=function(f,x){var m,e=this,c=Exception.isNot,E=TypeError;if(is.Function(f)){if(e==null||e.length<1){c.Data(new E(e))}}else{c.Function(new E(f))};m=[];for(var v,i=0,o=Object(e),l=(o.length>>>0);i<l;i++){if(i in o){v=o[i];if(f.call(x,v,i,o)){m.push(v)}}};return m}}})(Array.prototype,'filter');
//▒······················································································································································································································································································································································································································································································································································································································
var are={
 not:{
	defined:(function(f){return function(o,m){if(is.Array(m)){if(m.length){return m.filter(function(p){var v=o[p];return f(v)})}}}})(is.not.defined)//, …
 }//, …
};
//▒·································································································································
function SetProto(o,v){var p="__proto__";if(p in o){o[p]=v};return o};
EachIn([is.not.defined,are.not.defined],function(e){SetProto(e,null)});
//▒------------------------------------------------------------------------------------------------------
//DetectRequiredFeatures:
var lost=are.not.defined(document,['getElementById','styleSheets','nodeType']);
if(lost.length>0){//can polyfill?
 trace.warn('unsupported items: ‹'+lost+'›');
}else{
 trace.info('element ‹'+document+'› has all requirement.');
};




/*
var e=new TypeError(m),N=Exception.isNot;
console.log(is.Boolean(false))
console.log(are.not.defined([],[]))
*/



/*

‹›



//▒------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//, …
//·····························································································································
/*
(function(){})();
()();
function(){};
if(){}else{};


var e=this;
var d=document;
[].indexOf(value)
o.hasOwnProperty
function DoNothing(){};

console.warn("");
console.info("");
console.log("");
console.dir();

console.log(e);

trace.warn("");
trace.info("");
trace.log("");
trace.dir();

t=s.toLowerCase(),
'Defined','Object','Array','Number
Error.isNot.Array(x,k);
Error.isNot.Defined(x,k);
Error.isNot.Object(x,k);
ecc

*/

/*
EachIn(["","",""],function(n){});
EachIn({a:"",b:"",c:""},function(p){});
*/


//Object.freeze(is);
//Object.freeze(trace)
//·
//‹›
// ►●█▒■□
//― ℓ
//₪
//, …
//•’‘
//⌂⌐














/*

Object.defineProperty(Object.prototype,'has',{ value: f, enumerable:false});




var zz={b:22};
zz.a=33

console.info(zz.has.key('a'));




Object.haszz={

	keys:function(x){


		var r=0,
			t='need context-hook';
		if(x){
			var e=has,
				s=isNaN(x);
			if(s){
				if(is.String(x)){
					r=this
				}else{
					Error.isNot.String(x, t)
				}
			}else{
				if(is.Array(e)){
					r=(e.length >= x)
				}else{
					Error.isNot.Array(e, t)
				}
			};
		}else{
			Error.isNot.Defined(x, t)
		};
		return r
	} //, …
};
//
*/
