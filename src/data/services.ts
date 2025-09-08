import comercial2 from "@/assets/services/commercial/2.webp";
import comercial3 from "@/assets/services/commercial/13.webp";
import comercial23 from "@/assets/services/commercial/23.webp";
import comercial26 from "@/assets/services/commercial/26.webp";
import comercial25 from "@/assets/services/commercial/25.webp";

import industrialMachine from "@/assets/services/industrial-machine/1.webp";
import industrialMachine2 from "@/assets/services/industrial-machine/2.webp";
import industrialMachine7 from "@/assets/services/industrial-machine/7.webp";
import industrialMachine8 from "@/assets/services/industrial-machine/8.webp";
import industrialMachine9 from "@/assets/services/industrial-machine/9.webp";

import interior1 from "@/assets/services/interior/1.webp";
import interior2 from "@/assets/services/interior/2.webp";
import interior3 from "@/assets/services/interior/3.webp";
import interior4 from "@/assets/services/interior/4.webp";
import interior5 from "@/assets/services/interior/5.webp";
import interior6 from "@/assets/services/interior/6.webp";
import interior10 from "@/assets/services/interior/10.webp";
import interior11 from "@/assets/services/interior/11.webp";

import tank2 from "@/assets/services/tank/2.webp";

import exterior2 from "@/assets/services/exterior/2.webp";
import exterior3 from "@/assets/services/exterior/3.webp";
import exterior4 from "@/assets/services/exterior/4.webp";
import exterior5 from "@/assets/services/exterior/5.webp";
import exterior6 from "@/assets/services/exterior/6.webp";
import exterior9 from "@/assets/services/exterior/9.webp";
import exterior10 from "@/assets/services/exterior/10.webp";
import exterior11 from "@/assets/services/exterior/11.webp";
import exterior12 from "@/assets/services/exterior/12.webp";

import powerWashing1 from "@/assets/services/power-washing/1.webp";
import powerWashing2 from "@/assets/services/power-washing/2.webp";
import powerWashing3 from "@/assets/services/power-washing/3.webp";
import powerWashing4 from "@/assets/services/power-washing/4.webp";
import powerWashing5 from "@/assets/services/power-washing/5.webp";

import cabinetPaintin1 from "@/assets/services/cabinet-painting/1.webp";
import cabinetPaintin2 from "@/assets/services/cabinet-painting/2.webp";
import cabinetPaintin3 from "@/assets/services/cabinet-painting/3.webp";
import cabinetPaintin4 from "@/assets/services/cabinet-painting/4.webp";
import cabinetPaintin5 from "@/assets/services/cabinet-painting/5.webp";

import md1 from "@/assets/services/metal-deck/1.webp";

