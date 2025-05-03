import { JSX } from "react";
import { AiOutlineDotNet } from "react-icons/ai";
import {
  SiAmazons3,
  SiApachespark,
  SiBentoml,
  SiCloudflare,
  SiDocker,
  SiElastic,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiHuggingface,
  SiJupyter,
  SiMinio,
  SiMongodb,
  SiNextdotjs,
  SiOracle,
  SiPostgresql,
  SiPython,
  SiScikitlearn,
  SiShadcnui,
  SiSqlalchemy,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandCSharp, TbSql } from "react-icons/tb";

export type Tech = {
  name: string;
  icon: JSX.Element;
};

export type TechGroup = {
  name: string;
  icon: JSX.Element;
  related: Tech[];
};

export const techGroups: TechGroup[] = [
  {
    name: ".NET",
    icon: <AiOutlineDotNet className="w-24 h-24 text-[#512BD4]" />,
    related: [
      { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-[#47A248]" /> },
      { name: "EF Core", icon: <TbSql className="w-10 h-10 text-[#00599C]" /> },
      { name: "C#", icon: <TbBrandCSharp className="w-10 h-10 text-[#204F8C]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 text-[#4169E1]" /> },
      { name: "Docker", icon: <SiDocker className="w-10 h-10 text-[#2496ED]" /> },
      { name: "Firebase", icon: <SiFirebase className="w-10 h-10 text-[#DD2C00]" /> },
      { name: "MinIO", icon: <SiMinio className="w-10 h-10 text-[#C72E49]" /> },
    ],
  },
  {
    name: "Python",
    icon: <SiPython className="w-24 h-24 text-[#3776AB]" />,
    related: [
      { name: "FastAPI", icon: <SiFastapi className="w-10 h-10 text-[#009688]" /> },
      { name: "SQLAlchemy", icon: <SiSqlalchemy className="w-10 h-10 text-[#D71F00]" /> },
      { name: "BentoML", icon: <SiBentoml className="w-10 h-10 text-[#fff]" /> },
      { name: "Docker", icon: <SiDocker className="w-10 h-10 text-[#2496ED]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 text-[#4169E1]" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-[#47A248]" /> },
    ],
  },
];

export const otherTechGroups: Tech[] = [
  { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10 text-[#fff]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-10 h-10 text-[#06B6D4]" /> },
  { name: "shadcn/ui", icon: <SiShadcnui className="w-10 h-10 text-[#fff]" /> },
  { name: "Cloudflare", icon: <SiCloudflare className="w-10 h-10 text-[#F38020]" /> },
  { name: "Oracle OCI", icon: <SiOracle className="w-10 h-10 text-[#B32629]" /> },
  { name: "scikit-learn", icon: <SiScikitlearn className="w-10 h-10 text-[#F7931E]" /> },
  { name: "PySpark", icon: <SiApachespark className="w-10 h-10 text-[#E25A1C]" /> },
  { name: "Jupyter", icon: <SiJupyter className="w-10 h-10 text-[#F37626]" /> },
  { name: "Elastic", icon: <SiElastic className="w-10 h-10 text-[#005571]" /> },
  { name: "Amazon S3", icon: <SiAmazons3 className="w-10 h-10 text-[#569A31]" /> },
  { name: "Transformers", icon: <SiHuggingface className="w-10 h-10 text-[#FFD21E]" /> },
  { name: "Git", icon: <SiGit className="w-10 h-10 text-[#F05032]" /> },
];
