import React, {useState, useEffect} from "react";
import {GroceryListItem} from "./GroceryListItem";
import {FaRegArrowAltCircleUp} from "react-icons/fa";
import "./GroceryList.scss";
import axios from "axios";
import BottomNav from "../BottomNav/BottomNav";

export const GroceryList = () => {
	const [input, setInput] = useState("");
	const [items, setItem] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:9000/groceries").then((res) => {
			setItem(res.data);
		});
	}, []);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const newItem = {title: input, checked: false, category: ""};
		setItem([...items, newItem]);
		setInput("");
		axios
			.post("http://localhost:9000/groceries", newItem)
			.then(() => {
				console.log("New Item Added");
			})
			.catch((err) => {
				console.log("Item Not Added", err);
			});
	};

	const onCheckHandler = (index) => {
		const checked = [...items];
		Object.assign(checked[index], {
			checked: !checked[index].checked,
		});
		setItem(checked);
		const item = items[index];
		axios
			.put(`http://localhost:9000/groceries/${item._id}`, item)
			.catch((err) => {
				console.log("Error Updating Item", err);
			});
	};

	const onDeleteHandler = (item) => {
		const filteredItems = items.filter((element) => element._id !== item._id);
		setItem(filteredItems);
		axios.delete(`http://localhost:9000/groceries/${item._id}`).catch((err) => {
			console.log("Error deleting Item", err);
		});
	};

	const checkItemsLeft = (list) => {
		let count = 0;
		for (const item of list) {
			if (!item.checked) {
				count++;
			}
		}
		return count;
	};

	const groceryItems = items.map((data, index) => {
		return (
			<GroceryListItem
				key={index}
				data={data}
				onToggle={() => onCheckHandler(index)}
				onDelete={() => onDeleteHandler(data)}
			/>
		);
	});

	return (
		<div className="groceryList">
			<h1>Grocery List</h1>
			<span>Items left: {checkItemsLeft(items)}</span>
			<div className="list">{groceryItems}</div>
			<form className="input" onSubmit={onSubmitHandler}>
				<input
					onChange={(e) => setInput(e.target.value)}
					type="text"
					placeholder="Add an Item"
					value={input}
				/>
				<FaRegArrowAltCircleUp
					value={input}
					className="submit"
					onClick={onSubmitHandler}
				/>
			</form>
			<BottomNav />
		</div>
	);
};
