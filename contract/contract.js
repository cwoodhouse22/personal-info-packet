const Web3 = require('web3');


//const ganache = require('ganache-cli');
//const provider = ganache.provider();
//const web3 = new Web3(provider);
//const abi = require('./compile').interface;
//const byteCode = require('./compile').bytecode;
//console.log(abi);



var web3 = new Web3('ws://localhost:8545');
 
    if(web3==undefined){
		web3 = new Web3(web3.currentProvider);
	}else{}
    // Set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
 
var contract =   web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ssn",
				"type": "string"
			},
			{
				"name": "_country",
				"type": "string"
			},
			{
				"name": "_city",
				"type": "string"
			},
			{
				"name": "_street",
				"type": "string"
			},
			{
				"name": "_apt",
				"type": "string"
			},
			{
				"name": "_zipCode",
				"type": "string"
			}
		],
		"name": "addAddress",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ssn",
				"type": "string"
			},
			{
				"name": "_college",
				"type": "string"
			},
			{
				"name": "_bachelorType",
				"type": "string"
			},
			{
				"name": "_major",
				"type": "string"
			},
			{
				"name": "_gpa",
				"type": "string"
			},
			{
				"name": "_isCompleted",
				"type": "bool"
			},
			{
				"name": "_isEnrolled",
				"type": "bool"
			}
		],
		"name": "addEducation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ssn",
				"type": "string"
			},
			{
				"name": "_father",
				"type": "string"
			},
			{
				"name": "_mother",
				"type": "string"
			}
		],
		"name": "addFamilyData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fName",
				"type": "string"
			},
			{
				"name": "_lName",
				"type": "string"
			},
			{
				"name": "_dateOfBirth",
				"type": "string"
			},
			{
				"name": "_placeOfBirth",
				"type": "string"
			},
			{
				"name": "_ssn",
				"type": "string"
			},
			{
				"name": "_sex",
				"type": "string"
			}
		],
		"name": "addPerson",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ssn",
				"type": "string"
			}
		],
		"name": "getAddress",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ssn",
				"type": "string"
			}
		],
		"name": "getEducation",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ssn",
				"type": "string"
			}
		],
		"name": "getFamily",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ssn",
				"type": "string"
			}
		],
		"name": "getPerson",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "peopleData",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);
var myContract = contract.at('0x6711c8a9afd1f9855199b277b83b887bebd8dbba');


module.exports = myContract;