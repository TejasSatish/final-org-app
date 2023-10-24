export const hardhatContractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3"
export const sepoliaContractAddress="0x7F2bfC1c37532fD7Fa097857Ff4717252b99585B"
export const abi= [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint104",
        "name": "age",
        "type": "uint104"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "locality",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "bloodType",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "organ",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "organSize",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "organLife",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "hospitalName",
        "type": "string"
      }
    ],
    "name": "DonorAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint104",
        "name": "age",
        "type": "uint104"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "locality",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "bloodType",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "organ",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "organSize",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "organLife",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "hospitalName",
        "type": "string"
      }
    ],
    "name": "DonorRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint104",
        "name": "age",
        "type": "uint104"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "locality",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "bloodType",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "organ",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "organSize",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "hospitalName",
        "type": "string"
      }
    ],
    "name": "RecipientAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint104",
        "name": "age",
        "type": "uint104"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "locality",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "bloodType",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "organ",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "organSize",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "hospitalName",
        "type": "string"
      }
    ],
    "name": "RecipientRemoved",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint104",
        "name": "_age",
        "type": "uint104"
      },
      {
        "internalType": "string",
        "name": "_locality",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_bloodtype",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_organ",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_organSize",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_organLife",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_hospitalName",
        "type": "string"
      }
    ],
    "name": "createNewDonor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint104",
        "name": "_age",
        "type": "uint104"
      },
      {
        "internalType": "string",
        "name": "_locality",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_bloodtype",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_organ",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_organSize",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_hospitalName",
        "type": "string"
      }
    ],
    "name": "createNewRecipient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "donors",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint104",
        "name": "age",
        "type": "uint104"
      },
      {
        "internalType": "string",
        "name": "locality",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "bloodType",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "organ",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "organSize",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "organLife",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "hospitalName",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "recipients",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint104",
        "name": "age",
        "type": "uint104"
      },
      {
        "internalType": "string",
        "name": "locality",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "bloodType",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "organ",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "organSize",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "hospitalName",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "removeDonor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "removeRecipient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "retrieveDonors",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint104",
            "name": "age",
            "type": "uint104"
          },
          {
            "internalType": "string",
            "name": "locality",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "bloodType",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "organ",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "organSize",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "organLife",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "hospitalName",
            "type": "string"
          }
        ],
        "internalType": "struct SimpleStorage.OrganDonor[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "retrieveRecipients",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint104",
            "name": "age",
            "type": "uint104"
          },
          {
            "internalType": "string",
            "name": "locality",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "bloodType",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "organ",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "organSize",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "hospitalName",
            "type": "string"
          }
        ],
        "internalType": "struct SimpleStorage.OrganRecipient[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]