/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import "./FoodBox.css";

//Progression1
class FoodBox extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 1,
            sum: parseInt(this.props.cal),
        }
    }

    setList(variable){
        this.props.food(variable)
    }

    OnClickHandler = () => {
        this.setState(PreviousState => ({count: PreviousState.count + 1}));
        this.setState(PreviousState => ({sum: PreviousState.sum + parseInt(this.props.cal)}))
        let variable = [this.state.count,this.props.name,this.state.sum]
        this.setList(variable)
    }

    render() {
        return (
                <div className="box">
                    <article className="media">
                        <img src= {this.props.src} width="120" height="80"/>
                        <div className="content">
                            <strong>{this.props.name}</strong> 
                            <small>{this.props.cal}</small>
                        </div>
                        <div className="field">
                            <input className="input" type="number" value="1" />
                            <button className="button" onClick={this.OnClickHandler}>
                                    +
                            </button>
                        </div>
                    </article>
                </div>
        );
    }
}

export default FoodBox;