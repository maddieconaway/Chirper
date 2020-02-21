import React from 'react';
import './Talkwindow.css';

class Talkwindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chat:[]}
    }

    render() {
        return (
            <React.Fragment>
                <div id='divDiscussion' >
                    {this.props.dataFromParent.map((objChat) => {
                        return (
                            <p key={Math.random().toString(16).slice(-4)}>
                                {objChat.id} - {objChat.tStamp} - {objChat.inputValue}
                            </p>)
                    })}    
                </div>
            </React.Fragment>
        );
    }
}

export default Talkwindow;