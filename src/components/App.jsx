import { useState } from "react";

import Description from "./Description/Description";
import Options from "./Options/Options";
import FeedBack from "./Feedback/Feedback";

export default function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options feedbackTypes={feedback} updateFeedback={updateFeedback} />
      <FeedBack feedback={feedback} />
    </>
  );
}
