// import React, {Component} from 'react';
// import '../Style.css';
// import Body from './Body';
// import Footer from './Footer';
// import Top from './Top';
// import logo from './photo/logo.jpg';
// import { Dropdown,InputGroup,FormControl } from 'react-bootstrap';
// import Chartshow from "./ChartShow";
// // import ShowRatioChart from "./ShowRatioChart";
// import ApexChart from "./ApexChart"
// import ShowGrowths from "./ShowGrowths";
// import TopCompanyByEPS from "./TopCompanyByEPS";
// import {render} from "@testing-library/react";
// class  ShowChart extends Component{

//
//     render{
//         return (
//
//             <div>
//
//                 <div className=" submenu bg-light ">
//                     <nav className="navbar navbar-expand-lg navbar-light container ">
//                         {/* <div className="container-fluid col-md-2">*/}
//                         {/*     <Dropdown>*/}
//                         {/*         <Dropdown.Toggle variant="light" id="dropdown-basic">*/}
//                         {/*            Company Code Name*/}
//                         {/*         </Dropdown.Toggle>*/}
//
//                         {/*         <Dropdown.Menu>*/}
//                         {/*           <Dropdown.Item href="#/action-1">AAPL</Dropdown.Item>*/}
//                         {/*           <Dropdown.Item href="#/action-2">INTC</Dropdown.Item>*/}
//                         {/*           <Dropdown.Item href="#/action-3">MSFT</Dropdown.Item>*/}
//                         {/*         </Dropdown.Menu>*/}
//                         {/*     </Dropdown>*/}
//                         {/*</div>*/}
//                         <div className="container-fluid col-md-8 pt-3">
//                             <InputGroup className="mb-3">
//                                 <FormControl className=""
//                                              placeholder="Enter Company Code Name"
//                                              aria-label="search"
//                                              aria-describedby="basic-addon1"
//                                 />
//                                 <InputGroup.Text id="basic-addon1"><i className="fa fa-search "></i></InputGroup.Text>
//
//                             </InputGroup>
//                         </div>
//                         <div className="container-fluid col-md-2">
//                             <Dropdown>
//                                 <Dropdown.Toggle variant="light" id="dropdown-basic">
//                                     Interested In
//                                 </Dropdown.Toggle>
//
//                                 <Dropdown.Menu>
//                                     <Dropdown.Item href="#/action-1">Ratios</Dropdown.Item>
//                                     <Dropdown.Item href="#/action-2">Revenue</Dropdown.Item>
//                                     <Dropdown.Item href="#/action-3">Growth</Dropdown.Item>
//                                 </Dropdown.Menu>
//                             </Dropdown>
//                         </div>
//                         {/*<div className="container-fluid col-md-8 pt-3">*/}
//                         {/*    <InputGroup className="mb-3">*/}
//                         {/*      <InputGroup.Text id="basic-addon1"><i className="fa fa-search "></i></InputGroup.Text>*/}
//                         {/*        <FormControl className=""*/}
//                         {/*          placeholder="Search"*/}
//                         {/*          aria-label="search"*/}
//                         {/*          aria-describedby="basic-addon1"*/}
//                         {/*      />*/}
//                         {/*    </InputGroup>*/}
//                         {/*</div>*/}
//                     </nav>
//
//                 </div>
//
//                 <ApexChart/>
//
//                 {/*<ShowGrowths/>*/}
//
//                 <Footer/>
//             </div>
//
//         );
//     }
// }
//
// export default ShowChart;
//

