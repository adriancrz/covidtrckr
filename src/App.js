import React from 'react';

import { Cards, Chart, CountryTicker } from './components';


class App extends React.Component {
    render() {
        return (
            <div>
                <Cards />
                <CountryTicker />
                <Chart />
            </div>
        )

    }
}

export default App;