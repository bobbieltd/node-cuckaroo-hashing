

function addnoncetoheader(buf1,nonce)
{
	const b = Buffer.alloc(8);
	const MAX_UINT32 = 0xFFFFFFFF;
	const big = ~~(nonce / MAX_UINT32);
	const low = (nonce % MAX_UINT32) - big;
	b.writeUInt32BE(big, 0);
	b.writeUInt32BE(low, 4);
			
	return Buffer.concat([buf1,b]);
}


module.exports = require('bindings')('cuckaroo-hashing.node')
module.exports.addnoncetoheader = addnoncetoheader;