import ReactApexChart from 'react-apexcharts';
import {Component} from "react";
import SectorService from "../services/SectorService";
import React from 'react';
import '../Style.css';
import Body from './Body';
import Footer from './Footer';
import Top from './Top';
import logo from './photo/logo.jpg';
import { Dropdown,InputGroup,FormControl } from 'react-bootstrap';
import Chartshow from "./ChartShow";
// import ShowRatioChart from "./ShowRatioChart";
import ApexChart from "./ApexChart"
import ShowGrowths from "./ShowGrowths";
import TopCompanyByEPS from "./TopCompanyByEPS";
import {Select} from "@material-ui/core";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
class ShowChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: ""
        };

        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }

    handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
    }
    async componentDidMount  (){

        const seriesData =[];
        const count = [];
        const names = [];
        SectorService.getSectors() //fetching
            .then(Response=>{

                    console.log("Response" , Response.data);
                    for(const obj of Response.data){
                        console.log("obj" ,obj);
                        names.push(obj.sectorName);



                    }


                    this.setState({



                    })


                }
            )
            .catch(error=>{
                console.log("error" , error);
            })

    }



    render() {
        const { selectedOption } = this.state;
        return (
//
            <div>

                <div className=" submenu bg-light ">
                    <nav className="navbar navbar-expand-lg navbar-light container ">
                        {/* <div className="container-fluid col-md-2">*/}
                        {/*     <Dropdown>*/}
                        {/*         <Dropdown.Toggle variant="light" id="dropdown-basic">*/}
                        {/*            Company Code Name*/}
                        {/*         </Dropdown.Toggle>*/}

                        {/*         <Dropdown.Menu>*/}
                        {/*           <Dropdown.Item href="#/action-1">AAPL</Dropdown.Item>*/}
                        {/*           <Dropdown.Item href="#/action-2">INTC</Dropdown.Item>*/}
                        {/*           <Dropdown.Item href="#/action-3">MSFT</Dropdown.Item>*/}
                        {/*         </Dropdown.Menu>*/}
                        {/*     </Dropdown>*/}
                        {/*</div>*/}
                        <div className="container-fluid col-md-8 pt-3">
                            <InputGroup className="mb-3">
                                <FormControl className=""
                                             placeholder="Enter Company Code Name"
                                             aria-label="search"
                                             aria-describedby="basic-addon1"
                                />
                                <InputGroup.Text id="basic-addon1"><i className="fa fa-search "></i></InputGroup.Text>

                            </InputGroup>
                        </div>
                        <div className="container-fluid col-md-2">

                            <Dropdown >
                                {/*<Dropdown.Toggle variant="light"  id="dropdown" onChange={this.handleDropdownChange}>*/}
                                {/*    Interested In*/}
                                {/*</Dropdown.Toggle>*/}
                                <select id="dropdown" onChange={this.handleDropdownChange}>*/}
                                                <option value="ratios">Ratios</option>
                                                <option value="revenues">Revenue</option>
                                                <option value="growths">Growth</option>

                                </select>
                                {/*<Dropdown.Menu>*/}
                                    {/*<Dropdown.Item href="#/action-1">Ratios</Dropdown.Item>*/}
                                    {/*<Dropdown.Item href="#/action-2">Revenue</Dropdown.Item>*/}
                                    {/*<Dropdown.Item href="#/action-3">Growth</Dropdown.Item>*/}

                                {/*</Dropdown.Menu>*/}
                            </Dropdown>
                        </div>
                        {/*<div className="container-fluid col-md-8 pt-3">*/}
                        {/*    <InputGroup className="mb-3">*/}
                        {/*      <InputGroup.Text id="basic-addon1"><i className="fa fa-search "></i></InputGroup.Text>*/}
                        {/*        <FormControl className=""*/}
                        {/*          placeholder="Search"*/}
                        {/*          aria-label="search"*/}
                        {/*          aria-describedby="basic-addon1"*/}
                        {/*      />*/}
                        {/*    </InputGroup>*/}
                        {/*</div>*/}
                    </nav>
                    <div>Selected value is : {this.state.selectValue}</div>

                </div>

                <ApexChart/>

                {/*<ShowGrowths/>*/}

                <Footer/>
            </div>

        );
    }
}

export default ShowChart;