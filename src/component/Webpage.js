import React,{Component} from 'react';
import imglogo from './edited_logo.png';
import imageone from './1.png'
import imagetwo from './2.png'
import imagethree from './3.png';
import './styles.css'

class Webpage extends Component{
    render(){
        return(
            <div className="container-fluid main-container">  
                <img src={imglogo} className="responsivelogo"/> 
                <br /><br />
                <img src={imageone}  className="responsive1 image1"/>
                <div className="responsive_content content">
                    <p className="content_heading">C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 FOR THE 4TH TIME.</p>
                    <ul className="content_paragraph">
                        <li>C.R.I’s energy efficiencient products are well recognised by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 star rated energy efficient smart pumps with IoT enabled control panel.</li>
                    </ul>
                </div>
                    
                <img src={imagetwo} className="responsive2 image2" />
                <div className="responsive2 content content_paragraph">
                    Government of India has awarded the <strong>"National Energy Conservation Award 2018".</strong> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt.sumithra Mahajan, Speaker of Lok Shaba and Shri. Raj Kumar Singh, Honorable Minister of State.
                </div>

                <p className="responsive_content_two content_paragraph">
                    
                    INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                </p>
                <img src={imagethree}  className="responsivelogo" />    
                <p className="responsive_content_three content_paragraph">
                Valves - Pumps - Pipes - IoT Drives and Cables - Solar Systems - Motors
                </p>
                <hr />
                <p className="responsive_content_three content_paragraph footer_heading">
                C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
                </p>
                <p>CHEMICALS &amp; PROCESS <strong className="divider">| </strong>
                    POWER <strong className="divider"> | </strong>
                    WATER &amp; WASTE WATER <strong className="divider"> | </strong>
                    OILS &amp; GAS <strong className="divider">|</strong> 
                    PHARMA <strong className="divider">|</strong> 
                    SUGARS &amp; DISTILLERIES <strong className="divider">|</strong> 
                    PAPER &amp; PULP <strong className="divider">| </strong>
                    MARINE &amp; DEFENCE <strong className="divider">|</strong> 
                    METAL &amp; MINING <strong className="divider">|</strong> 
                    FOOD &amp; BEVERAGE <strong className="divider">|</strong> 
                    PETROCHEMICAL &amp; REFINERIES <strong className="divider">|</strong> 
                    SOLAR <strong className="divider">|</strong> 
                    BUILDING <strong className="divider">|</strong> 
                    HVAC <strong className="divider">|</strong> 
                    FIRE FIGHTING <strong className="divider">|</strong> 
                    AGRICULTURE &amp; RESIDENTIAL</p>
                <div className="footer">
                    <a href="#"><i class="fa fa-phone-square footer_icon" aria-hidden="true"></i>Toll free 1800 200 1234</a>
                    
                    <a href="#"><i class="fa fa-facebook-square footer_icon" aria-hidden="true"></i>www.facebook.com</a>
                    <a href="#"><i class='fas fa-globe footer_icon'></i>www.crigrpups.com</a>

                </div>
            </div>
        );
    }
}
export default Webpage;