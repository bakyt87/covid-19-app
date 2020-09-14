import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {Nav, Navbar, NavItem } from 'react-bootstrap';
import Notfound from './Notfound';
import Countries from './Countries';
import Home from './Home';
import SelectedCountry from './SelectedCountry'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     searchCountry: ""
    }
    this.updateSearchId = this.updateSearchId.bind(this);
  
  }

  updateSearchId(e){
    this.setState({searchCountry : e.target.value})
    
  }
 render(){
  return (
<div className="App">
{/* <Navbar inverse collapseOnSelect staticTop>
 <Navbar.Header>
 <LinkContainer to="/">
 <Navbar.Brand>
 CovidStats
 </Navbar.Brand>
 </LinkContainer>
 <Navbar.Toggle />
 </Navbar.Header>
 <Navbar.Collapse>
 <Nav>
 <LinkContainer to="/">
 <NavItem>Global</NavItem>
 </LinkContainer>
 <LinkContainer to="/">
 <NavItem>Countries</NavItem>
 </LinkContainer>
 
 </Nav> */}
 {/* <Navbar.Form pullRight>
 <FormGroup>
 <FormControl type="text" onChange={this.updateSearchId} placeholder="" />
 </FormGroup>{' '}
 <Link className="btn btn-default" to={"/Sale/" + this.state.searchId}>Search</Link>
 </Navbar.Form> */}
 {/* </Navbar.Collapse>
</Navbar> */}
{/* <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="navbar-header">
        <a class="navbar-brand" href="/"></a>
      </div>
      <ul class="nav navbar-nav">
        <li><Link class="active"><a href="/">Global<Link/></li>
        <li><a href="/countries">Countries</a></li>
      </ul>

  <form class="form-inline">
    <input class="form-control mr-sm-2" type="text" onChange={this.updateSearchId} placeholder="Country Name" />
    <button class="btn btn-success" to={"/country/" + this.state.searchCountry}>Search</button>
  </form>
</nav> */}
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">CovidStats</a>
      </div>
      <ul class="nav navbar-nav">
        <li ><a href="/">Global</a></li>
        <li ><a href="/countries">Countries</a></li>
      </ul>
     
    </div>
  </nav>
<Switch>
        <Route exact path ="/" render={()=>( 
          <Home/>
        )} />
        
        <Route exact path ="/countries" render={()=>(
          <Countries/>
        )} />
         <Route exact path='/country/:Country' render={(props)=>(
         <SelectedCountry Country={props.match.params.Country}/>
        )} />

         <Route render={()=>(
          <Notfound/>
        )} />

</Switch>
</div>
  );
         }   
}

export default App;
