// IMPORT MODULES
const { SHA256 } = require("crypto-js");

// GLOBAL VARIABLES
const blockData = {
	"name": "BLOK 1",
	"message": "IM NEW"
}
const blockData2 = {
	"name": "BLOK 2",
	"message": "IM SECOND"
}

// CREATE NEW BLOCK
class Block {
	constructor(data) {
		this.hash = "",
			this.height = 1325438,
			this.body = data,
			this.time = '',
			this.previousBlockHash = ""
	}
}

// CREATE NEW BLOCKCHAIN
class BlockChain {
	constructor() {
		this.chain = [];
		// Set first genesis block
		this.addBlock(new Block('First Block in Chain - Genesis block!'))
	}

	addBlock(newBlock) {
		//  If chain has previous blocks...
		if (this.chain.length > 0) {
			// grab hash of previous block by grabbing previous index of chain array
			newBlock.previousBlockHash = this.chain[this.chain.length - 1].hash;
		}
		// set height
		newBlock.height = this.chain.length;
		// set time, removing last 3 characters from string to be readable as UTC format
		newBlock.time = new Date().getTime().toString().slice(0, -3);
		// set block hash 
		newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
		// add block to chain
		return this.chain.push(newBlock);
	}

	getBlockchain() {
		console.log(this.chain);
	}
}

// EXECUTE BLOCKCHAIN
let blockchain = new BlockChain();
let block = new Block(blockData);
let block2 = new Block(blockData2);

setTimeout(() => { blockchain.addBlock(block) }, 1000);
setTimeout(() => { blockchain.addBlock(block2) }, 2000);
setTimeout(() => { blockchain.getBlockchain() }, 3000);



