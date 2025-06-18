/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderScript, d as addAttribute } from '../chunks/astro/server_Bp-NMFpJ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_jxnd3yh7.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_BRsLUV1e.mjs';
import { $ as $$Card } from '../chunks/Card_CDhEyzJ6.mjs';
import { g as getCollection } from '../chunks/_astro_content_CReWPrTW.mjs';
import { f as formatDate } from '../chunks/dateUtils_Cuch0ZSf.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog", ({ data }) => {
    return !data.draft ;
  });
  const posts = allPosts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
  const tags = [...new Set(posts.flatMap((post) => post.data.tags))];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog - Church Name", "description": "Read our latest articles, devotionals, and updates from our church community." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Blog", "subtitle": "Insights, devotionals, and updates from our church community", "backgroundImage": "/uploads/blog-header-bg.webp" })}  ${maybeRenderHead()}<section class="py-16"> <div class="container"> <div class="grid grid-cols-1 lg:grid-cols-4 gap-8"> <!-- Filters Sidebar --> <div class="lg:col-span-1"> <div class="bg-white p-6 rounded-lg shadow-sm sticky top-24"> <h2 class="text-xl font-bold mb-6">Filter Posts</h2> <!-- Search --> <div class="mb-6"> <label for="search" class="block text-sm font-medium text-gray-700 mb-1">Search</label> <input type="text" id="search" placeholder="Search posts..." class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"> </div> <!-- Tags Filter --> ${tags.length > 0 && renderTemplate`<div class="mb-6"> <h3 class="block text-sm font-medium text-gray-700 mb-2">Tags</h3> <div class="space-y-2"> ${tags.map((tag) => renderTemplate`<label class="flex items-center"> <input type="checkbox" class="tag-checkbox h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"${addAttribute(tag, "value")}> <span class="ml-2 text-gray-700">${tag}</span> </label>`)} </div> </div>`} <!-- Author Filter --> <div class="mb-6"> <label for="author" class="block text-sm font-medium text-gray-700 mb-1">Author</label> <input type="text" id="author" placeholder="Filter by author..." class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"> </div> <!-- Date Range Filter --> <div class="space-y-3"> <label class="block text-sm font-medium text-gray-700">Date Range</label> <div> <label for="from-date" class="block text-xs text-gray-500 mb-1">From</label> <input type="date" id="from-date" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"> </div> <div> <label for="to-date" class="block text-xs text-gray-500 mb-1">To</label> <input type="date" id="to-date" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"> </div> </div> <!-- Reset Filters Button --> <button id="reset-filters" class="w-full mt-6 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
Reset Filters
</button> </div> </div> <!-- Blog Posts Grid --> <div class="lg:col-span-3"> <h2 class="text-2xl font-bold mb-6">All Posts</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" id="posts-grid"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": post.data.title, "image": post.data.image && {
    src: post.data.image.url,
    alt: post.data.image.alt
  }, "href": `/blog/${post.slug}`, "className": "blog-card", "data-tags": post.data.tags.join(","), "data-author": post.data.author, "data-date": post.data.pubDate.toISOString().slice(0, 10) }, { "default": async ($$result3) => renderTemplate` <div class="mb-3 flex items-center text-gray-600"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <span>${formatDate(post.data.pubDate)}</span> </div> <div class="mb-3 flex items-center text-gray-600"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> <span>${post.data.author}</span> </div> <p class="text-gray-700 mb-4">${post.data.description}</p> ${post.data.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-4"> ${post.data.tags.map((tag) => renderTemplate`<span class="px-2 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded-full"> ${tag} </span>`)} </div>`}<a${addAttribute(`/blog/${post.slug}`, "href")} class="text-primary-600 font-medium hover:text-primary-700">
Read More →
</a> ` })}`)} </div> <!-- No Results Message (Hidden by default) --> <div id="no-results" class="hidden text-center py-12 bg-gray-50 rounded-lg mt-8"> <p class="text-gray-600">No posts match your search criteria. Please try different filters.</p> </div> </div> </div> </div> </section> ${renderScript($$result2, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/blog/index.astro", void 0);
const $$file = "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
