/**
 * sakibslt.com - Main Application JavaScript
 * Senior UI/UX Architecture: Accessibility, Scrollspy, Bilingual Engine & WhatsApp Dispatcher
 * Clinical Practice of Ahammad Sharif Sakib
 */

// ==========================================
// 1. DATA SOURCES: 10 CLINICAL CONDITIONS
// Exact 10 Clinical Conditions in sequence ordered by the user
// ==========================================
const clinicalConditionsData = [
  {
    id: 1,
    numBn: "০১",
    numEn: "01",
    category: "pediatric",
    icon: "fa-child-reaching",
    bn: {
      t: "১. কথা বলতে দেরি (Speech & Language Delay / Late Talkers)",
      d: "শিশুর বয়স অনুযায়ী কথা না ফোটা বা শব্দ উচ্চারণে বাধার বিজ্ঞানসম্মত নিবিড় ইন্টারভেনশন ও অভিভাবক প্রশিক্ষণ।",
      tag: "শিশু বিকাশ"
    },
    en: {
      t: "1. Speech & Language Delay (Late Talkers)",
      d: "Evidence-based pediatric intervention addressing delays in milestones, receptive understanding, and verbal output.",
      tag: "Pediatric Delay"
    }
  },
  {
    id: 2,
    numBn: "০২",
    numEn: "02",
    category: "pediatric",
    icon: "fa-puzzle-piece",
    bn: {
      t: "২. অটিজম স্পেকট্রাম ডিসঅর্ডার (Autism / ASD)",
      d: "অর্থপূর্ণ সামাজিক যোগাযোগ, আই কন্টাক্ট, জয়েন্ট অ্যাটেনশন এবং বিকল্প ও সহায়ক যোগাযোগ (AAC) প্রতিষ্ঠা।",
      tag: "অটিজম ও যোগাযোগ"
    },
    en: {
      t: "2. Autism Spectrum Disorder (Autism / ASD)",
      d: "Naturalistic, play-based strategies fostering functional communication, joint attention, and AAC support.",
      tag: "Autism / ASD"
    }
  },
  {
    id: 3,
    numBn: "০৩",
    numEn: "03",
    category: "speech",
    icon: "fa-microphone-lines",
    bn: {
      t: "৩. ভয়েস ও কণ্ঠস্বরের সমস্যা (Voice Therapy)",
      d: "কণ্ঠ ভেঙে যাওয়া, কর্কশ স্বর, পিচ সমস্যা বা ভোকাল কর্ডের পেশাগত ক্লান্তি দূর করার আধুনিক বিজ্ঞানসম্মত চিকিৎসা।",
      tag: "ভয়েস কেয়ার"
    },
    en: {
      t: "3. Voice Disorders & Vocal Hygiene (Voice Therapy)",
      d: "Clinical therapy for dysphonia, vocal nodules, hoarseness, and professional vocal fatigue recovery.",
      tag: "Voice Therapy"
    }
  },
  {
    id: 4,
    numBn: "০৪",
    numEn: "04",
    category: "speech",
    icon: "fa-wave-square",
    bn: {
      t: "৪. তোতলামি বা কথা আটকে যাওয়া (Stuttering / Stammering)",
      d: "কথা আটকে যাওয়া, পুনরাবৃত্তি বা টান দূর করে সাবলীল কথা বলার কৌশল ও মানসিক আত্মবিশ্বাস পুনঃপ্রতিষ্ঠা।",
      tag: "সাবলীল বাকশক্তি"
    },
    en: {
      t: "4. Stuttering & Speech Fluency (Stuttering / Stammering)",
      d: "Fluency shaping and stuttering modification techniques designed to build effortless speech and speaking confidence.",
      tag: "Speech Fluency"
    }
  },
  {
    id: 5,
    numBn: "০৫",
    numEn: "05",
    category: "pediatric",
    icon: "fa-bolt",
    bn: {
      t: "৫. এডিএইচডি ও মনোযোগের সমস্যা (ADHD & Communication)",
      d: "অস্থিরতা ও চঞ্চলতা কমিয়ে যোগাযোগে একাগ্রতা, শ্রবণ মনোযোগ এবং সামাজিক পারস্পরিক সম্পর্ক বৃদ্ধি।",
      tag: "মনোযোগ ও আচরণ"
    },
    en: {
      t: "5. ADHD & Attention in Communication",
      d: "Sensory-integrated strategies to enhance conversational attention, reduce hyperactivity, and boost listening skills.",
      tag: "ADHD Support"
    }
  },
  {
    id: 6,
    numBn: "০৬",
    numEn: "06",
    category: "neuro",
    icon: "fa-brain",
    bn: {
      t: "৬. স্ট্রোক ও প্যারালাইসিস পরবর্তী বাক সমস্যা (Stroke / Aphasia / Dysarthria)",
      d: "প্রাপ্তবয়স্কদের কথা জড়িয়ে যাওয়া, ভাষা ভুলে যাওয়া বা কথা বলতে না পারার উন্নত নিউরোরিহ্যাবিলিটেশন।",
      tag: "স্ট্রোক রিহ্যাব"
    },
    en: {
      t: "6. Post-Stroke Aphasia & Dysarthria (Adult Neuro Rehab)",
      d: "Adult neurological rehabilitation restoring speech motor control, receptive comprehension, and expressive language.",
      tag: "Stroke & Neuro"
    }
  },
  {
    id: 7,
    numBn: "০৭",
    numEn: "07",
    category: "neuro",
    icon: "fa-utensils",
    bn: {
      t: "৭. খাবার গিলতে ও খেতে কষ্ট (Feeding & Swallowing / Dysphagia)",
      d: "খাবার চিবানো, গিলে খাওয়া বা গলায় বিষম খাওয়ার ঝুঁকি এড়াতে ওরাল স্টিমুলেশন ও নিরাপদ সোয়ালোয়িং থেরাপি।",
      tag: "সোয়ালোয়িং থেরাপি"
    },
    en: {
      t: "7. Feeding & Swallowing Disorders (Dysphagia)",
      d: "Clinical assessment of chewing, swallowing safety, oral motor coordination, and aspiration prevention.",
      tag: "Dysphagia Care"
    }
  },
  {
    id: 8,
    numBn: "০৮",
    numEn: "08",
    category: "pediatric",
    icon: "fa-hand-holding-medical",
    bn: {
      t: "৮. চাইল্ডহুড অ্যাপ্রাক্সিয়া অব স্পিচ (CAS)",
      d: "মস্তিষ্কের মোটর প্ল্যানিং জটিলতায় শব্দ উচ্চারণ করতে না পারা শিশুদের জন্য বিশেষায়িত মোটর স্পিচ ও PROMPT ইন্টারভেনশন।",
      tag: "মোটর স্পিচ ও PROMPT"
    },
    en: {
      t: "8. Childhood Apraxia of Speech (CAS)",
      d: "Motor speech intervention targeting neurological motor planning and sequencing deficits for speech clarity.",
      tag: "Apraxia (CAS)"
    }
  },
  {
    id: 9,
    numBn: "০৯",
    numEn: "09",
    category: "speech",
    icon: "fa-comments",
    bn: {
      t: "৯. অস্পষ্ট উচ্চারণ (Articulation & Phonological Disorders)",
      d: "নির্দিষ্ট কোনো ধ্বনি বা বর্ণ ভুল বা অস্পষ্ট উচ্চারণ সংশোধনে আন্তর্জাতিক ফোনেটিক কারেকশন পদ্ধতি।",
      tag: "উচ্চারণ সংশোধন"
    },
    en: {
      t: "9. Articulation & Phonological Disorders",
      d: "International phonetic placement techniques and oral motor intervention to correct sound substitutions and clarity.",
      tag: "Articulation"
    }
  },
  {
    id: 10,
    numBn: "১০",
    numEn: "10",
    category: "neuro",
    icon: "fa-hospital-user",
    bn: {
      t: "১০. অন্যান্য নিউরোলজিক্যাল সমস্যায় কথা ও যোগাযোগে সমস্যা হলে",
      d: "সেরিব্রাল পলসি, ট্রমাটিক ব্রেন ইনজুরি বা অন্যান্য জন্মগত ও অর্জিত স্নায়বিক কারণে যোগাযোগ জটিলতার সামগ্রিক মূল্যায়ন ও চিকিৎসা।",
      tag: "সামগ্রিক নিউরো কেয়ার"
    },
    en: {
      t: "10. Other Neurological Communication Disorders",
      d: "Holistic evaluation and management of communication impairments stemming from Cerebral Palsy, TBI, or other neurological conditions.",
      tag: "Neuro Disorders"
    }
  }
];

