import React, { useRef, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { HiOutlinePlus } from "react-icons/hi";
import Modal from "react-modal";

const Task = () => {
	const [tasks, setTasks] = useState([]);
	const inputRef = useRef();

	// task handler
	const taskHandler = () => {
		const inputText = inputRef.current.value.trim();
		if (inputText.length > 0) {
			const newTask = {
				id: new Date(),
				task: inputText,
			};
			setTasks([...tasks, newTask]);
		}
		inputRef.current.value = "";
	};

	// add date
	const addDate = () => {
		new Date();
	};

	// modal custom styles
	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			backgroundColor: "#f1e6e680",
		},
	};

	Modal.setAppElement("*");

	let subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = "#f00";
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			<div className="m-8 p-3 border-2 border-indigo-200 max-w-sm">
				{/* task title*/}
				<div className="flex justify-between w-full mb-4 mt-2">
					<h3 className="text-lg text-indigo-900 font-semibold">My Task</h3>
					<MdMoreVert
						size="1.5rem"
						className="cursor-pointer text-indigo-900"
					/>
				</div>
				{/* task input field*/}
				<div className="flex items-center">
					<button
						onClick={() => taskHandler()}
						className="bg-indigo-900 hover:bg-indigo-800 text-white rounded-full p-1 mr-3"
					>
						<HiOutlinePlus size="1.5rem" className="cursor-pointer" />
					</button>
					<input
						type="text"
						placeholder="Add a task"
						ref={inputRef}
						className="text-lg outline-none text-indigo-900 bg-white"
					/>
				</div>
				{/* task added */}
				<div className="mt-3">
					{tasks.map((task) => (
						<div key={task.id} className="flex items-center my-3">
							<button
								onClick={() => taskHandler()}
								className="bg-indigo-900 hover:bg-indigo-800 text-white rounded-full p-1 mr-3"
							>
								<HiOutlinePlus size="1.5rem" className="cursor-pointer" />
							</button>
							<p className="text-lg text-indigo-900">{task.task}</p>
							{/* edit icon */}
							<button className="flex-1 text-right">✏</button>
						</div>
					))}
				</div>
			</div>
			{/* add task details */}
			<div>
				<button onClick={openModal}>Open Modal</button>
				<Modal
					isOpen={modalIsOpen}
					onAfterOpen={afterOpenModal}
					onRequestClose={closeModal}
					style={customStyles}
				>
					<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
					<button onClick={closeModal}>close</button>

					{/* task name */}
					<div className="w-96">
						<p className="text-lg text-indigo-900">Scrum meeting</p>
						<textArea
							className="my-3 block w-full p-2 h-16 outline-none text-indigo-900 text-lg"
							type="text"
							placeholder="Add details"
						/>
						<div className="flex justify-between">
							<button
								onClick={() => addDate()}
								className="text-lg text-indigo-900 hover:text-indigo-800"
							>
								Add date
							</button>
							<button className="text-lg text-indigo-900 hover:text-indigo-800">
								Save
							</button>
						</div>
						<button className="text-lg text-indigo-900 cursor-pointer hover:text-indigo-800">
							Move to another list
						</button>
					</div>
				</Modal>
			</div>
		</div>
	);
};

export default Task;
