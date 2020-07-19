import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryTicker from './components/CountryTicker/CountryTicker';
//import { Cards, Chart, CountryTicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';


class App extends React.Component {

    async componentDidMount(){
        const data = await fetchData();
        console.log(data);
    }
    render() {
        return (
            <div className= {styles.container}>
                <Cards />
                <CountryTicker />
                <Chart />
            </div>
        )

    }
}

export default App;