// ==========================================
// 2. DATA SOURCES: THERAPY PRODUCTS & TOOLS
// ==========================================
const productsData = [
  {
    id: "flashcards",
    icon: "fa-clone",
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    bn: {
      title: "Flash Cards",
      sub: "শব্দভাণ্ডার ও ভাষা বিকাশ",
      desc: "শিশুর নতুন নতুন শব্দ শেখা, স্পষ্ট উচ্চারণ, বর্ণমালা ও ছবির সাথে শব্দের মিল করানোর আধুনিক রঙিন কার্ড সেট।"
    },
    en: {
      title: "Flash Cards",
      sub: "Vocabulary & Language Building",
      desc: "High-contrast, colorful learning cards designed to accelerate word recognition, naming, and phonetic clarity."
    }
  },
  {
    id: "articulation",
    icon: "fa-teeth-open",
    color: "text-blue-700 bg-blue-50 border-blue-200",
    bn: {
      title: "Articulation Tools for Speech and Language Therapy",
      sub: "আর্টিকুলেশন ও সঠিক উচ্চারণ কিট",
      desc: "জিহ্বা, ঠোঁট ও চোয়ালের সঠিক পজিশন ঠিক করে অস্পষ্ট ধ্বনি ও বর্ণ স্পষ্ট উচ্চারণে সহায়তাকারী বিশেষায়িত ক্লিনিক্যাল টুলস সেট।"
    },
    en: {
      title: "Articulation Tools for Speech & Language Therapy",
      sub: "Phonetic Placement & Clarity Kit",
      desc: "Targeted clinical instruments for tongue, lip, and jaw elevation to remediate articulation and phonetic speech sound errors."
    }
  },
  {
    id: "toys",
    icon: "fa-shapes",
    color: "text-amber-700 bg-amber-50 border-amber-200",
    bn: {
      title: "Speech Therapy Toys",
      sub: "স্পিচ থেরাপি খেলনা ও ইন্টারেক্টিভ লার্নিং টয়",
      desc: "শিশুকে খেলতে খেলতে কথা শেখানোর জন্য বিশেষভাবে নির্বাচিত প্রাণী, রঙের ব্লক ও আকর্ষণীয় ইন্টারঅ্যাক্টিভ প্লে-সেট।"
    },
    en: {
      title: "Speech Therapy Toys",
      sub: "Interactive Naturalistic Play Toys",
      desc: "Carefully selected speech-stimulating toys, cause-and-effect sets, and interactive figurines that motivate expressive conversation."
    }
  },
  {
    id: "sensory",
    icon: "fa-hand-dots",
    color: "text-indigo-700 bg-indigo-50 border-indigo-200",
    bn: {
      title: "Sensory & Exercise Toys",
      sub: "সেন্সরি ও ওরাল মোটর এক্সারসাইজ কিট",
      desc: "শিশুর অস্থিরতা কমানো, হাতের গ্রিপ, মুখের পেশির শক্তি ও মনোযোগ বৃদ্ধিতে সহায়ক সংবেদনশীল সেন্সরি বল ও টেক্সচার্ড টুলস।"
    },
    en: {
      title: "Sensory & Exercise Toys",
      sub: "Sensory Integration & Oral Motor",
      desc: "Tactile textured balls, sensory cushions, and oral exercisers that support self-regulation and tactile-kinesthetic stimulation."
    }
  },
  {
    id: "books",
    icon: "fa-book-open-reader",
    color: "text-rose-700 bg-rose-50 border-rose-200",
    bn: {
      title: "Learning & Activity Books",
      sub: "লার্নিং ও অ্যাক্টিভিটি বুকস",
      desc: "শিশুর চিন্তাশক্তি, মনোযোগ, দাগ টানা, ছবি চিহ্নিতকরণ এবং লেখার প্রাক-প্রস্তুতিমূলক ইন্টারঅ্যাক্টিভ অ্যাক্টিভিটি ওয়ার্কবুক।"
    },
    en: {
      title: "Learning & Activity Books",
      sub: "Cognitive Workbooks & Tracing Guides",
      desc: "Engaging tracing, dot-to-dot, phonics, and cognitive activity workbooks designed for pre-academic and language enrichment."
    }
  },
  {
    id: "aac",
    icon: "fa-tablets",
    color: "text-teal-700 bg-teal-50 border-teal-200",
    bn: {
      title: "Communication Aids (AAC)",
      sub: "অগমেন্টেটিভ অ্যান্ড অল্টারনেটিভ কমিউনিকেশন",
      desc: "যেসব শিশু বা প্রাপ্তবয়স্করা মুখে কথা বলতে পারেন না, তাদের মনের ভাব প্রকাশে সহায়তাকারী ছবি বোর্ড, টক বোতাম ও এএসি এইডস।"
    },
    en: {
      title: "Communication Aids (AAC)",
      sub: "Augmentative & Alternative Communication",
      desc: "Low-tech to mid-tech communication boards, voice-output speech buttons, and adaptive devices for non-verbal individuals."
    }
  }
];

// ==========================================
// 3. DATA SOURCES: FREQUENTLY ASKED QUESTIONS (10 Comprehensive Items)
// ==========================================
let currentFaqFilter = 'all';

