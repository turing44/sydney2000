import { c as createComponent, b as createAstro, a as renderTemplate, d as addAttribute, m as maybeRenderHead, e as renderScript, r as renderComponent, j as renderHead, f as renderSlot } from './astro/server_Bp-NMFpJ.mjs';
import 'kleur/colors';
/* empty css                            */
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Astro$2 = createAstro();
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Seo;
  const {
    title,
    description,
    image = {
      url: "/uploads/church-default.webp",
      alt: "Church Name"
    },
    type = "website",
    canonicalUrl
  } = Astro2.props;
  const canonicalURL = canonicalUrl || new URL(Astro2.url.pathname, Astro2.site);
  ({
    url: Astro2.site?.toString() || "https://example.com"
  });
  return renderTemplate(_b || (_b = __template(["<!-- Basic SEO --><title>", '</title><meta name="description"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:alt"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta property="twitter:image:alt"', '><!-- JSON-LD Schema for Church --><script type="application/ld+json">\n  {\n    "@context": "https://schema.org",\n    "@type": "Church",\n    "name": "${churchInfo.name}",\n    "address": {\n      "@type": "PostalAddress",\n      "streetAddress": "${churchInfo.address.streetAddress}",\n      "addressLocality": "${churchInfo.address.addressLocality}",\n      "addressRegion": "${churchInfo.address.addressRegion}",\n      "postalCode": "${churchInfo.address.postalCode}",\n      "addressCountry": "${churchInfo.address.addressCountry}"\n    },\n    "telephone": "${churchInfo.telephone}",\n    "email": "${churchInfo.email}",\n    "url": "${churchInfo.url}"\n  }\n<\/script>', ""], ["<!-- Basic SEO --><title>", '</title><meta name="description"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:alt"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta property="twitter:image:alt"', '><!-- JSON-LD Schema for Church --><script type="application/ld+json">\n  {\n    "@context": "https://schema.org",\n    "@type": "Church",\n    "name": "\\${churchInfo.name}",\n    "address": {\n      "@type": "PostalAddress",\n      "streetAddress": "\\${churchInfo.address.streetAddress}",\n      "addressLocality": "\\${churchInfo.address.addressLocality}",\n      "addressRegion": "\\${churchInfo.address.addressRegion}",\n      "postalCode": "\\${churchInfo.address.postalCode}",\n      "addressCountry": "\\${churchInfo.address.addressCountry}"\n    },\n    "telephone": "\\${churchInfo.telephone}",\n    "email": "\\${churchInfo.email}",\n    "url": "\\${churchInfo.url}"\n  }\n<\/script>', ""])), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(type, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image.url, Astro2.site), "content"), addAttribute(image.alt, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image.url, Astro2.site), "content"), addAttribute(image.alt, "content"), type === "article" && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Article",\n        "headline": "${title}",\n        "image": "${new URL(image.url, Astro.site)}",\n        "description": "${description}",\n        "publisher": {\n          "@type": "Organization",\n          "name": "${churchInfo.name}",\n          "logo": {\n            "@type": "ImageObject",\n            "url": "${new URL("/uploads/logo.png", Astro.site)}"\n          }\n        },\n        "url": "${canonicalURL}",\n        "mainEntityOfPage": {\n          "@type": "WebPage",\n          "@id": "${canonicalURL}"\n        }\n      }\n    <\/script>'], ['<script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Article",\n        "headline": "\\${title}",\n        "image": "\\${new URL(image.url, Astro.site)}",\n        "description": "\\${description}",\n        "publisher": {\n          "@type": "Organization",\n          "name": "\\${churchInfo.name}",\n          "logo": {\n            "@type": "ImageObject",\n            "url": "\\${new URL("/uploads/logo.png", Astro.site)}"\n          }\n        },\n        "url": "\\${canonicalURL}",\n        "mainEntityOfPage": {\n          "@type": "WebPage",\n          "@id": "\\${canonicalURL}"\n        }\n      }\n    <\/script>']))));
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/components/UI/Seo.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const navItems = [
    { text: "Home", href: "/" },
    { text: "Sobre mi", href: "/" },
    { text: "Entrenadoras", href: "/" },
    { text: "Eventos", href: "/" },
    { text: "Contacto", href: "/" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`<!-- Desktop Navigation -->${maybeRenderHead()}<nav class="hidden lg:block" data-astro-cid-q5st44wa> <ul class="flex items-center space-x-6" data-astro-cid-q5st44wa> ${navItems.map((item) => {
    const isActive = currentPath === item.href || item.href !== "/" && currentPath.startsWith(item.href);
    return renderTemplate`<li data-astro-cid-q5st44wa> <a${addAttribute(item.href, "href")}${addAttribute(`text-base font-medium transition-colors hover:text-primary-600 ${isActive ? "text-primary-600" : "text-gray-700"}`, "class")}${addAttribute(isActive ? "page" : void 0, "aria-current")} data-astro-cid-q5st44wa> ${item.text} </a> </li>`;
  })} </ul> </nav> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="lg:hidden p-2 text-gray-700 hover:text-primary-600 focus:outline-none transition-colors relative" aria-label="Toggle Menu" aria-expanded="false" data-astro-cid-q5st44wa> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-q5st44wa> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-q5st44wa></path> </svg> </button> <!-- Mobile Menu Dropdown - Compact & Clean --> <div id="mobile-menu" class="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 transform scale-y-0 origin-top transition-transform duration-200 ease-out lg:hidden z-50" role="menu" aria-labelledby="mobile-menu-button" data-astro-cid-q5st44wa> <!-- Navigation Links in Grid --> <div class="px-4 py-6" data-astro-cid-q5st44wa> <div class="grid grid-cols-2 gap-3" data-astro-cid-q5st44wa> ${navItems.map((item) => {
    const isActive = currentPath === item.href || item.href !== "/" && currentPath.startsWith(item.href);
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`block px-4 py-3 text-sm font-medium rounded-lg transition-colors text-center ${isActive ? "bg-primary-50 text-primary-600 border border-primary-200" : "text-gray-700 hover:bg-gray-50 hover:text-primary-600 border border-transparent"}`, "class")} role="menuitem"${addAttribute(isActive ? "page" : void 0, "aria-current")} data-astro-cid-q5st44wa> ${item.text} </a>`;
  })} </div> </div> </div>  ${renderScript($$result, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/components/Global/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/components/Global/Navigation.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm"> <div class="container flex items-center justify-between h-20"> <a href="/" class="text-2xl font-bold text-primary-800 font-serif flex items-center"> <span class="sr-only">Sydney 2000</span> <!-- FIXME --> <img style="filter: invert(1) sepia(1) hue-rotate(180deg) saturate(5);" width="70" src="/uploads/logo.png"> </a> ${renderComponent($$result, "Navigation", $$Navigation, {})} </div> </header>`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/components/Global/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white pt-16 pb-8"> <div class="flex flex-col gap-5 m-9"> <p class="font-bold text-xl">Contacto</p> <p>678 11 11 11</p> </div> </footer>`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/components/Global/Footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "C. D. Sydney 2000",
    description = "Somos una academia de gimnasia ritmica con mas de 25 a\xF1os de experiencia",
    image = {
      url: "/uploads/church-default.webp",
      alt: "Sydney 2000"
    },
    type = "website",
    canonicalUrl
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "Seo", $$Seo, { "title": title, "description": description, "image": image, "type": type, "canonicalUrl": canonicalUrl })}<link rel="sitemap" href="/sitemap-index.xml"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest">${renderHead()}</head> <body> <div class="flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
