import React, {Fragment, useState} from 'react'
import {Fab, Grid, TextareaAutosize, TextField} from '@mui/material'
import {ArrowBack} from '@mui/icons-material'
import { Link } from "react-router-dom";
import {QrReader} from 'react-qr-reader'

function QRscanner() {

    const [qrscan, setQrscan] = useState('No result');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        }
    }
    const handleError = err => {
    console.error(err)
    }

    return (
      <Fragment>
            
            <center>
                <Grid style={{width: '30%'}}>
                    <QrReader
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{  width: '50%' }}
                    />
                </Grid>
                <TextField
                    value={qrscan}
                    color='green'
                />
            </center>
      </Fragment>
    );
  }
  
  export default QRscanner;
  