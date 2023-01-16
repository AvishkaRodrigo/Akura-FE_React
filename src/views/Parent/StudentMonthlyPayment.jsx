import { Divider, Grid, Typography} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import LocalStorageServices from "../../services/LocalStorageServices";
import MainContainer from "../../components/MainContainer";
// import ParentServices from "../../services/ParentServices";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ClassServices from "../../services/ClassServices";
import moment from "moment";
import { MagicSpinner } from "react-spinners-kit";
import Table from "../../components/CustTable";
import CustCard from "../../components/CustCard";
import { useParams } from "react-router-dom";

const StudentMonthlyPayment = () => {
    let navigate; 

    let {classId} = useParams()
    let [studentId, setStudentId] = useState(null)
    let [paymentDetails, setPaymentDetails] = useState()
    let [classDetails, setClassDetails] = useState()
    let [loaded, setLoaded] = useState(false)
    let arr = paymentDetails || []

    useEffect(()=> {
        setStudentId(localStorage.getItem('myStudent').replace(/"|'/g,''))
        getMonthlyPaymentsOfStudent()
    },[])

    const getMonthlyPaymentsOfStudent = async () => {
        setLoaded(false)
        console.log("details",classId,studentId)
        let res = await ClassServices.getMonthlyPaymentsOfStudent(classId,studentId)
        setClassDetails(res.data.classDetails)
        setPaymentDetails(res.data.payments)
        console.log(res)
        setLoaded(true)
    }

    const columns = [
        { 
            accessorKey: 'month', 
            header: 'Month', 
            width : 130,
        },
        { 
            accessorKey: 'createdAt', 
            header: 'Payment Date', 
            width : 130,
            Cell: ({ cell }) => (
                <div style={{display:'flex', justifyContent:'center'}}>
                    {moment(cell).format('yyyy/MM/DD')}
                </div>
            ),
        },
        { 
            accessorKey: 'Amount', 
            header: 'Amount', 
            width : 130,
        },
        { 
            accessorKey: 'Type', 
            header: 'Payment method', 
            width : 130,
        },
    ]

    return ( 
        <Fragment>
            <MainContainer>
                <Grid
                    // container
                >
                    <CustCard>
                        <Typography variant="h5">Monthly Payment</Typography>
                        {/* <Typography variant="h5">{classDetails}</Typography> */}
                        <Divider/>
                        <Grid
                            sx={{p:10}}
                        >
                            {loaded ?
                                (<Table
                                    data={arr}
                                    columns={columns}
                                    // pageSize={5}
                                    // color="green"
                                    // rowsPerPageOptions={[5]}
                                    // getRowId={(rows)=>rows._id}
                                />)
                            :
                                <Grid style={{display:'flex',alignItems:'center', position:"absolute", flexDirection:'row', textAlign:'center', flexWrap:'wrap'  }}
                                    sx={{mt:50, ml:250}}
                                >
                                    <MagicSpinner size={200} color="#008272" loading={true} />
                                </Grid>
                            }   
                        </Grid>

                    </CustCard>               
                </Grid>
            </MainContainer>

        </Fragment>
    );
}

export default StudentMonthlyPayment;