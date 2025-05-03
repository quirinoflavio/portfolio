import { SiGithub, SiLinkedin, SiMedium, SiMinutemailer, SiAboutdotme } from "react-icons/si";

export const contacts = [
  {
    href: "flavioquirinno@gmail.com",
    label: "flavioquirinno@gmail.com",
    icon: <SiMinutemailer className="w-5 h-5" />,
  },
  {
    href: "https://github.com/quirinoflavio",
    label: "GitHub",
    icon: <SiGithub className="w-5 h-5" />,
  },
  {
    href: "https://linkedin.com/in/flavio-farias",
    label: "LinkedIn",
    icon: <SiLinkedin className="w-5 h-5" />,
  },
  {
    href: "https://medium.com/@quirinoflavio",
    label: "Medium",
    icon: <SiMedium className="w-5 h-5" />,
  },
  {
    href: "https://portfolio.flavioquirino.com.br",
    label: "Website",
    icon: <SiAboutdotme className="w-5 h-5" />,
  },
];
