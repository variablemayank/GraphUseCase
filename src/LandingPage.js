import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';


export default class LandingPage extends Component {
    constructor(props) 
    {
        super(); 
        this.state = {
            startDate: new Date(),
            endDate:new Date(),
            data: [],
        }
    }
    componentDidMount() 
    {
      const url = "http://www.mocky.io/v2/5cd04a20320000442200fc10";
      Axios.get(url)
      .then(res => {
          const data = res.data;
          console.log("data is",data);
          this.setState({data:data}); 
      }).catch(err=>{
          console.log("err is",err);
      })
    }   
    handleChange = (date) => {
        // Start date
        var startDate =    '2019/04/19';    
        var startDateCheck = Date.parse(startDate);
        startDate = startDate/1000;
        console.log(startDate);
        // End date
        var EndDate = '19/04/2019';
        var EndDateCheck = new Date(EndDate.getTime());

                    
        var selectDate = date;
        selectDate = new Date(selectDate.getTime());

        if(date>=startDateCheck && date <=EndDateCheck) {
            this.setState({startDate:date})
        }
        else {
            alert("Invalid Date Please select the date between range between "+startDate + " and " + EndDate)
        }
    }
    handleChange1 = (date) => {                 
        this.setState({
          startDate1: date
        });
    }
  render() {               
    return (
      <div>
          APP
          <div style ={{display:'flex',justifyContent:'space-evenly',textAlign:'center'}}>
            <div>
                <p>Start Date</p>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                 <p>End Date</p>
                <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleChange}
                />
            </div>
        </div>
        <div>
            
        </div>
      </div>
    )
  }
}
