import styles from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>Good: {feedback.good}</li>
      <li className={styles.item}>Neutral: {feedback.neutral}</li>
      <li className={styles.item}>Bad: {feedback.bad}</li>
    </ul>
  );
};

export default Feedback;
