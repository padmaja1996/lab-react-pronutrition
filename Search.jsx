import React, { Component } from 'react';
import FoodBox from "./FoodBox.jsx";
import "./Search.css"

//Progression2
//Progression3
class Search extends Component {
    constructor(){
        super();
        this.state={
            InputValue:"",
            foods : [
                { name: "pizza",src:"https://i.imgur.com/eTmWoAN.png",cal:"400" },
                { name: "apple",src:"https://i.imgur.com/cO5kvXib.jpg",cal: "81"},
                { name: "orange",src:"https://i.imgur.com/VtWAepwb.jpg",cal:"65"},
                { name: "banana",src:"https://i.imgur.com/OOyvNATb.jpg",cal: "105"},
                { name: "dates",src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Jod6awgW2wt5bFFlkenK61M3cP81qw1pRw&usqp=CAU",cal:"228"},
                { name: "grapes",src:"https://i.imgur.com/LfqndJWb.jpg",cal:"114"},
                { name: "chocolate",src:"https://i.imgur.com/OF5iKJQb.jpg",cal:"208"},
                { name: "noodles",src:"https://i.imgur.com/EteC55wb.jpg",cal:"159"}
            ]
        }
        this.getFoodElementList=this.getFoodElementList.bind(this);
   }
    UpdateInputValueHandler = event =>{
        this.setState({ InputValue: event.target.value });
    }

    getFoodElementList(currentfooditem){
        this.props.list(currentfooditem)
    }

    renderOutput(){
        let data=[]
        if(!(this.state.InputValue === "")){
            const fooddata = this.state.foods;
            // eslint-disable-next-line array-callback-return
            data = fooddata.filter(food =>{
                if(food.name.includes(this.state.InputValue.toLowerCase()))
                    return food;
            })
        }
        else{
            data = this.state.foods;
        }
        const mapsRows= data.map(datavariable =>{
         const variable= <FoodBox key={datavariable.name} name= {datavariable.name} src= {datavariable.src} cal= {datavariable.cal} food={this.getFoodElementList}></FoodBox>
            return variable
       })
       return mapsRows
     }

    render() {
        return (
            <div className="search">
                <p className="searchheader">Search</p>
                <input type="text" className="searchinput input" placeholder="Find a Food" value={this.state.InputValue} onChange={this.UpdateInputValueHandler}></input>
                {this.renderOutput()}
            </div>
        );
    }
}

export default Search;