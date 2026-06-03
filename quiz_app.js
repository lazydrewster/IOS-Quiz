const questionBank = [
  {
    id: 1,
    question: "Where a fire pump is supplied by a transformer that is dedicated to the pump and related equipment, an overcurrent protection device is only permitted to be installed on the __?__ side of the transformer.",
    choices: ["a. load", "b. primary", "c. primary or secondary", "d. secondary"],
    answer: "b",
    source: "visible/standard fire-pump transformer rule"
  },
  {
    id: 2,
    question: "When using fuses to provide primary-only protection, what is the maximum size overcurrent protective device permitted to protect a 750VA, 480V primary, 48V secondary, single-phase transformer?",
    answer: "3 A",
    source: "inferred from primary current and NEC transformer OCPD standard sizing"
  },
  {
    id: 3,
    question: "When using fuses to provide primary-only protection, what is the maximum size overcurrent protective device permitted to protect a 4kVA, 480V primary, 120V secondary, single-phase transformer?",
    answer: "15 A",
    source: "inferred from primary current and NEC transformer OCPD standard sizing"
  },
  {
    id: 4,
    question: "What minimum size THWN-2 copper secondary conductors are permitted for a 112.5kVA, 3-phase, 240V primary and a 480Y/277V secondary pad-mounted transformer set outside of a second building when the secondary conductors terminate in a single 3-pole circuit breaker rated 150 amperes?",
    choices: wireChoices(),
    answer: "h",
    source: "calculated from 150 A secondary breaker/conductor ampacity choice set"
  },
  {
    id: 5,
    question: "Which of the following variables represents an overcurrent protective device?",
    choices: ["a. Isec.", "b. kVA", "c. LRC", "d. OCPD"],
    answer: "d",
    source: "visible choice; OCPD means overcurrent protective device"
  },
  {
    id: 6,
    question: "What is the calculated secondary current of a 42kVA, single-phase transformer with a secondary voltage rating of 120 volts? (Round your FINAL answer to the nearest hundredth.)",
    answer: "350 A",
    source: "calculated: single-phase secondary current = kVA x 1000 / volts"
  },
  {
    id: 7,
    question: "What is the calculated primary current of a 60kVA, 3-phase transformer with a primary voltage rating of 480 volts? (Round your FINAL answer to the nearest hundredth.)",
    answer: "72.17 A",
    source: "calculated: 3-phase primary current = kVA x 1000 / (1.732 x volts)"
  },
  {
    id: 8,
    question: "When using primary and secondary protection, what is the maximum standard size secondary overcurrent protective device permitted to protect a 60kVA, 480 primary, 120/240V secondary, 3-phase transformer?",
    answer: "200 A",
    source: "calculated from transformer secondary current and standard OCPD sizing"
  },
  {
    id: 9,
    question: "For an installation with a 95kVA, 3-phase transformer, a 480V primary, and THHN copper conductors, what are the minimum allowable conductors and the maximum size OCPD permitted that will protect the conductors and the primary of transformer where the protection method is primary-only protection? All terminations and equipment are rated at 75°C.",
    choices: ["a. 125-amp CB with 1 AWG THHN copper", "b. 150-amp CB with 1 AWG THHN copper", "c. 150-amp CB with 1/0 THHN copper", "d. 175-amp CB with 2/0 THHN copper"],
    answer: "c",
    source: "calculated from primary-only transformer protection and 75°C copper ampacity"
  },
  {
    id: 10,
    question: "When using primary-only protection, what is the maximum standard size fuse permitted to protect the primary a 250kVA, 13.8kV primary, 208Y/120V secondary, 3-phase transformer, with 3.8% impedance, when installed in an unsupervised location?",
    choices: ["a. 30 A", "b. 35 A", "c. 40 A", "d. 100 A"],
    answer: "b",
    source: "inferred from primary current, impedance/location rule, and standard fuse size"
  },
  {
    id: 11,
    question: "Which note on 450.3(B) allows the use of up to six devices to provide secondary protection?",
    choices: ["a. Note 1", "b. Note 2", "c. Note 3", "d. Note 4"],
    answer: "b",
    source: "inferred from NEC 450.3(B) note allowing up to six secondary devices"
  },
  {
    id: 12,
    question: "Which of the following variables represents an overcurrent device installed on the secondary side of the transformer?",
    choices: ["a. Epri", "b. Esec", "c. LRC", "d. OCPDsec"],
    answer: "d",
    source: "visible choice; secondary overcurrent device variable"
  },
  {
    id: 13,
    question: "What minimum size THHN copper secondary conductors are permitted for a 30kVA, 3-phase, 480V primary, 208/120V secondary transformer that supplies secondary conductors with a length of 25 feet and terminates in a panelboard with a single 3-pole main circuit breaker rated 150 amperes? Assume all equipment terminations are rated 75°C.",
    choices: wireChoices(),
    answer: "h",
    source: "calculated from 150 A termination/breaker and 75°C copper ampacity choices"
  },
  {
    id: 14,
    question: "When using primary-only protection, what maximum standard size primary OCPD is permitted to protect the secondary conductors of a 3-wire, 480V primary, 380V secondary, 3-phase transformer when the secondary conductors are 2/0 THW copper? Assume all equipment terminations are rated 75°C.",
    answer: "125 A",
    source: "visible answer shown in photo"
  },
  {
    id: 15,
    question: "Which of the following diagrams would be appropriate for a system with an output of 240/120V single-phase?",
    choices: ["a", "b", "c", "d"],
    answer: "b",
    source: "inferred from the 240/120V single-phase center-tapped secondary diagram",
    diagrams: ["q15_choices_ab.png", "q15_choices_cd.png"]
  },
  {
    id: 16,
    question: "What is the calculated secondary current of a 50kVA, 3-phase transformer with a secondary voltage rating of 240 volts? (Round your FINAL answer to the nearest hundredth.)",
    answer: "120.28 A",
    source: "calculated: 3-phase secondary current = kVA x 1000 / (1.732 x volts)"
  },
  {
    id: 17,
    question: "In a primary only protection scheme, a 22kVA, 480/208V 3-phase, 4.3% impedance transformer, the primary protection shall not be more than __?__ times of the primary FLA.",
    choices: ["a. 1.25", "b. 1.67", "c. 2.50", "d. 3.00", "e. 4.00", "f. 6.00"],
    answer: "d",
    source: "inferred from NEC 450.3(B) primary-only multiplier for stated impedance/rating"
  },
  {
    id: 18,
    question: "For a transformer having a 3-phase delta primary and 3-phase 208/120V secondary, the primary overcurrent protective device __?__ protect the secondary conductors.",
    choices: ["a. is allowed to", "b. is not allowed to"],
    answer: "b",
    source: "inferred from transformer primary/secondary configuration rule"
  },
  {
    id: 19,
    question: "A 35kVA, 3-phase autotransformer has an input voltage of 600V and an output of 480V. Determine the maximum allowable overcurrent protective device to protect the autotransformer and input the value below.",
    answer: "45 A",
    source: "visible answer shown in photo"
  },
  {
    id: 20,
    question: "Select the multiplier for a primary fuse using primary only protection for a 100kV to 12.5kV transformer with an impedance of 7% in an unsupervised location.",
    choices: ["a. 125%", "b. 225%", "c. 250%", "d. 300%", "e. 400%", "f. 600%", "g. Not required"],
    answer: "d",
    source: "inferred from NEC 450.3(A) primary fuse multiplier for unsupervised location"
  },
  {
    id: 21,
    question: "Motor control circuit transformers rated __?__ and that are an integral part of the motor controller and located within the motor controller enclosure shall be permitted to be protected by primary overcurrent devices.",
    choices: ["a. 50 VA or less", "b. 50 VA or more", "c. less than 50 VA", "d. more than 50 VA"],
    answer: "a",
    source: "inferred from motor control circuit transformer protection rule"
  },
  {
    id: 22,
    question: "What is the minimum ampacity for the secondary conductors of this 480V primary, 240V secondary 37.5kVA transformer? The length of the primary plus secondary conductors is 20 feet, and it is fed from a feeder tap following the rules in 240.21. Primary OCPD is 200 amps. (Round your FINAL answer to the nearest whole number amp.)",
    answer: "67 A",
    source: "calculated from 25-foot feeder tap rule using one-third of 200 A"
  },
  {
    id: 23,
    question: "When using primary-only protection with manufacturer installed coordinated thermal protection on the primary circuit, for a 480/208V, 4.3% impedance transformer, the primary protection shall not be more than __?__ times of the primary FLA.",
    choices: ["a. 1.25", "b. 1.67", "c. 2.50", "d. 3.00", "e. 4.00", "f. 6.00"],
    answer: "f",
    source: "inferred from coordinated thermal protection multiplier"
  },
  {
    id: 24,
    question: "What minimum size THHN copper secondary conductors are permitted for a 45kVA, 3-phase, 480V primary and a 208/120V secondary transformer that supplies secondary conductors with a length of 10 feet and terminates in a panelboard with a single 3-pole circuit breaker rated 175 amperes? Assume all equipment terminations are rated 75°C AWG THHN.",
    choices: wireChoices(),
    answer: "i",
    source: "calculated from 175 A breaker and 75°C THHN copper ampacity choices"
  },
  {
    id: 25,
    question: "If a transformer is fed from a feeder tap where the primary plus secondary conductor length is less than 25 feet, the conductors supplying the primary of the transformer must have an ampacity at least __?__ the rating of the overcurrent device protecting the feeder conductors.",
    choices: ["a. equal to", "b. one tenth", "c. one third", "d. twice"],
    answer: "c",
    source: "visible/inferred from feeder-tap wording"
  },
  {
    id: 26,
    question: "When using primary and secondary protection, what is the maximum standard size secondary overcurrent protective device permitted to protect a 50kVA, 480V primary, 208Y/120V secondary, 3-phase transformer?",
    answer: "175 A",
    source: "calculated from 50 kVA 3-phase secondary current and standard OCPD size"
  },
  {
    id: 27,
    question: "What is the minimum primary overcurrent protection device standard rating or setting for 480V primary, 240V secondary, dedicated fire pump transformer where it supplies a 240-volt, 3-phase, 15-horsepower fire pump; a 240-volt, 3-phase, 2-horsepower pressure maintenance pump; and 3-phase accessory equipment with a full load current rating of 35 amperes?",
    answer: "175 A",
    source: "visible answer shown in photo"
  },
  {
    id: 28,
    question: "When using primary and secondary protection, what is the maximum standard size overcurrent protective device permitted to protect a 90kVA, 480V primary, 208Y/120V secondary, 3-phase transformer when installed on the primary side?",
    answer: "300 A",
    source: "calculated from 90 kVA primary current and primary/secondary protection sizing"
  },
  {
    id: 29,
    question: "What is the calculated primary current of a 105kVA, 3-phase transformer with a primary voltage rating of 480 volts? (Round your FINAL answer to the nearest hundredth.)",
    answer: "126.30 A",
    source: "calculated: 3-phase primary current = kVA x 1000 / (1.732 x volts)"
  },
  {
    id: 30,
    question: "Which of the following variables represents transformer secondary current?",
    choices: ["a. Epri", "b. Esec", "c. Ipri", "d. Isec"],
    answer: "d",
    source: "visible choice; secondary current variable"
  },
  {
    id: 31,
    question: "For an installation with a 125kVA, 3-phase transformer, a 480V primary, and THHN copper conductors, what is the maximum size OCPD permitted that will protect the conductors and the primary of the transformer where the protection method is primary-only protection? There is more than one option here, so be sure to select only the maximum CB and wire combination that is NEC compliant. All terminations and equipment are rated at 75°C.",
    choices: ["a. 200-amp CB with 2/0 THHN copper", "b. 200-amp CB with 3/0 THHN copper", "c. 225-amp CB with 3/0 THHN copper", "d. 225-amp CB with 4/0 THHN copper"],
    answer: "b",
    source: "calculated from primary-only protection and 75°C copper ampacity choices"
  },
  {
    id: 32,
    question: "When using primary and secondary protection, what is the maximum standard size overcurrent protection device permitted to protect the secondary of a 450kVA, 13.8kV primary, 120/240V secondary, 3-phase transformer, with 5.9% impedance, when installed in an unsupervised location?",
    choices: ["a. 800 A", "b. 1,000 A", "c. 1,200 A", "d. 1,600 A"],
    answer: "d",
    source: "calculated from secondary current and unsupervised-location transformer OCPD sizing"
  },
  {
    id: 33,
    question: "What minimum size THHN copper secondary conductors are permitted for a 3-wire, 480V primary, 400V secondary, 3-phase transformer where the primary is protected with a 70A OCPD, which also serves as the protection device for the secondary conductors? Assume all equipment terminations are rated 75°C.",
    choices: wireChoices(),
    answer: "d",
    source: "calculated from primary OCPD serving as secondary-conductor protection"
  },
  {
    id: 34,
    question: "Which of the following formulas are equivalent to the wording in 240.21(B)(3)(2)?",
    choices: ["a. OCPDpri >= (Epri / Esec) x 1/3 x SCA", "b. SCA >= (Epri / Esec) x 1/3 x OCPDpri", "c. SCA >= 1/3 x OCPDpri", "d. SCA >= (Epri / Esec) x 1/10 x OCPDpri"],
    answer: "d",
    source: "inferred from equivalent 240.21(B)(3)(2) formula wording"
  },
  {
    id: 35,
    question: "Motor control circuit transformer overcurrent protection shall be omitted where the opening of the control circuit would create a(n) __?__, such as the control circuit of a fire pump motor.",
    choices: ["a. electrically safe work condition", "b. hazard", "c. safeguard", "d. over voltage"],
    answer: "b",
    source: "visible/inferred from motor control circuit exception wording"
  },
  {
    id: 36,
    question: "When using primary-only protection with manufacturer installed coordinated thermal protection on the primary circuit, for a 480/208V, 6.5% impedance transformer, the primary protection shall not be more than __?__ times of the primary FLA.",
    choices: ["a. 1.25", "b. 1.67", "c. 2.50", "d. 3.00", "e. 4.00", "f. 6.00"],
    answer: "e",
    source: "inferred from coordinated thermal protection multiplier for impedance stated"
  },
  {
    id: 37,
    question: "For a transformer having a single-phase, 2-wire primary and secondary, the primary overcurrent protective device __?__ protect the secondary conductors.",
    choices: ["a. is allowed to", "b. is not allowed to"],
    answer: "a",
    source: "inferred from single-phase 2-wire transformer protection rule"
  },
  {
    id: 38,
    question: "What minimum size THWN copper secondary conductors are permitted for a 90kVA, 3-phase, 480V primary and a 240/120V secondary pad-mounted transformer set outside of a second building when the secondary conductors terminate in a single 3-pole circuit breaker rated 250 amperes?",
    choices: ["a. 10 AWG", "b. 8 AWG", "c. 6 AWG", "d. 4 AWG", "e. 3 AWG", "f. 2 AWG", "g. 1 AWG"],
    answer: "g",
    source: "calculated from 250 A breaker and outside secondary-conductor rule choices"
  },
  {
    id: 39,
    question: "What maximum standard size fuse is permitted to protect the 2/0 THHN transformer secondary conductors of a 45kVA, 480V primary, 208/120V secondary, 3-phase transformer when the secondary conductors terminate in a 200-ampere rated disconnected switch? Assume all equipment terminations are rated 75°C.",
    answer: "175 A",
    source: "calculated from 2/0 THHN conductor ampacity/standard fuse sizing"
  },
  {
    id: 40,
    question: "When using primary and secondary protection, what is the maximum standard size secondary overcurrent protective device permitted to protect a 80kVA, 480 primary, 120/240V secondary, 3-phase transformer?",
    answer: "250 A",
    source: "calculated from 80 kVA 3-phase secondary current and standard OCPD size"
  }
];

