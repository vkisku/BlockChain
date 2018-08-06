const sha256=require('sha256');
function Blockchain(){
	this.chain=[];
	this.pendingTransaction=[];
}
Blockchain.prototype.CreateNewBlock = function(nonce,previousBlockHash,hash) {
	//Block
	const newBlock={
		index:this.chain.length+1,
		timestamp:Date.now(),
		transaction:this.pendingTransaction,
		nonce:nonce,
		previousBlockHash:previousBlockHash,
		hash:hash
	};
	this.pendingTransaction=[];
	this.chain.push(newBlock);
	return newBlock;
};
Blockchain.prototype.getLastBlock=function(){
	return this.chain[this.chain.length-1];
}
Blockchain.prototype.CreateNewTransaction=function(amount,sender,reciepent){
	const newTransaction={
			amount:amount,
			sender:sender,
			reciepent:reciepent
	};
	this.pendingTransaction.push(newTransaction);
	return this.getLastBlock()['index']+1;
}
Blockchain.prototype.hashBlock=function(previousBlockHash,currentBlockData,nonce){
	const dataAsString=previousBlockHash+nonce.toString()+JSON.stringify(currentBlockData);
	const hash=sha256(dataAsString);
	return hash;
}
Blockchain.prototype.proofOfWork=function(previousBlockHash,currentBlockData){
	let nonce=0;
	let hash=this.hashBlock(previousBlockHash,currentBlockData,nonce);
	while(hash.substring(0,4)!=='0000'){
		nonce++;
		console.log(nonce);
		hash=this.hashBlock(previousBlockHash,currentBlockData,nonce);
	}
	return nonce;
}
module.exports=Blockchain;
