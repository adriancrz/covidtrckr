import React from 'react';

import { Cards, Chart, CountryTicker } from './components';
import styles from './App.module.css';


class App extends React.Component {
    render() {
        return (
            <div className= {styles.cotainer}>
                <Cards />
                <CountryTicker />
                <Chart />
            </div>
        )

    }
}

export default App;