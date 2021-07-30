import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import logo from '../Assets/images/logo.png'






const useStyles = makeStyles({
    root: {
        marginTop: 20,
    },
    button: {
        borderRadius: '0px 29px 29px 29px',
        background: '#4B70D6',
        color: '#FFFFFF'

    },
    papper: {
        position: "absolute",
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: '10px 0px 5px',
        padding: '2px, 4px, 3px'
    }
})

const Header = () => {

    const [ setShow] = React.useState(false)
    const classes = useStyles()

   

    return (
        <React.Fragment>
            <div className="container d-flex justify-content-between">
                <div className="mt-3">
                    <img src={logo} alt="" />
                </div>

                <div className="mt-3">
                    <Button variant='contained' className={classes.button} onClick={() => setShow(true)}>
                        Add a new task
                    </Button>
                </div>



            </div>


        </React.Fragment>




    );
};

export default Header;