const faqsData = [
  {
    id: 1,
    category: 'consult',
    icon: 'fa-solid fa-laptop-medical',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    badgeStyle: 'bg-teal-100/80 text-teal-800 border border-teal-200',
    bn: {
      badge: "অনলাইন টেলি-থেরাপি",
      q: "অনলাইন টেলি-থেরাপির কার্যকারিতা কেমন এবং কীভাবে সেশন পরিচালিত হয়?",
      a: "আন্তর্জাতিক বৈজ্ঞানিক গবেষণায় প্রমাণিত যে অভিভাবক-পরিচালিত ভিডিও টেলি-থেরাপি শিশুদের ভাষা বিকাশে ক্লিনিক সেশনের মতোই অত্যন্ত কার্যকর। Zoom, Google Meet অথবা WhatsApp-এর মাধ্যমে সরাসরি ১-অন-১ ভিডিও কলে থেরাপিস্ট শিশুর খেলার আচরণ ও যোগাযোগ পর্যবেক্ষণ করেন এবং অভিভাবকদের হাতে-কলমে বাস্তবসম্মত টেকনিক শিখিয়ে দেন। দেশ ও প্রবাসী পরিবার উভয়ের জন্যই এটি সহজলভ্য এবং প্রতি সেশনের ফি মাত্র ৫০০ টাকা।"
    },
    en: {
      badge: "Online Tele-Therapy",
      q: "How effective is online tele-therapy, and how are sessions conducted?",
      a: "Clinical research proves parent-coached tele-therapy is just as effective as in-person therapy for child communication milestones. Conducted securely via Zoom, Google Meet, or WhatsApp, Therapist Sakib observes interactions in real time and coaches parents on proven, hands-on strategies. Accessible nationwide and internationally; fee is 500 BDT per session."
    }
  },
  {
    id: 2,
    category: 'consult',
    icon: 'fa-solid fa-house-chimney-medical',
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-700',
    badgeStyle: 'bg-slate-100 text-slate-800 border border-slate-200',
    bn: {
      badge: "ঢাকা হোম ভিজিট",
      q: "ঢাকা সিটিতে বাসায় গিয়ে হোম ভিজিট সেবা পাওয়ার নিয়ম কী?",
      a: "ঢাকা মেট্রোপলিটন এলাকার আওতাভুক্ত পরিবারগুলোর জন্য বিশেষ চাহিদাসম্পন্ন শিশু (অটিজম, সেন্সরি সমস্যা) এবং বয়স্ক শয্যাশায়ী স্ট্রোক/প্যারালাইসিস রোগীদের বেডসাইড রিহ্যাবিলিটেশনে হোম ভিজিট সেবা প্রদান করা হয়। শিশুর ঘরোয়া পরিচিত পরিবেশে থেরাপি নিলে জড়তা দ্রুত দূর হয়। রোগীর শারীরিক অবস্থা, লোকেশন ও প্রয়োজনীয় সেশন সংখ্যার ওপর ভিত্তি করে শিডিউল ও ফি আলোচনা সাপেক্ষে নির্ধারিত হয়।"
    },
    en: {
      badge: "Dhaka Home Visit",
      q: "What is the procedure for home visits within Dhaka city?",
      a: "Specialized in-home clinical sessions are offered across Dhaka Metro for neurodivergent children requiring familiar home settings and bed-bound adult stroke rehabilitation patients. Natural home intervention accelerates comfort and progress. Scheduling and fees are coordinated individually based on patient status, frequency, and location."
    }
  },
  {
    id: 3,
    category: 'pediatric',
    icon: 'fa-solid fa-baby',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    badgeStyle: 'bg-amber-100/80 text-amber-800 border border-amber-200',
    bn: {
      badge: "দেরিতে কথা বলা",
      q: "শিশুর বয়স কত হলে স্পিচ থেরাপিস্টের শরণাপন্ন হওয়া উচিত?",
      a: "সাধারণত ১৮ থেকে ২৪ মাস বয়সেও যদি শিশু কোনো অর্থপূর্ণ শব্দ না বলে, ডাকলে সাড়া না দেয়, চোখের দিকে না তাকায় (Eye Contact) কিংবা ইশারা ও অঙ্গভঙ্গির মাধ্যমে মনের ভাব প্রকাশ করতে না পারে, তবে দেরি না করে অবিলম্বে একজন নিবন্ধিত স্পিচ অ্যান্ড ল্যাঙ্গুয়েজ থেরাপিস্টের পরামর্শ নেওয়া জরুরি। ২ থেকে ৫ বছর বয়স হলো শিশুর মস্তিষ্কের ভাষা বিকাশের স্বর্ণযুগ (Golden Period), এ সময় আর্লি ইন্টারভেনশন শুরু করলে দ্রুততম সময়ে স্বাভাবিক বাকশক্তি ফিরিয়ে আনা সম্ভব।"
    },
    en: {
      badge: "Speech Delay",
      q: "At what age should parents consult a speech therapist for speech delay?",
      a: "If a child reaches 18 to 24 months without producing meaningful words, lacks eye contact, does not respond to their name, or struggles with non-verbal gestures, early consultation is strongly recommended. Ages 2 to 5 represent the neural golden period for speech acquisition; early intervention at this stage yields the fastest, most durable recovery."
    }
  },
  {
    id: 4,
    category: 'pediatric',
    icon: 'fa-solid fa-puzzle-piece',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    badgeStyle: 'bg-indigo-100/80 text-indigo-800 border border-indigo-200',
    bn: {
      badge: "অটিজম স্পেকট্রাম (ASD)",
      q: "অটিজম বৈশিষ্ট্যসম্পন্ন ও অমৌখিক শিশুদের জন্য কোন ধরনের থেরাপিউটিক পদ্ধতি ব্যবহার করা হয়?",
      a: "অটিজম শিশুদের ক্ষেত্রে জোর করে মুখস্থ করানোর বদলে খেলাভিত্তিক ও প্রাকৃতিক ভাষা বিকাশ পদ্ধতি অনুসরণ করা হয়। এর মধ্যে রয়েছে স্পর্শ ও মোটর সহায়ক PROMPT টেকনিক, জেস্টাল্ট ল্যাঙ্গুয়েজ প্রসেসিং (GLP) এবং অল্টারনেটিভ অ্যান্ড অগমেন্টেটিভ কমিউনিকেশন (AAC) যেমন পিকচার বোর্ড বা টক বাটন। এছাড়া শিশুর সংবেদনশীলতা (Sensory Regulation) ও চোখের যোগাযোগের ওপর ভিত্তি করে বিশেষায়িত হোম প্ল্যান দেওয়া হয়।"
    },
    en: {
      badge: "Autism Spectrum (ASD)",
      q: "What therapeutic approaches are used for autistic and non-verbal children?",
      a: "Rather than forced rote drills, intervention focuses on naturalistic play-based communication, Gestalt Language Processing (GLP), tactile-neuromuscular PROMPT techniques, and Augmentative & Alternative Communication (AAC) including communication picture boards. Sensory regulation and parent coaching are embedded into customized home routines."
    }
  },
  {
    id: 5,
    category: 'specialized',
    icon: 'fa-solid fa-award',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    badgeStyle: 'bg-amber-100 text-amber-900 border border-amber-300',
    bn: {
      badge: "PROMPT USA টেকনিক",
      q: "PROMPT টেকনিক কী এবং এটি সাধারণ থেরাপি থেকে কেন ভিন্ন ও অধিক কার্যকর?",
      a: "PROMPT (Prompts for Restructuring Oral Muscular Phonetic Targets) হলো মার্কিন যুক্তরাষ্ট্রের The PROMPT Institute উদ্ভাবিত আধুনিক স্পর্শনির্ভর (Tactile-Kinesthetic) নিউরোমাসকুলার পদ্ধতি। শিশু যখন কোনো শব্দ উচ্চারণে মুখের মাংসপেশি নিয়ন্ত্রণ করতে পারে না (যেমনঃ Apraxia বা স্পিচ ডিলে), তখন থেরাপিস্ট আঙুলের মৃদু স্পর্শ দিয়ে মুখ, ঠোঁট ও চোয়ালের সঠিক পজিশন দেখিয়ে দেন। আহাম্মদ শরীফ সাকিব বাংলাদেশে এই আন্তর্জাতিক মেথডে প্রশিক্ষিত মাত্র ৫৮ জন বিশেষজ্ঞের একজন।"
    },
    en: {
      badge: "PROMPT USA Technique",
      q: "What is the PROMPT Technique and why is it unique?",
      a: "Developed by The PROMPT Institute (USA), PROMPT is a tactile-kinesthetic neuromuscular method where the clinician manually guides the patient's jaw, lips, and facial articulators to physically elicit correct phonation. It is unmatched for Childhood Apraxia of Speech and motor speech delay. Therapist Sakib is among only 58 clinicians nationwide trained in this technique."
    }
  },
  {
    id: 6,
    category: 'specialized',
    icon: 'fa-solid fa-brain',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    badgeStyle: 'bg-rose-100/80 text-rose-800 border border-rose-200',
    bn: {
      badge: "স্ট্রোক ও নিউরো রিহ্যাব",
      q: "স্ট্রোক বা প্যারালাইসিসের পর কথা বন্ধ হয়ে গেলে বা খাবার গিলতে সমস্যা হলে কি থেরাপিতে উন্নতি সম্ভব?",
      a: "হ্যাঁ, অবশ্যই। স্ট্রোকের পর মস্তিষ্কের ভাষা কেন্দ্র ক্ষতিগ্রস্ত হলে রোগীরা কথা বলতে বা বুঝতে অক্ষম হন (অ্যাফেসিয়া), অথবা মুখের পেশি অবশ হয়ে উচ্চারণ জড়িয়ে যায় (ডিসআর্থ্রিয়া)। এছাড়া খাবার গিলতে না পারাকে ডেসফেজিয়া বলে। আধুনিক নিউরোপ্লাস্টিসিটি ভিত্তিক স্পিচ ও সোয়ালোয়িং থেরাপির মাধ্যমে মুখের পেশি সচল করা, নিরাপদ গিলে খাওয়ার প্রশিক্ষণ এবং পর্যায়ক্রমে বাক্য ফিরিয়ে আনা সম্ভব।"
    },
    en: {
      badge: "Stroke Neuro-Rehab",
      q: "Can speech and swallowing improve after a stroke or paralysis?",
      a: "Yes, significantly. Post-stroke brain injury often leads to loss of speech (Aphasia), slurred articulation due to muscle weakness (Dysarthria), or life-threatening swallowing difficulties (Dysphagia). Evidence-based speech and swallowing neuro-rehabilitation leverages neuroplasticity to reactivate motor pathways, restore safe eating, and rebuild communicative functional vocabulary."
    }
  },
  {
    id: 7,
    category: 'pediatric',
    icon: 'fa-solid fa-comments',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    badgeStyle: 'bg-sky-100/80 text-sky-800 border border-sky-200',
    bn: {
      badge: "তোতলামি ও উচ্চারণ",
      q: "তোতলামি (Stammering) বা অস্পষ্ট উচ্চারণ কি থেরাপির মাধ্যমে সম্পূর্ণ ঠিক করা সম্ভব?",
      a: "শিশুদের কথা আটকে যাওয়া, শব্দ টেনে বলা (Prolongation) কিংবা শব্দ বারবার পুনরাবৃত্তি করা (Repetition) তোতলামির লক্ষণ। ফ্লুয়েন্সি শেপিং টেকনিক, ব্রিদিং রেগুলেশন এবং অরো-মোটর এক্সারসাইজের মাধ্যমে তোতলামি ও অস্পষ্ট উচ্চারণ অধিকাংশ ক্ষেত্রেই চমৎকারভাবে নিরাময় ও নিয়ন্ত্রণে আনা সম্ভব। প্রাপ্তবয়স্কদের ক্ষেত্রেও আত্মবিশ্বাস বৃদ্ধি ও সামাজিক জড়তা দূরীকরণে বিশেষ থেরাপি দেওয়া হয়।"
    },
    en: {
      badge: "Stammering & Fluency",
      q: "Can stammering, stuttering, or unclear pronunciation be cured through therapy?",
      a: "Stammering, word repetitions, sound prolongations, and articulation deficits respond remarkably well to structured fluency shaping, diaphragmatic breath regulation, and neuromuscular oral-motor drills. For teenagers and adults, targeted speech modification restores speech rhythm and eliminates speaking anxiety."
    }
  },
  {
    id: 8,
    category: 'consult',
    icon: 'fa-solid fa-hands-holding-child',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    badgeStyle: 'bg-emerald-100/80 text-emerald-800 border border-emerald-200',
    bn: {
      badge: "হোম প্র্যাকটিস",
      q: "থেরাপি সেশনের পাশাপাশি অভিভাবকরা বাসায় কীভাবে শিশুকে প্র্যাকটিস করাবেন?",
      a: "স্পিচ থেরাপির সফলতার প্রায় ৭০% নির্ভর করে ঘরোয়া পরিবেশে নিয়মিত অনুশীলনের ওপর। প্রতিটি সেশনের পর অভিভাবকদের সুনির্দিষ্ট 'হোম প্র্যাকটিস শিট' এবং গাইডলাইন প্রদান করা হয়। দৈনন্দিন খাওয়া, খেলাধুলা ও গোসলের মতো সাধারণ কাজের মধ্য দিয়ে কীভাবে শিশুর সাথে মিথস্ক্রিয়া বাড়াতে হবে তা বিস্তারিত বুঝিয়ে দেওয়া হয়।"
    },
    en: {
      badge: "Home Practice",
      q: "How should parents practice at home alongside clinical sessions?",
      a: "Nearly 70% of therapeutic success depends on naturalistic home reinforcement. Following each session, parents receive a tailored Home Practice Guide, milestone checklist, and daily activity frameworks. Parents are taught how to turn daily routines like playtime, meals, and walks into active speech-eliciting opportunities."
    }
  },
  {
    id: 9,
    category: 'consult',
    icon: 'fa-solid fa-calendar-check',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    badgeStyle: 'bg-purple-100/80 text-purple-800 border border-purple-200',
    bn: {
      badge: "সেশন ও অগ্রগতি",
      q: "রোগীর সুস্থতায় কতগুলো সেশনের প্রয়োজন হতে পারে এবং উন্নতির লক্ষণ কতদিন পর দেখা যায়?",
      a: "সেশনের সংখ্যা সম্পূর্ণভাবে রোগীর শারীরিক ও ক্লিনিক্যাল অবস্থার ওপর নির্ভর করে। মৃদু স্পিচ ডিলের ক্ষেত্রে ৪ থেকে ৮টি সেশনেই লক্ষণীয় পরিবর্তন দেখা যায়, তবে অটিজম বা স্ট্রোকের মতো জটিলতায় নিয়মিত ফলো-আপের প্রয়োজন হয়। সাধারণত প্রথম ৩-৪ সপ্তাহ নিয়মিত অনুশীলনের পর শিশুর চোখের যোগাযোগ বৃদ্ধি, মনোযোগ এবং নতুন শব্দ উচ্চারণের ইতিবাচক অগ্রগতি স্পষ্ট হয়ে ওঠে।"
    },
    en: {
      badge: "Sessions & Progress",
      q: "How many sessions are required and when can improvements be expected?",
      a: "Duration depends on diagnosis, age, and home adherence. Mild articulation or expressive delays frequently show noticeable improvement within 4 to 8 sessions, whereas autism spectrum or neurological stroke conditions benefit from ongoing structured support. Positive milestones—such as enhanced eye contact, vocal attempts, and attention—typically emerge within 3 to 4 weeks."
    }
  },
  {
    id: 10,
    category: 'consult',
    icon: 'fa-solid fa-receipt',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-700',
    badgeStyle: 'bg-teal-100 text-teal-900 border border-teal-300',
    bn: {
      badge: "ফি ও পেমেন্ট",
      q: "কনসালটেশন ফি কীভাবে পরিশোধ করতে হবে এবং থেরাপি সামগ্রী কীভাবে পাওয়া যাবে?",
      a: "অনলাইন টেলি-থেরাপির ফিক্সড ফি ৫০০ টাকা। আপনি bKash, Nagad, Rocket অথবা সরাসরি ব্যাংক ট্রান্সফারের (NPSB) মাধ্যমে সহজেই ফি পরিশোধ করতে পারবেন। এছাড়া শিশুর উপযোগী থেরাপিউটিক ফ্ল্যাশকার্ড, ওরাল-মোটর টুলস ও খেলনা অফিসিয়াল হোয়াটসঅ্যাপে অর্ডার করলে সারাদেশে কুরিয়ার সার্ভিসের মাধ্যমে ডেলিভারি দেওয়া হয়।"
    },
    en: {
      badge: "Fees & Payment",
      q: "How are consultation fees paid and how can therapy tools be ordered?",
      a: "Online tele-therapy has a fixed, transparent fee of 500 BDT per session. Payments are accepted seamlessly via bKash, Nagad, Rocket, or direct Bank transfer (NPSB). Therapist-recommended therapy toys, oral-motor tools, and visual communication cards can be ordered via WhatsApp with nationwide courier delivery."
    }
  }
];

