import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import search from '../svg/search.svg'



const useStyles = makeStyles({
    root: {

    },
    search: {
        paddingTop: 35,
       opacity: 1
},
form: {
    width: "50%",
    marginLeft: 7,
    paddingTop: 30,
    outline: 'none'
}
})

const Search = () => {
    const classes = useStyles()
    return (
        <div className="container" style={{
            marginTop: 20,
            left: 184,
            maxWidth: 1300,
            height: 97,
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            opacity: 1
        }}>
            <div className="d-flex">
                <div>
                    <img src={search} alt="" className={classes.search} />
                </div>
                <div className={classes.form}>
                 <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="search keyword"/>
                </div>
                
            </div>
        </div>
    );
};

export default Search;
