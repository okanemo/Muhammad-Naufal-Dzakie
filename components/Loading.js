import styles from "../styles/Loading.module.css";

const Loading = () => {
  return (
    <div
      className={styles.loading}
      style={{
        background: "#0008",
        color: "white",
        top: 0,
        left: 0,
        zIndex: 9,
      }}
    >
      <svg className={styles.svg} width="205" height="250" viewBox="0 0 40 50">
        <polygon
          className={styles.polygon}
          strokeWidth="1"
          stroke="#fff"
          fill="none"
          points="20,1 40,40 1,40"
        ></polygon>
        <text fill="#fff" x="5" y="47">
          Loading
        </text>
      </svg>
    </div>
  );
};

export default Loading;
