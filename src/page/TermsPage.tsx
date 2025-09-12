// app/terms/page.tsx
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white  px-6 md:px-16 lg:px-32 py-30">
      <article className="max-w-4xl mx-auto text-gray-800 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Data Usage</h1>

        <p className="mb-4 font-semibold">Premium Coat Chatbot</p>

        <p className="mb-6">
          By using this chatbot, you agree to the data usage terms described
          below. We understand that your privacy is important, and we are
          committed to protecting your personal information.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            1. What data is collected?
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Text messages:</strong> The content of your questions and
              responses.
            </li>
            <li>
              <strong>Contact information:</strong> If you voluntarily provide
              it (e.g., name, phone number, email address) to request a quote or
              receive more information.
            </li>
            <li>
              <strong>Conversation metadata:</strong> Including the time and
              duration of the interaction.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. How is your data used?
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>To improve our service:</strong> To answer your questions
              and provide you with the most relevant and accurate information.
            </li>
            <li>
              <strong>Analysis and improvement:</strong> To analyze conversation
              patterns and enhance the chatbot&apos;s performance and
              functionality.
            </li>
            <li>
              <strong>Direct contact:</strong> If you explicitly request it,
              your contact information will be used for a Premium Coat
              representative to get in touch with you.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. How is your data protected?
          </h2>
          <p>
            Your conversations are stored on secure servers and handled with
            strict confidentiality. We are committed to not selling, renting, or
            sharing your personal information with unauthorized third parties.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Your rights</h2>
          <p>
            You have the right to request a copy of your data, correct
            inaccurate information, or ask for your data to be deleted from our
            records. To exercise these rights, you can contact us through our
            usual communication channels.
          </p>
        </section>

        <section className="mt-8 border-t border-gray-200 pt-6">
          <p className="mb-4">
            I declare that I have read and agree to the terms of data usage for
            the Premium Coat chatbot.
          </p>
          <p>
            By clicking <strong>&quot;Accept and Save&quot;</strong> or by
            continuing the conversation with the chatbot, you give your express
            consent for the use of your data in accordance with this policy.
          </p>
        </section>
      </article>
    </main>
  );
}
