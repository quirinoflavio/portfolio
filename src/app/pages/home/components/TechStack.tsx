// import Image from "next/image";

// const techGroups = [
//   {
//     name: ".NET",
//     icon: "/icons/dotnet.svg",
//     related: [
//       { name: "Docker", icon: "/icons/docker.svg" },
//       { name: "FastAPI", icon: "/icons/fastapi.svg" },
//       { name: "Firebase", icon: "/icons/firebase.svg" },
//       { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
//     ],
//   },
//   {
//     name: "Python",
//     icon: "/icons/python.svg",
//     related: [
//       { name: "Docker", icon: "/icons/docker.svg" },
//       { name: "FastAPI", icon: "/icons/fastapi.svg" },
//       { name: "Firebase", icon: "/icons/firebase.svg" },
//       { name: "FastAPI", icon: "/icons/fastapi.svg" },
//       { name: "SQLAlchemy", icon: "/icons/react.svg" },
//       { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
//       { name: "PySpark", icon: "/icons/pyspark.svg" },
//     ],
//   },
// ];

// export default function TechCluster() {
//   return (
//     <section className="py-20">
//       <h3 className="text-2xl font-semibold text-center mb-16">Tech Stack Clusters</h3>
//       <div className="flex flex-wrap justify-center gap-24">
//         {techGroups.map((group, i) => (
//           <div key={i} className="relative w-64 h-64">
//             {/* Center main tech */}
//             <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden shadow-lg flex flex-col items-center">
//               <Image src={group.icon} alt={group.name} fill className="object-contain p-4" />
//             </div>

//             {/* Orbiting techs */}
//             {group.related.map((tech, j) => {
//               const angle = (360 / group.related.length) * j;
//               const radius = 120;
//               const x = radius * Math.cos((angle * Math.PI) / 180);
//               const y = radius * Math.sin((angle * Math.PI) / 180);

//               return (
//                 <div
//                   key={j}
//                   className="absolute"
//                   style={{
//                     top: `calc(50% + ${y}px - 32px)`,
//                     left: `calc(50% + ${x}px - 32px)`,
//                   }}
//                 >
//                   {/* Icon circle */}
//                   <div className="w-16 h-16 rounded-full overflow-hidden shadow flex items-center justify-center">
//                     <Image src={tech.icon} alt={tech.name} width={48} height={48} />
//                   </div>
//                   {/* Label below, outside the circle */}
//                   <div className="text-xs text-center  w-full">{tech.name}</div>
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
