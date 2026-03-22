// Meta-Knowledge Visualization — Excalidraw scene data
// Focused on visualizing the concept of APPLICABILITY

let nextId = 1;
const id = () => String(nextId++);

// ─── helpers ───────────────────────────────────────────────────────────────

function rect(x, y, w, h, opts = {}) {
  return {
    id: id(),
    type: "rectangle",
    x, y, width: w, height: h,
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
    x, y, width: w, height: h,
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
    x, y,
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
    x, y,
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

function line(x, y, points, opts = {}) {
  return {
    id: id(),
    type: "line",
    x, y,
    width: Math.abs(points[points.length - 1][0] - points[0][0]),
    height: Math.abs(points[points.length - 1][1] - points[0][1]),
    points,
    strokeColor: opts.strokeColor || "#1e1e1e",
    backgroundColor: "transparent",
    fillStyle: "solid",
    strokeWidth: opts.strokeWidth || 2,
    roundness: null,
    opacity: opts.opacity || 100,
    groupIds: opts.groupIds || [],
    boundElements: [],
    locked: false,
    ...opts.extra,
  };
}

function diamond(x, y, w, h, opts = {}) {
  return {
    id: id(),
    type: "diamond",
    x, y, width: w, height: h,
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
  //  TITLE (top-center)
  // =====================================================================
  elements.push(
    text(250, 20, "Similarity ≠ Applicability", {
      fontSize: 40, color: "#1e1e1e", width: 600, height: 50,
      textAlign: "center",
    })
  );
  elements.push(
    text(200, 75, "A document can be true, relevant, and semantically similar — and still be the wrong answer.", {
      fontSize: 16, color: "#868e96", width: 700, height: 22, textAlign: "center",
    })
  );

  // =====================================================================
  //  SECTION 1 — The Venn Diagram of Applicability (left)
  //  Shows that "Applicable" = intersection of 4 dimensions
  // =====================================================================
  const vx = 80, vy = 140;

  elements.push(
    text(vx + 50, vy, "What Makes Knowledge Applicable?", {
      fontSize: 24, color: "#1971c2", width: 450, height: 32,
    })
  );

  // Big outer circle: "Semantically Similar" — the biggest set
  elements.push(
    ellipse(vx, vy + 50, 500, 400, {
      bg: "#dbe4ff", strokeColor: "#4263eb", fillStyle: "solid", opacity: 25,
      strokeWidth: 3,
    })
  );
  elements.push(
    text(vx + 15, vy + 65, "Semantically Similar", {
      fontSize: 18, color: "#4263eb", width: 200, height: 24,
    })
  );

  // Overlapping dimension circles
  // Temporal (top-left)
  elements.push(
    ellipse(vx + 60, vy + 100, 220, 180, {
      bg: "#d3f9d8", strokeColor: "#2f9e44", fillStyle: "solid", opacity: 30,
      strokeWidth: 2,
    })
  );
  elements.push(
    text(vx + 80, vy + 115, "⏰ Temporally\n     Valid", {
      fontSize: 15, color: "#2f9e44", width: 130, height: 40,
    })
  );

  // Scope (top-right)
  elements.push(
    ellipse(vx + 210, vy + 100, 220, 180, {
      bg: "#fff3bf", strokeColor: "#f08c00", fillStyle: "solid", opacity: 30,
      strokeWidth: 2,
    })
  );
  elements.push(
    text(vx + 320, vy + 115, "🎯 Right\n    Scope", {
      fontSize: 15, color: "#e8590c", width: 100, height: 40,
    })
  );

  // Authority (bottom-left)
  elements.push(
    ellipse(vx + 60, vy + 230, 220, 180, {
      bg: "#e5dbff", strokeColor: "#7048e8", fillStyle: "solid", opacity: 30,
      strokeWidth: 2,
    })
  );
  elements.push(
    text(vx + 75, vy + 360, "🏛 Authoritative\n      Source", {
      fontSize: 15, color: "#7048e8", width: 140, height: 40,
    })
  );

  // Audience (bottom-right)
  elements.push(
    ellipse(vx + 210, vy + 230, 220, 180, {
      bg: "#ffe3e3", strokeColor: "#e03131", fillStyle: "solid", opacity: 30,
      strokeWidth: 2,
    })
  );
  elements.push(
    text(vx + 325, vy + 360, "👤 Right\n    Audience", {
      fontSize: 15, color: "#e03131", width: 120, height: 40,
    })
  );

  // Center intersection — the "Applicable" zone
  elements.push(
    ellipse(vx + 175, vy + 220, 140, 100, {
      bg: "#2f9e44", strokeColor: "#2f9e44", fillStyle: "solid", opacity: 25,
      strokeWidth: 3,
    })
  );
  elements.push(
    text(vx + 195, vy + 255, "APPLICABLE", {
      fontSize: 16, color: "#2f9e44", width: 110, height: 22,
      textAlign: "center",
    })
  );

  // =====================================================================
  //  SECTION 2 — Compatibility Envelope (right)
  //  Enhanced: each doc has annotations showing WHY it's in its ring
  // =====================================================================
  const ex = 680, ey = 140;

  elements.push(
    text(ex + 60, ey, "The Compatibility Envelope", {
      fontSize: 24, color: "#1971c2", width: 380, height: 32,
    })
  );

  // Outer ring — red
  elements.push(
    ellipse(ex, ey + 50, 480, 440, {
      bg: "#ffe3e3", strokeColor: "#e03131", fillStyle: "solid", opacity: 30,
      strokeWidth: 2,
    })
  );

  // Middle ring — yellow
  elements.push(
    ellipse(ex + 80, ey + 120, 320, 300, {
      bg: "#fff3bf", strokeColor: "#f08c00", fillStyle: "solid", opacity: 40,
      strokeWidth: 2,
    })
  );

  // Inner ring — green
  elements.push(
    ellipse(ex + 155, ey + 190, 170, 160, {
      bg: "#d3f9d8", strokeColor: "#2f9e44", fillStyle: "solid", opacity: 50,
      strokeWidth: 2,
    })
  );

  // Ring labels (right side, outside)
  elements.push(
    text(ex + 485, ey + 100, "True but not\napplicable here", {
      fontSize: 13, color: "#e03131", width: 120, height: 36,
    })
  );
  elements.push(
    line(ex + 475, ey + 115, [[0, 0], [10, 0]], { strokeColor: "#e03131" })
  );

  elements.push(
    text(ex + 405, ey + 220, "Partially\napplicable", {
      fontSize: 13, color: "#e8590c", width: 85, height: 36,
    })
  );
  elements.push(
    line(ex + 395, ey + 235, [[0, 0], [10, 0]], { strokeColor: "#e8590c" })
  );

  elements.push(
    text(ex + 330, ey + 255, "Fully\napplicable", {
      fontSize: 13, color: "#2f9e44", width: 80, height: 36,
    })
  );
  elements.push(
    line(ex + 320, ey + 270, [[0, 0], [10, 0]], { strokeColor: "#2f9e44" })
  );

  // ── Documents with dimension indicators ──

  // INNER: Enterprise SLA ✓✓✓✓
  const docG = (x, y, label, dims) => {
    elements.push(rect(x, y, 140, 50, { bg: "#b2f2bb", strokeColor: "#2f9e44", fillStyle: "solid" }));
    elements.push(text(x + 8, y + 5, label, { fontSize: 12, color: "#2b8a3e", width: 125, height: 16 }));
    elements.push(text(x + 8, y + 26, dims, { fontSize: 11, color: "#495057", width: 125, height: 16 }));
  };
  docG(ex + 170, ey + 215, "Enterprise SLA", "⏰✓  🎯✓  🏛✓  👤✓");
  docG(ex + 170, ey + 300, "Q1 2026 Pricing", "⏰✓  🎯✓  🏛✓  👤✓");

  // MIDDLE: Partially applicable — show which dimension fails
  const docY = (x, y, label, dims, fail) => {
    elements.push(rect(x, y, 140, 60, { bg: "#ffec99", strokeColor: "#f08c00", fillStyle: "solid" }));
    elements.push(text(x + 8, y + 5, label, { fontSize: 12, color: "#e8590c", width: 125, height: 16 }));
    elements.push(text(x + 8, y + 24, dims, { fontSize: 11, color: "#495057", width: 125, height: 16 }));
    elements.push(text(x + 8, y + 42, fail, { fontSize: 10, color: "#e8590c", width: 125, height: 14 }));
  };
  docY(ex + 90, ey + 155, "2024 Annual Report", "⏰✗  🎯✓  🏛✓  👤✓", "↑ outdated data");
  docY(ex + 280, ey + 340, "Beta Feature Docs", "⏰✓  🎯✗  🏛✓  👤✓", "↑ scope mismatch");

  // OUTER: Not applicable — show multiple failures
  const docR = (x, y, label, dims, fail) => {
    elements.push(rect(x, y, 145, 60, { bg: "#ffc9c9", strokeColor: "#e03131", fillStyle: "solid" }));
    elements.push(text(x + 8, y + 5, label, { fontSize: 12, color: "#c92a2a", width: 130, height: 16 }));
    elements.push(text(x + 8, y + 24, dims, { fontSize: 11, color: "#495057", width: 130, height: 16 }));
    elements.push(text(x + 8, y + 42, fail, { fontSize: 10, color: "#e03131", width: 130, height: 14 }));
  };
  docR(ex + 10, ey + 380, "Consumer FAQ", "⏰✓  🎯✗  🏛✗  👤✗", "wrong audience + scope");
  docR(ex + 330, ey + 95, "Competitor Analysis", "⏰✓  🎯✗  🏛✗  👤✗", "external, wrong scope");
  docR(ex + 330, ey + 420, "Industry Blog Post", "⏰✗  🎯✗  🏛✗  👤✗", "fails all dimensions");

  // =====================================================================
  //  SECTION 3 — Concrete Example: The Dangerous Retrieval
  //  Visual flow showing similarity score vs. applicability
  // =====================================================================
  const fx = 80, fy = 620;

  elements.push(
    text(fx + 100, fy, "The Dangerous Retrieval", {
      fontSize: 24, color: "#e03131", width: 350, height: 32,
    })
  );

  // Query bubble
  elements.push(
    ellipse(fx, fy + 55, 260, 70, {
      bg: "#e7f5ff", strokeColor: "#1971c2", fillStyle: "solid",
    })
  );
  elements.push(
    text(fx + 30, fy + 72, '"What is our return\n         policy?"', {
      fontSize: 16, color: "#1971c2", width: 200, height: 40,
      textAlign: "center",
    })
  );
  elements.push(
    text(fx + 50, fy + 125, "Context: Enterprise B2B", {
      fontSize: 12, color: "#4dabf7", width: 170, height: 16,
    })
  );

  // Arrow to similarity ranking
  elements.push(
    arrow(fx + 260, fy + 90, [[0, 0], [60, 0]], { strokeColor: "#868e96", strokeWidth: 2 })
  );

  // Similarity ranking column
  const rankX = fx + 340, rankY = fy + 45;
  elements.push(
    text(rankX + 5, rankY, "Vector Ranking", {
      fontSize: 14, color: "#868e96", width: 130, height: 18,
    })
  );

  // Rank 1 — high similarity, WRONG
  elements.push(rect(rankX, rankY + 25, 160, 40, { bg: "#fff5f5", strokeColor: "#e03131", fillStyle: "solid" }));
  elements.push(text(rankX + 8, rankY + 30, "#1  Consumer Policy", { fontSize: 12, color: "#e03131", width: 145, height: 16 }));
  elements.push(text(rankX + 8, rankY + 47, "cos 0.95", { fontSize: 11, color: "#868e96", width: 60, height: 14 }));
  // Big X
  elements.push(text(rankX + 165, rankY + 30, "✗", { fontSize: 24, color: "#e03131", width: 25, height: 30 }));

  // Rank 2 — high similarity, WRONG
  elements.push(rect(rankX, rankY + 72, 160, 40, { bg: "#fff5f5", strokeColor: "#e03131", fillStyle: "solid" }));
  elements.push(text(rankX + 8, rankY + 77, "#2  General FAQ", { fontSize: 12, color: "#e03131", width: 145, height: 16 }));
  elements.push(text(rankX + 8, rankY + 94, "cos 0.91", { fontSize: 11, color: "#868e96", width: 60, height: 14 }));
  elements.push(text(rankX + 165, rankY + 77, "✗", { fontSize: 24, color: "#e03131", width: 25, height: 30 }));

  // Rank 3 — lower similarity, CORRECT
  elements.push(rect(rankX, rankY + 119, 160, 40, { bg: "#ebfbee", strokeColor: "#2f9e44", fillStyle: "solid" }));
  elements.push(text(rankX + 8, rankY + 124, "#3  Enterprise SLA", { fontSize: 12, color: "#2f9e44", width: 145, height: 16 }));
  elements.push(text(rankX + 8, rankY + 141, "cos 0.82", { fontSize: 11, color: "#868e96", width: 60, height: 14 }));
  elements.push(text(rankX + 165, rankY + 124, "✓", { fontSize: 24, color: "#2f9e44", width: 25, height: 30 }));

  // Arrow to applicability filter
  elements.push(
    arrow(rankX + 200, rankY + 85, [[0, 0], [50, 0]], { strokeColor: "#1971c2", strokeWidth: 2 })
  );

  // Applicability filter — diamond gate
  const gateX = rankX + 260, gateY = rankY + 45;
  elements.push(
    diamond(gateX, gateY, 110, 110, {
      bg: "#d3f9d8", strokeColor: "#2f9e44", fillStyle: "solid", opacity: 60,
      strokeWidth: 3,
    })
  );
  elements.push(
    text(gateX + 18, gateY + 36, "Applicability\n    Filter", {
      fontSize: 13, color: "#2f9e44", width: 90, height: 36,
      textAlign: "center",
    })
  );

  // Arrow from filter — blocked docs go up (red)
  elements.push(
    arrow(gateX + 55, gateY, [[0, 0], [0, -35]], { strokeColor: "#e03131", strokeWidth: 2 })
  );
  elements.push(
    text(gateX + 65, gateY - 40, "blocked", {
      fontSize: 11, color: "#e03131", width: 55, height: 14,
    })
  );

  // Arrow from filter — correct doc goes right (green)
  elements.push(
    arrow(gateX + 110, gateY + 55, [[0, 0], [50, 0]], { strokeColor: "#2f9e44", strokeWidth: 3 })
  );

  // Correct result
  elements.push(
    rect(gateX + 170, gateY + 25, 170, 65, {
      bg: "#ebfbee", strokeColor: "#2f9e44", fillStyle: "solid", strokeWidth: 3,
    })
  );
  elements.push(
    text(gateX + 185, gateY + 33, "Enterprise SLA", {
      fontSize: 16, color: "#2f9e44", width: 145, height: 22,
    })
  );
  elements.push(
    text(gateX + 185, gateY + 55, "90-day return window\nDedicated account mgr", {
      fontSize: 11, color: "#495057", width: 145, height: 30,
    })
  );

  // =====================================================================
  //  SECTION 4 — Dimension Breakdown Grid
  //  Visual grid showing 3 docs × 4 dimensions with ✓/✗ icons
  // =====================================================================
  const gx = 680, gy = 620;

  elements.push(
    text(gx + 40, gy, "Applicability Dimensions", {
      fontSize: 24, color: "#7048e8", width: 350, height: 32,
    })
  );

  // Column headers (dimensions)
  const dims = [
    { label: "⏰ Time", color: "#2f9e44" },
    { label: "🎯 Scope", color: "#f08c00" },
    { label: "🏛 Authority", color: "#7048e8" },
    { label: "👤 Audience", color: "#e03131" },
  ];
  const colW = 80, rowH = 55;
  const gridX = gx + 160, gridY = gy + 50;

  dims.forEach((d, i) => {
    elements.push(
      text(gridX + i * colW, gridY, d.label, {
        fontSize: 13, color: d.color, width: 75, height: 18, textAlign: "center",
      })
    );
  });

  // Horizontal separator
  elements.push(line(gx, gridY + 22, [[0, 0], [490, 0]], { strokeColor: "#dee2e6", strokeWidth: 1 }));

  // Row data
  const docs = [
    {
      name: "Enterprise SLA",
      bg: "#ebfbee", color: "#2f9e44",
      dims: ["✓", "✓", "✓", "✓"],
      verdict: "APPLICABLE",
    },
    {
      name: "Consumer Policy",
      bg: "#fff5f5", color: "#e03131",
      dims: ["✓", "✗", "✗", "✗"],
      verdict: "WRONG",
    },
    {
      name: "2024 Report",
      bg: "#fff9db", color: "#e8590c",
      dims: ["✗", "✓", "✓", "✓"],
      verdict: "PARTIAL",
    },
  ];

  docs.forEach((doc, ri) => {
    const ry = gridY + 30 + ri * rowH;

    // Doc name + bg row
    elements.push(
      rect(gx, ry, 490, rowH - 5, {
        bg: doc.bg, strokeColor: "transparent", fillStyle: "solid", opacity: 40,
      })
    );
    elements.push(
      text(gx + 8, ry + 10, doc.name, {
        fontSize: 14, color: doc.color, width: 140, height: 18,
      })
    );

    // Dimension check/cross marks
    doc.dims.forEach((mark, ci) => {
      const isPass = mark === "✓";
      elements.push(
        ellipse(gridX + ci * colW + 18, ry + 5, 36, 36, {
          bg: isPass ? "#d3f9d8" : "#ffe3e3",
          strokeColor: isPass ? "#2f9e44" : "#e03131",
          fillStyle: "solid",
          opacity: 50,
        })
      );
      elements.push(
        text(gridX + ci * colW + 26, ry + 10, mark, {
          fontSize: 20, color: isPass ? "#2f9e44" : "#e03131", width: 20, height: 26,
        })
      );
    });

    // Verdict
    elements.push(
      text(gridX + 4 * colW + 10, ry + 10, doc.verdict, {
        fontSize: 13, color: doc.color, width: 90, height: 18,
      })
    );
  });

  // =====================================================================
  //  Connecting elements
  // =====================================================================

  // Arrow: Venn → Envelope ("defines the")
  elements.push(
    arrow(580, 340, [[0, 0], [100, 0]], { strokeColor: "#1971c2", strokeWidth: 2 })
  );
  elements.push(
    text(590, 318, "defines the", {
      fontSize: 12, color: "#1971c2", width: 85, height: 16,
    })
  );

  // Arrow: Envelope → Grid ("evaluated per doc")
  elements.push(
    arrow(920, 590, [[0, 0], [0, 30]], { strokeColor: "#7048e8", strokeWidth: 2 })
  );
  elements.push(
    text(928, 598, "evaluated per document", {
      fontSize: 11, color: "#7048e8", width: 160, height: 14,
    })
  );

  return elements;
}
