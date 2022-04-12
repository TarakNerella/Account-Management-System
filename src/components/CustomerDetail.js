import React from "react";

const CustomerDetail = () => {
	return (
		<div class="container">
            <div class="row">
                <div class="col" style={{ paddingTop:'50px' }}>
                    <h4>Customer Details</h4>
                    <table class="table" style={{width:'400px'}}>
                        <tbody>
                            <tr>
                                <th scope="col">Name</th>
                                <td scope="col">Tarak</td>
                            </tr>
                            <tr>
                                <th scope="col">Email</th>
                                <td scope="col">abc@gmail.com</td>
                            </tr>
                            <tr>
                                <th scope="col">PAN</th>
                                <td scope="col">ABCDE1234F</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col">
                    2 of 2
                </div>
            </div>
        </div>
	);
};
export default CustomerDetail;