export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#061e29] text-[#bae6fd] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-8 text-center tracking-tight">
          About <span className="text-[#22d3ee]">StoryVault</span>
        </h1>
        
        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            Welcome to <strong className="text-white">StoryVault</strong>, the digital sanctuary for storytellers and literature enthusiasts alike. In an era where voices often get lost in the noise of the internet, we provide a dedicated space where creativity, imagination, and storytelling take center stage.
          </p>

          <p>
            Our mission is simple yet ambitious: to bridge the gap between brilliant writers and passionate readers. We believe that every story, whether it is a sprawling epic, a short mystery, or a poignant biography, deserves an audience. StoryVault serves as a curated library where quality content is prioritized, and authors are given the tools they need to share their unique perspectives with a global community.
          </p>

          <p>
            What sets StoryVault apart is our focus on building a sustainable ecosystem for creators. From high-priority features for emerging authors to a seamless, distraction-free reading experience for our audience, every aspect of our platform is designed with the user in mind. Whether you are here to publish your first chapter, explore hidden gems in science fiction, or simply lose yourself in a world of non-fiction, you are contributing to a thriving literary movement.
          </p>

          <p>
            We are more than just a website; we are a community-driven project continuously evolving to meet the needs of modern creators. Thank you for being a part of the StoryVault journey—where every word matters, and every story has a home.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#083344] rounded-2xl border border-[#06b6d4]/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
          <p className="text-[#bae6fd]/80">
            To become the premier platform for digital storytelling, fostering a world where creativity is rewarded and literary culture flourishes through connection and community.
          </p>
        </div>
      </div>
    </div>
  );
}