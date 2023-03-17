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
				<div className={styles.avatar__box}>
					<img src={authorLogo} alt={comment.author} draggable={false} />
				</div>
			</div>
		</div>
	);
};
