import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const Course = ({ courses }) => (
	<div>
		{courses.map((course) => (
			<div>
				<Header course={course.name} />
				<Content parts={course.parts} />
				<Total total={course.parts} />
			</div>
		))}
	</div>
);

export default Course;
