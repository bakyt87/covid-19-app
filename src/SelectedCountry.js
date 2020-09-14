import React from 'react';
import { Link } from 'react-router-dom';
import GLOBE from 'vanta/dist/vanta.globe.min'

class SelectedCountry extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sc: {},
            d: {},
            loading: true
        }
        this.vantaRef = React.createRef()
        }
        componentDidMount(){
        
            fetch("https://api.covid19api.com/country/"+this.props.Country)
            .then(res=>res.json())
            .then(data=>{
              
                this.setState({sc: data,
                    
                    d: data.Date,
                    loading:false})
                    this.vantaEffect = GLOBE({
                    el: this.vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x29b1d9,
                    color2: 0xe02d83,
                    size: 1.50,
                    backgroundColor: 0xffffff
                  })
                  console.log(this.state.sc)
            })
            .catch(err=>console.log(`Error happened when retrieving data:${err}`))
        }
        componentWillUnmount() {
            if (this.vantaEffect) this.vantaEffect.destroy()
          }
        render(){
        if(this.state.loading){
            return null;
        }
        else{
 
          console.log("data"+this.state.sc.Country)
        
        return(
           <div ref={this.vantaRef} class="container-fluid">
           
            <div class="container">
            <h1 class="display-3">Stat in {this.state.sc.Country}</h1>
           
            <div class="tableFixHead">
            <table class="table dark table-hover">
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>New Confirmed</th>
                    <th>Total Confirmed</th>
                    <th>New Deaths</th>
                    <th>Total Deaths</th>
                    <th>New Recovered</th>
                    <th>Total Recovered</th>
                  </tr>
                </thead>
                <tbody>
             
           
               <tr>
                    <td>{this.state.sc.Country}</td>
                    <td>{this.state.sc.NewConfirmed}</td>
                    <td>{this.state.sc.TotalConfirmed}</td>
                    <td>{this.state.sc.NewDeaths}</td>
                    <td>{this.state.sc.TotalDeaths}</td>
                    <td>{this.state.sc.NewRecovered}</td>
                    <td>{this.state.sc.TotalRecovered}</td>
                  </tr>
            
                </tbody>
              </table>
              </div>
              <h1 class="display-4">Updated on {this.state.d}</h1>
              </div>
        </div>
        );
    }
}
}
export default SelectedCountry;