import Chart from 'react-apexcharts';
import React , {Component} from 'react';
import axios from  "axios";
import RatioService from "../services/ratio.service"

class ShowRatioChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'a'
                },
                xaxis: {
                    categories: []
                }
            },

            series: [
                {
                    name: 'currentRatio',
                    data: []
                }
            ],
            // series: [
            //     [
            //     ]
            // ],

            // options_2: {
            //     chart: {
            //         id: 'a'
            //     },
            //     xaxis: {
            //         categories: []
            //     }
            // },
            // series_2: [
            //     {
            //         name: 'priceBookValueRatio',
            //         data: []
            //     }
            // ]

        }
    }

    async componentDidMount  (){
        const date=[];
        const currentRatio=[];
        const priceBookValueRatio =[];
        const seriesData =[];
       RatioService.getRatioByCodeName()
            .then(Response=>{
                    console.log("Response" , Response.data);
                    for(const obj of Response.data){
                        console.log("obj" ,obj);
                        date.push(obj.year);
                        currentRatio.push(obj.currentRatio);
                        priceBookValueRatio.push(obj.priceBookValueRatio);
                        // priceBookValueRatio,priceToBookRatio,
                        // priceToSalesRatio,
                        // priceToFreeCashFlowsRatio,priceToOperatingCashFlowsRatio,priceCashFlowRatio,priceSalesRatio,currentRatio,
                        // priceEarningsToGrowthRatio,
                        // quickRatio,priceEarningsRatio,cashRatio,debtRatio,debtEquityRatio,cashFlowToDebtRatio,payoutRatio,operatingCashFlowSalesRatio,freeCashFlowOperatingCashFlowRatio,cashFlowCoverageRatios,shortTermCoverageRatios,capitalExpenditureCoverageRatios,dividendpaidAndCapexCoverageRatios,
                        // dividendPayoutRatio,PE_ratio,Price_to_Sales_Ratio,POCF_ratio,PFCF_ratio,PB_ratio,
                        // PTB_ratio,Payout_Ratio,

                    }
                    const nameData = ["currentRatio",currentRatio];
                    seriesData.push(nameData);
                    const nameData1 = ["priceBookValueRatio",priceBookValueRatio];
                    seriesData.push(nameData1);

                    console.log("date",date);
                    console.log("currentRatio",currentRatio);
                    console.log("priceBookValueRatio",priceBookValueRatio);
                    this.setState({
                        options: {
                            chart: {
                                id: 'a'
                            },
                            xaxis: {
                                categories: date,
                            }
                        },
                        series: [
                            {
                                name: 'currentRatio',
                                data: currentRatio,
                            }
                        ]
                        // series:[
                        //     seriesData
                        // ]
                        // options_2:{
                        //     chart: {
                        //         id: 'a'
                        //     },
                        //     xaxis: {
                        //         categories: date,
                        //     }
                        // },
                        // series_2: [
                        //     {
                        //         name: 'priceBookValueRatio',
                        //         data: priceBookValueRatio,
                        //     }
                        // ]

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
               <div> <h1>Current Ratio VS Timeline</h1>
                <Chart options={this.state.options} series={this.state.series} type="line" width={1000} height={320} />
                {/*<br/>*/}
                {/*<div>*/}
                {/*<h1>priceBookValueRatio VS Timeline</h1>*/}
                {/*<Chart options={this.state.options_2} series={this.state.series_2} type="line" width={1000} height={320} />*/}
                {/*</div>*/}
               </div>
                {/*<div>*/}
                {/*    <h1>PricetoBookRatio VS TImeline</h1>*/}
                {/*    <Chart options={this.state.options_2} series={this.state.series_2} type="line" width={1000} height={320} />*/}
                {/*</div>*/}
            </div>
        )
    }
}
export default ShowRatioChart;