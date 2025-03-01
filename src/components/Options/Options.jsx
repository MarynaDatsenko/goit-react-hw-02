import styles from "./Options.module.css";

const Options = ({
  feedbackTypes,
  updateFeedback,
  totalFeedback,
  handleReset,
}) => {
  return (
    <div className={styles.wrapper}>
      {Object.keys(feedbackTypes).map((feedbackType) => (
        <button
          className={styles.optionsBtn}
          key={feedbackType}
          onClick={() => updateFeedback(feedbackType)}
        >
          {feedbackType}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={styles.resetBtn} onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
