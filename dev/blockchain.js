/*
BlockChaining Algorithm Implementation using JavaScript.
*/

const sha256=require('sha256');

function Blockchain(){ //Constructor Function for Block Chaining.
	this.chain=[]; // To Store the Chain of blocks
	this.pendingTransaction=[]; // To store Transactions

	this.CreateNewBlock(500,"AnyHash","AnyHash");
}
Blockchain.prototype.CreateNewBlock = function(nonce,previousBlockHash,hash) {// Function to Create New Block
	//New Block.
	const newBlock={
		index:this.chain.length+1,
		timestamp:Date.now(),
		transaction:this.pendingTransaction, //Adding the Pending transactions to Transaction.
		nonce:nonce,
		previousBlockHash:previousBlockHash, //  Previous Block Hash.
		hash:hash
	};
	this.pendingTransaction=[]; // Emptying the Pending transactions
	this.chain.push(newBlock); //Pushing the newly Created Block to Chain. 
	return newBlock;
};
Blockchain.prototype.getLastBlock=function(){ // Function to return Last Block of a Chain.
	return this.chain[this.chain.length-1]; 
}
Blockchain.prototype.CreateNewTransaction=function(amount,sender,reciepent){ // Function to Create  new Transaction
	
	//new Transaction
	const newTransaction={  //  Here Transaction fields can be added according to the given problem
			amount:amount,	// This will be added to the Pending transaction, After the Transaction is
			sender:sender,	// is validated it is added to the newly Created Block to be further added to Block
			reciepent:reciepent
	};
	this.pendingTransaction.push(newTransaction);
	return this.getLastBlock()['index']+1;  // return the current index of a block.
}
Blockchain.prototype.hashBlock=function(previousBlockHash,currentBlockData,nonce){
	const dataAsString=previousBlockHash+nonce.toString()+JSON.stringify(currentBlockData);
	const hash=sha256(dataAsString); // SHA256 Hashing.
	return hash;
}
Blockchain.prototype.proofOfWork=function(previousBlockHash,currentBlockData){
	
	/*
		Proof of work is a function to to validate the transaction.
		Here the nonce value is calculated so that the Hash Becomes
		such that first four characters of a Hash Value are four Zeros.
	*/
	let nonce=0;
	let hash=this.hashBlock(previousBlockHash,currentBlockData,nonce);
	while(hash.substring(0,4)!=='0000'){
		nonce++;
		console.log(nonce);
		hash=this.hashBlock(previousBlockHash,currentBlockData,nonce);
	}
	return nonce;
}
module.exports=Blockchain; // Module Export.
