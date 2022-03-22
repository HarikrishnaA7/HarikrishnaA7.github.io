import './App.css';
import Header from "./components/Header";
import Intro from './components/Intro';
import'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import secondimage from './assets/secondimage.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';


// import {AgGridReact} from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';
 
function App() {
  return (
    <div className="App">
        <style>
           @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');
        </style>
        <link rel="stylesheet" href="/w3.css"/>
        <meta name="viewport" content="width=divice-width, initial-scale=1"></meta>
        <Header/>
        <Intro/> 
        <div className="pannel">
        <div className="row">
          <div className="col-sm-4"> 2 years job<br/>experience</div>
          <div className="col-sm-4"> Project</div>
          <div className="col-sm-4"> support 24x7</div>
        </div>
        </div>
        <div className="Details">
          <div className="col-sm-6"> 
             <img className = "second-image" src={secondimage} alt="dimage"/>
          </div>
          <div className="col-sm-6" id="about">
            <div className="about-me">
            <h1>About Me</h1>
            <p className="my-intro">
            I am an energetic full stack developer with 3+ years experience in <br/> developing web application, creating APIs, maintaining database<br/> and integrating SMS gateways, Payment gateways.
            </p>
            <table>
            {/* <td>
                <tr></tr>
                <tr></tr>
                <tr></tr>
              </td> */}
              <td>
                <tr>Name</tr>
                <tr>Phone</tr>
                <tr>Email</tr>
              </td>
              <td>
                <tr><b>Harikrishna</b></tr>
                <tr><b>+91 8297529795</b></tr>
                <tr><b>hdeekonda@gmail.com</b></tr>
              </td>
             
            </table>
            <div>
            My interests <br/><br/>
            <table className="interests">
            
                <td>Cricket</td>
                <td>Chess</td>
                <td>music</td>
            </table>
            </div>
            </div>
            
          </div>
        </div>
        <div className="exp">
            <div className="exp-heading" style={{color : '#FFC300'}}>
              <h6>Why choose me?</h6><br/>
            </div>
            <div className="exp-heading2">
              <h2>My Expertice Area</h2>
           </div>
        <div className="experience">
            <div className="progres-1"> 
               <p>PHP</p>
               <div class="w3-light-grey w3-round">
                 <div class="w3-container w3-round w3-blue" style={{width : '40%'}}>80%</div>
                 </div><br/>
               <p>MySql</p>
               <div class="w3-light-grey w3-round">
                 <div class="w3-container w3-round w3-blue" style={{width : '40%'}}>85%</div>
               </div><br/>
               <p>Drupal 7</p>
               <div class="w3-light-grey w3-round">
                 <div class="w3-container w3-round w3-blue" style={{width : '40%'}}>80%</div>
               </div><br/>
            </div>
            <div className="progres-2" id="about">
            <p>Javascript</p>

            <div class="w3-light-grey w3-round">
              <div class="w3-container w3-round w3-blue" style={{width : '40%'}}>80%</div>
            </div><br/>
            <p>Ajax & jQuery</p>

            <div class="w3-light-grey w3-round">
              <div class="w3-container w3-round w3-blue" style={{width : '40%'}}>80%</div>
            </div><br/>
            <p>React & nodeJs</p>

            <div class="w3-light-grey w3-round">
              <div class="w3-container w3-round w3-blue" style={{width : '40%'}}>20%</div>
            </div><br/> 
              {/* <div className="about-me"></div> */}
            </div>
            </div>
        </div>

        {/* qualification*/}
        <div classNam="qualification-block">
              <h2 style={{textAlign : 'center'}}>Awesome Journey</h2>
              {/* <div className="qualification-heading"> 
                  <div>Education</div>
                  <div>Experience</div>
              </div> */}
               <div className="education-lists">
                          <div>Education
                          </div>
                          <div >Experience
                          </div>
              </div>
              <div className="qualification">
                   
                     <div className="education">
                      
                        <span className="dot"></span><div className="education-list">Bachelor of Technology<br/><p>2014-2018</p>
                        </div>
                        <span className="dot"></span><div className="education-list">Intermediate<br/><p>2012-2014</p>
                        </div> 
                        <span className="dot"></span><div className="education-list">SSC<br/><p>2011-2012</p>
                        </div>  
                      </div>
                     <div className="work-experience"> 
                              
                        <span className="dot"></span><div className="experience-list">JELSAT-Online house rental app<br/><p>2019-Till date</p>
                        </div> 
                        <span className="dot"></span><div className="experience-list">Drupal-site<br/><p>2019</p>
                        </div> 
                        <span className="dot"></span><div className="experience-list">User behaviour pattern<br/><p>2018</p>
                        </div> 
                     </div>
                  {/* <div className="experience">
                  </div> */}
               
              </div>
        </div>
        {/* contact-me */}
        <div className="contact-block" id="contact">
          <div className="contact-heading">
                  <div><h2>Get in touch</h2>
                  </div>
          </div>
          <div className="contact-me" >
            <div className="contact-form">
              <form >
                  <label>
                    Name:
                    <input type="text" value=""  />
                  </label><br />
                  <label>
                    Email:
                    <input type="text" value=""  />
                  </label><br />
                  <label>
                    Message:
                    {/* <input type="text" value={{message:"message"}}  /> */}
                    <textarea>
                      Hello there, this is some text in a text area
                    </textarea>
                  </label><br />
                  <div className="center">
                    <input type="submit" value="Submit" />  
                  </div>
                </form>
            </div>
            <div className="get-in-touch">
              <div className="contact-info"><b>Contact Me</b><br/><p> 918328173243</p>
              </div>
              <div className="contact-info"><b>Email</b><br/><p>hdeekonda@gmail.com</p>
              </div> 
              <div className="contact-info"><b>Location</b><br/><p>Hyderabad, India</p>
              </div> 
            </div>
          </div>
        </div>
        {/* footer starts */}
        <div className="footer-block">
        <div className="footer-icon">
              H
            </div>
            <div className="footer-name">
              <h2>Harikrishna</h2>    
            </div>
          <div className="footer-details">
          
            <div className="footer-share">
              <div>
                 <img className = "facebook-image" src={facebook} alt="fimage"/>
              </div>
              <div>
                 <img className = "instagram-image" src={instagram} alt="iimage"/>
              </div>
              <div>
                 <img className = "twitter-image" src={twitter} alt="timage"/>
              </div>
            </div>
          </div> 
        </div>


    </div>
  );
}

export default App;
