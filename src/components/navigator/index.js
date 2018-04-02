import React, {Component} from 'react';

export default class Navigator extends Component {
    constructor(props){
        super(props);
        this.state = {
            cursor: 0
        };
    }
    
    render(){
        const {children} = this.props,
              {cursor} = this.state;
        return (<div className="navigator">
                {React.Children.map(children, (e,i) => {
                        return i===cursor? e: null;
                    })}
                </div>);
    }
}
