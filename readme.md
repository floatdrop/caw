# caw [![Build Status](https://travis-ci.org/kevva/caw.svg?branch=master)](https://travis-ci.org/kevva/caw)

> Construct HTTP/HTTPS agents for tunneling proxies


## Install

```
$ npm install --save caw
```


## Usage

```js
var caw = require('caw');
var got = require('got');

got('todomvc.com', {
	agent: caw()
}, function () {});
```


## API

### caw(proxy, options)

#### proxy

Type: `string`

Proxy URL.

#### options

Type: `object`

##### protocol

Type: `string`  
Default: `http`

Endpoint protocol.


## License

MIT © [Kevin Mårtensson](http://github.com/kevva)
