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
                            <tr>
                                <th scope="col">Account Type</th>
                                <td scope="col">Savings</td>
                            </tr>
                            <tr>
                                <th scope="col">Balance</th>
                                <td scope="col">1,00,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col" style={{ paddingTop: '50px' }}>
                    <h4>Account Details</h4>
                    <table class="table" style={{ width: '400px' }}>
                        <thead>
                            <tr>
                                <th scope="col">Account Type</th>
                                <th scope="col">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Savings</td>
                                <td>Rs.50,000</td>
                            </tr>
                            <tr>
                                <td>Home Loan</td>
                                <td>Rs.1,00,000</td>
                            </tr>
                            <tr>
                                <td>Bike Loan</td>
                                <td>Rs.70,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
	);
};
export default CustomerDetail;