import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./unauthorize.module.css";
function UnAuthorizeAccess() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, []);

  return (
    <div className={`${styles.displayMiddle} ${styles.unAuthContainer}`}>
      <h1
        className={`${styles.largeFont} ${styles.topAnimation} ${styles.textCenter}`}
      >
        <code>Access Denied</code>
      </h1>
      <hr
        className={`${styles.whiteBorder} ${styles.leftAnimation} ${styles.marginAuto} ${styles.main}`}
      />
      <h3 className={`${styles.textCenter} ${styles.rightAnimation}`}>
        Please Loggedin on BuyBusy to view this Page
      </h3>
      <h3 className={`${styles.textCenter} ${styles.zoomAnimation}`}>
        🚫🚫🚫🚫
      </h3>
      <h6 className={`${styles.textCenter} ${styles.zoomAnimation}`}>
        <strong>Error Code</strong>: 403 forbidden
      </h6>
    </div>
  );
}
export default UnAuthorizeAccess;
