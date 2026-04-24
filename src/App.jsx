import { useEffect, useMemo, useState } from "react";
import { onboardingOptions, rooms, scenarios } from "./data";

const STORAGE_KEY = "pmvocab_progress_v2";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { termsExplored: [], scenariosCompleted: [], onboardingRoom: "" };
    return JSON.parse(raw);
  } catch {
    return { termsExplored: [], scenariosCompleted: [], onboardingRoom: "" };
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function classifyRoom(text) {
  const content = text.toLowerCase();
  const roomSignals = {
    build: ["xfn", "prd", "mvp", "sprint", "spec", "delivery", "execution", "kpi"],
    strategy: ["okr", "pmf", "gtm", "nps", "bet", "priorit", "roadmap"],
    boardroom: ["arr", "mrr", "tam", "som", "roi", "cagr", "margin", "revenue"],
    growth: ["dau", "mau", "cvr", "ctr", "cac", "ltv", "retention", "funnel"]
  };
  const scores = Object.fromEntries(Object.keys(roomSignals).map((k) => [k, 0]));
  for (const [room, words] of Object.entries(roomSignals)) {
    words.forEach((word) => {
      if (content.includes(word)) scores[room] += 1;
    });
  }
  const [bestRoom, bestScore] = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  return bestScore > 0 ? bestRoom : "build";
}

function rewriteForRoom(input, room) {
  const base = input.trim() || "We saw positive movement after launch.";
  const templates = {
    build: `Build Room: We aligned an XFN squad, scoped an MVP in the PRD, and tracked KPI movement weekly. "${base}" became a concrete execution plan.`,
    strategy: `Strategy Room: We framed this as a portfolio bet tied to OKRs, validated PMF signals, and defined a GTM path. "${base}" now maps to strategic outcomes.`,
    boardroom: `Boardroom: We translated this into ARR impact, TAM/SOM sizing, and expected ROI by quarter. "${base}" now speaks in business terms.`,
    growth: `Growth Room: We mapped the funnel and improved DAU/MAU, CVR, and LTV:CAC efficiency. "${base}" now speaks to compounding growth.`
  };
  return templates[room];
}

function roomBadge(roomId) {
  return rooms.find((r) => r.id === roomId)?.name ?? "Build Room";
}

export default function App() {
  const [activeRoom, setActiveRoom] = useState(rooms[0]);
  const [progress, setProgress] = useState(loadProgress);
  const [input, setInput] = useState("");
  const [scenarioAnswer, setScenarioAnswer] = useState("");
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [resultRoom, setResultRoom] = useState("");

  const scenario = scenarios[scenarioIndex];
  const totalTerms = rooms.reduce((sum, room) => sum + room.terms.length, 0);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const translatorOutput = useMemo(
    () => ({
      build: rewriteForRoom(input, "build"),
      strategy: rewriteForRoom(input, "strategy"),
      boardroom: rewriteForRoom(input, "boardroom"),
      growth: rewriteForRoom(input, "growth")
    }),
    [input]
  );

  const completionRate = Math.round(
    ((progress.termsExplored.length + progress.scenariosCompleted.length) /
      (totalTerms + scenarios.length)) *
      100
  );

  const evaluateScenario = () => {
    const room = classifyRoom(scenarioAnswer);
    setResultRoom(room);
    const scenarioId = scenario.id;
    setProgress((prev) => ({
      ...prev,
      scenariosCompleted: [...new Set([...prev.scenariosCompleted, scenarioId])]
    }));
  };

  const markTermExplored = (term) => {
    setProgress((prev) => ({
      ...prev,
      termsExplored: [...new Set([...prev.termsExplored, `${activeRoom.id}:${term.term}`])]
    }));
  };

  const setOnboardingRoom = (roomId) => {
    setProgress((prev) => ({ ...prev, onboardingRoom: roomId }));
  };

  const copyShare = async () => {
    const room = progress.onboardingRoom ? roomBadge(progress.onboardingRoom) : "Strategy Room";
    const text = `I am training with PM Vocabulary: The 4 Rooms. Current style: ${room}. Completion: ${completionRate}%.`;
    await navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-8">
        <header className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-amber-300">Career Weapon</p>
          <h1 className="text-3xl font-bold md:text-5xl">PM Vocabulary: The 4 Rooms</h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            You are already being judged on this. Learn to translate solid product thinking into the
            language each room expects.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">Terms explored</p>
              <p className="text-3xl font-semibold">{progress.termsExplored.length}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">Scenarios completed</p>
              <p className="text-3xl font-semibold">{progress.scenariosCompleted.length}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">Overall completion</p>
              <p className="text-3xl font-semibold">{completionRate}%</p>
            </div>
          </div>
        </header>

        <section className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Quick onboarding</h2>
          <p className="mt-2 text-slate-300">Which room do you usually operate in?</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {onboardingOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setOnboardingRoom(option.id)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  progress.onboardingRoom === option.id
                    ? "border-emerald-300 bg-emerald-400/20 text-emerald-200"
                    : "border-white/20 bg-white/5 hover:bg-white/10"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-xl font-semibold">Room Navigator</h2>
            <div className="grid gap-3">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  onClick={() => {
                    setActiveRoom(room);
                  }}
                  className={`rounded-xl border bg-gradient-to-br p-4 text-left transition hover:scale-[1.01] ${room.color} ${room.border}`}
                >
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-300">{room.tone}</p>
                  <h3 className="mt-1 text-lg font-semibold">{room.name}</h3>
                  <p className="mt-1 text-sm text-slate-200/90">{room.terms.length} key terms</p>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 lg:col-span-3">
            <h3 className="text-2xl font-semibold">{activeRoom.name}</h3>
            <p className="mt-1 text-slate-300">Weak vs strong language examples.</p>
            <div className="mt-5 space-y-4">
              {activeRoom.terms.map((term) => (
                <article
                  key={term.term}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                  onMouseEnter={() => markTermExplored(term)}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-lg font-semibold">{term.term}</p>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs">{term.definition}</span>
                  </div>
                  <p className="text-sm text-rose-200">Weak: {term.weak}</p>
                  <p className="mt-1 text-sm text-emerald-200">Strong: {term.strong}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Vocabulary Translator</h2>
          <p className="mt-1 text-slate-300">
            Type your casual answer. Watch it get upgraded for each room.
          </p>
          <textarea
            className="mt-4 h-24 w-full rounded-xl border border-white/20 bg-slate-800 p-3 text-sm outline-none transition focus:border-amber-300"
            placeholder="Example: We got more users after launch."
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {Object.entries(translatorOutput).map(([room, text]) => (
              <article key={room} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-amber-300">
                  {roomBadge(room)}
                </p>
                <p className="text-sm text-slate-200">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Scenario Practice Mode</h2>
          <p className="mt-2 text-slate-200">{scenario.prompt}</p>
          <textarea
            value={scenarioAnswer}
            onChange={(event) => setScenarioAnswer(event.target.value)}
            className="mt-4 h-24 w-full rounded-xl border border-white/20 bg-slate-800 p-3 text-sm outline-none transition focus:border-violet-300"
            placeholder="Type your answer..."
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={evaluateScenario}
              className="rounded-lg border border-violet-300/60 bg-violet-500/30 px-4 py-2 text-sm font-semibold hover:bg-violet-500/45"
            >
              Evaluate my answer
            </button>
            <button
              onClick={() => {
                const next = (scenarioIndex + 1) % scenarios.length;
                setScenarioIndex(next);
                setScenarioAnswer("");
                setResultRoom("");
              }}
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
            >
              Next scenario
            </button>
          </div>
          {resultRoom && (
            <div className="mt-4 rounded-xl border border-emerald-300/40 bg-emerald-400/10 p-4 text-sm">
              <p>
                Your answer sounds most like <strong>{roomBadge(resultRoom)}</strong>.
              </p>
              <p className="mt-1 text-emerald-100">
                Suggested upgrade: include {scenario.hints.join(", ")} to signal {roomBadge(scenario.idealRoom)} language.
              </p>
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
          <h2 className="text-xl font-semibold">Shareable result</h2>
          <p className="mt-1 text-slate-300">
            You currently speak most like:{" "}
            <strong>{roomBadge(progress.onboardingRoom || "strategy")}</strong>
          </p>
          <button
            onClick={copyShare}
            className="mt-4 rounded-lg border border-amber-300/50 bg-amber-400/20 px-4 py-2 text-sm font-semibold hover:bg-amber-400/30"
          >
            Copy share text
          </button>
        </section>
      </div>
    </div>
  );
}
