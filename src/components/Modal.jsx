// import React, { useEffect, useState } from 'react';

// import { makeStyles } from '@material-ui/core/styles';

// import firebaseDb from "../firebase"

// const useStyles = makeStyles({
//     root: {
//         marginTop: 20,
//     },
//     button: {
//         borderRadius: '0px 29px 29px 29px',
//         background: '#4B70D6',
//         color: '#FFFFFF'

//     },
//     modal: {
//         position: "fixed",
//         left: 0,
//         right: 0,
//         height: "100%",
//         bottom: 0,
//         backgroundColor: 'rgba(0,0,0, 0.5)',
//         display: "flex",
//         alignItems: 'center',
//         justifyContent: 'center',
//         border: '2px solid #000',
//         boxShadow: '10px 0px 5px',
//         padding: '2px, 4px, 3px'
//     }
// })

// const Modal = (props) => {

   

//     const addOrEdit = obj => {
//         firebaseDb.child('user-info').push(
//             obj,
//             err => {
//                 if(err)
//                 console.log(err)
//             }
// )
//     }


//     // const [values, setValues] = useState(innitialFormValue)

//     const handleInputChangehandler = e => {
//         const { name, value } = e.target
//         setValues({
//             ...values,
//             [name]: value
//         })

//         setValues("")
//     }


//     const handleSubmitHandler = e => {
//         e.preventDefault();
        
//         console.log(...values)
//     }

//     const classes = useStyles()

//     if (!props.show) {
//         return null
//     }

//     return (
//         <div className="modal" tabindex="-1" className={classes.modal} onClick={props.onClose}>
//             <div class="modal-dialog">
//                 <form action="" onSubmit={handleSubmitHandler}>
//                     <div class="modal-content" style={{ width: '700px' }} onClick={e => e.stopPropagation()}>
//                         <div class="modal-header">
//                             <h5 class="modal-title">Add new users</h5>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.onClose}></button>
//                         </div>
//                         <div class="modal-body">
//                             <div class="mb-3">
//                                 <label htmlfor="exampleFormControlInput1" class="form-label">Description</label>
//                                 <input type="text" class="form-control"
//                                     name="discription" id="exampleFormControlInput1"
//                                     placeholder="Discription" value={values.discription}
//                                     onChange={handleInputChangehandler}
//                                 />
//                             </div>

//                             <div class="mb-3">
//                                 <label htmlfor="exampleFormControlInput2" class="form-label">price</label>
//                                 <input type="number" class="form-control"
//                                     name="price" id="exampleFormControlInput2"
//                                     placeholder="price" value={values.price}
//                                     onChange={handleInputChangehandler}
//                                 />
//                             </div>

//                             <div class="mb-3">
//                                 <label htmlfor="exampleFormControlInput3" class="form-label">Asign To</label>
//                                 <input type="text" class="form-control"
//                                     name="asign" id="exampleFormControlInput3"
//                                     placeholder="Asign to" value={values.asign}
//                                     onChange={handleInputChangehandler}
//                                 />
//                             </div>

//                             <div class="mb-3">
//                                 <label htmlfor="exampleFormControlInput4" class="form-label">Verifcation</label>
//                                 <input type="text" class="form-control"
//                                     name="verification"
//                                     id="exampleFormControlInput4"
//                                     placeholder="verification" value={values.verification}
//                                     onChange={handleInputChangehandler}
//                                 />
//                             </div>


//                         </div>
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={props.onClose}>Close</button>
//                             <button type="button" class="btn btn-primary">Save changes</button>
//                         </div>
//                     </div>

//                 </form>

//             </div>
//         </div>
//     );
// };

// export default Modal;