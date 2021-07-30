import React, { useEffect, useState } from 'react';
import '@fontsource/roboto';
import { makeStyles } from "@material-ui/core/styles"
import { Button, } from '@material-ui/core';
import firebaseDb from '../firebase'




const useStyles = makeStyles({
    root: {

    },
    mainsection: {
        marginTop: 10
    },
    tag: {
        width: 200,
        height: 861,
        background: '#FFFFFF',
        opacity: 1
    },
    tagTitle: {
        marginLeft: '20px',
        width: '43px',
        height: '26px',
        textAlign: "left",
        font: 'normal normal bold 20px/34px Roboto',
        letterSpacing: '0px',
        color: '#6F7070',
        opacity: 1
    },
    tagTitleTwo: {
        marginLeft: '20px',
        width: '156px',
        height: '26px',
        textAlign: "left",
        font: 'normal normal bold 20px/34px Roboto',
        letterSpacing: '0px',
        color: '#6F7070',
        opacity: 1
    },
    link: {
        marginRight: '200px',
    },
    current: {
        height: '700px',
        maxWidth: "1300px",
        marginTop: 20,
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        opacity: 1
    },
    table: {

    }
})

const MainSection = (props) => {
    const [infObject, setInfoObject] = useState({})
    const [currentID, setCurrentID] = useState("")

    useEffect(()=> {
        if(currentID === '')
         props.setValues({
         ...props.innitialFormValue  
        })
        else
         props.setValues({
           ...infObject[currentID]
        })
              
    },[currentID, infObject])


    

    useEffect(() => {
        firebaseDb.child('user-info').on('value', snapshot => {
            if (snapshot.val() !== null)
                setInfoObject({
                    ...snapshot.val()
                })
        })

    }, [])


    const classes = useStyles()
    return (
        <div className="container mt-3">
            <div>
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div className={classes.link}>
                        <div>
                            <Button>Active Task (2)</Button>
                            <Button>Completed (1)</Button>
                            <Button>Archived (6)</Button>
                            <Button>Closed (0)</Button>
                            <Button style={{ float: "right", marginRight: '-210px' }}>Next/Preview</Button>
                        </div>
                    </div>
                    <div>
                        CURRENT
                    </div>
                    <div className={classes.current}>
                        <div className="table-responsive table-responsive-md table-responsive-sm">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Description</th>
                                        <th scope="col">price</th>
                                        <th scope="col">Asgin to</th>
                                        <th scope="col">verification</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Object.keys(infObject).map(id => {
                                            return (
                                                <tr key={id}>
                                                    <td>{infObject[id].description}</td>
                                                    <td>{infObject[id].price}</td>
                                                    <td>{infObject[id].asign}</td>
                                                    <td>{infObject[id].verification}</td>
                                                    <td>
                                                        <a className="btn text-primary" onClick={()=> setCurrentID(id)}>
                                                            <i class="fas fa-pencil-alt"></i>
                                                        </a>
                                                        <a className="btn text-danger">
                                                            <i class="fas fa-trash-alt"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>


                        </div>

                    </div>



                </div>
            </div>
        </div>

    );
};

export default MainSection;