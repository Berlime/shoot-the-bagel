import { type teamMember } from "@config/types/configDataTypes";

import Razi from "@images/razi.jpg";
import Baha from "@images/baha.jpg";
import Kamil from "@images/kamil.jpg";

export const teamData: teamMember[] = [
	{
		image: Kamil,
		name: "Kamil Sharip",
		title: "Front-End Developer",
		bio: `I am a Chef de Partie turned into a front-end developer, based in Singapore. Created my first online-blog
		in Sec 4 or 10th grade if you're in the U.S.
      `,
	},
	{
		image: Razi,
		name: "Razi Affandi",
		title: "Back-End Developer",
		bio: `I am a software engineer, graduated from Singapore Polytechnic. I have a passion for VFX & Interactive Development.
    `,
	},
	{
		image: Baha,
		name: "Baha Karim",
		title: "Support & Sales",
		bio: `I have a sharp eye for detail and a knack for organizing and managing various tasks, I ensure smooth and efficient operations.
      `,
	},
	// 	{
	// 		image: Victra,
	// 		name: "Jasveena",
	// 		title: "Copywriter",
	// 		bio: ` I graduated from the Technological University of Malaysia in 2013.
	//       I've been working in the paint industry ever since. I’m a huge fan of the outdoors and I love to travel.
	//       `,
	// 	},
	// 	{
	// 		image: Victra,
	// 		name: "Yves Tan",
	// 		title: "Ads Specialist",
	// 		bio: `I'm from the south side of Chicago. I graduated from the University of Illinois in 2013.
	//       I've been working in the paint industry ever since. I’m a huge fan of the outdoors and I love to travel.
	//       `,
	// 	},
	// 	{
	// 		image: Victra,
	// 		name: "Eric Low",
	// 		title: "Administration",
	// 		bio: `I'm from the south side of Chicago. I graduated from the University of Illinois in 2013.
	//       I've been working in the paint industry ever since. I’m a huge fan of the outdoors and I love to travel.
	//       `,
	// 	},
];

export default teamData;