// ==========================================
// 4. BILINGUAL DICTIONARY
// ==========================================
let currentLang = 'bn';
let isBioExpanded = false;
let currentCategoryFilter = 'all';

const dictionary = {
  bn: {
    pageTitle: "আহাম্মদ শরীফ সাকিব | সিনিয়র স্পিচ অ্যান্ড ল্যাঙ্গুয়েজ থেরাপিস্ট (ঢাকা ও ময়মনসিংহ) | Ahammad Sharif Sakib (SLT)",
    navAbout: "পরিচিতি",
    navServices: "সেবাসমূহ",
    navCred: "গবেষণা",
    navExp: "অভিজ্ঞতা",
    navProducts: "পণ্যসামগ্রী",
    navFaq: "প্রশ্নোত্তর",
    navContact: "ফি ও বুকিং",
    navAppt: "অ্যাপয়েন্টমেন্ট নিন",
    
    heroStatusBadge: "অনলাইন কনসালটেশন ও ঢাকা সিটিতে হোম ভিজিট চালু রয়েছে",
    heroTitle: "আহাম্মদ শরীফ সাকিব",
    heroSubtitle: "Senior Clinical Speech & Language Therapist | Senior Lecturer, Department of SLT, MCPHS",
    heroBioHook: "আহাম্মদ শরীফ সাকিব একজন ক্লিনিক্যাল স্পিচ থেরাপিস্ট, গবেষক এবং শিক্ষক। তিনি দীর্ঘ ক্লিনিক্যাল প্র্যাকটিস ও আধুনিক বৈজ্ঞানিক প্রমাণের ভিত্তিতে শিশুদের ভাষা বিকাশজনিত সমস্যা এবং প্রাপ্তবয়স্কদের স্ট্রোক পরবর্তী বাকশক্তি পুনর্বাসনে নিষ্ঠার সাথে সেবা দিয়ে আসছেন। সুবিধাজনক শিডিউলে অনলাইন কনসালটেশন এবং ঢাকা সিটিতে প্রয়োজনসাপেক্ষে হোম ভিজিট সেবা প্রদান করা হয়।",
    heroBioP1: "তিনি যুক্তরাষ্ট্রের The PROMPT Institute কর্তৃক বাংলাদেশে প্রথমবার আয়োজিত আন্তর্জাতিক কর্মশালায় অংশ নেওয়া দেশের মাত্র ৫৮ জন নির্বাচিত বিশেষজ্ঞ স্পিচ থেরাপি চিকিৎসকদের মধ্যে অন্যতম। মোটর স্পিচ জটিলতায় স্পর্শ ও ইন্দ্রিয়নির্ভর (Tactile-Kinesthetic) আধুনিক PROMPT থেরাপির পাশাপাশি তিনি Gestalt Language Processing (GLP) এবং Childhood Apraxia of Speech (CAS) বিষয়ে বিশেষ প্রশিক্ষিত।",
    heroBioP2: "চিকিৎসার পাশাপাশি তিনি গবেষণায় সক্রিয়। আমেরিকান কলেজ অব মেডিকেল জেনেটিক্স অ্যান্ড জিনোমিক্স-এর শীর্ষ পিয়ার-রিভিউড জার্নাল Genetics in Medicine (GIM)-এ তাঁর সহ-গবেষণাপত্র প্রকাশিত হয়েছে (DOI: 10.1016/j.gim.2024.101282)। এছাড়া অটিজম শিশুদের মূলধারার সাধারণ শিক্ষায় অংশগ্রহণের ওপর তাঁর অ্যাকাডেমিক গবেষণা রয়েছে।",
    heroBioP3: "সিআরপি (CRP, Savar & Mirpur)-এর পেডিয়াট্রিক ও অ্যাডাল্ট নিউরোলজি ইউনিট থেকে শুরু করে নিউরোজেন, সানশাইন এবং ব্লিস হ্যাভেনের মতো স্বনামধন্য প্রতিষ্ঠানে কাজ করার সমৃদ্ধ অভিজ্ঞতা নিয়ে বর্তমানে তিনি ভবিষ্যৎ থেরাপিস্টদের গড়ে তুলতে এমসিপিএইচএস (MCPHS)-এ শিক্ষকতার পাশাপাশি নিবিড় ক্লিনিক্যাল প্র্যাকটিস পরিচালনা করছেন।",
    btnBioMore: "আরও বিস্তারিত পরিচিতি পড়ুন (Read Full Bio)",
    btnBioLess: "সংক্ষেপ করুন (Show Less)",
    btnAppt: "অ্যাপয়েন্টমেন্ট গ্রহণ করুন",
    btnConditions: "ক্লিনিক্যাল সেবাসমূহ",
    btnProducts: "থেরাপি সামগ্রী ও খেলনা",
    heroPhotoNote: "ক্লিনিক্যাল প্র্যাকটিস, বৈজ্ঞানিক গবেষণা ও শিক্ষকতার মেলবন্ধন",
    
    // Quick Stats
    statPrompt: "দেশে মাত্র ৫৮ জন",
    statPromptSub: "PROMPT USA প্রশিক্ষিত ক্লিনিশিয়ান",
    statGim: "গবেষক ও লেখক",
    statGimSub: "Genetics in Medicine (DOI)",
    statDu: "ঢাকা বিশ্ববিদ্যালয়",
    statDuSub: "বি.এস.সি. ইন স্পিচ থেরাপি (CRP)",
    statReg: "SSLT/0093",
    statRegSub: "অফিসিয়াল জাতীয় রেজিস্ট্রেশন",

    condScope: "Scope of Clinical Practice",
    condHeading: "ক্লিনিক্যাল কন্ডিশন ও স্পিচ থেরাপি সেবাসমূহ",
    condSub: "আন্তর্জাতিক মানদণ্ড এবং বিজ্ঞানসম্মত এভিডেন্স-বেসড ক্লিনিক্যাল পদ্ধতিতে শিশু ও বয়স্কদের সমস্ত জটিলতার পুনর্বাসন।",
    condFilterAll: "সবগুলো (১০)",
    condFilterPediatric: "শিশু বিকাশ (৪)",
    condFilterSpeech: "উচ্চারণ ও ভয়েস (৩)",
    condFilterNeuro: "স্ট্রোক ও নিউরো (৩)",
    btnBookForCond: "এই সমস্যার জন্য বুক করুন",

    practiceScope: "বাস্তব ক্লিনিক্যাল পরিবেশ",
    practiceHeading: "বাস্তব থেরাপিউটিক মিথস্ক্রিয়া ও পদ্ধতিগত মূল্যায়ন",
    practiceSub: "প্রতিটি রোগীর মানসিক প্রস্তুতি ও বয়স অনুযায়ী আনন্দদায়ক পরিবেশে বৈজ্ঞানিক থেরাপি এবং নিখুঁত কেয়ার প্ল্যানিং",
    practiceCard1Badge: "১-অন-১ লাইভ থেরাপি সেশন",
    practiceCard1Caption: "সরাসরি মিথস্ক্রিয়া ও ফ্ল্যাশকার্ড অনুশীলন",
    practiceCard1Title: "শিশুবান্ধব প্রত্যক্ষ ইন্টারঅ্যাক্টিভ ইন্টারভেনশন",
    practiceCard1Desc: "ছবি কার্ড (Flashcards), স্পিচ অ্যাক্টিভিটি এবং খেলাচ্ছলে যোগাযোগের মাধ্যমে শিশুর জড়তা দূর করে শব্দ ভাণ্ডার সমৃদ্ধকরণ ও বাক্য গঠনের সক্রিয় অনুশীলন।",
    practiceCard1Bullet1: "স্পর্শ ও দৃষ্টিগ্রাহ্য সহায়ক সামগ্রী (Multisensory Aids)",
    practiceCard1Bullet2: "মনোযোগ ধরে রেখে স্বাভাবিক শব্দ উচ্চারণ বৃদ্ধি",
    practiceCard2Badge: "ক্লিনিক্যাল অ্যাসেসমেন্ট ও কেয়ার প্ল্যান",
    practiceCard2Caption: "পদ্ধতিগত মূল্যায়ন ও বৈজ্ঞানিক প্রেসক্রিপশন",
    practiceCard2Title: "নিখুঁত মূল্যায়ন ও ব্যক্তিগতকৃত প্রেসক্রিপশন",
    practiceCard2Desc: "প্রতিটি রোগীর জন্য ক্লিনিক্যাল পর্যবেক্ষণ, ডেভলপমেন্টাল মাইলস্টোন ট্র্যাকিং এবং দীর্ঘমেয়াদি উন্নতির লক্ষ্যে সুনির্দিষ্ট থেরাপি প্ল্যান ও গাইডলাইন প্রণয়ন।",
    practiceCard2Bullet1: "ব্যক্তিগতকৃত মাইলস্টোন ট্র্যাকিং ও প্রগ্রেস মনিটরিং",
    practiceCard2Bullet2: "পরিবারের জন্য বাস্তবসম্মত হোম-প্র্যাকটিস রুটিন",

    promptTitle: "বাংলাদেশে প্রথম PROMPT টেকনিক প্রশিক্ষিত ক্লিনিশিয়ান",
    promptBody: "The PROMPT Institute, USA কর্তৃক বাংলাদেশে প্রথমবারের মতো আয়োজিত 'Introduction to PROMPT: Technique' আন্তর্জাতিক কর্মশালায় বিশ্বখ্যাত মাস্টার ট্রেইনারদের কাছ থেকে সরাসরি প্রশিক্ষণপ্রাপ্ত। দেশের বিভিন্ন প্রান্ত থেকে নির্বাচিত মাত্র ৫৮ জন বিশেষজ্ঞ স্পিচ অ্যান্ড ল্যাঙ্গুয়েজ থেরাপিস্টদের মধ্যে তিনি অন্যতম।",
    promptClinicalNoteTitle: "ক্লিনিক্যাল গুরুত্ব:",
    promptClinicalNoteDesc: "স্পর্শ ও ইন্দ্রিয়নির্ভর (Tactile-Kinesthetic) নিউরোমাসকুলার সহায়তায় কথা বলতে না পারা, উচ্চারণ বিকৃতি ও মোটর স্পিচ জটিলতায় আক্রান্ত শিশুদের স্বাভাবিক শব্দ ফুটিয়ে তোলার অত্যন্ত আধুনিক আন্তর্জাতিক মেথড।",
    promptBadgeText: "আন্তর্জাতিক প্রশিক্ষণ • নির্বাচিত ৫৮ জন ক্লিনিশিয়ানের একজন",

    resScope: "Scientific Rigor & Studies",
    resHeading: "মেডিকেল গবেষণা ও বৈজ্ঞানিক প্রকাশনা",
    resSub: "আন্তর্জাতিক পিয়ার-রিভিউড প্রকাশনা ও অ্যাকাডেমিক গবেষণা কর্ম।",
    resEduTitle: "Perspectives Among Parents of Children with Autism on Inclusive Education",
    resEduText: "অটিজম বৈশিষ্ট্যসম্পন্ন শিশুদের মূলধারার সাধারণ শিক্ষায় অন্তর্ভুক্তি (Inclusive Education) এবং পারিবারিক দৃষ্টিভঙ্গির ওপর গবেষণা।",
    resCpdHeading: "অন্যান্য বিশেষায়িত ক্লিনিক্যাল প্রশিক্ষণ:",

    expScope: "Professional Trajectory",
    expHeading: "ক্লিনিক্যাল ক্যারিয়ার ও অতীত অভিজ্ঞতা",
    expSub: "সিআরপি (CRP), নিউরোজেন, সানশাইন, ব্লিস হ্যাভেন ও কলেজ শিক্ষকতার ধারাবাহিক পথচলা।",

    prodBadge: "Therapy Tools & Developmental Toys",
    prodHeading: "Our Products",
    prodSub: "Essential tools for effective therapy.",
    prodSubDesc: "শিশুর কথা বলা, উচ্চারণ ও ভাষাগত বিকাশের জন্য থেরাপিস্ট-অনুমোদিত বৈজ্ঞানিক খেলনা ও থেরাপি ম্যাটেরিয়ালস",
    btnOrderWA: "হোয়াটসঅ্যাপে অর্ডার বা বিস্তারিত জানুন",
    prodCatalogTitle: "কোন খেলনা বা ম্যাটেরিয়াল আপনার শিশুর জন্য প্রয়োজন?",
    prodCatalogSub: "আপনার শিশুর বয়স ও ডায়াগনোসিস অনুযায়ী সঠিক থেরাপি টুলস বাছাই করতে সরাসরি পরামর্শ ও অর্ডার করুন।",
    btnCatalogInquire: "হোয়াটসঅ্যাপে ক্যাটালগ ও অর্ডার",

    faqScope: "সচরাচর জিজ্ঞাসা ও তথ্য",
    faqHeading: "সাধারণ জিজ্ঞাসা ও তথ্য",
    faqSub: "চিকিৎসা সেবা, টেলি-থেরাপি ও হোম ভিজিট সংক্রান্ত সচরাচর জিজ্ঞাসিত প্রশ্নাবলী।",

    feePre: "Consultation & Care Protocols",
    feeHeading: "পরামর্শ, হোম ভিজিট ও ফি সংক্রান্ত তথ্য",
    feeSub: "রোগী ও পরিবারের সুবিধার্থে স্পষ্ট, মার্জিত ও সুনির্দিষ্ট তথ্য।",
    cardTeleTitle: "ভিডিও স্ক্রিনিং ও নিয়মিত ফলো-আপ",
    cardTeleDesc: "দেশের যেকোনো প্রান্ত থেকে অথবা প্রবাসী পরিবারের সদস্যদের জন্য সরাসরি ১-অন-১ ভিডিও পরামর্শ, স্ক্রিনিং ও হোম-গাইডলাইন সেবা।",
    feeText: "সেশন কনসালটেশন ফি:",
    perSession: "/ সেশন",
    cardHomeTitle: "বাসায় বিশেষায়িত ক্লিনিক্যাল থেরাপি",
    cardHomeDesc: "অটিজম বা অতি-সংবেদনশীল শিশুদের ঘরোয়া পরিবেশে খেলাচ্ছলে ইন্টারভেনশন এবং বয়স্ক শয্যাশায়ী স্ট্রোক/প্যারালাইসিস রোগীদের বেডসাইড রিহ্যাবিলিটেশন।",
    homeNote: "রোগীর শারীরিক অবস্থা, অবস্থান ও প্রয়োজনীয় সেশন সংখ্যার ওপর ভিত্তি করে হোম ভিজিটের সময়সূচি আলোচনা সাপেক্ষে নির্ধারিত হয়।",
    
    formPre: "সহজ ও সরাসরি ক্লিনিক্যাল অ্যাপয়েন্টমেন্ট",
    formTitle: "অ্যাপয়েন্টমেন্ট বা কনসালটেশনের জন্য আবেদন করুন",
    formSub: "নিচের সহজ তথ্যগুলো পূরণ করে সরাসরি হোয়াটসঅ্যাপে পাঠান। থেরাপিস্ট নিজে আপনার সাথে কথা বলে সুবিধাজনক সময় চূড়ান্ত করবেন।",
    lblPatientName: "রোগীর নাম *",
    lblAge: "রোগীর বয়স *",
    lblPhone: "মোবাইল / হোয়াটসঅ্যাপ নম্বর *",
    lblMode: "থেরাপির ধরণ (Mode of Therapy) *",
    lblCondition: "সমস্যার ধরণ (Primary Condition) *",
    lblSlot: "পছন্দের সময়সূচি (Preferred Time Slot) *",
    lblDate: "সম্ভাব্য তারিখ (Preferred Date)",
    lblAddress: "ঠিকানা / এলাকা (হোম ভিজিটের ক্ষেত্রে)",
    lblNotes: "সমস্যার সংক্ষিপ্ত বিবরণ (Problem Summary)",
    btnSubmitWA: "হোয়াটসঅ্যাপে সরাসরি অ্যাপয়েন্টমেন্ট পাঠান",
    submitNote: "ফর্মটি সাবমিট করলে তথ্যগুলো সুন্দরভাবে সাজিয়ে সরাসরি অফিসিয়াল হোয়াটসঅ্যাপে (+8801768706080) বার্তা যাবে।",

    floatingChatText: "পরামর্শের জন্য হোয়াটসঅ্যাপ করুন",
    footerQuickLinks: "দ্রুত লিঙ্ক",
    footerContact: "চেম্বার ও যোগাযোগ",
    footerSpecialtiesTitle: "বিশেষায়িত সেবাসমূহ",
    footerCtaTitle: "বিশেষায়িত স্পিচ থেরাপি বা কনসালটেশনের জন্য আজই যোগাযোগ করুন",
    footerCtaDesc: "আন্তর্জাতিক মেথড (PROMPT, GLP) ও ক্লিনিক্যাল এভিডেন্স-বেসড কেয়ারের মাধ্যমে শিশুর স্বাভাবিক বাক ও ভাষার বিকাশ ত্বরান্বিত করুন। ঢাকা সিটিতে হোম ভিজিট এবং দেশ-বিদেশে অনলাইন টেলি-থেরাপি সেবা উন্মুক্ত।",
    footerBookBtn: "অনলাইন অ্যাপয়েন্টমেন্ট নিন",
    footerWhatsappBtn: "হোয়াটসঅ্যাপে কথা বলুন",
    footerBackToTop: "উপরে যান",

    tabHome: "পরিচিতি",
    tabServices: "সেবাসমূহ",
    tabBooking: "বুকিং",
    tabFaq: "প্রশ্নোত্তর",
    tabChat: "চ্যাট"
  },
  en: {
    pageTitle: "Ahammad Sharif Sakib | Senior Clinical Speech & Language Therapist & Senior Lecturer (Dhaka & Mymensingh)",
    navAbout: "About",
    navServices: "Services",
    navCred: "Research",
    navExp: "Experience",
    navProducts: "Products",
    navFaq: "FAQ",
    navContact: "Fees & Booking",
    navAppt: "Book Appointment",

    heroStatusBadge: "Online Tele-Therapy & Dhaka Home Visits Open",
    heroTitle: "Ahammad Sharif Sakib",
    heroSubtitle: "Senior Clinical Speech & Language Therapist | Senior Lecturer, Department of SLT, MCPHS",
    heroBioHook: "Ahammad Sharif Sakib is a Senior Clinical Speech & Language Therapist, medical researcher, and academic lecturer. Grounded in extensive clinical practice and evidence-based science, he specializes in pediatric speech-language disorders and adult post-stroke neurological communication recovery. Consultations are available conveniently via live tele-therapy and home visits within Dhaka.",
    heroBioP1: "He is among the select 58 clinicians across Bangladesh trained in the 'Introduction to PROMPT: Technique Workshop' directly under master trainers from The PROMPT Institute, USA. He holds further specialized credentials in Gestalt Language Processing (GLP) and Childhood Apraxia of Speech (CAS).",
    heroBioP2: "He is actively engaged in medical research, co-authoring a neurodevelopmental genomic study published in the official peer-reviewed journal of the ACMG, Genetics in Medicine (GIM, DOI: 10.1016/j.gim.2024.101282), alongside academic studies on Inclusive Education for Children with Autism.",
    heroBioP3: "Having contributed extensively at Centre for the Rehabilitation of the Paralysed (CRP Savar & Mirpur), NeuroGen Healthcare, Sunshine, and Bliss Heaven, he currently lectures at MCPHS while maintaining high-standard clinical care.",
    btnBioMore: "Read Full Profile",
    btnBioLess: "Show Less",
    btnAppt: "Request Appointment",
    btnConditions: "Clinical Services",
    btnProducts: "Therapy Products & Toys",
    heroPhotoNote: "Integration of clinical practice, medical research, and academic lecturing",

    // Quick Stats
    statPrompt: "Only 58 in BD",
    statPromptSub: "PROMPT Institute USA Trained",
    statGim: "Medical Researcher",
    statGimSub: "Genetics in Medicine (DOI)",
    statDu: "Dhaka University",
    statDuSub: "B.Sc. in SLT (CRP/BHPI)",
    statReg: "SSLT/0093",
    statRegSub: "National Registered Clinician",

    condScope: "Scope of Clinical Practice",
    condHeading: "Clinical Conditions & Speech Therapy Services",
    condSub: "Comprehensive, evidence-based clinical rehabilitation adhering to international speech-language pathology standards.",
    condFilterAll: "All (10)",
    condFilterPediatric: "Pediatric & Autism (4)",
    condFilterSpeech: "Speech & Fluency (3)",
    condFilterNeuro: "Stroke & Neuro (3)",
    btnBookForCond: "Book for this Condition",

    practiceScope: "Authentic Clinical Environment",
    practiceHeading: "Therapeutic Interaction & Systematic Assessment",
    practiceSub: "Evidence-based, child-centered clinical interventions and structured care plans tailored to each developmental milestone.",
    practiceCard1Badge: "1-on-1 Live Clinical Session",
    practiceCard1Caption: "Direct Interaction & Flashcard Practice",
    practiceCard1Title: "Child-Centered Interactive Intervention",
    practiceCard1Desc: "Engaging speech activities, picture flashcards, and play-based communication designed to overcome speech hesitations and build active vocabulary.",
    practiceCard1Bullet1: "Multisensory visual & tactile speech stimulation",
    practiceCard1Bullet2: "Sustaining engagement for natural phonation",
    practiceCard2Badge: "Clinical Assessment & Care Plan",
    practiceCard2Caption: "Systematic Diagnostic & Evidence-Based Protocols",
    practiceCard2Title: "Precision Assessment & Individualized Care Plan",
    practiceCard2Desc: "Meticulous clinical evaluation, developmental milestone mapping, and tailored long-term intervention protocols with clear parental roadmaps.",
    practiceCard2Bullet1: "Customized milestone tracking & progress metrics",
    practiceCard2Bullet2: "Feasible, structured home-practice guidance",

    promptTitle: "Historic PROMPT Technique Trained Clinician in BD",
    promptBody: "Formally trained in 'Introduction to PROMPT: Technique' directly under international master trainers from The PROMPT Institute, USA. He is among the pioneering 58 clinicians selected across Bangladesh.",
    promptClinicalNoteTitle: "Clinical Significance:",
    promptClinicalNoteDesc: "A tactile-kinesthetic neuromuscular method proven internationally for motor speech programming deficits, childhood apraxia, and non-verbal speech delay.",
    promptBadgeText: "International Training • Selected 58 Clinicians Nationwide",

    resScope: "Scientific Rigor & Studies",
    resHeading: "Medical Research & Scientific Publications",
    resSub: "Peer-reviewed scientific contributions and academic clinical investigations.",
    resEduTitle: "Perspectives Among Parents of Children with Autism on Inclusive Education",
    resEduText: "Academic research analyzing parental perspectives and structural factors surrounding inclusive education for autistic children.",
    resCpdHeading: "Additional Specialized Clinical Trainings:",

    expScope: "Professional Trajectory",
    expHeading: "Clinical Career & Track Record",
    expSub: "Distinguished clinical background at CRP Savar, NeuroGen, Sunshine, Bliss Heaven, and MCPHS.",

    prodBadge: "Therapy Tools & Developmental Toys",
    prodHeading: "Our Products",
    prodSub: "Essential tools for effective therapy.",
    prodSubDesc: "Therapist-recommended clinical aids and toys engineered for speech, phonetics, and communication progress.",
    btnOrderWA: "Order or Inquire via WhatsApp",
    prodCatalogTitle: "Need guidance on which tool fits your child?",
    prodCatalogSub: "Directly inquire on WhatsApp to match age, developmental stage, and therapy objectives.",
    btnCatalogInquire: "Inquire Catalog on WhatsApp",

    faqScope: "Patient Guidance & FAQ",
    faqHeading: "Frequently Asked Questions",
    faqSub: "Clear answers regarding online sessions, home visits, fees, and therapeutic methods.",

    feePre: "Consultation & Care Protocols",
    feeHeading: "Consultation, Home Visits & Fees",
    feeSub: "Transparent, dignified, and accessible care for domestic and expatriate families.",
    cardTeleTitle: "Live Video Screening & Follow-Up",
    cardTeleDesc: "Direct 1-on-1 clinical screening, guidance, and session follow-up via Zoom, Google Meet, or WhatsApp.",
    feeText: "Session Consultation Fee:",
    perSession: "/ session",
    cardHomeTitle: "Specialized Home-Based Therapy",
    cardHomeDesc: "Play-based naturalistic therapy for neurodivergent children and bedside neurological rehabilitation for adult stroke patients.",
    homeNote: "Home visit feasibility and schedules are determined based on patient condition and location.",

    formPre: "Online Appointment Request",
    formTitle: "Request an Appointment or Consultation",
    formSub: "Fill in the details to submit directly to official WhatsApp (+8801768706080) for prompt scheduling.",
    lblPatientName: "Patient Name *",
    lblAge: "Patient Age *",
    lblPhone: "Mobile / WhatsApp Number *",
    lblMode: "Mode of Therapy *",
    lblCondition: "Primary Condition / Concern *",
    lblSlot: "Preferred Time Slot *",
    lblDate: "Preferred Date",
    lblAddress: "Address / Area (For Home Visits)",
    lblNotes: "Problem Summary / Clinical Notes",
    btnSubmitWA: "Send Request via WhatsApp",
    submitNote: "Submitting this form compiles all information into a polite, structured WhatsApp message to +8801768706080.",

    floatingChatText: "Chat for Consultation",
    footerQuickLinks: "Quick Navigation",
    footerContact: "Chamber & Contact",
    footerSpecialtiesTitle: "Clinical Specialties",
    footerCtaTitle: "Consult with a Clinical Speech & Language Specialist Today",
    footerCtaDesc: "Accelerate your child's functional communication and speech development with international techniques (PROMPT, GLP) and evidence-based care. Online tele-therapy & home visits available.",
    footerBookBtn: "Book Online Appointment",
    footerWhatsappBtn: "Chat on WhatsApp",
    footerBackToTop: "Back to Top",

    tabHome: "About",
    tabServices: "Services",
    tabBooking: "Booking",
    tabFaq: "FAQ",
    tabChat: "Chat"
  }
};

