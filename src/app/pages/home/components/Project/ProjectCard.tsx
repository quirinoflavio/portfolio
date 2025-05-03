interface ProjectCardProps {
  title: string;
  description?: string;
  url?: string;
  language?: string;
  languageColor?: string;
  stars?: number;
  forks?: number;
}

export default function ProjectCard({
  title,
  description,
  url,
  language,
  languageColor = "#ccc",
  stars,
  forks,
}: ProjectCardProps) {
  description = description || title;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-neutral-900 bg-block p-5 border border-neutral-800 rounded-xl shadow-sm hover:shadow-md transition hover:border-neutral-600"
    >
      <h4 className="text-lg font-semibold text-gray-200 mb-1 truncate">{title}</h4>
      <p className="text-sm text-gray-400 mb-4 line-clamp-3">{description}</p>

      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-2">
          {language && (
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: languageColor }} />
              {language}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          {typeof stars === "number" && <span title="Stars">⭐ {stars}</span>}
          {typeof forks === "number" && <span title="Forks">🍴 {forks}</span>}
        </div>
      </div>
    </a>
  );
}
