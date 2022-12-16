import { Grid } from "@mui/material";
import React, { Fragment, useState, Component } from "react";

class MainContainer extends Component {
    static propTypes = {
        children: Node,
    };

    static defaultProps = {
        title: null,

    };



    render() {
        const {
            children
        } = this.props;


        return (

            <Grid 
                sx={{py:8, px:20}}
                className="pb-8 pt-8 px-main-8 " 
                style={{  
                    // backgroundImage: "url(" + "https://images.pexels.com/photos/808510/pexels-photo-808510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" + ")",
                    // backgroundImage: '/assets/home-bg-black.png',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    background: "linear-gradient(320deg,rgba(213,226,237,1),rgba(213,226,237,1))",
                    height: '90vh',
                }}
            >
                {children}
            </Grid>


        );
    }
}

export default MainContainer;