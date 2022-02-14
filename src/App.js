import classes from "./App.module.scss";

function App() {
	return (
		<div className={classes.App}>
			<header className={classes.Header}>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className={classes.Link}
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
