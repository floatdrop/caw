'use strict';
var url = require('url');
var getProxy = require('get-proxy');
var objectAssign = require('object-assign');
var tunnelAgent = require('tunnel-agent');

module.exports = function (proxy, opts) {
	opts = opts || {};

	if (typeof proxy !== 'string') {
		opts = proxy;
		proxy = getProxy();
	}

	if (!proxy) {
		return;
	}

	proxy = url.parse(proxy);

	var uriProtocol = opts.protocol === 'https' ? 'https' : 'http';
	var proxyProtocol = proxy.protocol === 'https' ? 'Https' : 'Http';
	var port = proxy.port || (proxyProtocol === 'Https' ? 443 : 80);
	var method = [uriProtocol, proxyProtocol].join('Over');

	delete opts.protocol;

	return tunnelAgent[method](objectAssign({
		proxy: {
			host: proxy.hostname,
			port: port
		}
	}, opts));
};
