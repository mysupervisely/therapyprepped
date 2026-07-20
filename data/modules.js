// Structured curriculum content for the 4 live NCMHCE modules.
// This file is the source of truth for seeding the `lessons` table in Supabase
// (see scripts/seed-lessons.js) and can also be imported directly for local/dev use.

const modules = [
  {
    id: 'assessment-diagnosis',
    title: 'Assessment & Diagnosis',
    subtitle: 'Gathering clinical information, MSE, risk assessment, DSM-5-TR criteria, differential diagnosis',
    lessons: [
      {
        id: 'ad-01-how-tested',
        title: 'How Assessment Is Tested on the NCMHCE',
        content_md: `## The #1 rule: apply, don't recite
The NCMHCE does not ask you to recite diagnostic criteria — it asks you to **apply** them within realistic clinical simulations. You'll be given a case and asked to select assessment actions as **necessary**, **unnecessary but harmless**, or **contraindicated**.

## The most common mistakes
- Skipping or minimizing risk assessment — safety always comes first
- Selecting too many "thorough-looking" but unnecessary actions
- Jumping to diagnosis before gathering enough history
- Ignoring cultural factors — they are always clinically relevant

## The exam principle
Ask yourself: *does selecting this action change my clinical decision?* If not, it's probably unnecessary. The exam penalizes over-assessment just as much as under-assessment.`,
      },
      {
        id: 'ad-02-bps',
        title: 'The Biopsychosocial Assessment',
        content_md: `## Three domains, every time
The biopsychosocial (BPS) model (Engel, 1977) is the gold-standard framework. On the exam, every assessment decision should reflect all three domains:

**Biological** — medical history, current medications, substance use, family psychiatric history, sleep, appetite, neurological symptoms. Know the medical mimics: hypothyroidism → depression; hyperthyroidism → anxiety/mania; anemia → depression; hypoglycemia → panic; B12/D deficiency → depression; Cushing's → depression/anxiety.

**Psychological** — presenting symptoms (onset, duration, severity, course), cognitive patterns, emotional functioning, coping strategies, trauma history, personality functioning.

**Social** — family system, social support, employment/finances, cultural background, discrimination/marginalization, legal history, living situation.

## Culture is never optional
Culture shapes how symptoms are expressed, how clients seek help, and what they expect from treatment. The DSM-5-TR's **Cultural Formulation Interview (CFI)** is a structured tool for exploring this — know its purpose.

## The clinical interview
Open questions → reflective listening → funnel to focused inquiry. Every intake should cover: chief complaint, history of present illness, current symptoms, safety, mental health history, medical history/meds, substance use, social/developmental history, and strengths.`,
      },
      {
        id: 'ad-03-mse',
        title: 'The Mental Status Examination',
        content_md: `## Eight domains
Appearance, Behavior/Psychomotor, Speech, Mood, Affect, Thought Process, Thought Content, Perceptions, Cognition, Insight, Judgment.

## The two distinctions the exam tests every time

**Mood vs. Affect** — Mood is *subjective* (the client's own words, in quotes). Affect is *objective* (the clinician's observation: flat, labile, appropriate). Mood is climate; affect is weather.

**Thought Process vs. Thought Content** — Process is *how* thoughts connect (flight of ideas → mania; loose associations → schizophrenia; tangentiality vs. circumstantiality; thought blocking → schizophrenia). Content is *what* the client thinks about (delusions, SI/HI, obsessions, phobias).

## Perceptual distinctions
- **Hallucination**: perception with no external stimulus
- **Illusion**: misperception of a real stimulus
- **Delusion**: fixed false belief (thought content, not perception)

## Insight levels
Full → partial → poor. Poor insight (denying illness, believing delusions are real) severely complicates treatment engagement and informed consent.`,
      },
      {
        id: 'ad-04-risk',
        title: 'Risk Assessment — The Non-Negotiable First Priority',
        content_md: `## Suicide risk: the C-SSRS ideation spectrum
1. Passive ideation ("I wish I were dead")
2. Active ideation, no plan
3. Active ideation + method, no plan/intent
4. Active ideation + plan, no intent
5. Active ideation + intent + plan (highest acute risk)

Assess **behavior** separately from ideation: preparatory behaviors, interrupted attempt, aborted attempt, actual past attempt (the single strongest predictor of a future attempt).

## Risk vs. protective factors
Strongest risk factors: previous attempt, access to lethal means, hopelessness (Beck's strongest *cognitive* predictor), active substance use, recent loss/humiliation, social isolation.
Strongest protective factors: reasons for living, social support, engagement in treatment, problem-solving capacity.

## Safety planning (Stanley-Brown model)
Six components: warning signs → internal coping → social contacts for distraction → people to contact for support → professional/crisis resources → means restriction (the most evidence-supported component). This is **not** a no-harm contract — those have no evidence of efficacy.

## Homicide risk & Tarasoff
Assess: specific target, specific plan, access to means, preparatory steps, history of violence. *Tarasoff v. Regents* (1976) established a duty to protect identifiable third parties from credible, serious threats — triggered by specificity + credibility, not vague anger.

## Mandatory reporting
Reasonable suspicion (not certainty) of child abuse/neglect triggers a report. You don't investigate — you report.`,
      },
      {
        id: 'ad-05-dsm',
        title: 'DSM-5-TR High-Yield Diagnostic Criteria',
        content_md: `## Depressive disorders
**MDD**: 5+ of 9 SIG-E-CAPS symptoms for 2+ weeks, at least one being depressed mood or anhedonia. **PDD (dysthymia)**: depressed mood more days than not for 2+ years, with milder symptoms. **DMDD**: severe temper outbursts 3+/week, irritable mood between outbursts, onset before age 10.

## Anxiety disorders
**GAD**: excessive worry across multiple domains, 6+ months, 3+ of 6 REST+IM symptoms. **Panic Disorder**: recurrent *unexpected* attacks, 4+ of 13 symptoms peaking in minutes. **Social Anxiety**: fear of negative evaluation in social situations, 6+ months.

## Trauma disorders
**PTSD**: Criterion A (exposure) + B (intrusion) + C (avoidance) + D (negative cognitions/mood) + E (arousal), duration 1+ month. **Acute Stress Disorder**: 3 days–1 month (this duration is what separates it from PTSD). **Adjustment Disorder**: a *residual* diagnosis — only when no other disorder's full criteria are met.

## Bipolar spectrum
**Manic episode (DIGFAST)**: 7+ days, 3+ symptoms (4+ if mood is only irritable). **Bipolar I** requires a manic episode; **Bipolar II** requires hypomanic + major depressive episode (never a full manic episode — if one occurs, it reclassifies to Bipolar I).

## Schizophrenia spectrum
2+ of 5 symptoms (delusions, hallucinations, disorganized speech, grossly disorganized/catatonic behavior, negative symptoms) for 1+ month active phase, 6+ months total disturbance. At least one must be delusions, hallucinations, or disorganized speech.

## Substance use disorders
11 criteria across 4 domains (impaired control, social impairment, risky use, pharmacological). Mild = 2-3, Moderate = 4-5, Severe = 6+.

## Personality & neurodevelopmental
**BPD**: 5+ of 9 criteria (abandonment fears, unstable relationships, identity disturbance, impulsivity, suicidality, affective instability, emptiness, anger, paranoid/dissociative symptoms). **ADHD**: 6+ inattentive and/or hyperactive symptoms (5+ for adults), onset before 12. **ASD**: deficits in social communication (all 3 required) + restricted/repetitive patterns (2+ required).`,
      },
      {
        id: 'ad-06-differential',
        title: 'Differential Diagnosis — The Art of Discrimination',
        content_md: `## The framework
1. Rule out medical conditions first
2. Rule out substance-induced causes
3. Identify the primary diagnosis
4. Apply parsimony (fewest diagnoses that explain the most — without sacrificing accuracy)
5. Consider comorbidity (don't stop at one diagnosis if a second is clearly present)
6. Apply diagnostic hierarchy

## The most-tested differential pairs
- **MDD vs. Bipolar Depression** — always ask about prior manic/hypomanic periods; antidepressants alone can trigger mania in bipolar disorder
- **GAD vs. MDD** — GAD worry is future-focused; MDD rumination is past-focused
- **ASD vs. PTSD** — distinguished almost entirely by duration (3 days–1 month vs. 1+ month)
- **BPD vs. Bipolar II** — BPD mood is reactive to interpersonal events and shifts within hours; Bipolar II episodes are sustained over days-to-weeks
- **Schizophrenia vs. Bipolar I with psychosis** — in schizophrenia, psychosis persists outside mood episodes; in bipolar, it doesn't
- **Adjustment Disorder vs. MDD/PTSD** — Adjustment Disorder is residual; if full criteria for another disorder are met, that diagnosis takes precedence
- **Grief vs. MDD vs. Prolonged Grief Disorder** — the bereavement exclusion was removed from DSM-5; full MDD criteria can be diagnosed during bereavement. Prolonged Grief Disorder (new in DSM-5-TR) requires 12+ months (adults) of intense yearning plus 3+ additional symptoms.

**Exam tip**: "Best explains" means which ONE diagnosis most comprehensively accounts for the symptoms. Duration is often the single biggest differentiator between similar disorders.`,
      },
    ],
  },
  {
    id: 'counseling-psychotherapy',
    title: 'Counseling & Psychotherapy',
    subtitle: 'Theoretical approaches and evidence-based interventions',
    lessons: [
      {
        id: 'cp-01-overview',
        title: 'How This Domain Is Tested',
        content_md: `## Three-step exam strategy
1. Identify the presenting problem (diagnosis or symptom cluster)
2. Match to the evidence-based approach with the *most* research support
3. Eliminate distractors that sound plausible but aren't first-line

When a question says "**best**," it wants the research-backed gold standard for *that specific diagnosis* — not just an approach that could work.`,
      },
      {
        id: 'cp-02-psychodynamic-humanistic',
        title: 'Psychodynamic, Humanistic & Existential Approaches',
        content_md: `## Psychodynamic
Goal: make the unconscious conscious. Key concepts: defense mechanisms (repression, projection, rationalization, reaction formation, sublimation, displacement, regression, denial), transference (client → therapist) vs. countertransference (therapist's own reaction) — these are frequently confused on the exam.

## Person-Centered Therapy (Rogers)
Unconditional Positive Regard, Empathy, and Congruence are **necessary and sufficient** for change — the relationship *is* the therapy. PCT therapists do not give homework or teach skills directively.

## Gestalt (Perls)
Here-and-now awareness; empty chair / two-chair technique; unfinished business.

## Existential (Frankl, May, Yalom)
Four ultimate concerns: death, freedom/responsibility, isolation, meaninglessness. Best for terminal illness, grief, identity crises.

## Adlerian
Social interest, birth order, lifestyle assessment, encouragement as the cornerstone technique. Behavior is purposeful and goal-directed.`,
      },
      {
        id: 'cp-03-cbt-behavioral',
        title: 'CBT & Behavioral Therapy — The Most-Tested Approach',
        content_md: `## Core CBT model
Automatic thoughts → intermediate beliefs → core beliefs (schemas). Cognitive distortions to memorize: all-or-nothing, catastrophizing, mind reading, fortune telling, emotional reasoning, should statements, personalization, overgeneralization, mental filter, labeling, magnification/minimization.

## CBT variants — high frequency on the exam
| Variant | Developer | Best for |
|---|---|---|
| REBT | Ellis | Perfectionism, low frustration tolerance (ABC model) |
| DBT | Linehan | BPD, self-harm, suicidality |
| ACT | Hayes | Chronic pain, anxiety (defusion, psychological flexibility) |
| MBCT | Segal/Williams/Teasdale | Recurrent depression relapse prevention |
| TF-CBT | Cohen & Mannarino | Childhood trauma (ages 3–18) |

## Behavioral techniques
Systematic desensitization (Wolpe) for phobias; ERP for OCD (first-line); flooding; token economies; shaping.

**Reinforcement schedules**: Variable Ratio produces the *most* resistance to extinction (why gambling is addictive). Continuous reinforcement extinguishes fastest.`,
      },
      {
        id: 'cp-04-brief-family-narrative',
        title: 'SFBT, Narrative & Family Systems',
        content_md: `## Solution-Focused Brief Therapy
Future-focused, strength-based. Miracle question, scaling questions, exception questions. **Does not** explore history or root causes — that's the opposite of what SFBT is testing you on.

## Narrative Therapy
"The problem is the problem, not the person." Externalization, re-authoring, unique outcomes.

## Family Systems
- **Structural** (Minuchin): boundaries, subsystems, enactment
- **Strategic** (Haley/Madanes): directives, paradoxical interventions
- **Bowen**: differentiation of self, triangulation, genograms
- **Experiential** (Satir/Whitaker): family sculpting, communication stances`,
      },
      {
        id: 'cp-05-ebp-by-diagnosis',
        title: 'Evidence-Based Treatment by Diagnosis (Memorize This Table)',
        content_md: `| Diagnosis | First-line treatment |
|---|---|
| OCD | ERP (Exposure & Response Prevention) |
| PTSD (adults) | Prolonged Exposure, CPT, or EMDR |
| PTSD (children) | TF-CBT |
| BPD + self-harm | DBT |
| Depression | CBT / Behavioral Activation |
| Recurrent depression (relapse prevention) | MBCT |
| Substance use + ambivalence | Motivational Interviewing |
| Anorexia (adolescents) | Family-Based Treatment (Maudsley) |
| Bulimia / BED | CBT-E |
| Insomnia | CBT-I |
| Specific phobia | Exposure therapy |
| Panic disorder | CBT with interoceptive exposure |
| Chronic pain | ACT |
| Autism (behavioral) | ABA |
| Couples conflict | EFT / Gottman Method |

**Exam tip**: CBT is the most commonly correct answer for anxiety and depression generally — but specific problems have specific first-line answers (OCD → ERP, BPD → DBT, PTSD → PE/CPT/EMDR). Know the exceptions.`,
      },
      {
        id: 'cp-06-mi-emdr-dbt',
        title: 'Motivational Interviewing, EMDR & DBT Skills in Depth',
        content_md: `## Motivational Interviewing
Spirit = **PACE** (Partnership, Acceptance, Compassion, Evocation). Skills = **OARS** (Open questions, Affirmations, Reflections, Summaries). Change talk follows **DARN-CAT**. Pair with Prochaska & DiClemente's Stages of Change.

## EMDR (Shapiro)
Bilateral stimulation facilitates Adaptive Information Processing. 8 phases: history-taking, preparation, assessment, desensitization, installation, body scan, closure, reevaluation. First-line for PTSD per WHO/APA/VA.

## Prolonged Exposure (Foa) & CPT (Resick)
PE: psychoeducation + breathing retraining + in vivo/imaginal exposure. CPT: addresses "stuck points" across 5 themes (safety, trust, power/control, esteem, intimacy).

## DBT's four skills modules
Mindfulness (foundation) → Distress Tolerance (TIPP, ACCEPTS) → Emotion Regulation (PLEASE, opposite action) → Interpersonal Effectiveness (DEAR MAN, GIVE, FAST). Biosocial theory: BPD = biological emotional sensitivity + invalidating environment.`,
      },
    ],
  },
  {
    id: 'admin-consultation-supervision',
    title: 'Administration, Consultation & Supervision',
    subtitle: 'Ethics, legal standards, documentation, supervision',
    lessons: [
      {
        id: 'acs-01-decision-hierarchy',
        title: 'The ACS Decision Hierarchy',
        content_md: `Apply this to every ethical scenario, in order:
1. **Safety** concern? Address before anything else.
2. **Legal** obligation? (mandatory reporting, Tarasoff, HIPAA, subpoenas)
3. What does the **ACA Code** say — specific section and standard?
4. What does **clinical judgment** say — proportionate, least restrictive option?
5. **Consult and document**.

The ACA Code of Ethics has 9 sections (A–I). Heaviest exam emphasis: **A** (Counseling Relationship), **B** (Confidentiality), **C** (Professional Responsibility), **F** (Supervision), **H** (Distance Counseling), **I** (Resolving Ethical Issues).

## Six core ethical principles
Autonomy, Beneficence, Nonmaleficence, Justice, Fidelity, Veracity.`,
      },
      {
        id: 'acs-02-confidentiality',
        title: 'Confidentiality and Its Limits',
        content_md: `## The exceptions — know every one
Imminent risk to self; Tarasoff (credible, specific threat to an identifiable third party); mandatory reporting (child/elder abuse — reasonable suspicion, not certainty); valid court orders; third-party billing; consultation with supervisors; client waiver.

## Confidentiality vs. privilege
**Confidentiality** is an ethical/professional obligation the counselor can breach to protect safety. **Privilege** is a legal concept that belongs to the *client* — only the client (or their attorney) can waive it, and it only applies in legal proceedings.

## Subpoena vs. court order
A **subpoena** is a request from an attorney — do not comply automatically; notify the client, consult an attorney, consider asserting privilege. A **court order** is a judge's command — compliance is generally required, but release only what's specifically ordered.

## Special contexts
Group therapy: the counselor can't legally enforce confidentiality among members. Minors: negotiate what will/won't be shared with parents at the outset; never disclose information that would endanger the minor.`,
      },
      {
        id: 'acs-03-consent-relationships',
        title: 'Informed Consent & Multiple Relationships',
        content_md: `## Three elements of valid consent
**Information** (nature/purpose, risks/benefits, alternatives, confidentiality limits, fees) + **Capacity** (cognitive/psychological ability to understand) + **Voluntariness** (free from coercion). Informed consent is an *ongoing process*, not a signed form.

## Multiple relationships — three categories
- **Absolutely prohibited**: sexual/romantic contact with current clients; sexual contact with former clients within 5 years (and even after, the burden is on the counselor to show non-exploitation)
- **Potentially harmful — requires analysis**: could this impair objectivity or exploit the client? Consult, document, monitor.
- **Unavoidable — manage carefully**: rural/small communities (ACA A.6.e explicitly acknowledges these) — minimize harm, don't automatically refuse.

Gifts and bartering are not absolutely prohibited — they require case-by-case ethical analysis (cultural context, value, motivation).`,
      },
      {
        id: 'acs-04-legal-standards',
        title: 'Legal Standards: HIPAA, Commitment, Reporting',
        content_md: `## HIPAA essentials
Minimum necessary standard; psychotherapy (process) notes get *extra* protection beyond the standard medical record; clients generally have a right to access their records; telehealth requires HIPAA-compliant platforms with a BAA (consumer FaceTime/Zoom alone doesn't qualify).

## Involuntary commitment
Requires imminent danger due to mental illness + least restrictive alternative considered. A 72-hour hold is for emergency evaluation, not long-term treatment. Refusing voluntary hospitalization does not automatically justify involuntary commitment — imminence is the key threshold.

## Mandatory reporting
Individual obligation (can't delegate to a supervisor); triggered by reasonable suspicion; report promptly; you don't investigate.

## Scope of practice
LPC/LMHC scope includes psychotherapy, diagnosis, treatment planning, crisis intervention. It excludes prescribing medication, neuropsych testing (without specific credentialing), and forensic evaluation without forensic training.`,
      },
      {
        id: 'acs-05-documentation',
        title: 'Documentation',
        content_md: `## Progress note formats
- **SOAP**: Subjective / Objective / Assessment / Plan
- **DAP**: Data / Assessment / Plan
- **BIRP**: Behavior / Intervention / Response / Plan

## Risk management principles
Document reasoning, not just facts ("I assessed the client as low risk because..." beats "Client denied SI"). Document all consultations. Never alter previous entries — draw a single line through errors, write "error," initial, date.

## Retention
Adults: typically 7 years from last contact. Minors: 7 years from last contact *or* 3 years past age of majority, whichever is longer.`,
      },
      {
        id: 'acs-06-supervision',
        title: 'Clinical Supervision',
        content_md: `## Three functions
**Educative** (teaching skills) + **Administrative** (monitoring/evaluating, gatekeeping) + **Supportive** (addressing burnout, vicarious trauma).

## Vicarious liability
Supervisors are accountable for supervisees' clinical work — they must actively monitor, not just be available.

## Absolute prohibitions
No sexual/romantic relationships between supervisor and supervisee — permanent, not subject to the 5-year rule.

## Gatekeeping
Supervisors must conduct fair, documented evaluations; provide remediation plans; and recommend against licensure when a supervisee isn't competent or ethical.

## Models to know
Integrated Developmental Model (Stoltenberg & Delworth) — supervisee moves through 3 developmental levels. Discrimination Model (Bernard) — supervisor shifts between Teacher/Counselor/Consultant roles.`,
      },
    ],
  },
  {
    id: 'student-client-consultant-needs',
    title: 'Student/Client/Consultant Needs',
    subtitle: 'Cultural factors, diversity, contextual considerations, advocacy',
    lessons: [
      {
        id: 'sc-01-presenting-needs',
        title: 'Identifying the Client\'s Presenting Needs',
        content_md: `## Three levels of need
**Immediate/crisis** (safety — always takes precedence) → **Presenting problem** (the stated chief complaint) → **Underlying/contextual needs** (what actually maintains the problem).

## Wants vs. needs
Honor the client's stated want while expanding assessment to the full picture — without dismissing their voice. "I want medication to fix my anxiety" → needs psychoeducation, CBT skills, possibly psychiatric evaluation, and exploration of underlying causes.

**Exam priority order**: Safety > immediate crisis > medical stabilization > therapeutic engagement. A client can't engage in CBT while homeless and hungry — basic needs are part of the treatment context, not separate from it.`,
      },
      {
        id: 'sc-02-bpsc-cfi',
        title: 'The Biopsychosocial-Cultural Model & Cultural Formulation Interview',
        content_md: `The traditional BPS model extends to **BPSC** — culture is a foundational dimension, not an add-on.

## The CFI's four domains
1. Cultural definition of the problem
2. Cultural perceptions of cause, context, and support
3. Cultural factors affecting self-coping and past help-seeking
4. Cultural factors affecting current help-seeking

## Explanatory models of illness
Moral/spiritual, social/relational, physical/somatic, structural/social, biomedical — clients' own explanations may differ dramatically from the DSM model, and exploring them (not overriding them) is clinically essential.`,
      },
      {
        id: 'sc-03-cultural-humility',
        title: 'Cultural Humility & the Sue et al. Tripartite Model',
        content_md: `## Competence vs. humility
**Cultural competence** is knowledge-based — a standard to reach, with a risk of stereotyping. **Cultural humility** (Tervalon & Murray-García) is process-based — lifelong self-critique, recognizing the client as the expert on their own experience. Humility is the preferred contemporary framework; it doesn't replace knowledge, it holds it loosely.

## Tripartite model (Sue, Arredondo & McDavis)
**Awareness** (of your own biases) → **Knowledge** (of others' worldviews and systemic realities) → **Skills** (culturally adapted interventions).

## Intersectionality (Crenshaw)
Multiple identities (race, gender, class, immigration status, sexuality) overlap to create experiences that can't be understood by examining any single identity alone.`,
      },
      {
        id: 'sc-04-lgbtq-religion-ses',
        title: 'LGBTQ+, Religious/Spiritual & Socioeconomic Factors',
        content_md: `## Minority Stress Theory (Meyer, 2003)
Distal stressors (actual discrimination/violence) + proximal stressors (internalized stigma, concealment) drive LGBTQ+ mental health disparities — not identity itself. Conversion therapy is **never** clinically indicated and is condemned by all major professional bodies.

## FICA spiritual assessment
Faith/beliefs → Importance → Community → Address in care. Never pathologize religion without clear evidence of harm; never dismiss spiritual experience as "magical thinking" without assessing cultural normativity and impairment.

## Social determinants
Poverty, housing insecurity, food insecurity, and lack of healthcare access are clinical factors, not separate from treatment. Berry's acculturation framework: **integration/biculturalism** is associated with the *best* outcomes; **marginalization** with the worst.`,
      },
      {
        id: 'sc-05-special-populations',
        title: 'Special Populations',
        content_md: `## Children
Family system is always part of assessment; play is the primary medium; trauma-informed lens ("what happened to you," not "what's wrong with you").

## Adolescents
Peer relationships are the primary social context; balance confidentiality with safety; don't dismiss distress as "a phase."

## Older adults
Depression is *not* a normal part of aging. Pseudodementia: depression can mimic dementia — treat the depression. Suicide risk is highest in older white males.

## Veterans
Assess for MST (Military Sexual Trauma) in all veterans — underreported. Moral injury requires meaning-making interventions alongside standard PTSD treatment. PE and CPT are first-line.`,
      },
      {
        id: 'sc-06-strengths-advocacy',
        title: 'Strengths-Based Practice & Advocacy',
        content_md: `## Strengths to assess
Individual psychological, relational, cultural, spiritual/existential, environmental, and past coping successes. The single most protective factor across the lifespan: at least one stable, caring, responsive relationship.

## Advocacy is an ethical responsibility (ACA A.7)
Three levels: **client/individual** (writing a support letter, coordinating a 504 plan), **community/group** (presenting to a school board), **public policy** (supporting legislation). When a client's distress is primarily caused by systemic factors — discrimination, unsafe housing, an unresponsive school — individual therapy alone is insufficient. Advocacy is part of the clinical response, not separate from it.`,
      },
    ],
  },
];

module.exports = modules;
module.exports.default = modules; // interop for `import modules from '../data/modules'`
