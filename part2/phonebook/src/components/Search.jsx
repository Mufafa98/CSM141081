import { useState } from "react";

const Search = ({ persons }) => {
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const update_search = (event) => {
		setSearch(event.target.value);
		setSearchResults(
			persons.filter((person) =>
				person.name.toLowerCase().includes(search.toLowerCase()),
			),
		);
	};
	return (
		<div>
			<h3>Search</h3>
			by name: <input onInput={update_search} />
			{searchResults.length > 0 && (
				<>
					<h4>Search results</h4>
					{searchResults.map((person) => (
						<p key={person.name}>
							{person.name} {person.number}
						</p>
					))}
				</>
			)}
		</div>
	);
};

export default Search;
