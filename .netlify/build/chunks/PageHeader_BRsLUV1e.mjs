import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_Bp-NMFpJ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const {
    title,
    subtitle,
    backgroundImage = "/uploads/page-header-bg.webp"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative py-20 bg-cover bg-center"${addAttribute(`background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`, "style")}> <div class="container"> <div class="max-w-3xl mx-auto text-center text-white"> <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">${title}</h1> ${subtitle && renderTemplate`<p class="text-xl md:text-2xl">${subtitle}</p>`} </div> </div> </section>`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/components/Sections/PageHeader.astro", void 0);

export { $$PageHeader as $ };
