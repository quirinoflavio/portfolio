interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  techs: string[];
}

export default function ExperienceCard({ company, role, period, responsibilities, techs }: ExperienceCardProps) {
  return (
    <div className="pt-7 flex flex-col rounded-xl shadow-sm hover:shadow-md transition hover:border-neutral-600 h-full">
      <div>
        <h4 className="text-lg font-semibold text-gray-200">{role}</h4>
        <p className="text-sm text-gray-400">
          {company} • {period}
        </p>
        <ul className="mt-4 list-disc list-inside text-sm text-gray-400 space-y-1">
          {responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Spacer to push techs to the bottom */}
      <div className="mt-auto pt-4 flex flex-wrap gap-2">
        {techs.map((tech, idx) => (
          <span
            key={idx}
            className="text-xs bg-neutral-800 border border-neutral-700 rounded-full px-2 py-1 text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

// interface ExperienceCardProps {
//   role: string;
//   period: string;
//   responsibilities: string[];
//   techs: string[];
// }

// export default function ExperienceCard({ role, period, responsibilities, techs }: ExperienceCardProps) {
//   return (
//     <div className="  p-6 shadow-sm hover:shadow-md transition">
//       <div className="flex justify-between items-start">
//         <h4 className="text-lg font-semibold text-gray-200">{role}</h4>
//         <span className="text-sm text-gray-400">{period}</span>
//       </div>
//       <ul className="text-sm text-gray-400 list-disc list-inside my-4 space-y-1">
//         {responsibilities.map((item, idx) => (
//           <li key={idx}>{item}</li>
//         ))}
//       </ul>
//       <div className="text-sm text-gray-300">
//         <span className="font-medium text-gray-400">Tecnologias:</span> {techs.join(", ")}
//       </div>
//     </div>
//   );
// }
