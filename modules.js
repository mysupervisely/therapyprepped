// Structured curriculum content for the 4 live NCMHCE modules.
// Expanded pass: lesson content brought close to full source-material depth.
// This file is the source of truth for seeding the `lessons` table in Supabase
// (see scripts/seed-lessons.js / supabase/seed_content.sql) and can also be
// imported directly for local/dev fallback rendering.

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
The NCMHCE does not ask you to recite diagnostic criteria — it asks you to **apply** them within realistic clinical simulations. In the simulation, you're presented with a client scenario and asked to select assessment actions from a list. Your job is to identify which actions are:

- **Necessary**: actions a competent clinician must take given this presentation
- **Unnecessary but harmless**: actions that add no clinical value but wouldn't hurt the client
- **Contraindicated**: actions that would be clinically inappropriate or harmful

## The most common mistakes in this domain
- Skipping or minimizing risk assessment — safety **always** comes first, before diagnosis or treatment
- Selecting too many unnecessary assessment actions trying to appear thorough
- Jumping to diagnosis before gathering enough history
- Ignoring cultural factors in assessment — they are **always** clinically relevant
- Treating the assessment as a checklist rather than a clinical reasoning process

## What "gathering clinical information" means on the exam
The exam tests whether you know WHAT to gather, WHY you gather it, and WHEN it's appropriate. Assessment is not one-size-fits-all. The clinical information you prioritize depends on:
- The presenting problem — what brought the client in today?
- Safety considerations — is there any risk to this person or others?
- The diagnostic hypothesis — what conditions are you ruling in or out?
- The treatment context — inpatient vs. outpatient, crisis vs. scheduled
- Cultural and contextual factors — what is the client's background and life context?

## Exam principle: prioritize, don't collect everything
The NCMHCE penalizes over-assessment just as it penalizes under-assessment. A competent clinician gathers what is clinically indicated — not everything possible. Always ask: *"Does selecting this action change my clinical decision?"* If the answer is no, it is probably an unnecessary action.

## What they're testing in assessment-action lists
- They want to see you gather safety information **first**, before anything else
- They want to see you gather enough information to form a diagnosis — not more, not less
- Selecting actions like "administer a neuropsychological battery" without clinical indication = unnecessary
- Selecting actions like "obtain release for records from previous treatment" when indicated = appropriate
- Failing to assess trauma history when trauma is clearly relevant = missing a necessary action
- Ignoring cultural context in assessment = poor clinical reasoning`,
      },
      {
        id: 'ad-02-bps',
        title: 'The Biopsychosocial Assessment',
        content_md: `## Three domains, every time
The biopsychosocial (BPS) model, developed by George Engel in 1977, recognizes that psychological symptoms arise from — and are maintained by — the interaction of biological, psychological, and social factors. On the NCMHCE, BPS thinking is embedded in every assessment decision. You must demonstrate that you consider **all three domains**, not just the presenting symptoms.

### The biological domain
Biological factors include anything related to the body, brain, genetics, and pharmacology — critical because medical conditions and medications frequently cause or worsen psychiatric symptoms.

| Area | What to assess |
|---|---|
| Medical history | Chronic illness (thyroid, diabetes, neurological, cardiovascular), prior hospitalizations, surgeries, chronic pain |
| Current medications | All prescribed, OTC, and supplements — many cause psychiatric side effects (steroids → mania, beta-blockers → depression, stimulants → anxiety) |
| Substance use | Alcohol, cannabis, stimulants, opioids, benzodiazepines, nicotine — both intoxication AND withdrawal produce psychiatric symptoms |
| Family psychiatric history | First-degree relatives with mood disorders, psychosis, anxiety, SUD — heritability is significant across major disorders |
| Sleep patterns | Duration, quality, insomnia, hypersomnia — disrupted sleep is both a symptom and a risk factor across disorders |
| Appetite & weight | Changes in appetite, weight loss/gain — marker of depression, eating disorders, medical conditions |
| Neurological symptoms | Headaches, seizures, memory problems, TBI history — essential for ruling out neurological causes |

**Medical conditions that mimic psychiatric disorders — must rule out:**
- Hypothyroidism → mimics MDD (fatigue, weight gain, cognitive slowing, low mood)
- Hyperthyroidism → mimics Anxiety or Mania (racing heart, anxiety, weight loss, insomnia)
- Anemia → mimics Depression (fatigue, weakness, cognitive difficulties)
- Diabetes (hypoglycemia) → mimics Panic Attacks (trembling, sweating, heart racing, fear)
- Vitamin B12/D deficiency → can cause depression, fatigue, cognitive changes
- Neurological conditions (MS, lupus, seizure disorders) → wide range of psychiatric mimics
- Cushing's Disease (cortisol excess) → mimics depression or anxiety with physical changes
- Sleep apnea → fatigue and depression symptoms

### The psychological domain
Covers the internal experience — how the client thinks, feels, copes, and has developed psychologically over their lifetime: presenting symptoms (onset, duration, severity 1–10, frequency, course, triggers), cognitive patterns (thought content, distortions, core beliefs, rumination), emotional functioning (regulation capacity, range, affect stability), coping strategies (adaptive vs. maladaptive), mental health history (prior diagnoses, hospitalizations, therapy history, medication trials), trauma history (ACEs, adult trauma, abuse, traumatic losses), and personality functioning (identity, interpersonal patterns, impulse control — especially relevant if a personality disorder is suspected).

### The social domain
Social and environmental factors powerfully shape mental health: family system (composition, quality, roles, communication, conflict history), social support network (friendships, community, religious/spiritual affiliations, quality vs. quantity), relationship status (intimate relationship quality, conflict patterns, attachment history), employment & finances (job status, financial strain, housing stability — major stressors that maintain symptoms), cultural background (ethnicity, nationality, immigration history, acculturation stress), discrimination & marginalization (racism, homophobia, transphobia, ableism — minority stress as a clinical factor), legal history, and living situation (housing stability, safety of home/neighborhood).

**Cultural considerations — always clinically relevant:**
- Culture shapes how symptoms are expressed (somatic complaints may reflect culturally syntonic expressions of distress)
- Culture shapes help-seeking behavior and stigma around mental health
- Always ask: how does the client's cultural community understand their problem?
- Avoid pathologizing culturally normative experiences (spiritual experiences, extended family involvement)
- Use culturally adapted validated tools when available
- Ask about experiences of discrimination — a significant stressor and risk factor
- The DSM-5-TR's **Cultural Formulation Interview (CFI)** is a structured tool for this — know its purpose

## The clinical interview: structure and skills
The clinical interview is the primary assessment tool. It is NOT a checklist — it is a collaborative dialogue.
1. **Begin with open questions**: "What brings you in today?" — open questions invite narrative and yield more information than yes/no questions
2. **Use reflective listening**: reflect back what the client says to show understanding and encourage elaboration
3. **Follow the client's lead initially**: let them tell their story before imposing structure
4. **Transition to focused inquiry**: once you have the narrative, systematically gather the BPS domains
5. **Use funneling**: broad → reflective listening → focused follow-up → clarifying questions

