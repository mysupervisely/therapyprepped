// A small library of hand-built, colorful SVG diagrams illustrating the most
// visually-representable concepts in each domain — for learners who study
// better with charts/diagrams than dense text.

const COLORS = {
  teal: '#1F5C57',
  tealDark: '#143F3B',
  tealTint: '#E7F0EE',
  amber: '#C97B2E',
  coral: '#C25B4E',
  blue: '#3B6FA0',
  purple: '#7A5FA0',
  green: '#3F7D53',
  ink: '#17302D',
};

function DiagramWrap({ title, children }) {
  return (
    <div className="card" style={{ background: '#fff' }}>
      <p style={{ fontSize: 13, fontWeight: 600, color: COLORS.tealDark, marginTop: 0, marginBottom: 12 }}>
        {title}
      </p>
      {children}
    </div>
  );
}

// ---------- Assessment & Diagnosis ----------

export function RiskLadder() {
  return (
    <DiagramWrap title="Suicide Risk Level Ladder">
      <svg viewBox="0 0 400 200" style={{ width: '100%', height: 'auto' }}>
        <rect x="20" y="20" width="200" height="50" rx="8" fill={COLORS.green} />
        <text x="120" y="50" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">LOW</text>
        <text x="230" y="50" fontSize="12" fill={COLORS.ink}>Passive ideation only, no plan/intent, strong protective factors</text>

        <rect x="20" y="80" width="200" height="50" rx="8" fill={COLORS.amber} />
        <text x="120" y="110" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">MODERATE</text>
        <text x="230" y="110" fontSize="12" fill={COLORS.ink}>Active ideation with some plan or intent</text>

        <rect x="20" y="140" width="200" height="50" rx="8" fill={COLORS.coral} />
        <text x="120" y="170" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">HIGH</text>
        <text x="230" y="170" fontSize="12" fill={COLORS.ink}>Plan + intent + access to means, history of attempt</text>
      </svg>
    </DiagramWrap>
  );
}

export function BPSCModel() {
  const items = [
    { label: 'Biological', color: COLORS.blue, cx: 100 },
    { label: 'Psychological', color: COLORS.purple, cx: 180 },
    { label: 'Social', color: COLORS.amber, cx: 260 },
    { label: 'Cultural', color: COLORS.coral, cx: 340 },
  ];
  return (
    <DiagramWrap title="Biopsychosocial-Cultural Model">
      <svg viewBox="0 0 420 180" style={{ width: '100%', height: 'auto' }}>
        {items.map((it) => (
          <g key={it.label}>
            <circle cx={it.cx} cy="90" r="55" fill={it.color} opacity="0.75" />
            <text x={it.cx} y="90" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">
              {it.label}
            </text>
          </g>
        ))}
      </svg>
    </DiagramWrap>
  );
}

export function MoodSpectrum() {
  return (
    <DiagramWrap title="Bipolar I vs. Bipolar II vs. Cyclothymic Disorder">
      <svg viewBox="0 0 420 200" style={{ width: '100%', height: 'auto' }}>
        <text x="10" y="20" fontSize="12" fontWeight="600" fill={COLORS.tealDark}>Bipolar I</text>
        <path d="M10,50 L60,50 L90,10 L120,50 L200,50 L230,80 L260,50 L410,50" fill="none" stroke={COLORS.coral} strokeWidth="3" />
        <text x="95" y="8" fontSize="10" fill={COLORS.coral}>full mania</text>

        <text x="10" y="90" fontSize="12" fontWeight="600" fill={COLORS.tealDark}>Bipolar II</text>
        <path d="M10,120 L60,120 L90,100 L120,120 L200,120 L230,145 L260,120 L410,120" fill="none" stroke={COLORS.amber} strokeWidth="3" />
        <text x="95" y="96" fontSize="10" fill={COLORS.amber}>hypomania (milder)</text>

        <text x="10" y="160" fontSize="12" fontWeight="600" fill={COLORS.tealDark}>Cyclothymic</text>
        <path d="M10,180 L60,180 L80,172 L100,180 L130,180 L150,188 L180,180 L410,180" fill="none" stroke={COLORS.blue} strokeWidth="3" />
        <text x="65" y="168" fontSize="10" fill={COLORS.blue}>subsyndromal swings</text>
      </svg>
    </DiagramWrap>
  );
}

