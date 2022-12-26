import React,{ Component } from "react";
import CardList from "../components/CardList";
import Searchbox from '../components/searchbox.js';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
    constructor(){
        super() //we need to call super()[constructor of component] before using this.
        this.state = {
            robots:[],
            searchfield:''

        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots:users})
            );
    }


    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
        // searchfield ma searchbox ma type gareko value haleko 
         // console.log(event.target.value);
    }
    
    render(){
        // const filteredRobots =  this.state.robots.filter(robot => {
        //     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        // })
        // if (this.state.robots.length === 0){            
        //     return <h1>Loading</h1>
        // }
        const { robots, searchfield} = this.state
        const filteredRobots =  robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!robots.length){            
            return <h1>Loading</h1>
        }
        else{
            return(
                <div className = "tc">
                    <h1> Robofriends</h1>
                    <Searchbox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots = {filteredRobots} />
                        {/* CardList lai Scroll ko child banako. and Cardlist scrollable banauna lako */}
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
