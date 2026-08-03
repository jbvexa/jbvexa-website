import {
  BrainCircuit,
  Bot,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function AISection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full bg-[#19D3B4]/10 px-5 py-2 text-sm font-semibold text-[#19D3B4]">
            AI SOLUTIONS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#071B4D]">
            Transform Business
            <br />
            with Artificial Intelligence
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            We help organizations leverage Generative AI,
            Machine Learning and Intelligent Automation to
            improve efficiency, reduce costs and create
            exceptional customer experiences.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex gap-4">
              <BrainCircuit className="mt-1 text-[#19D3B4]" />
              <div>
                <h3 className="font-bold text-[#071B4D]">
                  Generative AI
                </h3>

                <p className="text-slate-600">
                  AI Assistants, Chatbots and Enterprise GPT
                  Solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Bot className="mt-1 text-[#19D3B4]" />
              <div>
                <h3 className="font-bold text-[#071B4D]">
                  Intelligent Automation
                </h3>

                <p className="text-slate-600">
                  Automate repetitive business processes using AI.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Sparkles className="mt-1 text-[#19D3B4]" />
              <div>
                <h3 className="font-bold text-[#071B4D]">
                  AI Strategy
                </h3>

                <p className="text-slate-600">
                  Build an enterprise AI roadmap aligned with your business goals.
                </p>
              </div>
            </div>

          </div>

          <button className="mt-12 inline-flex items-center gap-3 rounded-xl bg-[#19D3B4] px-7 py-4 font-semibold text-[#071B4D] transition hover:-translate-y-1">
            Explore AI Services
            <ArrowRight size={18} />
          </button>

        </div>

        {/* Right */}

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-12 shadow-xl">

          <h3 className="text-3xl font-bold text-[#071B4D]">
            AI Capabilities
          </h3>

          <div className="mt-8 flex flex-wrap gap-4">

            {[
              "OpenAI",
              "Azure AI",
              "LangChain",
              "RAG",
              "LLM",
              "Prompt Engineering",
              "Python",
              "Vector Database",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#19D3B4]/10 px-5 py-3 font-medium text-[#071B4D]"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}