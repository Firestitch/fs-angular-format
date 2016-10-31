(function () {
    'use strict';
	/**
     * @ngdoc filter
     * @name fs.filter:fsFormatBytes
     * @restrict E
     * @param {integer} bytes Bytes to be converted
     * @param {integer} precision How many decimals to use
	 */
    angular.module('fs-angular-format',[])
    .filter('fsFormatBytes', function(fsFormat) {
	    return function(bytes, precision) {
	    	return fsFormat.bytes(bytes, precision);
	    }
	})

	/**
     * @ngdoc filter
     * @name fs.filter:fsFormatPercent
     * @restrict E
     * @param {decimal} number The number to be rounded
     * @param {integer} precision How many decimals to use
	 */
	.filter('fsFormatPercent',function (fsFormat) {
  		return function(number, precision) {
	    	return fsFormat.percent(number, precision);
	    }
  	})

	/**
     * @ngdoc filter
     * @name fs.filter:fsFormatPercent
     * @restrict E
     * @param {decimal} number The number to be rounded
     * @param {integer} precision How many decimals to use
	 */
	.filter('fsFormatCurrency',function (fsFormat) {
  		return function(amount, precision, symbol) {
	    	return fsFormat.currency(amount, precision, symbol);
	    }
  	});

})();