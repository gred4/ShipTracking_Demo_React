import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface CounterState {
    currentCount: number;
}

export class Counter extends React.Component<RouteComponentProps<{}>, CounterState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div>
            <h1>Data</h1>

            <p>Several data sources are combined to map the vessels. The AIS file stream is obtained from land and satellite measures.
                The system is also capable of record and send queue to update the log table when information is available.</p>

            <ul><h3>Data sources</h3>
                <li> Terrestrial (Terra-AIS)</li>
                <li> Satellite (Sat-AIS)</li>
                <li> Inmarsat - C </li>
            </ul>
            <p>Current count: <strong>{ this.state.currentCount }</strong></p>

            <button onClick={ () => { this.incrementCounter() } }>Increment</button>
        </div>;
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}
