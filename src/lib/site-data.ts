export const contact = {
  phoneDisplay: "+91 90210 34567",
  phoneWhatsapp: "919021034567",
  address: "Karad Bus Stand, Dist. Satara, Maharashtra – 415110",
  hours: "7:00 AM – 10:00 PM, every day",
};

export type BusType = "AC Sleeper" | "AC Pushback Seater" | "Non-AC Seater" | "Non-AC Sleeper";

export interface Coach {
  name: string;
  plate: string;
  type: BusType;
  ac: boolean;
  capacity: string;
  layout: string;
  note: string;
  description: string;
  seatCols: number;
  berth: boolean;
  amenities: string[];
}

export const fleet: Coach[] = [
  {
    name: "Krishna",
    plate: "MH-11 BH 3301",
    type: "AC Sleeper",
    ac: true,
    capacity: "30 berths",
    layout: "2+1 layout",
    note: "Sleeper deck, front to rear",
    description:
      "The overnight workhorse — curtained berths, reading lights and a quieter cabin for the Hyderabad and Bengaluru runs where passengers board after dinner and step off ready for the day.",
    seatCols: 3,
    berth: true,
    amenities: ["Charging point", "CCTV onboard", "GPS tracked"],
  },
  {
    name: "Koyna",
    plate: "MH-11 BH 3302",
    type: "AC Pushback Seater",
    ac: true,
    capacity: "45 seats",
    layout: "2+2 layout",
    note: "Ideal for day trips & excursions",
    description:
      "Wide pushback seats and big windows for day trips — Mahabaleshwar picnics, wedding guest transfers and college excursions where everyone travels together and wants to see the ghats go by.",
    seatCols: 4,
    berth: false,
    amenities: ["Charging point", "Music system", "GPS tracked"],
  },
  {
    name: "Sahyadri",
    plate: "MH-11 BH 3303",
    type: "Non-AC Seater",
    ac: false,
    capacity: "52 seats",
    layout: "2+3 layout",
    note: "Budget-friendly group travel",
    description:
      "The Wari and large-group coach — 52 seats at a fare that keeps big groups together on one bus instead of splitting across two, with the same driver and departure time every trip.",
    seatCols: 5,
    berth: false,
    amenities: ["On-time runs", "Sanitised daily", "GPS tracked"],
  },
  {
    name: "Preeti",
    plate: "MH-11 BH 3304",
    type: "Non-AC Sleeper",
    ac: false,
    capacity: "30 berths",
    layout: "2+1 layout",
    note: "Named for Karad's Preeti Sangam",
    description:
      "Named for the Krishna–Koyna confluence at Karad — a budget overnight sleeper with blankets provided, for families and pilgrimage groups who want a berth to lie down in without the AC fare.",
    seatCols: 3,
    berth: true,
    amenities: ["Blankets provided", "GPS tracked", "Sanitised daily"],
  },
];

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
    title: "Pilgrimage Yatras",
    body: "Pandharpur Wari, Tuljapur, Shirdi and multi-day darshan tours with rest stops planned in.",
    icon: "temple",
  },
  {
    title: "School & College Trips",
    body: "Study tours and picnics with attendance-friendly seating and a dedicated point of contact.",
    icon: "backpack",
  },
  {
    title: "Weddings & Functions",
    body: "Baraat and guest transport between venues, timed around your muhurat.",
    icon: "star",
  },
  {
    title: "Corporate Outstation",
    body: "Offsites and site visits with a single point of billing for finance teams.",
    icon: "briefcase",
  },
];

export const whyUs = [
  {
    title: "Permitted & insured",
    body: "All-India Tourist Permit and comprehensive insurance on every coach.",
    icon: "shield",
  },
  {
    title: "Drivers who know the ghats",
    body: "Experienced on the Khambatki and Amba ghat sections, not just the highway.",
    icon: "driver",
  },
  {
    title: "Departures on time",
    body: "A fixed departure point at Karad Bus Stand, every time.",
    icon: "clock",
  },
  {
    title: "Live location on request",
    body: "Share the coach's live location with family or your event coordinator.",
    icon: "gps",
  },
  {
    title: "Cleaned between every trip",
    body: "Seats, berths and floors wiped down after each run.",
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
      "Sahyadri handled our full Pandharpur Wari group without a single delay, three years running.",
    who: "Warkari Group, Pandharpur Yatra",
  },
  {
    quote:
      "Koyna's pushback seats made the Karad–Mahabaleshwar picnic run easy for 45 students and two buses' worth of luggage.",
    who: "Educational Tour Committee, Karad",
  },
  {
    quote:
      "Booked Krishna overnight to Hyderabad for a family function — berths were clean and the driver called ahead on arrival.",
    who: "Family Function, Satara",
  },
];

export const heroStats = [
  { value: "04", label: "Coaches on road" },
  { value: "AC + Non-AC", label: "Sleeper & seater" },
  { value: "12+", label: "Regular routes" },
  { value: "Pan-India", label: "Charter service" },
];

export const about = {
  eyebrow: "About Sangam Travels",
  title: "A four-coach fleet, run out of one bus stand in Karad.",
  paragraphs: [
    "Sangam Travels operates out of Karad Bus Stand in Satara district, at the point where the Krishna and Koyna rivers meet — the Preeti Sangam the fleet is named after. Karad also sits on NH 48, the Pune–Bengaluru highway, which is why a four-coach operation here can reasonably run both a Monday-morning college trip to Mahabaleshwar and a Friday-night charter to Hyderabad with the same buses.",
    "Two coaches run AC — a sleeper and a pushback seater — and two run Non-AC, a large seater and a sleeper, so a booking can be matched to the group's budget rather than whatever happens to be free that week. Every coach carries an All-India Tourist Permit and an MH-11 Satara-RTO registration, and the same driver-conductor pair generally stays with a coach across a season so regular groups end up recognising them.",
  ],
  facts: [
    { label: "Base", value: "Karad Bus Stand, Dist. Satara" },
    { label: "Highway", value: "NH 48, Pune–Bengaluru corridor" },
    { label: "Coverage", value: "Maharashtra + pan-India charter" },
    { label: "Permit", value: "All-India Tourist Permit, insured" },
  ],
};

export const bookingSteps = [
  {
    step: "01",
    title: "Send your trip details",
    body: "Route, date, passenger count and preferred bus type — over WhatsApp or a call to the Karad office.",
  },
  {
    step: "02",
    title: "Confirm the coach and fare",
    body: "We check which of the four coaches is free on your date and quote a fare for that bus type and distance.",
  },
  {
    step: "03",
    title: "Board at the fixed point",
    body: "Boarding is from Karad Bus Stand (or a pickup point agreed in advance for group charters) at the confirmed time.",
  },
];

export const gallery = [
  {
    src: "/images/ac-volvo-highway.jpg",
    alt: "AC Volvo multi-axle coach on a Maharashtra street",
    caption: "AC Volvo-class multi-axle coach — the comfort tier Krishna and Koyna run to.",
  },
  {
    src: "/images/ac-coach-depot.jpg",
    alt: "AC Scania coach parked at a Maharashtra bus depot",
    caption: "AC Scania-class coach at a Maharashtra depot — wide reclining seats, tinted glass.",
  },
];

export const galleryCredit = {
  text: "Reference photography of Maharashtra AC coaches, not Sangam Travels' own vehicles — swap for real fleet photos before publishing. Photos: Rsrikanth05, Wikimedia Commons, CC BY-SA 4.0.",
  href: "https://commons.wikimedia.org/wiki/Category:MSRTC",
};
