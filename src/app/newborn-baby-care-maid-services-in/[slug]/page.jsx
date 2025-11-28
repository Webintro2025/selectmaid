import ContactForm from "@/Components/ContactForm";
import { locations } from "@/marketplace";
import Slides from "@/Components/slides";

export async function generateMetadata({ params }) {
	const slug = params.slug;
	// Convert slug to city name (reverse the slug logic)
	const rawCity = locations.find(
  (loc) => loc.toLowerCase().replace(/\s+/g, '-') === slug
);
const cityName = rawCity
  ? rawCity
      .toLowerCase()
      .split(/[\s-]+/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
  : "Location";
	const url = `https://selectmaid.in/newborn-baby-care-maid-services-in/${slug}`;
	return {
		title: `Newborn Baby Care Maid Services in ${cityName} | Select Maid`,
		description: `If You Need Newborn Baby Care Maid Services in ${cityName}? Call Select Maid, Expert In Passport Holder Nanny Services in ${cityName}, India.`,
		keywords: [
		 `Newborn Baby Care Maid Services in ${cityName}`,
      `Passport Holder Nanny Services in ${cityName}`,
    
		],
		openGraph: {
			title: `Newborn Baby Care Maid Services in ${cityName} | Select Maid`,
			description: `If You Need Newborn Baby Care Maid Services in ${cityName}? Call Select Maid, Expert In Passport Holder Nanny Services in ${cityName}, Best Newborn Baby Care Maid Services in ${cityName}, India.`,
			url,
			siteName: "Select Maid {locationName}",
			
		},
		alternates: {
			canonical: url
		},
		robots: {
			index: true,
			follow: true
		}
	};
}

export default function LocationPage({ params }) {
	const slug = params.slug;
	const rawLocation = locations.find(
		(loc) => loc.toLowerCase().replace(/\s+/g, '-') === slug
	);
	const locationName = rawLocation
		? rawLocation
				.toLowerCase()
				.split(/[\s-]+/)
				.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
				.join(' ')
		: null;
	if (!locationName) {
		return <main className="max-w-2xl mx-auto py-10 px-4"><h1 className="text-2xl font-bold">Location Not Found</h1></main>;
	}
  return (

    <main className="w-full ">
     



<div className="relative bg-gradient-to-r from-gray-800 via-red-900 to-gray-800 w-full
  h-[120px] xs:h-[140px] sm:h-[200px] md:h-[260px] lg:h-[320px] xl:h-[360px]">

  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10">
    <h1 className="text-white font-serif text-sm xs:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-5xl leading-tight drop-shadow-md">
     Newborn Baby Care Maid Services in {locationName}
    </h1>
    <p className="text-white font-medium text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl drop-shadow">
   Welcome to <a href="https://selectmaid.in/">Select Maid</a> , If You Are Looking For <strong>Newborn Baby Care Maid Services in {locationName}</strong> , We Are The Best Option For You. We Provide  Best  <strong>Passport Holder Nanny Services in  {locationName}, Newborn Baby Care Maid Services in  {locationName}</strong> , {locationName}.
    </p>
    
  </div>
</div>







<div className="bg-white px-10">
  <main className="w-full px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10">
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
      <section className="w-full md:w-1/2 text-black">
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] font-semibold mb-3 sm:mb-4 md:mb-6 max-w-[600px]">
          Best Newborn Baby Care Maid Services in {locationName} – Select Maid
        </h2>
        <p className="mb-4 sm:mb-6 max-w-[600px] text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
          Welcoming a  <a href="https://en.wikipedia.org/wiki/Newborn_care_and_safety">newborn</a> into your home is one of life’s greatest joys, but it also brings immense responsibility. Every parent wants the highest level of care, safety, and emotional warmth for their baby. At our premium domestic staffing service, we take pride in offering <strong>Newborn Baby Care Maid Services in {locationName}</strong> that are designed to support new parents with confidence, reliability, and expert attention.

With years of experience and a team of trained professionals, we provide <strong>Passport Holder Nanny Services in  {locationName}</strong>, ensuring every family gets tailored care solutions they can trust.
        </p>
      </section>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          alt={`House Maid Live-in Services in ${locationName}`}
          className="object-cover rounded-lg w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-auto shadow"
          height={500}
          src="/New born baby maid or japa maid.png"
          width={500}
        />
      </div>
    </div>
  </main>
</div>



<hr />




<div className="bg-white w-full px-16 xs:px-16 sm:px-16 py-6 sm:py-10 flex flex-col md:flex-row md:space-x-10 lg:space-x-20 ">
  <div className="w-full md:w-1/2 flex flex-col justify-center">
    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] mb-3 sm:mb-6 font-semibold">
      Benefits of Hiring Our Newborn Baby Care Maids in {locationName}
    </h2>
    <ul className="list-disc pl-5 text-xs xs:text-sm sm:text-base leading-relaxed max-w-xl">
      <li>
        <strong>Enhanced Safety & Professional Handling:</strong> Every newborn is delicate. Our trained maids handle your baby with expert care, reducing risks and ensuring comfort.
      </li>
      <li>
        <strong>Stress-Free Parenting:</strong> New parents often struggle with sleepless nights and overwhelming routines. Our caregivers allow you to rest while maintaining the baby’s needs flawlessly.
      </li>
      <li>
        <strong>Support in Postpartum Recovery:</strong> New mothers need rest, nourishment and emotional support. <strong>Newborn Baby Care Maid Services in {locationName}</strong>, Our trained maids manage baby care activities so mothers can recover faster.
      </li>
      <li>
        <strong>Hygiene & Health Monitoring:</strong> From sterilizing feeding bottles to maintaining a clean environment, our maids ensure strict hygiene standards around the baby.
      </li>
      <li>
        <strong>Routine Formation for Your Baby:</strong> Our experts help build healthy feeding, sleeping, and soothing routines that support your baby’s growth.
      </li>
    </ul>
  </div>
  <div className="w-full md:w-1/3 bg-gray-200 rounded-xl p-4 sm:p-6 md:p-8 mt-8 md:mt-0 flex flex-col justify-center shadow-sm">
    <h2 className="text-base xs:text-lg sm:text-xl mb-4 sm:mb-6 text-center font-semibold">Get A Consultation</h2>
   <ContactForm />
  </div>
</div>
<hr />
<div>
 

</div>
<hr />











<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
  Our Complete Service Range Across in {locationName}
  </h2>
  <p className="text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]  mx-auto text-center">
    We proudly deliver a premium range of professional domestic staffing solutions designed to support every aspect of your home, childcare, travel, and daily lifestyle. At <strong>Passport Holder Nanny Services in {locationName}</strong>, Each service is tailored with precision, experienced staff, and a commitment to excellence. Below is our comprehensive service portfolio available across all major cities in {locationName}.
  </p>
  <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-4 sm:mt-5 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. Newborn Baby Care Maid Services in {locationName}</span><br />
      Our flagship offering, the <strong>Newborn Baby Care Maid Services in {locationName}</strong>, is designed for new parents seeking professional and nurturing care for their newborn. We provide trained baby care maids who specialize in handling infants from day one. They manage everything from feeding and burping to hygiene maintenance and sleep training. With deep knowledge of newborn needs and medical safety, our caregivers ensure your baby grows in a safe, clean, and positive environment. This service is ideal for parents looking for emotional comfort, expert handling, and complete support during the crucial early months of parenting.
    </li>
    <li>
      <span className="font-bold">2. Passport Holder Nanny Services in {locationName}</span><br />
      We offer highly dependable <strong>Passport Holder Nanny Services in {locationName}</strong> for families who travel frequently—domestically or internationally. These nannies are verified, trained, and experienced in traveling with newborns and toddlers. They assist with everything from travel preparation, packing, feeding schedules, and managing baby routines during flights or long journeys. Whether you are attending events, relocating temporarily, or going on a family vacation, our travel-ready nannies ensure your child remains safe, comfortable, and cared for every moment of the journey.
    </li>
  </ul>

  <div className=" bg-gradient-to-r from-gray-800 via-red-900 to-gray-800  rounded-xl p-4 sm:p-6 mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-2 text-center">📞 Contact us today to discuss your requirements, request a quote, or place an order.</h3>
  <p className="text-xs xs:text-sm sm:text-base text-white mb-2 text-center">If you are Looking for the <strong>Best Newborn Baby Care Maid Services in {locationName} </strong>? SelectMaid is your trusted partner.</p> <br/> 
      <ul className="list-disc pl-4 sm:pl-6 text-xs xs:text-sm sm:text-base text-white mb-2">
      <li>👉 <strong>Call Now:</strong> +91-7290007484</li>
      <li>👉 <strong>Visit Our Website</strong> <a href="https://selectmaid.in/">www.selectmaid.in</a></li>
      <li>👉 <strong>Our Email Address</strong> – selectmaid@gmail.com </li>
    </ul>
  </div>
</div>






<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
    Why Choose Us – The Most Trusted Domestic & Newborn Care Service Provider in {locationName}
  </h2>
  <p className="text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]  mx-auto text-center">
    Choosing the right caregiver for your newborn or household is one of the most important decisions you will ever make. Families across {locationName} trust us because we combine professionalism, experience, compassion, and reliability in every service we deliver. Our commitment to safety and quality is unmatched, making us the first choice for <strong>Newborn Baby Care Maid Services in {locationName}</strong>, Passport Holder Nannies, and Live-in Maids.
  </p>
  <p className="text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]  mx-auto">
    <strong>Below are the key reasons why clients choose us with complete confidence:</strong>
  </p>
  <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-4 sm:mt-5 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. Trained & Certified Caregivers for Newborns</span><br />
      We provide only highly trained and certified baby care maids who specialize in handling newborns and infants.<br />
      Our caregivers undergo professional training in feeding, burping, bathing, diaper care, sleep routine support, and emergency handling.<br />
      Their deep understanding of newborn needs helps parents feel secure and relaxed, knowing their baby is in expert hands.
    </li>
    <li>
      <span className="font-bold">2. 100% Verified, Background-Checked, and Safe Staff</span><br />
      Safety is our top priority.<br />
      Every maid, nanny, or caregiver is thoroughly screened through:<br />
      <ul className="list-disc pl-5">
        <li>Police verification</li>
        <li>Identity authentication</li>
        <li>Background history checks</li>
        <li>Medical fitness tests</li>
      </ul>
      This ensures that the person entering your home is trustworthy, responsible, and safe for your family.
    </li>
    <li>
      <span className="font-bold">3. Pan-{locationName} Service Coverage in All Major Cities</span><br />
      Our services are available across Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Chandigarh, and all major cities in {locationName}.<br />
      Wherever you live, we provide seamless support with quick onboarding and replacement options.<br />
      This nationwide presence makes us the most accessible and reliable domestic staffing partner.
    </li>
    <li>
      <span className="font-bold">4. Specialized Newborn & Mother Care Support</span><br />
      We understand the emotional and physical challenges parents face during the early months.<br />
      That's why our staff is trained to handle:<br />
      <ul className="list-disc pl-5">
        <li>Newborn hygiene</li>
        <li>Umbilical cord care</li>
        <li>Baby massage & bath</li>
        <li>Breastfeeding/bottle feeding support</li>
        <li>Mother’s postpartum assistance</li>
      </ul>
      Our caregivers ensure comfort and proper care for both mother and child, creating a peaceful recovery environment.
    </li>
    <li>
      <span className="font-bold">5. Passport Holder Nannies for Travel-Ready Support</span><br />
      Families who travel often choose us for our <strong>Passport Holder Nanny Services in {locationName}.</strong><br />
      These nannies are experienced in domestic and international travel, helping manage baby routines during flights, long journeys, hotel stays, and outdoor environments.<br />
      Our travel-friendly staff ensures your baby remains safe, comfortable, and well-cared-for anywhere in the world.
    </li>
    <li>
      <span className="font-bold">6. Experienced Live-in Maids for Complete Home Support</span><br />
      Our <strong>Newborn Baby Care Maid Services in {locationName}</strong> provide 24/7 support for all aspects of household management.<br />
      These maids manage cleaning, cooking, laundry, childcare, and home organization.<br />
      Their dedication ensures that your family enjoys a smooth, well-managed lifestyle without stress or workload.
    </li>
    <li>
      <span className="font-bold">7. Fast Replacement Policy & Reliable Customer Support</span><br />
      If you feel the maid is not the right fit, we offer quick and hassle-free replacement options.<br />
      Our customer support team is available to assist you with any concerns, ensuring you always receive uninterrupted service.<br />
      Your comfort and satisfaction are our highest priority.
    </li>
    <li>
      <span className="font-bold">8. Affordable, Transparent & Customizable Pricing</span><br />
      We believe premium services should be accessible.<br />
      Our pricing is:
      <ul className="list-disc pl-5">
        <li>Transparent</li>
        <li>Competitive</li>
        <li>Free from hidden charges</li>
        <li>Customizable based on your needs</li>
      </ul>
      Whether you need <strong>Newborn Baby Care Maid Services in {locationName}</strong>, we provide flexible plans that fit your budget.
    </li>
  </ul>
</div>

<hr />
<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">Conclusion:-</h2>
  <p className="text-xs xs:text-sm sm:text-base font-sans text-black leading-relaxed">
 
Our <strong>Newborn Baby Care Maid Services in {locationName}</strong> offer unmatched support for modern families looking for safe, professional, and loving care for their newborns. With our complete service range—including Passport Holder Nanny Services and <strong>Passport Holder Nanny Services in {locationName}</strong> — we ensure comfort, reliability, and peace of mind for every household.

Whether you are a new parent, a frequent traveler, or someone seeking full-time domestic support, we are committed to delivering excellence with integrity, warmth, and expertise.
  </p>
</div>

    </main>
  );
}
