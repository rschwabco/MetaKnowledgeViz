// Meta-Knowledge Visualization — Excalidraw scene data
// This builds the full diagram programmatically.

let nextId = 1;
const id = () => String(nextId++);

// ─── helpers ───────────────────────────────────────────────────────────────

function rect(x, y, w, h, opts = {}) {
  return {
    id: id(),
    type: "rectangle",
    x,
    y,
    width: w,
    height: h,
    strokeColor: opts.strokeColor || "#1e1e1e",
    backgroundColor: opts.bg || "transparent",
    fillStyle: opts.fillStyle || "solid",
    strokeWidth: opts.strokeWidth || 2,
    roundness: { type: 3 },
    opacity: opts.opacity || 100,
    groupIds: opts.groupIds || [],
    boundElements: [],
    locked: false,
    ...opts.extra,
  };
}

function ellipse(x, y, w, h, opts = {}) {
  return {
    id: id(),
    type: "ellipse",
    x,
    y,
    width: w,
    height: h,
    strokeColor: opts.strokeColor || "#1e1e1e",
    backgroundColor: opts.bg || "transparent",
    fillStyle: opts.fillStyle || "solid",
    strokeWidth: opts.strokeWidth || 2,
    roundness: { type: 2 },
    opacity: opts.opacity || 100,
    groupIds: opts.groupIds || [],
    boundElements: [],
    locked: false,
    ...opts.extra,
  };
}

function text(x, y, content, opts = {}) {
  return {
    id: id(),
    type: "text",
    x,
    y,
    width: opts.width || content.length * 9,
    height: opts.height || 25,
    text: content,
    fontSize: opts.fontSize || 20,
    fontFamily: opts.fontFamily || 5,
    textAlign: opts.textAlign || "left",
    verticalAlign: opts.verticalAlign || "top",
    strokeColor: opts.color || "#1e1e1e",
    backgroundColor: "transparent",
    fillStyle: "solid",
    opacity: 100,
    groupIds: opts.groupIds || [],
    boundElements: [],
    locked: false,
    ...opts.extra,
  };
}

function arrow(x, y, points, opts = {}) {
  return {
    id: id(),
    type: "arrow",
    x,
    y,
    width: Math.abs(points[points.length - 1][0] - points[0][0]),
    height: Math.abs(points[points.length - 1][1] - points[0][1]),
    points,
    strokeColor: opts.strokeColor || "#1e1e1e",
    backgroundColor: "transparent",
    fillStyle: "solid",
    strokeWidth: opts.strokeWidth || 2,
    roundness: { type: 2 },
    opacity: 100,
    groupIds: opts.groupIds || [],
    boundElements: [],
    startArrowhead: opts.startArrowhead || null,
    endArrowhead: opts.endArrowhead || "arrow",
    locked: false,
    ...opts.extra,
  };
}

function diamond(x, y, w, h, opts = {}) {
  return {
    id: id(),
    type: "diamond",
    x,
    y,
    width: w,
    height: h,
    strokeColor: opts.strokeColor || "#1e1e1e",
    backgroundColor: opts.bg || "transparent",
    fillStyle: opts.fillStyle || "solid",
    strokeWidth: opts.strokeWidth || 2,
    roundness: { type: 2 },
    opacity: opts.opacity || 100,
    groupIds: opts.groupIds || [],
    boundElements: [],
    locked: false,
    ...opts.extra,
  };
}

// ─── Scene builder ─────────────────────────────────────────────────────────

