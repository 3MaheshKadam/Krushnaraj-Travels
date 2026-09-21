export const brand = {
  name: "Krushnaraj Travels",
  location: "Karad, Dist. Satara, Maharashtra",
};

export const contact = {
  phonesDisplay: ["95034 81238", "90758 91238"],
  phonePrimaryWhatsapp: "919503481238",
  phonePrimaryDisplay: "+91 95034 81238",
  phoneSecondaryDisplay: "+91 90758 91238",
  phoneSecondaryTel: "+919075891238",
  email: "krushnarajtravels@gmail.com",
  location: "Karad, Dist. Satara, Maharashtra",
  hours: "7:00 AM – 10:00 PM, every day",
};

export type VehicleClass = "Sedan" | "MPV" | "SUV" | "Van";

export interface Vehicle {
  name: string;
  vehicleClass: VehicleClass;
  ac: "AC" | "AC & Non-AC";
  seats: string;
  description: string;
  amenities: string[];
  icon: "car" | "van";
  image: string;
  imageAlt: string;
}

export const fleet: Vehicle[] = [
  {
    name: "Toyota Innova Crysta",
    vehicleClass: "MPV",
    ac: "AC",
    seats: "6–7 seats",
    description:
      "The default pick for airport runs and family outstation trips — a quiet cabin, captain seats on the top trim, and enough boot space for a week's luggage.",
    amenities: ["Charging point", "Music system", "Driver on call"],
    icon: "car",
    image: "/images/innova-crysta-hero.jpg",
    imageAlt: "White Toyota Innova Crysta parked at the roadside",
  },
  {
    name: "Toyota Fortuner",
    vehicleClass: "SUV",
    ac: "AC",
    seats: "6–7 seats",
    description:
      "For guests who want a premium SUV on the highway — wedding pickups, VIP airport transfers, and long ghat drives where ground clearance and comfort both matter.",
    amenities: ["Charging point", "Music system", "Driver on call"],
    icon: "car",
    image: "/images/fortuner.jpg",
    imageAlt: "White Toyota Fortuner SUV parked in a driveway",
  },
  {
    name: "Kia Carens",
    vehicleClass: "MPV",
    ac: "AC",
    seats: "6–7 seats",
    description:
      "A newer, well-equipped 3-row option for small family or corporate groups who want captain seats without booking the larger Innova.",
    amenities: ["Charging point", "Music system", "Driver on call"],
    icon: "car",
    image: "/images/kia-carens.jpg",
    imageAlt: "Grey Kia Carens MPV on a showroom floor",
  },
  {
    name: "Maruti Suzuki Ertiga",
    vehicleClass: "MPV",
    ac: "AC",
    seats: "6 seats",
    description:
      "A compact 3-row car for small groups doing local sightseeing or a short outstation run, at a lighter fare than the Innova or Carens.",
    amenities: ["Charging point", "Music system", "Driver on call"],
    icon: "car",
    image: "/images/ertiga.jpg",
    imageAlt: "Dark grey Maruti Suzuki Ertiga MPV in a parking garage",
  },
  {
    name: "Maruti Suzuki Swift Dzire",
    vehicleClass: "Sedan",
    ac: "AC",
    seats: "4 seats",
    description:
      "The everyday sedan for solo travellers, couples, or small families — airport drops, local errands, and short point-to-point rides.",
    amenities: ["Charging point", "Driver on call"],
    icon: "car",
    image: "/images/swift-dzire.jpg",
    imageAlt: "Silver Maruti Suzuki Swift Dzire sedan",
  },
  {
    name: "Force Urbania",
    vehicleClass: "Van",
    ac: "AC & Non-AC",
    seats: "12–17 seats",
    description:
      "A mid-size van for office shuttles, mid-sized wedding groups, and college trips that have outgrown a single MPV but don't need a full Tempo Traveller.",
    amenities: ["Charging point", "Music system", "Driver on call"],
    icon: "van",
    image: "/images/force-traveller-highway.jpg",
    imageAlt: "White Force-class traveller van on a mountain highway",
  },
  {
    name: "Tempo Traveller",
    vehicleClass: "Van",
    ac: "AC & Non-AC",
    seats: "12–26 seats",
    description:
      "The large-group workhorse — Wari and pilgrimage groups, wedding parties, and multi-day tours, available in AC or Non-AC depending on the budget.",
    amenities: ["Charging point", "Music system", "Driver on call"],
    icon: "van",
    image: "/images/force-traveller-highway.jpg",
    imageAlt: "White Force-class traveller van on a mountain highway",
  },
];

