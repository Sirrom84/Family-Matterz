import React, {useEffect, useState} from "react";
import axios from "axios";

export function useData() {
	const [data, setData] = useState();
	useEffect(() => {
		axios.get("http://localhost:9000/calender").then((response) => {
			setData(response.data);

			// console.log(response.data);
		});
	}, []);
	// console.log("data :>> ", data);
	return data;
}

export const employees = [
	{
		text: "The Smiths",
		id: 1,
		color: "#56ca85",
		avatar: "/images/clusterFamonline.svg ",
		age: 4,
		discipline: "Mom, Dad, Brian, Sarah",
	},
];
