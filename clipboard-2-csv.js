#!/usr/local/bin/node

const clipboardy = require('clipboardy');

var fullclip = clipboardy.readSync();

if(fullclip.match(/\n/)){
	var joined = fullclip.split(/\r?\n/).join(',');
	clipboardy.writeSync(joined);
}