// ==========================================
// 5. RENDER FUNCTIONS
// ==========================================

/**
 * Render Clinical Conditions with filtering & visual hierarchy
 */
function renderConditions(filter = 'all') {
  currentCategoryFilter = filter;
  const container = document.getElementById('conditionsGrid');
  if (!container) return;

  const filteredData = filter === 'all' 
    ? clinicalConditionsData 
    : clinicalConditionsData.filter(item => item.category === filter);

  container.innerHTML = filteredData.map(item => {
    const c = item[currentLang];
    const num = currentLang === 'bn' ? item.numBn : item.numEn;

    let tagBadgeClass = "bg-teal-50 text-teal-800 border-teal-200/90";
    let iconBgClass = "bg-teal-50 text-teal-700";
    if (item.category === "speech") {
      tagBadgeClass = "bg-amber-50 text-amber-800 border-amber-200/90";
      iconBgClass = "bg-amber-50 text-amber-700";
    } else if (item.category === "neuro") {
      tagBadgeClass = "bg-sky-50 text-sky-800 border-sky-200/90";
      iconBgClass = "bg-sky-50 text-sky-700";
    }

    return `
      <div class="glass-card rounded-2xl p-6 sm:p-7 card-hover-lift flex flex-col justify-between border border-slate-200/90 group relative overflow-hidden transition-all duration-300">
        <div>
          <!-- Top Row: Index, Category Badge, Medical Icon -->
          <div class="flex items-center justify-between gap-3 mb-4">
            <div class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-xl bg-slate-900 text-white text-xs font-black flex items-center justify-center font-mono shadow-xs group-hover:bg-clinical-teal transition-colors">
                ${num}
              </span>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${tagBadgeClass}">
                <span class="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
                ${c.tag}
              </span>
            </div>
            <div class="w-10 h-10 rounded-xl ${iconBgClass} group-hover:bg-clinical-teal group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-xs">
              <i class="fa-solid ${item.icon} text-base"></i>
            </div>
          </div>

          <!-- Title -->
          <h4 class="font-extrabold text-base sm:text-lg text-slate-900 mb-2.5 leading-snug group-hover:text-clinical-teal transition-colors">
            ${c.t}
          </h4>

          <!-- Description -->
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            ${c.d}
          </p>
        </div>

        <!-- Quick Select Link to Appointment Form -->
        <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <button onclick="selectConditionAndScroll('${item.bn.t.replace(/'/g, "\\'")}')" class="text-xs sm:text-[13px] font-extrabold text-clinical-teal hover:text-clinical-navy transition-colors inline-flex items-center gap-2 cursor-pointer group/btn">
            <span>${dictionary[currentLang].btnBookForCond}</span>
            <i class="fa-solid fa-arrow-right text-xs transition-transform group-hover/btn:translate-x-1"></i>
          </button>
          <span class="text-xs text-slate-400 font-semibold">${currentLang === 'bn' ? 'ক্লিনিক্যাল কেয়ার' : 'Evidence-Based'}</span>
        </div>
      </div>
    `;
  }).join('');

  // Update active states on filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const cat = btn.getAttribute('data-category');
    if (cat === filter) {
      btn.classList.add('active', 'bg-clinical-navy', 'text-white', 'border-clinical-navy');
      btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-300');
    } else {
      btn.classList.remove('active', 'bg-clinical-navy', 'text-white', 'border-clinical-navy');
      btn.classList.add('bg-white', 'text-slate-700', 'border-slate-300');
    }
  });
}

