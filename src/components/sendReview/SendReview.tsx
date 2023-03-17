import axios from "axios";
import React, { FC, useState } from "react";
import { toast } from "react-hot-toast";

import { IReviewProps } from "./SendReview.interface";
import styles from "./SendReview.module.scss";

export const SendReview: FC<IReviewProps> = ({ id }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	// ************ФУНКЦИЯ ПОЛУЧЕНИЯ ВСЕх ВИДЕО***********
	const sendReviewHandler = async () => {
		setIsLoading(true);

		try {
			const response = await axios.post(
				`https://fedevofferapi-info3.b4a.run/comments/post/${id}`,
			);

			toast.success("Отзыв успешно отправлен!");
			setIsSuccess(true);
		} catch (error) {
			setIsError(true);
			console.log("send>>>", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section className={styles.container}>
			<span className={styles.title}>оставьте комментарий</span>
			<span className={styles.desc}>Что вы думаете об этом видео?</span>

			<form className={styles.form} onSubmit={sendReviewHandler}></form>
		</section>
	);
};
