interface ExperienceItem {
  role: string;
  period: string;
  company: string;
  responsibilities: string[];
  techs: string[];
}

const experience: ExperienceItem[] = [
  {
    company: "NeoPTO",
    role: "Desenvolvedor Backend",
    period: "2024 - 2025",
    responsibilities: [
      "Desenvolvimento de solução backend para gestão e recomendação de dados hospitalares.",
      "Participação em reuniões com clientes para coleta de requisitos e demonstrações.",
    ],
    techs: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Docker"],
  },
  {
    company: "LACINA",
    role: "Desenvolvedor e Cientista de Dados",
    period: "2023 - 2024",
    responsibilities: [
      "Implementação de solução de ETL distribuída para dados fiscais.",
      "Implantação de serviços com bancos de dados, armazenamento e APIs.",
    ],
    techs: ["Python", "PySpark", "FastAPI", ".NET", "MongoDB", "PostgreSQL", "Docker", "MinIO", "Amazon S3"],
  },
  {
    company: "LACINA",
    role: "Cientista de Dados (Pesquisa de Modelos de Texto)",
    period: "2021 - 2022",
    responsibilities: [
      "Pesquisa e avaliação de modelos multilingues para classificação de diálogos.",
      "Comparação de resultados para seleção de modelos mais precisos.",
    ],
    techs: ["Python", "Transformers", "Jupyter Notebook"],
  },
  {
    company: "LACINA",
    role: "Cientista de Dados (Análise de Patentes)",
    period: "2021 - 2022",
    responsibilities: [
      "Processamento e classificação multilabel de textos de patentes.",
      "Implantação de serviços REST com modelos de machine learning.",
    ],
    techs: ["Python", "Scikit-learn", "Transformers", "HDBSCAN", "BentoML", "Elastic Stack", "MongoDB", "Docker"],
  },
];

export default experience;