/**
 * Filter conditions by category
 */
function filterConditions(category) {
  renderConditions(category);
}

/**
 * Render Therapy Products
 */
function renderProducts() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  container.innerHTML = productsData.map(p => {
    const data = p[currentLang];
    const waMsg = encodeURIComponent(
      `Hello Ahammad Sharif Sakib, I am interested in inquiring/ordering: ${p.en.title} (${data.sub}) featured on sakibslt.com.`
    );

    return `
      <div class="glass-card rounded-3xl p-6 sm:p-7 card-hover-lift flex flex-col justify-between border border-slate-200/90 group">
        <div>
          <!-- Visual Category Icon -->
          <div class="w-14 h-14 rounded-2xl ${p.color} border flex items-center justify-center text-2xl mb-5 group-hover:scale-105 transition-transform shadow-xs">
            <i class="fa-solid ${p.icon}"></i>
          </div>

          <!-- Product Category Subtitle -->
          <span class="text-xs font-extrabold text-clinical-teal uppercase tracking-wider block mb-1">
            ${data.sub}
          </span>

          <!-- Product Title -->
          <h3 class="text-base sm:text-lg font-extrabold text-clinical-navy leading-snug mb-2.5">
            ${data.title}
          </h3>

          <!-- Therapeutic Description -->
          <p class="text-xs sm:text-sm lg:text-[14.5px] text-slate-600 leading-relaxed mb-6">
            ${data.desc}
          </p>
        </div>

        <!-- WhatsApp Inquire Button -->
        <div class="pt-4 border-t border-slate-200/80">
          <a href="https://wa.me/8801768706080?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="w-full bg-white hover:bg-emerald-600 text-slate-700 hover:text-white border border-slate-300 hover:border-emerald-600 text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs group/btn">
            <i class="fa-brands fa-whatsapp text-emerald-500 group-hover/btn:text-white transition-colors text-base"></i>
            <span>${dictionary[currentLang].btnOrderWA}</span>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Filter & Render Frequently Asked Questions with Category Filtering & Modern Card UI
 */
function filterFAQs(category) {
  currentFaqFilter = category;
  document.querySelectorAll('.faq-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-faq-cat') === category) {
      btn.className = 'faq-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer bg-clinical-navy text-white border-clinical-navy shadow-xs';
    } else {
      btn.className = 'faq-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer bg-white text-slate-700 border-slate-300 hover:border-teal-500 hover:text-teal-700';
    }
  });
  renderFAQs();
}

function renderFAQs() {
  const container = document.getElementById('faqAccordion');
  if (!container) return;

  const filtered = currentFaqFilter === 'all' 
    ? faqsData 
    : faqsData.filter(f => f.category === currentFaqFilter);

  container.innerHTML = filtered.map(faq => {
    const item = faq[currentLang];
    return `
      <div class="faq-card bg-white border-2 border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200 hover:border-teal-500/50 shadow-xs hover:shadow-md">
        <button onclick="toggleFAQ(${faq.id})" class="w-full px-5 sm:px-6 py-4 sm:py-4.5 text-left flex items-center justify-between gap-3 sm:gap-4 font-bold text-slate-900 hover:text-clinical-teal transition-colors cursor-pointer group">
          <div class="flex items-center gap-3 sm:gap-3.5 min-w-0">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${faq.iconBg} ${faq.iconColor} flex items-center justify-center text-base sm:text-lg shrink-0 border border-slate-200/60 group-hover:scale-105 transition-transform">
              <i class="${faq.icon}"></i>
            </div>
            <div class="min-w-0">
              <span class="inline-block px-2.5 py-0.5 rounded-md text-xs font-extrabold ${faq.badgeStyle} mb-1.5">
                ${item.badge}
              </span>
              <h4 class="text-sm sm:text-base lg:text-[16.5px] font-extrabold text-slate-900 group-hover:text-clinical-teal leading-snug">
                ${item.q}
              </h4>
            </div>
          </div>
          <div class="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-teal-50 group-hover:text-clinical-teal transition-colors shrink-0">
            <i id="faq-icon-${faq.id}" class="fa-solid fa-chevron-down text-xs transition-transform duration-300"></i>
          </div>
        </button>
        <div id="faq-content-${faq.id}" class="accordion-content px-5 sm:px-6 pb-5 text-xs sm:text-sm lg:text-[14.5px] text-slate-600 leading-relaxed border-t border-slate-100/90 pt-3.5 bg-gradient-to-b from-teal-50/20 to-white">
          <p class="font-normal text-slate-700 leading-relaxed">${item.a}</p>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Toggle single FAQ item
 */
function toggleFAQ(id) {
  const content = document.getElementById(`faq-content-${id}`);
  const icon = document.getElementById(`faq-icon-${id}`);
  if (!content) return;

  const isOpen = content.classList.contains('open');
  // Close all open FAQs
  document.querySelectorAll('.accordion-content').forEach(el => el.classList.remove('open'));
  document.querySelectorAll('[id^="faq-icon-"]').forEach(el => el.classList.remove('rotate-180'));

  if (!isOpen) {
    content.classList.add('open');
    icon.classList.add('rotate-180');
  }
}

/**
 * Toggle Hero Biography (Read More / Show Less)
 */
function toggleBio() {
  const bioEl = document.getElementById('expandedBioContent');
  const textEl = document.getElementById('bioToggleText');
  const iconEl = document.getElementById('bioToggleIcon');

  isBioExpanded = !isBioExpanded;
  if (isBioExpanded) {
    bioEl.classList.remove('hidden');
    textEl.innerText = dictionary[currentLang].btnBioLess;
    iconEl.classList.add('rotate-180');
  } else {
    bioEl.classList.add('hidden');
    textEl.innerText = dictionary[currentLang].btnBioMore;
    iconEl.classList.remove('rotate-180');
  }
}

/**
 * Mobile Navigation Drawer Toggle
 */
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const icon = document.getElementById('mobileMenuIcon');
  if (!menu) return;

  if (menu.classList.contains('closed')) {
    menu.classList.remove('closed');
    menu.classList.add('open');
    if (icon) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    }
  } else {
    menu.classList.remove('open');
    menu.classList.add('closed');
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  }
}