const quizSets = {
  set1: {
    label: "Set 1",
    description: "Questions 1-25",
    questionIds: Array.from({ length: 25 }, (_, index) => index + 1)
  },
  set2: {
    label: "Set 2",
    description: "Questions 16-40",
    questionIds: Array.from({ length: 25 }, (_, index) => index + 16)
  }
};

function getQuiz(setId = state.activeSetId) {
  return quizSets[setId].questionIds.map((id) => questionBank.find((question) => question.id === id));
}

function getActiveSet() {
  return quizSets[state.activeSetId];
}

const state = {
  activeSetId: "set1",
  index: 0,
  responses: {},
  startedAt: new Date().toISOString()
};

const els = {
  scoreText: document.getElementById("scoreText"),
  percentText: document.getElementById("percentText"),
  questionCounter: document.getElementById("questionCounter"),
  statusPill: document.getElementById("statusPill"),
  progressFill: document.getElementById("progressFill"),
  questionTitle: document.getElementById("questionTitle"),
  questionText: document.getElementById("questionText"),
  diagramArea: document.getElementById("diagramArea"),
  answerArea: document.getElementById("answerArea"),
  feedback: document.getElementById("feedback"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  finishBtn: document.getElementById("finishBtn"),
  startBtn: document.getElementById("startBtn"),
  set1Btn: document.getElementById("set1Btn"),
  set2Btn: document.getElementById("set2Btn"),
  reviewBtn: document.getElementById("reviewBtn"),
  resetBtn: document.getElementById("resetBtn"),
  quizPanel: document.getElementById("quizPanel"),
  reviewPanel: document.getElementById("reviewPanel"),
  reviewContent: document.getElementById("reviewContent")
};

function wireChoices() {
  return [
    "a. 10 AWG", "b. 8 AWG", "c. 6 AWG", "d. 4 AWG", "e. 3 AWG", "f. 2 AWG",
    "g. 1 AWG", "h. 1/0 AWG", "i. 2/0 AWG", "j. 3/0 AWG", "k. 4/0 AWG",
    "l. 250 kcmil", "m. 300 kcmil", "n. 350 kcmil", "o. 400 kcmil",
    "p. 500 kcmil", "q. 600 kcmil", "r. 700 kcmil", "s. 750 kcmil",
    "t. 800 kcmil", "u. 900 kcmil", "v. 1,000 kcmil"
  ];
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/amps?/g, "a")
    .replace(/amperes?/g, "a")
    .replace(/\s+/g, "")
    .replace(/\.0+$/g, "")
    .replace(/[^a-z0-9/%.-]/g, "");
}

