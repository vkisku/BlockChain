/*
`	File to test the work
*/

const Blockchain=require('./blockchain');
const bitcoin=new Blockchain();
bitcoin.CreateNewBlock(234,"sdgwet3tg34h34h","cwegtwe3y34");
bitcoin.CreateNewTransaction(300,"Vikash","Kisku");
bitcoin.CreateNewTransaction(400,"Vikash","Kisku");
bitcoin.CreateNewBlock(53697,"vsdbsdbsd4h","sdbsbsdbh34");
const currData=[
	{
		amount:101,
		sender:"N90ANS90N90ANSDF09N",
		receipent:"90NA905NDF90ANSDF09N"
	},
	{
		amount:30,
		sender:"09ANS09DFNA8SDNF",
		receipent:"UIANSIUDFUIABSDUIFB"
	},
	{
		amount:200,
		sender:"89ANS89DFN98ASNDF89",
		receipent:"AUSDF89ANSD9FNASD"
	}
];
//bitcoin.CreateNewBlock(5346,"sfnfandfmsBn","jsdkdkdjdsga");
console.log(bitcoin.hashBlock("OINAISDFN09N09ASDNF90N90ASNDF",currData,53697));
//console.log(bitcoin.proofOfWork("OINAISDFN09N09ASDNF90N90ASNDF",currData));