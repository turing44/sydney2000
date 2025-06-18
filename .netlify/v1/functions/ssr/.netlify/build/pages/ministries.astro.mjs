/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bp-NMFpJ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_jxnd3yh7.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_BRsLUV1e.mjs';
import { g as getCollection } from '../chunks/_astro_content_CReWPrTW.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const all = await getCollection(
    "ministries",
    ({ data }) => !data.draft 
  );
  const ministries = all.sort(
    (a, b) => (a.data.order ?? 0) - (b.data.order ?? 0) || a.data.name.localeCompare(b.data.name)
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Our Ministries", "description": "Discover our ministries." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Our Ministries", "subtitle": "Ways to connect, grow, and serve", "backgroundImage": "/uploads/ministries-header-bg.webp" })}  ${maybeRenderHead()}<section class="py-16 bg-white"> <div class="container mx-auto px-4"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">Connect With a Ministry</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Explore our ministries to grow in faith, connect with community, and serve.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${ministries.map((m) => renderTemplate`<a${addAttribute(`/ministries/${m.slug}`, "href")} class="
          g-white rounded-lg shadow 
          flex flex-col overflow-hidden 
          hover:shadow-lg transition
          min-h-[370px]
          "> <!-- gambar fixed height 200px --> ${m.data.logo && renderTemplate`<div class="w-full h-[200px] overflow-hidden"> <img${addAttribute(m.data.logo, "src")}${addAttribute(m.data.name, "alt")} class="w-full h-full object-cover"> </div>`} <div class="p-4 flex flex-col flex-1 justify-between"> <div> <h3 class="text-xl font-semibold mb-2">${m.data.name}</h3> <p class="text-gray-700">${m.data.summary}</p> </div> ${(m.data.coordinator || m.data.schedule) && renderTemplate`<div class="mt-4 space-y-1 text-sm text-gray-600"> ${m.data.coordinator && renderTemplate`<div class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg>
Coordinator: ${m.data.coordinator} </div>`} ${m.data.schedule && renderTemplate`<div class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 align-text-top" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${m.data.schedule} </div>`} </div>`} </div> </a>`)} </div> </div> </section>  <section class="py-20 bg-cover bg-center text-white" style="background-image:
      linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),
      url(/uploads/volunteer-bg.webp)"> <div class="container mx-auto px-4"> <div class="max-w-3xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Involved?</h2> <p class="text-xl mb-8">
We believe everyone has been gifted by God to serve in some way. Discover how you can use your unique gifts and passions to make a difference.
</p> <a href="/contact?subject=Volunteering" class="inline-flex items-center justify-center px-5 py-3
                 text-base font-medium text-white bg-primary-600 rounded-md
                 shadow-sm hover:bg-primary-700 focus:outline-none
                 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
Start Volunteering
</a> </div> </div> </section> ` })}`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/ministries/index.astro", void 0);
const $$file = "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/ministries/index.astro";
const $$url = "/ministries";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
