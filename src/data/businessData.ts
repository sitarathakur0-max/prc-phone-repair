import { BusinessInfo, ServiceItem, ProcessStep, CommonProblem, ReviewTheme } from '../types';

// AI Generated Visuals (strictly using generated assets)
import technicianWorkshopImg from '../assets/images/prc_technician_workshop_1789755399910.jpg';
import screenRepairMacroImg from '../assets/images/prc_screen_repair_macro_1789755416891.jpg';
import cleanWorkspaceImg from '../assets/images/prc_clean_workspace_1789755436233.jpg';
import parisStreetImg from '../assets/images/prc_paris_street_1789755449506.jpg';

export const IMAGES = {
  technicianWorkshop: technicianWorkshopImg,
  screenRepairMacro: screenRepairMacroImg,
  cleanWorkspace: cleanWorkspaceImg,
  parisStreet: parisStreetImg,
};

export const BUSINESS: BusinessInfo = {
  name: "PRC Phone Repair",
  category: "Cell Phone Store / Phone Repair",
  rating: 4.8,
  reviewCount: 1341,
  address: "47 Rue d'Amsterdam, 75008 Paris, France",
  street: "47 Rue d'Amsterdam",
  postalCode: "75008",
  city: "Paris",
  arrondissement: "8e arrondissement",
  phone: "+33 1 45 26 82 07",
  phoneRaw: "+33145268207",
  website: "reparation-iphone.com",
  serviceType: "In-store pickup & walk-in diagnosis",
  locationAdvantage: "A few minutes' walk from Gare Saint-Lazare and close to Paris 9.",
  scheduleNotes: [
    "Closes at 7:00 PM",
    "Opens 10:30 AM Friday",
    "In-store assistance during workshop operating hours"
  ],
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=47+Rue+d%27Amsterdam+75008+Paris+France",
};

