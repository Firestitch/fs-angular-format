(function () {
    'use strict';

   /**
     * @ngdoc service
     * @name fs.services:fsFormat
     */
    angular.module('fs-angular-format')
    .factory('fsFormat', function($filter, fsUtil) {

	    var service = {
	    	percent: percent,
	    	bytes: bytes,
	    	currency: currency,
	    	phone: phone
	    };

	    return service;

	    /**
	     * @ngdoc method
	     * @methodOf fs.services:fsFormat
	     * @name bytes
	     * @param {integer} bytes Bytes to be converted
     	 * @param {integer} precision How many decimals to use
	     */
	    function bytes(bytes, precision) {
	        if (bytes === 0) { return '0 bytes' }
	        if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';
	        if (typeof precision === 'undefined') precision = 1;

	        var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
	            number = Math.floor(Math.log(bytes) / Math.log(1024)),
	            val = (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision);

	        return  (val.match(/\.0*$/) ? val.substr(0, val.indexOf('.')) : val) +  ' ' + units[number];
	    }

	    /**
	     * @ngdoc method
	     * @methodOf fs.services:fsFormat
	     * @name percent
	     * @param {decimal} number The number to be rounded
     	 * @param {integer} precision How many decimals to use
     	 * @param {boolean} multiply If the value should be multiplied by 100
	     */
	    function percent(number, precision, multiply) {
  			precision = precision || 0;
    		return $filter('number')(number * (multiply ? 100 : 1), precision) + '%';
  		}

	    /**
	     * @ngdoc method
	     * @methodOf fs.services:fsFormat
	     * @name currency
	     * @param {decimal} amount The currency value
     	 * @param {integer} precision How many decimals to use
     	 * @param {string} symbol The currency symbol (USD, CAD, etc)
	     */
	    function currency(amount, precision, symbol) {

	    	if(symbol=='EUR') {
	    		symbol = '€';
	    	} else {
	    		symbol = '$';
	    	}

  			precision = precision || 0;
    		return $filter('currency')(amount, symbol, precision);
  		}

	    /**
	     * @ngdoc method
	     * @methodOf fs.services:fsFormat
	     * @name phone
	     * @param {string} phone The phone number to be fromatted
     	 */
	    function phone(phone) {

	    	var phone = fsUtil.string(phone).replace(/[^\d]/g,'');

    		return phone.replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
  		}
  	});

})();