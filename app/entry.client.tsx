import whyDidYouRender from '@welldone-software/why-did-you-render';
import { hydrate } from "react-dom";
import React from "react";
import { RemixBrowser } from "remix";

if (window.ENV.NODE_ENV !== 'production') {
	whyDidYouRender(React);
}

hydrate(<RemixBrowser />, document);