export const SCREEN_REPAIR_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Diagnosis",
    subtitle: "In-Store Inspection",
    description: "Our technician thoroughly evaluates the physical condition and display malfunction of your phone before any intervention.",
    highlight: "Comprehensive physical & hardware assessment"
  },
  {
    step: 2,
    title: "Quote",
    subtitle: "Transparent Assessment",
    description: "You receive a clear, upfront quote for the required intervention. We only proceed once you review and approve.",
    highlight: "No surprise charges; approval required before work"
  },
  {
    step: 3,
    title: "Screen Replacement",
    subtitle: "Precision Disassembly",
    description: "Careful removal of the broken glass or defective display module and precise installation of the replacement screen assembly.",
    highlight: "Delicate tool work on antistatic workstations"
  },
  {
    step: 4,
    title: "Display Testing",
    subtitle: "Visual Quality Verification",
    description: "Verification of panel illumination, color uniformity, resolution, and absence of black spots or vertical artifacts.",
    highlight: "Zero artifact and color integrity checks"
  },
  {
    step: 5,
    title: "Touch Testing",
    subtitle: "Responsiveness Matrix",
    description: "Multi-point gesture testing across the entire screen area to ensure complete, lag-free touch sensitivity.",
    highlight: "Edge-to-edge touch grid confirmation"
  },
  {
    step: 6,
    title: "Sensor Testing",
    subtitle: "Hardware Integrity",
    description: "Verification of ear-speaker proximity sensor, ambient light sensor, and front camera alignment to ensure complete functionality.",
    highlight: "Full sensor & biometric alignment verification"
  },
  {
    step: 7,
    title: "Customer Collection",
    subtitle: "In-Store Handover",
    description: "Your phone is demonstrated working and handed back to you at our counter in Paris 8 with in-store collection.",
    highlight: "Verified device returned directly to you"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "iphone-screen-replacement",
    title: "iPhone Screen Replacement",
    tagline: "Specialized service for cracked glass, black displays, and touch failures",
    description: "Our core specialty at 47 Rue d'Amsterdam. We handle cracked glass, unresponsive touch surfaces, total black screen, and distorted vertical lines with complete diagnostic checks.",
    symptoms: [
      "Cracked or shattered exterior glass",
      "Touch screen unresponsive or ghost-touching",
      "Black screen with sound/vibration still working",
      "Vertical or horizontal colored lines across display"
    ],
    diagnosticCheck: "Full pre-intervention diagnosis followed by display, touch, and sensor testing prior to return.",
    isFeatured: true
  },
  {
    id: "broken-screen-repair",
    title: "Broken Screen Repair",
    tagline: "Structural and aesthetic repair for damaged smartphone glass",
    description: "Drop impacts often crack the surface glass while internal components may remain functional. We inspect the frame, digitizer, and internal cables before recommending the suitable replacement.",
    symptoms: [
      "Webbed cracks across display edges",
      "Loose glass shards compromising safety",
      "Damaged corner impacts affecting frame seating"
    ],
    diagnosticCheck: "Physical frame inspection to verify secure seating of the replacement module."
  },
  {
    id: "touchscreen-issues",
    title: "Touchscreen Issues",
    tagline: "Diagnostics for touch lag, unresponsive zones, and erratic inputs",
    description: "When taps fail to register or the phone registers touches by itself, digitizer failure is common. We run dedicated diagnostics to verify whether the digitizer or connector is at fault.",
    symptoms: [
      "Dead spots on specific keyboard keys",
      "Ghost touch opening apps unexpectedly",
      "Inability to swipe down notifications or unlock screen"
    ],
    diagnosticCheck: "Grid coordinate touch tests across all four quadrants of the screen."
  },
  {
    id: "black-display-problems",
    title: "Black Display / Display Problems",
    tagline: "Internal display failure diagnostics and resolution",
    description: "If your phone vibrates, receives calls, or chimes but the screen remains pitch black or flickers violently, the OLED/LCD display matrix requires technical intervention.",
    symptoms: [
      "Phone powers on and vibrates but screen stays black",
      "Flickering backlight or erratic screen brightness",
      "Colored pixel bleed spreading from impact points",
      "Static or vertical lines obscuring content"
    ],
    diagnosticCheck: "Power draw and backlight ribbon circuit evaluation."
  },
  {
    id: "charging-problems",
    title: "Charging Problems",
    tagline: "Diagnostics for loose ports, intermittent charging, and connector wear",
    description: "Charging issues can stem from debris accumulation, bent connector pins, or worn charging ports. We inspect the port under magnification and test power delivery before intervention.",
    symptoms: [
      "Cable must be held at an angle to charge",
      "Device does not detect connected charging cable",
      "Intermittent charging notifications or disconnects"
    ],
    diagnosticCheck: "Microscope port inspection and current measurement."
  },
  {
    id: "general-phone-repair",
    title: "General Phone Repair",
    tagline: "Careful evaluation for common hardware and physical wear issues",
    description: "Bring your smartphone to our Paris 8 workshop for a hands-on physical assessment. We explain the issue clearly, provide a transparent quote, and test components thoroughly before handing the phone back.",
    symptoms: [
      "Wear and tear following accidental drops",
      "Button unresponsiveness or loose casing",
      "General hardware inspection needs"
    ],
    diagnosticCheck: "In-store bench assessment with transparent quote prior to repair."
  }
];

