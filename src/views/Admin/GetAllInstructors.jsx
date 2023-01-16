import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import MainContainerResponsive from "../../components/MainContainerResponsive";
import InstructorServices from "../../services/InstructorServices";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { MagicSpinner, } from "react-spinners-kit";
import MainContainer from "../../components/MainContainer";
import Table from "../../components/CustTable";


const GetAllInstructors = () => {

    const [rows, setRows] = useState(undefined);
    const [loaded, setLoaded] = useState(false);
    let arr = rows || []

    useEffect(()=> {
        const getData = async () => {
            setLoaded(false)
            const res = await InstructorServices.getAllInstructors() 
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
            accessorKey: 'ID', 
            header: 'Instructor ID', 
            width : 130,
        },
        { 
            accessorKey: 'firstName', 
            header: 'First Name', 
            width : 150
        },
        { 
            accessorKey: 'lastName', 
            header: 'lastName',
            width : 150
        },
        { 
            accessorKey: 'contactNumber', 
            header: 'Contact Number', 
            width : 150
        },
        { 
            accessorKey: 'email', 
            header: 'Email', 
            width : 230
        },
        { 
            accessorKey: 'subject', 
            header: 'Subject',
            width : 150 
        },
        { 
            accessorKey: 'accNumber', 
            header: 'Account Number', 
            width : 150
        },
        { 
            accessorKey: 'nic', 
            header: 'NIC Number',
            width : 150
        },
        
    ];
    

    

    
    return ( 
        <Fragment>
            <MainContainer>
                <div style={{ height: 400, width: '100%', background: '#fff' }}>
                    {loaded ?
                        (<Table
                            data={arr}
                            columns={columns}
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