import styles from "./Options.module.css";

const Options = ({ feedbackTypes, updateFeedback }) => {
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
    </div>
  );
};

export default Options;
