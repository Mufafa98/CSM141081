import Part from "./Part";

const Content = ({ parts }) => {
	return (
		<div>
			{parts.map((part) => {
				return (
					<Part part={part.name} exercise={part.exercises} key={part.name} />
				);
			})}
		</div>
	);
};

export default Content;
