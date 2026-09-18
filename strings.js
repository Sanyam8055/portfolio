/* ═══════════════════════════════════════════════════════════
   Translations.

   English is the source of truth. Any key missing from another
   language falls back to English automatically, so a partial
   translation is always safe to ship — you can fill these in a
   few at a time and nothing breaks.

   STATUS
     en  complete
     hi  complete
     te  short strings only — body prose intentionally absent,
         so it falls back to English. NEEDS A NATIVE PROOFREAD.
     or  short strings only — same. NEEDS A NATIVE PROOFREAD.

   To finish Telugu or Odia: copy a key from `en`, translate the
   value, drop it into that language's object. That's the whole
   process — no build step, no tooling.
   ═══════════════════════════════════════════════════════════ */

window.STRINGS = {

  /* ─────────────────────────── ENGLISH ─────────────────────── */
  en: {
    "activity.summit.link": "announcement \u2192",
    "activity.pairs.paper": "the paper \u2192",
    "activity.pairs.event": "the symposium \u2192",
    "activity.pairs.watch": "watch the talk \u2192",
    "activity.pairs.meta": "Talk with Sanyam and Jona Repishti \u00b7 PAIRS India, 18 February 2026 \u00b7 Participatory AI Research &amp; Practice Symposium",
    "activity.pairs.title": "Reinforcement Learning from Human Feedback for Localizing Quality Agricultural Advice using Gen AI",
    "nav.activity": "activity",
    "activity.title": "Out in the world",
    "activity.note": "\u2014 talks and rooms I\u2019ve stood in front of",
    "activity.summit.title": "Making Generative AI Work for Farmers: Aligning Agricultural AI with Human Feedback",
    "activity.summit.meta": "60-minute masterclass \u00b7 India AI Impact Summit 2026 \u00b7 JAN AI Pavilion, Bharat Mandapam, New Delhi",
    "activity.summit.body": "A session on what it actually takes to make generative AI safe, actionable and context-aware for farming advice \u2014 and on deploying Farmer.Chat, which reaches smallholder farmers through text, voice and photographs.",
    "activity.pairs.body": "PAIRS is an international symposium on participatory AI \u2014 moving from consulting communities to actually co-designing and auditing systems with them. A fitting room for this work: how feedback from agronomists and farmers gets turned into advice that is local, correct and worth acting on, rather than advice that merely sounds authoritative.",
    "reach.phoneCopy": "phone · click to copy",
    "reach.phoneReveal": "tap to show my number",
    "reach.whatsappText": "WhatsApp me",
    "reach.phone": "phone",
    "reach.whatsapp": "fastest way to reach me",
    "a11y.skip": "Skip to the work",
    "cover.langsWhy": "choose your fighter",
    "stat.wer": "peak word-error cut",
    "uda.shotCaption": "every pixel given a class \u2014 road, pavement, car, person. the model has never seen a real street.",

    "bihar.idx": "Case 01 / 2026 / published / first author",
    "bihar.title": "A small model that out-argues the frontier on Bihar's crops",
    "bihar.body": "Ask a vanilla frontier model about a crop in Bihar and you get advice that is fluent, generic and occasionally invented \u2014 the worst combination when a wrong answer costs someone a harvest. So we split the problem in two. A LoRA fine-tune on <em>golden facts</em> \u2014 atomic, expert-verified units of agricultural knowledge \u2014 handles recall. A separate stitching layer turns those facts into something a farmer would actually want to read: culturally appropriate, safety-aware, plain. Fine-tuning lifted fact recall and F1 substantially, and the stitching layer pushed the safety subscores up without flattening the conversation.",
    "bihar.n1": "golden facts",
    "bihar.n2": "fact recall",
    "bihar.n3": "safe, plain reply",
    "bihar.flowNote": "\u2014 scored by DG-EVAL against expert ground truth, not Wikipedia",
    "bihar.foot": "The headline: a fine-tuned smaller model reaches comparable or better factual quality than frontier models, at a fraction of the cost. The farmerchat-prompts library is released with the paper.",
    "bihar.link": "read the paper \u2192",

    "red.idx": "Case 03 / 2026",
    "red.title": "180 ways to make a farming assistant misbehave",
    "red.body": "I spent a while trying to break our own production chatbot on purpose: 180 adversarial prompts across 17 categories of risk. It worked more often than I'd like. Restricted agrochemicals could be coaxed out with the right framing. Refusals that held firm in English went soft in other languages. And nothing was checking the model's output on the way back out. Every finding left with a mitigation and a regression test attached, which is the only part that actually counts.",
    "red.tallyCaption": "180 prompts \u00b7 17 categories",
    "red.link": "the test suite →",

    "uda.idx": "Case 04 / 2021\u201322 / IISc",
    "uda.title": "Before the language models, I taught machines to see",
    "uda.body": "A segmentation model trained on video-game streets is confident and wrong the moment it meets a real one. At the Video Analytics Lab under Dr. R. Venkatesh Babu I worked on closing that gap without a single labelled real image: train on synthetic GTA5 and SYNTHIA frames, validate on real Cityscapes streets, and write losses aimed squarely at the distance between them. Partial learning from pretrained weights pulled the target-domain error down further.",
    "uda.k1": "synthetic",
    "uda.k2": "real",
    "uda.gap": "domain gap",
    "uda.flowNote": "\u2014 custom losses + partial learning from pretrained weights, no real labels",

    "voice.idx": "Case 02 / 2026 / published",
    "voice.title": "Teaching a machine to hear a farmer over a running tractor",
    "voice.body": "Field recordings are a mess: machinery, a TV in the next room, three people talking at once, and vocabulary no general ASR model has met \u2014 the crop, pest, chemical and quantity words that carry the whole meaning of the question. We built a pipeline that fixes the transcription <em>without</em> retraining the ASR model underneath it: gated audio enhancement, diarization that picks out the farmer and discards the bystanders, domain-aware correction against a weighted agricultural lexicon, and a quality gate that flags transcripts nobody should trust. Only the diarization stage is fine-tuned.",
    "voice.chartTitle": "Word error rate, reduced \u2014 relative %",
    "voice.chartNote": "the big one is diarization \u2014 just picking the right speaker",
    "voice.foot": "Tested on human-annotated Hindi, Telugu and Odia recordings. All reductions statistically significant.",
    "voice.link": "read the paper \u2192",
    "startups.alloan.role": "Founding AI Consultant",
    "startups.alloan.body": "AI analytics for lending, founded by Princeton PhDs. I build the AI side of it: guided agents and workflows over ABF, their in-house language for loan analytics, plus training models through agents.",
    "startups.alloan.link": "how we verify AI-written code →",
    "startups.ria.role": "Stood up the ML function",
    "startups.ria.body": "Decision infrastructure for private capital — AI due diligence and deal management for funds and founders. I helped start their ML wing and get it off the ground.",
    "startups.mentormate.role": "Conversational AI",
    "startups.mentormate.body": "Built the conversational AI behind their product \u2014 the dialogue design, the model work, and the plumbing that keeps a conversation coherent past the second turn. The hard part was never generating a reply; it was knowing when to ask, when to answer, and when to hand over to a person.",
    "legend.internship": "internship",

    "span.dg": "Agentic AI frameworks, supervised fine-tuning and evaluation, with the World Bank, OpenAI, Harvard and MIT.",
    "span.scrut": "Built V2 from nothing and led five people to the company's first AI product.",
    "span.meetrecord": "Owned every AI and NLP service end to end — coaching insights, GPT-powered query resolution, pitch generation, bottleneck detection, keyword discovery.",
    "span.iisc": "Unsupervised domain adaptation under Dr. R. Venkatesh Babu — synthetic-to-real segmentation, custom losses for the domain gap, partial learning from pretrained weights.",
    "span.svag": "Statistics, ML and computer vision under Dr. Savita Choudhary; co-authored RainRoof.",
    "span.brain": "Stress estimation and atrial-fibrillation detection from ECG, for a biofeedback device.",
    "span.umoove": "Rebuilt eye tracking on a Siamese architecture: 35% faster, 20% better validation accuracy.",
    "span.inkers": "Custom ResNet estimating attributes across a 10,000-person dataset.",
    "span.nfactorial": "Hand-built CNNs for emotion classification, 91% accurate.",
    "span.omdena": "CNNs for forest-fire detection; the thing still runs.",
    "about.p1": "I came into this from computer vision — domain adaptation, ECG signals, eye tracking — and spent the years since owning AI products end to end, prototype through production. What I like now is the unglamorous half: the judges, the adversarial batteries, the preference data. The measurement apparatus is what separates a demo from something a farmer can lean on, and almost nobody wants to build it.",
    "about.p2": "A farmer asking which pesticide to spray on a dying crop needs an answer that is right, in her own language, and honest when it doesn't know. Most of my job is finding out which of those three we just broke.",
    "about.p3": "Outside of that: mountains, film cameras, and an ongoing argument with myself about whether evaluation is a science yet.",

    "nav.work": "work",
    "nav.startups": "startups",
    "nav.history": "history",
    "nav.papers": "papers",
    "nav.hello": "hello",

    "cover.dateline": "Bengaluru · notebook opened September 2026",
    "cover.greeting": "Hello",
    "cover.role": "Lead ML · Digital Green · Founding AI Consultant · 8 years in",
    "cover.lede": "I build AI systems for places where being wrong has a cost — and then I try to break them before the world does. Eight years of it: LLM alignment and evaluation, speech, agentic systems, computer vision. I lead ML at Digital Green, and I help startups take AI from a convincing demo to something that survives production.",
    "cover.ctaText": "Building something?",
    "cover.ctaLink": "Let's talk about it →",
    "cover.place": "Bengaluru, India",
    "cover.caption": "somewhere in the Western Ghats, off duty",

    "stat.years": "years building ML",
    "stat.papers": "papers published",
    "stat.broke": "ways I broke our chatbot",

    "startups.title": "I help startups build",
    "startups.note": "— advisory, hands on keyboard, not slideware",
    "startups.lead": "Companies I\u2019ve helped build the AI for",
    "startups.cue": "open",
    "startups.more": "— and a handful of others over the years. Ask me.",

    "work.title": "What I've been working on",
    "work.note": "— the four things worth showing",


    "chart.cloud": "cloud ASR",
    "chart.device": "on-device",
    "chart.full": "full corpus",
    "chart.multi": "multi-speaker",




    "history.title": "Where I've been",
    "history.note": "— tap any row to open it. Overlaps are real; I was doing two things at once.",
    "legend.industry": "industry",
    "legend.research": "research",

    "papers.title": "Things I helped write",
    "papers.note": "— five of them, newest first",
    "papers.firstAuthor": "first<br>author",

    "about.title": "A bit more, if you're still here",
    "spec.studied": "studied",
    "spec.works": "works in",
    "spec.tools": "reaches for",
    "spec.speaks": "speaks",
    "spec.worksVal": "LLM evaluation & alignment · agentic systems · multilingual safety · speech",
    "spec.speaksVal": "English · Hindi",

    "award.nasa": "NASA Space Apps Challenge — Karnataka winner",
    "award.ideate": "Ideate — winner",
    "award.buildathon": "Build-A-thon — first runner up",
    "award.finalist": "Finalist: IIM Bangalore NSRCEL & Rehack IncubateIND",

    "hello.title": "Say hello",
    "hello.note": "— building something, or want a second pair of eyes on it? I answer to all of these.",
    "reach.email": "email · click to copy",
    "reach.code": "code",
    "reach.linkedin": "the formal one",
    "reach.papers": "both of them",

    "footer.left": "Written by hand, more or less. No framework, no tracking, no cookie banner.",
    "langNote": ""
  },

  /* ─────────────────────────── हिन्दी ──────────────────────── */
  hi: {
    "activity.summit.link": "\u0918\u094b\u0937\u0923\u093e \u2192",
    "activity.pairs.paper": "\u092a\u0947\u092a\u0930 \u2192",
    "activity.pairs.event": "\u0938\u093f\u092e\u094d\u092a\u094b\u091c\u093f\u092f\u092e \u2192",
    "activity.pairs.watch": "\u091f\u0949\u0915 \u0926\u0947\u0916\u0947\u0902 \u2192",
    "activity.pairs.meta": "\u0938\u0902\u092f\u092e \u0914\u0930 \u091c\u094b\u0928\u093e \u0930\u0947\u092a\u093f\u0936\u094d\u091f\u0940 \u0915\u0947 \u0938\u093e\u0925 \u091f\u0949\u0915 \u00b7 PAIRS India, 18 \u092b\u093c\u0930\u0935\u0930\u0940 2026 \u00b7 Participatory AI Research &amp; Practice Symposium",
    "activity.pairs.title": "\u092e\u093e\u0928\u0935 \u092a\u094d\u0930\u0924\u093f\u0915\u094d\u0930\u093f\u092f\u093e \u0938\u0947 \u0930\u093f\u0907\u0902\u092b\u094b\u0930\u094d\u0938\u092e\u0947\u0902\u091f \u0932\u0930\u094d\u0928\u093f\u0902\u0917: \u091c\u0947\u0928\u0947\u0930\u0947\u091f\u093f\u0935 AI \u0938\u0947 \u0915\u0943\u0937\u093f \u0938\u0932\u093e\u0939 \u0915\u093e \u0938\u094d\u0925\u093e\u0928\u0940\u092f\u0915\u0930\u0923",
    "nav.activity": "\u0917\u0924\u093f\u0935\u093f\u0927\u093f",
    "activity.title": "\u092c\u093e\u0939\u0930 \u0915\u0940 \u0926\u0941\u0928\u093f\u092f\u093e \u092e\u0947\u0902",
    "activity.note": "\u2014 \u091f\u0949\u0915 \u0914\u0930 \u0935\u0947 \u092e\u0902\u091a \u091c\u0939\u093e\u0901 \u092e\u0948\u0902 \u0916\u0921\u093c\u093e \u0939\u0941\u0906",
    "activity.summit.title": "\u0915\u093f\u0938\u093e\u0928\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f \u091c\u0947\u0928\u0947\u0930\u0947\u091f\u093f\u0935 AI: \u0915\u0943\u0937\u093f AI \u0915\u094b \u092e\u093e\u0928\u0935 \u092a\u094d\u0930\u0924\u093f\u0915\u094d\u0930\u093f\u092f\u093e \u0938\u0947 \u0905\u0932\u093e\u0907\u0928 \u0915\u0930\u0928\u093e",
    "activity.summit.meta": "60 \u092e\u093f\u0928\u091f \u0915\u093e \u092e\u093e\u0938\u094d\u091f\u0930\u0915\u094d\u0932\u093e\u0938 \u00b7 India AI Impact Summit 2026 \u00b7 \u092d\u093e\u0930\u0924 \u092e\u0902\u0921\u092a\u092e, \u0928\u0908 \u0926\u093f\u0932\u094d\u0932\u0940",
    "activity.summit.body": "\u0916\u0947\u0924\u0940 \u0915\u0940 \u0938\u0932\u093e\u0939 \u0915\u0947 \u0932\u093f\u090f \u091c\u0947\u0928\u0947\u0930\u0947\u091f\u093f\u0935 AI \u0915\u094b \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924, \u0909\u092a\u092f\u094b\u0917\u0940 \u0914\u0930 \u0938\u0902\u0926\u0930\u094d\u092d-\u0938\u091c\u0917 \u092c\u0928\u093e\u0928\u0947 \u092e\u0947\u0902 \u0935\u093e\u0915\u093c\u0908 \u0915\u094d\u092f\u093e \u0932\u0917\u0924\u093e \u0939\u0948 \u2014 \u0914\u0930 Farmer.Chat \u0915\u094b \u0924\u0948\u0928\u093e\u0924 \u0915\u0930\u0928\u0947 \u092a\u0930, \u091c\u094b \u091f\u0947\u0915\u094d\u0938\u094d\u091f, \u0906\u0935\u093e\u091c\u093c \u0914\u0930 \u0924\u0938\u094d\u0935\u0940\u0930\u094b\u0902 \u0915\u0947 \u091c\u093c\u0930\u093f\u090f \u0915\u093f\u0938\u093e\u0928\u094b\u0902 \u0924\u0915 \u092a\u0939\u0941\u0901\u091a\u0924\u093e \u0939\u0948\u0964",
    "activity.pairs.body": "PAIRS \u092d\u093e\u0917\u0940\u0926\u093e\u0930\u0940 \u0935\u093e\u0932\u0947 AI \u092a\u0930 \u090f\u0915 \u0905\u0902\u0924\u0930\u094d\u0930\u093e\u0937\u094d\u091f\u094d\u0930\u0940\u092f \u0938\u093f\u092e\u094d\u092a\u094b\u091c\u093f\u092f\u092e \u0939\u0948 \u2014 \u0938\u092e\u0941\u0926\u093e\u092f\u094b\u0902 \u0938\u0947 \u0938\u0932\u093e\u0939 \u0932\u0947\u0928\u0947 \u0938\u0947 \u0906\u0917\u0947 \u092c\u0922\u093c\u0915\u0930 \u0909\u0928\u0915\u0947 \u0938\u093e\u0925 \u092e\u093f\u0932\u0915\u0930 \u0938\u093f\u0938\u094d\u091f\u092e \u092c\u0928\u093e\u0928\u0947 \u0914\u0930 \u092a\u0930\u0916\u0928\u0947 \u0915\u0940 \u092c\u093e\u0924\u0964 \u0907\u0938 \u0915\u093e\u092e \u0915\u0947 \u0932\u093f\u090f \u0938\u0939\u0940 \u091c\u0917\u0939: \u0915\u0943\u0937\u093f \u0935\u093f\u0936\u0947\u0937\u091c\u094d\u091e\u094b\u0902 \u0914\u0930 \u0915\u093f\u0938\u093e\u0928\u094b\u0902 \u0915\u0940 \u092a\u094d\u0930\u0924\u093f\u0915\u094d\u0930\u093f\u092f\u093e \u0915\u094b \u0910\u0938\u0940 \u0938\u0932\u093e\u0939 \u092e\u0947\u0902 \u092c\u0926\u0932\u0928\u093e \u091c\u094b \u0938\u094d\u0925\u093e\u0928\u0940\u092f, \u0938\u0939\u0940 \u0914\u0930 \u0905\u092e\u0932 \u0932\u093e\u092f\u0915 \u0939\u094b \u2014 \u0928\u093e \u0915\u093f \u0938\u093f\u0930\u094d\u092b\u093c \u0930\u094b\u092c\u0926\u093e\u0930 \u0932\u0917\u0928\u0947 \u0935\u093e\u0932\u0940\u0964",
    "red.link": "टेस्ट सूट →",
    "reach.phoneCopy": "फ़ोन · कॉपी करने के लिए क्लिक करें",
    "reach.phoneReveal": "नंबर देखने के लिए टैप करें",
    "reach.whatsappText": "वोट्सऐप करें",
    "reach.phone": "फ़ोन",
    "reach.whatsapp": "सबसे तेज़ तरीका",
    "a11y.skip": "काम पर जाएँ",
    "red.body": "मैंने काफ़ी समय जान-बूझकर अपने ही प्रोडक्शन चैटबॉट को तोड़ने में लगाया: 17 जोखिम श्रेणियों में 180 एडवर्सेरियल प्रॉम्प्ट। यह उम्मीद से ज़्यादा बार काम कर गया। सही तरीके से पूछने पर प्रतिबंधित कृषि-रसायनों की जानकारी निकल आती थी। जो इनकार अंग्रेज़ी में मज़बूत थे, वे दूसरी भाषाओं में कमज़ोर पड़ जाते थे। और लौटते हुए आउटपुट को कोई जाँच ही नहीं रहा था। हर निष्कर्ष के साथ एक उपाय और एक रिग्रेशन टेस्ट भी गया — असल में वही हिस्सा मायने रखता है।",
    "voice.body": "खेत की रिकॉर्डिंग अस्त-व्यस्त होती है: मशीनों का शोर, बगल के कमरे में चलता टीवी, एक साथ बोलते तीन लोग, और ऐसे शब्द जो किसी सामान्य ASR मॉडल ने कभी सुने ही नहीं — फसल, कीट, रसायन और मात्रा के वे शब्द जिन पर पूरे सवाल का अर्थ टिका होता है। हमने एक ऐसी पाइपलाइन बनाई जो नीचे चल रहे ASR मॉडल को दोबारा ट्रेन किए <em>बिना</em> ट्रांसक्रिप्शन सुधारती है: गेटेड ऑडियो एन्हांसमेंट, डायराइज़ेशन जो किसान की आवाज़ चुनकर बाकी को हटा देता है, कृषि शब्दकोश के आधार पर सुधार, और एक क्वालिटी गेट जो भरोसे लायक न होने वाले ट्रांसक्रिप्ट पर निशान लगा देता है। सिर्फ़ डायराइज़ेशन को फाइन-ट्यून किया गया है।",
    "cover.langsWhy": "जो दिल कहे",
    "stat.wer": "सबसे बड़ी वर्ड एरर कटौती",
    "uda.shotCaption": "हर पिक्सल को एक वर्ग — सड़क, फुटपाथ, कार, इंसान। मॉडल ने कभी असली सड़क देखी ही नहीं।",

    "bihar.idx": "\u0915\u0947\u0938 01 / 2026 / \u092a\u094d\u0930\u0915\u093e\u0936\u093f\u0924 / \u092a\u094d\u0930\u0925\u092e \u0932\u0947\u0916\u0915",
    "bihar.title": "\u090f\u0915 \u091b\u094b\u091f\u093e \u092e\u0949\u0921\u0932, \u091c\u094b \u092c\u093f\u0939\u093e\u0930 \u0915\u0940 \u092b\u0938\u0932\u094b\u0902 \u092a\u0930 \u092b\u093c\u094d\u0930\u0902\u091f\u093f\u092f\u0930 \u092e\u0949\u0921\u0932\u094b\u0902 \u0938\u0947 \u092c\u0947\u0939\u0924\u0930 \u0928\u093f\u0915\u0932\u093e",
    "bihar.body": "\u092c\u093f\u0939\u093e\u0930 \u0915\u0940 \u0915\u093f\u0938\u0940 \u092b\u0938\u0932 \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u0915\u093f\u0938\u0940 \u0938\u093e\u0927\u093e\u0930\u0923 \u092b\u093c\u094d\u0930\u0902\u091f\u093f\u092f\u0930 \u092e\u0949\u0921\u0932 \u0938\u0947 \u092a\u0942\u091b\u093f\u090f \u0914\u0930 \u091c\u0935\u093e\u092c \u092e\u093f\u0932\u0947\u0917\u093e \u2014 \u0938\u0941\u0902\u0926\u0930 \u092d\u093e\u0937\u093e, \u0906\u092e \u0938\u0932\u093e\u0939, \u0914\u0930 \u0915\u092d\u0940-\u0915\u092d\u0940 \u0917\u0922\u093c\u093e \u0939\u0941\u0906\u0964 \u091c\u0939\u093e\u0901 \u090f\u0915 \u0917\u0932\u0924 \u091c\u0935\u093e\u092c \u0915\u093f\u0938\u0940 \u0915\u0940 \u092a\u0942\u0930\u0940 \u092b\u0938\u0932 \u0932\u0947 \u0921\u0942\u092c\u0947, \u0935\u0939\u093e\u0901 \u092f\u0939 \u0938\u092c\u0938\u0947 \u0916\u093c\u0930\u093e\u092c \u092e\u0947\u0932 \u0939\u0948\u0964 \u0907\u0938\u0932\u093f\u090f \u0939\u092e\u0928\u0947 \u0938\u092e\u0938\u094d\u092f\u093e \u0915\u094b \u0926\u094b \u0939\u093f\u0938\u094d\u0938\u094b\u0902 \u092e\u0947\u0902 \u092c\u093e\u0901\u091f\u093e\u0964 <em>\u0917\u094b\u0932\u094d\u0921\u0928 \u092b\u0948\u0915\u094d\u091f\u094d\u0938</em> \u2014 \u0935\u093f\u0936\u0947\u0937\u091c\u094d\u091e\u094b\u0902 \u0926\u094d\u0935\u093e\u0930\u093e \u091c\u093e\u0901\u091a\u0940 \u0917\u0908 \u0915\u0943\u0937\u093f \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0915\u0940 \u091b\u094b\u091f\u0940-\u091b\u094b\u091f\u0940 \u0907\u0915\u093e\u0907\u092f\u093e\u0901 \u2014 \u092a\u0930 LoRA \u092b\u093e\u0907\u0928-\u091f\u094d\u092f\u0942\u0928 \u0924\u0925\u094d\u092f \u092f\u093e\u0926 \u0930\u0916\u0928\u0947 \u0915\u093e \u0915\u093e\u092e \u0915\u0930\u0924\u093e \u0939\u0948\u0964 \u090f\u0915 \u0905\u0932\u0917 \u0938\u094d\u091f\u093f\u091a\u093f\u0902\u0917 \u0932\u0947\u092f\u0930 \u0909\u0928 \u0924\u0925\u094d\u092f\u094b\u0902 \u0915\u094b \u0910\u0938\u0940 \u092d\u093e\u0937\u093e \u092e\u0947\u0902 \u092c\u0926\u0932\u0924\u0940 \u0939\u0948 \u091c\u094b \u0915\u093f\u0938\u093e\u0928 \u0935\u093e\u0915\u093c\u0908 \u092a\u0922\u093c\u0928\u093e \u091a\u093e\u0939\u0947: \u0938\u093e\u0902\u0938\u094d\u0915\u0943\u0924\u093f\u0915 \u0930\u0942\u092a \u0938\u0947 \u0909\u092a\u092f\u0941\u0915\u094d\u0924, \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0914\u0930 \u0938\u0940\u0927\u0940\u0964 \u092b\u093e\u0907\u0928-\u091f\u094d\u092f\u0942\u0928\u093f\u0902\u0917 \u0938\u0947 \u0924\u0925\u094d\u092f \u0930\u093f\u0915\u0949\u0932 \u0914\u0930 F1 \u0915\u093e\u092b\u093c\u0940 \u092c\u0922\u093c\u0947, \u0914\u0930 \u0938\u094d\u091f\u093f\u091a\u093f\u0902\u0917 \u0932\u0947\u092f\u0930 \u0928\u0947 \u0938\u0941\u0930\u0915\u094d\u0937\u093e \u0938\u094d\u0915\u094b\u0930 \u092c\u0922\u093c\u093e\u090f \u2014 \u092c\u093f\u0928\u093e \u092c\u093e\u0924\u091a\u0940\u0924 \u0915\u094b \u0928\u0940\u0930\u0938 \u092c\u0928\u093e\u090f\u0964",
    "bihar.n1": "\u0917\u094b\u0932\u094d\u0921\u0928 \u092b\u0948\u0915\u094d\u091f\u094d\u0938",
    "bihar.n2": "\u0924\u0925\u094d\u092f \u0930\u093f\u0915\u0949\u0932",
    "bihar.n3": "\u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924, \u0938\u0940\u0927\u093e \u091c\u0935\u093e\u092c",
    "bihar.flowNote": "\u2014 DG-EVAL \u0938\u0947 \u0935\u093f\u0936\u0947\u0937\u091c\u094d\u091e \u0938\u0924\u094d\u092f \u0915\u0947 \u0938\u093e\u092e\u0928\u0947 \u092a\u0930\u0916\u093e \u0917\u092f\u093e, \u0935\u093f\u0915\u093f\u092a\u0940\u0921\u093f\u092f\u093e \u0938\u0947 \u0928\u0939\u0940\u0902",
    "bihar.foot": "\u092e\u0941\u0916\u094d\u092f \u092c\u093e\u0924: \u090f\u0915 \u092b\u093e\u0907\u0928-\u091f\u094d\u092f\u0942\u0928 \u0915\u093f\u092f\u093e \u091b\u094b\u091f\u093e \u092e\u0949\u0921\u0932 \u092b\u093c\u094d\u0930\u0902\u091f\u093f\u092f\u0930 \u092e\u0949\u0921\u0932\u094b\u0902 \u0915\u0947 \u092c\u0930\u093e\u092c\u0930 \u092f\u093e \u092c\u0947\u0939\u0924\u0930 \u0924\u0925\u094d\u092f\u093e\u0924\u094d\u092e\u0915 \u0917\u0941\u0923\u0935\u0924\u094d\u0924\u093e \u0926\u0947\u0924\u093e \u0939\u0948, \u0935\u0939 \u092d\u0940 \u0932\u093e\u0917\u0924 \u0915\u0947 \u090f\u0915 \u0905\u0902\u0936 \u092e\u0947\u0902\u0964 farmerchat-prompts \u0932\u093e\u0907\u092c\u094d\u0930\u0947\u0930\u0940 \u092a\u0947\u092a\u0930 \u0915\u0947 \u0938\u093e\u0925 \u091c\u093e\u0930\u0940 \u0915\u0940 \u0917\u0908 \u0939\u0948\u0964",
    "bihar.link": "\u092a\u0947\u092a\u0930 \u092a\u0922\u093c\u0947\u0902 \u2192",

    "red.idx": "\u0915\u0947\u0938 03 / 2026",
    "red.title": "\u0916\u0947\u0924\u0940 \u0915\u0947 \u0905\u0938\u093f\u0938\u094d\u091f\u0947\u0902\u091f \u0915\u094b \u092c\u093f\u0917\u093e\u0921\u093c\u0928\u0947 \u0915\u0947 180 \u0924\u0930\u0940\u0915\u0947",
    "red.tallyCaption": "180 \u092a\u094d\u0930\u0949\u092e\u094d\u092a\u094d\u091f \u00b7 17 \u0936\u094d\u0930\u0947\u0923\u093f\u092f\u093e\u0901",

    "uda.idx": "\u0915\u0947\u0938 04 / 2021\u201322 / IISc",
    "uda.title": "\u092d\u093e\u0937\u093e \u092e\u0949\u0921\u0932 \u0938\u0947 \u092a\u0939\u0932\u0947, \u092e\u0948\u0902\u0928\u0947 \u092e\u0936\u0940\u0928\u094b\u0902 \u0915\u094b \u0926\u0947\u0916\u0928\u093e \u0938\u093f\u0916\u093e\u092f\u093e",
    "uda.body": "\u0935\u0940\u0921\u093f\u092f\u094b \u0917\u0947\u092e \u0915\u0940 \u0938\u0921\u093c\u0915\u094b\u0902 \u092a\u0930 \u091f\u094d\u0930\u0947\u0928 \u0915\u093f\u092f\u093e \u0917\u092f\u093e \u0938\u0947\u0917\u092e\u0947\u0902\u091f\u0947\u0936\u0928 \u092e\u0949\u0921\u0932 \u0905\u0938\u0932\u0940 \u0938\u0921\u093c\u0915 \u0926\u0947\u0916\u0924\u0947 \u0939\u0940 \u092a\u0942\u0930\u0947 \u0906\u0924\u094d\u092e\u0935\u093f\u0936\u094d\u0935\u093e\u0938 \u0915\u0947 \u0938\u093e\u0925 \u0917\u0932\u0924 \u0939\u094b \u091c\u093e\u0924\u093e \u0939\u0948\u0964 IISc \u0915\u0940 \u0935\u0940\u0921\u093f\u092f\u094b \u090f\u0928\u093e\u0932\u093f\u091f\u093f\u0915\u094d\u0938 \u0932\u0948\u092c \u092e\u0947\u0902 \u0921\u0949. \u0906\u0930. \u0935\u0947\u0902\u0915\u091f\u0947\u0936 \u092c\u093e\u092c\u0942 \u0915\u0947 \u0938\u093e\u0925 \u092e\u0948\u0902\u0928\u0947 \u092f\u0939 \u0905\u0902\u0924\u0930 \u092c\u093f\u0928\u093e \u090f\u0915 \u092d\u0940 \u0932\u0947\u092c\u0932 \u0915\u0940 \u0917\u0908 \u0905\u0938\u0932\u0940 \u0924\u0938\u094d\u0935\u0940\u0930 \u0915\u0947 \u092a\u093e\u091f\u0928\u0947 \u092a\u0930 \u0915\u093e\u092e \u0915\u093f\u092f\u093e: \u0938\u093f\u0902\u0925\u0947\u091f\u093f\u0915 GTA5 \u0914\u0930 SYNTHIA \u092a\u0930 \u091f\u094d\u0930\u0947\u0928\u093f\u0902\u0917, \u0905\u0938\u0932\u0940 Cityscapes \u092a\u0930 \u0935\u0948\u0932\u093f\u0921\u0947\u0936\u0928, \u0914\u0930 \u0920\u0940\u0915 \u0909\u0938\u0940 \u0926\u0942\u0930\u0940 \u0915\u094b \u0932\u0915\u094d\u0937\u094d\u092f \u0915\u0930\u0928\u0947 \u0935\u093e\u0932\u0947 \u0915\u0938\u094d\u091f\u092e \u0932\u0949\u0938\u0964 \u092a\u094d\u0930\u0940\u091f\u094d\u0930\u0947\u0928\u094d\u0921 \u0935\u0947\u091f\u094d\u0938 \u0938\u0947 \u092a\u093e\u0930\u094d\u0936\u093f\u092f\u0932 \u0932\u0930\u094d\u0928\u093f\u0902\u0917 \u0928\u0947 \u091f\u093e\u0930\u0917\u0947\u091f \u0921\u094b\u092e\u0947\u0928 \u0915\u0940 \u0924\u094d\u0930\u0941\u091f\u093f \u0914\u0930 \u0915\u092e \u0915\u0940\u0964",
    "uda.k1": "\u0938\u093f\u0902\u0925\u0947\u091f\u093f\u0915",
    "uda.k2": "\u0905\u0938\u0932\u0940",
    "uda.gap": "\u0921\u094b\u092e\u0947\u0928 \u0905\u0902\u0924\u0930",
    "uda.flowNote": "\u2014 \u0915\u0938\u094d\u091f\u092e \u0932\u0949\u0938 + \u092a\u094d\u0930\u0940\u091f\u094d\u0930\u0947\u0928\u094d\u0921 \u0935\u0947\u091f\u094d\u0938 \u0938\u0947 \u092a\u093e\u0930\u094d\u0936\u093f\u092f\u0932 \u0932\u0930\u094d\u0928\u093f\u0902\u0917, \u0915\u094b\u0908 \u0905\u0938\u0932\u0940 \u0932\u0947\u092c\u0932 \u0928\u0939\u0940\u0902",

    "voice.idx": "\u0915\u0947\u0938 02 / 2026 / \u092a\u094d\u0930\u0915\u093e\u0936\u093f\u0924",
    "voice.title": "\u092e\u0936\u0940\u0928 \u0915\u094b \u0938\u093f\u0916\u093e\u0928\u093e \u0915\u093f \u0935\u0939 \u091a\u0932\u0924\u0947 \u091f\u094d\u0930\u0948\u0915\u094d\u091f\u0930 \u0915\u0947 \u0936\u094b\u0930 \u092e\u0947\u0902 \u0915\u093f\u0938\u093e\u0928 \u0915\u0940 \u092c\u093e\u0924 \u0938\u0941\u0928 \u0938\u0915\u0947",
    "voice.chartTitle": "\u0935\u0930\u094d\u0921 \u090f\u0930\u0930 \u0930\u0947\u091f \u092e\u0947\u0902 \u0915\u092e\u0940 \u2014 \u0938\u093e\u092a\u0947\u0915\u094d\u0937 %",
    "voice.chartNote": "\u0938\u092c\u0938\u0947 \u092c\u0921\u093c\u093e \u092b\u093c\u0930\u094d\u0915 \u0921\u093e\u092f\u0930\u093e\u0907\u091c\u093c\u0947\u0936\u0928 \u0938\u0947 \u2014 \u092c\u0938 \u0938\u0939\u0940 \u092c\u094b\u0932\u0928\u0947 \u0935\u093e\u0932\u0947 \u0915\u094b \u091a\u0941\u0928\u0928\u093e",
    "voice.foot": "\u0939\u093f\u0902\u0926\u0940, \u0924\u0947\u0932\u0941\u0917\u0941 \u0914\u0930 \u0913\u0921\u093c\u093f\u092f\u093e \u0915\u0940 \u092e\u093e\u0928\u0935-\u091c\u093e\u0901\u091a\u0940 \u0930\u093f\u0915\u0949\u0930\u094d\u0921\u093f\u0902\u0917 \u092a\u0930 \u092a\u0930\u0916\u093e \u0917\u092f\u093e\u0964 \u0938\u092d\u0940 \u0915\u092e\u0940 \u0906\u0901\u0915\u0921\u093c\u094b\u0902 \u0915\u0940 \u0926\u0943\u0937\u094d\u091f\u093f \u0938\u0947 \u0938\u093e\u0930\u094d\u0925\u0915 \u0939\u0948\u0902\u0964",
    "voice.link": "\u092a\u0947\u092a\u0930 \u092a\u0922\u093c\u0947\u0902 \u2192",
    "startups.alloan.role": "फाउंडिंग AI सलाहकार",
    "startups.alloan.body": "लेंडिंग के लिए AI एनालिटिक्स — प्रिंसटन के PhD संस्थापकों द्वारा शुरू की गई कंपनी। मैं इसका AI हिस्सा बनाता हूँ: ABF पर गाइडेड एजेंट और वर्कफ़्लो — यह लोन एनालिटिक्स के लिए उनकी अपनी भाषा है — और एजेंट्स के ज़रिए मॉडल ट्रेन करना।",
    "startups.alloan.link": "हम AI के लिखे कोड को कैसे परखते हैं →",
    "startups.ria.role": "ML विंग की शुरुआत",
    "startups.ria.body": "प्राइवेट कैपिटल के लिए डिसिज़न इन्फ्रास्ट्रक्चर — फंड्स और संस्थापकों के लिए AI ड्यू डिलिजेंस और डील मैनेजमेंट। मैंने उनका ML विंग खड़ा करने में मदद की।",
    "startups.mentormate.role": "कॉन्वर्सेशनल AI",
    "startups.mentormate.body": "उनके प्रोडक्ट के पीछे का कॉन्वर्सेशनल AI बनाया।",
    "legend.internship": "इंटर्नशिप",

    "span.dg": "एजेंटिक AI फ्रेमवर्क, सुपरवाइज़्ड फाइन-ट्यूनिंग और मूल्यांकन — विश्व बैंक, OpenAI, हार्वर्ड और MIT के साथ।",
    "span.scrut": "शून्य से V2 बनाया और पाँच लोगों की टीम के साथ कंपनी का पहला AI प्रोडक्ट तैयार किया।",
    "span.meetrecord": "हर AI और NLP सेवा पूरी तरह संभाली — कोचिंग इनसाइट्स, GPT-आधारित क्वेरी समाधान, पिच जेनरेशन, बॉटलनेक पहचान, कीवर्ड खोज।",
    "span.iisc": "डॉ. आर. वेंकटेश बाबू के मार्गदर्शन में अनसुपरवाइज़्ड डोमेन अडैप्टेशन — सिंथेटिक-से-असली सेगमेंटेशन, डोमेन अंतर के लिए कस्टम लॉस, प्रीट्रेन्ड वेट्स से पार्शियल लर्निंग।",
    "span.svag": "डॉ. सविता चौधरी के मार्गदर्शन में सांख्यिकी, ML और कंप्यूटर विज़न; RainRoof का सह-लेखन।",
    "span.brain": "बायोफ़ीडबैक डिवाइस के लिए ECG से तनाव अनुमान और एट्रियल फ़िब्रिलेशन की पहचान।",
    "span.umoove": "सियामीज़ आर्किटेक्चर पर आई-ट्रैकिंग दोबारा बनाई: 35% तेज़, 20% बेहतर वैलिडेशन सटीकता।",
    "span.inkers": "10,000 लोगों के डेटासेट पर एट्रिब्यूट अनुमान के लिए कस्टम ResNet।",
    "span.nfactorial": "भावना वर्गीकरण के लिए ख़ुद बनाए गए CNN, 91% सटीक।",
    "span.omdena": "जंगल की आग पहचानने के लिए CNN; वह अब भी चल रहा है।",
    "about.p1": "मैं इस क्षेत्र में कंप्यूटर विज़न से आया — डोमेन अडैप्टेशन, ECG सिग्नल, आई-ट्रैकिंग — और उसके बाद के साल AI प्रोडक्ट्स को शुरू से आख़िर तक संभालने में बिताए, प्रोटोटाइप से प्रोडक्शन तक। अब मुझे वही आधा हिस्सा पसंद है जिसमें चमक नहीं है: जज, एडवर्सेरियल बैटरी, प्रेफ़रेंस डेटा। मापने का यही ढाँचा एक डेमो और उस चीज़ के बीच फ़र्क करता है जिस पर कोई किसान भरोसा कर सके — और इसे बनाना लगभग कोई नहीं चाहता।",
    "about.p2": "मरती फसल पर कौन-सा कीटनाशक छिड़कें — यह पूछने वाली किसान को ऐसा जवाब चाहिए जो सही हो, उसकी अपनी भाषा में हो, और जब पता न हो तो ईमानदारी से यह कह दे। मेरा ज़्यादातर काम यही पता लगाना है कि इन तीनों में से हमने अभी कौन-सा तोड़ा है।",
    "about.p3": "इसके अलावा: पहाड़, फ़िल्म कैमरे, और ख़ुद से चलती एक बहस कि मूल्यांकन अभी विज्ञान बना है या नहीं।",

    "nav.work": "काम",
    "nav.startups": "स्टार्टअप",
    "nav.history": "अनुभव",
    "nav.papers": "शोध-पत्र",
    "nav.hello": "संपर्क",

    "cover.dateline": "बेंगलुरु · नोटबुक सितंबर 2026 में खुली",
    "cover.greeting": "नमस्ते",
    "cover.role": "लीड ML · डिजिटल ग्रीन · फाउंडिंग AI सलाहकार · आठ साल का अनुभव",
    "cover.lede": "मैं ऐसे AI सिस्टम बनाता हूँ जहाँ गलती की कीमत असली होती है — और फिर उन्हें खुद तोड़ने की कोशिश करता हूँ, इससे पहले कि दुनिया तोड़े। आठ साल इसी में: LLM अलाइनमेंट और मूल्यांकन, स्पीच, एजेंटिक सिस्टम, कंप्यूटर विज़न। मैं डिजिटल ग्रीन में ML लीड करता हूँ, और स्टार्टअप्स की मदद करता हूँ — उनके AI को एक अच्छे डेमो से उस चीज़ तक ले जाने में जो प्रोडक्शन में टिक सके।",
    "cover.ctaText": "कुछ बना रहे हैं?",
    "cover.ctaLink": "आइए बात करते हैं →",
    "cover.place": "बेंगलुरु, भारत",
    "cover.caption": "पश्चिमी घाट में कहीं, काम से दूर",

    "stat.years": "साल ML बनाते हुए",
    "stat.papers": "प्रकाशित शोध-पत्र",
    "stat.broke": "तरीके, जिनसे मैंने अपना चैटबॉट तोड़ा",

    "startups.title": "मैं स्टार्टअप्स बनाने में मदद करता हूँ",
    "startups.note": "— सलाह, हाथ कीबोर्ड पर — सिर्फ़ स्लाइड नहीं",
    "startups.lead": "\u0915\u0902\u092a\u0928\u093f\u092f\u093e\u0901 \u091c\u093f\u0928\u0915\u093e AI \u092c\u0928\u093e\u0928\u0947 \u092e\u0947\u0902 \u092e\u0948\u0902\u0928\u0947 \u092e\u0926\u0926 \u0915\u0940",
    "startups.cue": "खोलें",
    "startups.more": "— और सालों में कुछ और भी। पूछ लीजिए।",

    "work.title": "मैं किस पर काम कर रहा हूँ",
    "work.note": "— दिखाने लायक चार चीज़ें",


    "chart.cloud": "क्लाउड ASR",
    "chart.device": "ऑन-डिवाइस",
    "chart.full": "पूरा कॉर्पस",
    "chart.multi": "कई वक्ता",




    "history.title": "मैं कहाँ रहा हूँ",
    "history.note": "— किसी भी पंक्ति को खोलिए। ओवरलैप असली हैं; मैं एक साथ दो काम कर रहा था।",
    "legend.industry": "इंडस्ट्री",
    "legend.research": "रिसर्च",

    "papers.title": "जो मैंने लिखने में मदद की",
    "papers.note": "— पाँच, नए से पुराने",
    "papers.firstAuthor": "प्रथम<br>लेखक",

    "about.title": "थोड़ा और, अगर आप अब तक यहाँ हैं",
    "spec.studied": "पढ़ाई",
    "spec.works": "क्षेत्र",
    "spec.tools": "औज़ार",
    "spec.speaks": "भाषाएँ",
    "spec.worksVal": "LLM मूल्यांकन और अलाइनमेंट · एजेंटिक सिस्टम · बहुभाषी सुरक्षा · स्पीच",
    "spec.speaksVal": "अंग्रेज़ी · हिन्दी",

    "award.nasa": "नासा स्पेस ऐप्स चैलेंज — कर्नाटक विजेता",
    "award.ideate": "Ideate — विजेता",
    "award.buildathon": "Build-A-thon — प्रथम उपविजेता",
    "award.finalist": "फाइनलिस्ट: IIM बैंगलोर NSRCEL और Rehack IncubateIND",

    "hello.title": "नमस्ते कहिए",
    "hello.note": "— कुछ बना रहे हैं, या उस पर एक और नज़र चाहिए? इनमें से किसी पर भी लिखिए।",
    "reach.email": "ईमेल · कॉपी करने के लिए क्लिक करें",
    "reach.code": "कोड",
    "reach.linkedin": "औपचारिक वाला",
    "reach.papers": "दोनों",

    "footer.left": "लगभग हाथ से लिखा गया। कोई फ्रेमवर्क नहीं, कोई ट्रैकिंग नहीं, कोई कुकी बैनर नहीं।",
    "langNote": ""
  },

  /* ─────────────────── తెలుగు — short strings only ──────────── */
  /* Body prose deliberately omitted: it falls back to English    */
  /* until a native speaker reviews. Add keys here to extend.     */
  te: {
    "nav.activity": "\u0c15\u0c3e\u0c30\u0c4d\u0c2f\u0c15\u0c32\u0c3e\u0c2a\u0c3e\u0c32\u0c41",
    "activity.title": "\u0c2c\u0c2f\u0c1f\u0c3f \u0c2a\u0c4d\u0c30\u0c2a\u0c02\u0c1a\u0c02\u0c32\u0c4b",
    "nav.work": "పని",
    "nav.startups": "స్టార్టప్‌లు",
    "nav.history": "అనుభవం",
    "nav.papers": "పత్రాలు",
    "nav.hello": "సంప్రదించండి",

    "cover.greeting": "నమస్కారం",
    "cover.place": "బెంగళూరు, భారతదేశం",
    "cover.ctaText": "ఏదైనా నిర్మిస్తున్నారా?",
    "cover.langsWhy": "మీ ఇష్టం",

    "stat.years": "సంవత్సరాల ML అనుభవం",
    "stat.papers": "ప్రచురించిన పత్రాలు",
    "stat.broke": "మా చాట్‌బాట్‌ను విరిచిన మార్గాలు",

    "startups.title": "స్టార్టప్‌లు నిర్మించడంలో సహాయం చేస్తాను",
    "startups.cue": "తెరవండి",

    "work.title": "నేను పని చేస్తున్నవి",
    "history.title": "నేను ఉన్న చోట్లు",
    "papers.title": "నేను రాయడంలో పాలుపంచుకున్నవి",
    "about.title": "ఇంకా కొంచెం",
    "hello.title": "పలకరించండి",

    "legend.industry": "పరిశ్రమ",
    "legend.research": "పరిశోధన",

    "spec.studied": "చదువు",
    "spec.works": "రంగం",
    "spec.tools": "పనిముట్లు",
    "spec.speaks": "భాషలు",

    "reach.code": "కోడ్",

    "langNote": "తెలుగు అనువాదం పాక్షికం — శీర్షికలు మాత్రమే. మిగిలిన వచనం ఇంగ్లీషులో ఉంది."
  },

  /* ─────────────────── ଓଡ଼ିଆ — short strings only ───────────── */
  /* Same as Telugu: headings and labels only, pending review.   */
  or: {
    "nav.activity": "\u0b15\u0b3e\u0b30\u0b4d\u0b2f\u0b4d\u0b5f\u0b15\u0b32\u0b3e\u0b2a",
    "activity.title": "\u0b2c\u0b3e\u0b39\u0b3e\u0b30 \u0b26\u0b41\u0b28\u0b3f\u0b06\u0b30\u0b47",
    "nav.work": "କାମ",
    "nav.startups": "ଷ୍ଟାର୍ଟଅପ୍",
    "nav.history": "ଅନୁଭବ",
    "nav.papers": "ଶୋଧପତ୍ର",
    "nav.hello": "ଯୋଗାଯୋଗ",

    "cover.greeting": "ନମସ୍କାର",
    "cover.place": "ବେଙ୍ଗାଲୁରୁ, ଭାରତ",
    "cover.ctaText": "କିଛି ତିଆରି କରୁଛନ୍ତି?",
    "cover.langsWhy": "ଆପଣଙ୍କ ଇଚ୍ଛା",

    "stat.years": "ବର୍ଷର ML ଅନୁଭବ",
    "stat.papers": "ପ୍ରକାଶିତ ଶୋଧପତ୍ର",
    "stat.broke": "ଚାଟ୍‌ବଟ୍ ଭାଙ୍ଗିବାର ଉପାୟ",

    "startups.title": "ମୁଁ ଷ୍ଟାର୍ଟଅପ୍‌ମାନଙ୍କୁ ସାହାଯ୍ୟ କରେ",
    "startups.cue": "ଖୋଲନ୍ତୁ",

    "work.title": "ମୁଁ କାମ କରୁଥିବା ବିଷୟ",
    "history.title": "ମୁଁ ରହିଥିବା ସ୍ଥାନ",
    "papers.title": "ମୁଁ ଲେଖିବାରେ ସାହାଯ୍ୟ କରିଥିବା",
    "about.title": "ଆଉ କିଛି",
    "hello.title": "ନମସ୍କାର କୁହନ୍ତୁ",

    "legend.industry": "ଇଣ୍ଡଷ୍ଟ୍ରି",
    "legend.research": "ଗବେଷଣା",

    "spec.studied": "ପାଠ",
    "spec.works": "କ୍ଷେତ୍ର",
    "spec.tools": "ଉପକରଣ",
    "spec.speaks": "ଭାଷା",

    "reach.code": "କୋଡ୍",

    "langNote": "ଓଡ଼ିଆ ଅନୁବାଦ ଆଂଶିକ — କେବଳ ଶିରୋନାମା। ବାକି ଲେଖା ଇଂରାଜୀରେ ଅଛି।"
  }
};
