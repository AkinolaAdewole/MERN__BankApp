import { Link } from "react-router-dom";
const DashboardNav = () => {
  return (
    <>
      <div className="col-1 vh-100 sticky-top">
        <nav className="navbar  h-100 bg-info">
          <div className="container-fluid">
            <div className="navbar-nav  mx-auto">
              <Link className="nav-link text-success active" aria-current="page" to="/dashboard/">
                <i className="fa fa-home" aria-hidden="true"></i>
              </Link>
              <hr />
              <Link className="nav-link text-success" to="/dashboard/sendMoney">
                <i className="fa fa-send-o" aria-hidden="true"></i>
              </Link>
              <hr />
              <Link className="nav-link text-success" to="/dashboard/transactions">
                <i className="fa fa-money" aria-hidden="true"></i>
              </Link>
              <hr />
              <Link className="nav-link text-success" to="/dashboard/messages">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </Link>
              <hr />
              <Link className="nav-link text-success" to="/dashboard/user">
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
              </Link>
              <hr />
            </div>
          </div>
        </nav>
      </div>
      
    </>
  );
};

export default DashboardNav;
