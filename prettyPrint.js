function Stringfy(x){return Object.prototype.toString.call(x)};
//
(function(scope){

	Object.ClassOf=function(x){
		if (x === scope){
			return 'global';
		}
		return Stringfy(x).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
	}
})(this);



/*

function __getClass(object) {
  return Object.prototype.toString.call(object)
    .match(/^\[object\s(.*)\]$/)[1];
};


Object.toType = (function toType(global) {
  return function(obj) {
    if (obj === global) {
      return "global";
    }
    return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
  }
})(this)

Object.toType(fff); //ReferenceError
More precisely it is the call to toType that throws the error, not the function itself. The only guard against that (as with calls to any function) is to practice good code hygiene…

window.fff && Object.toType(fff);
*/





function(x){
	var A=Array,p='constructor';
	return p in x && x[p] === A|| 'length' in x && x instanceof A
};



/*
instanceof Array will return false if x was created in another frame
(v is instance of thatFrame.contentWindow.Array)
*/

Object.isArray = Array.isArray||(Array.isArray=function(a){return''+a!==a&&Stringfy(a)=='[object Array]'});










//
function prettyPrint(x){
	var k=typeof(x);


}
//
prettyPrint(window);


/*
console.log(k);


*/


