import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Home404.module.scss";

const Home404 = () => {
	const navigate = useNavigate();

	const [seconds, setSeconds] = useState<number>(10);

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 10000);

		const timer = setInterval(() => {
			setSeconds((prev) => prev - 1);
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>404</h1>
			<p className={styles.description}>
				Кажется что-то пошло не так! Страница, которую вы запрашиваете, не
				существует. Возможно она была удалена, или вы набрали неверный адрес.
				Перейдите на{" "}
				<Link to="/" className={styles.link}>
					главную страницу
				</Link>{" "}
				и попробуйте найти необходимую информацию там. Автоматический переход
				произойдет через {seconds}!
			</p>
		</div>
	);
};

export default Home404;
