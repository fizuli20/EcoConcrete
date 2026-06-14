export const navigation = [
  { href: "/technology", label: "Technology" },
  { href: "/evidence", label: "Evidence" },
  { href: "/pilot", label: "Pilot" },
  { href: "/company", label: "Company" },
] as const;

export const processSteps = [
  {
    id: "01",
    title: "Source",
    subtitle: "Recover the useful mineral",
    description:
      "Carboryn targets calcium-rich industrial silicate residues that would otherwise remain a disposal liability.",
    status: "Feedstock pathway",
  },
  {
    id: "02",
    title: "React",
    subtitle: "Bind captured carbon",
    description:
      "Recovered calcium reacts with a controlled CO2 stream, converting gaseous carbon into stable calcium carbonate.",
    status: "Established chemistry",
  },
  {
    id: "03",
    title: "Reuse",
    subtitle: "Return value to industry",
    description:
      "The mineralized output is developed as a lower-impact input for concrete and construction-material supply chains.",
    status: "Product validation target",
  },
] as const;

export type ClaimStatus =
  | "Verified chemistry"
  | "Internally measured"
  | "Modeled estimate"
  | "Target"
  | "Upcoming milestone";

export const claims: {
  value: string;
  title: string;
  detail: string;
  status: ClaimStatus;
}[] = [
  {
    value: "0.79",
    title: "kg CO2 / kg CaO",
    detail:
      "The theoretical maximum follows directly from the molecular masses in CaO + CO2 -> CaCO3.",
    status: "Verified chemistry",
  },
  {
    value: "58%",
    title: "net-emissions reduction",
    detail:
      "Current Loop 2.0 estimate. A documented lifecycle assessment is still required.",
    status: "Modeled estimate",
  },
  {
    value: "85%",
    title: "reduction by 2030",
    detail:
      "A long-term operating target dependent on recovery efficiency and low-carbon processing.",
    status: "Target",
  },
];

export const pilotMilestones = [
  {
    date: "Jul 2026",
    title: "Waste-stream characterization",
    description:
      "Quantify composition, recoverable calcium, impurities, and processing requirements.",
    status: "Upcoming milestone" as ClaimStatus,
  },
  {
    date: "Sep 2026",
    title: "10 kg carbonation batch",
    description:
      "Move beyond benchtop measurements into a controlled repeatable batch.",
    status: "Upcoming milestone" as ClaimStatus,
  },
  {
    date: "Q4 2026",
    title: "Sensor-backed data publication",
    description:
      "Publish measured batch data with calibration, controls, and material characterization.",
    status: "Upcoming milestone" as ClaimStatus,
  },
];

export const team = [
  {
    name: "Yusif Aghayev",
    role: "Chemical Engineer & Co-Founder",
    focus: "Chemical processes, sustainability, and material innovation.",
    code: "CHEM",
    image: "/team/yusif-aghayev.png",
    linkedin: "https://www.linkedin.com/in/yusifaghayev",
  },
  {
    name: "Ali Huseynli",
    role: "Software Engineer & Co-Founder",
    focus: "Software development, embedded systems, and engineering tools.",
    code: "SOFT",
    image: "/team/ali-huseynli.png",
    linkedin: "https://www.linkedin.com/in/ali-huseynli-241503337",
  },
  {
    name: "Fizuli Hasanov",
    role: "AI Architect & Co-Founder",
    focus: "AI systems, automation, and intelligent solution architecture.",
    code: "AI",
    image: "/team/fizuli-hasanov.png",
    linkedin: "https://www.linkedin.com/in/fizuli-hasanov",
  },
  {
    name: "Muhammed Memmedli",
    role: "Business Analyst & Co-Founder",
    focus: "Business strategy, market analysis, and project development.",
    code: "BIZ",
    image: "/team/muhammed-memmedli.png",
    linkedin:
      "https://www.linkedin.com/in/m%C9%99h%C9%99mm%C9%99d-m%C9%99mm%C9%99dli-7bb981372",
  },
  {
    name: "Rauf Aliyev",
    role: "Hardware Engineer & Co-Founder",
    focus: "Hardware systems, prototyping, and embedded device engineering.",
    code: "HARD",
    image: "/team/rauf-aliyev.png",
    linkedin: "https://www.linkedin.com/in/rauf-%C9%99liyev-3bb083381",
  },
] as const;

export const programs = [
  "GreenTech III Startup & Innovation Competition — 1st place among 100+ teams",
  "EmpowerMe Incubation Program — Graduate",
  "Startup School 4 — Active",
  "5th Tusi Incubation Program — Active",
] as const;
