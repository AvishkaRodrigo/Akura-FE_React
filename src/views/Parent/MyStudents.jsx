import {  Avatar, Button, Card, Grid, Typography } from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LocalStorageServices from "../../services/LocalStorageServices";
import MainContainer from "../../components/MainContainer";
import ParentServices from "../../services/ParentServices";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MyStudents = () => {
    let navigate; 
    
    const [studentList, setStudentList] = useState([])

    let user = useRef(null)
    useEffect(()=> {
        getStudents()
        removeMyStudent()
    },[])

    const getStudents = async () => {
        let res = await ParentServices.getParentStudents()
        setStudentList(res.data.myStuInfo)
        console.log(res)
    }

    const setMyStudent = (id) =>{
        ParentServices.setMyStudent(id)
        handleRedirect('/parent/dashboard')
        // console.log(id)
    }

    navigate = useNavigate();
    
    const handleRedirect  = (route) => {
        navigate(route)
        // setTimeout(() => {
        //     console.log("done")
        // },1)
    }
    
    const removeMyStudent = (id) =>{
        ParentServices.removeMyStudent(id)
        // console.log(id)
    }
    

    return ( 
        <Fragment>
            <MainContainer>
                <Grid
                    // container
                >
                    {
                        
                            studentList.map((items) => (
                                <Grid
                                    // sx={{display:'flex'}}
                                    item
                                    xs={8}
                                    sm={8}
                                    md={8}
                                    lg={8}
                                >
                                    <Card
                                        sx={{ m:10}}
                                        elevation={6}
                                        // sx={{p:10, display:'flex', alignItems:'center'}}
                                        style={{
                                            // backgroundImage: `linear-gradient(to bottom, rgb(100, 208, 194),rgb(100, 208, 194), rgb(0, 130, 114), rgb(0, 130, 114), rgb(0, 53, 46))`,
                                            // backgroundColor:'#52aa9f'
                                            display:'flex', 
                                            alignItems:'center',
                                            justifyContent:'space-around',
                                            padding:20,
                                            margin:50,
                                        }}
                                    >
                                        <Avatar/>
                                        <Typography variant="h4">
                                            {items.firstName + " " + items.lastName}
                                        </Typography>
                                        <Typography variant="h5">
                                            {items.email}
                                        </Typography>
                                        <Typography variant="h5">
                                            {items._id}
                                        </Typography>
                                        <Button
                                            endIcon={<ArrowForwardIcon/>}
                                            variant="contained"
                                            color="green"
                                            onClick={()=>{
                                                console.log(items._id)
                                                setMyStudent(items._id)
                                            }}
                                        >
                                            Proceed
                                        </Button>
                                    </Card>
                                </Grid>
                            ))
                        // :
                        // <Typography variant="h5">
                        //     No students to display...
                        // </Typography>
                    }
                    
                </Grid>
            </MainContainer>

        </Fragment>
    );
}

export default MyStudents;