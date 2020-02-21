import React from 'react';
import './Saysomething.css';


class Saysomething extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            tStamp: '',
            inputValue: ''
        }
        this.clickEvent = this.clickEvent.bind(this);
    }

    handleEvent = (e) => {
        this.setState({ inputValue: e.target.value });
        let date = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getFullYear(); //Current Year
        let hours = new Date().getHours(); //Current Hours
        let min = new Date().getMinutes(); //Current Minutes
        let sec = new Date().getSeconds(); //Current Seconds
        this.setState({
            tStamp: date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
        });
    }

    handleName = (e) => {
        this.setState({ id: e.target.value });
    }

    clickEvent = () => {
        let arr = [];
        arr.push(this.state.id);
        arr.push(this.state.tStamp);
        arr.push(this.state.inputValue);
        this.props.callbackFromParent(arr);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <br></br>
                    <input id='txtName' type='text' value={this.state.id} onChange={e => this.handleName(e)} />
                    <input id='txtSayit' type='text' value={this.state.inputValue} onChange={e => this.handleEvent(e)} />
                    <button onClick={e => this.clickEvent()}>Send</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Saysomething;