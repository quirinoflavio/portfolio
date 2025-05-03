export type Tech = {
  name: string;
  icon: string;
};

export type TechGroup = {
  name: string;
  icon: string;
  related: Tech[];
};

export const techGroups: TechGroup[] = [
  {
    name: ".NET",
    icon: "/icons/dotnet.svg",
    related: [
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "FastAPI", icon: "/icons/fastapi.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    ],
  },
  {
    name: "Python",
    icon: "/icons/python.svg",
    related: [
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "FastAPI", icon: "/icons/fastapi.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" },
      { name: "SQLAlchemy", icon: "/icons/react.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "PySpark", icon: "/icons/pyspark.svg" },
    ],
  },
];

export const otherTechGroups: Tech[] = [
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "FastAPI", icon: "/icons/fastapi.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "PySpark", icon: "/icons/pyspark.svg" },
  { name: "SQLAlchemy", icon: "/icons/react.svg" },
  { name: "PySpark", icon: "/icons/pyspark.svg" },
  { name: "FastAPI", icon: "/icons/fastapi.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
  { name: "SQLAlchemy", icon: "/icons/react.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  // Add more as needed
];
