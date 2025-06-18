/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bp-NMFpJ.mjs';
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
    const eventEntries = await getCollection("events", ({ data }) => {
      return true ? !data.draft : true;
    });
    return eventEntries.map((entry) => ({
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
  const formattedEndDate = entry.data.endDate ? formatDate(entry.data.endDate) : null;
  const isFutureEvent = new Date(entry.data.date) > /* @__PURE__ */ new Date();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${entry.data.title} - Events - Church Name`, "description": entry.data.summary, "image": { url: entry.data.image, alt: entry.data.title }, "type": "article" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostLayout", $$PostLayout, { "title": entry.data.title, "description": entry.data.summary, "image": { url: entry.data.image, alt: entry.data.title }, "date": entry.data.date, "tags": entry.data.tags, "type": "event" }, { "default": async ($$result3) => renderTemplate`  ${maybeRenderHead()}<div class="bg-gray-50 rounded-lg p-6 mb-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <h3 class="text-lg font-bold mb-2">Date & Time</h3> <div class="flex items-start mb-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <div> ${formattedEndDate && formattedEndDate !== formattedDate ? renderTemplate`<p>${formattedDate} - ${formattedEndDate}</p>` : renderTemplate`<p>${formattedDate}</p>`} ${entry.data.time && renderTemplate`<p>${entry.data.time}</p>`} </div> </div> </div> <div> <h3 class="text-lg font-bold mb-2">Location</h3> <div class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <p>${entry.data.location}</p> </div> </div> </div> ${isFutureEvent && entry.data.registrationRequired && renderTemplate`<div class="mt-6 pt-6 border-t border-gray-200"> <h3 class="text-lg font-bold mb-3">Registration</h3> <p class="mb-4">Registration is required for this event.</p> ${entry.data.registrationLink ? renderTemplate`${renderComponent($$result3, "Button", $$Button, { "href": entry.data.registrationLink, "target": "_blank", "variant": "primary" }, { "default": async ($$result4) => renderTemplate`
Register Now
` })}` : renderTemplate`${renderComponent($$result3, "Button", $$Button, { "href": "/contact?subject=Event+Registration", "variant": "primary" }, { "default": async ($$result4) => renderTemplate`
Contact Us to Register
` })}`} </div>`} </div>  <article class="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-primary-600 hover:prose-a:text-primary-700"> ${renderComponent($$result3, "Content", Content, {})} </article>  <div class="mt-12 flex flex-wrap gap-4"> ${isFutureEvent && entry.data.registrationLink && renderTemplate`${renderComponent($$result3, "Button", $$Button, { "href": entry.data.registrationLink, "target": "_blank", "variant": "primary" }, { "default": async ($$result4) => renderTemplate`
Register for This Event
` })}`} ${renderComponent($$result3, "Button", $$Button, { "href": "/events", "variant": "outline" }, { "default": async ($$result4) => renderTemplate`
Back to All Events
` })} ${renderComponent($$result3, "Button", $$Button, { "href": "/contact?subject=Event+Inquiry", "variant": "outline" }, { "default": async ($$result4) => renderTemplate`
Questions? Contact Us
` })} </div> ` })} ` })}`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/events/[slug].astro", void 0);
const $$file = "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/events/[slug].astro";
const $$url = "/events/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
