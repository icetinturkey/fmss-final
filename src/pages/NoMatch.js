import {Link} from "react-router-dom";

function NoMatch() {
    return(
        <div className="text-center dark:text-slate-50 my-20">Page Not Found !<br/><br/><Link className="btn-blue" to="/">Go back to mainpage</Link></div>
    )
}
export default NoMatch;