import React from 'react';
import { Link } from 'react-router-dom';
import GLOBE from 'vanta/dist/vanta.globe.min'

class Notfound extends React.Component{
    constructor(props){
        super(props);
        this.vantaRef = React.createRef()
        }
        
        componentDidMount(){
            this.vantaEffect = GLOBE({
                el: this.vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xe4ff08,
                color2: 0x75f4,
                size: 0.80,
                backgroundColor: 0x10904
              })

        }
    render(){
        return(
         <div ref={this.vantaRef} class="container-nf">
             <h1 class="display-1"> page not found</h1>
         </div>
        );
    }
}
export default Notfound;