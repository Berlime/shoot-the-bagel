import { type teamMember } from "@config/types/configDataTypes";
import Arina from "@images/teams/arina.jpeg";
import Baha from "@images/teams/baha.webp";
import Kamil from "@images/teams/kamil.webp";
import Razi from "@images/teams/razi.webp";
import Zuhair from "@images/teams/razi.webp";

export const teamData: teamMember[] = [
	{
		image: Arina,
		name: "Arina Grigoryan",
		title: "E-Commerce Solutions Architect",
		bio: `I specialize in UI/UX optimization, Canva-based branding, digital content creation, and high-impact corporate presentation strategies to deliver scalable online solutions.`,
	},
	{
		image: Baha,
		name: "Baha Karim",
		title: "Support & Sales",
		bio: `I have a sharp eye for detail and a knack for organizing and managing various tasks, I ensure smooth and efficient operations.
      `,
	},
	{
		image: Kamil,
		name: "Kamil Sharip",
		title: "Front-End Developer",
		bio: `I am a Chef-de-Partie turned into a front-end developer, I practice scalable, clean code & sustainable frameworks. Maximizing speed, accessibility, and performance.`,
	},
	{
		image: Razi,
		name: "Razi Affandi",
		title: "Full-Stack Developer",
		bio: `I am a software engineer, graduated from Singapore Polytechnic. I have a passion for VFX & Interactive Development.`,
	},
	// {
	// 	image: Zuhair,
	// 	name: "Zuhair Razib",
	// 	title: "System Administrator",
	// 	bio: `I am a system administrator, graduated from University of Technology Malaysia. I have a passion for System Administration.
    // `,
	// },
];

export default teamData;