### Information to gather in every intake
Chief complaint (in the client's own words), history of present illness (onset, duration, course, severity, precipitants, prior episodes), current symptoms (systematic review across mood/anxiety/psychosis/trauma/SUD domains), safety assessment (SI, HI, self-harm, abuse/neglect — always), mental health history, medical history and medications, substance use history, social and developmental history, and strengths/protective factors.`,
      },
      {
        id: 'ad-03-mse',
        title: 'The Mental Status Examination',
        content_md: `## The MSE as "vital signs" of mental health
The Mental Status Examination is a structured, systematic observation of a client's current psychological functioning — a snapshot at the time of the interview, conducted through observation and direct questioning during every clinical encounter. On the NCMHCE, MSE findings are embedded in case vignettes — you must know how to interpret them.

## The eight (extended to eleven) domains

| Domain | What you observe/assess | Clinical significance |
|---|---|---|
| Appearance | Grooming, hygiene, dress, eye contact, apparent vs. stated age | Neglected appearance → depression, psychosis, self-neglect, substance use. Flamboyant dress → mania |
| Behavior & psychomotor activity | Agitation, restlessness, retardation, posturing, mannerisms, tics, gait | Retardation → depression. Agitation → mania, anxiety, akathisia. Waxy flexibility → catatonia |
| Speech | Rate, volume, pressure, poverty, coherence, latency | Pressured → mania. Poverty → depression, schizophrenia. Disorganized → psychosis, intoxication |
| Mood | Client's subjective, self-reported emotional state, in their own words | 'Depressed,' 'anxious,' 'empty' — document in quotes |
| Affect | Clinician's objective observation of emotional expression | Flat/blunted → depression, schizophrenia. Labile → mania, BPD, neurological. Incongruent → psychosis |
| Thought process | How thoughts are organized and connected | Loose associations, tangentiality, circumstantiality, flight of ideas, blocking, perseveration |
| Thought content | What the client is thinking about | Delusions, obsessions, phobias, SI/HI, ideas of reference |
| Perceptions | Hallucinations or illusions in any sensory modality | Auditory (most common in schizophrenia), visual (delirium/substances), tactile (withdrawal) |
| Cognition | Orientation, memory, attention/concentration, abstract thinking, fund of knowledge | Disorientation → delirium, dementia, severe intoxication. Memory impairment → neurocognitive disorders |
| Insight | Awareness of having a mental health problem and needing treatment | Poor insight → schizophrenia, mania, anosognosia — complicates engagement and informed consent |
| Judgment | Ability to make sound decisions | Impaired → psychosis, mania, dementia, severe intoxication — relevant to safety and capacity |

## Critical distinctions the exam tests every time

### Mood vs. Affect
| MOOD | AFFECT |
|---|---|
| Subjective — what the CLIENT reports | Objective — what the CLINICIAN observes |
| Internal emotional state | External emotional expression |
| Documented in client's exact words (quotes) | Described using clinical descriptors |
| "I feel hopeless and empty" | Flat, constricted, labile, appropriate, incongruent |
| Like the climate (persistent) | Like the weather (can shift moment to moment) |

### Thought process vs. thought content
**Thought PROCESS** — HOW thoughts connect: flight of ideas (rapid but detectably connected → mania), loose associations/derailment (no logical connection → schizophrenia), tangentiality (goes off-topic, never returns), circumstantiality (goes off-topic with detail, but eventually returns), thought blocking (mid-sentence interruption → schizophrenia), perseveration (repetitive return to the same idea despite trying to change topic → neurological, OCD).

**Thought CONTENT** — WHAT is being thought about: delusions (fixed, false beliefs not correctable by evidence — paranoid, grandiose, somatic, nihilistic, ideas of reference, thought broadcasting/insertion/withdrawal), suicidal/homicidal ideation (always assessed, always documented), obsessions (recurrent, intrusive, distressing thoughts the person recognizes as their own), phobias (irrational, disproportionate fear).

### Hallucinations vs. illusions vs. delusions
- **Hallucination**: a sensory perception WITHOUT a real external stimulus (auditory most common in schizophrenia; visual common in delirium/substance use; also tactile, olfactory, gustatory)
- **Illusion**: MISPERCEPTION of a real external stimulus — something is there but perceived incorrectly (a shadow perceived as a person) — less clinically severe than hallucination
- **Delusion**: a fixed, false BELIEF not culturally normative and not corrected by evidence — thought CONTENT, not a perceptual experience

### Insight levels
- **Full**: understands they have a mental illness, that symptoms are symptoms, and treatment is needed/helpful
- **Partial**: acknowledges something is wrong but may not attribute it to mental illness, or is ambivalent about treatment
- **Poor**: denies having a mental illness or rejects that experiences are symptoms; may believe delusions are real — severely impacts treatment engagement

## Exam strategy for interpreting MSE vignettes
- "Her affect was flat and she spoke in a monotone with no spontaneous elaboration" → think depression or negative symptoms of schizophrenia
- "He was speaking so rapidly he could not be interrupted, jumping from topic to topic" → think pressured speech + flight of ideas = manic episode
- "She appeared disheveled, wore a coat indoors in July, and reported that news anchors were sending her personal messages" → appearance neglect + ideas of reference = possible psychosis
- Always connect MSE findings to your diagnostic hypothesis`,
      },
      {
        id: 'ad-04-risk',
        title: 'Risk Assessment — The Non-Negotiable First Priority',
        content_md: `## Risk assessment is interwoven throughout, not a step you complete once
Risk assessment is the most heavily weighted clinical decision point on the NCMHCE. In EVERY case simulation, you must assess for risk. Safety assessment is not something you do after gathering a history — it is interwoven throughout the assessment from the moment the client presents.

## Suicide risk: the C-SSRS ideation spectrum
The Columbia Suicide Severity Rating Scale (C-SSRS) is the gold standard for structured suicide risk assessment. It assesses IDEATION on a five-level spectrum and BEHAVIOR separately.

| Level | Description |
|---|---|
| 1 — Passive ideation | "I wish I were dead." No thoughts of killing self, no plan, no intent |
| 2 — Active ideation, no plan | Thoughts of suicide but no specific method in mind |
| 3 — Active ideation + method, no plan/intent | Thinking about a specific method but no plan and no intent |
| 4 — Active ideation + plan, no intent | Has a specific plan (time, place, method); no commitment to carry it out yet |
| 5 — Active ideation + intent + plan | Has a plan AND intends to carry it out — highest acute risk; may have taken preparatory steps |

**Suicidal behavior — assess separately from ideation**: preparatory behaviors (giving away possessions, researching methods, purchasing means, writing a note, saying goodbyes), interrupted attempt (started but stopped by an external factor), aborted attempt (started but stopped themselves), actual past attempt (took an action with some intent to die — the single most important predictor of a future attempt; always ask).

## Risk and protective factors
| RISK FACTORS | PROTECTIVE FACTORS |
|---|---|
| Previous suicide attempt(s) — single strongest predictor | Strong reasons for living (children, pets, relationships) |
| Family history of suicide | Future orientation and goals |
| Access to lethal means — especially firearms | Religious/spiritual beliefs opposing suicide |
| Hopelessness — strongest COGNITIVE predictor (Beck) | Fear of death or pain |
| Current psychiatric diagnosis (MDD, BPD, SUD, schizophrenia) | Engaged in and responsive to treatment |
| Active substance use | Adequate social support/connectedness |
| Recent loss, trauma, or humiliation | Problem-solving capacity |
| Social isolation and withdrawal | Stable living situation and safety |
| Impulsivity | Sense of purpose and meaning |
| Chronic pain or terminal illness | Children or dependents at home |
| Recent psychiatric hospitalization discharge | |
| Male sex / older white males (highest completion rate) | |

**The hopelessness factor**: Aaron Beck's research identified hopelessness as the strongest COGNITIVE predictor of suicidal behavior — a stronger predictor than depression severity alone. Always assess: "Do you see things getting better?" "Can you imagine a future for yourself?" A client who says "Nothing is ever going to change" with flat certainty is clinically concerning. The Beck Hopelessness Scale (BHS) specifically measures this construct.

## Clinical response proportionate to risk
| Risk level | Indicators | Response |
|---|---|---|
| Low | Passive ideation only; no plan/intent/means; strong protective factors; engaged in treatment | Safety planning, increased session frequency, means restriction counseling, document reasoning, schedule follow-up |
| Moderate | Active ideation with some plan or intent; moderate protective factors; some risk factors | All low-risk responses PLUS: crisis resources, supervisor consultation, possible psychiatric referral, contact plan between sessions |
| High/imminent | Active ideation with plan + intent + access to means; history of attempt; few/no protective factors; poor reality testing | Consider voluntary/involuntary hospitalization, notify emergency contacts if client consents, contact emergency services if refused and risk is imminent, document all actions |

## Safety planning (Stanley-Brown model)
A safety plan is **NOT** a no-harm contract — research shows no-harm contracts have no evidence of efficacy and may create false reassurance. The Stanley-Brown Safety Planning Intervention is collaboratively developed and includes six components:
1. Warning signs — personal signals a crisis may be developing
2. Internal coping strategies — things the client can do alone to distract/self-soothe
3. Social contacts for distraction — people/settings that provide distraction, not specifically crisis-focused
4. People to contact for support — specific trusted individuals for emotional support
5. Professional and crisis resources — clinician's number, crisis hotline (988), nearest ER
6. Means restriction — collaborative plan to reduce access to lethal means (the most evidence-supported component; for firearms: temporarily transfer to another household, use a gun safe with the key given to someone else)

The client's own language should be used throughout; the plan should be written, given to the client, and kept in the record — reviewed and updated at each session.

## Homicide risk assessment
When a client expresses anger toward another person or statements indicating danger to others, the counselor MUST assess for homicidal ideation, structured similarly to suicide risk: is there a specific target (named vs. vague)? A specific plan (method, time, place)? Access to means? Preparatory steps? A history of violence? What is the intent — frustration vs. credible threat?

**Tarasoff duty**: *Tarasoff v. Regents of University of California* (1976) established that therapists have a duty to protect identifiable third parties from credible threats of serious harm. Triggers: client makes a credible, serious threat against a specific, identifiable person. Actions required: warn the potential victim, notify law enforcement, pursue hospitalization — or any combination proportionate to the risk. Document everything: the threat, your risk assessment, your clinical reasoning, consultations, and actions taken.

## Child abuse & neglect — mandatory reporting
Mental health counselors are mandated reporters in ALL U.S. states, triggered by REASONABLE SUSPICION, not certainty. You do not investigate; you report.

| Type | Clinical indicators |
|---|---|
| Physical abuse | Unexplained injuries, patterned bruising, bruising in unusual locations, injuries inconsistent with explanation |
| Sexual abuse | Age-inappropriate sexual knowledge/behavior, somatic complaints without medical cause, regression, sudden behavioral change |
| Neglect | Poor hygiene, inadequate clothing, chronic hunger, poor medical/dental care, unexcused absences |
| Emotional abuse | Extreme self-criticism, fearfulness around caregiver, delayed development, excessive compliance or aggression |
| Exposure to DV | Behavioral regression, hypervigilance, sleep disturbance, school problems |

When you report: notify CPS promptly, document observations factually and specifically, consult a supervisor if uncertain — when in doubt, report. Good-faith reporters are legally protected from liability.`,
      },
      {
        id: 'ad-05-dsm',
        title: 'DSM-5-TR High-Yield Diagnostic Criteria',
        content_md: `## Depressive disorders

### Major Depressive Disorder — mnemonic SIG-E-CAPS + 2 core symptoms
5 or more of 9 symptoms for at least 2 CONSECUTIVE weeks, at least one being (1) depressed mood or (2) anhedonia:
- **S**leep disturbance (insomnia or hypersomnia)
- **I**nterest loss (anhedonia)
- **G**uilt or worthlessness
- **E**nergy loss
- **C**oncentration difficulty
- **A**ppetite/weight change
- **P**sychomotor changes (observable by others)
- **S**uicidal ideation

Plus: clinically significant distress or impairment; not attributable to substances/medical condition; not better explained by another disorder; no history of manic/hypomanic episode.

Severity specifiers: Mild (5–6 symptoms, minor impairment), Moderate (6–7, moderate impairment), Severe (7–9, significant impairment or psychotic features). Other specifiers: With Anxious Distress, With Mixed Features, With Melancholic Features, With Atypical Features, With Mood-Congruent/Incongruent Psychotic Features, With Peripartum Onset, With Seasonal Pattern.

### Persistent Depressive Disorder (Dysthymia)
Depressed mood MORE days than not for at least 2 YEARS (1 year in children/adolescents), plus 2+ of: poor appetite/overeating, insomnia/hypersomnia, low energy, low self-esteem, poor concentration, hopelessness. Never symptom-free for more than 2 consecutive months during the 2-year period. A person can have both MDD and PDD simultaneously = "double depression" — more severe and treatment-resistant.

### Disruptive Mood Dysregulation Disorder (DMDD)
Severe, recurrent temper outbursts grossly disproportionate to the situation, 3+ times/week; mood between outbursts is persistently irritable/angry most of the day, nearly every day. Onset before age 10; diagnosed between ages 6–18. Created to reduce overdiagnosis of pediatric bipolar disorder — distinguish from Bipolar I/II.

## Anxiety disorders

### Generalized Anxiety Disorder
Excessive anxiety/worry about MULTIPLE domains, more days than not for at least 6 MONTHS, difficulty controlling worry, plus 3+ of 6 symptoms in adults (1+ in children) — mnemonic **REST+IM**: Restlessness, Easily fatigued, Sleep disturbance, Tension, Irritability, Mind going blank. Causes significant distress/impairment; not attributable to substances/medical condition/another disorder.

### Panic Disorder
Recurrent UNEXPECTED panic attacks — abrupt surge of intense fear peaking within MINUTES with 4+ of 13 symptoms (palpitations, sweating, trembling, shortness of breath, choking, chest pain, nausea, dizziness, chills/hot flushes, paresthesias, derealization/depersonalization, fear of losing control, fear of dying), plus 1+ month of persistent concern about additional attacks OR significant maladaptive behavior change. Panic attacks must be UNEXPECTED to meet Panic Disorder criteria; expected attacks triggered by a known stimulus may indicate another anxiety disorder.

### Social Anxiety Disorder
Marked fear of social situations involving possible scrutiny; fear of negative evaluation; situations always provoke anxiety; avoided or endured with intense distress; 6+ months. Specify "Performance Only." Distinguish from Agoraphobia: SAD = fear of negative evaluation; Agoraphobia = fear of being somewhere escape might be difficult/embarrassing.

### Agoraphobia
Marked fear about 2+ of 5 situations (public transportation, open spaces, enclosed places, standing in line/crowd, being outside home alone) related to difficulty escaping/getting help if panic-like symptoms develop; situations avoided or require a companion; 6+ months. Agoraphobia and Panic Disorder are now SEPARATE diagnoses; both can co-occur.

## Trauma and stressor-related disorders

### PTSD — full breakdown
- **A** (trauma exposure): direct experience, witnessing, learning it happened to a close other, or repeated/extreme exposure to aversive details
- **B** (intrusion, 1 required): intrusive memories, nightmares, flashbacks, intense psychological distress to cues, physiological reactions to cues
- **C** (avoidance, 1 required): avoidance of trauma-related thoughts/feelings; avoidance of external reminders
- **D** (negative cognitions/mood, 2 required): amnesia for trauma, persistent negative beliefs, distorted blame, persistent negative emotions, diminished interest, feeling detached, inability to experience positive emotions
- **E** (arousal/reactivity, 2 required): irritability/aggression, reckless/self-destructive behavior, hypervigilance, exaggerated startle, concentration difficulties, sleep disturbance

Duration: more than 1 MONTH (distinguishes from ASD). Specifiers: With Dissociative Symptoms, With Delayed Expression (full criteria not met until 6+ months post-trauma).

### Acute Stress Disorder
Same Criterion A as PTSD; 9+ of 14 symptoms across 5 categories (intrusion, negative mood, dissociation, avoidance, arousal); duration 3 DAYS to 1 MONTH after trauma. If symptoms persist beyond 1 month, diagnosis may change to PTSD.

### Adjustment Disorder
Emotional/behavioral symptoms in response to an identifiable stressor, onset within 3 MONTHS of the stressor; marked distress disproportionate to the stressor OR significant functional impairment; does NOT meet criteria for another disorder that better explains the symptoms; resolves within 6 MONTHS of the stressor/its consequences ending. Specifiers: With Depressed Mood, With Anxious Mood, With Mixed Anxiety and Depressed Mood, With Disturbance of Conduct, Unspecified. It's a **residual** diagnosis — if full MDD or GAD criteria are met, those take precedence.

## Bipolar and related disorders

### Manic episode (core of Bipolar I) — mnemonic DIGFAST
Distinct period of abnormally/persistently elevated, expansive, OR irritable mood AND increased goal-directed activity/energy, at least 7 DAYS (or any duration if hospitalization required or psychotic features present), plus 3+ of (4+ if mood is only irritable):
- **D**istractibility
- **I**nsomnia (decreased NEED for sleep — feels rested after 3 hours)
- **G**randiosity
- **F**light of ideas
- **A**ctivity increase
- **S**peech (pressured)
- **T**houghtlessness (impulsive, risky behavior)

Marked impairment OR hospitalization OR psychotic features required.

### Bipolar I vs. Bipolar II
| BIPOLAR I | BIPOLAR II |
|---|---|
| Requires at least 1 MANIC episode | Requires at least 1 HYPOMANIC episode + 1 Major Depressive Episode |
| Manic: 7+ days, marked impairment, possible hospitalization | Hypomanic: 4+ days, noticeable change, no marked impairment, no hospitalization |
| Depressive episodes common but NOT required | Depressive episode IS required |
| Psychotic features can occur during mania | No psychotic features during hypomania |
| — | If a FULL manic episode occurs → reclassify as Bipolar I |

### Cyclothymic Disorder
2+ years (1+ in children) of numerous periods with hypomanic AND depressive symptoms that do NOT meet full criteria for either episode type; never symptom-free for more than 2 consecutive months. Cyclothymia is to Bipolar II what PDD is to MDD — the subsyndromal, chronic version.

## Schizophrenia spectrum disorders

### Schizophrenia
2+ of the following, each present for a significant portion of a 1-month period (or less if successfully treated): (1) delusions, (2) hallucinations, (3) disorganized speech, (4) grossly disorganized or catatonic behavior, (5) negative symptoms — at least ONE must be #1, #2, or #3. Continuous disturbance 6+ MONTHS (including prodromal/residual phases); at least 1 month of active-phase symptoms; significant decline in social/occupational/self-care functioning.

**Positive vs. negative symptoms**
| POSITIVE (something added) | NEGATIVE (something diminished) |
|---|---|
| Hallucinations | Avolition |
| Delusions | Alogia (poverty of speech) |
| Disorganized speech | Anhedonia |
| Disorganized/catatonic behavior | Affective flattening |
| More responsive to antipsychotics | Asociality — more resistant to treatment, more persistent, more impactful on functioning |

### Schizoaffective Disorder — a common exam trap
An uninterrupted period of illness with a major depressive OR manic episode concurrent with active schizophrenia symptoms, PLUS delusions or hallucinations for 2+ WEEKS in the ABSENCE of a major mood episode (the key criterion); mood episodes present for majority of total illness duration. Specifiers: Bipolar type or Depressive type. Key distinction from Bipolar with psychotic features: in bipolar, psychosis occurs ONLY during mood episodes; in schizoaffective, psychosis occurs outside mood episodes too.

## Substance use disorders
All SUD diagnoses use the same 11 criteria across 4 domains. Severity: Mild = 2–3 criteria, Moderate = 4–5, Severe = 6+.

| Domain | Criteria |
|---|---|
| Impaired control | Taking more/longer than intended; unsuccessful efforts to cut down; great deal of time obtaining/using/recovering; craving |
| Social impairment | Failure to fulfill role obligations; continued use despite social/interpersonal problems; activities given up/reduced |
| Risky use | Recurrent use in hazardous situations; continued use despite known physical/psychological problems |
| Pharmacological | Tolerance; withdrawal (not counted if only occurring with prescribed use) |

**Substance-induced vs. independent disorders**: substance use can CAUSE symptoms mimicking independent disorders — alcohol intoxication → euphoria/disinhibition, withdrawal → anxiety/depression/seizures; stimulant intoxication → paranoia/anxiety/mania-like, withdrawal → depression; cannabis intoxication → anxiety/paranoia/perceptual distortions; opioid withdrawal → extreme anxiety/agitation/flu-like (not life-threatening); alcohol/benzo withdrawal → anxiety/tremor/seizures/delirium (LIFE-THREATENING). Before diagnosing an independent disorder, determine if symptoms precede substance use or persist during sustained abstinence.

## Personality & neurodevelopmental disorders

### Borderline Personality Disorder — mnemonic "I DESPAIR" (AEIOU + 5)
5+ of 9 criteria: (1) frantic efforts to avoid abandonment, (2) unstable/intense relationships alternating idealization and devaluation (splitting), (3) unstable self-image, (4) impulsivity in 2+ self-damaging areas, (5) recurrent suicidal behavior/self-mutilation, (6) affective instability (intense episodes lasting hours, rarely days), (7) chronic emptiness, (8) inappropriate/intense anger, (9) transient stress-related paranoid ideation or dissociation.

### Antisocial Personality Disorder
Pervasive disregard for/violation of others' rights since age 15; must be 18+ for diagnosis; evidence of conduct disorder before 15; 3+ of: failure to conform to laws, deceitfulness, impulsivity, irritability/aggressiveness, reckless disregard for safety, irresponsibility, lack of remorse.

### ADHD
6+ inattentive AND/OR 6+ hyperactive-impulsive symptoms (5+ for adults 17+); symptoms 6+ months; onset — several symptoms before age 12; present in 2+ settings; interferes with functioning; not better explained by another disorder. Presentations: Predominantly Inattentive, Predominantly Hyperactive-Impulsive, Combined.

### Autism Spectrum Disorder
Persistent deficits in social communication/interaction across multiple contexts — ALL 3 required (social-emotional reciprocity, nonverbal communicative behaviors, developing/maintaining/understanding relationships) — PLUS restricted/repetitive patterns, 2+ of 4 required (stereotyped/repetitive movements or speech, insistence on sameness, highly restricted fixated interests, hyper/hyporeactivity to sensory input). Symptoms present in the early developmental period. Specify with/without intellectual impairment, with/without language impairment, severity level 1/2/3.`,
      },
      {
        id: 'ad-06-differential',
        title: 'Differential Diagnosis — The Art of Clinical Discrimination',
        content_md: `## The framework
Differential diagnosis is the process of systematically ruling in and ruling out competing diagnostic possibilities to arrive at the most accurate diagnosis — one of the most heavily tested skills on the NCMHCE and one of the most clinically important. Use this systematic framework in every case:
1. Rule out MEDICAL CONDITIONS first (hypothyroidism → MDD; hyperthyroidism → anxiety/mania; TBI → personality change; seizures → dissociation)
2. Rule out SUBSTANCE-INDUCED disorders — is the picture explained by intoxication, withdrawal, or medication side effects?
3. Identify the PRIMARY diagnosis — what single diagnosis best accounts for the full symptom constellation?
4. Apply the PARSIMONY principle — prefer the fewest diagnoses that explain the most symptoms, without sacrificing accuracy
5. Consider COMORBIDITY — multiple co-occurring disorders are common (MDD + GAD; PTSD + SUD; ADHD + ASD) — don't stop at one diagnosis if a second is clearly present
6. Consider the HIERARCHY — some diagnoses subsume others (if schizophrenia criteria are met, a separate "delusional disorder" is not given)

## The most-tested differential pairs

### MDD vs. Bipolar Depression
The single most clinically important and most tested differential. A client presenting with depression may have unipolar MDD or may be in the depressive phase of Bipolar I or II — treatment implications differ dramatically (antidepressants alone can trigger mania in bipolar disorder).

| MDD features | Bipolar depression features to screen for |
|---|---|
| Onset often in middle adulthood | Often earlier onset (teens/20s) |
| No history of elevated mood episodes | MUST ask about prior manic/hypomanic periods |
| Family history of unipolar depression | Family history of Bipolar Disorder |
| Responds to antidepressants | Antidepressants alone can trigger mania/rapid cycling |
| Psychomotor retardation less common | Hypersomnia and retardation more common in bipolar depression |

Key screening question: "Have you ever had a period of several days when you felt unusually energetic, needed very little sleep, had racing thoughts, or felt much more confident or productive than usual?"

### GAD vs. MDD
Frequently co-occur AND can be confused: GAD worry is FUTURE-focused ("what if something bad happens?"); MDD rumination is PAST-focused ("I should have done things differently"). In GAD, mood is anxious/worried; in MDD, sad/empty/hopeless. Energy in GAD is often normal or jittery; in MDD it's characteristically low and heavy. When BOTH are present: diagnose both — comorbid MDD + GAD is common and associated with poorer treatment outcomes.

### PTSD vs. Acute Stress Disorder
Distinguished almost entirely by DURATION: ASD = 3 days–1 month after the event; PTSD = symptoms last MORE THAN 1 month (can begin immediately or with delayed expression). ASD has a stronger emphasis on DISSOCIATIVE symptoms. Not all ASD develops into PTSD — timely intervention in the ASD window may prevent PTSD development.

### BPD vs. Bipolar II
One of the most clinically important and tested differentials in all of mental health.

| BPD | BIPOLAR II |
|---|---|
| Mood instability REACTIVE to interpersonal events (abandonment/rejection) | Mood episodes SUSTAINED (days–weeks), often without clear interpersonal triggers |
| Mood can shift WITHIN HOURS in response to perceived rejection | Hypomanic/depressive episodes last DAYS to WEEKS |
| Identity disturbance is core | Sense of self generally stable between episodes |
| Self-harm often functions as emotion regulation | Suicidal behavior during depressive episodes, not typically as self-regulation |
| Interpersonal chaos, splitting, fear of abandonment prominent | Interpersonal functioning may be relatively preserved between episodes |
| Gold standard treatment: DBT | Gold standard treatment: mood stabilizers + psychotherapy (IPSRT, CBT for Bipolar) |

### Schizophrenia vs. Bipolar I with Psychotic Features
| Schizophrenia | Bipolar I with psychotic features |
|---|---|
| Psychosis occurs across episodes, including when mood is stable | Psychosis occurs ONLY during manic/depressive episodes |
| Prominent negative symptoms | Negative symptoms typically absent |
| Chronic, continuous illness with poor inter-episode functioning | Clear episodic course with relatively good functioning between episodes |
| Thought disorder more prominent | Thought content may be grandiose but process is typically more organized |
| Onset typically late teens/early 20s | Onset can be any age; mood episode often precedes psychosis |

### ADHD vs. Anxiety vs. Bipolar II — the "can't focus" triad
- **ADHD**: inattention is PERVASIVE across all situations/topics, not just distressing ones; present before age 12; not explained by anxiety or mood state; often accompanied by impulsivity/hyperactivity
- **Anxiety (GAD)**: inattention driven by INTRUSIVE WORRY — mind goes blank because worry overwhelms it; concentration is better when not worried
- **Bipolar II (depression)**: concentration difficulty is episodic, tied to mood state; normal when not depressed/hypomanic

### Social Anxiety Disorder vs. ASD
SAD: client DESIRES social connection but FEARS negative evaluation; has social skills but doesn't use them due to anxiety; functioning improves when anxiety is managed. ASD: difficulty with social communication is a core deficit, not a fear response; may not understand social cues or have the natural desire for social connection typical of neurotypical individuals; social difficulties persist regardless of anxiety. Key question: "Do you WANT friends but feel afraid?" (SAD) vs. "Do you find social interaction confusing or hard to understand naturally?" (ASD)

### Adjustment Disorder vs. MDD vs. PTSD
| Feature | Adjustment Disorder | MDD or PTSD |
|---|---|---|
| Requires stressor | YES — identifiable stressor within 3 months | Not required (though often present) |
| Symptom threshold | Does NOT meet full criteria for another disorder | Full diagnostic criteria met |
| Course | Resolves within 6 months of stressor removal | May persist indefinitely without treatment |
| Priority | Residual diagnosis — lowest priority | Higher priority; takes precedence over Adjustment Disorder |

### Grief vs. MDD vs. Prolonged Grief Disorder (DSM-5-TR)
One of the most important DSM-5-TR (2022) updates:
- **Normal grief**: painful but includes waves of grief mixed with positive memories; maintains capacity for pleasure; responds to support and distraction
- **MDD during bereavement**: CAN be diagnosed when full MDD criteria are met — the DSM-5 removed the "bereavement exclusion." Indicators of MDD rather than normal grief: persistent inability to experience pleasure, severe hopelessness, SI beyond wishing to be with the deceased, psychomotor retardation, prolonged functional impairment
- **Prolonged Grief Disorder** (new in DSM-5-TR): grief lasting more than 12 months in adults (6 months in children) — intense yearning for the deceased, preoccupation with the deceased/circumstances of death, PLUS 3+ symptoms (identity disruption, disbelief, avoidance of reminders, intense emotional pain, difficulty reengaging in life, emotional numbness, feeling life is meaningless, intense loneliness)

## Using clinical data to drive the differential
1. Identify the CORE symptoms — 2–3 most prominent
2. Generate a SHORT differential list — 2–4 diagnoses that could explain them
3. Look for DISTINGUISHING features — what rules one diagnosis in and others out
4. Check the TIMELINE — duration is often the key distinguishing criterion
5. Consider CONTEXT — stressors, trauma, medical factors, substances
6. Apply diagnostic HIERARCHY
7. CONFIRM the diagnosis — does the client meet the minimum criterion threshold?

**Final tips**: always rule out medical/substance causes before assigning a primary psychiatric diagnosis; Adjustment Disorder is residual — use only when no other disorder's full criteria are met; duration is often the single most important differentiator; diagnose comorbidities when present; "best explains" means which ONE diagnosis most comprehensively accounts for the symptoms; never assign a diagnosis based on a single symptom.`,
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
        content_md: `## What the exam tests
This domain tests your ability to select appropriate theoretical frameworks and evidence-based interventions for specific client presentations. You'll be given case vignettes and asked to identify: (1) which theoretical approach best fits, (2) which specific techniques to use, and (3) which interventions are supported by research for the presenting problem.

- **Theoretical knowledge**: core assumptions, goals, and techniques of each major counseling theory
- **Diagnostic matching**: which approaches are most effective for specific diagnoses (CBT for depression, EMDR for PTSD)
- **Evidence-based practice**: identifying interventions with empirical support vs. those without
- **Cultural competence**: recognizing when to adapt approaches for diverse populations
- **Case conceptualization**: applying theory to understand client problems and select interventions

## Three-step exam strategy
1. Identify the presenting problem — what diagnosis or symptom cluster is described?
2. Match to the evidence-based approach with the most research support for that specific problem
3. Eliminate distractors that sound plausible but aren't first-line or evidence-based

When a question says "**BEST**," it wants the research-backed gold standard for that specific diagnosis or presenting problem — not just an answer that could work.`,
      },
      {
        id: 'cp-02-psychodynamic-humanistic',
        title: 'Psychodynamic, Humanistic & Existential Approaches',
        content_md: `## Psychoanalytic / Psychodynamic Theory
Key theorists: Freud (psychoanalysis), Jung (analytical), Adler (individual psychology), ego theorists (Erikson, Hartmann), object relations (Klein, Winnicott), self psychology (Kohut). Core assumption: behavior is driven by unconscious processes, early childhood experiences, and unresolved conflicts — the past shapes the present. Primary goal: make the unconscious conscious; resolve intrapsychic conflicts; develop insight into patterns rooted in early experience. Key concepts: Id/Ego/Superego, defense mechanisms, transference, countertransference, resistance, free association, dream analysis, object relations. Main techniques: free association, dream interpretation, analysis of transference/resistance, interpretation, confrontation, clarification. Best used for: personality disorders, chronic relational patterns, unresolved trauma, long-term character issues, alexithymia. Time frame: long-term (months–years); short-term psychodynamic therapy (STPP) runs 16–24 sessions.

**Key defense mechanisms to memorize**: repression (unconsciously blocking a thought/memory), projection (attributing one's own unacceptable feelings to others), rationalization (justifying behavior with logical-sounding reasons), reaction formation (expressing the opposite of what one truly feels), sublimation (redirecting impulses into socially acceptable outlets — the healthiest defense), displacement (redirecting feelings to a safer target), regression (returning to earlier developmental behaviors under stress), denial (refusing to acknowledge painful realities).

**Transference vs. countertransference**: Transference = client projects feelings about past figures onto the therapist. Countertransference = therapist's emotional reaction to the client. Both are used therapeutically in psychodynamic work — know the difference; this is frequently tested and commonly confused.

## Adlerian Therapy (Individual Psychology)
Key theorist: Alfred Adler. Core concepts: inferiority feelings, striving for superiority, birth order, social interest (Gemeinschaftsgefühl), lifestyle, fictional finalism. Goal: understand mistaken beliefs/goals; increase social interest; live more courageously and cooperatively. Techniques: lifestyle assessment, early recollections, birth order analysis, encouragement, acting "as if," pushing the button, paradoxical intention, spitting in the soup. Best used for: children, school settings, family counseling, clients with inferiority complex, discouraged individuals. Adler believed all behavior is purposeful and goal-directed; "encouragement" is the cornerstone of Adlerian therapy — not just praise, but helping clients recognize their own strengths and social contribution.

## Existential & Humanistic Approaches

### Existential Therapy
Key theorists: Viktor Frankl (logotherapy), Rollo May, Irvin Yalom. Four ultimate concerns: death, freedom/responsibility, isolation, meaninglessness. Goal: help clients confront life's givens, take responsibility, find meaning, and live authentically. Techniques: exploring existential themes, paradoxical intention (Frankl), dereflection, examining values and choices. Best used for: clients facing terminal illness, grief, life transitions, identity crises, loss of meaning.

### Person-Centered Therapy (Rogers)
Core conditions: Unconditional Positive Regard (UPR), Empathy, Congruence/Genuineness — these are **necessary AND sufficient** for change; the relationship itself IS the therapy. Core concepts: self-actualization, conditions of worth, incongruence, organismic valuing process. Techniques: active listening, reflection of feeling, paraphrasing, summarizing, open-ended questions — NOT directive techniques. Best used for: clients needing a safe therapeutic relationship, rapport building, multicultural contexts where directive approaches may feel intrusive. If a question asks what PCT therapists primarily do, the answer is create a therapeutic relationship, NOT teach skills or give homework.

### Gestalt Therapy
Key theorist: Fritz Perls. Core concepts: here-and-now awareness, figure-ground, unfinished business, contact and withdrawal, I-Thou relationship. Techniques: empty chair technique, two-chair dialogue, role-playing, body awareness, exaggeration, "I" statements, dream work. Best used for: clients with unfinished business, avoidance, blocked emotions, relational difficulties.`,
      },
      {
        id: 'cp-03-cbt-behavioral',
        title: 'CBT & Behavioral Therapy — The Most-Tested Approach',
        content_md: `CBT is the MOST TESTED approach on licensing exams — it has the broadest evidence base of any psychotherapy and is the gold standard for many disorders.

## CBT core model
| Component | Description | Example |
|---|---|---|
| Automatic thoughts | Fast, spontaneous thoughts in response to events | "I'm going to fail" before a test |
| Core beliefs | Deep beliefs about self, others, world (schemas) | "I am unlovable" / "The world is dangerous" |
| Intermediate beliefs | Rules/attitudes/assumptions connecting core beliefs to auto-thoughts | "If I'm not perfect, people will reject me" |
| Cognitive distortions | Systematic errors in thinking that maintain distress | All-or-nothing, catastrophizing, mind reading |

**Cognitive distortions — must memorize**: All-or-nothing thinking (black and white, no middle ground), catastrophizing (assuming worst-case), mind reading (assuming you know others' thoughts), fortune telling (predicting a negative outcome as fact), emotional reasoning ("I feel stupid, so I must be stupid"), should statements (rigid rules that create guilt/resentment), personalization (attributing external events to yourself without basis), overgeneralization (broad conclusions from a single event), mental filter (focusing only on the negative), labeling (global negative label), magnification/minimization (exaggerating negatives or shrinking positives).

## CBT techniques
Socratic questioning (guided discovery, examining evidence for/against beliefs), thought records/DTR (documenting situations, automatic thoughts, emotions, alternative thoughts), behavioral activation (scheduling activities to combat depression/avoidance), exposure hierarchy (gradual exposure from least to most anxiety-provoking), cognitive restructuring (identifying/challenging distorted thoughts, replacing with balanced ones), activity scheduling, problem-solving, psychoeducation.

## CBT variants — high frequency on exams
| Variant | Developer | Key feature | Best used for |
|---|---|---|---|
| Standard CBT | Aaron Beck | Cognitive restructuring, thought records, behavioral experiments | Depression, anxiety disorders, OCD |
| REBT | Albert Ellis | ABC model; disputing irrational beliefs (musturbation, awfulizing) | Perfectionism, low frustration tolerance, anger |
| DBT | Marsha Linehan | Dialectics; skills training in 4 modules | BPD, self-harm, suicidality, emotion dysregulation |
| ACT | Steven Hayes | Acceptance, defusion, values clarification, committed action | Chronic pain, anxiety, depression, OCD |
| MBCT | Segal, Williams, Teasdale | Mindfulness + CBT; decentering from thoughts | Recurrent depression relapse prevention |
| TF-CBT | Cohen & Mannarino | Trauma narrative, gradual exposure, caregiver involvement | Childhood trauma/abuse (ages 3–18) |

DBT was developed specifically for BPD with chronic suicidality — if the question describes BPD + self-harm + intense emotion dysregulation, the answer is DBT. ACT uses "defusion" (separating self from thoughts) and "psychological flexibility."

## REBT — the ABC model
- **A** — Activating event: the triggering situation
- **B** — Beliefs: the client's rational or irrational beliefs about A
- **C** — Consequences: emotional/behavioral consequences (result of B, not A)
- **D** — Disputing: challenging irrational beliefs (logical, empirical, pragmatic disputes)
- **E** — Effective new philosophy: a new, rational belief system

Irrational beliefs (Ellis): Musturbation ("I must..."), Awfulizing ("It's terrible that..."), Low Frustration Tolerance, Damning Self/Others.

## Behavioral Therapy
Key theorists: Pavlov (classical conditioning), Skinner (operant conditioning), Watson, Wolpe (systematic desensitization), Bandura (social learning). Core assumption: behavior is learned and can be unlearned; focus on observable behavior, not internal states.

| Type | Key concept | Example | Clinical application |
|---|---|---|---|
| Classical conditioning | Pairing neutral stimulus with unconditioned stimulus until neutral elicits response | Bell → salivation (Pavlov) | Phobias, PTSD triggers |
| Operant conditioning | Behavior shaped by consequences (reinforcement/punishment) | Rat presses lever for food (Skinner) | Behavior modification, token economies |
| Observational learning | Learning by watching others (modeling) | Child mimics parent (Bandura) | Social skills training, modeling |

**Reinforcement schedules**: Continuous (every time — fastest acquisition, fastest extinction), Fixed Ratio (after a fixed number of responses — high response rate, pause after reward), Variable Ratio (unpredictable number — highest and most consistent response rate; why gambling is addictive; MOST RESISTANT to extinction), Fixed Interval (fixed time period — scallop pattern), Variable Interval (unpredictable time — steady, consistent response rate).

**Key behavioral techniques**: systematic desensitization (Wolpe — pair relaxation with graduated anxiety hierarchy; reciprocal inhibition), exposure and response prevention/ERP (exposure while preventing compulsive response — first-line for OCD), flooding/implosion (immediate full exposure, less common due to distress), token economy, shaping (reinforcing successive approximations), modeling, assertiveness training, biofeedback.`,
      },
      {
        id: 'cp-04-brief-family-narrative',
        title: 'SFBT, Narrative & Family Systems',
        content_md: `## Solution-Focused Brief Therapy
Key theorists: Steve de Shazer, Insoo Kim Berg. Core assumption: clients have strengths and resources; focus on solutions, not problems; change is inevitable. Key concepts: exceptions (times the problem doesn't occur), client strengths, preferred future, small achievable goals.

**Signature techniques**: Miracle Question ("If a miracle happened overnight and your problem was solved, what would be different?" — helps identify goals), Scaling Questions ("On a scale of 1–10, how close are you to your goal?" — measures progress/motivation), Exception Questions ("When is the problem less severe? What were you doing differently?" — locates existing competencies), Coping Questions ("How have you managed to cope despite the difficulty?" — highlights resilience), Formula First Session Task (notice what you want to continue happening in your life — builds on positives before the next session).

SFBT does NOT explore the history or cause of problems. If a question asks for an approach focused on the past or root causes, SFBT is NOT the answer. If it asks for strength-based, brief, future-focused — SFBT is likely correct.

## Narrative Therapy
Key theorists: Michael White, David Epston. Core concept: problems are separate from people; dominant problem stories can be "reauthored"; language shapes reality. Key techniques: externalization ("the problem is the problem, not the person"), deconstruction, unique outcomes/exceptions, re-authoring, witnessing, letter writing, definitional ceremonies. Best used for: clients with shame-based identities, eating disorders, trauma, cultural oppression narratives.

## Family Systems Theories
| Approach | Developer | Key concepts | Techniques |
|---|---|---|---|
| Structural | Salvador Minuchin | Boundaries, subsystems, hierarchy, enmeshment, disengagement | Enactment, joining, reframing, boundary-making |
| Strategic | Jay Haley, Cloe Madanes | Symptom as communication, power hierarchies, sequences | Directives, paradoxical interventions, ordeals, reframing |
| Bowen/Multigenerational | Murray Bowen | Differentiation of self, triangulation, emotional cut-off, genogram | Genogram, I-positions, differentiation coaching, detriangulation |
| Experiential | Virginia Satir, Carl Whitaker | Communication styles, self-worth, congruence | Family sculpting, communication stances, joining |
| Milan Systemic | Selvini Palazzoli et al. | Circular causality, hypothesizing, neutrality | Circular questioning, positive connotation, rituals |

Bowen's "differentiation of self" refers to the ability to maintain one's identity while remaining emotionally connected to others. TRIANGULATION = involving a third party to reduce tension between two people. Genograms are a Bowen technique.`,
      },
      {
        id: 'cp-05-ebp-by-diagnosis',
        title: 'Evidence-Based Treatment by Diagnosis (Memorize This Table)',
        content_md: `This is the highest-yield section for exam questions. You must know the FIRST-LINE evidence-based treatment for each major diagnosis. When the exam says "most appropriate" or "best," it means the most evidence-based option.

| Diagnosis/condition | First-line treatment | Supporting approaches | Key notes |
|---|---|---|---|
| MDD | CBT, Behavioral Activation | IPT, MBCT (relapse prevention), psychodynamic | MBCT prevents relapse in recurrent depression |
| GAD | CBT (worry exposure, relaxation) | ACT, MBSR | CBT with relaxation training; worry postponement |
| Panic Disorder | CBT with interoceptive exposure | PCT, medication (SSRIs) | Psychoeducation + breathing retraining + exposure |
| Social Anxiety Disorder | CBT (cognitive restructuring + exposure) | CBGT (group CBT) | Group format often preferred for social practice |
| Specific Phobia | Exposure therapy | EMDR, CBT | Exposure is gold standard; meds generally ineffective alone |
| PTSD | Prolonged Exposure (PE), CPT, EMDR | TF-CBT (children), narrative exposure | CPT: trauma-focused cognitive therapy; PE: in vivo + imaginal exposure |
| OCD | ERP | CBT, ACT | ERP is gold standard; SSRIs as adjunct |
| BPD | DBT | Mentalization-Based Therapy, Schema Therapy | DBT: biosocial model; skills in 4 modules |
| Substance Use Disorders | Motivational Interviewing + CBT | 12-Step facilitation, contingency management | MI for ambivalence; CBT for relapse prevention |
| Eating Disorders (AN) | Family-Based Treatment (FBT/Maudsley) | CBT-E | FBT: parents take control of refeeding first |
| Eating Disorders (BN/BED) | CBT-E, DBT | IPT, guided self-help CBT | CBT-E most researched for BN and BED |
| ADHD (children) | Behavioral parent training, school interventions | CBT (older adolescents) | Medication + behavioral = combined treatment |
| Autism Spectrum Disorder | Applied Behavior Analysis (ABA) | Social skills training, CBT for anxiety | Early intensive behavioral intervention (EIBI) |
| Childhood Trauma/Abuse | Trauma-Focused CBT (TF-CBT) | CPP (under 5), EMDR | TF-CBT: trauma narrative + caregiver component |
| Schizophrenia | CBT for psychosis (CBTp) | Social skills training, family psychoeducation | Medication is primary; CBTp addresses delusions/hallucinations |
| Grief/Bereavement | Complicated grief treatment (CGT) | IPT, person-centered | Normal grief does not require formal treatment |
| Chronic Pain | ACT, CBT | Mindfulness, biofeedback | ACT: values-based living despite pain |
| Insomnia | CBT-I | Stimulus control, sleep restriction, relaxation | CBT-I is MORE effective than medication long-term |
| Anger Management | CBT, relaxation training | DBT (distress tolerance) | Relaxation + cognitive restructuring + problem-solving |
| Couples | Emotionally Focused Therapy (EFT), IBCT, Gottman Method | Behavioral couples therapy | EFT: attachment bonds; Gottman: 4 horsemen prediction |

**Exam tip**: CBT is the most commonly correct answer for anxiety and depression generally — but specific problems have specific first-line answers (OCD → ERP, BPD → DBT, PTSD → PE/CPT/EMDR). Know the exceptions.`,
      },
      {
        id: 'cp-06-mi-emdr-dbt',
        title: 'Motivational Interviewing, EMDR & DBT Skills in Depth',
        content_md: `## Motivational Interviewing
A collaborative, client-centered counseling style for eliciting behavior change by helping clients explore and resolve ambivalence.

**MI Spirit — PACE**: Partnership (collaboration, not expert-to-recipient), Acceptance (absolute worth, accurate empathy, autonomy support, affirmation), Compassion (actively promoting client welfare), Evocation (drawing out the client's own motivations and strengths, not installing them).

**The four processes of MI**: Engaging (establishing the therapeutic relationship), Focusing (identifying and maintaining a direction), Evoking (drawing out the client's own motivations for change), Planning (developing commitment and a concrete plan).

**OARS — core MI skills**: Open-ended questions, Affirmations (recognizing client strengths), Reflections (repeating/paraphrasing/reflecting feeling — the key MI skill), Summaries (collecting and linking what the client has said).

**Change talk vs. sustain talk**: Change talk follows **DARN-CAT** — Desire, Ability, Reason, Need (preparatory); Commitment, Activation, Taking Steps (mobilizing). Sustain talk = arguments for NOT changing; should not be reinforced or challenged directly. Discord = interpersonal friction in the relationship.

Pair MI with the Stages of Change (Prochaska & DiClemente): Precontemplation, Contemplation, Preparation, Action, Maintenance, Relapse. Match intervention to stage: reflective listening for precontemplation; evoking change talk for contemplation; planning for preparation/action.

## EMDR (Eye Movement Desensitization and Reprocessing)
Developer: Francine Shapiro. Theory: traumatic memories are inadequately processed and stored dysfunctionally; bilateral stimulation facilitates Adaptive Information Processing (AIP). **8 phases**: history-taking, preparation, assessment, desensitization, installation, body scan, closure, reevaluation. Mechanism: bilateral stimulation (eye movements, taps, tones) while processing the traumatic memory. Evidence base: strong evidence for PTSD; recognized by WHO, APA, VA/DoD as first-line PTSD treatment. Best used for: PTSD, trauma, phobias, panic — NOT recommended as primary treatment for psychosis or dissociative disorders without modification.

## Prolonged Exposure (PE) Therapy
Developer: Edna Foa. Components: psychoeducation, breathing retraining, in vivo exposure (real-world), imaginal exposure (verbal retelling of the trauma), processing. Theory: avoidance maintains PTSD; emotional processing through activation and habituation breaks the fear network. Evidence: strongest evidence base for PTSD; typically 8–15 sessions.

## Cognitive Processing Therapy (CPT)
Developer: Patricia Resick. Focus: addresses "stuck points" — maladaptive beliefs about trauma, self, others, and world. Themes: safety, trust, power/control, esteem, intimacy. Techniques: impact statement, ABC worksheets, challenging questions, patterns of problematic thinking. Format: 12 sessions; group or individual; widely used in VA settings.

## DBT's four skills modules
| Module | Purpose | Key skills |
|---|---|---|
| Mindfulness | Core skill; foundation of all other modules | Wise mind, what/how skills, observe, describe, participate, non-judgmentally, one-mindfully, effectively |
| Distress Tolerance | Tolerating crises without making things worse | TIPP, ACCEPTS, self-soothe, IMPROVE the moment, pros/cons, radical acceptance, turning the mind |
| Emotion Regulation | Reducing vulnerability; changing unwanted emotions | Check the facts, opposite action, PLEASE, problem-solving, ride the wave |
| Interpersonal Effectiveness | Maintaining relationships and self-respect | DEAR MAN (get what you want), GIVE (relationship), FAST (self-respect) |

DBT's biosocial theory: BPD develops from a biological predisposition to emotional sensitivity combined with an invalidating environment. Dialectics = balancing acceptance AND change. Know all four modules and their key acronyms.`,
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
        content_md: `## What ACS encompasses
The Administration, Consultation & Supervision (ACS) domain covers three overlapping areas:
- **Administration**: documentation/recordkeeping, fees/billing, technology, agency policies, scope of practice, professional credentials
- **Consultation**: seeking/providing professional input from colleagues, supervisors, or interdisciplinary team members; referral practices; coordination of care
- **Supervision**: the formal supervisory relationship — supervisor responsibilities, supervisee development, gatekeeping, vicarious liability, models of supervision

## Why candidates struggle with ACS
- They assume ethical intuition is sufficient — but the exam tests whether you know the specific ACA standards
- They confuse ethical obligations with legal ones — related but distinct, both tested
- They select overly cautious actions (hospitalizing every client who mentions hopelessness) or insufficiently cautious ones (proceeding without consultation when high-risk situations require it)
- They don't know WHERE in the ACA Code the answer lives

## The ACS decision hierarchy — apply to every ethical scenario
1. Is there a **SAFETY** concern? — address before ethics analysis
2. Is there a **LEGAL** obligation? — mandatory reporting, Tarasoff, HIPAA, subpoenas
3. What does the **ACA CODE** say? — specific section and standard
4. What does **CLINICAL JUDGMENT** say? — proportionate response, least restrictive option
5. **CONSULT and DOCUMENT** — when uncertain, consult; always document reasoning

When in doubt: consult a supervisor, take the most conservative clinically appropriate action, and document everything.

## The ACA Code — complete section guide
The 2014 ACA Code of Ethics is organized into 9 major sections (A–I) plus Preamble and Purpose. Heaviest exam emphasis: A, B, C, F, H.

| Section | Title | Key content |
|---|---|---|
| A | The Counseling Relationship | Informed consent, boundaries, multiple/dual relationships, sexual contact prohibitions, termination, abandonment, pro bono, bartering, gifts, end-of-life decisions, client welfare, documentation, technology |
| B | Confidentiality and Privacy | Confidentiality duties/limits, exceptions, minors, group/family confidentiality, records, third-party payers, consultation, deceased clients, technology |
| C | Professional Responsibility | Competence boundaries, impairment, continuing education, advertising/misrepresentation, credentials, discrimination, supervision of students, scientific basis for practice |
| D | Relationships with Other Professionals | Collegial relationships, interdisciplinary teamwork, consultation, referrals, employee/employer relationships, conflicting agency policies |
| E | Evaluation, Assessment, and Interpretation | Competence in assessment, informed consent for assessment, release of information, diagnosis, cultural sensitivity, forensic evaluations |
| F | Supervision, Training, and Teaching | Supervisor responsibilities, supervisory relationships, supervisee evaluation, gatekeeping, multiple relationships in supervision |
| G | Research and Publication | Informed consent in research, deception, confidentiality, publication ethics, plagiarism, authorship |
| H | Distance Counseling, Technology, and Social Media | Competence with technology, informed consent for distance counseling, confidentiality online, records, crisis plans, licensure jurisdiction |
| I | Resolving Ethical Issues | Ethical decision-making, consultation about ethics, informal resolution, reporting violations, cooperation with ethics bodies |

## The six core ethical principles
| Principle | Definition | Clinical expression | Violation examples |
|---|---|---|---|
| Autonomy | Respecting the client's right to self-determination | Informed consent, respecting right to refuse treatment | Deciding what's "best" without client input; coercing decisions |
| Beneficence | Acting in the client's best interest | Evidence-based approaches, maintaining competence | Providing ineffective treatment; withholding needed referral |
| Nonmaleficence | Avoiding harm — "first, do no harm" | Ending therapy appropriately; appropriate boundaries | Exploitative dual relationships; sexual contact; practicing while impaired |
| Justice | Treating all clients fairly | Sliding-scale fees; serving underserved populations | Refusing services based on protected characteristics |
| Fidelity | Honoring commitments, being trustworthy | Maintaining confidentiality; keeping appointments | Abandoning clients; misrepresenting qualifications |
| Veracity | Being honest with clients and professionally | Accurate disclosure of credentials/approach/prognosis | Misrepresenting qualifications; false promises about outcomes |

## The ACA ethical decision-making framework (Section I)
1. Identify the problem clearly — what ethical principles are implicated?
2. Apply the ACA Code — is there a specific standard that addresses this?
3. Determine the nature and dimensions of the dilemma — who are the relevant parties and competing interests?
4. Generate possible courses of action, including doing nothing
5. Consider potential consequences of each option — who benefits, who is harmed, short- and long-term?
6. Consult — seek input, document the consultation
7. Choose and implement the best course of action; document reasoning
8. Evaluate the outcome`,
      },
      {
        id: 'acs-02-confidentiality',
        title: 'Confidentiality and Its Limits',
        content_md: `## The duty of confidentiality
Confidentiality requires counselors to protect all information shared by clients from disclosure to third parties without informed, voluntary consent — this includes the content of sessions, the fact of treatment itself, records, information from collateral sources, and electronic communications.

## Exceptions — know every one
| Exception | What it requires | Key points |
|---|---|---|
| Risk to self (imminent suicidal intent) | Breach to protect the client when there is imminent, serious risk the client cannot/will not address voluntarily | Threshold is IMMINENT and SERIOUS, not all SI. Try least restrictive first |
| Risk to others (Tarasoff) | Take reasonable steps to protect an identifiable third party from a credible, serious threat | Specific target + credible threat + serious harm |
| Child/elder abuse (mandatory reporting) | Report reasonable suspicion to CPS/APS | Threshold is reasonable suspicion, not certainty; you don't investigate |
| Court orders/legal process | A valid court order compels disclosure | Distinguish from a subpoena — don't comply with a subpoena without consent or court order |
| Third-party payer billing | Info shared with insurers for billing/utilization review | Inform clients during consent; minimum necessary standard |
| Consultation with supervisors/colleagues | Info shared for improving client care | Inform clients cases may be discussed in supervision; minimum necessary |
| Danger to public health | Some states require reporting communicable disease/public health threats | Varies significantly by jurisdiction |
| Waiver by client | Written, informed, voluntary authorization | Must specify what/to whom/for what purpose/expiration; revocable |

## Tarasoff and the duty to protect — deep dive
*Tarasoff v. Regents of the University of California* (1976): a UC Berkeley student told his therapist he intended to kill a specific woman. The therapist notified campus police but did NOT warn her. She was killed; her family sued. The California Supreme Court held therapists have a duty to warn identifiable potential victims of credible threats of serious harm — later modified to a duty to **PROTECT** (which may or may not require direct warning; could mean hospitalization, notifying police, etc.). TRIGGER: credible, serious threat + specific, identifiable target. Vague threats do NOT automatically trigger — assess credibility and specificity.

**Step-by-step Tarasoff response**: (1) conduct a thorough homicide risk assessment (specificity, plan, means, intent, history); (2) consult with a supervisor/colleague immediately; (3) document the threat, assessment, consultation, reasoning; (4) take protective action proportionate to risk (warn the victim, notify law enforcement, pursue hospitalization, increase contact frequency); (5) continue monitoring and document all subsequent actions.

Exam tips: Tarasoff does NOT require warning for every expression of anger — it requires credible, serious threats to specific people. "I could kill my boss" casually is NOT the same as a named target, method, time, place. The duty can be fulfilled by warning AND/OR notifying police AND/OR hospitalization. Tarasoff DOES require breaching confidentiality even without client consent when the threat is credible.

## Confidentiality vs. privilege — critical distinction
| CONFIDENTIALITY | PRIVILEGED COMMUNICATION |
|---|---|
| An ETHICAL obligation (also codified in licensing laws) | A LEGAL concept protecting communications from compelled disclosure in legal proceedings |
| Governs all professional communications | Only relevant in court/legal process |
| Belongs to the therapeutic relationship/professional | Belongs to the CLIENT — only the client can waive it |
| Counselor can breach to protect safety (within ethical limits) | Client (or attorney) decides whether to waive; counselor asserts privilege if client wants it maintained |
| Governed by ACA Code Section B + state licensing laws | Governed by state law (varies); federal courts have psychotherapist-patient privilege (*Jaffee v. Redmond*, 1996) |

## Confidentiality in special contexts
**Group therapy**: the counselor cannot legally enforce confidentiality among group members — only the professional is legally bound. Establish confidentiality as a group norm during informed consent; reinforce regularly; address violations therapeutically.

**Minors**: parents generally have legal right to access records, but automatic disclosure of everything can destroy the therapeutic alliance. Best practice: negotiate a confidentiality agreement with both minor and parent at the outset. State law governs — many states allow minors to consent to their own treatment for specific issues (substance use, sexual health, mental health crises). Always protect information that could endanger the minor.

**After death**: the duty of confidentiality extends after a client's death; records may be released to authorized representatives of the estate, but professional discretion and minimum necessary information apply.`,
      },
      {
        id: 'acs-03-consent-relationships',
        title: 'Informed Consent & Multiple Relationships',
        content_md: `## The three elements of valid informed consent
| Element | What it requires | How it's violated |
|---|---|---|
| Information | All information reasonably necessary: nature/purpose, risks/benefits, alternatives, confidentiality limits, qualifications, fees, right to refuse | Partial information; technical jargon; failing to describe alternatives or disclose risks |
| Capacity | Cognitive/psychological capacity to understand and make a rational decision (different from legal competence) | Obtaining consent from someone in acute psychosis, severe intoxication, or cognitive impairment |
| Voluntariness | Given freely, without coercion, manipulation, undue influence, or duress | Obtaining consent where the client feels coerced; pressuring toward specific decisions |

Informed consent is NOT a signed form — it is an ongoing process, revisited when the treatment approach changes significantly, new interventions with different risk profiles are introduced, the client's condition changes, significant new information emerges, or supervisory status/technology changes.

**What must be included** (ACA A.2): nature/purposes of services, goals of the relationship, counselor's qualifications/credentials/supervisory status, potential benefits/risks, alternative approaches, confidentiality and its limits, technology use, fee structure/billing/nonpayment consequences, right to refuse/withdraw at any time without penalty, right to ask questions, third-party payer information sharing.

**Special consent issues**: Minors generally cannot provide legal consent — assent should always be sought even when legal consent comes from parents; emancipated minors and the "mature minor doctrine" vary by state. Clients with cognitive/psychiatric impairment need a legal guardian/authorized representative, but the client's assent is still sought; capacity can change and should be reassessed. Court-mandated clients: voluntariness is compromised — inform explicitly; describe what will/won't be reported to the court; consent to treatment and consent to release information to the court are separate.

## Multiple (dual) relationships
A multiple relationship exists when a counselor is in a professional role with a person AND simultaneously has another professional role, a personal relationship, or a business relationship with them. The ACA Code (Section A.5) does NOT prohibit all multiple relationships — it requires careful analysis of potential harm.

| Category | Description | Required action |
|---|---|---|
| Absolutely prohibited | Sexual/romantic interactions with current clients; sexual contact with former clients within 5 years of termination; sexual contact with supervisees/students/research participants under direct authority | No analysis needed — never permitted |
| Potentially harmful — requires analysis | Non-sexual dual relationships where roles could impair objectivity or create exploitation risk | Apply harm analysis: could this impair objectivity, harm, or exploit the client? Consult; document analysis and monitoring |
| Unavoidable — manage carefully | Rural community practice, small cultural communities, unavoidable social contact | ACA A.6.e explicitly acknowledges these — minimize harm, increase consultation, document, monitor, consider referral if unmanageable |

**The five-year rule for former clients** (Section A.5.b): sexual/romantic interactions with former clients are prohibited for a MINIMUM of 5 years after last professional contact; even after 5 years, the counselor bears the burden of demonstrating the relationship is NOT exploitative (considering duration of prior therapy, vulnerability, circumstances of termination). The prohibition applies to family members/romantic partners of clients as well.

**Gifts**: not absolutely prohibited but require ethical analysis — consider the therapeutic relationship, cultural background (gift-giving as a norm in some cultures), value of the gift, and the counselor's motivation. Small, culturally normative gifts may be appropriate to accept (refusing can damage the alliance); large/ongoing gifts are likely problematic.

**Bartering** (Section A.10.e): permitted ONLY if not clinically contraindicated, the relationship isn't exploitative, the client requests it, and an equivalent exchange can be established. Contraindicated when the client has boundary issues or the arrangement could impair objectivity. Document the agreement, terms, and clinical rationale.`,
      },
      {
        id: 'acs-04-legal-standards',
        title: 'Legal Standards: HIPAA, Subpoenas, Commitment, Reporting',
        content_md: `## HIPAA essentials
HIPAA is federal law governing privacy/security of Protected Health Information (PHI). HIPAA and state confidentiality laws work together — follow whichever provides MORE protection.

| Provision | What it means |
|---|---|
| PHI | Any individually identifiable health information in any form — diagnosis, treatment, notes, billing, demographics combined with health info |
| Notice of Privacy Practices (NPP) | Written notice describing PHI use/disclosure; provided at first service delivery; client acknowledges receipt |
| Minimum necessary standard | Share only the minimum PHI necessary for the purpose |
| Right to access records | Clients can inspect/copy their PHI (limited exceptions); respond within 30 days |
| Authorization requirements | Most non-routine disclosures require written authorization specifying what/to whom/purpose/expiration |
| Psychotherapy notes | EXTRA protection — not part of the standard medical record, require specific authorization |
| Security Rule | Administrative/physical/technical safeguards for ePHI — encryption, password protection, secure storage |
| Business Associate Agreements | Vendors handling PHI (billing, telehealth, cloud storage) must sign a BAA |
| Breach notification | Affected clients must be notified per HIPAA timelines |

Most-tested HIPAA points: minimum necessary standard; psychotherapy notes have extra protection; clients have record access rights (can't simply refuse without documented clinical justification); telehealth requires HIPAA-compliant platforms (consumer FaceTime/Zoom alone doesn't qualify without a BAA); a subpoena is NOT a HIPAA authorization.

## Subpoenas and court orders
| SUBPOENA | COURT ORDER |
|---|---|
| A REQUEST issued by an attorney, not a judge | A COMMAND issued by a JUDGE |
| Does NOT compel immediate compliance | DOES compel compliance — failure can result in contempt |
| Client's privilege can be asserted | Privilege has already been addressed by the court |
| First step: notify the client; consult an attorney | Consult an attorney; comply with the specific scope |
| Do NOT release records immediately | Release only what the order specifically requires |

**Step-by-step subpoena response**: notify the client immediately; contact the client's attorney if they have one (may file a motion to quash); consult your own attorney; assert privilege on the client's behalf in writing if they don't want records released; wait for further legal guidance; if ordered by a court, comply releasing only what's specifically ordered; document everything.

## Involuntary psychiatric commitment
General criteria (vary by state): presence of mental illness; imminent danger to self/others due to mental illness AND/OR grave disability (unable to care for basic needs); least restrictive alternative has been considered and is insufficient.

**The 72-hour hold**: an emergency psychiatric hold for up to 72 hours of involuntary evaluation/treatment; can be initiated by a counselor (where permitted), physician, police, or designated professional. Purpose is emergency evaluation, not long-term treatment. After 72 hours: release, voluntary admission, or formal commitment proceedings.

Exam points: imminent danger is required — general risk without imminence is NOT sufficient; refusing voluntary hospitalization does not automatically mean involuntary commitment is appropriate; counselors are NOT typically the ones who physically initiate holds; document clinical reasoning thoroughly; involuntary commitment does not sever the therapeutic relationship — follow up after discharge.

## Mandatory reporting
**Child abuse/neglect**: mandated reporters in ALL 50 states; individual obligation (can't delegate to a supervisor); triggered by REASONABLE SUSPICION; prompt action required (often within 24–48 hours); document observations factually and the report itself (date, time, who, what, CPS report number); good-faith reporters are immune from civil liability.

**Elder/dependent adult abuse**: many states require reporting to Adult Protective Services; covers physical, emotional, sexual abuse, financial exploitation, neglect, self-neglect; same reasonable-suspicion threshold.

## Scope of practice
Within scope (LPC/LMHC): psychotherapy, counseling, mental health assessment, DSM-5-TR diagnosis and treatment planning, crisis intervention/safety planning, individual/group/family/couples counseling, consulting/coordinating with other providers. Outside scope: prescribing/recommending medication changes, neuropsychological testing (without specific training), medical diagnosis/treatment decisions, forensic evaluations without forensic training, representing yourself as a psychologist/psychiatrist. When a client's needs are outside your competence: acknowledge the limitation, seek supervision/training while continuing to serve the client if safe, refer to a qualified specialist, bridge the care rather than abandon.`,
      },
      {
        id: 'acs-05-documentation',
        title: 'Documentation — Clinical and Legal Records',
        content_md: `"If it isn't documented, it didn't happen" is the governing principle of clinical practice.

## Types of clinical records
- **Treatment record (medical record)**: intake assessment, diagnosis, treatment plan, progress notes, discharge summary, consent forms, releases, correspondence — subject to HIPAA; clients generally have right of access
- **Psychotherapy notes (process notes)**: personal impressions, reactions, hypotheses beyond standard documentation — EXTRA HIPAA protection, kept SEPARATE from the medical record
- **Intake/biopsychosocial assessment**: comprehensive initial evaluation
- **Treatment plan**: diagnosis, goals, objectives, interventions, level of care, frequency
- **Progress notes**: session-by-session documentation (SOAP, DAP, BIRP formats)
- **Discharge summary**: treatment summary, progress, reason for termination, aftercare plan
- **Releases of information/authorizations**
- **Consultation notes**: who was consulted, what was discussed/recommended/decided

## Progress note formats — know all three
| Format | Components | When used |
|---|---|---|
| SOAP | Subjective (client's self-report) / Objective (clinician's observations, MSE) / Assessment (clinical impressions, progress, diagnostic considerations) / Plan (next steps) | Most common in integrated healthcare; medical-model settings |
| DAP | Data (what occurred — combined) / Assessment (clinical analysis) / Plan | Common in mental health outpatient; more streamlined |
| BIRP | Behavior (what the client did/said) / Intervention (what the counselor did) / Response (how the client responded) / Plan | Popular in behavioral health; explicitly documents counselor activity |

## What every progress note must contain
Date/time/duration of service; type of service; client's current presenting status; session content and interventions used; client's response to interventions; progress toward goals; risk assessment if any safety concern is present; plan for next session; counselor's signature, credentials, date.

## Record retention requirements
Adults: typically 7 years from last contact (some states longer). Minors: typically 7 years from last contact OR 3 years after reaching age of majority, whichever is longer. HIPAA requires 6 years from creation/last in effect — but state law governs if it requires longer. Electronic records must be backed up, encrypted, protected like paper records. Destruction must protect confidentiality (shredding, secure deletion).

## Documentation and risk management
Documentation is the counselor's primary protection in legal/ethical proceedings. Document as if a judge or ethics committee will read every note:
- Document ALL safety-related conversations — SI, HI, risk assessment results, safety plans
- Document clinical REASONING, not just facts ("I assessed the client as low risk because..." is more defensible than "Client denied SI")
- Document all consultations — who, when, what was said/decided
- Document refusal of services — if a client declines a referral/recommendation, document that risks were explained and the client declined
- NEVER alter previous documentation — for an error, draw a single line through it, write "error," initial, date, write the correct information
- Never document in pencil; do not document opinions about other parties, only facts relevant to treatment`,
      },
      {
        id: 'acs-06-supervision',
        title: 'Clinical Supervision, Consultation & Professional Practice',
        content_md: `## Consultation and referral
Consultation is a sign of competent practice, not weakness (ACA Section D.2). Consult when: a client is high-risk (suicidal, homicidal, in crisis); an ethical dilemma is unclear; a client's needs are outside your competence; a case is unusual/complex; legal questions about clinical practice arise; a colleague's ethical violation is suspected; decisions about level of care are needed.

**Referral process** (ACA A.11.b): discuss the referral openly with the client, explaining rationale and exploring feelings; provide specific referrals (names, numbers, resources), not just "look online"; bridge the care — don't terminate until the new provider is in place; obtain a release of information to communicate with the new provider; document the referral.

**Abandonment vs. appropriate termination**: Abandonment = terminating without adequate notice, clinical justification, or referral when the client still needs services. Appropriate termination = ending when goals are met or the relationship is no longer beneficial, WITH adequate notice (typically 30 days when possible) and referral. You cannot terminate simply because a client is difficult or misses appointments. Never terminate with a high-risk client without ensuring safety and care transition.

## The three functions of clinical supervision
| Function | Description | Examples |
|---|---|---|
| Educative (Formative) | Teaching clinical knowledge, skills, professional identity | Teaching assessment skills, demonstrating techniques, feedback on case conceptualization |
| Administrative (Normative) | Ensuring quality/compliance, monitoring/evaluating | Reviewing/co-signing notes, monitoring caseload, ensuring legal/ethical compliance, gatekeeping |
| Supportive (Restorative) | Addressing emotional wellbeing, vicarious trauma, burnout | Processing countertransference, supporting self-care |

## Supervision models to know
- **Integrated Developmental Model (IDM — Stoltenberg & Delworth)**: three developmental levels — Level 1 (high anxiety, rule-focused, dependent), Level 2 (fluctuating confidence, more autonomous but inconsistent), Level 3 (stable, integrated identity, can self-supervise). Supervisors adjust style to the supervisee's developmental level.
- **Discrimination Model (Bernard)**: supervisor takes on different ROLES (Teacher, Counselor, Consultant) and focuses on different AREAS (Intervention skills, Conceptualization, Personalization) based on supervisee needs.
- **CBT Supervision**: collaborative agenda, homework review, skills demonstration, Socratic questioning
- **Psychodynamic Supervision**: parallel process, countertransference, unconscious dynamics
- **Systemic Supervision** (live, video, bug-in-the-ear): real-time, in-session feedback

## Ethical issues in supervision — most tested
**Vicarious liability**: supervisors are legally/ethically accountable for supervisees' clinical work; must actively monitor, not just be available; must intervene when supervisee conduct endangers clients.

**Informed consent in supervision**: clients must know their counselor is supervised, know the supervisor's name/contact info, and consent to their information being discussed in supervision (ACA F.1.c).

**Sexual/romantic relationships**: ACA F.3.a-b ABSOLUTELY PROHIBITS sexual/romantic relationships between supervisors and supervisees — a permanent prohibition, not subject to the five-year provision.

**Gatekeeping**: supervisors must conduct fair, timely, documented evaluations; inform supervisees of evaluation criteria in advance; provide remediation plans for deficiencies; recommend against licensure/continuation when a supervisee is not competent or ethical.

**The parallel process**: a psychodynamic concept — relationship dynamics from the therapeutic relationship are often unconsciously mirrored in the supervisory relationship, providing diagnostic data about what's happening in therapy.

## Telehealth and distance counseling (ACA Section H)
Licensure jurisdiction is based on where the CLIENT is physically located, not the counselor. HIPAA-compliant technology is required (consumer platforms need a BAA). Separate/additional informed consent addresses technology limitations, privacy risks, what to do if technology fails. Crisis planning must be SPECIFIC to the client's remote location (local ER, crisis hotline, emergency contact) — not the counselor's local resources. Clients need a private space for sessions. Counselors should not connect with clients on personal social media.

## Responding to colleagues' ethical violations (graduated response, ACA I.2)
1. Assess whether it's actually a violation, not a misunderstanding
2. Consider informal resolution — address it directly with the colleague (preferred first step when appropriate)
3. If informal resolution isn't possible/appropriate, consult a supervisor or ethics board before formal action
4. If the violation involves harm to clients or is serious, report to the licensing board/ethics committee

Immediate formal reporting is required for: sexual contact with a current client by any colleague; ongoing serious harm to clients; criminal activity related to practice; violations too severe for informal resolution.

## Conflicts between agency policy and ethics (ACA D.1.g)
Clarify whether it's a real ethical conflict; attempt resolution through legitimate channels; document the conflict in writing; consult; if unresolvable, the counselor must uphold ethical standards even if it means refusing to follow the policy. "My agency told me to" does not excuse ethical obligations.`,
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
        content_md: `## What the SC domain tests
This domain tests whether you can: accurately identify the client's primary presenting needs (chief complaint vs. underlying concerns, immediate vs. longer-term); recognize how cultural factors shape presentation, help-seeking, and response to treatment; identify contextual factors (environmental, systemic, relational, socioeconomic) that maintain or exacerbate the problem; adapt clinical decisions to the specific client rather than generic protocols; recognize strengths and resilience, not just deficits; identify when advocacy is part of the clinical response.

The core question the exam always asks: given everything you know about THIS specific client — identity, history, culture, context, strengths — what do they need MOST, RIGHT NOW?

**Three traps to resist**: (1) seeing the diagnosis but not the person; (2) ignoring cultural context because "therapy is therapy"; (3) focusing only on deficits and missing strengths, community resources, and resilience.

## Three levels of presenting need
| Level | Description | Example |
|---|---|---|
| Immediate/crisis need | What the client needs RIGHT NOW to be safe and stable — always takes precedence | Active SI with a plan → safety assessment precedes everything else |
| Presenting problem (chief complaint) | What brought the client to therapy — may or may not be the deepest concern | "I've been feeling down and can't get out of bed" — depressive symptoms on the surface |
| Underlying/contextual needs | Deeper concerns and unmet needs that maintain the presenting problem | Grief, isolation, acculturation stress, or practical needs (childcare, employment) underneath the depression |

## Distinguishing wants from needs
Clients often know what they WANT but may not fully recognize what they NEED. The clinical skill is honoring the stated want while expanding assessment — without dismissing the client's voice.
- WANTS: "I want you to help me convince my husband to change." → NEEDS: skills for assertive communication; exploration of relationship health; possibly couples therapy
- WANTS: "I want medication to fix my anxiety." → NEEDS: psychoeducation, CBT skills, possibly psychiatric evaluation, exploration of underlying causes
- WANTS: "I want to feel less depressed." → NEEDS: comprehensive assessment including safety, medical causes, trauma history, social context, evidence-based treatment

## Needs assessment across domains
Safety needs (always first); psychiatric/clinical needs; medical needs; social support needs; cultural and identity needs; economic and material needs; educational/informational needs; legal and advocacy needs; spiritual/existential needs; strengths and resilience needs.

Exam priority order: Safety > immediate crisis > medical stabilization > therapeutic engagement. A client cannot engage in CBT for depression while homeless and hungry — address basic needs as part of the treatment context. Cultural needs are not an optional add-on; they are central to every clinical decision. Strength identification informs treatment planning by identifying resources to build on.`,
      },
      {
        id: 'sc-02-bpsc-cfi',
        title: 'The Biopsychosocial-Cultural Model & Cultural Formulation Interview',
        content_md: `## From BPS to BPSC
The traditional biopsychosocial model extends to the **biopsychosocial-cultural (BPSC)** model — culture is not an optional consideration but a foundational dimension of human experience and health.

| Biological | Psychological | Social | Cultural |
|---|---|---|---|
| Genetics, neurobiology, medical conditions, medications/substances, sleep/appetite/physical health, neurological functioning, genetic vulnerabilities, physical disability | Cognitive patterns, emotional regulation, coping strategies, trauma history, attachment history, insight/self-awareness, motivation for change | Family system, social support network, socioeconomic status, employment/housing, community connections, peer relationships, legal/immigration status | Cultural identity/worldview, explanatory models of illness, acculturation and identity negotiation, discrimination/racism experiences, spiritual/religious practices, historical/intergenerational trauma, cultural values around family/gender/help-seeking |

## The Cultural Formulation Interview (CFI)
Included in the DSM-5-TR — a structured set of questions to systematically explore the cultural context of distress. Four domains:
1. **Cultural definition of the problem** — how does the client (and their community) understand and describe what's wrong?
2. **Cultural perceptions of cause, context, and support** — what does the client believe caused it? What does the community say? Who do they turn to?
3. **Cultural factors affecting self-coping and past help-seeking** — what has the client tried? What worked?
4. **Cultural factors affecting current help-seeking** — what does the client expect from treatment? What concerns do they have?

The CFI is not a checklist — it's a collaborative exploration. The client is the expert on their own cultural experience; the counselor's role is to listen and incorporate what they learn.

## Explanatory models of illness
Clients and communities have their own explanations for mental health problems that may differ dramatically from the DSM medical model.

| Model | Example expression | Clinical implication |
|---|---|---|
| Moral/spiritual | "God is testing me." "This is punishment for past sins." | Engage with the spiritual framework; explore meaning; involve pastoral support if desired; never dismiss spirituality |
| Social/relational | "My family is making me sick." "I am carrying everyone's pain." | Family-systems approaches may be more culturally aligned; involve family with consent |
| Physical/somatic | "I have a weak heart." "My nerves are broken" (nervios). "I suffer from susto (fright sickness)." | Somatic symptoms may be the culturally accepted expression of psychological distress; address both; coordinate with medical providers |
| Structural/social | "I am depressed because I am poor and discriminated against." "My anxiety comes from not knowing if I will be deported." | Validate systemic factors as real; advocacy may be part of the clinical response; CBT alone may be insufficient when the "thinking error" is actually accurate perception of real injustice |
| Biomedical/psychiatric | "I have a chemical imbalance." "I need medication." | May align with biomedical treatment; also may reflect internalized pathologizing; explore the client's understanding |`,
      },
      {
        id: 'sc-03-cultural-humility',
        title: 'Cultural Humility & the Sue et al. Tripartite Model',
        content_md: `## Cultural competence vs. cultural humility
| CULTURAL COMPETENCE | CULTURAL HUMILITY |
|---|---|
| Knowledge-based model — learning facts about cultural groups | Process-based model — ongoing self-reflection and openness to learning |
| Goal: achieve competence (a standard to reach) | Goal: lifelong learning and genuine partnership with clients |
| Risk: can lead to stereotyping ("I now know how X culture works") | Recognizes the limits of any generalized cultural knowledge |
| Focus: counselor's knowledge, skills, awareness | Focus: client as the expert on their own cultural experience |
| Sue et al.'s Tripartite Model: Awareness → Knowledge → Skills | Tervalon & Murray-García: self-critique, recognition of power imbalances, institutional accountability |

Cultural humility does NOT mean abandoning cultural knowledge — it means holding that knowledge loosely and always privileging the client's specific experience over generalizations about their group. It's the preferred contemporary framework.

## Sue, Arredondo & McDavis (1992) — Tripartite Model
| Domain | What it requires | How to develop it |
|---|---|---|
| Awareness (of self) | Understanding your own cultural background, values, biases, worldview, and where your "defaults" are | Personal reflection, diversity training, personal therapy, supervision |
| Knowledge (of others) | Understanding worldviews, historical experiences, cultural practices, and social realities of diverse clients — including historical trauma, acculturation, systemic oppression | Continuing education, community engagement, consultation, humility about the limits of generalized knowledge |
| Skills (in practice) | Using culturally appropriate, adapted, effective interventions — adapting evidence-based treatments, involving families, using interpreters, advocating | Supervised practice, cultural consultation, client feedback |

## Applying multicultural competencies in practice
Exploring the client's cultural identity and its relevance ("How do you identify culturally? How important is your background in understanding what you're going through?"); adapting the therapeutic approach to cultural context (directive vs. non-directive; individual vs. family-focused); using culturally relevant language; involving family/community with consent when appropriate; addressing power/privilege differences in the relationship; recognizing and repairing microaggressions if they occur.

## Intersectionality (Crenshaw, 1989)
Describes how multiple social identities — race, gender, class, sexuality, disability, immigration status — overlap and interact to create unique experiences of privilege and oppression that cannot be understood by examining any single identity in isolation.

**Example**: a 32-year-old undocumented Guatemalan transgender woman presenting with severe depression and anxiety — her distress cannot be understood through any single identity. It's shaped by immigration status (fear of deportation), race/ethnicity (discrimination), gender identity (transphobia, elevated violence risk for trans women of color), economic status (poverty, housing insecurity), language access, and trauma history. An effective response must address all these dimensions — not just the DSM diagnosis. Advocacy may be part of the clinical role.`,
      },
      {
        id: 'sc-04-race-racism',
        title: 'Race, Ethnicity, and the Impact of Racism',
        content_md: `Race and racism are central clinical considerations, not peripheral diversity topics. Experiences of racial discrimination are associated with significantly elevated rates of depression, anxiety, PTSD, and chronic health problems.

## Race-based traumatic stress (Carter, 2007)
Refers to the psychological impact of racist experiences — direct encounters, witnessing racism, and exposure to racist systems/structures. Can produce symptoms overlapping with PTSD (intrusion, avoidance, hyperarousal) and must be assessed in clients of color.

| Type | Description |
|---|---|
| Individual racism | Direct, personal encounters — refused service, targeted by police, slurs, harassment. Produces acute and chronic stress responses |
| Institutional/structural racism | Systemic policies/practices disadvantaging people of color — disparities in education, housing, healthcare, criminal justice, wealth |
| Cultural racism | Societal belief that European/White cultural values/standards are superior — media representation, beauty standards, curriculum |
| Internalized racism | Marginalized groups internalizing negative societal messages — shame about identity, colorism, preference for "whiteness" |
| Microaggressions | Brief, commonplace verbal/behavioral/environmental slights — cumulative effect is as harmful as major incidents |

## Racial identity development
Understanding where a client is in racial identity development helps understand their relationship to their own identity and to a counselor of a different race.

**Cross's Nigrescence Model (Black Identity Development)**: Pre-encounter (internalized dominant culture norms, racial identity not salient) → Encounter (a significant racial event disrupts the status quo, triggers awareness) → Immersion-Emersion (deep immersion in Black culture, may reject White culture) → Internalization (secure, positive Black identity that can engage with White culture without feeling threatened).

**Helms's White Racial Identity Development**: Contact (oblivious/dismissive of racism, colorblind ideology) → Disintegration (awareness of racism and privilege begins, anxiety/guilt/shame) → Reintegration (may revert to denial, defensive about privilege) → Pseudo-Independence (intellectual acknowledgment without personal exploration) → Autonomy (secure, non-racist identity, actively anti-racist).

Clinical relevance: a client at the Encounter stage may present with acute distress following a racism incident; a counselor at the Contact stage may not recognize or validate that experience.

## Clinical considerations for specific groups

### Black/African American clients
Key needs: race-based traumatic stress and racial grief; historical distrust of medical/mental health systems (Tuskegee, forced sterilization, misdiagnosis history); strong church/faith community as protective factor; cultural value of strength/self-reliance creating stigma around help-seeking; hypervigilance as an adaptive response to real racial danger, NOT paranoia. Cultural considerations: Afrocentrism and collectivist values; church as central to identity/coping; expressive coping styles (music, humor, spirituality); skin tone/colorism within community; diverse identities (West Indian, African, African American). Pitfalls: don't interpret hypervigilance as paranoia; don't minimize when race is central to the client's distress; acknowledge power dynamics if the counselor is White; build alliance before assessment.

### Latinx/Hispanic clients
Key needs: acculturation stress and biculturalism; immigration-related anxiety (including for U.S.-born clients with immigrant family); somatic expression of distress (nervios, susto, ataques de nervios); familismo pressures; language barriers; machismo/marianismo role expectations. Cultural considerations: familismo (family as primary unit), personalismo (warm, relational style preferred over formal/distant), respeto (deep respect for authority — may not challenge the counselor even when disagreeing), simpatía (preference for smooth interactions), folk healing (curanderismo, espiritismo — not pathology). Pitfalls: don't treat as homogeneous (enormous within-group diversity: Mexican, Puerto Rican, Cuban, Salvadoran, Guatemalan); don't pathologize somatic symptoms without exploring cultural meaning; respeto may mean the client agrees but doesn't follow through — check understanding.

### Asian American clients
Key needs: mental health stigma and fear of bringing shame to the family; somatic presentation (headaches, fatigue, pain); academic/professional pressure ("model minority" myth); intergenerational conflict between traditional values and individualism; anti-Asian racism and xenophobia (heightened since COVID-19). Cultural considerations: collectivism (group harmony, family honor prioritized); loss of face (deeply stigmatizing to reveal problems/weakness); emotional restraint (open expression may not be normative); filial piety; enormous within-group diversity (East, South, Southeast Asian, Pacific Islander); historical trauma (internment, colonization, refugee experiences). Pitfalls: don't assume silence means acceptance; don't interpret emotional restraint as flat affect; don't apply the "model minority" narrative — it masks real distress; treat somatization as also emotional, not merely physical.`,
      },
      {
        id: 'sc-05-lgbtq-religion-ses',
        title: 'LGBTQ+, Religious/Spiritual & Socioeconomic Factors',
        content_md: `## Minority Stress Theory (Meyer, 2003)
The foundational framework for LGBTQ+ mental health: LGBTQ+ individuals experience unique stressors from their stigmatized identity that contribute to mental health disparities.
- **Distal stressors (external)**: actual experiences of discrimination, rejection, victimization, violence — job loss, family rejection, harassment, hate crimes
- **Proximal stressors (internal)**: internalization of stigma — internalized homophobia/transphobia, stigma consciousness, concealment
- **Coping and resilience**: LGBTQ+ community connectedness, pride, identity integration, social support are powerful protective factors
- **Intersecting minority stressors**: LGBTQ+ people of color, with disabilities, or who are immigrants face compounded, unique stress

## Clinical vocabulary
Sexual orientation (enduring pattern of attraction — not a choice); gender identity (internal, deeply held sense of gender, may or may not match sex assigned at birth); gender expression (external presentation); sex assigned at birth (classification based on anatomy/chromosomes/hormones); transgender (gender identity differs from sex assigned at birth); non-binary (identities outside the binary); pronouns (using correct pronouns is basic respect — misgendering is harmful); gender dysphoria (clinically significant distress from incongruence — gender identity itself is not pathological); sexual fluidity (attraction that can shift over time/context); queer (reclaimed umbrella term — follow the client's language).

## Affirming practice competencies
Using the client's chosen name and correct pronouns without exception; not treating sexual orientation/gender identity as pathological or the cause of all distress; creating a welcoming environment (inclusive intake forms, affirming imagery/language); assessing minority stressors explicitly; assessing safety (elevated violence risk, particularly for trans women of color and youth in unsupportive homes); knowing when to affirm medical transition and when to assess co-occurring needs alongside it; involving family only with explicit client direction (disclosure can be life-threatening for some); understanding the coming-out process is non-linear and ongoing.

**Conversion therapy**: condemned by ACA, APA, AMA, NASW, and virtually all major professional health organizations; associated with serious psychological harm (depression, anxiety, PTSD, suicidal ideation); banned for minors in a growing number of states/countries; never clinically indicated. If a client or parent requests it, the ethical response is to decline, provide psychoeducation about the harm, and offer affirming care.

**LGBTQ+ youth**: 4x more likely to attempt suicide than heterosexual/cisgender peers; parental rejection is one of the strongest predictors of negative outcomes including homelessness; LGBTQ+ youth with at least one affirming adult have 40% lower odds of attempting suicide; school-based bullying is a major stressor. Counselors must assess family acceptance/rejection, assess school safety, provide identity affirmation, and advocate within school systems.

## Religious and spiritual needs
| RELIGION | SPIRITUALITY |
|---|---|
| Organized, institutionalized practice of faith | A personal relationship with the sacred/transcendent/ultimate meaning |
| Specific beliefs, practices, rituals, community | May or may not involve organized religion |
| Provides community, structure, doctrine, identity | Provides personal meaning, connection, transcendence, purpose |
| Can be a source of protection or harm (shame, exclusion, abuse) | Can also be a source of distress (spiritual bypassing, spiritual abuse) |

**FICA spiritual assessment**: Faith/beliefs ("Do you consider yourself spiritual or religious? What beliefs matter most?"), Importance ("How important is this in your daily life?"), Community ("Are you part of a spiritual community? Is it a source of support?"), Address in care ("How would you like me to consider your beliefs in our work together?").

When religion/spirituality is a resource: meaning and purpose, community and social support, coping strategies (prayer, meditation, rituals), a moral/values framework, hope. When it's a clinical concern: religious guilt/shame (especially around sexuality, substance use), religious/spiritual abuse, spiritual bypassing (using spiritual practice to avoid processing pain), conflict between faith and identity (common for LGBTQ+ clients in conservative communities), delusions with religious content, dependence on prayer instead of needed treatment.

Exam strategy: never pathologize religion/spirituality without clear evidence of harm; distinguish normative religious experience (hearing from God, culture-consistent, no impairment, insight present) from command hallucinations (pathological); counselors' own religious/anti-religious beliefs must not shape clinical decisions.

## Socioeconomic and environmental factors
Social determinants — poverty, housing insecurity, food insecurity, unemployment, neighborhood violence, lack of healthcare access — are among the most powerful predictors of mental health outcomes.

| Determinant | Mental health impact | Clinical response |
|---|---|---|
| Poverty/economic insecurity | Chronic stress, hopelessness, limited treatment access, medication non-adherence due to cost | Sliding scale fees, community resource connections, flexible scheduling |
| Housing insecurity/homelessness | Inability to focus on therapeutic work, trauma exposure, social isolation | Address housing before intensive therapy — Maslow's hierarchy is real |
| Food insecurity | Cognitive impairment, depression, anxiety, difficulty focusing in session | Normalize discussion; connect to food banks/SNAP |
| Unemployment | Loss of structure/purpose/income; elevated depression/anxiety | Address occupational goals; vocational rehab referrals |
| Neighborhood violence | PTSD, hypervigilance, restricted mobility, grief | Trauma-informed care; hypervigilance may be adaptive, not pathological |
| Lack of healthcare access | Untreated medical conditions worsening psychiatric symptoms | Care coordination; connect to FQHCs |

## Immigration and acculturation
Pre-migration stressors (persecution, violence, forced displacement), migration stressors (the journey itself), post-migration stressors (acculturation stress, discrimination, legal precarity, language barriers), documentation status (undocumented status creates pervasive anxiety, limits access to services).

**Berry's acculturation framework**: Assimilation (adopting dominant culture, abandoning heritage — high stress if forced) → Integration/Biculturalism (maintaining both — associated with BEST outcomes) → Separation (maintaining heritage, rejecting dominant — can be protective or isolating) → Marginalization (loss of connection to both — WORST outcomes).`,
      },
      {
        id: 'sc-06-populations-strengths-advocacy',
        title: 'Special Populations, Disability, Strengths & Advocacy',
        content_md: `## Models of disability
| MEDICAL MODEL | SOCIAL MODEL |
|---|---|
| Disability = defect/deficit within the individual | Disability = created by barriers in society |
| Goal: cure, fix, rehabilitate | Goal: remove societal barriers |
| Person-first language ("person with a disability") | Identity-first language ("autistic person," "Deaf person") preferred by many in the community |
| Locates the problem IN the person | Locates the problem in SOCIETY and environment |

Follow the client's lead on language and framing — ask how they think about their disability. Do NOT assume disability equals depression — many people with disabilities report high quality of life (the "disability paradox"). Ableism (discrimination against people with disabilities) must be examined in the counselor's own assumptions.

## Neurodiversity
Views autism, ADHD, dyslexia, and other neurodevelopmental differences as natural variations, not disorders to be cured. Autistic clients may have different communication styles (direct, logical, preference for clarity over social convention) and sensory sensitivities — adapt clinical approach accordingly. ADHD clients benefit from structure, shorter interventions, visual aids — traits like time blindness are not willful. Masking (suppressing one's natural neurotype, especially common in autistic women and people of color) causes extreme exhaustion — validate the cost.

## Special populations

### Children (3–12)
Key needs: developmental assessment relative to the child's own trajectory; family system impact (child therapy without family involvement is rarely sufficient); ACEs (the most impactful factor for long-term outcomes); play as the primary medium for assessment/treatment. Pitfalls: don't apply adult standards; don't ignore parents/caregivers — their engagement predicts outcome. Key EBTs: play therapy, TF-CBT, family involvement.

### Adolescents (13–18)
Key needs: identity development (Erikson: Identity vs. Role Confusion); peer relationships as central social context; social media/cyberbullying; substance use experimentation; LGBTQ+ identity development. Pitfalls: don't dismiss distress as "just a phase"; balance confidentiality with safety; don't apply adult CBT without developmental adaptation. Individual rapport comes before family involvement in most cases; assess peer relationships and social media use in every case.

### Older adults (65+)
Key needs: grief/bereavement (multiple compressed losses); social isolation; physical health comorbidities; cognitive changes (normal aging vs. MCI vs. dementia); elder abuse. Pitfalls: don't assume depression is "normal" aging; don't mistake cognitive changes for depression or vice versa. **Pseudodementia**: depression can mimic dementia — treat the depression first. Suicide risk is HIGHEST in older white males. Life review/reminiscence therapy is evidence-based and developmentally appropriate.

### Veterans and active duty military
Key needs: combat-related PTSD; TBI (produces psychiatric symptoms); Military Sexual Trauma (MST — underreported, affects men and women); reintegration challenges; moral injury (violation of deeply held moral beliefs in combat); elevated suicide risk especially post-discharge. Cultural considerations: military culture values self-reliance/toughness (stigma around help-seeking); unit cohesion and rank structure. Pitfalls: don't use civilian trauma frameworks without adaptation; don't assume all symptoms are PTSD (TBI, moral injury, grief present similarly but need different treatment). PE and CPT are first-line; assess for MST in all veterans; moral injury needs meaning-making interventions alongside PTSD treatment.

## The ecological systems model (Bronfenbrenner)
Microsystem (immediate environment: family, school, peers, workplace) → Mesosystem (connections between microsystems) → Exosystem (indirect systems: a parent's workplace, neighborhood policies) → Macrosystem (broad cultural/political/economic context) → Chronosystem (the dimension of time: historical events, life transitions).

## Strengths-based practice and resilience
Strengths-based practice builds treatment on what is already working, not just what's wrong: identifying strengths in every intake; framing formulations with protective factors alongside risk factors; building goals on what the client wants/values/is capable of; using exceptions to identify what's already working; connecting clients to cultural strengths.

**Types of strengths to assess**: individual psychological (problem-solving, humor, perseverance), relational (quality relationships, mentors, support network), cultural (identity, traditions, community belonging), spiritual/existential (faith, meaning, gratitude), environmental (safe neighborhood, financial stability), past coping successes.

**Resilience research** consistently identifies: at least ONE stable, caring, responsive adult relationship (the single most protective factor across the lifespan); a sense of mastery/self-efficacy; adaptive coping strategies; sense of meaning and purpose; community connectedness (particularly protective for marginalized groups); cultural identity and pride.

## Advocacy as a clinical role (ACA Section A.7)
Advocacy is an ethical responsibility, not an optional extra. When systemic factors contribute to a client's distress, counselors have a responsibility to address those factors, not only the individual symptoms.

| Level | Description | Example |
|---|---|---|
| Client/individual | Advocating for a specific client within systems | Writing a disability-claim support letter; coordinating a 504 plan |
| Community/group | Advocating for policy/systemic change affecting multiple clients | Presenting to a school board about LGBTQ+ student needs |
| Public policy | Engaging in social/political advocacy | Advocating for mental health parity legislation |

**ACA Advocacy Competencies** (Lewis et al., 2002): Client Empowerment (help clients advocate for themselves), Client Advocacy (speak on behalf of clients who can't effectively advocate), Community Collaboration, Systems Advocacy (change institutional policies), Public Information, Social/Political Advocacy.

Recognize when advocacy is the clinical responsibility: distress primarily caused by systemic factors (discrimination, poverty, unsafe housing); a child in a school not providing legally mandated accommodations; a client facing healthcare discrimination; a client with a disability denied reasonable workplace accommodations. Treating symptoms without addressing ongoing systemic harm is clinically insufficient — and potentially unethical.`,
      },
    ],
  },
];

module.exports = modules;
module.exports.default = modules; // interop for `import modules from '../data/modules'`
