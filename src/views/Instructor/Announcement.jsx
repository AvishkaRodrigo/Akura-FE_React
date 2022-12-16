import { Autocomplete, Button, Card, Grid, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Grades, Levels } from "../../appconst";
import CustCard from "../../components/CustCard";
import MainContainer from "../../components/MainContainer";
import SubTitle from "../../components/SubTitle";
import CustSnackbar from "../../components/CustSnackbar";

import CampaignIcon from '@mui/icons-material/Campaign';
import CloseIcon from '@mui/icons-material/Close';


const Announcement = () => {

    let [notification, setNotification] = useState('')
    let [header, setHeader] = useState('')
    let [classes, setClasses] = useState('')


    let [message, setMessage] = useState('')
    let [alert, setAlert] = useState(false)
    let [severity, setServerity] = useState('success')

    
    let handleSubmit = () => {
        console.log('success')
    }
    
    let handleError = () => {
        console.log('error')
    }

    return ( 
        <Fragment>
            <MainContainer>
                <Card
                    sx={{p: 10, m:5, mx:10}}
                    elevation={6} 
                    className="px-main-card py-3" 
                    style={{backgroundColor:'#52aa9f'}}
                >
                    <Typography variant='h5'>Post Announcement</Typography>
                </Card>
                <CustCard>
                    <ValidatorForm
                        onSubmit={handleSubmit}
                        onError={handleError}
                    >
                        <Grid
                            container
                        >
                            
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={6}
                                sx={{p:5}}
                            >
                                <SubTitle title="Header" required/>
                                <TextValidator
                                    color='green'
                                    fullWidth 
                                    placeholder="Enter notification header"
                                    name="header"
                                    InputLabelProps={{
                                        shrink: false,
                                    }}
                                    value={
                                        header
                                    }
                                    disabled={false}
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                    onChange={(e) => {
                                        setHeader(e.target.value)
                                    }}
                                    validators={[
                                        'required',
                                    ]}
                                    errorMessages={[
                                        'This field is required',
                                    ]}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                lg={6}
                                sx={{p:5}}
                            >
                                <SubTitle title="Classes" required/>
                                <Autocomplete
                                    color='green'
                                    // todo - pick teachers classes form DB and set them for options below
                                    options={Grades}
                                    groupBy={(option)=>option.level}
                                    disabled={false}
                                    name="classes"
                                    value={classes}
                                    getOptionLabel={(option) => option.label}
                                    renderInput={(params) => (
                                        <TextValidator
                                            color='green'
                                            {...params}
                                            // className=" w-full"
                                            placeholder="Select classes which you wants to notify"
                                            value={classes}
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
                                            setClasses(newValue.value)
                                        }
                                    }}
                                    onInputChange={(e, newValue) => {
                                        if(newValue !== null){
                                            setClasses(newValue.value)
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                sx={{p:5}}
                            >
                                <SubTitle title="Message" required/>
                                <TextValidator
                                    color='green'
                                    fullWidth
                                    multiline
                                    rows={10} 
                                    placeholder="Enter notification header"
                                    name="notification"
                                    InputLabelProps={{
                                        shrink: false,
                                    }}
                                    value={
                                        notification
                                    }
                                    disabled={false}
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                    onChange={(e) => {
                                        setNotification(e.target.value)
                                    }}
                                    validators={[
                                        'required',
                                    ]}
                                    errorMessages={[
                                        'This field is required',
                                    ]}
                                />
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                sx={{pt:10, pr:5,display:'flex', justifyContent: 'end'}}
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
                                    endIcon ={<CampaignIcon/>}
                                    variant="contained"
                                    color="green"
                                    // onClick={handleSubmit}
                                >
                                    <span className="capitalize">
                                        Send
                                    </span>
                                </Button>
                            </Grid>
                        </Grid>
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
                </CustCard>
            </MainContainer>
        </Fragment>
    );
}

export default Announcement;