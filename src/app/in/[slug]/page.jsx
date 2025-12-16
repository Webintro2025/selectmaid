import ContactForm from "@/Components/ContactForm";
import { locations } from "@/marketplace";
import Slides from "@/Components/slides";

export async function generateMetadata({ params }) {
	const {slug} = await params;
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
	const url = `https://selectmaid.in/in/${slug}`;
	return {
		title: `House Maid Live-in Services in ${cityName} | Select Maid`,
		description: `If You Need House Maid Live-in Services in ${cityName}? Call Select Maid, Expert In Live-In Baby Care Services in ${cityName}, India.`,
		keywords: [
			`House Maid Live-in Services in ${cityName}`,
      `Live-In Baby Care Services in ${cityName}`,
      `Newborn Baby Care Maid Services in ${cityName}`,
  `Live-In Patient Care Attendant Services in ${cityName}`,
  `Premium Live-In Childcare Nanny Services in ${cityName}`,
  `Elderly Care Taker Services in ${cityName}`,
  `All-Rounder Maid & Cook Combo Services in ${cityName}`,
  `Passport Holder Nanny Services in ${cityName}`,
  `English-Speaking Nanny Services in ${cityName}`,
  `Live-In Home Cook / 24×7 Home Chef Services in ${cityName}`,
  `Professional Home Nurse Services in ${cityName}`,
  `Bedside Patient Care Takers Services in ${cityName}`
    
		],
		openGraph: {
			title: `House Maid Live-in Services in ${cityName} | Select Maid`,
			description: `If You Need House Maid Live-in Services in ${cityName}? Call Select Maid, Expert In Live-In Baby Care Services in ${cityName}, India.`,
			url,
			siteName: "Select Maid India",
			
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

export default async function LocationPage({ params }) {
	const {slug} = await params;
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
    House Maid Live-in Services in {locationName}
    </h1>
    <p className="text-white font-medium text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl drop-shadow">
   Welcome to <a href="https://selectmaid.in/">Select Maid</a> , If You Are Looking For <strong>House Maid Live-in Services in {locationName}</strong> , We Are The Best Option For You. We Provide  Best  <strong>Live-In Baby Care Services in {locationName}, Newborn Baby Care Maid Services in  {locationName}</strong> , India.
    </p>
    
  </div>
</div>







<div className="bg-white px-10">
  <main className="w-full px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10">
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
      <section className="w-full md:w-1/2 text-black">
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] font-semibold mb-3 sm:mb-4 md:mb-6 max-w-[600px]">
          Best House Maid Live-in Services in {locationName} | Trusted Domestic Help for Every Home
        </h2>
        <p className="mb-4 sm:mb-6 max-w-[600px] text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
          Select Maid is a leading and trusted brand in <strong>House Maid Live-in Services in {locationName}</strong>, offering a comprehensive range of domestic care solutions for families across the country and abroad. With our head office located in Delhi and proudly registered under the Ministry of Corporate Affairs (MCA), Government of India, we are committed to delivering reliable, professional, and compassionate domestic services that enhance the comfort and convenience of modern households.

We also provide transparent and secure job opportunities for domestic helpers, enabling thousands of workers to find dignified employment both in India and overseas. At <strong>House Maid Live-in Services in {locationName}</strong>, Our goal is to build a safe, trustworthy ecosystem for families and domestic workers alike.
        </p>
      </section>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          alt={`House Maid Live-in Services in ${locationName}`}
          className="object-cover rounded-lg w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-auto shadow"
          height={500}
          src="/Home.png"
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
  Why Select Maid Services Are Important for Every Household
    
    </h2>
    <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-xl">

Select Maid services play a crucial role in helping families maintain a balanced, organized, and stress-free lifestyle. With today’s fast-paced routines, managing household chores, childcare, cooking, and patient care becomes overwhelming for many working professionals and traditional families. Select Maid bridges this gap by providing trained, reliable, and live-in domestic helpers who ensure your home runs smoothly around the clock. At <strong>Professional Home Nurse Services in {locationName}</strong> These services bring convenience, safety, expert support, and emotional comfort into your daily life. Whether it’s caring for newborns, assisting elderly parents, handling medical needs at home, or managing everyday household responsibilities, Select Maid offers dependable solutions tailored to your unique needs. This support not only improves your quality of life but also gives you more time to focus on work, family, and personal well-being.
    </p>
  </div>
  <div className="w-full md:w-1/3 bg-gray-200 rounded-xl p-4 sm:p-6 md:p-8 mt-8 md:mt-0 flex flex-col justify-center shadow-sm">
    <h2 className="text-base xs:text-lg sm:text-xl mb-4 sm:mb-6 text-center font-semibold">Get A Consultation</h2>
   <ContactForm />
  </div>
</div>
<hr />
<div>
 
  <Slides/>
</div>
<hr />











<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
  Our Premium Service Range Across {locationName}
  </h2>
<ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. Live-In House Maid Services in {locationName}</span><br />
      Our flagship service provides full-time, live-in maids who manage the entire household with dedication and discipline. They efficiently handle daily chores such as cleaning, sweeping, mopping, dusting, laundry, utensil washing, and home organization. <strong>House Maid Live-in Services in {locationName}</strong>. Each maid is trained to maintain cleanliness, follow hygiene protocols, respect your privacy, and adjust easily to your home environment. Whether you have a small apartment or a large family home, our live-in maids ensure everything stays well-managed and stress-free.
    </li>
    <li>
      <span className="font-bold">2. Professional Home Nurse Services in {locationName}</span><br />
      We offer certified and highly competent live-in home nurses for patients requiring medical assistance within the comfort of their home. Our nurses are skilled in basic medical care, medication management, wound dressing, post-surgery care, vital monitoring, elder support, and mobility assistance. They work closely with the patient’s routine and medical requirements, ensuring constant supervision, comfort, and emotional support. Ideal for seniors, recovering patients, and individuals with long-term health conditions.
    </li>
    <li>
      <span className="font-bold">3. Live-In Baby Care Services in {locationName}</span><br />
      Our live-in babysitters and nannies provide full-time, loving, and safe childcare for infants and young children. Trained in feeding, bathing, diaper changing, hygiene care, bedtime routines, storytelling, and early learning activities, they ensure your child receives complete attention and nurturing care. With a focus on safety and emotional bonding, our nannies support both working parents and joint families with consistent and reliable childcare.
    </li>
    <li>
      <span className="font-bold">4. Live-In Patient Care Attendant Services in {locationName}</span><br />
      For elderly individuals, bedridden patients, or anyone recovering from illness or surgery, our patient care attendants offer complete bedside support. They assist with daily activities such as bathing, cleaning, mobility, feeding, medication reminders, repositioning, and maintaining hygiene. Their compassionate approach helps patients feel valued, comfortable, and emotionally supported throughout the day and night.
    </li>
    <li>
      <span className="font-bold">5. Live-In Home Cook / 24×7 Home Chef Services in {locationName}</span><br />
      We provide experienced live-in cooks and home chefs who prepare healthy, hygienic meals customized to your taste and dietary needs. Skilled in vegetarian and non-vegetarian Indian cuisine, as well as continental, Chinese, diet meals, kid-friendly food, and family meal planning, our cooks manage everything—from grocery planning to clean cooking spaces. Their expertise ensures your family enjoys fresh, delicious meals every day.
    </li>
    <li>
      <span className="font-bold">6. Premium Live-In Childcare Nanny Services in {locationName}</span><br />
      Our trained childcare nannies specialize in emotional bonding, early learning development, daily routines, meal preparation, safety monitoring, and discipline. They ensure your child’s growth, behavior, and well-being are nurtured in a positive and structured manner. This service is perfect for busy professionals, traveling parents, or families seeking long-term childcare support.
    </li>
    <li>
      <span className="font-bold">7. Newborn Baby Care Maid Services in {locationName}</span><br />
      We provide specialized newborn care maids who are expertly trained in baby massage, bathing, feeding support, night care, sanitization, burping, and handling delicate newborn routines. With a high focus on hygiene and soft-handed care, they ensure the mother receives full support during the postpartum period, while the newborn stays safe, healthy, and comfortable.
    </li>
    <li>
      <span className="font-bold">8. Elderly Care Taker Services in {locationName}</span><br />
      Our caretakers offer compassionate assistance to senior citizens who need help in their day-to-day activities. They support tasks like bathing, grooming, walking, feeding, medication reminders, companionship, and safety monitoring. Their patient-friendly approach ensures elderly individuals remain independent, secure, and emotionally supported in their own home.
    </li>
    <li>
      <span className="font-bold">9. Bedside Patient Care Takers Services in {locationName}</span><br />
      These professionals specialize in complete bedside care including mobility assistance, toileting support, meal help, cleaning, repositioning, and ensuring personal hygiene. Ideal for patients who require constant care but prefer staying at home rather than shifting to a care facility.
    </li>
    <li>
      <span className="font-bold">10. All-Rounder Maid &amp; Cook Combo Services in {locationName}</span><br />
      This unique service provides you with a multi-skilled live-in helper who can manage cooking, cleaning, baby care, elder support, and general household duties—all in one. It is the perfect solution for small families, working couples, or individuals looking for an efficient, cost-effective household management system with a single trusted helper.
    </li>
    <li>
      <span className="font-bold">11. Passport Holder Nanny Services in {locationName}</span><br />
      For families traveling abroad or those living overseas, we offer experienced nannies with valid passports who can accompany you internationally. Trained in global childcare standards, hygiene practices, and cultural adaptability, they ensure smooth support during travel and extended stays abroad.
    </li>
    <li>
      <span className="font-bold">12. English-Speaking Nanny Services in {locationName}</span><br />
      Our premium category English-speaking nannies are trained in communication, etiquette, child development, and advanced childcare techniques. They help children learn routines, discipline, language skills, manners, and creative activities. Ideal for high-profile families, NRIs, or parents who prefer an advanced level of childcare professionalism.
    </li>
  </ul>

  <div className=" bg-gradient-to-r from-gray-800 via-red-900 to-gray-800  rounded-xl p-4 sm:p-6 mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-2 text-center">📞 Contact us today to discuss your requirements, request a quote, or place an order.</h3>
  <p className="text-xs xs:text-sm sm:text-base text-white mb-2 text-center">If you are Looking for the <strong>Best House Maid Live-in Services in {locationName} </strong>? SelectMaid is your trusted partner.</p> <br/> 
      <ul className="list-disc pl-4 sm:pl-6 text-xs xs:text-sm sm:text-base text-white mb-2">
      <li>👉 <strong>Call Now:</strong> +91-7290007484</li>
      <li>👉 <strong>Visit Our Website</strong> <a href="https://selectmaid.in/">www.selectmaid.in</a></li>
      <li>👉 <strong>Our Email Address</strong> – selectmaid@gmail.com </li>
    </ul>
  </div>
</div>





<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
  Why Choose Us – The Most Reliable House Maid Live-in Services in {locationName}
  </h2>
  <p className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
  Choosing a trusted domestic helper is one of the most important decisions for any household. With Select Maid, you get a professional, secure, and stress-free experience that stands unmatched in the industry. Our <strong>House Maid Live-in Services in {locationName}</strong> are designed to provide families with comfort, safety, and consistent support—24 hours a day, 7 days a week.

  </p>
  <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. Verified, Background-Checked &amp; Trusted Workforce</span><br />
      At Select Maid, your family’s safety comes before anything else. That’s why every live-in maid, nanny, caregiver, and cook undergoes a strict verification process. This includes police verification, ID checks, previous employment references, and health screenings. Only trustworthy and proven candidates become part of our service. You never have to worry about safety, reliability, or background authenticity.
    </li>
    <li>
      <span className="font-bold">2. Professionally Trained Domestic Helpers for Modern Homes</span><br />
      We train our workers through structured modules that cover household cleaning, hygiene practices, kitchen management, child handling, elder support, patient care, discipline, and communication. This ensures that the helper you hire is polished, efficient, and fully prepared to handle the daily needs of a modern Indian home. Their training makes them fast, responsible, and capable of maintaining your home's cleanliness and routine.
    </li>
    <li>
      <span className="font-bold">3. 24/7 Convenience with Full-Time Live-In Support</span><br />
      Our <strong>House Maid Live-in Services in {locationName}</strong> offer complete peace of mind. A live-in helper ensures that there are no daily attendance issues, no delays, no excuses, and no last-minute emergencies. You get consistent support at all times—morning to night. Whether it’s cleaning, cooking, childcare, or elder support, your helper is available whenever you need them.
    </li>
    <li>
      <span className="font-bold">4. Legally Registered &amp; Transparent Company</span><br />
      Select Maid is fully registered under the Ministry of Corporate Affairs (MCA), Government of India, making us a legally recognized, structured, and compliant service provider. We follow all safety standards, legal documentation, fair employment policies, and transparent price structures. When you choose us, you choose professionalism, legality, and complete trust.
    </li>
    <li>
      <span className="font-bold">5. PAN India Coverage With Seamless Placement Support</span><br />
      Whether you live in Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Jaipur, Lucknow, Chandigarh, or any other city in India—we have a wide network of trained live-in maids available for placement. Our PAN India presence ensures that you get quick service, fast replacements, and consistent support no matter where you are located.
    </li>
    <li>
      <span className="font-bold">6. Quick Replacement Guarantee Without Any Hassles</span><br />
      If your domestic helper faces personal issues, struggles to adjust, or needs to be replaced for any reason, we arrange a quick and smooth replacement without any extra charges (as per policy). You will never be left without support. Our clients appreciate this because their home routine never gets disturbed.
    </li>
    <li>
      <span className="font-bold">7. Personalized Matching for Your Family’s Exact Needs</span><br />
      Every family has unique requirements, and we understand that deeply. We study your lifestyle, number of family members, food preferences, children’s needs, elder care requirements, cooking expectations, and daily schedule. Based on this, we match you with a maid or caregiver who fits your home perfectly. This personalized approach results in long-term satisfaction and better bonding.
    </li>
    <li>
      <span className="font-bold">8. India’s Widest Domestic Service Range Under One Brand</span><br />
      We offer every type of domestic service you may need, including House Maid Live-in Services, Home Nurse Services, Baby Care Live-in, Caretakers, Patient Attendants, Home Cooks, 24/7 Chefs, English-speaking nannies, newborn baby maids, elder care professionals, and all-rounder maids. You don’t have to look for different agencies—Select Maid covers everything under one trusted roof.
    </li>
    <li>
      <span className="font-bold">9. Dedicated Relationship Manager for Every Client</span><br />
      Every client receives a dedicated manager who listens to your requirements, helps you select the right worker, manages documentation, supports worker onboarding, and stays connected with you until you are fully satisfied. This personal support makes the entire process smooth, comfortable, and stress-free.
    </li>
    <li>
      <span className="font-bold">10. Transparent Pricing With No Hidden Charges</span><br />
      We offer clear and fair pricing for all our services. There are no hidden costs, no middlemen fees, and no surprise charges. The amount you agree to is exactly what you pay. Our honesty and transparency have made us one of the most trusted names in House Maid Live-in Services in India.
    </li>
    <li>
      <span className="font-bold">11. Hassle-Free Documentation &amp; Smooth Onboarding</span><br />
      We take care of everything—from worker ID documentation and contract agreements to onboarding support and rules explanation. You don’t have to handle any paperwork or legal formalities. We make the process simple, fast, and effortless for you.
    </li>
    <li>
      <span className="font-bold">12. Professional Behaviour, Hygiene &amp; Discipline Guaranteed</span><br />
      Our staff maintains high standards of cleanliness, grooming, discipline, and respectful behaviour. They understand boundaries, follow rules, respect family privacy, and work with complete dedication. Their professionalism ensures that your home remains peaceful and well-managed at all times.
    </li>
    <li>
      <span className="font-bold">13. Perfect for Every Type of Family in India</span><br />
      Whether you are a working couple, a joint family, a nuclear family, a home with elders, a home with infants, or a home with a patient—our live-in helpers can adapt to your lifestyle. They understand Indian culture, traditions, and family values, making them a perfect fit for any household.
    </li>
    <li>
      <span className="font-bold">14. Thousands of Successful Placements Every Year</span><br />
      With a massive network, years of experience, and thousands of satisfied clients, Select Maid has become the first choice for families seeking <strong>Live-In Patient Care Attendant Services in {locationName}</strong>. Our proven track record, positive reviews, and repeat clients show the quality of our placements.
    </li>
    <li>
      <span className="font-bold">15. We Make Your Home Life Easy, Comfortable &amp; Stress-Free</span><br />
      With Select Maid, your everyday life becomes smoother. You no longer have to worry about cleaning, cooking, managing kids, taking care of elders, or handling patient care. A trained helper ensures that your home runs perfectly—allowing you to focus on your work, family time, and personal peace.
    </li>

  </ul>
</div>

<hr />
<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">Conclusion:-</h2>
  <p className="text-xs xs:text-sm sm:text-base font-sans text-black leading-relaxed">
 
At Select Maid, we are committed to delivering trusted, trained, and reliable live-in domestic help across India. With a wide range of premium services from <strong>House Maid Live-in Services in {locationName}</strong> to childcare, patient care, elderly care, cooking, and home nursing we ensure every family receives personalized support and complete peace of mind. Our focus on quality, safety, and professionalism makes us a preferred choice for thousands of households. Whether you need daily home assistance or round-the-clock caregiving, we provide dependable solutions that improve your lifestyle and bring comfort, security, and convenience to your home.
  </p>
</div>

    </main>
  );
}
