import React, { useState } from 'react';
import './App.css'
import InputForm from "./components/inputForm"
import Layout from './components/Layout';
import Search from './components/Search';
import MainSection from "./components/MainSection"
import firebaseDb from "./firebase"



function App(props) {

  const innitialFormValue = {
    description: "",
    price: "",
    asign: "",
    verification: ""
  }

  const [values, setValues] = useState(innitialFormValue)

  
  const handleInputChangehandler = e => {
    const { value, name} = e.target
    setValues({
      ...values,
      [name]: value
    }) 
  }

  const addOrEdit = obj => {
    firebaseDb.child('user-info').push(
        obj,
        err => {
            if(err)
            console.log(err);
            setValues('')
        }
)
}

 

 console.log(values)


  const handleSubmitHandler = e => {
    e.preventDefault();
    console.log(values)
    addOrEdit(values)

    setValues('')
  } 



  return (
    <div className="App">
      <Layout>
        <Search />
        <InputForm
         handleInputChangehandler={handleInputChangehandler}
         values={values}
         handleSubmitHandler={handleSubmitHandler}/>
        <MainSection 
         addOrEdit={ addOrEdit}
          setValues={setValues} 
          values={values}
          
            />
      </Layout>

    </div>

  );
}

export default App;