/**
 * Pre-select a condition in the appointment form and scroll down smoothly
 */
function selectConditionAndScroll(conditionValue) {
  const condInput = document.getElementById('clinicalCondition');
  if (condInput) {
    condInput.value = conditionValue;
    // Highlight matching chip if available
    const chips = document.querySelectorAll('.problem-chip');
    chips.forEach(chip => {
      const chipText = chip.innerText.toLowerCase();
      const valSnippet = conditionValue.split('(')[0].trim().toLowerCase();
      if (chipText.includes(valSnippet) || conditionValue.toLowerCase().includes(chipText.substring(0, 6))) {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      }
    });
  }

  const formSection = document.getElementById('appointmentForm') || document.getElementById('consultation');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Toggle Language (Bengali <-> English)
 */
function toggleLanguage() {
  currentLang = currentLang === 'bn' ? 'en' : 'bn';
  document.documentElement.lang = currentLang;
  if (dictionary[currentLang] && dictionary[currentLang].pageTitle) {
    document.title = dictionary[currentLang].pageTitle;
  }
  const labelEl = document.getElementById('langSwitchLabel');
  if (labelEl) {
    labelEl.innerText = currentLang === 'bn' ? 'English' : 'বাংলা';
  }

  // Update text for all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dictionary[currentLang] && dictionary[currentLang][key]) {
      el.innerText = dictionary[currentLang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dictionary[currentLang] && dictionary[currentLang][key]) {
      el.setAttribute('placeholder', dictionary[currentLang][key]);
    }
  });

  // Update Bio Toggle button text
  const textEl = document.getElementById('bioToggleText');
  if (textEl) {
    textEl.innerText = isBioExpanded ? dictionary[currentLang].btnBioLess : dictionary[currentLang].btnBioMore;
  }

  // Re-render dynamic sections
  renderConditions(currentCategoryFilter);
  renderProducts();
  renderFAQs();
}

/**
 * Number Sanitizer: Converts Bangla Numerals (০-৯) to English (0-9)
 */
function convertBanglaToEnglishDigits(str) {
  if (!str) return '';
  const banglaDigits = {'০':'0', '১':'1', '২':'2', '৩':'3', '৪':'4', '৫':'5', '৬':'6', '৭':'7', '৮':'8', '৯':'9'};
  return str.replace(/[০-৯]/g, d => banglaDigits[d]);
}

