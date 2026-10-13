"use client";

import { useState } from "react";
import OrderButton from "@/components/OrderButton";
import { quizDefaults, quizQuestions, recommendations } from "@/lib/content";

function QuizQuestion({ label, options, value, onChange }) {
  return (
    <fieldset>
      <legend>{label}</legend>
      <div>
        {options.map((option) => (
          <button
            type="button"
            key={option}
            className={value === option ? "selected" : ""}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export default function CoffeeQuiz() {
  const [answers, setAnswers] = useState(quizDefaults);
  const [revealed, setRevealed] = useState(false);
  const recommendation = recommendations[answers.mood][answers.taste];

  const answer = (key, value) => {
    setAnswers((current) => ({ ...current, [key]: value }));
    setRevealed(false);
  };

  return (
    <section className="section quiz-section">
      <div className="quiz-intro">
        <p className="eyebrow" data-reveal="up">
          Tiga pertanyaan sederhana
        </p>
        <h2 data-reveal="text" style={{ "--delay": "80ms" }}>
          Bingung memilih
          <br />
          <i>kopi?</i>
        </h2>
        <p data-reveal="up" style={{ "--delay": "220ms" }}>
          Jawab sesuai suasana hati. Kami bantu pilihkan teman untuk jedamu hari ini.
        </p>
      </div>

      <div className="quiz-card" data-reveal="right" style={{ "--delay": "150ms" }}>
        {quizQuestions.map(({ key, label, options }) => (
          <QuizQuestion
            key={key}
            label={label}
            options={options}
            value={answers[key]}
            onChange={(value) => answer(key, value)}
          />
        ))}

        <button type="button" className="button quiz-submit" onClick={() => setRevealed(true)}>
          Tunjukkan rekomendasi <span>→</span>
        </button>

        {revealed && (
          <div className="recommendation">
            <span>Untukmu hari ini</span>
            <strong>
              {recommendation} <small>({answers.temp.toLowerCase()})</small>
            </strong>
            <OrderButton item={recommendation} secondary>
              Pesan ini
            </OrderButton>
          </div>
        )}
      </div>
    </section>
  );
}
