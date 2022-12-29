// TODO - swap student and parent email

import { Autocomplete, Box, Button, Card, Divider, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import React,{ Fragment, useState } from "react";
import { TextValidator,  ValidatorForm } from "react-material-ui-form-validator";
import SubTitle from "../../components/SubTitle";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import CustCard from "../../components/CustCard";
import MainContainer from "../../components/MainContainer";
import CustSnackbar from "../../components/CustSnackbar";
import UserServices from "../../services/UserServices";
import {useNavigate} from 'react-router-dom'


const RegisterStudent = () => {

    const navigate = useNavigate();

    let [firstName,setFirstName] = useState('')
    let [lastName,setLastName] = useState('')
    let [contact,setContact] = useState('')
    let [email,setEmail] = useState('')
    let [email2,setEmail2] = useState('') // student email
    let [address,setAddress] = useState('')
    let [password,setPassword] = useState('')
    let [verifyPassword,setVerifyPassword] = useState('')

    let [message, setMessage] = useState('')
    let [alert, setAlert] = useState(false)
    let [severity, setServerity] = useState('success')

    let handleSubmit = async () => {
        var formData = new FormData()
    
        formData = {
            firstName : firstName,
            lastName : lastName,
            contactNumber : contact,
            email : email,
            email2 : email2,// student email
            address: address,
            password : password,
            userType:2
        }

        const res = await UserServices.createUser(formData)
        console.log("aaa",res)
        if (res.status < 300){
            setAlert(true)
            setMessage('User registration success')
            setServerity('success')
            handleRedirect()
        }else if (res.status > 399){
            setAlert(true)
            setMessage(res.data.msg)
            setServerity('error')
        }
    }

    let handleError = () => {
        alert('Submission error!')
        setAlert(true)
        setMessage('Error in submission')
        setServerity('error')
    }

    const handleRedirect = () => {
        setTimeout(() => {
            navigate ("/")
            console.log('timeout')
        }, 4000);
    }

    return ( 
        <Fragment>
            <ValidatorForm
                onSubmit={handleSubmit}
                onError={handleError}
            >
                <MainContainer>
                    <CustCard>
                        <Typography variant="h5">Parent Registration Form</Typography>
                        <Divider/>
                        <Grid container spacing={12} sx={{mt:10}}>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={4}
                                sx={{p:5}}
                            >
                                <SubTitle title="First Name" required/>
                                <TextValidator
                                    color='green'
                                    
                                    fullWidth 
                                    placeholder="Enter first name"
                                    name="firstName"
                                    InputLabelProps={{
                                        shrink: false,
                                    }}
                                    value={
                                        firstName
                                    }
                                    disabled={false}
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                    onChange={(e) => {
                                        setFirstName(e.target.value)
                                    }}
                                    validators={[
                                        'required',
                                        'matchRegexp:^[A-Za-z]{1,40}$',
                                    ]}
                                    errorMessages={[
                                        'This field is required',
                                        'Name is invalid',
                                    ]}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={4}
                                sx={{p:5}}
                            >
                                <SubTitle title="Last Name" required/>
                                <TextValidator
                                    color='green'
                                    fullWidth 
                                    placeholder="Enter last name"
                                    name="lastName"
                                    InputLabelProps={{
                                        shrink: false,
                                    }}
                                    value={
                                        lastName
                                    }
                                    disabled={false}
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                    onChange={(e) => {
                                        setLastName(e.target.value)
                                    }}
                                    validators={[
                                        'required',
                                        'matchRegexp:^[A-Za-z]{1,40}$',
                                    ]}
                                    errorMessages={[
                                        'This field is required',
                                        'Name is invalid',
                                    ]}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={4}
                                sx={{p:5}}
                            >
                                <SubTitle title="Contact Number" required/>
                                <TextValidator
                                    color='green'
                                    fullWidth 
                                    placeholder="Enter contact number"
                                    name="contact"
                                    InputLabelProps={{
                                        shrink: false,
                                    }}
                                    value={
                                        contact
                                    }
                                    disabled={false}
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                    onChange={(e) => {
                                        setContact(e.target.value)
                                    }}
                                    validators={[
                                        'required',
                                        'matchRegexp:^[0-9]{10}$',
                                    ]}
                                    errorMessages={[
                                        'This field is required',
                                        'Contact number is invalid',
                                    ]}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={4}
                                sx={{p:5}}
                            >
                                <SubTitle title="Address" required/>
                                <TextValidator
                                    color='green'
                                    fullWidth 
                                    placeholder="Enter address"
                                    name="accNumber"
                                    InputLabelProps={{
                                        shrink: false,
                                    }}
                                    value={
                                        address
                                    }
                                    disabled={false}
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                    onChange={(e) => {
                                        setAddress(e.target.value)
                                    }}
                                    validators={[
                                        'required',
                                        // 'matchRegexp:^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
                                    ]}
                                    errorMessages={[
                                        'This field is required',
                                        'NIC number is invalid',
                                    ]}
                                />
                            </Grid>
                            {/* <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={4}
                                sx={{p:5}}
                            >
                                <SubTitle title="Subject" required/>
                                <Autocomplete
                                    color='green'
                                    className="w-full"
                                    options={Levels}
                                    disabled={false}
                                    name="level"
                                    getOptionLabel={(option) => option.label}
                                    renderInput={(params) => (
                                        <TextValidator
                                            color='green'
                                            {...params}
                                            // className=" w-full"
                                            placeholder="Select examination level"
                                            value={subject}
                                            disabled={false}
                                            InputLabelProps={{shrink: false}}
                                            type="text"
                                            variant="outlined"
                                            size="small"
                                            validators={[
                                                'required',
                                            ]}
                                            errorMessages={[
                                                'This field is required',
                                            ]}
                                        />
                                    )}
                                    onChange={(e, newValue) => {
                                        if(newValue !== null){
                                            setSubject(newValue.value)
                                        }
                                    }}
                                    onInputChange={(e, newValue) => {
                                        if(newValue !== null){
                                            setSubject(newValue.value)
                                        }
                                    }}
                                />
                            </Grid> */}
                                    
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={4}
                                sx={{p:5}}
                            >
                                <SubTitle title="Password" required/>
                                <TextValidator
                                    color='green'
                                    fullWidth 
                                    placeholder="Enter password"
                                    name="password"
                                    InputLabelProps={{
                                        shrink: false,
                                    }}
                                    value={
                                        password
                                    }
                                    disabled={false}
                                    type="password"
                                    variant="outlined"
                                    size="small"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    validators={[
                                        'required',
                                        'matchRegexp:^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})',
                                    ]}
                                    errorMessages={[
                                        'This field is required',
                                        'Password is not strong enough',
                                    ]}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={4}
                                sx={{p:5}}
                            >
                                <SubTitle title="Confirm Password" required/>
                                <TextValidator
                                    color='green'
                                    fullWidth 
                                    placeholder="Enter password again"
                                    name="verifyPassword"
                                    InputLabelProps={{
                                        shrink: false,
                                    }}
                                    value={
                                        verifyPassword
                                    }
                                    disabled={false}
                                    type="password"
                                    variant="outlined"
                                    size="small"
                                    onChange={(e) => {
                                        setVerifyPassword(e.target.value)
                                    }}
                                    validators={[
                                        'required',
                                        // 'isPasswordMatch',
                                    ]}
                                    errorMessages={[
                                        'This field is required',
                                        // 'Password mismatch',
                                    ]}
                                />
                            </Grid>

                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            sx={{pt:10, display: 'flex', justifyContent: 'end' }}
                        >
                            <Button
                                progress={false}
                                type="cancel"
                                startIcon ={<CloseIcon/>}
                                variant="contained"
                                color="red"
                                // onClick={handleSubmit}
                            >
                                <span className="capitalize">
                                    Cancel
                                </span>
                            </Button>
                            
                            <Button
                                sx={{ml: 5}}
                                progress={false}
                                type="submit"
                                endIcon ={<SendIcon/>}
                                variant="contained"
                                color="green"
                                // onClick={handleSubmit}
                            >
                                <span className="capitalize">
                                    Submit
                                </span>
                            </Button>
                            
                        </Grid>
                        </Grid>
                    </CustCard>
                </MainContainer>
            </ValidatorForm>


            <CustSnackbar
                open={alert}
                onClose={() => {
                    setAlert(false)
                }}
                message={message}
                autoHideDuration={3000}
                severity={severity}
                elevation={2}
                variant="filled"
            ></CustSnackbar>
        </Fragment>
    );
}

export default RegisterStudent;