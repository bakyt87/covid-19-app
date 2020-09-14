import React from 'react';
import { Link } from 'react-router-dom';
import GLOBE from 'vanta/dist/vanta.globe.min'

class Countries extends React.Component{
    constructor(props){
        super(props);
        this.state={
            c: [],
            d: {},
            loading: true
        }
        this.vantaRef = React.createRef()
        }
        componentDidMount(){
        
            fetch("https://api.covid19api.com/summary")
            .then(res=>res.json())
            .then(data=>{
               
                this.setState({c: data.Countries,
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
  color: 0x1fefb,
  color2: 0xf40075,
  size: 0.80,
  backgroundColor: 0xb6b6b6
                  })
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
        return(
           <div ref={this.vantaRef} class="container-fluid">
           
          <h1 class="display-1">STATISTICS IN COUNTRIES</h1>
           
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
             
            {
               
            this.state.c.map(count => (
            //    <tr key={count.Country} onClick={()=>{this.props.history.push(`/country/${count.Country}`)}}>
                <tr>
                    <td>{count.Country}</td>
                    <td>{count.NewConfirmed}</td>
                    <td>{count.TotalConfirmed}</td>
                    <td>{count.NewDeaths}</td>
                    <td>{count.TotalDeaths}</td>
                    <td>{count.NewRecovered}</td>
                    <td>{count.TotalRecovered}</td>
                </tr>
                  ))
            }
                </tbody>
              </table>
              </div>
              <h6 class="display-4">Updated on {this.state.d}</h6>
              <p>Webapp owner: Bakyt Kurmanov</p>
            
        </div>
        );
    }
}
}
export default Countries;