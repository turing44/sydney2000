/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bp-NMFpJ.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_jxnd3yh7.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_BRsLUV1e.mjs';
import { $ as $$Button } from '../chunks/Button_ByEwt8dV.mjs';
export { renderers } from '../renderers.mjs';

const $$Giving = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Giving - Church Name", "description": "Support our church's mission and ministries through your generous giving. Learn about the different ways to give." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Giving", "subtitle": "Supporting our mission through generosity", "backgroundImage": "/uploads/giving-header-bg.webp" })}  ${maybeRenderHead()}<section class="py-16"> <div class="container"> <div class="max-w-3xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6">Thank You for Your Generosity</h2> <p class="text-xl text-gray-700 mb-6">
Your financial support enables us to continue our mission of sharing God's love through worship, fellowship, and service to our community and beyond.
</p> <p class="text-lg text-gray-700 mb-8">
We are committed to being good stewards of your gifts and using them to make a positive impact in the lives of those we serve.
</p> <div class="flex flex-wrap justify-center gap-4"> ${renderComponent($$result2, "Button", $$Button, { "href": "#ways-to-give", "variant": "primary", "size": "lg" }, { "default": ($$result3) => renderTemplate`
Ways to Give
` })} ${renderComponent($$result2, "Button", $$Button, { "href": "#financial-accountability", "variant": "outline", "size": "lg" }, { "default": ($$result3) => renderTemplate`
Financial Accountability
` })} </div> </div> </div> </section>  <section class="py-16 bg-gray-50"> <div class="container"> <div class="max-w-4xl mx-auto"> <blockquote class="italic text-2xl text-center text-gray-700 mb-4">
"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
</blockquote> <p class="text-center text-lg font-bold text-gray-600">2 Corinthians 9:7</p> </div> </div> </section>  <section id="ways-to-give" class="py-16"> <div class="container"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">Ways to Give</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
We offer several convenient ways for you to support our church financially
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"> <div class="bg-white p-8 rounded-lg shadow-sm text-center"> <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> </div> <h3 class="text-xl font-bold mb-3">During Services</h3> <p class="text-gray-700 mb-6">
Giving envelopes are available in the pew racks. You can place your cash or check offering in the collection plate during Sunday services.
</p> </div> <div class="bg-white p-8 rounded-lg shadow-sm text-center"> <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <h3 class="text-xl font-bold mb-3">By Mail</h3> <p class="text-gray-700 mb-6">
You can mail your check to:<br>
Church Name<br>
123 Main Street<br>
Anytown, ST 12345
</p> </div> <div class="bg-white p-8 rounded-lg shadow-sm text-center"> <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path> </svg> </div> <h3 class="text-xl font-bold mb-3">Online</h3> <p class="text-gray-700 mb-6">
Give securely online through our website. You can make a one-time gift or set up recurring donations.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "#online-giving", "variant": "primary" }, { "default": ($$result3) => renderTemplate`
Give Online
` })} </div> </div> </div> </section>  <section id="online-giving" class="py-16 bg-gray-50"> <div class="container"> <div class="max-w-3xl mx-auto"> <div class="bg-white p-8 rounded-lg shadow-md"> <h2 class="text-3xl font-bold mb-6 text-center">Online Giving</h2> <div class="mb-8"> <h3 class="text-xl font-bold mb-4">Give via Credit/Debit Card</h3> <div class="bg-gray-50 p-6 rounded-lg text-center"> <!-- Placeholder for payment button --> <p class="text-gray-700 mb-4">Click the button below to make a secure donation via credit or debit card.</p> ${renderComponent($$result2, "Button", $$Button, { "href": "https://example.com/donate", "target": "_blank", "variant": "primary" }, { "default": ($$result3) => renderTemplate`
Donate Now
` })} </div> </div> <div class="mb-8"> <h3 class="text-xl font-bold mb-4">Give via Bank Transfer (ACH)</h3> <div class="bg-gray-50 p-6 rounded-lg"> <p class="text-gray-700 mb-4">To set up a direct bank transfer, please use the following information:</p> <div class="text-left mb-4"> <p><strong>Bank Name:</strong> First National Bank</p> <p><strong>Account Name:</strong> Church Name</p> <p><strong>Routing Number:</strong> 123456789</p> <p><strong>Account Number:</strong> 1234567890123</p> <p><strong>Memo:</strong> Please include your name and purpose of donation</p> </div> <p class="text-sm text-gray-600 italic">
Note: Bank transfers typically have lower processing fees, allowing more of your gift to go directly to ministry.
</p> </div> </div> <div> <h3 class="text-xl font-bold mb-4">Set Up Recurring Giving</h3> <div class="bg-gray-50 p-6 rounded-lg"> <p class="text-gray-700 mb-4">
Recurring giving helps our church plan our budget and ensures consistent support for our ministries. To set up recurring donations:
</p> <ol class="list-decimal list-inside space-y-2 mb-6 text-gray-700"> <li>Click the "Donate Now" button above</li> <li>Select the "Make this a monthly donation" option</li> <li>Choose your preferred payment method</li> <li>Select the date for your monthly gift</li> </ol> <p class="text-sm text-gray-600 italic">
You can modify or cancel your recurring gift at any time by contacting our church office.
</p> </div> </div> </div> </div> </div> </section>  <section id="financial-accountability" class="py-16"> <div class="container"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">Financial Accountability</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
We are committed to transparency and accountability in our financial practices
</p> </div> <div class="max-w-4xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="bg-white p-8 rounded-lg shadow-sm"> <h3 class="text-xl font-bold mb-4">Oversight & Governance</h3> <ul class="space-y-3 text-gray-700"> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>Our finances are overseen by a dedicated Finance Committee composed of qualified church members.</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>Annual budgets are approved by the church leadership and presented to the congregation.</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>We adhere to generally accepted accounting principles and best practices for churches.</span> </li> </ul> </div> <div class="bg-white p-8 rounded-lg shadow-sm"> <h3 class="text-xl font-bold mb-4">Transparency</h3> <ul class="space-y-3 text-gray-700"> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>Quarterly financial reports are made available to church members.</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>Annual financial statements are subject to review or audit by an independent accounting firm.</span> </li> <li class="flex items-start"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>Members are welcome to inquire about our financial practices and reports.</span> </li> </ul> </div> </div> <div class="mt-8 p-6 bg-gray-100 rounded-lg"> <h3 class="text-xl font-bold mb-3">Annual Report</h3> <p class="text-gray-700 mb-4">
We publish an annual report that includes a breakdown of our income and expenses, ministry accomplishments, and goals for the coming year.
</p> <p class="text-gray-700">
You can request a copy of our most recent annual report by contacting the church office at <a href="mailto:finance@churchname.org" class="text-primary-600 hover:text-primary-700">finance@churchname.org</a> or by calling <a href="tel:+15551234567" class="text-primary-600 hover:text-primary-700">(555) 123-4567</a>.
</p> </div> </div> </div> </section>  <section class="py-16 bg-gray-50"> <div class="container"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">Other Ways to Give</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Beyond regular financial giving, there are many ways to support our church's mission
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"> <div class="bg-white p-8 rounded-lg shadow-sm"> <h3 class="text-xl font-bold mb-3">Planned Giving</h3> <p class="text-gray-700 mb-4">
Include the church in your will or estate plan to leave a lasting legacy. We can help you explore options that align with your financial and charitable goals.
</p> <a href="/contact" class="text-primary-600 font-medium hover:text-primary-700">
Learn More →
</a> </div> <div class="bg-white p-8 rounded-lg shadow-sm"> <h3 class="text-xl font-bold mb-3">In-Kind Donations</h3> <p class="text-gray-700 mb-4">
Donate items needed for our ministries and outreach programs. Check our current needs list or contact the church office to learn about specific donation opportunities.
</p> <a href="/contact" class="text-primary-600 font-medium hover:text-primary-700">
View Current Needs →
</a> </div> <div class="bg-white p-8 rounded-lg shadow-sm"> <h3 class="text-xl font-bold mb-3">Volunteer</h3> <p class="text-gray-700 mb-4">
Give your time and talents to support our various ministries. From teaching Sunday School to helping with community outreach, there are many ways to serve.
</p> <a href="/ministries" class="text-primary-600 font-medium hover:text-primary-700">
Find Volunteer Opportunities →
</a> </div> </div> </div> </section>  <section class="py-16"> <div class="container"> <div class="max-w-3xl mx-auto"> <div class="bg-white p-8 rounded-lg shadow-md"> <h2 class="text-2xl font-bold mb-6">Tax Information</h2> <p class="text-gray-700 mb-4">
Church Name is a 501(c)(3) non-profit organization. All donations are tax-deductible to the extent allowed by law.
</p> <p class="text-gray-700 mb-4">
Donation receipts are issued for all contributions. Annual giving statements are provided by January 31st for the previous year's donations.
</p> <p class="text-gray-700 mb-6">
For questions about your giving history or tax receipts, please contact our finance office at <a href="mailto:finance@churchname.org" class="text-primary-600 hover:text-primary-700">finance@churchname.org</a>.
</p> <p class="text-sm text-gray-600 italic">
Tax ID: 12-3456789
</p> </div> </div> </div> </section>  <section class="py-20 bg-cover bg-center text-white" style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/uploads/thank-you-bg.webp)"> <div class="container"> <div class="max-w-3xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Thank You for Your Support</h2> <p class="text-xl mb-8">
Your generosity makes a real difference in our church community and beyond. Thank you for partnering with us in our mission.
</p> <div class="flex flex-wrap justify-center gap-4"> ${renderComponent($$result2, "Button", $$Button, { "href": "#online-giving", "variant": "primary", "size": "lg" }, { "default": ($$result3) => renderTemplate`
Give Now
` })} ${renderComponent($$result2, "Button", $$Button, { "href": "/contact", "variant": "outline", "size": "lg", "class": "bg-white/10 text-white border-white hover:bg-white hover:text-gray-900 backdrop-blur-sm" }, { "default": ($$result3) => renderTemplate`
Contact Us
` })} </div> </div> </div> </section> ` })}`;
}, "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/giving.astro", void 0);

const $$file = "C:/Users/localuser/Nextcloud2/Jarvis/Escritorio/proyectos/maucariapacom-church-starter/src/pages/giving.astro";
const $$url = "/giving";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Giving,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
