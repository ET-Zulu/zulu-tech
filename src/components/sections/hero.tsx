import HeroParallax from "../custom/hero-parallax";
import { products } from "@/lib/data";


export default function Hero() {
	return (
		<HeroParallax products={products} />
	);
}