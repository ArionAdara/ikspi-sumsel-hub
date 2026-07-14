import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Mode = "optimized" | "legacy" | "off";

interface Result {
  mode: Mode;
  avgFps: number;
  minFps: number;
  maxFps: number;
  frameCount: number;
  avgFrameMs: number;
  durationMs: number;
}

const TEST_DURATION_MS = 5000;
const TEXT_COUNT = 40;

/**
 * Halaman pengujian performa ringan untuk membandingkan FPS & waktu render
 * antara efek glow versi optimasi (drop-shadow + animasi filter GPU),
 * versi legacy (banyak layer text-shadow + animasi keyframes),
 * dan tanpa efek (baseline).
 *
 * Cara pakai:
 * 1. Buka /perf-test di perangkat low-end (throttle CPU 4-6x di DevTools).
 * 2. Jalankan setiap mode 5 detik, hasil FPS & frame time tampil di tabel.
 * 3. Bandingkan avgFps & avgFrameMs antara "legacy" vs "optimized".
 */
export default function PerfTest() {
  const [mode, setMode] = useState<Mode>("optimized");
  const [running, setRunning] = useState(false);
  const [results, setResults] = useState<Result[]>([]);
  const [liveFps, setLiveFps] = useState<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const runTest = () => {
    if (running) return;
    setRunning(true);
    setLiveFps(null);

    const frameTimes: number[] = [];
    let lastTs = performance.now();
    const startTs = lastTs;

    const tick = (ts: number) => {
      const delta = ts - lastTs;
      lastTs = ts;
      frameTimes.push(delta);

      if (frameTimes.length % 10 === 0) {
        const recent = frameTimes.slice(-30);
        const avg = recent.reduce((a, b) => a + b, 0) / recent.length;
        setLiveFps(1000 / avg);
      }

      if (ts - startTs < TEST_DURATION_MS) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        const durationMs = ts - startTs;
        const avgFrameMs =
          frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length;
        const fpsValues = frameTimes.map((f) => 1000 / f);
        const result: Result = {
          mode,
          avgFps: 1000 / avgFrameMs,
          minFps: Math.min(...fpsValues),
          maxFps: Math.max(...fpsValues),
          frameCount: frameTimes.length,
          avgFrameMs,
          durationMs,
        };
        setResults((r) => [...r, result]);
        setRunning(false);
        setLiveFps(null);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <style>{`
        .perf-legacy {
          color: hsl(45 95% 58%);
          text-shadow:
            0 1px 0 hsl(45 90% 48%),
            0 2px 0 hsl(45 85% 42%),
            0 3px 0 hsl(45 80% 36%),
            0 4px 0 hsl(45 75% 30%),
            0 5px 0 hsl(45 70% 24%),
            0 6px 8px rgba(0,0,0,0.55),
            0 0 8px hsla(0, 85%, 55%, 0.9),
            0 0 16px hsla(220, 90%, 60%, 0.8),
            0 0 28px hsla(0, 85%, 50%, 0.6),
            0 0 48px hsla(220, 90%, 55%, 0.5),
            0 0 72px hsla(0, 85%, 45%, 0.35);
          animation: perfLegacyPulse 4s ease-in-out infinite;
        }
        @keyframes perfLegacyPulse {
          0%, 100% { text-shadow:
            0 1px 0 hsl(45 90% 48%), 0 2px 0 hsl(45 85% 42%),
            0 3px 0 hsl(45 80% 36%), 0 4px 0 hsl(45 75% 30%),
            0 5px 0 hsl(45 70% 24%), 0 6px 8px rgba(0,0,0,0.55),
            0 0 8px hsla(0, 85%, 55%, 0.9),
            0 0 16px hsla(220, 90%, 60%, 0.8),
            0 0 28px hsla(0, 85%, 50%, 0.6),
            0 0 48px hsla(220, 90%, 55%, 0.5),
            0 0 72px hsla(0, 85%, 45%, 0.35);
          }
          50% { text-shadow:
            0 1px 0 hsl(45 90% 48%), 0 2px 0 hsl(45 85% 42%),
            0 3px 0 hsl(45 80% 36%), 0 4px 0 hsl(45 75% 30%),
            0 5px 0 hsl(45 70% 24%), 0 6px 8px rgba(0,0,0,0.55),
            0 0 4px hsla(0, 85%, 55%, 0.45),
            0 0 8px hsla(220, 90%, 60%, 0.4),
            0 0 14px hsla(0, 85%, 50%, 0.3),
            0 0 24px hsla(220, 90%, 55%, 0.25),
            0 0 36px hsla(0, 85%, 45%, 0.17);
          }
        }
        .perf-off { color: hsl(45 95% 58%); }
      `}</style>

      <div className="max-w-4xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold text-gold">
              Perf Test — Glow Optimization
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Bandingkan FPS &amp; frame time antara varian glow.
            </p>
          </div>
          <Link
            to="/"
            className="text-sm text-gold hover:underline"
          >
            ← Kembali
          </Link>
        </header>

        <section className="rounded-lg border border-border p-4 bg-card space-y-4">
          <div className="flex flex-wrap gap-2">
            {(["optimized", "legacy", "off"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                disabled={running}
                className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors ${
                  mode === m
                    ? "bg-gold text-background border-gold"
                    : "bg-transparent border-border hover:border-gold"
                }`}
              >
                {m}
              </button>
            ))}
            <button
              onClick={runTest}
              disabled={running}
              className="ml-auto px-4 py-2 rounded-md text-sm font-semibold bg-primary text-primary-foreground disabled:opacity-50"
            >
              {running ? "Menguji..." : `Jalankan Tes (${TEST_DURATION_MS / 1000}s)`}
            </button>
            <button
              onClick={() => setResults([])}
              disabled={running || results.length === 0}
              className="px-4 py-2 rounded-md text-sm border border-border disabled:opacity-50"
            >
              Reset
            </button>
          </div>
          {liveFps !== null && (
            <div className="text-sm text-muted-foreground">
              Live FPS: <span className="text-gold font-mono">{liveFps.toFixed(1)}</span>
            </div>
          )}
        </section>

        <section className="rounded-lg border border-border p-6 bg-card overflow-hidden">
          <p className="text-xs text-muted-foreground mb-4">
            Area render — {TEXT_COUNT} elemen teks dengan mode:{" "}
            <span className="text-gold font-mono">{mode}</span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: TEXT_COUNT }).map((_, i) => (
              <span
                key={i}
                className={
                  mode === "optimized"
                    ? "text-gold-3d-white-glow font-heading font-bold uppercase text-sm"
                    : mode === "legacy"
                    ? "perf-legacy font-heading font-bold uppercase text-sm"
                    : "perf-off font-heading font-bold uppercase text-sm"
                }
              >
                Kera Sakti
              </span>
            ))}
          </div>
        </section>

        {results.length > 0 && (
          <section className="rounded-lg border border-border bg-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/50">
                <tr className="text-left">
                  <th className="p-3">#</th>
                  <th className="p-3">Mode</th>
                  <th className="p-3">Avg FPS</th>
                  <th className="p-3">Min FPS</th>
                  <th className="p-3">Max FPS</th>
                  <th className="p-3">Avg Frame (ms)</th>
                  <th className="p-3">Frames</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="p-3 text-muted-foreground">{i + 1}</td>
                    <td className="p-3 font-mono">{r.mode}</td>
                    <td className="p-3 font-mono text-gold">{r.avgFps.toFixed(1)}</td>
                    <td className="p-3 font-mono">{r.minFps.toFixed(1)}</td>
                    <td className="p-3 font-mono">{r.maxFps.toFixed(1)}</td>
                    <td className="p-3 font-mono">{r.avgFrameMs.toFixed(2)}</td>
                    <td className="p-3 font-mono">{r.frameCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        <section className="text-xs text-muted-foreground space-y-1">
          <p><strong>Cara menguji perangkat low-end:</strong></p>
          <ol className="list-decimal ml-5 space-y-1">
            <li>Buka DevTools → Performance → CPU throttle 4x atau 6x.</li>
            <li>Jalankan mode <code>off</code> dulu (baseline), lalu <code>legacy</code>, lalu <code>optimized</code>.</li>
            <li>Bandingkan <code>avgFps</code> &amp; <code>avgFrameMs</code>. Target: optimized ≥ legacy, mendekati off.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
