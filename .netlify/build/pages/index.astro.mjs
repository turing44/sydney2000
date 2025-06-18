/* empty css                                    */
import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, F as Fragment, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_Bp-NMFpJ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_jxnd3yh7.mjs';
import { $ as $$Button } from '../chunks/Button_ByEwt8dV.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title = "C. D. Sydney 2000",
    subtitle = "Escuela de gimnasia ritmica",
    backgroundImage = "/uploads/tierna.webp",
    ctaText = "\xDAnete",
    ctaLink = "/im-new"
  } = Astro2.props;
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>`
    },
    {
      name: "Instagram",
      href: "https://instagram.com/",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-[70vh] flex items-center bg-cover pt-30"${addAttribute(`background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage}); background-position: center 20%;`, "style")}> <div class="container"> <div class="max-w-3xl text-white"> <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white">${title}</h1> <p class="text-xl md:text-2xl mb-8">${subtitle}</p> <div class="flex flex-col gap-4"> ${renderComponent($$result, "Button", $$Button, { "href": ctaLink, "variant": "primary", "size": "lg" }, { "default": ($$result2) => renderTemplate`${ctaText}` })} <div class="flex gap-7 m-3"> ${socialLinks.map((i) => renderTemplate`<a${addAttribute(i.href, "href")} class=""> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(i.icon)}` })} </a>`)} </div> </div> </div> </div> </section>`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/components/Sections/HeroSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": "C.D. Sydney 2000", "subtitle": "Escuela de gimnasia r\xEDtmica con mas de 25 a\xF1os de experiencia", "backgroundImage": "/uploads/hero-bg.webp", "ctaText": "\xDAnete", "ctaLink": "/" })} ` })}`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/index.astro", void 0);

const $$file = "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
