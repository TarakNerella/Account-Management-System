import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
return (
<div style={{ textAlign: "center" , paddingTop:"50px"}}>
    <h2>Account Management System</h2>
    <h5>Welcome..!</h5>
        <div style={{ paddingTop: "100px" }}>
            <Link to="/manager"><button type="button" class="btn btn-info">Manager</button></Link>&nbsp;&nbsp;
            <Link to="/customer"><button type="button" class="btn btn-info">Customer</button></Link>
    </div>
</div>
);
};
export default Home;