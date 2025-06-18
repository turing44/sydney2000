import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BYoXz-NO.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about-us.astro.mjs');
const _page2 = () => import('./pages/blog/_slug_.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/events/_slug_.astro.mjs');
const _page6 = () => import('./pages/events.astro.mjs');
const _page7 = () => import('./pages/giving.astro.mjs');
const _page8 = () => import('./pages/im-new.astro.mjs');
const _page9 = () => import('./pages/ministries/_slug_.astro.mjs');
const _page10 = () => import('./pages/ministries.astro.mjs');
const _page11 = () => import('./pages/sermons/_slug_.astro.mjs');
const _page12 = () => import('./pages/sermons.astro.mjs');
const _page13 = () => import('./pages/staff.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about-us.astro", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/events/[slug].astro", _page5],
    ["src/pages/events/index.astro", _page6],
    ["src/pages/giving.astro", _page7],
    ["src/pages/im-new.astro", _page8],
    ["src/pages/ministries/[slug].astro", _page9],
    ["src/pages/ministries/index.astro", _page10],
    ["src/pages/sermons/[slug].astro", _page11],
    ["src/pages/sermons/index.astro", _page12],
    ["src/pages/staff.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0b4b88cc-6667-456c-9706-36123c894a31"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
