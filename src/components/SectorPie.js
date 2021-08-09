
import ReactApexChart from 'react-apexcharts';
import {Component} from "react";
import SectorService from "../services/SectorService";

class SectorPie extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [],
            options: {

            },


        };
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
                    names.sort();
                    console.log("names",names);
                // let unique = names.filter((item, i, ar) => ar.indexOf(item) === i);
                // unique.sort();
                //
                // console.log("unique",unique);

                const map = names.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

                // console.log("keys",map.keys());
                // console.log("values",map.values());
                // console.log("entries",map.entries());
                const datalist = Array.from(map.keys());
                const valueslist = Array.from(map.values());
                console.log("values",valueslist);
                console.log("datas",datalist);
                console.log("entries",map.entries());




                let dict =[];
                    for (let i = 0; i < 8; i++){
                        dict.push({
                            name: '',

                            data:''

                        });
                    }

                    this.setState({

                        series: valueslist,// setting series

                        options: {
                            chart: {
                                width: 600,
                                type: 'pie',
                            },
                            colors: ['#2E93fA','#2ecc71', '#d35400', '#546E7A', '#FF9800','#D9534F','#7E36AF','#009688','#607d8b','#333333','#a2c0cc','#808080'],

                            fill: {
                                type: 'gradient',
                            },
                            title: {
                                text: "Sectors",
                                style: {
                                    color: '#008FFB',
                                }
                            },
                            labels: datalist,
                            responsive: [{
                                breakpoint: 480,
                                options: {
                                    chart: {
                                        width: 200
                                    },
                                    legend: {
                                        position: 'right'
                                    }
                                }
                            }]
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
            <div id="chart" align="left">
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={600} />
            </div>
            </div>


        );
    }
}

export default SectorPie;