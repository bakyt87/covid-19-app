import React from 'react';
import { Link } from 'react-router-dom';
import GLOBE from 'vanta/dist/vanta.globe.min'

class Home extends React.Component{
    constructor(props){
    super(props);
    this.state={
        g: {},
        d: {},
        loading: true
    }
    this.vantaRef = React.createRef()
    }
    componentDidMount(){
        
        fetch("https://api.covid19api.com/summary")
        .then(res=>res.json())
        .then(data=>{
           
            this.setState({g: data.Global,
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
                color2: 0xf70000,
                size: 1.60,
                backgroundColor: 0x4f4757
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
 
          console.log("data"+this.state.g.NewConfirmed)
        return(
           <div ref={this.vantaRef} class="container-fluid">
            <div  class="container">
              
            <h1 class="display-1">COVID-19 GLOBAL STATISTICS</h1>

            <h2 class="display-2"> New Confirmed cases: <span class="nums"> { this.state.g.NewConfirmed }</span></h2> 
            

            <h2 class="display-2">Total Confirmed cases:    <span class="nums">{ this.state.g.TotalConfirmed }</span></h2>
         

            <h2 class="display-2">New Deaths:    <span class="nums">{ this.state.g.NewDeaths }</span></h2>
         

            <h2 class="display-2">Total Deaths: <span class="nums">{ this.state.g.TotalDeaths }</span></h2>
            

            <h2 class="display-2">New Recovered: <span class="nums">{ this.state.g.NewRecovered }</span></h2>
            
            
            <h2 class="display-2">Total Recovered:  <span class="nums">{ this.state.g.TotalRecovered }</span></h2>
           
              
            </div>  
            <h6 class="display-4">Updated on {this.state.d}</h6>
              <p>Webapp owner: Bakyt Kurmanov</p>
            </div>
        );
        }
    }
}
export default Home;