export function buildScene() {
  const elements = [];

  // =====================================================================
  //  TITLE
  // =====================================================================
  elements.push(
    text(60, 30, "Meta-Knowledge: Why Retrieval Isn't Enough", {
      fontSize: 36,
      color: "#1971c2",
      width: 800,
      height: 45,
    })
  );
  elements.push(
    text(60, 80, "Knowledge systems must understand WHEN and WHERE knowledge applies — not just what's semantically similar.", {
      fontSize: 16,
      color: "#868e96",
      width: 900,
      height: 22,
    })
  );

  // =====================================================================
  //  SECTION 1 — The Problem (left side)
  // =====================================================================
  const s1x = 60, s1y = 140;

  elements.push(
    text(s1x, s1y, "The Problem", {
      fontSize: 28,
      color: "#e03131",
      width: 250,
      height: 35,
    })
  );

  // Query box
  elements.push(rect(s1x, s1y + 50, 420, 60, { bg: "#e7f5ff", strokeColor: "#1971c2" }));
  elements.push(
    text(s1x + 15, s1y + 62, '🔍 Query: "What is our return policy?"', {
      fontSize: 16,
      color: "#1971c2",
      width: 400,
      height: 22,
    })
  );
  elements.push(
    text(s1x + 15, s1y + 82, "Context: Enterprise customer, B2B contract", {
      fontSize: 14,
      color: "#4dabf7",
      width: 380,
      height: 20,
    })
  );

  // Arrow down
  elements.push(arrow(s1x + 210, s1y + 110, [[0, 0], [0, 40]], { strokeColor: "#868e96" }));

  // Naive RAG retrieval
  elements.push(
    text(s1x + 100, s1y + 155, "Naive RAG Retrieval", {
      fontSize: 18,
      color: "#868e96",
      width: 220,
      height: 24,
    })
  );

  // Result cards
  const cardsY = s1y + 190;

  // Card 1 — wrong result
  elements.push(rect(s1x, cardsY, 200, 100, { bg: "#fff5f5", strokeColor: "#e03131" }));
  elements.push(text(s1x + 10, cardsY + 8, "Consumer Return Policy", { fontSize: 14, color: "#e03131", width: 180, height: 18 }));
  elements.push(text(s1x + 10, cardsY + 30, "30-day return window", { fontSize: 12, color: "#495057", width: 180, height: 16 }));
  elements.push(text(s1x + 10, cardsY + 48, "Similarity: 0.95 ✓", { fontSize: 12, color: "#2f9e44", width: 150, height: 16 }));
  elements.push(text(s1x + 10, cardsY + 66, "Applicable: ✗ WRONG", { fontSize: 13, color: "#e03131", width: 180, height: 18 }));

  // Card 2 — wrong result
  elements.push(rect(s1x + 220, cardsY, 200, 100, { bg: "#fff5f5", strokeColor: "#e03131" }));
  elements.push(text(s1x + 230, cardsY + 8, "General FAQ — Returns", { fontSize: 14, color: "#e03131", width: 180, height: 18 }));
  elements.push(text(s1x + 230, cardsY + 30, "\"Simply ship it back...\"", { fontSize: 12, color: "#495057", width: 180, height: 16 }));
  elements.push(text(s1x + 230, cardsY + 48, "Similarity: 0.91 ✓", { fontSize: 12, color: "#2f9e44", width: 150, height: 16 }));
  elements.push(text(s1x + 230, cardsY + 66, "Applicable: ✗ WRONG", { fontSize: 13, color: "#e03131", width: 180, height: 18 }));

  // Card 3 — correct
  elements.push(rect(s1x + 60, cardsY + 120, 300, 100, { bg: "#ebfbee", strokeColor: "#2f9e44" }));
  elements.push(text(s1x + 75, cardsY + 128, "Enterprise SLA — Returns", { fontSize: 14, color: "#2f9e44", width: 260, height: 18 }));
  elements.push(text(s1x + 75, cardsY + 150, "90-day return, dedicated account mgr", { fontSize: 12, color: "#495057", width: 260, height: 16 }));
  elements.push(text(s1x + 75, cardsY + 168, "Similarity: 0.82", { fontSize: 12, color: "#868e96", width: 150, height: 16 }));
  elements.push(text(s1x + 75, cardsY + 186, "Applicable: ✓ CORRECT", { fontSize: 13, color: "#2f9e44", width: 200, height: 18 }));

  // Verdict callout
  elements.push(rect(s1x, cardsY + 240, 420, 60, { bg: "#fff3bf", strokeColor: "#f08c00" }));
  elements.push(
    text(s1x + 12, cardsY + 248, "⚠ Naive RAG ranks the WRONG docs higher.", {
      fontSize: 14,
      color: "#e8590c",
      width: 400,
      height: 18,
    })
  );
  elements.push(
    text(s1x + 12, cardsY + 270, "They are true & relevant — but not applicable to this user.", {
      fontSize: 13,
      color: "#e8590c",
      width: 400,
      height: 18,
    })
  );

  // =====================================================================
  //  SECTION 2 — Compatibility Envelope (center)
  // =====================================================================
  const s2x = 560, s2y = 140;

  elements.push(
    text(s2x + 80, s2y, "The Compatibility Envelope", {
      fontSize: 28,
      color: "#1971c2",
      width: 400,
      height: 35,
    })
  );

  // Outer ring — red (disallowed truths)
  elements.push(
    ellipse(s2x, s2y + 55, 480, 480, {
      bg: "#ffe3e3",
      strokeColor: "#e03131",
      fillStyle: "solid",
      opacity: 40,
    })
  );
  elements.push(
    text(s2x + 10, s2y + 70, "Disallowed Truths", {
      fontSize: 14,
      color: "#e03131",
      width: 160,
      height: 18,
    })
  );

  // Middle ring — yellow (partially applicable)
  elements.push(
    ellipse(s2x + 80, s2y + 135, 320, 320, {
      bg: "#fff3bf",
      strokeColor: "#f08c00",
      fillStyle: "solid",
      opacity: 50,
    })
  );
  elements.push(
    text(s2x + 95, s2y + 150, "Partially Applicable", {
      fontSize: 14,
      color: "#e8590c",
      width: 170,
      height: 18,
    })
  );

  // Inner ring — green (fully applicable)
  elements.push(
    ellipse(s2x + 155, s2y + 210, 170, 170, {
      bg: "#d3f9d8",
      strokeColor: "#2f9e44",
      fillStyle: "solid",
      opacity: 60,
    })
  );
  elements.push(
    text(s2x + 177, s2y + 270, "Fully Applicable", {
      fontSize: 14,
      color: "#2f9e44",
      width: 140,
      height: 18,
    })
  );

  // Documents floating in zones
  // Inner — green
  const docStyle = (bg, stroke) => ({ bg, strokeColor: stroke, fillStyle: "solid" });

  elements.push(rect(s2x + 180, s2y + 240, 130, 35, docStyle("#b2f2bb", "#2f9e44")));
  elements.push(text(s2x + 187, s2y + 248, "Enterprise SLA", { fontSize: 12, color: "#2b8a3e", width: 115, height: 16 }));

  elements.push(rect(s2x + 185, s2y + 330, 120, 35, docStyle("#b2f2bb", "#2f9e44")));
  elements.push(text(s2x + 192, s2y + 338, "Q1 2026 Pricing", { fontSize: 12, color: "#2b8a3e", width: 110, height: 16 }));

  // Middle — yellow
  elements.push(rect(s2x + 95, s2y + 180, 130, 35, docStyle("#ffec99", "#f08c00")));
  elements.push(text(s2x + 102, s2y + 188, "2024 Annual Report", { fontSize: 12, color: "#e8590c", width: 120, height: 16 }));

  elements.push(rect(s2x + 320, s2y + 350, 120, 35, docStyle("#ffec99", "#f08c00")));
  elements.push(text(s2x + 327, s2y + 358, "Beta Feature Docs", { fontSize: 12, color: "#e8590c", width: 110, height: 16 }));

  // Outer — red
  elements.push(rect(s2x + 15, s2y + 400, 140, 35, docStyle("#ffc9c9", "#e03131")));
  elements.push(text(s2x + 22, s2y + 408, "Consumer FAQ", { fontSize: 12, color: "#c92a2a", width: 125, height: 16 }));

  elements.push(rect(s2x + 350, s2y + 130, 120, 35, docStyle("#ffc9c9", "#e03131")));
  elements.push(text(s2x + 357, s2y + 138, "Competitor Analysis", { fontSize: 12, color: "#c92a2a", width: 115, height: 16 }));

  elements.push(rect(s2x + 350, s2y + 460, 120, 35, docStyle("#ffc9c9", "#e03131")));
  elements.push(text(s2x + 357, s2y + 468, "Industry Blog", { fontSize: 12, color: "#c92a2a", width: 105, height: 16 }));

  // =====================================================================
  //  SECTION 3 — Architecture Pipeline (bottom)
  // =====================================================================
  const s3x = 60, s3y = 680;

  elements.push(
    text(s3x, s3y, "The Meta-Knowledge Architecture", {
      fontSize: 28,
      color: "#7048e8",
      width: 500,
      height: 35,
    })
  );

  const layers = [
    { label: "1. Query\nUnderstanding", desc: "Extract domain, temporal\nscope, user role, intent", bg: "#e5dbff", stroke: "#7048e8" },
    { label: "2. Meta-Knowledge\nLayer", desc: "Make applicability\nconditions explicit", bg: "#d0bfff", stroke: "#7048e8" },
    { label: "3. Disambiguation\n& Routing", desc: "Route to correct\nknowledge bases", bg: "#b197fc", stroke: "#6741d9" },
    { label: "4. Scoped\nRetrieval", desc: "Search only within\ncompatible docs", bg: "#9775fa", stroke: "#6741d9" },
    { label: "5. Confidence\n& Validation", desc: "Authority weights,\ndecline if uncertain", bg: "#845ef7", stroke: "#5f3dc4" },
  ];

  const layerW = 185, layerH = 110, gap = 20;

  layers.forEach((layer, i) => {
    const lx = s3x + i * (layerW + gap);
    const ly = s3y + 50;

    elements.push(rect(lx, ly, layerW, layerH, { bg: layer.bg, strokeColor: layer.stroke, fillStyle: "solid" }));
    elements.push(
      text(lx + 10, ly + 10, layer.label, {
        fontSize: 15,
        color: "#5f3dc4",
        width: layerW - 20,
        height: 38,
      })
    );
    elements.push(
      text(lx + 10, ly + 58, layer.desc, {
        fontSize: 12,
        color: "#495057",
        width: layerW - 20,
        height: 36,
      })
    );

    // Arrows between layers
    if (i < layers.length - 1) {
      elements.push(
        arrow(lx + layerW, ly + layerH / 2, [[0, 0], [gap, 0]], {
          strokeColor: "#7048e8",
          strokeWidth: 2,
        })
      );
    }
  });

  // =====================================================================
  //  SECTION 4 — Authority Scores (bottom right)
  // =====================================================================
  const s4x = 560, s4y = 680;

  elements.push(
    text(s4x + 80, s4y, "Source Authority Weights", {
      fontSize: 28,
      color: "#2f9e44",
      width: 400,
      height: 35,
    })
  );

  const sources = [
    { label: "Legal / Compliance", weight: 95, color: "#2f9e44" },
    { label: "Official Documentation", weight: 82, color: "#1971c2" },
    { label: "Subject-Matter Expert", weight: 65, color: "#7048e8" },
    { label: "Community Forum", weight: 30, color: "#f08c00" },
    { label: "External Blog Post", weight: 15, color: "#e8590c" },
    { label: "AI-Generated Summary", weight: 8, color: "#e03131" },
  ];

  const barMaxW = 350;

  sources.forEach((src, i) => {
    const sy = s4y + 50 + i * 48;
    // Label
    elements.push(text(s4x, sy, src.label, { fontSize: 14, color: "#495057", width: 190, height: 18 }));
    // Bar background
    elements.push(rect(s4x + 195, sy - 2, barMaxW, 22, { bg: "#f1f3f5", strokeColor: "#dee2e6", fillStyle: "solid" }));
    // Bar fill
    const fillW = Math.max(20, (src.weight / 100) * barMaxW);
    elements.push(rect(s4x + 195, sy - 2, fillW, 22, { bg: src.color, strokeColor: src.color, fillStyle: "solid", opacity: 70 }));
    // Percentage
    elements.push(text(s4x + 195 + fillW + 8, sy, `${src.weight}%`, { fontSize: 13, color: src.color, width: 45, height: 18 }));
  });

  // =====================================================================
  //  Connecting arrow from Problem → Envelope
  // =====================================================================
  elements.push(
    arrow(490, 350, [[0, 0], [70, 0]], {
      strokeColor: "#1971c2",
      strokeWidth: 3,
    })
  );
  elements.push(
    text(495, 328, "needs →", {
      fontSize: 13,
      color: "#1971c2",
      width: 60,
      height: 18,
    })
  );

  return elements;
}
