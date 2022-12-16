import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Button, Card, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Grades, Levels } from "../../appconst";
import CustCard from "../../components/CustCard";
import MainContainer from "../../components/MainContainer";
import SubTitle from "../../components/SubTitle";
import CustSnackbar from "../../components/CustSnackbar";
import coverImage from '../../assets/loginImg.jpg'

import SendIcon from '@mui/icons-material/Send';
import moment from "moment";


import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventIcon from '@mui/icons-material/Event';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import InstructorServices from "../../services/InstructorServices";
import { useParams } from "react-router-dom";
import { useEffect } from "react";



const MyClasses = (props) => {

    const [myClasses,setMyClasses] = useState('')
    const {id} = useParams() 
    
    useEffect(()=> {
        const getClasses = async () => {
            const res = await InstructorServices.getClasses(id)
            setMyClasses(res.data)
            console.log(res.data)
        }
        getClasses()
    },[])


    return ( 
        <Fragment>
            <MainContainer>
                <Grid
                    container
                    spacing={30}
                    sx={{px:20}}
                >
                    {myClasses.length > 0 ? 
                    
                    (myClasses.map((items) => (
                        <Grid
                            sx={{display:'flex', justifyContent:'center'}}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={4}
                        >
                            <Card
                                sx={{
                                    // p:10,
                                    width:'100%',
                                    
                                    // backgroundColor: '#52aa9f'
                                }}
                                elevation={6}
                            >
                                <Card
                                    elevation={0}
                                    sx={{
                                        p:10,
                                        width:'100%',
                                        backgroundColor: '#52aa9f'
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                    >
                                        Grade {items.grade} ~ {items.classType}
                                    </Typography>
                                </Card>
                                <Grid
                                    sx={{display:'flex', justifyContent:''}}
                                    container
                                >
                                    <Grid
                                        sx={{display:'flex', justifyContent:'', pl:20, py:2}}
                                        item
                                        xs={12}
                                        sm={6}
                                        md={6}
                                        lg={6}
                                    >
                                        <AccessTimeIcon/>
                                        <Typography
                                            sx={{pl:10}}
                                        >
                                            {moment(items.startTime).format('HH:mm')} - {moment(items.endTime).format('HH:mm')}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        sx={{display:'flex', justifyContent:'', pl:20, py:2}}
                                        item
                                        xs={12}
                                        sm={6}
                                        md={6}
                                        lg={6}
                                    >
                                        <EventIcon/>
                                        <Typography
                                            sx={{pl:10}}
                                        >
                                            {items.classDate}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        sx={{display:'flex', justifyContent:'center', py:2}}
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                    >
                                        <CorporateFareIcon/>
                                        <Typography
                                            sx={{pl:10}}
                                        >
                                            Hall -{items.hall}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        sx={{display:'flex', justifyContent:'', py:2}}
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                    >
                                        <Typography
                                            sx={{pl:10}}
                                        >
                                            Admission - {items.admission}.00
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        sx={{display:'flex', justifyContent:'', py:2}}
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                    >
                                        <Typography
                                            sx={{pl:10}}
                                        >
                                            Class - {items.classFee}.00
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    )))
                    
                    
                    : null}

                </Grid>
            </MainContainer>
        </Fragment>
    );
}

export default MyClasses;