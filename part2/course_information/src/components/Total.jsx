const Total = ({ total }) => {
	let sum = 0;
	for (const num of total) {
		sum += num.exercises;
	}
	sum = total.reduce((acc, currVal) => acc + currVal.exercises, 0);
	return <p>Number of exercises {sum}</p>;
};

export default Total;
