/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bp-NMFpJ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_jxnd3yh7.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_BRsLUV1e.mjs';
import { $ as $$StaffList } from '../chunks/StaffList_yoz-tav4.mjs';
export { renderers } from '../renderers.mjs';

const $$Staff = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Staff - Church Name", "description": "Meet our dedicated church staff and leadership team who serve our congregation with passion and commitment." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Our Staff", "subtitle": "Meet our dedicated leadership team", "backgroundImage": "/uploads/page-header-bg.webp" })}  ${renderComponent($$result2, "StaffList", $$StaffList, {})}  ${maybeRenderHead()}<section class="py-16 bg-gray-50"> <div class="container"> <div class="max-w-3xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">Need to Contact a Staff Member?</h2> <p class="text-xl text-gray-600 mb-8">
Our staff is here to serve you and answer any questions you may have. Feel free to reach out to any of our team members directly or contact our main office.
</p> <div class="flex flex-wrap justify-center gap-4"> <a href="/contact" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-primary-600 rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
Contact Us
</a> <a href="/about-us" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
Learn More About Our Church
</a> </div> </div> </div> </section> ` })}`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/staff.astro", void 0);

const $$file = "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/staff.astro";
const $$url = "/staff";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Staff,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
