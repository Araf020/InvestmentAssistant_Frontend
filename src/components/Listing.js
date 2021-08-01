import React from 'react';
import { Dropdown,NavDropdown,Nav,Navbar,Container} from 'react-bootstrap';
import Top from "./Top";
import Footer from "./Footer";



function Listing() {
 
    
   
    return (
        <div>
            {/* <Top/> */}
       <div className="container">

          <div className="list mt-4">
            <div className="left-list col-md-3 ">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
                   <a><li className="list-item text-success">Markets</li><hr className="hhh"/></a>
                   <a><li className="list-item text-success">Stocks</li><hr  className="hhh"/></a>
                   <a><li className="list-item text-success">Options</li><hr  className="hhh"/></a>
                   <a><li className="list-item text-success">Mutual Funds</li><hr  className="hhh"/></a>
                   <a><li className="list-item text-success">ETFs</li><hr className="hhh"/></a>
                   <a><li className="list-item text-success">Bonds & CDs</li><hr className="hhh"/></a>
                   <a><li className="list-item text-white bg-success">Screens</li><hr className="hhh"/></a>
                   <a><li className="list-item text-success">Options</li><hr className="hhh"/></a>
                   <a><li className="list-item text-success">Mutual Funds</li><hr className="hhh"/></a>
                   <a><li className="list-item text-success">ETFs</li><hr className="hhh"/></a>
                   <a><li className="list-item text-success">Ibvestor Movement Index(IMX)</li><hr className="hhh"/></a>
               </ul>
            </div>
            <div className="right-list col-md-9">
                 <div>
                    <p>To create your screen,use the check boxes in the left column below  to select
                    one or more of the criteria.Then, edit the default settings if you want to customize
                    the criteria.To view the page click the view matches button.</p>
                 </div>
                 <div className=" flex-container bg-light">
                    <div className="">
                       <button className="m-2 bg-light">Saved & Predifined</button>
                       <button>Create a Screen </button>
                    </div>
                    <div className="ppp">                     
                        <p className="pt-2 text ">Screeners Glossary</p>
                    </div>
                 </div>            
                 <hr />
                 <div className=" flex-container bg-light">
                    <div className="mm">
                       <h6 className="m-2">Search All Stocks</h6>
                       <p className="pt-2">Search All Stocks</p>
                       <div className="tex">   
                       <p className="m-2  ">
                       <i class="fa fa-check-square" aria-hidden="true"></i>
                        Use extended session market data<i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                       </p>
                       </div>
                    </div>
                 </div>            
                 <div className="list ">
                    <div className="leftlist col-md-3 ">

                    <div class="w3-container">
                        <div class="w3-dropdown-hover">
                             <h6 class="">
                             <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             Basic</h6>
                             <div class="w3-dropdown-content w3-bar-block w3-border">
                                <a href="#" class="w3-bar-item w3-button">
                                <div className="form-check">
                                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                       <label className="form-check-label" for="flexCheckDefault">
                                        Exachange
                                        </label>
                                    </div>
                                </a>
                             </div>
                        </div>
                    </div>
                    <hr className="m-0 p-0"/>


                    <div class="w3-container">
                        <div class="w3-dropdown-hover">
                             <h6 class="">
                             <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             Fundamentals</h6>
                             <div class="w3-dropdown-content w3-bar-block w3-border">
                                <a href="#" class="w3-bar-item w3-button">
                                <div className="form-check">
                                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                       <label className="form-check-label" for="flexCheckDefault">
                                        Exachange
                                        </label>
                                    </div>
                                </a>
                             </div>
                        </div>
                    </div>
                    <hr className="m-0 p-0"/>

                    <div class="w3-container">
                        <div class="w3-dropdown-hover">
                             <h6 class="">
                             <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             Valuation</h6>
                             <div class="w3-dropdown-content w3-bar-block w3-border">
                                <a href="#" class="w3-bar-item w3-button">
                                <div className="form-check">
                                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                       <label className="form-check-label" for="flexCheckDefault">
                                        Exachange
                                        </label>
                                    </div>
                                </a>
                             </div>
                        </div>
                    </div>
                    <hr className="m-0 p-0"/>

                    <div class="w3-container">
                        <div class="w3-dropdown-hover">
                             <h6 class="">
                             <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             Diviends</h6>
                             <div class="w3-dropdown-content w3-bar-block w3-border">
                                <a href="#" class="w3-bar-item w3-button">
                                <div className="form-check">
                                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                       <label className="form-check-label" for="flexCheckDefault">
                                        Exachange
                                        </label>
                                    </div>
                                </a>
                             </div>
                        </div>
                    </div>
                    <hr className="m-0 p-0"/>

                    <div class="w3-container">
                        <div class="w3-dropdown-hover">
                             <h6 class="">
                             <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             Price & volume</h6>
                             <div class="w3-dropdown-content w3-bar-block w3-border">
                                <a href="#" class="w3-bar-item w3-button">
                                <div className="form-check">
                                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                       <label className="form-check-label" for="flexCheckDefault">
                                        Exachange
                                        </label>
                                    </div>
                                </a>
                             </div>
                        </div>
                    </div>
                    <hr className="m-0 p-0"/>

                    <div class="w3-container">
                        <div class="w3-dropdown-hover">
                             <h6 class="">
                             <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             Technicals</h6>
                             <div class="w3-dropdown-content w3-bar-block w3-border">
                                <a href="#" class="w3-bar-item w3-button">
                                <div className="form-check">
                                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                       <label className="form-check-label" for="flexCheckDefault">
                                        Exachange
                                        </label>
                                    </div>
                                </a>
                             </div>
                        </div>
                    </div>
                    <hr className="m-0 p-0"/>

                    <div class="w3-container">
                        <div class="w3-dropdown-hover">
                             <h6 class="">
                             <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             Ratings</h6>
                             <div class="w3-dropdown-content w3-bar-block w3-border">
                                <a href="#" class="w3-bar-item w3-button">
                                <div className="form-check">
                                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                       <label className="form-check-label" for="flexCheckDefault">
                                        Exachange
                                        </label>
                                    </div>
                                </a>
                             </div>
                        </div>
                    </div>
                    <hr className="m-0 p-0"/>

                    <div class="w3-container">
                        <div class="w3-dropdown-hover">
                             <h6 class="">
                             <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             Performance</h6>
                             <div class="w3-dropdown-content">
                             <a href="#" class="w3-bar-item w3-button">
                                <div className="form-check">
                                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                       <label className="form-check-label" for="flexCheckDefault">
                                        Exachange
                                        </label>
                                    </div>
                                </a>
                             </div>
                        </div>
                    </div>
                    <hr className="m-0 p-0"/>

                    <div class="w3-container">
                        <div class="w3-dropdown-hover">
                             <h6 class=" ">
                             <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             Research Team</h6>
                             <div class="w3-dropdown-content w3-bar-block w3-border">
                             <a href="#" class="w3-bar-item w3-button">
                                <div className="form-check">
                                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                       <label className="form-check-label" for="flexCheckDefault">
                                        Exachange
                                        </label>
                                    </div>
                                </a>
                             </div>
                        </div>
                    </div>
                 
                 
                  
                    </div>
                     
                    <div className="rightlist col-md-9 ">
                        <div className="mm bg-light">
                            <p className="p-2">Triteria name</p>
                            <p className="pp">Matches</p>
                        </div>

                        <div className="area">
                        
                            <p className="text-center">No Triteria Selected</p>
                            <hr/>
                            <p className="p-2">Please begin your screen by selecting at least one option from the list to the left,
                            or get started with our <a>Predifined screens.</a></p>
                       
                        </div>
                        <div>
                       
                        </div>
                    </div>
                   
                 </div>
             </div>
          
          </div>

       </div>
            <Footer/>
        </div>
    );
}

export default Listing;

