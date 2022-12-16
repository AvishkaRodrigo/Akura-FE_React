import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import MainContainerResponsive from "../../components/MainContainerResponsive";
import InstructorServices from "../../services/InstructorServices";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { MagicSpinner, } from "react-spinners-kit";
import MainContainer from "../../components/MainContainer";


const GetAllInstructors = () => {

    const [rows, setRows] = useState(undefined);
    const [loaded, setLoaded] = useState(false);
    let arr = rows || []

    useEffect(()=> {
        const getData = async () => {
            setLoaded(false)
            const res = await InstructorServices.getAllInstructorsToAdminView() 
            if(res){
                if(res){
                    setTimeout(() => {
                        setRows(res.data)
                        setLoaded(true)
                    }, 1000);
                }
            }
            console.log("all instructors",res.data)
        }
        getData()
    },[])

    const columns = [
        { 
            field: 'ID', 
            headerName: 'Instructor ID', 
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
            field: 'email', 
            headerName: 'Email', 
            width : 230
        },
        { 
            field: 'subject', 
            headerName: 'Subject',
            width : 150 
        },
        { 
            field: 'accNumber', 
            headerName: 'Account Number', 
            width : 150
        },
        { 
            field: 'nic', 
            headerName: 'NIC Number',
            width : 150
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
 
export default GetAllInstructors;