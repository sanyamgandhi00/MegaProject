import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggler" data-toggle="open-navbar1">
                <span />
                <span />
                <span />
              </button>
              <a href="#">
                <h4>Block<span>CERT</span></h4>
              </a>
            </div>
            <div className="navbar-menu" id="open-navbar1">
              <ul className="navbar-nav">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li><a href="organizationLogin.html">Organization</a></li>
                <li className="navbar-dropdown">
                  <a href="studentLogin.html" className="dropdown-toggler" data-dropdown="my-dropdown-id">
                    Student
                  </a>
                </li>
                <li><a href="{% url 'profile' %}">About Us</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="inner-div">
          <div className="grid-container">
            <div className="item1">
              <a href="organizationLogin.html">ORGANIZATION &nbsp; <i className="fa fa-building" aria-hidden="true" /></a>
            </div>
            <div className="item2">
              <a href="studentLogin.html">STUDENT &nbsp;<i className="fa fa-user" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        {/* navbar script */}
      </div>

      </>
  );
}

export default App;
