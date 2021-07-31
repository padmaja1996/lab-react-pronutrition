import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import Search from "./Search.jsx";
import "./Box.css"

class Box extends Component {
    constructor(){
        super()
        this.getList = this.getList.bind(this);
        this.sum= 0;
        this.list= [];
    }

    cancelOnClickHandler = (event) => {
        const data=this.list;
        this.list=[];
        for(var item=0;item < data.length ;item++){
            if(data[item][1] !== event.target.value){
                this.list.splice(0,0,data[item])
            }
        }
        this.renderListBox()
    }

    renderListBox(){
        this.sum=0;
        const mapRows=this.list.map(fooditem=>{
            this.sum=this.sum+parseInt(fooditem[2])
            return <li key={fooditem[1]}>{fooditem[0] +" "+ fooditem[1]+" " + fooditem[2]+" cals"}
                    <button value={fooditem[1]} onClick={this.cancelOnClickHandler} className="cancel button">x</button></li>
        })
        ReactDOM.render(<ul className="listitem">{mapRows}</ul>,document.getElementById("list"))
        ReactDOM.render(<p className="todayheader">Today's Food {this.sum} cal</p>,document.getElementById("TodaysFood"))
    }

    checkList(){
        const data=this.list;
        this.list=[];
        let listname=[];
        for(var item=data.length-1;item>=0;item--){
            if(listname.indexOf(data[item][1]) < 0){
                listname.push(data[item][1])
                this.list.splice(0,0,data[item])
            }
        }
    }

    getList(currentClicked){
        this.list = [...this.list,currentClicked];
        this.checkList()
        this.renderListBox()
    }

    render() {
        return (
            <div className="combobox">
                <Search list={this.getList}></Search>
                {/* Listcontainer */}
                <div className="Listcontainer">
                    <article id="TodaysFood">
                        <p className="todayheader">Today's Food {this.sum} cal</p>
                    </article>
                        <div id="list"></div>
                </div>
            </div>
        );
    }
}

export default Box;