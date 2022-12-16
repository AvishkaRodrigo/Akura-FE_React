import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import MainContainerResponsive from "../../components/MainContainerResponsive";
import InstructorServices from "../../services/InstructorServices";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import StudentServices from "../../services/StudentServices";
import moment from "moment";
import { MagicSpinner, } from "react-spinners-kit";
import MainContainer from "../../components/MainContainer";


const GetAllStudents = () => {

    const [rows, setRows] = useState(undefined);
    const [loaded, setLoaded] = useState(false);
    let arr = rows || []

    useEffect(()=> {
        const getData = async () => {
            setLoaded(false)
            const res = await StudentServices.getAllStudentsToAdminView() 
            if(res){
                setTimeout(() => {
                    setRows(res.data)
                    setLoaded(true)
                }, 2000);
            }
            console.log("all students",res.data)
        }
        getData()
    },[])

    const columns = [
        { 
            field: 'ID', 
            headerName: 'Student ID', 
            width : 130,
        },
        { 
            field: 'firstName', 
            headerName: 'First Name', 
            width : 150
        },
        { 
            field: 'lastName', 
            headerName: 'lastName',
            width : 150
        },
        { 
            field: 'contactNumber', 
            headerName: 'Contact Number', 
            width : 150
        },
        { 
            field: 'gender', 
            headerName: 'Gender', 
            width : 150
        },
        { 
            field: 'email', 
            headerName: 'Email', 
            width : 230
        },
        { 
            field: 'level', 
            headerName: 'Level',
            width : 150 
        },
        { 
            field: 'year', 
            headerName: 'Examination Year', 
            width : 150,
            options: {
                customBodyRender : value => {
                    return (
                        <div style={{diaplay:'none'}}>
                            adas
                            {/* {moment(value).format('yyyy')} */}
                            {/* (value) */}
                        </div>
                    )
                }
            },
        },
    ];
    

    

    
    return ( 
        <Fragment>
            <MainContainer>
                <div style={{ height: 400, width: '100%', background: '#fff' }}>
                    {loaded ?
                        (<DataGrid
                            rows={arr}
                            columns={columns}
                            pageSize={5}
                            color="green"
                            rowsPerPageOptions={[5]}
                            getRowId={(rows)=>rows._id}
                        />)

                        
                        : 
                        <Grid style={{display:'flex',alignItems:'center', position:"absolute", flexDirection:'row', textAlign:'center', flexWrap:'wrap'  }}
                            sx={{mt:50, ml:250}}
                        >
                            <MagicSpinner size={200} color="#008272" loading={true} />
                        </Grid>
                    }
                </div>
            </MainContainer>
        </Fragment>
    );
}
 
export default GetAllStudents;