import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, f as renderSlot } from './astro/server_Bp-NMFpJ.mjs';
import 'kleur/colors';
/* empty css                         */

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    href,
    variant = "primary",
    size = "md",
    class: className = "",
    target,
    rel,
    disabled = false,
    type = "button",
    ariaLabel,
    ...rest
  } = Astro2.props;
  const baseStyles = [
    "inline-flex items-center justify-center gap-2",
    "font-sans text-base font-medium",
    "border-2 rounded-lg",
    "transition-all duration-300 ease-in-out",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "min-h-[44px] min-w-[44px]",
    // Mobile touch target
    "transform hover:scale-105 active:scale-95"
  ];
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };
  const variantStyles = {
    primary: [
      "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-600",
      "hover:from-blue-700 hover:to-blue-800 hover:border-blue-700",
      "active:from-blue-800 active:to-blue-900",
      "focus:ring-blue-500",
      "shadow-lg hover:shadow-xl"
    ].join(" "),
    secondary: [
      "bg-gradient-to-r from-purple-600 to-purple-700 text-white border-purple-600",
      "hover:from-purple-700 hover:to-purple-800 hover:border-purple-700",
      "active:from-purple-800 active:to-purple-900",
      "focus:ring-purple-500",
      "shadow-lg hover:shadow-xl"
    ].join(" "),
    accent: [
      "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-500",
      "hover:from-orange-600 hover:to-orange-700 hover:border-orange-600",
      "active:from-orange-700 active:to-orange-800",
      "focus:ring-orange-500",
      "shadow-lg hover:shadow-xl"
    ].join(" "),
    outline: [
      "bg-white text-gray-800 border-gray-300",
      "hover:bg-gray-50 hover:border-gray-400",
      "active:bg-gray-100",
      "focus:ring-blue-500",
      "shadow-md hover:shadow-lg"
    ].join(" ")
  };
  const classes = [
    ...baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  ].join(" ");
  const Element = href ? "a" : "button";
  return renderTemplate`${renderComponent($$result, "Element", Element, { "href": href, "class": classes, "target": target, "rel": target === "_blank" ? "noopener noreferrer" : rel, "disabled": disabled, "type": !href ? type : void 0, "aria-label": ariaLabel, "role": !href ? "button" : void 0, ...rest, "data-astro-cid-ljkzbozy": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/components/UI/Button.astro", void 0);

export { $$Button as $ };
