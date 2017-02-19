var React = require('react');
var ReactDOM = require('react-dom');

function Farm (props) {
	return (
		<div style = {{ height: '200px', width: '160px', textAlign: 'center', display:'inline-block', backgroundColor: 'yellow', margin: '10px' }}>
			<h1>Farm</h1>
			<p>Earns 10-20 Gold</p>
			<div>
				<button onClick = {props.findFarmGold} >Find Gold!</button>
			</div>
		</div>
	)
}

function Cave (props) {
	return (
		<div style = {{ height: '200px', width: '160px', textAlign: 'center', display:'inline-block', backgroundColor: 'yellow', margin: '10px' }}>
			<h1>Cave</h1>
			<p>Earns 5-10 Gold</p>
			<div>
				<button onClick = {props.findCaveGold}>Find Gold!</button>
			</div>
		</div>
	)
}

function House (props) {
	return (
		<div style = {{ height: '200px', width: '160px', textAlign: 'center', display:'inline-block', backgroundColor: 'yellow', margin: '10px' }}>
			<h1>House</h1>
			<p>Earns 2-5 Gold</p>
			<div>
				<button onClick = {props.findHouseGold}>Find Gold!</button>
			</div>
		</div>
	)
}

function Casino (props) {
	return (
		<div style = {{ height: '200px', width: '160px', textAlign: 'center', display:'inline-block', backgroundColor: 'yellow', margin: '10px' }}>
			<h1>Casino</h1>
			<p>Earns/Takes 0-50 Gold</p>
			<div>
				<button onClick = {props.findCasinoGold}>Find Gold!</button>
			</div>
		</div>
	)
}

function Activities (props) {
	return (
		<div style = {{ overflow: 'scroll', height: '50%', width: '85%', display:'inline-block', backgroundColor: 'pink', margin: '10px' }}>
			<div style = {{whiteSpace: 'pre-wrap' }}>
				{props.statements}
			</div>
		</div>
	)
}

var MainDiv = React.createClass({
	getInitialState: function(){
        return {
        	goldCount: 0,
        	statements: ""   
        }
    },
	render: function (){
		return (
		<div>
			<p>Your Gold: {this.state.goldCount}</p>
			<Farm findFarmGold={this.findFarmGold} />
			<Cave findCaveGold = {this.findCaveGold} />
			<House findHouseGold = {this.findHouseGold} />
			<Casino findCasinoGold = {this.findCasinoGold} />
			<Activities statements = {this.state.statements}/>
		</div>
		)
	},
	findFarmGold: function(event){
		var goldFound = Math.floor(Math.random() * 10) + 10
		console.log(goldFound)
        this.setState({goldCount: this.state.goldCount += goldFound });
        this.setState({statements: this.state.statements += "you found " + goldFound + " gold \n " });
        console.log(this.state.statements)
    },
    findCaveGold: function(event){
		var goldFound = Math.floor(Math.random() * 5) + 5
		console.log(goldFound)
        this.setState({goldCount: this.state.goldCount += goldFound });
        this.setState({statements: this.state.statements += "you found " + goldFound + " gold \n" });
    },
    findHouseGold: function(event){
		var goldFound = Math.floor(Math.random() * 3) + 2
		console.log(goldFound)
        this.setState({goldCount: this.state.goldCount += goldFound });
        this.setState({statements: this.state.statements += "you found " + goldFound + " gold \n" });
    },
    findCasinoGold: function(event){
		var goldFound = Math.floor(Math.random() * 50) * ((Math.random() > .5) ? 1 : -1)
		console.log(goldFound)
        this.setState({goldCount: this.state.goldCount += goldFound });
        this.setState({statements: this.state.statements += "you found " + goldFound + " gold \n" });
    }
})

ReactDOM.render(<MainDiv/>, document.getElementById('app'));
