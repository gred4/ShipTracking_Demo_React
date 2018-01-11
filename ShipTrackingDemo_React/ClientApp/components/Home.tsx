import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Sligo</h1>
            <p>Ship Tracking System</p>
            <ul>
            </ul>
            <p></p>
            <ul>
                <li><strong>AIS information decoding, and database update.</strong>. </li>
                <li><strong>Mapping information on canvas.</strong>.  </li>
                <li><strong>Signal processing and communication capability </strong>. </li>
            </ul>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-9'>
                        <h3> Ship Information </h3>
                        <div>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Name/ID</th>
                                        <th>IMO number</th>
                                        <th>MMSI number</th>
                                        <th>Position</th>
                                        <th>Course</th>
                                        <th>Speed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Newtanic</td>
                                        <td>F39</td>
                                        <td>XASLOIKMN</td>
                                        <td>12x9 (m)</td>
                                        <td>223.6 (deg)</td>
                                        <td> 13 (Kn) </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div className='col-sm-9'>
                                <h3>Map area </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
