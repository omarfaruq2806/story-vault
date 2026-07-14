
export const dynamic = 'force-dynamic';
import {LatestStory } from "@/components/homepage/LatestStory";
import {Categories} from "@/components/homepage/Categories";
import {Stats} from "@/components/homepage/Stats";
import {WriteCTA} from "@/components/homepage/WriteCTA";
import { Testimonials } from "@/components/homepage/Testimonials";
import { Newsletter } from "@/components/homepage/Newsletter";
import Hero from "@/components/homepage/Hero";

export default function Home() {
  return (
  <div>
    <Hero></Hero>
    <LatestStory></LatestStory>
    <Categories></Categories>
    <Stats></Stats>
    <WriteCTA></WriteCTA>
    <Testimonials></Testimonials>
    <Newsletter></Newsletter>
  </div>
  );
}
