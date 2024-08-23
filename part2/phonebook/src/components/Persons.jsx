import Person from "./Person";
import PhoneBook from "../services/PhoneBook";
const Persons = ({ persons, handler }) => {
	return (
		<div>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<div key={person.name}>
					<Person person={person} />
					<button
						type="submit"
						onClick={() => {
							if (window.confirm(`Delete ${person.name}?`)) {
								const temp = persons.filter((p) => p.id !== person.id);
								handler(temp);

								PhoneBook.remove(person.id);
							}
						}}
					>
						delete
					</button>
				</div>
			))}
		</div>
	);
};

export default Persons;
