/* global BigInt */  //this comment is necessary or else BigInt will not work with react
import { React,useState } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { abi, hardhatContractAddress, sepoliaContractAddress } from "../../constants/constants"
import { Card, Typography, Box, Grid, TextField, Button, MenuItem } from "@mui/material"
import axios from "axios";
const AddNewRecipient=()=>{

    const [recipientList, setRecipientList]=useState();

    const [name,setName]= useState("")
    const [age,setAge]= useState("")
    const [gender,setGender]= useState("")
    const [locality,setLocality]= useState("")
    const [bloodType,setBloodType]= useState("")
    const [tissueType,setTissueType]= useState("")
    const [organ,setOrgan]= useState("")
    const [organSize,setOrganSize]= useState("")
    const hospital=window.localStorage.getItem("organisation");
    const { chainId: chainIdHex }= useMoralis()
    const chainId=parseInt(chainIdHex)
    const [recipientId,setRecipientId]=useState(null);
    const storageAddress=sepoliaContractAddress

    //create recipient contract
    const {runContractFunction: createNewRecipient}= useWeb3Contract({
        abi: abi,
        contractAddress:storageAddress,
        functionName:"createNewRecipient",
        params:{
            _id: recipientId,
            _name: name,
            _age: age,
            _gender: gender,
            _locality: locality,
            _bloodtype: bloodType,
            _tissueType: tissueType,
            _organ: organ,
            _organSize: organSize,
            _hospitalName: hospital,
        },
    })

   

    function generateUniqueUint256() {
        // Create a Uint8Array to hold the 256 bits (32 bytes) of the ID.
        const idArray = new Uint8Array(32);
      
        // Fill the array with random values.
        crypto.getRandomValues(idArray);
      
        // Convert the Uint8Array to a Uint8ArrayView and then to a BigInt.
        const idBigInt = BigInt("0x" + Array.from(idArray).map(byte => byte.toString(16).padStart(2, '0')).join(''));
      
        return idBigInt;
      }

    function changeRecipientId(){        
        setRecipientId(generateUniqueUint256());
    }

    const handleSubmit=async (e)=>{
        const recipDetails={
            id: recipientId?.toString(),
            name: name,
            age: age,
            gender: gender,
            locality: locality,
            bloodtype: bloodType,
            tissuetype: tissueType,
            organ: organ,
            organSize: organSize,
            hospitalName: hospital,
        }
        
        axios.post("http://localhost:3001/receive/add",recipDetails,{
        'Content-Type': 'application/json'
        }).then((response)=>{
            const status=response.status
            if(status===200){
                console.log('sent success')
            }
            console.log(response.data);
            
        }) 
    }

    async function createRecipient(){
        changeRecipientId();

        const response = await createNewRecipient();   

        handleSubmit();
    }


    const {runContractFunction: resetAll}= useWeb3Contract({
        abi:abi,
        contractAddress:storageAddress,
        functionName:"resetAll",
        params:{},
    })

    async function deleteAll(){
        const response = await resetAll();
    }

    return(
        <div>
        <Card>
        <Box sx={{ mt: 3 }}>
            <Grid container spacing={1}  sx={{ p: '1rem'}}>
                <Grid item xs={12} sm={5}>
                    <TextField
                    required
                    fullWidth
                    label="Full Name"
                    onChange= {(e)=> setName(e.target.value)}
                    />
                </Grid>
              <Grid item xs={12} sm={1}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  label="Age"
                  onChange= {(e)=> setAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={1}>
                <TextField
                  required
                  fullWidth
                  select
                  label="Gender"
                  onChange= {(e)=> setGender(e.target.value)}
                >
                  <MenuItem value="M">Male</MenuItem>
                  <MenuItem value="F">Female</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  required
                  fullWidth
                  
                  label="Locality"
                  autoFocus
                  onChange= {(e)=> setLocality(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  fullWidth
                  select
                  label="Blood type"
                  onChange= {(e)=> setBloodType(e.target.value)}
                >
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  fullWidth
                  select
                  label="Tissue Type"
                  onChange= {(e)=> setTissueType(e.target.value)}
                >
                  <MenuItem value="HLA-A2,B7">HLA-A2,B7</MenuItem>
                  <MenuItem value="HLA-A4,B3">HLA-A4,B3</MenuItem>
                  <MenuItem value="HLA-A1,B8">HLA-A1,B8</MenuItem>
                  <MenuItem value="HLA-A3,B5">HLA-A3,B5</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  fullWidth
                  select
                  label="Organ"
                  onChange= {(e)=> setOrgan(e.target.value)}
                >
                  <MenuItem value="kidney">Kidney</MenuItem>
                  <MenuItem value="liver">Liver</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  fullWidth
                  label="Organ Size (cm)"
                  onChange= {(e)=> setOrganSize(e.target.value)}
                />
              </Grid>
              <Button onClick={createRecipient}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
                >
                Add New Recipient
              </Button>
            </Grid>
            
          </Box>
        </Card>
        
    </div>
    )
}

export default AddNewRecipient;