import { type FaqItem } from "../types/configDataTypes";

// replace this data with whatever you want in your FAQ section
export const ms365FaqData: FaqItem[] = [
	{
		question: "Do you have discounts on Microsoft 365 for businesses?",
		answer: `Yes, we have discounts on Microsoft 365 for businesses from as low as 3 licenses onwards. The only way to get discounts is through an official <a href="https://marketplace.microsoft.com/en-us/marketplace/partner-dir/1786e9b6-341a-459c-a3bd-196e5bf3a592" class="underline hover:no-underline" onclick="window.open(this.href,'_blank','noopener,noreferrer');return false;">Microsoft 365 partner</a> which we are.`,
	},
	{
		question: "Why should I use Microsoft 365 and not other software?",
		answer: `While we also provide other software solutions. Microsoft 365 has tranformed how we operate our business.<br><br>
		Microsoft helps use reduce our other software subscriptions. We were suprised to see that Microsoft 365 for businesses is very different from a normal Microsoft products you have used.<br><br>
		So we simply want to share our experience with you.`,
	},
	{
		question: "How long does setup take?",
		answer: `Typically a few days to a couple of weeks, depending on your organization size. We handle the entire migration process with zero downtime, so your team can continue working.`,
	},
	{
		question: "What happens to our existing files and data?",
		answer: `We migrate everything during setup, organizing files properly in SharePoint so you don't have to hunt through random folders anymore. All your data moves over seamlessly.`,
	},
	{
		question: "What features are included?",
		answer: `Business Microsoft 365 includes SharePoint for document management, Power Automate for workflow automation, Power BI for analytics, advanced security, and dedicated support - all designed for team collaboration.`,
	},
];

export default ms365FaqData;

