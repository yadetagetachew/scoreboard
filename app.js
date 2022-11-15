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

const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats" >Player: 1</span>
        </header>
    );
}

const Player = () => {
    return(
        <div className="player">
            <span className="player-name">
                Guil
            </span>
            <Counter />
        </div>
        
    );
}

const Counter = () => {
    return(
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header />
            {/* Player List */}
            <Player />
        </div>
    );
}

// ReactDOM.render(
// <Header />,
// document.getElementById('root')
// );

ReactDOM.render(
    <App />,
    document.getElementById('root')
);