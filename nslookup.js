var dns = require('dns'),
	domain = 'simpledns.com'

dns.resolveMx(domain, function (err, addresses) {
	var i = addresses.length;

	while (i) {
		console.log(addresses[i-1].priority, ' ', addresses[i-1].exchange)
		i--;
	}
});