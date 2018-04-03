import React, {Component} from 'react';

export default class Navigator extends Component {
    constructor(props){
        super(props);
        this.state = {
            cursor: 0
        };
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }
    
    render(){
        const {children} = this.props,
              {cursor} = this.state;
        return (<div className="navigator">
                <nav>
                    {this.state.cursor !== 0 &&
                        <button type="button" className="navigator__previous" onClick={this.previous}>Previous</button>
                    }
                    {this.state.cursor !== this.props.children.length - 1 &&
                    <button type="button" className="navigator__next" onClick={this.next}>Next</button>
                    }
                </nav>
                {React.Children.map(children, (e,i) => {
                        return i===cursor? e: null;
                    })}
                </div>);
    }

    previous(){
        let cursor = this.state.cursor - 1;
        this.setState({
            ...this.state,
            cursor
        });
    }

    next(){
        let cursor = this.state.cursor + 1;
        this.setState({
            ...this.state,
            cursor
        });
    }
}
