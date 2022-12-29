import {Component} from 'react'
import {FaSmile} from 'react-icons/fa'
import {RiGitRepositoryLine} from 'react-icons/ri'
import {MdOndemandVideo} from 'react-icons/md'
import {HiUsers} from 'react-icons/hi'
import Header from './Header'
import Form from './Form'
import './index.css'

const courselist = [
  {
    title: 'Registered Users',
    count: '249,022',
    icon: 'FaSmile',
  },
  {
    title: 'Courses Enrolled',
    count: '65,171',
    icon: 'RiGitRepositoryLine',
  },
  {
    title: 'Minutes Watched',
    count: '2,090,935,459',
    icon: 'MdOndemandVideo',
  },
  {
    title: 'Faculty',
    count: '8 Experts',
    icon: 'HiUsers',
  },
]

class IndigoLearn extends Component {
  state = {make: true}

  render() {
    return (
      <div>
        <Header />

        <div className="maincontainer">
          <div className="container1">
            <div className="container1sub">
              {' '}
              <div className="contentcontainer">
                <p className="maintag">Become ACCA in 18 months</p>
                <p>
                  Acquire globally recognized accountancy qualification, ACCA
                  (also called as Global CA), and get placed in top MNCs &
                  Big4s. Begin ACCA prep with 1FIN now.
                </p>
                <ul className="unorder">
                  {courselist.map(object => (
                    <li className="list">
                      <div>
                        <p className="p1">{object.title}</p>
                        <p className="p1">{object.count}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="buttoncontainer">
                  <button className="download" type="button">
                    Download Brochure
                  </button>
                  <img
                    className="tagimg"
                    src="https://res.cloudinary.com/dzligmi9w/image/upload/v1672216355/acca_silver_lp_logo_ok5x6p.png"
                    alt="img"
                  />
                </div>
              </div>
              <Form />
            </div>
          </div>

          <div>
            <h1 className="headings">Why Choose Us?</h1>
            <div className="cardunordermain">
              <ul className="cardunorder">
                <li className="card">
                  <img
                    className="cardimg"
                    src="https://res.cloudinary.com/dzligmi9w/image/upload/v1672217260/ca_concept_jzpftc.png"
                    alt="img"
                  />
                  <p>Expert Faculty</p>
                  <p>
                    Our Faculty are subject matter expertise with practical
                    experience. They believe in #StudentFirst principle
                  </p>
                </li>
                <li className="card">
                  <img
                    className="cardimg"
                    src="https://res.cloudinary.com/dzligmi9w/image/upload/v1672217266/ca_top_faculties_u0r1h7.png"
                    alt="img"
                  />
                  <p>Complete Success Package</p>
                  <p>
                    Leading Exam Prep Destination with Video classes, Live
                    sessions, Doubt resolution Forums, E-notes from Kaplan,
                    MCQs, Practice tests, Webinars.
                  </p>
                </li>
                <li className="card">
                  <img
                    className="cardimg"
                    src="https://res.cloudinary.com/dzligmi9w/image/upload/v1672217271/ca_unlimited_views_yv1gza.png"
                    alt="img"
                  />
                  <p>Placements</p>
                  <p>
                    Resume building workshops, mock interviews and placement
                    drives will help you impress the top employers and get the
                    dream job.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="subcardcontainer">
            {' '}
            <ul className="unorders">
              {courselist.map(object => (
                <li className="lists">
                  <div>
                    <p className="p1">{object.title}</p>
                    <p className="p1">{object.count}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="learnskills">
            {' '}
            <h1 className="headings">What will you Learn in ACCA?</h1>
            <div className="cardunordermain">
              <ul className="cardunorder">
                <li className="cards">
                  <p className="highlite">Knowledge Level</p>

                  <ul className="dataunorder">
                    <li className="li">Business and Technology (BT)</li>
                    <li className="li">Management Accounting (MA)</li>
                    <li className="li">Financial Accounting (FA)</li>
                  </ul>

                  <p className="highlite">3 papers</p>
                </li>
                <li className="cards">
                  <p className="highlite">Skill Level</p>

                  <ul className="dataunorder">
                    <li className="li">Corporate and Business Law (LW)</li>
                    <li className="li">Performance Management (PM)</li>
                    <li className="li">Taxation (TX)</li>
                    <li className="li">Financial Reporting (FR)</li>
                    <li className="li">Audit and Assurance (AA)</li>
                    <li className="li">Financial Management (FM)</li>
                  </ul>

                  <p className="highlite">6 papers</p>
                </li>
                <li className="cards">
                  <p className="highlite">Professional Level</p>

                  <ul className="dataunorder">
                    <li>Compulsory</li>
                    <li className="li">SBL - Strategic Business Leader</li>
                    <li className="li">SBR - Strategic Business Reporting</li>
                    <li>Two out of the following</li>
                    <li className="li">Advanced Financial Management (AFM)</li>
                    <li className="li">
                      Advanced Performance Management (APM)
                    </li>
                    <li className="li">Advanced Taxation (ATX)</li>
                    <li className="li">Advanced Audit and Assurance (AAA)</li>
                  </ul>

                  <p className="highlite">4 papers</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="placementcontainer">
            <div className="placement subcontainer">
              {' '}
              <h1 className="headings">100% Placement Assistance</h1>
              <div>
                <p className="headpara">Resume Building</p>
                <p className="datapara">
                  1FIN provides professional guidance to help you create an
                  effective resume to help you create a lasting impression.
                </p>
                <p className="headpara">Career Counselling</p>
                <p className="datapara">
                  We provide career counselling to conducting mock interviews
                  and aptitude tests – we will assist you at every step, all the
                  way, we make you job ready
                </p>
                <p className="headpara">Jobs</p>
                <p className="datapara">
                  We will give you an edge over others with our direct corporate
                  affiliations which will ensure that you are placed right.
                </p>
              </div>
            </div>
          </div>
          <div className="contentmaincontainer">
            <div className="bottomcontainer">
              <p className="maintag">
                Kick off your ACCA Prep journey with IndigoLearn
              </p>
              <p className="paras">
                Sign-in and get instant acccess to our FREE Courses
              </p>
              <img
                className="tagimg"
                src="https://res.cloudinary.com/dzligmi9w/image/upload/v1672216355/acca_silver_lp_logo_ok5x6p.png"
                alt="img"
              />
            </div>
            <Form />
          </div>
        </div>
      </div>
    )
  }
}
export default IndigoLearn
