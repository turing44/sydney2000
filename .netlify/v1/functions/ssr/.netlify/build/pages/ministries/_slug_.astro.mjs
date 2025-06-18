/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Bp-NMFpJ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_jxnd3yh7.mjs';
import { $ as $$PageHeader } from '../../chunks/PageHeader_BRsLUV1e.mjs';
import { $ as $$Button } from '../../chunks/Button_ByEwt8dV.mjs';
import { g as getCollection } from '../../chunks/_astro_content_CReWPrTW.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  try {
    const ministryEntries = await getCollection("ministries", ({ data }) => {
      return true ? !data.draft : true;
    });
    return ministryEntries.map((entry) => ({
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${entry.data.name} - Church Name`, "description": entry.data.summary, "image": entry.data.logo ? { url: entry.data.logo, alt: entry.data.name } : void 0 }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": entry.data.name, "backgroundImage": "/uploads/ministry-detail-bg.webp" })} ${maybeRenderHead()}<section class="py-16"> <div class="container"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12"> <!-- Main Content --> <div class="lg:col-span-2"> <div class="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> <!-- Sidebar --> <div> <div class="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-24"> ${entry.data.logo && renderTemplate`<div class="mb-6 flex justify-center"> <img${addAttribute(entry.data.logo, "src")}${addAttribute(entry.data.name, "alt")} class="max-h-48 w-auto"> </div>`} <h3 class="text-xl font-bold mb-4">Ministry Information</h3> <div class="space-y-4 mb-6"> ${entry.data.coordinator && renderTemplate`<div> <h4 class="font-bold text-gray-700">Coordinator</h4> <p>${entry.data.coordinator}</p> </div>`} ${entry.data.contact && renderTemplate`<div> <h4 class="font-bold text-gray-700">Contact</h4> ${entry.data.contact.includes("@") ? renderTemplate`<a${addAttribute(`mailto:${entry.data.contact}`, "href")} class="text-primary-600 hover:text-primary-700"> ${entry.data.contact} </a>` : renderTemplate`<p>${entry.data.contact}</p>`} </div>`} ${entry.data.schedule && renderTemplate`<div> <h4 class="font-bold text-gray-700">Schedule</h4> <p>${entry.data.schedule}</p> </div>`} </div> <div class="flex flex-col space-y-3"> ${renderComponent($$result2, "Button", $$Button, { "href": "/contact?subject=Ministry+Inquiry", "variant": "primary" }, { "default": async ($$result3) => renderTemplate`
Get Involved
` })} ${renderComponent($$result2, "Button", $$Button, { "href": "/ministries", "variant": "outline" }, { "default": async ($$result3) => renderTemplate`
Back to All Ministries
` })} </div> </div> </div> </div> </div> </section> ` })}`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/ministries/[slug].astro", void 0);
const $$file = "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/ministries/[slug].astro";
const $$url = "/ministries/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
