var os = require('os');

var msg = 'Here is some infor about your system';

var sysarr = [
		'Type: ' + os.type(), 
		'Node Version: ' + process.version,
		'Platform: '+ os.platform(),
		'Hostname: '+ os.hostname(),
		'Total memory: '+ os.totalmem(),
		'Free memory: '+ os.freemem(),
		'Uptime: '+os.uptime()
	];
	
console.log(msg);

var array_len = sysarr.length;

var i = 0;

while (i < array_len){
	console.log(sysarr[i]);
	i++
}



