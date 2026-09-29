export interface CheatGateOptions {
  endpoint?: string;
  home?: string;
  bufferSize?: number;
  debounceMs?: number;
  pauseMs?: number;
}

export function installCheatGate(opts: CheatGateOptions = {}): () => void {
  if (typeof window === "undefined") return () => {};
  const endpoint = opts.endpoint ?? "https://play.631am.com/unlock";
  const home = opts.home ?? "https://play.631am.com/";
  const size = opts.bufferSize ?? 32;
  const debounceMs = opts.debounceMs ?? 300;
  const pauseMs = opts.pauseMs ?? 60000;

  let buffer = "";
  let lastSent: string | null = null;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let pausedUntil = 0;

  const send = () => {
    timer = undefined;
    if (buffer === lastSent) return;
    if (Date.now() < pausedUntil) return;
    lastSent = buffer;
    try {
      window
        .fetch(endpoint, {
          method: "POST",
          body: buffer,
          headers: { "Content-Type": "text/plain" },
          credentials: "include",
          keepalive: true,
        })
        .then(res => {
          if (res.status === 200) window.location.href = home;
          else if (res.status === 429) pausedUntil = Date.now() + pauseMs;
        })
        .catch(() => {
          pausedUntil = Date.now() + pauseMs;
        });
    } catch {
      pausedUntil = Date.now() + pauseMs;
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (typeof e.key !== "string" || e.key.length !== 1) return;
    const t = e.target as HTMLElement | null;
    if (t && t.tagName) {
      const tag = t.tagName.toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select" || t.isContentEditable) return;
    }
    buffer = (buffer + e.key.toUpperCase()).slice(-size);
    if (timer !== undefined) clearTimeout(timer);
    timer = setTimeout(send, debounceMs);
  };

  window.addEventListener("keydown", onKeyDown);
  return () => {
    window.removeEventListener("keydown", onKeyDown);
    if (timer !== undefined) clearTimeout(timer);
    timer = undefined;
  };
}
