function ObjData(a, b, c) {
	var o = Object,
		f=function(v){return {value: v}},
		x = {
			valueOf: f(function () {
				return a
			}),
			toString: f(function () {
				return b || a
			})
		};
	return o.freeze(o.create(null, c ? o.keys(c).forEach(function (p) {
		x[p] = f(c[p])
	}) : x))
};
