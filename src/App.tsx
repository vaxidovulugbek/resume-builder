import { useEffect, useState } from "react";
import "App.css";
import useStore from "Store";
import { ScrollTop } from "helpers/ScrollToTop";
import AllRoutes from "Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "components/Footer/Footer";
import useWindowSize from "hooks/useWindowSize";
import { notifications } from "helpers/Notifications";
import { apiHelpers } from "utils/apiHelpers";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import useFetchData from "hooks/useFetchData";
AOS.init();

function App() {
	const { darkTheme } = useStore();
	// // const ss = useFetchData();
	// useEffect(() => {
	// 	notifications.success("Успех");
	// 	// const { data } = useFetchData();
	// 	console.log(apiHelpers.getQueryKey("GET", "url", ["params"]));
	// }, []);

	// const { isLoading, isError, data } = useQuery([], () =>
	// 	axios.get("https://jsonplaceholder.typicode.com/todos")
	// );

	return (
		<div
			className={
				darkTheme
					? "App dark-theme flex flex-col justify-between"
					: "App flex flex-col justify-between"
			}
		>
			{/* <MyComponent /> */}
			<AllRoutes />
			<ScrollTop />
			<Footer />
		</div>
	);
}

export default App;