export const heroSlides = [
  { vehicle: "Toyota Fortuner" },
  { vehicle: "Toyota Innova Crysta" },
  { vehicle: "Kia Carens" },
  { vehicle: "Maruti Suzuki Ertiga" },
  { vehicle: "Maruti Suzuki Swift Dzire" },
  { vehicle: "Force Urbania" },
].map(({ vehicle }) => {
  const match = fleet.find((v) => v.name === vehicle)!;
  return {
    src: match.image,
    alt: match.imageAlt,
    caption: match.name,
  };
});

export const maharashtraRoutes = [
  { to: "Pune", km: 115 },
  { to: "Mahabaleshwar", km: 55 },
  { to: "Kolhapur", km: 95 },
  { to: "Mumbai", km: 235 },
  { to: "Solapur", km: 165 },
  { to: "Ratnagiri (Konkan)", km: 140 },
  { to: "Chh. Sambhajinagar", km: 280 },
];

export const panIndiaRoutes = [
  { to: "Pandharpur", km: 140 },
  { to: "Tuljapur", km: 220 },
  { to: "Shirdi", km: 230 },
  { to: "Goa", km: 180 },
  { to: "Hyderabad", km: 430 },
  { to: "Bengaluru", km: 480 },
  { to: "Tirupati", km: 620 },
];

export const tickerDestinations = [
  "KARAD → PUNE → MUMBAI",
  "KARAD → KOLHAPUR → GOA",
  "KARAD → PANDHARPUR → TULJAPUR",
  "KARAD → SHIRDI",
  "KARAD → HYDERABAD → BENGALURU",
];

export const services = [
  {
    title: "Airport Transfers",
    body: "Pickup and drop to Pune, Kolhapur and Belgaum airports in a Dzire, Innova Crysta or Fortuner, timed to your flight.",
    icon: "briefcase",
  },
  {
    title: "Local & Full-Day Hire",
    body: "A car for the day around Karad, Satara or Mahabaleshwar, billed by the hour or the kilometre.",
    icon: "star",
  },
  {
    title: "Outstation One-Way & Round Trip",
    body: "Point-to-point or round trips anywhere in Maharashtra and pan-India, in a sedan, MPV or SUV.",
    icon: "temple",
  },
  {
    title: "Weddings & Family Functions",
    body: "Guest transport and baraat cars, from a single Dzire to a fleet of Innovas and a Tempo Traveller.",
    icon: "star",
  },
  {
    title: "Corporate & Group Travel",
    body: "Office shuttles and offsites in the Force Urbania, billed to one point of contact for finance teams.",
    icon: "briefcase",
  },
  {
    title: "Pilgrimage Tours",
    body: "Pandharpur Wari, Tuljapur and Shirdi in a Tempo Traveller, AC or Non-AC depending on group size and budget.",
    icon: "temple",
  },
];

export const whyUs = [
  {
    title: "A mixed fleet, not one car",
    body: "Sedans to a 26-seat Tempo Traveller, so the vehicle matches the group instead of the other way round.",
    icon: "shield",
  },
  {
    title: "Drivers who know the ghats",
    body: "Experienced on the Khambatki and Amba ghat sections, not just the highway.",
    icon: "driver",
  },
  {
    title: "Pickup from your doorstep",
    body: "No fixed stand to reach — the car or van comes to your address at the agreed time.",
    icon: "clock",
  },
  {
    title: "Live location on request",
    body: "Share the driver's live location with family or your event coordinator.",
    icon: "gps",
  },
  {
    title: "Cleaned between every trip",
    body: "Seats and interiors wiped down after each run.",
    icon: "check",
  },
  {
    title: "One number for booking",
    body: "Call or WhatsApp directly — no call centre, no waiting.",
    icon: "phone",
  },
];