function numericValue(value) {
  const match = String(value || "").match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}

function numericEquivalent(expected, actual) {
  const expectedNumber = numericValue(expected);
  const actualNumber = numericValue(actual);
  if (expectedNumber === null || actualNumber === null) return false;
  return Math.abs(expectedNumber - actualNumber) < 0.01;
}

function answerLetter(value) {
  const match = String(value || "").trim().toLowerCase().match(/^([a-v])/);
  return match ? match[1] : "";
}

function isCorrect(question, value) {
  if (question.choices) {
    return answerLetter(value) === question.answer;
  }
  return normalize(value) === normalize(question.answer) || numericEquivalent(question.answer, value);
}

function recordAnswer(value) {
  const quiz = getQuiz();
  const question = quiz[state.index];
  const correct = isCorrect(question, value);
  state.responses[question.id] = {
    value,
    correct,
    answeredAt: new Date().toISOString()
  };
  render();
}

function render() {
  const quiz = getQuiz();
  const activeSet = getActiveSet();
  const question = quiz[state.index];
  const response = state.responses[question.id];

  els.questionCounter.textContent = `Question ${state.index + 1} of ${quiz.length}`;
  els.questionTitle.textContent = `${activeSet.label}: Source Question ${question.id}`;
  els.questionText.textContent = question.question;
  els.progressFill.style.width = `${((state.index + 1) / quiz.length) * 100}%`;

  renderDiagrams(question);
  renderAnswerArea(question, response);
  renderFeedback(question, response);
  renderScore();

  els.prevBtn.disabled = state.index === 0;
  els.nextBtn.disabled = state.index === quiz.length - 1;
  els.set1Btn.classList.toggle("active", state.activeSetId === "set1");
  els.set2Btn.classList.toggle("active", state.activeSetId === "set2");
}

