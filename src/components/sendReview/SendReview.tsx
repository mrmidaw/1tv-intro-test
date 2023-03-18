import axios from "axios";
import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import {
	validCity,
	validCityMes,
	validName,
	validNameMes,
} from "../../utils/regex/regex";
import { IReviewProps } from "./SendReview.interface";
import styles from "./SendReview.module.scss";

type ReviewForm = {
	name: string;
	city: string;
	review: string;
};

export const SendReview: FC<IReviewProps> = ({ id }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	// ***************REACT HOOK FORM******************
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<ReviewForm>({
		mode: "all",
	});

	// ************ФУНКЦИЯ ОТПРАВКИ КОММЕНТАРИЯ***********
	const onSubmitReviewForm: SubmitHandler<ReviewForm> = async (data) => {
		setIsLoading(true);
		setIsError(false);
		setIsSuccess(false);

		try {
			const response = await axios.post(
				`https://fedevofferapi-info3.b4a.run/comments/post/${id}`,
				data,
			);

			setIsSuccess(true);
			reset();
			toast.success("Отзыв успешно отправлен!");
		} catch (error) {
			setIsError(true);
			toast.error("Что-то пошло не так, попробуйте позже!");
			console.log("send>>>", error);
		} finally {
			setIsLoading(false);
		}
	};

	const fakeClickHandler = (str: string) => {
		console.log("click >>>", str);
	};

	return (
		<section className={styles.container}>
			<span className={styles.title}>оставьте комментарий</span>
			<span className={styles.desc}>Что вы думаете об этом видео?</span>

			<form className={styles.form} onSubmit={handleSubmit(onSubmitReviewForm)}>
				<div className={styles.input__container}>
					<span>
						Фамилия и имя <span className={styles.text__red}>*</span>
					</span>

					<input
						type="text"
						className={styles.input}
						placeholder="Дмитрий Назаров"
						aria-label="введите ваше фио"
						{...register("name", {
							required: "Поле не заполнено!",
							pattern: {
								value: validName,
								message: validNameMes,
							},
							minLength: {
								value: 6,
								message: "Минимум 6 символов!",
							},
							maxLength: {
								value: 36,
								message: "Максимум 36 символов!",
							},
						})}
					/>
					{errors?.name && (
						<p className={styles.error__box}>
							{errors.name.message || "Ошибка!"}
						</p>
					)}
				</div>

				<div className={styles.input__container}>
					<span>
						Город <span className={styles.text__red}>*</span>
					</span>

					<input
						type="text"
						className={styles.input__error}
						placeholder="Псков"
						aria-label="введите ваш город"
						{...register("city", {
							required: "Поле не заполнено!",
							pattern: {
								value: validCity,
								message: validCityMes,
							},
							minLength: {
								value: 3,
								message: "Минимум 3 символа!",
							},
							maxLength: {
								value: 36,
								message: "Максимум 36 символов!",
							},
						})}
					/>
					{errors?.city && (
						<p className={styles.error__box}>
							{errors.city.message || "Ошибка!"}
						</p>
					)}
				</div>

				<div className={styles.area__container}>
					<span>Ваше мнение</span>

					<textarea
						className={styles.input__area}
						placeholder="Ваше мнение"
						aria-label="введите ваш комментарий"
						{...register("review", {
							required: "Поле не заполнено!",
							minLength: {
								value: 6,
								message: "Минимум 6 символов!",
							},
							maxLength: {
								value: 360,
								message: "Максимум 360 символов!",
							},
						})}
					/>
					{errors?.review && (
						<p className={styles.error__box}>
							{errors.review.message || "Ошибка!"}
						</p>
					)}
				</div>

				<div className={styles.button__box}>
					<button
						type="submit"
						disabled={!isValid || isLoading}
						className={styles.button__send}
						aria-label="Отправить"
					>
						отправить
					</button>

					<button
						onClick={() => fakeClickHandler("успешно")}
						disabled={!isSuccess}
						className={styles.button__success}
						aria-label="Успешно"
					>
						успешно
					</button>

					<button
						type="reset"
						disabled={!isError}
						className={styles.button__error}
						aria-label="Произошла ошибка"
					>
						произошла ошибка
					</button>
				</div>
			</form>
		</section>
	);
};
