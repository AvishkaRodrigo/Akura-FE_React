import { Autocomplete, Button, Card, CardHeader, CardMedia, Divider, Grid, Typography } from "@mui/material";
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


const Notification = () => {

    const arr = [
        {
            header: 'පන්ති නොපැවැත්වේ',
            subject:'සිංහල',
            message: "නොවැළැක්විය හැකි හේතුවක් මත මෙම සතියේ(2022-12-07) පන්ති නොපැවැත්වේ. ඔබගේ ලබාදුන් ගෙදර වැඩ සමඟ මෙම සතිය සඳහා LMS හි upload කර ඇති tute එකද සම්පූර්ණ කර ලබන සතියේ රැගෙන එන්න.",
            timeStamp: '2022/12/01 10.00am',
        },
        {
            header: 'Leave the class early',
            subject:'Science',
            message: 'Student leave the class early',
            timeStamp: '2022/12/01 10.00am',
        },
        
    ]

    return ( 
        <Fragment>
            <MainContainer>
                <Card
                    sx={{p: 10, m:5, mx:10}}
                    elevation={6} 
                    className="px-main-card py-3" 
                    style={{backgroundColor:'#52aa9f'}}
                >
                    <Typography variant='h5'>Notifications</Typography>
                </Card>

                    <Grid
                        container
                    >
                        {arr.map((items) => (
                            <Grid
                                // sx={{display:'flex'}}
                                item
                                xs={12}
                                // sm={6}
                                // md={4}
                                lg={12}
                                >
                                <CustCard>
                                    <Typography variant="h5" style={{color:'#008272'}}>{items.subject}</Typography>
                                    <Divider/>
                                    <Typography variant="button">{items.header}</Typography>
                                    <Grid>
                                        <Typography sx={{p:10}}>
                                            {items.message}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        sx={{display:'flex', justifyContent:'end'}}
                                    >
                                        <Typography variant="caption">
                                            {items.timeStamp}
                                        </Typography>
                                    </Grid>
                                </CustCard>
                            </Grid>
                        ))}
                    </Grid>
            </MainContainer>
        </Fragment>
    );
}

export default Notification;