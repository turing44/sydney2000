/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Bp-NMFpJ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_jxnd3yh7.mjs';
import { $ as $$PostLayout } from '../../chunks/PostLayout_DoehRtf6.mjs';
import { $ as $$Button } from '../../chunks/Button_ByEwt8dV.mjs';
import { g as getCollection } from '../../chunks/_astro_content_CReWPrTW.mjs';
import { f as formatDate } from '../../chunks/dateUtils_Cuch0ZSf.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  try {
    const sermonEntries = await getCollection("sermons", ({ data }) => {
      return true ? !data.draft : true;
    });
    return sermonEntries.map((entry) => ({
      params: { slug: entry.slug },
      props: { entry }
    }));
  } catch (error) {
    return [];
  }
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  const formattedDate = formatDate(entry.data.date);
  let relatedSermons = [];
  if (entry.data.series) {
    try {
      const allSermons = await getCollection("sermons", ({ data }) => {
        return true ? !data.draft : true;
      });
      relatedSermons = allSermons.filter(
        (sermon) => sermon.data.series === entry.data.series && sermon.slug !== entry.slug
      ).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()).slice(0, 3);
    } catch (error) {
      console.log("Error fetching related sermons");
    }
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${entry.data.title} - Sermons - Church Name`, "description": entry.data.summary || `Listen to "${entry.data.title}" by ${entry.data.speaker}`, "image": entry.data.image ? { url: entry.data.image, alt: entry.data.title } : void 0, "type": "article" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostLayout", $$PostLayout, { "title": entry.data.title, "description": entry.data.summary, "image": entry.data.image ? { url: entry.data.image, alt: entry.data.title } : void 0, "date": entry.data.date, "author": entry.data.speaker, "tags": entry.data.tags, "type": "sermon" }, { "default": async ($$result3) => renderTemplate`  ${maybeRenderHead()}<div class="bg-gray-50 rounded-lg p-6 mb-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <div class="mb-4"> <h3 class="text-lg font-bold mb-2">Speaker</h3> <p class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> ${entry.data.speaker} </p> </div> ${entry.data.series && renderTemplate`<div class="mb-4"> <h3 class="text-lg font-bold mb-2">Series</h3> <p class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path> </svg> ${entry.data.series} </p> </div>`} </div> <div> <div class="mb-4"> <h3 class="text-lg font-bold mb-2">Date</h3> <p class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> ${formattedDate} </p> </div> ${entry.data.scripture && renderTemplate`<div> <h3 class="text-lg font-bold mb-2">Scripture</h3> <p class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> ${entry.data.scripture} </p> </div>`} </div> </div> </div>  <div class="mb-8 space-y-6"> ${entry.data.videoUrl && renderTemplate`<div> <h3 class="text-xl font-bold mb-4">Watch</h3> <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"> <iframe${addAttribute(entry.data.videoUrl, "src")}${addAttribute(entry.data.title, "title")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-full"></iframe> </div> </div>`} ${entry.data.audioUrl && renderTemplate`<div> <h3 class="text-xl font-bold mb-4">Listen</h3> <audio controls class="w-full"> <source${addAttribute(entry.data.audioUrl, "src")} type="audio/mpeg">
Your browser does not support the audio element.
</audio> </div>`} </div>  <article class="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-primary-600 hover:prose-a:text-primary-700"> ${renderComponent($$result3, "Content", Content, {})} </article>  ${relatedSermons.length > 0 && renderTemplate`<div class="mt-12"> <h2 class="text-2xl font-bold mb-6">More From This Series</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${relatedSermons.map((sermon) => renderTemplate`<a${addAttribute(`/sermons/${sermon.slug}`, "href")} class="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"> <h3 class="font-bold mb-2">${sermon.data.title}</h3> <p class="text-sm text-gray-600 mb-2">${formatDate(sermon.data.date)}</p> <p class="text-primary-600 text-sm font-medium">Listen/Watch →</p> </a>`)} </div> </div>`} <div class="mt-12 flex flex-wrap gap-4"> ${renderComponent($$result3, "Button", $$Button, { "href": "/sermons", "variant": "outline" }, { "default": async ($$result4) => renderTemplate`
Back to All Sermons
` })} ${entry.data.series && renderTemplate`${renderComponent($$result3, "Button", $$Button, { "href": `/sermons?series=${encodeURIComponent(entry.data.series)}`, "variant": "outline" }, { "default": async ($$result4) => renderTemplate`
View All in This Series
` })}`} </div> ` })} ` })}`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/sermons/[slug].astro", void 0);
const $$file = "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/sermons/[slug].astro";
const $$url = "/sermons/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