// ---------- Counseling & Psychotherapy ----------

export function DBTModules() {
  const items = [
    { label: 'Mindfulness', sub: 'The foundation', color: COLORS.teal },
    { label: 'Distress Tolerance', sub: 'Surviving crises', color: COLORS.blue },
    { label: 'Emotion Regulation', sub: 'Changing emotions', color: COLORS.purple },
    { label: 'Interpersonal Effectiveness', sub: 'Relationships', color: COLORS.amber },
  ];
  return (
    <DiagramWrap title="DBT's Four Skills Modules">
      <svg viewBox="0 0 420 220" style={{ width: '100%', height: 'auto' }}>
        {items.map((it, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = 20 + col * 200;
          const y = 20 + row * 100;
          return (
            <g key={it.label}>
              <rect x={x} y={y} width="180" height="80" rx="10" fill={it.color} />
              <text x={x + 90} y={y + 35} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">
                {it.label}
              </text>
              <text x={x + 90} y={y + 55} textAnchor="middle" fill="#fff" fontSize="11" opacity="0.85">
                {it.sub}
              </text>
            </g>
          );
        })}
      </svg>
    </DiagramWrap>
  );
}

export function CBTTriangle() {
  return (
    <DiagramWrap title="The CBT Triangle">
      <svg viewBox="0 0 300 260" style={{ width: '100%', height: 'auto' }}>
        <circle cx="150" cy="40" r="45" fill={COLORS.teal} />
        <text x="150" y="44" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">Thoughts</text>

        <circle cx="60" cy="200" r="45" fill={COLORS.amber} />
        <text x="60" y="204" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">Feelings</text>

        <circle cx="240" cy="200" r="45" fill={COLORS.coral} />
        <text x="240" y="204" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">Behaviors</text>

        <line x1="120" y1="70" x2="80" y2="165" stroke={COLORS.ink} strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="180" y1="70" x2="220" y2="165" stroke={COLORS.ink} strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="105" y1="200" x2="195" y2="200" stroke={COLORS.ink} strokeWidth="2" markerEnd="url(#arrow)" />
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={COLORS.ink} />
          </marker>
        </defs>
      </svg>
    </DiagramWrap>
  );
}

// ---------- Administration, Consultation & Supervision ----------

export function ACSHierarchy() {
  const steps = [
    { label: '1. Safety', color: COLORS.coral, w: 380 },
    { label: '2. Legal obligation', color: COLORS.amber, w: 320 },
    { label: '3. ACA Code', color: COLORS.teal, w: 260 },
    { label: '4. Clinical judgment', color: COLORS.blue, w: 200 },
    { label: '5. Consult & document', color: COLORS.purple, w: 140 },
  ];
  return (
    <DiagramWrap title="The ACS Decision Hierarchy">
      <svg viewBox="0 0 420 220" style={{ width: '100%', height: 'auto' }}>
        {steps.map((s, i) => (
          <g key={s.label}>
            <rect x={(420 - s.w) / 2} y={i * 42 + 10} width={s.w} height="34" rx="8" fill={s.color} />
            <text x="210" y={i * 42 + 32} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">
              {s.label}
            </text>
          </g>
        ))}
      </svg>
    </DiagramWrap>
  );
}

