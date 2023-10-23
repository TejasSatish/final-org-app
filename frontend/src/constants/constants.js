export const hardhatContractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3"
export const sepoliaContractAddress="0x7F2bfC1c37532fD7Fa097857Ff4717252b99585B"
export const abi= [
    {
      "inputs": [
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
          "name": "hospitalName",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "retrieveDonors",
      "outputs": [
        {
          "components": [
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