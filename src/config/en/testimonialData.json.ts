import { type TestimonialItem } from "../types/configDataTypes";

import BowTiedFocus from "@images/BowTiedFocus.jpg";
import TravisB from "@images/travis-b.png";
import Isaac from "@images/isaac_saas.jpg";
import Aniket from "@images/aniket_p.jpg";
import David from "@images/david-g-davedev.png";
import Damiano from "@images/damiano.jpg";

export const testimonialData: TestimonialItem[] = [
	{
		avatar: Aniket,
		name: "Sadiq Syed",
		title: "Teh Master",
		testimonial: `They delivered a user-friendly, visually appealing website that perfectly represents my brand. Communication was seamless throughout the project, and they were always open to feedback and ready to provide solutions. Highly recommend them for anyone looking to build or improve their online presence!
      `,
	},
	{
		avatar: BowTiedFocus,
		name: "Fatin Roszizi",
		title: "Admin Executive",
		testimonial: `Got Berlime to create a documentation for my employer’s SOP portal, works like a charm and super speed, Kevin showed me how static sites is useful for my case and not using the monolithic site builders. 
      `,
	},
	{
		avatar: Damiano,
		name: "Hafiz Zainul",
		title: "Global Represenative",
		testimonial: `The team was attentive to my needs, provided creative solutions. Their communication throughout the process was seamless, and they exceeded my expectations in every way. Highly recommend Berlime Solutions for anyone seeking quality website design and development services!
      `,
	},
	{
		avatar: David,
		name: "Kahwin SG",
		title: "Editor",
		testimonial: `Berlime Solutions delivered an outstanding blogging site for our community, exceeding expectations with their professionalism, creativity, and technical expertise. No regrets.
      `,
	},
	{
		avatar: TravisB,
		name: "Nurul",
		title: "Coordinator",
		testimonial: `Engaged with Kevin, very straight forward and he explain technical jargon very good. Also it is well documented for the terms that is fit into the company's context.
      `,
	},
	{
		avatar: Isaac,
		name: "Isaac",
		title: "SaaS Developer",
		testimonial: `My step-dad is starting a construction business and we're looking through Astro themes right now for his website
      and stumbled upon Cosmic Themes "Galaxy" theme. Absolutely filthy. Excellent work, man.
      `,
	},
];

export default testimonialData;
