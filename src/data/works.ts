import comercial1 from "@/assets/services/commercial/1.webp";
import comercial2 from "@/assets/services/commercial/2.webp";

import comercial8 from "@/assets/services/commercial/8.webp";
import comercial9 from "@/assets/services/commercial/9.webp";

import comercial13 from "@/assets/services/commercial/13.webp";
import comercial11 from "@/assets/services/commercial/11.webp";

import industrialMachine1 from "@/assets/services/industrial-machine/1.webp";
import industrialMachine2 from "@/assets/services/industrial-machine/2.webp";

import tank1 from "@/assets/services/tank/1.webp";
import tank2 from "@/assets/services/tank/2.webp";

import industrialPlant1 from "@/assets/services/industrial-plant/1.webp";
import industrialPlant2 from "@/assets/services/industrial-plant/2.webp";

export interface Work {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
}

export const works: Work[] = [
  {
    id: "0",
    title: "Surface preparation and coating",
    subtitle: "Commercial Painting",
    images: [comercial1.src, comercial2.src],
  },
  {
    id: "1",
    title: "Plastic Processing Equipment",
    subtitle: "Industrial Painting",
    images: [industrialMachine1.src, industrialMachine2.src],
  },
  {
    id: "2",
    title: "Silo Coating & Corrosion Protection",
    subtitle: "Industrial Painting",
    images: [tank1.src, tank2.src],
  },
  {
    id: "3",
    title: "Commercial workshop renovation",
    subtitle: "Commercial Painting",
    images: [comercial13.src, comercial11.src],
  },
  {
    id: "4",
    title: "Metal Exterior Painting",
    subtitle: "Industrial painting",
    images: [industrialPlant1.src, industrialPlant2.src],
  },
  {
    id: "5",
    title: "Parking Garage Pipes & Concrete Walls",
    subtitle: "Commercial Painting",
    images: [comercial8.src, comercial9.src],
  },
];