function renderDiagrams(question) {
  els.diagramArea.innerHTML = "";
  if (!question.diagrams) return;

  question.diagrams.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Question 15 diagram choices";
    els.diagramArea.appendChild(img);
  });
}

function renderAnswerArea(question, response) {
  els.answerArea.innerHTML = "";

  if (question.choices) {
    question.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice";
      button.textContent = choice;
      const letter = answerLetter(choice);

      if (response) {
        if (letter === question.answer) button.classList.add("correct");
        if (letter === answerLetter(response.value) && !response.correct) button.classList.add("incorrect");
        if (letter === answerLetter(response.value)) button.classList.add("selected");
      }

      button.addEventListener("click", () => recordAnswer(choice));
      els.answerArea.appendChild(button);
    });
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "text-answer";
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Type your answer, like 175 A";
  input.value = response?.value || "";
  const check = document.createElement("button");
  check.type = "button";
  check.textContent = "Check Answer";
  check.className = "primary";

  check.addEventListener("click", () => recordAnswer(input.value));
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") recordAnswer(input.value);
  });

  wrapper.append(input, check);
  els.answerArea.appendChild(wrapper);
}

function renderFeedback(question, response) {
  els.feedback.className = "feedback";
  els.statusPill.className = "pill";

  if (!response) {
    els.feedback.textContent = "Answer to get instant feedback.";
    els.feedback.classList.add("pending");
    els.statusPill.textContent = "Not answered";
    return;
  }

  if (response.correct) {
    els.feedback.textContent = `Correct. Source: ${question.source}.`;
    els.feedback.classList.add("correct");
    els.statusPill.textContent = "Correct";
    els.statusPill.classList.add("correct");
  } else {
    els.feedback.textContent = `Not quite. Correct answer: ${question.answer}. Source: ${question.source}.`;
    els.feedback.classList.add("incorrect");
    els.statusPill.textContent = "Incorrect";
    els.statusPill.classList.add("incorrect");
  }
}

