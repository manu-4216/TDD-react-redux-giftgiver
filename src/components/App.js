import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
    constructor() {
        super();

        this.state = { gifts: [] };
    }

    addGift = () => {
        const { gifts } = this.state;
        const ids = gifts.map(gift => gift.id);
        const max_id = ids.length ? Math.max(...ids) : 0;

        gifts.push({ id: max_id + 1 });

        this.setState({ gifts });
    };

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <Button className="btn-add" onClick={this.addGift}>
                    Add Gift
                </Button>
            </div>
        );
    }
}

export default App;
