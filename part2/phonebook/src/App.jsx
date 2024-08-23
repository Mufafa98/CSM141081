import { useState, useEffect } from "react";
import PhoneBook from "./services/PhoneBook";
import Persons from "./components/Persons";
import AddForm from "./components/AddForm";
import Search from "./components/Search";
import Notification from "./components/Notification";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456" },
		{ name: "Ada Lovelace", number: "39-44-5323523" },
		{ name: "Dan Abramov", number: "12-43-234345" },
		{ name: "Mary Poppendieck", number: "39-23-6423122" },
	]);
	const hook = () => {
		PhoneBook.getAll().then((response) => {
			setPersons(response.data);
		});
	};
	useEffect(hook, []);
	return (
		<div>
			<h2>Phonebook</h2>
			<Search persons={persons} />
			<AddForm handler={setPersons} persons={persons} />
			<Persons persons={persons} handler={setPersons} />
		</div>
	);
};

export default App;