export interface Service {
  id: string;
  title: string;
  image: string;
  text: { title: string; text: string; image: string }[];
  secondary_images: string[];
  services: string[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Interior Painting",
    text: [
      {
        title: "Interior Painting",
        text: "Our interior painting services are designed to enhance the aesthetics and functionality of your indoor spaces. Whether you're looking to refresh a single room or undertake a full-scale renovation, we provide high-quality finishes that transform your home or office. We focus on meticulous preparation and attention to detail, ensuring that every wall, ceiling, and trim is painted to perfection. With our professional painters, you can be assured that the result will be a beautiful, long-lasting finish that enhances the overall atmosphere of your space.",
        image: interior1.src,
      },
      {
        title: "Ceiling Repair & Painting",
        text: "Our ceiling repair and painting services are perfect for restoring the beauty of your interior spaces. We begin by repairing any cracks, holes, or water damage in your ceiling, followed by applying a fresh coat of paint. This service not only improves the appearance of your ceiling but also helps to protect it from future damage. Whether you're updating a small room or an expansive area, we ensure a smooth, flawless finish that complements the rest of your decor.",
        image: interior5.src,
      },
      {
        title: "Drywall Repairs & Repainting",
        text: "Drywall repairs and repainting are essential to maintaining the look and integrity of your walls. Over time, drywall can become damaged from wear and tear, accidents, or moisture. Our team is skilled at repairing these issues, seamlessly patching up holes, cracks, and dents. Once repairs are completed, we apply a fresh coat of paint, restoring the walls to their original condition and giving your space a polished, updated appearance.",
        image: interior6.src,
      },
      {
        title: "Popcorn Ceiling Removal and Painting",
        text: "Popcorn ceilings, also known as textured ceilings, are a thing of the past. Our popcorn ceiling removal and painting service not only improves the aesthetic of your home but also eliminates the health risks associated with asbestos in older popcorn ceilings. We carefully remove the textured material and then apply a smooth, modern finish that complements any room's design. This service significantly enhances the overall look and feel of your interior, making your space feel fresh and updated.",
        image: interior11.src,
      },
    ],
    services: [
      "Ceiling Repair & Painting",
      "Drywall Repairs & Repainting",
      "Popcorn Ceiling removal and painting",
    ],
    image: interior1.src,
    secondary_images: [
      interior2.src,
      interior3.src,
      interior4.src,
      interior5.src,
    ],
  },
  {
    id: "2",
    title: "Exterior Painting",
    text: [
      {
        title: "Exterior Painting",
        text: "Exterior painting is one of the most effective ways to improve your home's curb appeal and protect its surfaces from the harsh effects of weather. Our exterior painting services are designed to provide long-lasting protection against UV rays, rain, and other environmental factors. Using high-quality, weather-resistant paints, we ensure that your home or commercial property retains its beauty and integrity for years to come. Whether you're updating the color or protecting your home from the elements, our team delivers results that exceed expectations.",
        image: exterior9.src,
      },
      {
        title: "Brick Painting",
        text: "Brick painting is an excellent way to refresh the exterior of your home or building. Whether you have a brick house, wall, or feature, our painting services can enhance the natural beauty of the brick while providing additional protection against the elements. We use specialized paint designed for masonry surfaces, ensuring a smooth, durable finish that resists peeling and fading. Our professional approach ensures your brick surfaces look vibrant and well-maintained, adding value to your property.",
        image: exterior11.src,
      },
      {
        title: "Concrete Painting",
        text: "Concrete surfaces, whether it's your driveway, patio, or sidewalk, can be susceptible to staining and wear over time. Our concrete painting services not only restore the appearance of these surfaces but also provide a layer of protection against weather, oils, and other substances. By using high-quality concrete paint, we ensure that your surfaces look clean, fresh, and durable, withstanding the harsh outdoor conditions while enhancing your property's overall look.",
        image: exterior12.src,
      },
      {
        title: "Metal Painting",
        text: "Metal surfaces, such as gates, fences, and railings, require special attention to prevent rust and corrosion. Our metal painting services involve the use of high-performance coatings that not only improve the visual appeal of your metal structures but also provide long-term protection. Whether it's wrought iron, aluminum, or steel, we ensure that your metal surfaces stay durable and look fantastic. Our paints are formulated to resist wear and tear, so your metal items maintain their beauty for years to come.",
        image: exterior10.src,
      },
      {
        title: "Garage Painting",
        text: "Garages often suffer from neglect, but painting your garage doors and walls can completely transform the look of your home’s exterior. Our garage painting services are designed to boost the curb appeal of your property, giving your garage a fresh, modern look. We work with a variety of colors and finishes to complement your home’s style. In addition to improving aesthetics, our paints provide an extra layer of protection against weather and dirt, ensuring your garage remains in top condition for longer.",
        image: comercial3.src,
      },
    ],
    services: [
      "Brick Painting",
      "Concrete Painting",
      "Metal Painting",
      "Garage Painting",
    ],
    image: exterior9.src,
    secondary_images: [
      exterior2.src,
      exterior3.src,
      exterior4.src,
      exterior5.src,
      exterior6.src,
    ],
  },
  {
    id: "3",
    title: "Commercial Painting",
    text: [
      {
        title: "Commercial Painting",
        text: "Commercial painting is crucial for creating a professional and welcoming environment for your business. We specialize in providing high-quality, durable finishes that are designed to withstand the demands of commercial spaces. Our services include painting for offices, retail stores, educational institutions, hospitals, and other commercial properties. We understand that time is money, which is why we work efficiently to minimize disruption to your business operations, while ensuring a high level of craftsmanship that enhances the look and functionality of your space.",
        image: comercial2.src,
      },
      {
        title: "Condo & Apartments",
        text: "Our commercial painting services for condos and apartments are designed to meet the unique needs of multi-unit buildings. We understand the importance of maintaining a clean, modern look for common areas and individual units. Our team uses premium paints and finishes that not only improve the appearance of your property but also provide durability and protection. Whether you're preparing a building for sale, upgrading tenant spaces, or simply refreshing your interior, our expert painters can help bring your vision to life.",
        image: interior10.src,
      },
      {
        title: "Retail Stores",
        text: "First impressions matter in retail, and the painting of your retail store plays a significant role in attracting customers. Our commercial painting services for retail stores create a clean, inviting atmosphere that complements your brand and enhances the shopping experience. We use colors and finishes that help promote your brand identity while creating a space where customers feel comfortable and engaged. Our team works efficiently to ensure that your store remains operational while we transform its look.",
        image: comercial26.src,
      },
      {
        title: "Hospital & Healthcare Facilities",
        text: "Hospitals and healthcare facilities require specialized painting services that not only enhance the space’s aesthetic but also meet health and safety standards. Our team is experienced in working within medical environments, ensuring that we use non-toxic, durable paints that meet strict regulations. From patient rooms to waiting areas, our painting services create a clean, calming environment that promotes healing while maintaining the highest standards of hygiene and safety.",
        image: comercial25.src,
      },
      {
        title: "Schools and Universities",
        text: "Educational institutions need to create an inspiring environment for students and staff. Our painting services for schools and universities focus on improving the look and feel of classrooms, hallways, and other common areas. We use high-quality paints that are safe and durable, ensuring that your institution maintains a professional and welcoming atmosphere for years. Whether it’s a new coat of paint or a full-scale renovation, we provide efficient, cost-effective solutions for schools and universities of all sizes.",
        image: comercial23.src,
      },
    ],
    services: [
      "Condo & apartments",
      "Retail stores",
      "Hospital & healthcare facilities",
      "Schools and universities",
    ],
    image: md1.src,
    secondary_images: [comercial2.src, comercial3.src, comercial23.src],
  },
  {
    id: "4",
    title: "Industrial Painting",
    text: [
      {
        title: "Industrial Painting",
        text: "Industrial painting plays a vital role in maintaining and protecting large-scale equipment and structures in manufacturing, production, and other heavy-duty environments. Our industrial painting services provide long-lasting solutions that safeguard your assets from corrosion, wear, and environmental damage. We specialize in coating a wide range of industrial surfaces, including tanks, silos, factory equipment, and pipelines, ensuring they remain functional and protected. Whether you need fire protection or specialty coatings like epoxy, we have the expertise to handle any industrial painting project with precision and efficiency.",
        image: industrialMachine2.src,
      },
      {
        title: "Fire Protection",
        text: "Fire protection coatings are essential for ensuring the safety and integrity of industrial structures and equipment. Our fire protection painting services use fire-resistant materials that help prevent the spread of fire, providing valuable protection for your assets and employees. These coatings are especially important for high-risk industries where safety is a top priority, such as in oil, gas, and manufacturing sectors. We work closely with you to ensure that all fire protection regulations are met and that your facility is well-equipped to handle potential fire hazards.",
        image: industrialMachine9.src,
      },
      {
        title: "Silos",
        text: "Silos are crucial structures for storing large quantities of materials like grain, cement, and chemicals. Over time, silos can experience wear and tear, and it's important to protect them with high-quality coatings. Our silos painting services provide durable, weather-resistant finishes that protect your silos from corrosion and environmental damage. By using specialized coatings, we ensure that your silos remain in excellent condition, extending their lifespan and maintaining their functionality.",
        image: tank2.src,
      },
      {
        title: "Factory Equipment",
        text: "Factory equipment is subject to constant use and exposure to harsh conditions. To ensure the longevity of your equipment, it is essential to apply protective coatings that prevent rust, wear, and deterioration. Our factory equipment painting services offer robust solutions designed to withstand the demands of industrial environments. Whether you need to protect machinery, tools, or production lines, we provide a range of coatings that ensure your equipment performs efficiently and maintains its value over time.",
        image: industrialMachine.src,
      },
      {
        title: "Tank and Pipeline Coating",
        text: "Tanks and pipelines are often exposed to corrosive materials and extreme conditions. Our coating services for tanks and pipelines help prevent corrosion, leaks, and other forms of damage that can compromise their integrity. We use high-quality coatings such as epoxy to create a protective barrier that extends the lifespan of your tanks and pipelines, ensuring they continue to operate effectively and safely in your industrial processes.",
        image: industrialMachine7.src,
      },
      {
        title: "Epoxy",
        text: "Epoxy coatings are known for their strength and durability, making them an ideal choice for industrial surfaces that need extra protection. Whether applied to floors, equipment, or machinery, epoxy provides a tough, resistant finish that stands up to heavy use and harsh chemicals. Our epoxy painting services offer high-performance coatings that protect your surfaces while providing a smooth, attractive finish that is easy to maintain.",
        image: industrialMachine8.src,
      },
    ],
    services: [
      "Fire Protection",
      "Silos",
      "Factory Equipment",
      "Tank and Pipeline Coating",
      "Epoxy",
    ],
    image: industrialMachine.src,
    secondary_images: [md1.src, industrialMachine2.src, tank2.src],
  },
  {
    id: "5",
    title: "Power Washing",
    text: [
      {
        title: "Power Washing",
        text: "Our power washing service is designed to eliminate dirt, mold, grease, and old paint residue, ensuring a cleaner surface and improved adhesion for new paint, resulting in longer-lasting durability. Using state-of-the-art high-pressure washing technology, we thoroughly clean a variety of surfaces, including exteriors, walls, decks, and fences. This process removes contaminants that can interfere with the quality of the final finish and contribute to surface deterioration over time. Not only will your property look cleaner and more refreshed, but it will also be better protected against the wear and tear caused by the elements. With our power washing service, you can ensure that your surfaces are ready for a flawless, long-lasting finish while preserving the integrity of your property.",
        image: powerWashing5.src,
      },
      {
        title: "Paint adhesion improvement",
        text: "Achieving a long-lasting and professional paint job starts with proper surface cleaning. Our paint adhesion improvement service uses high-pressure washing to remove grease, mildew, and old paint residues, creating an ideal base for new coatings. This enhances the durability of the paint, reducing the likelihood of peeling or chipping over time. With our expert cleaning, your surfaces will be perfectly primed for a superior finish.",
        image: powerWashing3.src,
      },
      {
        title: "High-pressure exterior cleaning",
        text: "Our high-pressure exterior cleaning service effectively removes accumulated dirt, mold, and grime from various surfaces. By using advanced pressure washing techniques, we restore the appearance of walls, patios, sidewalks, and driveways, ensuring they look fresh and well-maintained. This process not only enhances the curb appeal of your property but also prevents long-term surface damage caused by environmental factors.",
        image: powerWashing1.src,
      },
      {
        title: "Exterior surface preparation power washing",
        text: "Proper surface preparation is crucial for any exterior renovation project. Our power washing service thoroughly cleans surfaces, removing dust, old paint, and contaminants that can hinder the adhesion of new coatings. This ensures a smooth and durable finish for painting, staining, or sealing. Whether you're revamping your home's facade or refinishing a deck, our service guarantees optimal surface readiness.",
        image: powerWashing2.src,
      },
    ],
    services: [
      "Paint adhesion improvement",
      "High-pressure exterior cleaning",
      "Exterior surface preparation power washing",
    ],
    image: powerWashing3.src,
    secondary_images: [powerWashing3.src, powerWashing4.src],
  },
  {
    id: "6",
    title: "Cabinet Painting & Refinishing",
    text: [
      {
        title: "Cabinet Painting & Refinishing",
        text: "We specialize in transforming your cabinets with professional painting, providing a cost-effective way to refresh and elevate the appearance of your kitchen or bathroom. By avoiding the high costs of replacement, we offer a smart solution that enhances the overall aesthetic of your space. Our process begins with meticulous surface preparation, ensuring that every cabinet is smooth and ready for a perfect finish. We use only the highest quality paints and finishes, chosen for their durability and long-lasting appeal. Our team takes great pride in delivering precise and detailed work, ensuring every corner and edge is flawlessly coated. Whether you're looking to update outdated cabinetry or add a touch of elegance to your space, we create stunning results that breathe new life into your home, making it a place you'll love even more.",
        image: cabinetPaintin2.src,
      },
      {
        title: "Cabinet restoration",
        text: "Our cabinet restoration service is designed to bring your worn or outdated cabinets back to life. Instead of costly replacements, we revitalize your existing cabinetry with expert refinishing techniques, repairing minor damages, smoothing surfaces, and applying high-quality finishes. This process enhances durability and aesthetics, ensuring your kitchen or bathroom looks fresh and elegant without the expense of new installations.",
        image: cabinetPaintin3.src,
      },
      {
        title: "Custom cabinet color solutions",
        text: "Transform your cabinets with our custom color solutions, tailored to match your unique style and home decor. Whether you prefer a classic white, a modern bold hue, or a timeless wood finish, we offer a wide range of color options and expert color consultations. Using premium paints and finishes, we create a flawless, durable coating that enhances the beauty of your space while providing long-lasting protection.",
        image: cabinetPaintin4.src,
      },
      {
        title: "Professional cabinet repainting",
        text: "Give your kitchen or bathroom a fresh new look with our professional cabinet repainting service. We ensure a smooth, streak-free finish by meticulously preparing surfaces, sanding imperfections, and applying high-quality, durable paint. Our expert painters pay attention to every detail, from edges to corners, to deliver a refined and elegant result. This cost-effective upgrade adds value to your home and revitalizes your space effortlessly.",
        image: cabinetPaintin5.src,
      },
    ],
    services: [
      "Cabinet restoration",
      "Custom cabinet color solutions",
      "Professional cabinet repainting",
    ],
    image: cabinetPaintin1.src,
    secondary_images: [cabinetPaintin2.src],
  },
];
