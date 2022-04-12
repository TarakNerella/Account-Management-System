import React from "react";

const AddCustomer = () => {
    return (
        <div>
            <form style={{ paddingLeft: '400px', paddingTop: '50px', width:'1000px' }}>
            <h3>Add Customer</h3>
            <div class="form-group">
                    <label for="exampleFormControlInput1">Applicant Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter name" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput2">Date of Birth</label>
                    <input type="date" class="form-control" id="exampleFormControlInput2" placeholder="Date of Birth" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput2">PAN Number</label>
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Enter PAN Number" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput4">Aadhar Number</label>
                    <input type="text" class="form-control" id="exampleFormControlInput4" placeholder="Enter Aadhar Number" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Postal Address</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">Add Customer</button>
            </form>
        </div>
        );
};

export default AddCustomer;