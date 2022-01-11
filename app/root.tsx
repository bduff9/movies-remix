import bulma from 'bulmaswatch/cerulean/bulmaswatch.min.css';
import { VFC } from 'react';
import {
	Links,
	LinksFunction,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from 'remix';
import type { MetaFunction } from 'remix';

type EnvVars = {
	NODE_ENV: string | undefined;
};
type Env = { ENV: EnvVars };

export const loader = (): Env => {
	return {
		ENV: {
			NODE_ENV: process.env.NODE_ENV,
		},
	};
};

declare global {
	interface Window {
		ENV: EnvVars;
	}
}

//TODO: favicon and other OG tags

export const meta: MetaFunction = () => {
	return { title: 'Movies' };
};

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: bulma,
		},
	];
};

const App: VFC = () => {
	const data = useLoaderData<Env>();

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<script
					dangerouslySetInnerHTML={{
						__html: `window.ENV = ${JSON.stringify(data.ENV)}`,
					}}
				/>
				<Scripts />
				{process.env.NODE_ENV === 'development' && <LiveReload />}
			</body>
		</html>
	);
};

export default App;
