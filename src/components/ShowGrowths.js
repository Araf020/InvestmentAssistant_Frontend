import ReactApexChart from 'react-apexcharts';
import React , {Component} from 'react';
import axios from  "axios";
import GrowthService from "../services/growth.service";
import ShowRatioChart from "./ShowRatioChart";
import data from "bootstrap/js/src/dom/data";
import {forEach} from "react-bootstrap/ElementChildren";
import Chart from 'react-apexcharts';

class GrowthChart extends Component {
    // v = [{
    //     name: "High - 2013",
    //     data: [28, 29, 33, 36, 32, 32, 33]
    // },
    //     {
    //         name: "Low - 2013",
    //         data: [12, 11, 14, 18, 17, 13, 13]
    //     }];
    v = {};


    constructor(props) {
        super(props);

        this.state = {

            series:[],
            options: {},


        };
    }

    async componentDidMount  (){
        const date=[];
        const Revenue_Growth= [];
        const Gross_Profit_Growth= [];
        const EBIT_Growth= [];
        const Operating_Income_Growth= [];
        const Net_Income_Growth= [];
        const EPS_Growth= [];
        const EPS_Diluted_Growth= [];
        const Weighted_Average_Shares_Growth= [];
        const Weighted_Average_Shares_Diluted_Growth= [];
        const Operating_Cash_Flow_growth= [];
        const Free_Cash_Flow_growth= [];
        const Receivables_growth= [];
        const Inventory_Growth= [];
        const Asset_Growth= [];
        const Debt_Growth= [];

        const names = ["Revenue_Growth","Gross_Profit_Growth","EBIT_Growth","Operating_Income_Growth","Net_Income_Growth","EPS_Growth","EPS_Diluted_Growth","Weighted_Average_Shares_Growth","Weighted_Average_Shares_Diluted_Growth","Operating_Cash_Flow_growth","Free_Cash_Flow_growth","Receivables_growth","Inventory_Growth","Asset_Growth","Debt_Growth"];
        const v = []
        const seriesData =[];
        GrowthService.getGrowthsByCodeName() //fetching
            .then(Response=>{

                    console.log("Response" , Response.data);
                    for(const obj of Response.data){
                        console.log("obj" ,obj);
                        date.push(obj.year);
                        Revenue_Growth.push(obj.revenue_Growth);
                        Gross_Profit_Growth.push(obj.gross_Profit_Growth);
                        EBIT_Growth.push(obj.ebit_Growth);
                        Operating_Income_Growth.push(obj.operating_Income_Growth);
                        Net_Income_Growth.push(obj.net_Income_Growth);
                        EPS_Growth.push(obj.eps_Growth);
                        EPS_Diluted_Growth.push(obj.eps_Diluted_Growth);
                        Weighted_Average_Shares_Growth.push(obj.weighted_Average_Shares_Growth);
                        Weighted_Average_Shares_Diluted_Growth.push(obj.weighted_Average_Shares_Diluted_Growth);
                        Operating_Cash_Flow_growth.push(obj.operating_Cash_Flow_growth);
                        Free_Cash_Flow_growth.push(obj.free_Cash_Flow_growth);
                        Receivables_growth.push(obj.receivables_growth);
                        Inventory_Growth.push(obj.inventory_Growth);
                        Asset_Growth.push(obj.asset_Growth);
                        Debt_Growth.push(obj.debt_Growth);



                    }
                    const growthList =  [Revenue_Growth,Gross_Profit_Growth,EBIT_Growth,Operating_Income_Growth,Net_Income_Growth,EPS_Growth,EPS_Diluted_Growth,Weighted_Average_Shares_Growth,Weighted_Average_Shares_Diluted_Growth,Operating_Cash_Flow_growth,Free_Cash_Flow_growth,Receivables_growth,Inventory_Growth,Asset_Growth,Debt_Growth];

                    console.log("date",date);
                    console.log("RevenueGrowth",Revenue_Growth);
                    console.log("epsgrwoth",EPS_Growth);

                    let dict =[];
                    for (let i = 0; i < growthList.length; i++){
                        dict.push({
                            name: names[i],
                            type: 'column',
                            data:growthList[i],

                        });
                    }

                    this.setState({

                        series: dict, // setting series

                        options: {
                            chart: {
                                height: 350,
                                type: 'column',
                                stacked: false,
                                dropShadow: {
                                    enabled: true,
                                    color: '#000',
                                    top: 18,
                                    left: 7,
                                    blur: 10,
                                    opacity: 1.5
                                },
                                toolbar: {
                                    show: false
                                }
                            },
                            dataLabels: {
                                enabled: false
                            },
                            stroke: {
                                width: [1, 1, 4]
                            },
                            title: {
                                text: 'Growths vs Timeline',
                                align: 'left',
                                offsetX: 110
                            },
                            xaxis: {
                                categories: date,
                            },
                            yaxis: [
                                {
                                    axisTicks: {
                                        show: true,
                                    },
                                    axisBorder: {
                                        show: true,
                                        color: '#008FFB'
                                    },
                                    labels: {
                                        style: {
                                            colors: '#008FFB',
                                        }
                                    },
                                    title: {
                                        text: "Growths",
                                        style: {
                                            color: '#008FFB',
                                        }
                                    },
                                    tooltip: {
                                        enabled: true
                                    }
                                },

                            ],
                            tooltip: {
                                fixed: {
                                    enabled: true,
                                    position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                                    offsetY: 30,
                                    offsetX: 60
                                },
                            },
                            legend: {
                                horizontalAlign: 'left',
                                offsetX: 40
                            }
                        },

                    })


                }
            )
            .catch(error=>{
                console.log("error" , error);
            })

    }


    render() {
        return (

            <div className="container mt-3">
                <div id="chart">
                    <Chart options={this.state.options} series={this.state.series} type="line" width={1300} height={500} />
                </div>
                <div className=" mt-3">
                    <h3 > Note: hover your mouse on any of the ratio listed above</h3>
                </div>
                {/*<div className="container mt-3">*/}
                {/*    <ReactApexChart options={this.state.options} series={} type="line" width={1300} height={500} />*/}
                {/*</div>*/}
            </div>

        );
    }
}

export default GrowthChart;