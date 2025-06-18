import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, f as renderSlot, m as maybeRenderHead, d as addAttribute } from './astro/server_Bp-NMFpJ.mjs';
import 'kleur/colors';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, image, href, className = "" } = Astro2.props;
  const Element = href ? "a" : "div";
  return renderTemplate`${renderComponent($$result, "Element", Element, { "href": href, "class": `card relative overflow-hidden group ${className}` }, { "default": ($$result2) => renderTemplate`${image && renderTemplate`<!-- full-cover image -->
    ${maybeRenderHead()}<div class="absolute inset-0 overflow-hidden"> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"> </div>`} <div class="relative p-5"> <h3 class="mb-2 text-xl font-bold">${title}</h3> <div class="text-gray-700"> ${renderSlot($$result2, $$slots["default"])} </div> </div> ` })}`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/components/UI/Card.astro", void 0);

export { $$Card as $ };
