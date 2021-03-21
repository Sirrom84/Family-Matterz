import React, {useEffect, useState} from "react";
import axios from "axios";

export function useData() {
	const [data, setData] = useState();
	useEffect(() => {
		axios.get("http://localhost:9000/calender").then((response) => {
			setData(response.data);

		});
	}, []);
	return data;
}

export const employees = [
	{
		text: "The Smiths",
		id: 1,
		color: "#56ca85",
		avatar: "/images/daughter.png ",
		age: 4,
		discipline: "Golf, Vegan, Cats",
	},
];