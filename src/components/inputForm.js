import React from 'react';



const inputForm = (props) => {

    return (
        <div className='container card mt-5 p-5'>
            <form class="row g-3" onSubmit={props.handleSubmitHandler}>
                <div class="col-md-6">
                    <label htmlfor="inputEmail4" class="form-label">Description</label>
                    <input type="text" class="form-control"
                        id="inputEmail4"
                        placeholder="description"
                        name="description"
                        value={props.values.description}
                        onChange={props.handleInputChangehandler}
                    />
                </div>
                <div class="col-md-6">
                    <label htmlfor="inputPassword4" class="form-label">price</label>
                    <input type="text"
                     class="form-control" 
                     id="inputPassword4"
                      placeholder="price"
                      name="price"
                      value={props.values.price}
                      onChange={props.handleInputChangehandler}
                       />
                </div>
                <div class="col-12">
                    <label htmlfor="inputAddress" class="form-label">Assign to</label>
                    <input type="text" 
                    class="form-control"
                     id="inputAddress" 
                     placeholder="Asign to"
                     name="asign"
                     value={props.values.asign}
                     onChange={props.handleInputChangehandler}
                     />
                </div>
                <div class="col-12">
                    <label htmlfor="inputAddress2" class="form-label">verification</label>
                    <input type="text" 
                    class="form-control"
                     id="inputAddress2" 
                     placeholder="verifcation"
                     name="verification"
                     value={props.values.verification}
                     onChange={props.handleInputChangehandler}
                     />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
};

export default inputForm;