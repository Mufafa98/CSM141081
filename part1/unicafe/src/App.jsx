import { useState } from "react";

const Button = ({ onClick, text }) => (
	<button type="button" onClick={onClick}>
		{text}
	</button>
);

const Statistics = ({ good, bad, neutral, all }) => {
	if (all !== 0)
		return (
			<div>
				<h1>Statistics</h1>
				<table>
					<tbody>
						<StatisticLine text="good" value={good} />
						<StatisticLine text="neutral" value={neutral} />
						<StatisticLine text="bad" value={bad} />
						<StatisticLine text="all" value={all} />
						<StatisticLine text="average" value={(good - bad) / all} />
						<StatisticLine text="positive" value={`${(good / all) * 100}%`} />
					</tbody>
				</table>
			</div>
		);
	return (
		<div>
			<h1>Statistics</h1>
			<p>No feedback given</p>
		</div>
	);
};

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [all, setAll] = useState(0);

	const updateGood = () => {
		const newData = good + 1;
		setAll(all + 1);
		setGood(newData);
	};
	const updateNeutral = () => {
		const newData = neutral + 1;
		setAll(all + 1);
		setNeutral(newData);
	};
	const updateBad = () => {
		const newData = bad + 1;
		setAll(all + 1);
		setBad(newData);
	};

	return (
		<div>
			<h1>Give Feedback</h1>
			<Button onClick={updateGood} text="good" />
			<Button onClick={updateNeutral} text="neutral" />
			<Button onClick={updateBad} text="bad" />
			<Statistics good={good} bad={bad} neutral={neutral} all={all} />
		</div>
	);
};

export default App;
