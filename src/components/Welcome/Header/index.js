import {FaUserCircle} from 'react-icons/fa'
import {VscThreeBars} from 'react-icons/vsc'

import './index.css'

const Header = () => (
  <nav className="nav">
    <div className="header">
      <button type="button" className="h1 logo">
        <VscThreeBars className="threeline" />
        IndigoLearn
      </button>
      <div className="headercontent">
        <button type="button" className="h1">
          BUY COURSES
        </button>
        <button type="button" className="h1">
          BUY BOOKS
        </button>
        <button type="button" className="h1">
          PROGRAMS
        </button>
        <button type="button" className="h1">
          FREE RESOURCES
        </button>
      </div>
      <button className="logout" type="button">
        {' '}
        <FaUserCircle className="profile" />
        Log In/Sign up{' '}
      </button>
    </div>
  </nav>
)
export default Header
