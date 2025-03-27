import { Link } from "react-router-dom"

function Navbar(){

  return(<nav className="navbar navbar-expand-lg p-4 bg-warning bg-gradient mb-5">
    <div className="container-fluid">
      <a className="navbar-brand fs-1" href="#">MyFlix</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <Link className="nav-link fs-3  " aria-current="page" to="/Home">Home</Link>
          <Link className="nav-link  fs-3" to="/Dashboard">dashboard</Link>
          <a className="nav-link fs-3" href="/Table">about</a>

        </div>
      </div>
    </div>
    </nav>
    )


} 

export default Navbar