export const testimonials = [
  {
    quote:
      "Booked the Tempo Traveller for our Pandharpur Wari group two years running — same driver both times, no last-minute changes.",
    who: "Warkari Group, Pandharpur Yatra",
  },
  {
    quote:
      "Innova Crysta for a Pune airport pickup at 5 AM — driver was there early and called ahead when we landed.",
    who: "Airport Transfer, Karad–Pune",
  },
  {
    quote:
      "Took the Fortuner for a wedding guest run between Karad and Kolhapur — clean car, and the driver knew the ghat road well.",
    who: "Wedding Function, Kolhapur",
  },
];

export const heroStats = [
  { value: "7", label: "Vehicle models" },
  { value: "Sedan → Van", label: "Every group size" },
  { value: "12+", label: "Regular routes" },
  { value: "Pan-India", label: "Outstation service" },
];

export const about = {
  eyebrow: "About Krushnaraj Travels",
  title: "One call, the right vehicle for the trip.",
  paragraphs: [
    "Krushnaraj Travels operates out of Karad in Satara district, on NH 48 between Pune and Bengaluru — a fleet built around the idea that a solo airport run and a 40-person Wari group shouldn't be booked through the same car. The lineup runs from a Swift Dzire sedan up to a 26-seat Tempo Traveller, with SUVs and MPVs in between, so the vehicle is sized to the trip rather than whatever happens to be free.",
    "Sedans, MPVs and SUVs run AC only; the Force Urbania and Tempo Traveller are available in both AC and Non-AC, so larger groups can choose based on budget. Every trip — local, outstation, or pan-India — is booked directly over a call or WhatsApp to the numbers below, with the driver arranged to pick up from your address rather than a fixed stand.",
  ],
  facts: [
    { label: "Base", value: "Karad, Dist. Satara" },
    { label: "Highway", value: "NH 48, Pune–Bengaluru corridor" },
    { label: "Fleet range", value: "Swift Dzire to Tempo Traveller" },
    { label: "Coverage", value: "Maharashtra + pan-India outstation" },
  ],
};

export const bookingSteps = [
  {
    step: "01",
    title: "Send your trip details",
    body: "Route, date, passenger count and preferred vehicle — over WhatsApp or a call.",
  },
  {
    step: "02",
    title: "Confirm the vehicle and fare",
    body: "We check which vehicle is free on your date and quote a fare for that vehicle and distance.",
  },
  {
    step: "03",
    title: "Pickup from your address",
    body: "The car or van comes to your doorstep at the confirmed time — no stand or office visit needed.",
  },
];

export const gallery = [
  {
    src: "/images/innova-crysta-side.jpg",
    alt: "White Toyota Innova Crysta MPV parked at the roadside",
    caption: "Toyota Innova Crysta — the standard AC MPV for family and airport trips.",
    width: 1600,
    height: 900,
  },
  {
    src: "/images/force-traveller-highway.jpg",
    alt: "White Force Traveller van on a mountain highway",
    caption: "Force Traveller-class van — the AC/Non-AC tier Force Urbania and Tempo Traveller run to.",
    width: 1600,
    height: 1200,
  },
];

export const galleryCredit = {
  text: "Reference photography of the vehicle classes offered — including the photos on the homepage slider and revealed on hover in the Fleet section above — not Krushnaraj Travels' own vehicles. Swap for real fleet photos before publishing. Photos: Premnath Kudva, Yann Forget, Ganesh Mohan T, Captainmorlypogi1959, Akashpbrahmavar and Biswarup Ganguly, via Wikimedia Commons, CC BY-SA / CC BY / CC0.",
  href: "https://commons.wikimedia.org/wiki/Category:Toyota_Innova_Crysta",
};
