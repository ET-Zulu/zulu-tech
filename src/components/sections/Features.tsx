import { cn } from "@/lib/utils";
import { Sparkles, Code, Palette, Clock, Command, Feather } from "lucide-react";

const features = [
	{
		title: "Client-Centric Approach",
		description:
			"We prioritize our clients' needs and deliver tailored solutions.",
		icon: <Code />,
	},
	{
		title: "Quality Assurance",
		description: "We maintain high standards of quality in every project.",
		icon: <Code />,
	},
	{
		title: "Innovative Solutions",
		description:
			"We leverage the latest technologies to solve complex problems.",
		icon: <Code />,
	},
	{
		title: "Continuous Improvement",
		description: "We constantly seek to improve our processes and skills.",
		icon: <Code />,
	},
	{
		title: "Security Focused",
		description: "We prioritize security in all our software solutions.",
		icon: <Code />,
	},
	{
		title: "Collaborative Teamwork",
		description: "We work closely with clients to achieve their goals.",
		icon: <Code />,
	},
];

export default function Features() {
	return (
		<div>
			<h1 className="text-3xl md:text-4xl text-center font-bold dark:text-white">
				Our Core Values and Principles
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
				{features.map((feature, index) => (
					<Feature key={feature.title} {...feature} index={index} />
				))}
			</div>
		</div>
	);
}

function Feature({
	title,
	description,
	icon,
	index,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	index: number;
}) {
	return (
		<div
			className={cn(
				"flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
				(index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
				index < 4 && "lg:border-b dark:border-neutral-800"
			)}
		>
			{index < 4 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
			)}
			{index >= 4 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
			)}
			<div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
				{icon}
			</div>
			<div className="text-lg font-bold mb-2 relative z-10 px-10">
				<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
				<span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
					{title}
				</span>
			</div>
			<p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
				{description}
			</p>
		</div>
	);
}
