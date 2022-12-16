import { Autocomplete, Button, Card, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Grades, Levels } from "../../appconst";
import CustCard from "../../components/CustCard";
import MainContainer from "../../components/MainContainer";
import SubTitle from "../../components/SubTitle";
import CustSnackbar from "../../components/CustSnackbar";
import coverImage from '../../assets/loginImg.jpg'

import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MainContainerResponsive from "../../components/MainContainerResponsive";
import { Link } from "react-router-dom";


const StudentDashboard = () => {

    const arr = [
        {
            name : 'Ravi Rodrigo',
            subject : "IT",
            grade: '7',
            time: '4.00 PM',
            day: 'Friday'
        },
        {
            name : 'Shyama Rodrigo',
            subject : "English",
            grade: '6',
            time: '2.00 PM',
            day: 'Monday'
        },
        {
            name : 'Harshaka Perera',
            subject : "Science",
            grade: '6',
            time: '4.00 PM',
            day: 'Wednesday'
        },
        {
            name : 'Thilakasiri Rodrigo',
            subject : "Mathematics",
            grade: '6',
            time: '4.00 PM',
            day: 'Wednesday'
        },
        {
            name : 'Ravi Rodrigo',
            subject : "IT",
            grade: '7',
            time: '4.00 PM',
            day: 'Friday'
        },
        {
            name : 'Shyama Rodrigo',
            subject : "English",
            grade: '6',
            time: '2.00 PM',
            day: 'Monday'
        },
        {
            name : 'Harshaka Gunarathne',
            subject : "Science",
            grade: '6',
            time: '4.00 PM',
            day: 'Wednesday'
        },
        {
            name : 'Thilakasiri Rodrigo',
            subject : "Mathematics",
            grade: '6',
            time: '4.00 PM',
            day: 'Wednesday'
        },
    ]

    

    return ( 
        <Fragment>
            <MainContainerResponsive>
                <Card
                    sx={{mx:10, p:10, display:'flex', justifyContent:'center', backgroundColor: '#52aa9f'}}
                >
                    <Typography
                        variant="h5"
                    >
                        My Classes
                    </Typography>
                </Card>
                <Grid
                    container
                >

                    {arr.map((items) => (
                        <Grid
                            sx={{display:'flex'}}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                        >
                            <Card
                                sx={{ m:10}}
                                elevation={6}
                            >
                                <img
                                    src={coverImage}
                                    alt='asd'
                                    height='200px'
                                    width='500px'
                                />
                                <Grid
                                    sx={{p:'10px'}}
                                >
                                    <Typography variant='h5' >{items.name}</Typography>
                                    <Grid
                                        sx={{display:'flex', justifyContent:'space-around', pt:'10px'}}
                                    >
                                        <Typography variant='h6'>{items.subject}</Typography>
                                        {/* <Typography variant='h6'>Grade{items.grade}</Typography> */}
                                    </Grid>
                                    <Typography></Typography>
                                </Grid>
                                <Grid
                                    sx={{mt:3,display:'flex', justifyContent:'center', pt:'10px' }}
                                >
                                    <Grid
                                        xs={12}
                                        sx={{display:'flex', justifyContent:'center', border:1, borderTopLeftRadius:'4px', borderBottomLeftRadius:'4px', p:5}}
                                    >
                                        <AccessAlarmIcon/>
                                        <Typography sx={{pl:4}} variant='button'>{items.time}</Typography>
                                    </Grid>
                                    <Grid
                                        xs={12}
                                        sx={{display:'flex', justifyContent:'center', border:1, borderTopRightRadius:'4px', borderBottomRightRadius:'4px', p:5}}
                                    >
                                        <CalendarMonthIcon/>
                                        <Typography sx={{pl:4}} variant='button'>{items.day}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    sx={{p:10, display:'flex', justifyContent:'center'}}
                                >
                                    <Link 
                                        to='/class/dashboard'
                                        style={{textDecoration:'none'}}
                                    >
                                        Show more...
                                    </Link>
                                </Grid>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </MainContainerResponsive>
        </Fragment>
    );
}

export default StudentDashboard;