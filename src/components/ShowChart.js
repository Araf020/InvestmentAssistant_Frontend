import React from 'react';
import '../Style.css';
import Body from './Body';
import Footer from './Footer';
import Top from './Top';
import logo from './photo/logo.jpg';
import { Dropdown,InputGroup,FormControl } from 'react-bootstrap';
import Chartshow from "./ChartShow";

function ShowChart() {
    return (

      <div>

        <div className=" submenu bg-light ">
        <nav className="navbar navbar-expand-lg navbar-light container ">
            <div className="container-fluid col-md-2">
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                       Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
           </div>
           <div className="container-fluid col-md-2">
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                       Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
           </div>
          <div className="container-fluid col-md-8 pt-3">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i className="fa fa-search "></i></InputGroup.Text>
                  <FormControl className=""
                    placeholder="Search"
                    aria-label="search"
                    aria-describedby="basic-addon1"
                />
              </InputGroup>
          </div>
       </nav>

        </div>
          <Body/>
          {/*<Chartshow/>*/}
          <Footer/>
      </div>
     
    );
}

export default ShowChart;