export function ConfidentialityMap() {
  const exceptions = [
    { label: 'Risk to self', angle: -90 },
    { label: 'Risk to others\n(Tarasoff)', angle: -30 },
    { label: 'Abuse reporting', angle: 30 },
    { label: 'Court order', angle: 90 },
    { label: 'Client waiver', angle: 150 },
    { label: 'Supervision', angle: 210 },
  ];
  const cx = 210, cy = 110, r = 85;
  return (
    <DiagramWrap title="Confidentiality — Exceptions Map">
      <svg viewBox="0 0 420 220" style={{ width: '100%', height: 'auto' }}>
        {exceptions.map((e, i) => {
          const rad = (e.angle * Math.PI) / 180;
          const x = cx + r * Math.cos(rad);
          const y = cy + r * Math.sin(rad);
          const colors = [COLORS.coral, COLORS.amber, COLORS.blue, COLORS.purple, COLORS.green, COLORS.teal];
          return (
            <g key={e.label}>
              <line x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(23,48,45,0.25)" strokeWidth="1.5" />
              <circle cx={x} cy={y} r="42" fill={colors[i]} opacity="0.9" />
              {e.label.split('\n').map((line, li) => (
                <text key={li} x={x} y={y + li * 12 - (e.label.includes('\n') ? 4 : 0)} textAnchor="middle" fill="#fff" fontSize="10" fontWeight="600">
                  {line}
                </text>
              ))}
            </g>
          );
        })}
        <circle cx={cx} cy={cy} r="48" fill={COLORS.tealDark} />
        <text x={cx} y={cy - 4} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">Confiden-</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">tiality</text>
      </svg>
    </DiagramWrap>
  );
}

// ---------- Student/Client/Consultant Needs ----------

export function TripartiteModel() {
  const steps = [
    { label: 'Awareness', sub: 'of self', color: COLORS.blue },
    { label: 'Knowledge', sub: 'of others', color: COLORS.purple },
    { label: 'Skills', sub: 'in practice', color: COLORS.teal },
  ];
  return (
    <DiagramWrap title="Cultural Competence Tripartite Model">
      <svg viewBox="0 0 420 140" style={{ width: '100%', height: 'auto' }}>
        {steps.map((s, i) => (
          <g key={s.label}>
            <circle cx={70 + i * 140} cy="70" r="55" fill={s.color} />
            <text x={70 + i * 140} y="66" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">
              {s.label}
            </text>
            <text x={70 + i * 140} y="84" textAnchor="middle" fill="#fff" fontSize="11" opacity="0.85">
              {s.sub}
            </text>
            {i < 2 && (
              <line x1={135 + i * 140} y1="70" x2={135 + i * 140 + 40} y2="70" stroke={COLORS.ink} strokeWidth="2" markerEnd="url(#arrow2)" />
            )}
          </g>
        ))}
        <defs>
          <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={COLORS.ink} />
          </marker>
        </defs>
      </svg>
    </DiagramWrap>
  );
}

export function AcculturationGrid() {
  const quads = [
    { label: 'Integration', sub: 'Best outcomes', color: COLORS.green, x: 0, y: 0 },
    { label: 'Assimilation', sub: 'Adopt dominant only', color: COLORS.amber, x: 210, y: 0 },
    { label: 'Separation', sub: 'Retain heritage only', color: COLORS.blue, x: 0, y: 110 },
    { label: 'Marginalization', sub: 'Worst outcomes', color: COLORS.coral, x: 210, y: 110 },
  ];
  return (
    <DiagramWrap title="Berry's Acculturation Framework">
      <svg viewBox="0 0 420 220" style={{ width: '100%', height: 'auto' }}>
        {quads.map((q) => (
          <g key={q.label}>
            <rect x={q.x + 5} y={q.y + 5} width="200" height="100" rx="10" fill={q.color} />
            <text x={q.x + 105} y={q.y + 50} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">
              {q.label}
            </text>
            <text x={q.x + 105} y={q.y + 70} textAnchor="middle" fill="#fff" fontSize="11" opacity="0.85">
              {q.sub}
            </text>
          </g>
        ))}
      </svg>
    </DiagramWrap>
  );
}

export const DIAGRAMS_BY_MODULE = {
  'assessment-diagnosis': [RiskLadder, BPSCModel, MoodSpectrum],
  'counseling-psychotherapy': [DBTModules, CBTTriangle],
  'admin-consultation-supervision': [ACSHierarchy, ConfidentialityMap],
  'student-client-consultant-needs': [TripartiteModel, AcculturationGrid],
};
