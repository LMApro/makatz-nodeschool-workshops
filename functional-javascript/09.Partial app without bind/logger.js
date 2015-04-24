var slice = Array.prototype.slice;
module.exports = 
function logger(ns) {
	return function() {
		var args = slice.call(arguments);
		// console.log(ns, args.join(' '));
		console.log.apply(this, [ns].concat(args));
	};
}


 function loggerSolution(namespace) {                                              
   return function() {                                                     
     console.log.apply(console, [namespace].concat(slice.call(arguments))) 
   }                                                                       
 }                                                                         