function renderScore() {
  const quiz = getQuiz();
  const answered = Object.values(state.responses);
  const correct = answered.filter((item) => item.correct).length;
  const percent = Math.round((correct / quiz.length) * 100);
  els.scoreText.textContent = `${correct} / ${quiz.length}`;
  els.percentText.textContent = `${percent}% overall, ${answered.length}/${quiz.length} answered`;
}

function saveAttempt() {
  const quiz = getQuiz();
  const activeSet = getActiveSet();
  const attempts = getAttempts();
  const answered = Object.values(state.responses);
  const correct = answered.filter((item) => item.correct).length;
  const attempt = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`,
    setId: state.activeSetId,
    setLabel: activeSet.label,
    setDescription: activeSet.description,
    startedAt: state.startedAt,
    finishedAt: new Date().toISOString(),
    correct,
    answered: answered.length,
    total: quiz.length,
    responses: state.responses
  };
  attempts.unshift(attempt);
  localStorage.setItem("transformerQuizAttempts", JSON.stringify(attempts.slice(0, 25)));
  alert(`${activeSet.label} attempt saved: ${correct} correct out of ${quiz.length} total questions.`);
  renderReview();
}

function getAttempts() {
  try {
    return JSON.parse(localStorage.getItem("transformerQuizAttempts") || "[]");
  } catch {
    return [];
  }
}

function renderReview() {
  const attempts = getAttempts();
  els.reviewContent.innerHTML = "";
  if (!attempts.length) {
    els.reviewContent.textContent = "No saved attempts yet.";
    return;
  }

  attempts.forEach((attempt, index) => {
    const attemptSet = quizSets[attempt.setId] || quizSets.set1;
    const quiz = getQuiz(attempt.setId || "set1");
    const card = document.createElement("div");
    card.className = "attempt";
    const date = new Date(attempt.finishedAt).toLocaleString();
    const percent = Math.round((attempt.correct / attempt.total) * 100);
    const missed = quiz.filter((q) => attempt.responses[q.id] && !attempt.responses[q.id].correct);

    const title = document.createElement("h3");
    title.textContent = `Attempt ${attempts.length - index}: ${attempt.setLabel || attemptSet.label} ${attempt.correct}/${attempt.total} correct (${percent}%), ${attempt.answered}/${attempt.total} answered`;
    const meta = document.createElement("p");
    meta.textContent = `${attempt.setDescription || attemptSet.description}. Saved ${date}.`;
    card.append(title, meta);

    if (missed.length) {
      const list = document.createElement("ol");
      list.className = "miss-list";
      missed.forEach((q) => {
        const li = document.createElement("li");
        const given = attempt.responses[q.id].value || "blank";
        li.textContent = `Question ${q.id}: you answered "${given}". Correct: ${q.answer}.`;
        list.appendChild(li);
      });
      card.appendChild(list);
    } else {
      const perfect = document.createElement("p");
      perfect.textContent = "No missed questions in this saved attempt.";
      card.appendChild(perfect);
    }
    els.reviewContent.appendChild(card);
  });
}

function startNewAttempt() {
  state.index = 0;
  state.responses = {};
  state.startedAt = new Date().toISOString();
  els.quizPanel.classList.remove("hidden");
  els.reviewPanel.classList.add("hidden");
  render();
}

function selectSet(setId) {
  if (state.activeSetId === setId) return;
  state.activeSetId = setId;
  startNewAttempt();
}

els.prevBtn.addEventListener("click", () => {
  state.index = Math.max(0, state.index - 1);
  render();
});

els.nextBtn.addEventListener("click", () => {
  const quiz = getQuiz();
  state.index = Math.min(quiz.length - 1, state.index + 1);
  render();
});

els.finishBtn.addEventListener("click", saveAttempt);
els.startBtn.addEventListener("click", startNewAttempt);
els.set1Btn.addEventListener("click", () => selectSet("set1"));
els.set2Btn.addEventListener("click", () => selectSet("set2"));
els.reviewBtn.addEventListener("click", () => {
  els.reviewPanel.classList.toggle("hidden");
  renderReview();
});
els.resetBtn.addEventListener("click", () => {
  if (confirm("Clear all saved quiz attempts?")) {
    localStorage.removeItem("transformerQuizAttempts");
    renderReview();
  }
});

render();