export const COMMON_PROBLEMS: CommonProblem[] = [
  {
    id: "cracked-glass",
    title: "Cracked Glass",
    subtitle: "Visible fractures, splintering, or impact spiderwebs",
    description: "Glass fractures can spread over time, expose underlying circuitry, and pose a cutting risk. An in-store inspection determines if the display underneath remains undamaged.",
    recommendedService: "iPhone Screen Replacement / Broken Screen Repair",
    actionText: "Diagnose Cracked Screen"
  },
  {
    id: "touch-not-responding",
    title: "Touch Not Responding",
    subtitle: "Swipes ignored, erratic typing, or frozen touch matrix",
    description: "Unresponsive touch makes basic phone use impossible. We test the digitizer connection and provide a quote before performing any component replacement.",
    recommendedService: "Touchscreen Issues Repair",
    actionText: "Diagnose Touch Issue"
  },
  {
    id: "black-screen",
    title: "Black Screen",
    subtitle: "Sounds and vibrations work, but the display remains dark",
    description: "Often caused by internal panel shock after an impact. We test whether the logic board is intact and confirm display assembly replacement requirements.",
    recommendedService: "Black Display / Display Problems",
    actionText: "Diagnose Black Screen"
  },
  {
    id: "vertical-display-lines",
    title: "Vertical Display Lines",
    subtitle: "Green, white, or multicolored lines running down the screen",
    description: "Vertical lines indicate display matrix hardware damage. Our screen replacement restores crisp, clear visuals with full post-installation testing.",
    recommendedService: "iPhone Screen Replacement",
    actionText: "Diagnose Display Lines"
  },
  {
    id: "phone-not-charging",
    title: "Phone Not Charging",
    subtitle: "No battery indication, loose port fit, or intermittent connection",
    description: "A very frequent issue brought to our counter. We safely diagnose whether it is an obstruction, contact pin issue, or port component failure.",
    recommendedService: "Charging Problems Repair",
    actionText: "Diagnose Charging Issue"
  }
];

export const REVIEW_THEMES: ReviewTheme[] = [
  {
    title: "Fast & Efficient Service",
    mentionCountPct: 94,
    description: "Customers consistently highlight swift on-site assistance, streamlined diagnostic handoffs, and rapid repair execution when timing is critical.",
    customerSentiment: "Frequently praised for prompt turnaround when customers are in urgent need."
  },
  {
    title: "Urgent Repairs & Travel Assistance",
    mentionCountPct: 88,
    description: "Travelers and commuters passing through Gare Saint-Lazare frequently depend on PRC for urgent phone fixes right before departures or flights.",
    customerSentiment: "Critical assistance delivered just hours before train trips or international travel."
  },
  {
    title: "Clear Diagnosis & Transparent Quotes",
    mentionCountPct: 92,
    description: "Customers appreciate knowing the problem and price upfront before any work starts. No unexpected costs or unnecessary upsells.",
    customerSentiment: "Trusted for clear communication and honest pricing prior to intervention."
  },
  {
    title: "Screen & Display Restoration",
    mentionCountPct: 96,
    description: "Repeated praise for clean screen replacements that completely resolve broken glass, vertical lines, and unresponsive touch.",
    customerSentiment: "Devices returned in pristine working state with responsive touch and vivid colors."
  },
  {
    title: "Helpful & Professional Staff",
    mentionCountPct: 91,
    description: "A welcoming, patient, and knowledgeable repair counter where questions are answered clearly without high-pressure sales.",
    customerSentiment: "Friendly counter service in the heart of Paris 8."
  },
  {
    title: "Charging & Battery Assistance",
    mentionCountPct: 85,
    description: "Reliable resolution of stubborn charging issues, loose dock connections, and power problems.",
    customerSentiment: "Phones brought back to full charging capability without unnecessary replacements."
  }
];

export const TRUST_PILLARS = [
  {
    stat: "4.8 / 5",
    label: "Google Rating",
    detail: "Verified score reflecting genuine customer satisfaction."
  },
  {
    stat: "1,341+",
    label: "Customer Reviews",
    detail: "High volume of feedback from Paris residents, commuters, and travelers."
  },
  {
    stat: "Paris 8",
    label: "47 Rue d'Amsterdam",
    detail: "Minutes from Gare Saint-Lazare and directly adjacent to Paris 9."
  },
  {
    stat: "Pre-Repair",
    label: "Diagnosis & Quote",
    detail: "Always evaluated and priced before any work begins on your phone."
  },
  {
    stat: "Post-Repair",
    label: "Triple Testing",
    detail: "Display, touch responsiveness, and sensors tested prior to return."
  }
];
