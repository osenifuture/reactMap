
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useState } from "react";

const Navigation = () => {
  const [isMobile, setisMobile] = useState(false)
  const handleMenu = () => {
    setisMobile(!isMobile)
  }

  const closeMenu = () => {
    setisMobile(false)
  }


    return(
        <Fragment>
            <div className="nav-container">
                <div className="logo">
                    <Link to='/' className="logo-2">WestyCode</Link>
                </div>

                <div className={isMobile ? "mobile-link" : "navs" } onClick={closeMenu}>
                <Link to='/' className="link">HOME</Link>
                <Link to='/About' className="link">ABOUT</Link>
                <Link to="/Service" className="link">SERVICE</Link>
                <Link to='/New' className="link">NEWS</Link>
                </div>
                  <div className="mobile-menu" onClick={handleMenu}>
                    {
                        isMobile ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>
                    }
                  </div>
            </div>
            <Outlet/>
        </Fragment>
    )

}

export default Navigation; 