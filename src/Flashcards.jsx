import { useCallback, useEffect, useMemo, useState } from "react";
import { learnUrlsForTerm } from "./learnUrls";

function shuffle(list) {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export default function Flashcards({ terms, onMarkReviewed, reviewedKeys }) {
  const [shuffleOn, setShuffleOn] = useState(false);
  const [order, setOrder] = useState(() => terms);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setOrder(shuffleOn ? shuffle(terms) : terms);
    setIndex(0);
    setFlipped(false);
  }, [shuffleOn, terms]);

  const card = order[index];
  const links = useMemo(() => (card ? learnUrlsForTerm(card.term, card.definition) : null), [card]);

  const go = useCallback(
    (delta) => {
      setIndex((i) => {
        const next = (i + delta + order.length) % order.length;
        return next;
      });
      setFlipped(false);
    },
    [order.length]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest("input, textarea, a, select")) return;
      if (e.code === "Space") {
        e.preventDefault();
        setFlipped((f) => !f);
      }
      if (e.code === "ArrowRight" || e.code === "ArrowDown") go(1);
      if (e.code === "ArrowLeft" || e.code === "ArrowUp") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!card) return null;

  const reviewed = reviewedKeys.has(`${card.roomId}:${card.term}`);

  return (
    <div className="mx-auto max-w-lg">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-400" aria-live="polite">
          Card {index + 1} of {order.length}
        </p>
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
          <input
            type="checkbox"
            checked={shuffleOn}
            onChange={(e) => setShuffleOn(e.target.checked)}
            className="rounded border-white/30 bg-slate-800 text-amber-400 focus:ring-amber-400"
          />
          Shuffle deck
        </label>
      </div>

      <div className="relative min-h-[300px]" style={{ perspective: "1000px" }}>
        <div
          role="button"
          tabIndex={0}
          onClick={() => setFlipped(!flipped)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setFlipped((f) => !f);
            }
          }}
          className="relative min-h-[300px] cursor-pointer rounded-2xl outline-none ring-offset-2 ring-offset-slate-950 focus-visible:ring-2 focus-visible:ring-amber-400"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
          }}
          aria-label={flipped ? "Card back. Press Space to flip." : "Card front. Press Space to flip."}
        >
          <div
            className={`absolute inset-0 flex flex-col rounded-2xl border bg-slate-800/95 p-6 shadow-xl ${card.roomBorder} bg-gradient-to-br ${card.roomColor}`}
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          >
            <p className="mb-2 text-xs uppercase tracking-wider text-slate-300">{card.roomName}</p>
            <p className="font-mono text-4xl font-bold tracking-tight text-white">{card.term}</p>
            <p className="mt-auto text-sm text-slate-300">Click or press Space to flip · See definition and learn more</p>
          </div>

          <div
            className="absolute inset-0 flex flex-col rounded-2xl border border-amber-400/35 bg-slate-900 p-6 shadow-xl"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <p className="text-base font-medium text-amber-100/95">{card.definition}</p>
            <p className="mt-3 text-sm text-rose-200/95">
              <span className="font-semibold text-slate-500">Weak </span>
              {card.weak}
            </p>
            <p className="mt-2 text-sm text-emerald-200/95">
              <span className="font-semibold text-slate-500">Strong </span>
              {card.strong}
            </p>
            {links && (
              <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-4">
                <a
                  href={links.wikipedia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-sky-500/40 bg-sky-500/15 px-3 py-1.5 text-xs font-semibold text-sky-100 hover:bg-sky-500/25"
                  onClick={(e) => e.stopPropagation()}
                >
                  {links.wikipediaLabel}
                </a>
                <a
                  href={links.readMore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  Web search
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-slate-500">Keyboard: ← → change card · Space flip</p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          className="rounded-lg border border-amber-400/50 bg-amber-400/15 px-4 py-2 text-sm font-semibold text-amber-100 hover:bg-amber-400/25"
        >
          {flipped ? "Show term" : "Flip card"}
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
        >
          Next
        </button>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={() => onMarkReviewed(card.roomId, card.term)}
          disabled={reviewed}
          className="rounded-lg border border-emerald-400/40 bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-100 hover:bg-emerald-500/30 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {reviewed ? "Saved to progress" : "Got it — save to progress"}
        </button>
      </div>
    </div>
  );
}
