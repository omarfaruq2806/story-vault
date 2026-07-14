export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#061e29] text-[#bae6fd] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Terms & Conditions</h1>
        
        <div className="space-y-6 leading-relaxed bg-[#083344] p-8 rounded-2xl border border-[#06b6d4]/20">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">1. Content Guidelines</h2>
            <p>By using StoryVault, you agree to upload content that is original and follows our community standards. Users are strictly prohibited from uploading plagiarized material.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">2. Copyright & Ownership</h2>
            <p>You retain the copyright to your work. However, by posting on StoryVault, you grant us a non-exclusive license to display and distribute your content within our platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">3. Prohibited Conduct</h2>
            <p>Any content that promotes hate speech, violence, or illegal activities is strictly forbidden. Failure to comply will result in account suspension.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">4. Disclaimer</h2>
            <p>StoryVault is provided on an "as-is" basis. We are not responsible for any direct or indirect loss resulting from the use of our services.</p>
          </section>
        </div>
      </div>
    </div>
  );
}