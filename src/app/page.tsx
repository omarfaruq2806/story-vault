import {Hero} from "@/components/homepage/Hero";
import {TrendingStory } from "@/components/homepage/TrendingStory";
import {Categories} from "@/components/homepage/Categories";
import {Stats} from "@/components/homepage/Stats";
import {WriteCTA} from "@/components/homepage/WriteCTA";
import { Testimonials } from "@/components/homepage/Testimonials";
import { Newsletter } from "@/components/homepage/Newsletter";

export default function Home() {
  return (
  <div>
    <Hero></Hero>
    <TrendingStory></TrendingStory>
    <Categories></Categories>
    <Stats></Stats>
    <WriteCTA></WriteCTA>
    <Testimonials></Testimonials>
    <Newsletter></Newsletter>
  </div>
  );
}
