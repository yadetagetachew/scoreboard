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
const players = [
    {
        name:"Yadi",
        score:"30",
        id:1
    },
    {
        name:"Bobby",
        score:"52",
        id:2
    },
    {
        name:"Trey",
        score:"22",
        id:3
    },
    {
        name:"Jermaine",
        score:"3",
        id:4
    },
    {
        name:"Villma",
        score:"00",
        id:5
    },
    {
        name:"Becky",
        score:"77",
        id:6
    },
    {
        name:"James",
        score:"23",
        id:7
    }

];

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
class Counter extends React.Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         score: 0
    //     };
    //  this.incrementScore.bind(this)
    // }
    state = {
        score: 0
    };

    // incrementScore(){
    //     this.setState({
    //         score: this.state.score + 1
    //     });
    // }
    incrementScore = () => {
        // this.setState({
        //     score: this.state.score + 1
        // });
        this.setState(prevState => {
            return {
                score: prevState.score + 1
            }
        });
    }
    decrementScore(){
        // this.setState({
        //     score: this.state.score - 1
        // });
        this.setState( prevState => {
            return{
                score: prevState.score - 1
            }
        });
    }

    render(){
        return(
            <div className="counter">
                {/* <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> - </button> */}
                <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
                <span className="counter-score">{this.state.score}</span>
                {/* when using classes use (this) and use State like props */}
                {/* <span className="counter-score">{this.props.score}</span> */}
                {/* <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button> */}
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
                {/* <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button> */}
            </div>
        );  
    };
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header 
                title="Trivia Points" 
                totalPlayers={props.initialPlayers.length} 
            />

            {/* Player List */}
            {props.initialPlayers.map( (player) =>
                <Player 
                    name={player.name}
                    score={player.score}
                    key={player.id.toString()}
                />
            )}            
        </div>
    );
}



// ReactDOM.render(
// <Header />,
// document.getElementById('root')
// );

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
);