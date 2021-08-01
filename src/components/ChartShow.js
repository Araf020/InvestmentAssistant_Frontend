import Chart from 'react-apexcharts';
import React , {Component} from 'react';
import axios from  "axios";

class Chartshow extends Component {
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
        name: 'high',
        data: []
      }
    ]
      
    }
  }
  async componentDidMount  (){
    const date=[];
    const high=[];

    await axios.get('http://api.marketstack.com/v1/eod?access_key=32d8c6da018f05b857f0d8d850ee5c6d&symbols=AAPL&fbclid=IwAR06SJKW139mLBeNAIEa5QZs0m_SYzSqHBIERF2YYIw4UP8fw4OrW1cu13U')
   .then(Response=>{
     console.log("Response" , Response.data.data);
     for(const obj of Response.data.data){
       console.log("obj" ,obj);
       date.push(obj.date);
       high.push(obj.high);


     }
     console.log("date",date);
     console.log("high",high);
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
        name: 'high',
        data: high,
      }
    ]

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
           <h1>chart</h1>
           <Chart options={this.state.options} series={this.state.series} type="line" width={1000} height={320} />
    
      </div>
    )
  }
}
export default Chartshow;