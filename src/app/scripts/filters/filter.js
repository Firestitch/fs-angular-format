(function () {
    'use strict';
	/**
     * @ngdoc filter
     * @name fs.filter:fsFormatBytes
     * @param {integer} bytes Bytes to be converted
     * @param {integer} precision How many decimals to use
	 */
    angular.module('fs-angular-format',['fs-angular-util'])
    .filter('fsFormatBytes', function(fsFormat) {
	    return function(bytes, precision) {
	    	return fsFormat.bytes(bytes, precision);
	    }
	})

	/**
     * @ngdoc filter
     * @name fs.filter:fsFormatPercent
     * @param {decimal} number The number to be rounded
     * @param {integer} precision How many decimals to use
     * @param {boolean} multiply If the value should be multiplied by 100
	 */
	.filter('fsFormatPercent',function (fsFormat) {
  		return function(number, precision, multiply) {
	    	return fsFormat.percent(number, precision, multiply);
	    }
  	})

	/**
     * @ngdoc filter
     * @name fs.filter:fsFormatCurrency
     * @param {decimal} number The number to be rounded
     * @param {integer} precision How many decimals to use
	 */
	.filter('fsFormatCurrency',function (fsFormat) {
  		return function(amount, precision, symbol) {
	    	return fsFormat.currency(amount, precision, symbol);
	    }
  	})

  	/**
     * @ngdoc filter
     * @name fs.filter:fsFormatPhone
     * @param {string} phone The phone number to be formatted
	 */
	.filter('fsFormatPhone',function (fsFormat) {
  		return function(phone) {
	    	return fsFormat.phone(phone);
	    }
  	});

})();