import React, { FC } from "react";
import { Helmet } from "react-helmet-async";

import logoImage from "../../assets/img/logo_small.png";
import { onlyText } from "../clearText/clearText";

/* https://iconifier.net/ */

interface ISeo {
	title: string;
	description?: string;
	children?: React.ReactNode;
}

const Meta: FC<ISeo> = ({ title, description, children }) => {
	const siteName = " Anti Captcha | More than an Captcha";

	const titleMerge = (title: string) => `${siteName} | ${title}`;

	const fullPath = window.location.href;

	return (
		<>
			{description ? (
				<Helmet>
					<title itemProp="headline">{titleMerge(title)}</title>
					<meta
						itemProp="description"
						name="description"
						content={onlyText(description, 152)}
					/>
					<link rel="canonical" href={fullPath} />
					<meta property="og:locale" content="en" />
					<meta property="og:title" content={titleMerge(title)} />
					<meta property="og:url" content={fullPath} />
					<meta property="og:image" content={logoImage} />
					<meta property="og:site_name" content={siteName} />
					<meta
						property="og:description"
						content={onlyText(description, 197)}
					/>
				</Helmet>
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}

			{children}
		</>
	);
};

export default Meta;
