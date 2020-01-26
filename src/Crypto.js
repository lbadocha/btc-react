import React, {Component} from 'react';

import axios from 'axios';

import CryptoList from './CryptoList';

class Crypto extends Component {

    constructor() {
        super();
        this.state = {
            crypto: [],
            filteredCrypto: []
        }
    }

    componentDidMount() {
        this.getData();
        this.timer = setInterval(this.getData, 5000);
    }
    
    getData = () => {
        axios.get(`https://blockchain.info/pl/ticker`)
        .then(res => {
            const cryptoData = res.data;
            let cryptoArray = [];
            let i = 0;
        
            for(let key in cryptoData) {
                let prevCryptoValue = this.state.crypto[i];
                let classValue = 'blue';

                if(prevCryptoValue!==undefined) {
                    if(prevCryptoValue.last>cryptoData[key].last) {
                        classValue = 'red';
                    } else if(prevCryptoValue.last<cryptoData[key].last) {
                        classValue = 'green';
                    } else {
                        classValue = 'blue';
                    }
                }

                let cryptoObj = {
                    last: cryptoData[key].last,
                    symbol: cryptoData[key].symbol,
                    currency: key,
                    colorClass: classValue
                }
                
                cryptoArray.push(cryptoObj);
                i++;
            }
            this.setState({
                crypto:cryptoArray,
                filteredCrypto: cryptoArray
            });
             this.filterCrypto();
        });
    }


    filterCrypto = () => {
        let filteredCryptoData = this.state.crypto.filter(cryptoElement=>{
            return cryptoElement.currency.toUpperCase().includes(this.filterInput.value.toUpperCase());
        });

        this.setState({filteredCrypto: filteredCryptoData})
    }

    render() {

        return (
            <div className='crypto'>
                <h2>Crypto rate</h2>
                <input type="text" onChange={this.filterCrypto} ref={input=> this.filterInput = input} />
                <CryptoList cryptoList={this.state.filteredCrypto} />
            </div>
        )
    }
    
}

export default Crypto;