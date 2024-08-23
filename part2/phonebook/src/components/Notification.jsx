const Notification = ({ message, cs }) => {
	if (message === "") {
		return null;
	}

	return <div className={cs}>{message}</div>;
};

export default Notification;
