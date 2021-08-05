import ReactApexChart from 'react-apexcharts';
import React , {Component} from 'react';
import axios from  "axios";
import RatioService from "../services/ratio.service";
import ShowRatioChart from "./ShowRatioChart";
import data from "bootstrap/js/src/dom/data";
import {forEach} from "react-bootstrap/ElementChildren";
import Chart from 'react-apexcharts';

class ApexChart extends Component {
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

            // series:this.v,
            series:[],
            options: {
                // chart: {
                //     height: 350,
                //     type: 'line',
                //     dropShadow: {
                //         enabled: true,
                //         color: '#000',
                //         top: 18,
                //         left: 7,
                //         blur: 10,
                //         opacity: 0.2
                //     },
                //     toolbar: {
                //         show: false
                //     }
                // },
                // colors: ['#77B6EA', '#545454'],
                // dataLabels: {
                //     enabled: true,
                // },
                // stroke: {
                //     curve: 'smooth'
                // },
                // title: {
                //     text: 'Average High & Low Temperature',
                //     align: 'left'
                // },
                // grid: {
                //     borderColor: '#e7e7e7',
                //     row: {
                //         colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                //         opacity: 0.5
                //     },
                // },
                // markers: {
                //     size: 1
                // },
                // xaxis: {
                //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                //     title: {
                //         text: 'Month'
                //     }
                // },
                // yaxis: {
                //     title: {
                //         text: 'Temperature'
                //     },
                //     min: 5,
                //     max: 40
                // },
                // legend: {
                //     position: 'top',
                //     horizontalAlign: 'right',
                //     floating: true,
                //     offsetY: -25,
                //     offsetX: -5
                // }
            },


        };
    }

    async componentDidMount  (){
        const date=[];
        const currentRatio=[];
        const priceBookValueRatio =[];
        const priceToBookRatio =[];
        const priceToSalesRatio= [];
        const priceToFreeCashFlowsRatio=[];
        const priceToOperatingCashFlowsRatio = [];
        const priceCashFlowRatio = [];

        const priceSalesRatio=[];

        const priceEarningsToGrowthRatio=[];
        const quickRatio=[];
        const priceEarningsRatio=[];
        const cashRatio=[];
        const debtRatio=[];
        const debtEquityRatio=[];
        const cashFlowToDebtRatio=[];
        const payoutRatio=[];
        const operatingCashFlowSalesRatio=[];
        const freeCashFlowOperatingCashFlowRatio=[];
        const cashFlowCoverageRatios=[];
        const shortTermCoverageRatios=[];
        const capitalExpenditureCoverageRatios=[];
        const dividendpaidAndCapexCoverageRatios=[];
        const dividendPayoutRatio=[];
        const PE_ratio=[];
        const Price_to_Sales_Ratio=[];
        const POCF_ratio=[];
        const PFCF_ratio=[];
        const PB_ratio=[];
        const PTB_ratio=[];
        const Payout_Ratio=[];
        const names = ["currentRatio","priceBookValueRatio","priceToBookRatio","priceToSalesRatio","priceToFreeCashFlowsRatio","priceToOperatingCashFlowsRatio","priceCashFlowRatio","priceSalesRatio","priceEarningsToGrowthRatio","quickRatio","priceEarningsRatio","cashRatio","debtRatio","debtEquityRatio","cashFlowToDebtRatio","payoutRatio","operatingCashFlowSalesRatio","freeCashFlowOperatingCashFlowRatio","cashFlowCoverageRatios","shortTermCoverageRatios","capitalExpenditureCoverageRatios","dividendpaidAndCapexCoverageRatios","dividendPayoutRatio","PE_ratio","Price_to_Sales_Ratio","POCF_ratio","PFCF_ratio","PB_ratio","PTB_ratio","Payout_Ratio"];
        const v = []
        const seriesData =[];
        RatioService.getRatioByCodeName()
            .then(Response=>{
                    console.log("Response" , Response.data);
                    for(const obj of Response.data){
                        console.log("obj" ,obj);
                        date.push(obj.year);
                        currentRatio.push(Math.round((obj.currentRatio + Number.EPSILON) * 100) / 100);
                        priceBookValueRatio.push(obj.priceBookValueRatio);

                        priceSalesRatio.push(obj.priceSalesRatio);

                        priceEarningsToGrowthRatio.push(obj.priceEarningsToGrowthRatio);
                        quickRatio.push(obj.quickRatio);
                        priceEarningsRatio.push(obj.priceEarningsRatio);
                        cashRatio.push(obj.cashRatio);
                        debtRatio.push(obj.debtRatio);
                        debtEquityRatio.push(obj.debtEquityRatio);
                        cashFlowToDebtRatio.push(obj.cashFlowToDebtRatio);
                        payoutRatio.push(obj.payoutRatio);
                        operatingCashFlowSalesRatio.push(obj.operatingCashFlowSalesRatio);
                        freeCashFlowOperatingCashFlowRatio.push(obj.freeCashFlowOperatingCashFlowRatio);
                        cashFlowCoverageRatios.push(obj.cashFlowCoverageRatios);
                        shortTermCoverageRatios.push(obj.shortTermCoverageRatios);
                        capitalExpenditureCoverageRatios.push(obj.capitalExpenditureCoverageRatios);
                        dividendpaidAndCapexCoverageRatios.push(obj.dividendpaidAndCapexCoverageRatios);
                        dividendPayoutRatio.push(obj.dividendPayoutRatio);
                        PE_ratio.push(obj.PE_ratio);
                        Price_to_Sales_Ratio.push(obj.Price_to_Sales_Ratio);
                        POCF_ratio.push(obj.POCF_ratio);
                        PFCF_ratio.push(obj.PFCF_ratio);
                        PB_ratio.push(obj.PB_ratio);
                        PTB_ratio.push(obj.PTB_ratio);
                        Payout_Ratio.push(obj.Payout_Ratio);

                        // priceBookValueRatio,priceToBookRatio,
                        // priceToSalesRatio,
                        // priceToFreeCashFlowsRatio,priceToOperatingCashFlowsRatio,priceCashFlowRatio,
                        // priceSalesRatio,currentRatio,
                        // priceEarningsToGrowthRatio,
                        // quickRatio,priceEarningsRatio,cashRatio,debtRatio,debtEquityRatio,cashFlowToDebtRatio,payoutRatio,operatingCashFlowSalesRatio,freeCashFlowOperatingCashFlowRatio,cashFlowCoverageRatios,shortTermCoverageRatios,capitalExpenditureCoverageRatios,dividendpaidAndCapexCoverageRatios,
                        // dividendPayoutRatio,PE_ratio,Price_to_Sales_Ratio,POCF_ratio,PFCF_ratio,PB_ratio,
                        // PTB_ratio,Payout_Ratio,

                    }
                    const ratiolist =  [currentRatio, priceBookValueRatio , priceToBookRatio , priceToSalesRatio, priceToFreeCashFlowsRatio, priceToOperatingCashFlowsRatio, priceCashFlowRatio, priceSalesRatio, priceEarningsToGrowthRatio, quickRatio, priceEarningsRatio, cashRatio, debtRatio, debtEquityRatio, cashFlowToDebtRatio, payoutRatio, operatingCashFlowSalesRatio, freeCashFlowOperatingCashFlowRatio, cashFlowCoverageRatios, shortTermCoverageRatios, capitalExpenditureCoverageRatios, dividendpaidAndCapexCoverageRatios, dividendPayoutRatio, PE_ratio, Price_to_Sales_Ratio, POCF_ratio, PFCF_ratio, PB_ratio, PTB_ratio, Payout_Ratio];
                    const nameData = ["currentRatio",currentRatio];
                    seriesData.push(nameData);
                    this.v["currentRatio"] = currentRatio;
                    const nameData1 = ["priceBookValueRatio",priceBookValueRatio];
                    seriesData.push(nameData1);
                    // this.v.push(nameData1);

                    this.v["priceBookValueRatio"] = priceBookValueRatio;

                    console.log("date",date);
                    console.log("v",this.v);
                    console.log("currentRatio",currentRatio);
                    console.log("priceBookValueRatio",priceBookValueRatio);
                    let dict =[];
                   for (let i = 0; i < ratiolist.length; i++){
                       dict.push({
                           name: names[i],
                           type: 'column',
                           data:ratiolist[i],

                       });
                   }
                //     dict.push(
                //         {
                //             name: "currentRatio",
                //             data: currentRatio
                //         }
                //     )
                // dict.push(
                //     {
                //         name: "priceBookValueRatio",
                //         data: priceBookValueRatio
                //     }
                // );
                    this.setState({
                        // options: {
                        //     chart: {
                        //         id: 'a'
                        //     },
                        //     xaxis: {
                        //         categories: date,
                        //     }
                        // },
                        // series: [

                            // {
                            //     name:"cur",
                            //     data: currentRatio,
                            //     // data: this.v["currentRatio"]
                            // },
                            // {
                            //     name:"pricev",
                            //     data:priceBookValueRatio,
                            // },
                            // {
                            //     name: "lol",
                            //     data: [20,45,23,52,12],
                            // }
                            // ],
                        series: dict,
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
                                text: 'Ratios vs Timeline',
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
                                        text: "Ratios",
                                        style: {
                                            color: '#008FFB',
                                        }
                                    },
                                    tooltip: {
                                        enabled: true
                                    }
                                },
                                // {
                                //     seriesName: 'Income',
                                //     opposite: true,
                                //     axisTicks: {
                                //         show: true,
                                //     },
                                //     axisBorder: {
                                //         show: true,
                                //         color: '#00E396'
                                //     },
                                //     labels: {
                                //         style: {
                                //             colors: '#00E396',
                                //         }
                                // //     },
                                //     title: {
                                //         text: "Operating Cashflow (thousand crores)",
                                //         style: {
                                //             color: '#00E396',
                                //         }
                                //     },
                                // },
                                // {
                                //     seriesName: 'Revenue',
                                //     opposite: true,
                                //     axisTicks: {
                                //         show: true,
                                //     },
                                //     axisBorder: {
                                //         show: true,
                                //         color: '#FEB019'
                                //     },
                                //     labels: {
                                //         style: {
                                //             colors: '#FEB019',
                                //         },
                                //     },
                                //     title: {
                                //         text: "Revenue (thousand crores)",
                                //         style: {
                                //             color: '#FEB019',
                                //         }
                                //     }
                                // },
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
                        // options:{
                        //     chart: {
                        //         height: 500,
                        //         type: 'line',
                        //         dropShadow: {
                        //             enabled: true,
                        //             color: '#000',
                        //             top: 18,
                        //             left: 7,
                        //             blur: 10,
                        //             opacity: 2.1
                        //         },
                        //         toolbar: {
                        //             show: false
                        //         }
                        //     },
                        //     colors: ['#77B6EA', '#545454'],
                        //     dataLabels: {
                        //         enabled: true,
                        //     },
                        //     // stroke: {
                        //     //     curve: 'smooth'
                        //     // },
                        //     title: {
                        //         text: 'Ratios VS Timeline',
                        //         align: 'left'
                        //     },
                        //     grid: {
                        //         borderColor: '#e7e7e7',
                        //         row: {
                        //             colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        //             opacity: 2.1
                        //         },
                        //     },
                        //     markers: {
                        //         size: 1
                        //     },
                        //     xaxis: {
                        //         categories: date,
                        //         title: {
                        //             text: 'Year'
                        //         }
                        //     },
                        //     yaxis: {
                        //         title: {
                        //             text: 'Ratios'
                        //         },
                        //         min: -10,
                        //         max: 100
                        //     },
                        //     legend: {
                        //         position: 'top',
                        //         horizontalAlign: 'right',
                        //         floating: true,
                        //         offsetY: -25,
                        //         offsetX: -5
                        //     }
                        // }

                    })


                }
            )
            .catch(error=>{
                console.log("error" , error);
            })

    }


    render() {
        return (

<div>
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="line" width={1500} height={500} />
            </div>
            <div className=" mt-3">
                <h3 > Note: hover you mouse to any of the ratio listed above</h3>
            </div>
</div>

        );
    }
}

export default ApexChart;