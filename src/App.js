import React, {Component} from 'react';
import CatList from './CatList';
import './App.css';


import Cat1 from './images/cat1.jpg';
import Cat2 from './images/cat2.jpg';
import Cat3 from './images/cat3.jpg';
import Cat4 from './images/cat4.jpg';
import Cat5 from './images/cat5.jpg';


class App extends Component {

    state = {
        now: null,
        cats: [
            {
                name: "Tyler",
                imgSrc: Cat1,
                clickCount: 0,
                id:1
            },
            {
                name: "Jack",
                imgSrc: Cat2,
                clickCount: 0,
                id:2
            },
            {
                name: "Ming",
                imgSrc: Cat3,
                clickCount: 0,
                id:3
            },
            {
                name: "Naccy",
                imgSrc: Cat4,
                clickCount: 0,
                id:4
            },
            {
                name: "Rock",
                imgSrc: Cat5,
                clickCount: 0,
                id:5
            }
        ]
    };



    render() {
        const { cats } = this.state;
        return (
            <div>
                <CatList cats={cats}/>
            </div>
        );
    }
}

export default App;
