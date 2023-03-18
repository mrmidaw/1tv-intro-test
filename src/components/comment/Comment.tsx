import React, { FC } from "react";

import authorLogo from "../../assets/images/author-logo.png";
import { IComment } from "../../pages/main/Main.interface";
import styles from "./Comment.module.scss";

interface IProps {
	comment: IComment;
}

export const Comment: FC<IProps> = ({ comment }) => {
	return (
		<div className={styles.container}>
			<div className={styles.author__box}>
				{comment.author === "Дмитрий Назаров" && (
					<div className={styles.avatar__box}>
						<img src={authorLogo} alt={comment.author} draggable={false} />
					</div>
				)}

				<div className={styles.title__box}>
					<p className={styles.title}>{comment.author}</p>
					<p className={styles.desc}>{comment.description}</p>
				</div>
			</div>

			<p className={styles.text}>«{comment.comment}»</p>
		</div>
	);
};
