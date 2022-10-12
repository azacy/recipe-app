import profileImage from "../../images/R.jpg";
import emailImage from "../../images/email.png";
import passwordImage from "../../images/paswod.png"
import usernameImage from "../../images/username.png";
import HomePage from "../homePage/homepage";

import './signup.css'

export const Signup = () => {
  return (
    <div className='main'>
      <div className='sub-main'>
        <div>
          <div className='imgs'>
            <div className='container-image'>
              <img src={profileImage} alt="profile" className="profile" />

            </div>

          </div>
          <div>
            <h1>SignUp</h1>


            <img src={emailImage} alt="email" className="email" />
            <input type="text" placeholder="email" className="name" />
          </div>


          <div>
            <img src={usernameImage} alt="username" className="email" />
            <input type="text" placeholder="username" className="name" />
          </div>

          <div className="second-input">
            <img src={passwordImage} alt="password" className="email" />
            <input type="password" placeholder="password" className="name" />
          </div>

          <div className="third-input">
            {/* <img src ={passwordImage} alt="password" className='email'/> */}
            <inpit type="password" placeholder="comfirm password" className="name" />
          </div>

          <div className="Sign Up!">
            <button>SignUp</button>
          </div>
        </div>
      </div>
    </div>

  )
}