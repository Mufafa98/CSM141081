import { useState } from "react";
import PhoneBook from "../services/PhoneBook";
import Notification from "./Notification";

const AddForm = ({ handler, persons }) => {
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [message, setMessage] = useState(["", ""]);
	const update_name = (event) => {
		setNewName(event.target.value);
	};
	const update_number = (event) => {
		setNewNumber(event.target.value);
	};
	const add_name = (event) => {
		event.preventDefault();
		const nameObject = {
			name: newName,
			number: newNumber,
			id: (persons.length + 1).toString(),
		};
		if (persons.some((person) => person.name === newName)) {
			setMessage([`${newName} is already added to phonebook`, "error"]);
			setTimeout(() => {
				setMessage(["", ""]);
			}, 5000);
			return;
		}
		if (persons.some((person) => person.number === newNumber)) {
			if (
				window.confirm(
					`${newNumber} is already added to phonebook, replace the old number with a new one?`,
				)
			) {
				const person = persons.find((person) => person.number === newNumber);
				PhoneBook.put(person.id, nameObject).catch((error) => {
					setMessage([
						"The selected contact has been already deleted from the server",
						"error",
					]);
					setTimeout(() => {
						setMessage(["", ""]);
					}, 5000);
					return;
				});
				const temp = persons.filter((p) => p.id !== person.id);
				handler(temp.concat(nameObject));
				setMessage([`${newNumber} has been updated to phonebook`, "success"]);
				setTimeout(() => {
					setMessage(["", ""]);
				}, 5000);
				return;
			}
		}
		handler(persons.concat(nameObject));
		PhoneBook.create(nameObject);
		setMessage([`${nameObject.name} has been added to phonebook`, "success"]);
		setTimeout(() => {
			setMessage(["", ""]);
		}, 5000);
	};
	return (
		<div>
			<h3>Add a new contact</h3>
			<form onSubmit={add_name}>
				<div>
					name: <input onInput={update_name} />
				</div>
				<div>
					number: <input onInput={update_number} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
				<Notification message={message[0]} cs={message[1]} />
			</form>
		</div>
	);
};

export default AddForm;
