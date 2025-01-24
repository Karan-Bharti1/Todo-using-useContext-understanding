import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <>
        <div className="container d-flex justify-content-between py-2">
            <h1>Todo</h1>
            <nav className="nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/pending">Pending</Link>
                <Link className="nav-link" to="/status">Status</Link>
            </nav>
        </div></>
    )
}
export default Nav;