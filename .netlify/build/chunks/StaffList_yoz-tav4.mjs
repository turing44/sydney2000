import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_Bp-NMFpJ.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from './_astro_content_CReWPrTW.mjs';

const $$Astro = createAstro();
const $$StaffList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StaffList;
  const { showAll = true, limit = 6 } = Astro2.props;
  const allStaff = await getCollection(
    "staff",
    ({ data }) => !data.draft 
  );
  const staffMembers = allStaff.sort((a, b) => a.data.order - b.data.order).slice(0, showAll ? void 0 : limit);
  return renderTemplate`<!-- ================= STAFF GRID ================= -->${maybeRenderHead()}<section id="staff" class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-4">Our Leadership Team</h2> <p class="text-center text-gray-600 mb-12">
Meet the dedicated individuals who lead and serve our church community
</p> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"> ${staffMembers.map((staff) => renderTemplate`<div class="bg-white rounded-lg shadow overflow-hidden flex flex-col h-full"> <!-- Foto (4:3) --> <div class="relative w-full pb-[100%]"> <img${addAttribute(staff.data.image, "src")}${addAttribute(staff.data.name, "alt")} class="absolute inset-0 w-full h-full object-cover object-center"> </div> <div class="p-4 flex flex-col flex-1 justify-between"> <div> <h3 class="text-xl font-semibold mb-1">${staff.data.name}</h3> <p class="text-primary-600 mb-2">${staff.data.title}</p> <p class="text-gray-700 text-sm">${staff.data.bio}</p> </div> <div class="mt-4 space-y-1 text-sm"> ${staff.data.email && renderTemplate`<a${addAttribute(`mailto:${staff.data.email}`, "href")} class="text-primary-600 hover:underline block"> ${staff.data.email} </a>`} ${staff.data.phone && renderTemplate`<a${addAttribute(`tel:${staff.data.phone}`, "href")} class="text-primary-600 hover:underline block"> ${staff.data.phone} </a>`} </div> </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/components/Sections/StaffList.astro", void 0);

export { $$StaffList as $ };
