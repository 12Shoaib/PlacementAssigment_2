import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import AddButton from '../../Atoms/AddButton/AddButton'
import {useState} from 'react'
import { atomState } from '../../Recoil/RecoilAtom';
import { useRecoilState } from 'recoil';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [isNext , setIsNext] = useState(false)
  const [isTop , setIsTop] = useState(true)
  const [nextButtonClicked , setNextButtonClicked] = useState(true)
  const [name , setName] = useState()           
  const [firstName , setFirstName] = useState()           
  const [lastName , setLastName] = useState()           
  const [gender , setGender] = useState()           
  const [dob , setDob] = useState()           
  const [email , setEmail] = useState()           
  const [phone , setPhone] = useState()           
  const [userName , setUserName] = useState()           
  const [country , setCountry] = useState()           
  const [city , setCity] = useState()           
  const [adress , setAdress] = useState()           
  const [zipcode , setZipcode] = useState()           
  const [street , setStreet] = useState()           
  const [Data , setData] = useRecoilState(atomState)


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = () => {
    setIsTop(!isTop)
    setIsNext(!isNext)
    setNextButtonClicked(!nextButtonClicked)
  }
  const AddToRecoil = () => {
    const obj = {
      Name: name,
      firstName : firstName,
      lastName : lastName,
      gender : gender,
      Dob : dob,
      Email: email,
      userName: userName,
      phone: phone,
      country: country,
      city:city,
      street: street,
      zipcode:zipcode,
      Adress: adress

    }
    setData([obj , ...Data])
  }

  return (
    <div>
      <AddButton onClick={handleClickOpen} />
      <BootstrapDialog
      
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Customer Details
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          {isTop && <div>  
          Name  :  <input onChange={(e) => setName(e.target.value)} placeholder='Name' /><br/>
          FirstName : <input onChange={(e) => setFirstName(e.target.value)} placeholder='FirstName' /><br/>
          LastName  : <input onChange={(e)=>setLastName(e.target.value)} placeholder='LastName' /><br/>
          Gender    : <input onChange={(e)=>setGender(e.target.value)} placeholder='Gender' /><br/>
          Dob       : <input onChange={(e)=>setDob(e.target.value)} placeholder='DateOfBirth' /><br/>
          Email     : <input onChange={(e)=>setEmail(e.target.value)} placeholder='LastName' /><br/>
          Phone     : <input onChange={(e)=>setPhone(e.target.value)} placeholder='Phone' /><br/>
          </div>}
         {isNext && <div>
          UserName  : <input onChange={(e)=>setUserName(e.target.value)} placeholder='UserName' /><br/>
          Country   : <input onChange={(e)=>setCountry(e.target.value)} placeholder='Country' /><br/>
          City      : <input  onChange={(e)=>setCity(e.target.value)}placeholder='City' /><br/>
          Street    : <input  onChange={(e)=>setStreet(e.target.value)}placeholder='Street' /><br/>
          Zipcode   : <input  onChange={(e)=>setZipcode(e.target.value)}placeholder='Zipcode' /><br/>
          Adress    : <input  onChange={(e)=>setAdress(e.target.value)}placeholder='Adress' /><br/>
          </div>}
          </Typography>
      
        </DialogContent>
        <DialogActions>
          {nextButtonClicked ? <Button autoFocus onClick={handleChange}>
            Next
          </Button> : <Button autoFocus onClick={AddToRecoil}>
            Submit
          </Button> }
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
