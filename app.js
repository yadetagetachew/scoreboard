// const title = React.createElement(
//     'h1', 
//     {id:'main-title', title: 'This is a title.'},
//     'My First react Element'
// );

// const desc =React.createElement(
//     'p',
//     null,
//     'I just learned how to create a react node and render it into the DOM.'
// );
// const header = React.createElement(
//     'header',
//     null,
//     title,
//     desc

// );

// const desc = 'I just learned how to create a React node and render it into the Dom'
// const MyTirleID = 'main-title'
// const name = 'Guil'

// const header = (
//   <header>
//     <h1 id={MyTirleID}>{name}'s First React Element</h1>
//     <p className="main-descd"> {desc}</p>
//     {}
//   </header>

// );


const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats" >Player: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return(
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
                {props.name}
            </span>
            <Counter />
            {/* If class is not used */}
            {/* <Counter score={props.score}/> */}
        </div>
        
    );
}

// const Counter = (props) => {
//     return(
//         <div className="counter">
//             <button className="counter-action decrement"> - </button>
//             <span className="counter-score">{props.score}</span>
//             <button className="counter-action increment"> + </button>
//         </div>
//     );
// }
const Counter = () => {
    // below is similar to this.state in class components (initial value)
    const [score, setScore] = React.useState(0);
    // constructor(){
    //     super()
    //     this.state = {
    //         score: 0
    //     };
    //  this.incrementScore.bind(this)
    // }
    // state = {
    //     score: 0
    // };

    // incrementScore(){
    //     this.setState({
    //         score: this.state.score + 1
    //     });
    // }
    const incrementScore = () => {
        // this.setState({
        //     score: this.state.score + 1
        // });

        setScore(prevScore => prevScore + 1);
        // this.setState(prevState => {
        //     return {
        //         score: prevState.score + 1
        //     }
        // });
    }
    const decrementScore = () => {
        // this.setState({
        //     score: this.state.score - 1
        // });
        //You can omit the return key by wrapping in parentheses for performance 
        //     this.setState( prevState => ({
        //             score: prevState.score - 1
        //     }));
        setScore(prevScore => prevScore - 1);
    }
   
    return(
        <div className="counter">
            {/* <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> - </button> */}
            {/* <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button> */}
            <button className="counter-action decrement" onClick={() => decrementScore()}> - </button>
            {/* <span className="counter-score">{this.state.score}</span> */}
            <span className="counter-score">{score}</span>
            {/* when using classes use (this) and use State like props */}
            {/* <span className="counter-score">{this.props.score}</span> */}
            {/* <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button> */}
            {/* <button className="counter-action increment" onClick={this.incrementScore}> + </button> */}
            <button className="counter-action increment" onClick={() => incrementScore()}> + </button>
            {/* <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button> */}
        </div>
    );  

};

const App = () => {
const [players, setPlayers] = React.useState([
    {
        name:"Yadi",
        id:1
    },
    {
        name:"Bobby",
        id:2
    },
    {
        name:"Trey",
        id:3
    },
    {
        name:"Jermaine",
        id:4
    },
    {
        name:"Villma",
        id:5
    },
    {
        name:"Becky",
        id:6
    },
    {
        name:"James",
        id:7
    }
]);
    // state = {
    //     // players used to be a const in global scope
    //     players: [
    //         {
    //             name:"Yadi",
    //             id:1
    //         },
    //         {
    //             name:"Bobby",
    //             id:2
    //         },
    //         {
    //             name:"Trey",
    //             id:3
    //         },
    //         {
    //             name:"Jermaine",
    //             id:4
    //         },
    //         {
    //             name:"Villma",
    //             id:5
    //         },
    //         {
    //             name:"Becky",
    //             id:6
    //         },
    //         {
    //             name:"James",
    //             id:7
    //         }
    //     ]
    // };

    const handleRemovPlayer = (id) => {
        setPlayers(prevPlayers => prevPlayers.filter(p => p.id != id));
        // this.setState( prevState => {
        //     return{
        //         players: prevState.players.filter(p => p.id != id)
        //     }
        // });
    }

    
    return (
        <div className="scoreboard">
            <Header 
                title="Score" 
                // totalPlayers={props.initialPlayers.length} 
                totalPlayers={players.length} 
            />

            {/* Player List */}
            {/* {props.initialPlayers.map( (player) => */}
            {/* initialPlayer was the name of the players const */}
            {players.map( player =>
                <Player 
                    name={player.name}
                    score={player.score}
                    id={player.id}
                    key={player.id.toString()}
                    removePlayer={handleRemovPlayer}
                />
            )}            
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(
// <Header />,
// document.getElementById('root')
// );

// ReactDOM.render(
//     //<App initialPlayers={players} />,
//      <App />,
//     document.getElementById('root')
// );