/**
 * Visual Selection Handlers for Appointment Form
 */
function selectTherapyMode(cardEl, modeValue) {
  const hiddenInput = document.getElementById('therapyMode');
  if (hiddenInput) hiddenInput.value = modeValue;

  document.querySelectorAll('.therapy-choice-card').forEach(el => {
    el.classList.remove('active');
    const indicator = el.querySelector('.check-indicator');
    if (indicator) {
      indicator.innerHTML = '<i class="fa-regular fa-circle"></i>';
      indicator.className = 'check-indicator text-slate-300 text-base';
    }
  });

  cardEl.classList.add('active');
  const activeIndicator = cardEl.querySelector('.check-indicator');
  if (activeIndicator) {
    activeIndicator.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    activeIndicator.className = 'check-indicator text-teal-600 text-base';
  }

  // Address guidance for Home Visit
  const isHome = modeValue.includes('হোম ভিজিট') || modeValue.includes('Home Visit');
  const addressWrapper = document.getElementById('addressWrapper');
  const addressInput = document.getElementById('patientAddress');
  if (addressWrapper && addressInput) {
    if (isHome) {
      addressInput.focus();
      addressInput.classList.add('border-teal-500', 'bg-teal-50/40');
    } else {
      addressInput.classList.remove('border-teal-500', 'bg-teal-50/40');
    }
  }
}

function selectConditionChip(chipEl, condValue) {
  const hiddenInput = document.getElementById('clinicalCondition');
  if (hiddenInput) hiddenInput.value = condValue;

  document.querySelectorAll('.problem-chip').forEach(el => el.classList.remove('active'));
  chipEl.classList.add('active');
}

function selectSlotChip(chipEl, slotValue) {
  const hiddenInput = document.getElementById('preferredSlot');
  if (hiddenInput) hiddenInput.value = slotValue;

  document.querySelectorAll('.slot-choice-chip').forEach(el => el.classList.remove('active'));
  chipEl.classList.add('active');
}

function initAppointmentFormValidation() {
  const nameInput = document.getElementById('patientName');
  const phoneInput = document.getElementById('patientPhone');

  if (nameInput) {
    nameInput.addEventListener('input', () => {
      const err = document.getElementById('patientNameError');
      if (nameInput.value.trim().length >= 2) {
        if (err) err.classList.add('hidden');
        nameInput.classList.remove('border-rose-500', 'bg-rose-50/50');
      }
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      const err = document.getElementById('patientPhoneError');
      const clean = convertBanglaToEnglishDigits(phoneInput.value).replace(/[\s\-\(\)\+]/g, '');
      if (clean.length >= 8) {
        if (err) err.classList.add('hidden');
        phoneInput.classList.remove('border-rose-500', 'bg-rose-50/50');
      }
    });
  }
}

/**
 * Direct WhatsApp Appointment Dispatcher with Ultra-Friendly UX
 */
function handleAppointmentSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById('patientName');
  const ageInput = document.getElementById('patientAge');
  const phoneInput = document.getElementById('patientPhone');
  const modeInput = document.getElementById('therapyMode');
  const conditionInput = document.getElementById('clinicalCondition');
  const slotInput = document.getElementById('preferredSlot');
  const addressInput = document.getElementById('patientAddress');
  const notesInput = document.getElementById('patientNotes');

  const name = nameInput ? nameInput.value.trim() : '';
  const age = ageInput ? ageInput.value.trim() : '';
  const rawPhone = phoneInput ? phoneInput.value.trim() : '';
  const phone = convertBanglaToEnglishDigits(rawPhone);
  const mode = modeInput ? modeInput.value : 'অনলাইন টেলি-থেরাপি (Online Tele-Therapy - 500 BDT)';
  const condition = conditionInput ? conditionInput.value : 'শিশুর কথা বলতে দেরি (Speech & Language Delay)';
  const slot = slotInput ? slotInput.value : 'সকাল ১০টা - দুপুর ১টা';
  const address = (addressInput && addressInput.value.trim()) ? addressInput.value.trim() : 'N/A';
  const notes = (notesInput && notesInput.value.trim()) ? notesInput.value.trim() : (currentLang === 'bn' ? 'কোনো বাড়তি নোট নেই' : 'None');

  let hasError = false;

  // 1. Validate Name (simple & friendly)
  const nameError = document.getElementById('patientNameError');
  if (name.length < 2) {
    if (nameError) nameError.classList.remove('hidden');
    if (nameInput) {
      nameInput.classList.add('border-rose-500', 'bg-rose-50/50');
      nameInput.focus();
    }
    hasError = true;
  } else {
    if (nameError) nameError.classList.add('hidden');
    if (nameInput) nameInput.classList.remove('border-rose-500', 'bg-rose-50/50');
  }

  // 2. Validate Phone (accepts standard or BD numbers)
  const phoneError = document.getElementById('patientPhoneError');
  const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, '');
  if (cleanPhone.length < 8) {
    if (phoneError) phoneError.classList.remove('hidden');
    if (phoneInput) {
      phoneInput.classList.add('border-rose-500', 'bg-rose-50/50');
      if (!hasError) phoneInput.focus();
    }
    hasError = true;
  } else {
    if (phoneError) phoneError.classList.add('hidden');
    if (phoneInput) phoneInput.classList.remove('border-rose-500', 'bg-rose-50/50');
  }

  if (hasError) return;

  // Button loading feedback
  const submitBtn = document.getElementById('submitAppointmentBtn');
  const originalHtml = submitBtn ? submitBtn.innerHTML : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin text-2xl"></i> <span>হোয়াটসঅ্যাপে পাঠানো হচ্ছে...</span>`;
  }

  const message = 
`*স্পিচ থেরাপি কনসালটেশন বুকিং (sakibslt.com)*
------------------------------------------
👤 *রোগীর নাম:* ${name}
🎂 *বয়স:* ${age || 'উল্লেখ করা হয়নি'}
📱 *মোবাইল নম্বর:* ${phone}
🏥 *পরামর্শের মাধ্যম:* ${mode}
🩺 *প্রধান সমস্যা:* ${condition}
⏰ *পছন্দের সময়:* ${slot}
📍 *ঠিকানা / এলাকা:* ${address}
📝 *সংক্ষিপ্ত বিবরণ:* ${notes}
------------------------------------------
_অনুগ্রহ করে আপনার সুবিধাজনক সময়ে যোগাযোগ করে স্লটটি নিশ্চিত করবেন। (sakibslt.com)_`;

  const whatsappUrl = `https://wa.me/8801768706080?text=${encodeURIComponent(message)}`;

  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHtml;
    }
  }, 350);
}

/**
 * Active Navigation Scrollspy Engine
 */
const sectionList = ['about', 'conditions', 'credentials', 'experience', 'products', 'faq', 'consultation'];
function handleScrollspy() {
  const scrollPos = window.scrollY + 130;
  for (let i = sectionList.length - 1; i >= 0; i--) {
    const sec = document.getElementById(sectionList[i]);
    if (sec && sec.offsetTop <= scrollPos) {
      const activeId = sectionList[i];
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeId}`) {
          link.classList.add('active');
        }
      });

      // Update mobile bottom tab bar active item
      document.querySelectorAll('.mobile-tab-item').forEach(tab => {
        tab.classList.remove('active');
        const tabTarget = tab.getAttribute('data-tab');
        if (tabTarget === activeId) {
          tab.classList.add('active');
        }
      });
      break;
    }
  }
}

/**
 * Interactive Scroll-Driven Neon Timeline Flow
 */
function handleTimelineNeonScroll() {
  const container = document.getElementById('timelineContainer');
  const neonLine = document.getElementById('timelineNeonLine');
  const neonHead = document.getElementById('timelineNeonHead');
  if (!container || !neonLine) return;

  const rect = container.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  // Trigger calculation: beam enters when container top enters 65% of viewport
  const triggerPoint = windowHeight * 0.65;
  const containerHeight = rect.height;
  
  // Progress from 0 (when top hits triggerPoint) to 1 (when bottom hits triggerPoint)
  const scrolled = triggerPoint - rect.top;
  let progress = scrolled / containerHeight;
  progress = Math.max(0, Math.min(1, progress));

  const percent = (progress * 100).toFixed(2);
  neonLine.style.height = `${percent}%`;

  if (neonHead) {
    neonHead.style.top = `${percent}%`;
    neonHead.style.opacity = progress > 0.01 ? '1' : '0';
  }

  // Activate milestone nodes as neon light passes them
  const items = container.querySelectorAll('.timeline-item');
  let currentActiveItem = null;

  items.forEach(item => {
    const dotWrapper = item.querySelector('.timeline-dot-wrapper');
    if (dotWrapper) {
      const dotRect = dotWrapper.getBoundingClientRect();
      if (dotRect.top <= triggerPoint) {
        item.classList.add('neon-active');
        currentActiveItem = item; // the latest / deepest milestone reached by the neon light
      } else {
        item.classList.remove('neon-active');
        item.classList.remove('neon-current');
      }
    }
  });

  // Highlight & enlarge the specific card currently reached by the neon light
  items.forEach(item => {
    if (item === currentActiveItem) {
      item.classList.add('neon-current');
    } else {
      item.classList.remove('neon-current');
    }
  });
}

/**
 * Scroll Listener: Back to Top button, Scrollspy & Neon Timeline
 */
window.addEventListener('scroll', () => {
  handleScrollspy();
  handleTimelineNeonScroll();

  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove('hidden-btn');
      backToTopBtn.classList.add('visible-btn');
    } else {
      backToTopBtn.classList.remove('visible-btn');
      backToTopBtn.classList.add('hidden-btn');
    }
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 6. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderConditions('all');
  renderProducts();
  renderFAQs();
  handleScrollspy();
  handleTimelineNeonScroll();
  initAppointmentFormValidation();

  // Close mobile menu when clicking nav links
  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu();
    });
  });
});
