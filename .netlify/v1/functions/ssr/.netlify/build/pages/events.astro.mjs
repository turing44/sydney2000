/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Bp-NMFpJ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_jxnd3yh7.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_BRsLUV1e.mjs';
import { $ as $$Card } from '../chunks/Card_CDhEyzJ6.mjs';
import { g as getCollection } from '../chunks/_astro_content_CReWPrTW.mjs';
import { i as isFutureDate, a as isPastDate, f as formatDate } from '../chunks/dateUtils_Cuch0ZSf.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allEvents = await getCollection("events", ({ data }) => {
    return !data.draft ;
  });
  const upcomingEvents = allEvents.filter((event) => isFutureDate(event.data.date)).sort((a, b) => new Date(a.data.date).getTime() - new Date(b.data.date).getTime());
  const pastEvents = allEvents.filter((event) => isPastDate(event.data.date)).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()).slice(0, 6);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Events - Church Name", "description": "Stay updated with upcoming events and activities at our church. Find information on special services, community gatherings, and more." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Events", "subtitle": "Join us for these upcoming activities", "backgroundImage": "/uploads/events-header-bg.webp" })}  ${maybeRenderHead()}<section class="py-16"> <div class="container"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Mark your calendar and join us for these upcoming events
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${upcomingEvents.map((event) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": event.data.title, "image": {
    src: event.data.image,
    alt: event.data.title
  }, "href": `/events/${event.slug}` }, { "default": async ($$result3) => renderTemplate` <div class="mb-3 flex items-center text-gray-600"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <span>${formatDate(event.data.date)}</span> </div> ${event.data.time && renderTemplate`<div class="mb-3 flex items-center text-gray-600"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>${event.data.time}</span> </div>`}<div class="mb-3 flex items-center text-gray-600"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span>${event.data.location}</span> </div> <p class="text-gray-700 mb-4">${event.data.summary}</p> <a${addAttribute(`/events/${event.slug}`, "href")} class="text-primary-600 font-medium hover:text-primary-700">
Learn More →
</a> ` })}`)} </div> </div> </section>  <section class="py-16 bg-gray-50"> <div class="container"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">Past Events</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Browse some of our recent events
</p> </div> ${pastEvents.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${pastEvents.map((event) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": event.data.title, "image": {
    src: event.data.image,
    alt: event.data.title
  }, "href": `/events/${event.slug}`, "className": "opacity-90 hover:opacity-100" }, { "default": async ($$result3) => renderTemplate` <div class="mb-3 flex items-center text-gray-600"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <span>${formatDate(event.data.date)}</span> </div> <div class="mb-3 flex items-center text-gray-600"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span>${event.data.location}</span> </div> <p class="text-gray-700 mb-4">${event.data.summary}</p> <a${addAttribute(`/events/${event.slug}`, "href")} class="text-primary-600 font-medium hover:text-primary-700">
View Details →
</a> ` })}`)} </div>` : renderTemplate`<div class="text-center py-12 bg-white rounded-lg shadow-sm"> <p class="text-gray-600">No past events to display.</p> </div>`} </div> </section>  <section class="py-20 bg-white"> <div class="container"> <div class="max-w-3xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">Have an Event to Share?</h2> <p class="text-xl text-gray-600 mb-8">
If you're planning a church or ministry-related event that you'd like to add to our calendar, please contact us.
</p> <a href="/contact?subject=Event+Submission" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-primary-600 rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
Submit an Event
</a> </div> </div> </section> ` })}`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/events/index.astro", void 0);
const $$file = "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/events/index.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
