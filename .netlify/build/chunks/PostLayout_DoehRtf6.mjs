import { c as createComponent, b as createAstro, r as renderComponent, m as maybeRenderHead, f as renderSlot, d as addAttribute, a as renderTemplate } from './astro/server_Bp-NMFpJ.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from './PageHeader_BRsLUV1e.mjs';
import { f as formatDate } from './dateUtils_Cuch0ZSf.mjs';

const $$Astro = createAstro();
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const {
    title,
    description,
    image,
    date,
    author,
    tags = [],
    type = "blog"
  } = Astro2.props;
  const formattedDate = date ? formatDate(date) : null;
  return renderTemplate`<!-- SEO props diteruskan oleh BaseLayout --><!-- Header & Footer hanya dipanggil sekali oleh BaseLayout -->${renderComponent($$result, "PageHeader", $$PageHeader, { "title": title })} ${maybeRenderHead()}<main class="container py-8"> <div class="mx-auto max-w-3xl"> ${image && renderTemplate`<div class="mb-8 overflow-hidden rounded-lg"> <img${addAttribute(image.url, "src")}${addAttribute(image.alt, "alt")} class="object-cover w-full h-64 md:h-96"${addAttribute([320, 640, 1024], "widths")} format="webp" loading="lazy"> </div>`} <div class="mb-8"> ${(date || author) && renderTemplate`<div class="flex flex-wrap items-center mb-4 text-sm text-gray-600"> ${formattedDate && renderTemplate`<span class="mr-4 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> ${formattedDate} </span>`} ${author && renderTemplate`<span class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> ${author} </span>`} </div>`} ${tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-4"> ${tags.map((tag) => renderTemplate`<span class="px-3 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded-full"> ${tag} </span>`)} </div>`} </div> <article class="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-primary-600 hover:prose-a:text-primary-700"> ${renderSlot($$result, $$slots["default"])} </article> </div> </main>`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/layouts/PostLayout.astro", void 0);

export { $$PostLayout as $ };
