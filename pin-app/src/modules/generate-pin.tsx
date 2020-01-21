import React from 'react';


export default class Pin extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            pins:[],
        }
    }
    
    render= () => {
        //const pines = this.state;
        return (
            <div>
                <button onClick={this.update_random_number}>click</button>
                <b>Call Pin Generator:</b>
                {this.state.pins.map((pin:number) => <li key={pin}>{pin}</li>)}
            </div>
        );
    }
    update_random_number = () => {
        
        this.setState({
            pins: this.show_random_number()
        });
    }

    show_random_number = () => {
        let result: string[] = [];
        for (let i = 0; i < 5; i++) {
            const pin = this.fourdigits().join("");
            if (!result.includes(pin))
                result[i] = pin;
            else
                i--;
        }
        return result; // show popup with a random number
        
    }

    fourdigits = () => {
        let pinArray: number[] = [];
        let consecutive;
        for (let i = 0; i < 4; i++) {
            const previous = Number(pinArray[i - 1]);
            const diference = pinArray[i - 1] - pinArray[i - 2];
            Math.abs(diference) === 1 ? consecutive = pinArray[i - 1] + diference : consecutive = null;
            pinArray[i] = this.randomExcluded(0, 9, previous, consecutive);
        }
        return pinArray;
    }

    randomExcluded = (min: number, max: number, previous: number, consecutive: number | null) => {
        let n
        if (consecutive) {
            n = Math.floor(Math.random() * (max - min - 1) + min);
            if (n >= consecutive) n++;
        }
        n = Math.floor(Math.random() * (max - min) + min);
        if (n >= previous) n++;
        return n;
    }
}
