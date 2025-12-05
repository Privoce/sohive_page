import { Button } from "antd";
import { SvgIcon } from "../components/svg";
import styles from "@/styles/home_page.module.scss";

export function Section4() {
  return (
    <div className={styles.section4}>
      <div className={styles.section4_left}>
        <div className={styles.section4_left_header}>
          <div>
            <SvgIcon ty="logo_only"></SvgIcon>
          </div>
          <div style={{ marginBottom: 12}}>
            <div style={{ position: "relative" }}>
              SoHive, <span style={{ color: "#FF8E26" }}>Your Ultimate</span>
              <span style={{ position: "absolute", right: 0, bottom: -20 }}>
                <SvgIcon ty="divider" width={220} strokeWidth={8}></SvgIcon>
              </span>
            </div>
            <div>Business Solution</div>
          </div>
        </div>
        <div className={styles.section4_left_boxs}>
          <div className={styles.section4_left_boxs_large}>
            <div className={styles.section4_left_boxs_large_header}>
              <span style={{ position: "relative" }}>
                <svg
                  width="26"
                  height="23"
                  viewBox="0 0 26 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8682 3.37702e-07C18.2972 1.08085e-07 19.6177 0.762396 20.3323 2L24.6216 9.42943C25.3362 10.667 25.3362 12.1918 24.6216 13.4294L20.3323 20.8589C19.6177 22.0965 18.2972 22.8589 16.8682 22.8589L8.28939 22.8589C6.86033 22.8589 5.53983 22.0965 4.82529 20.8589L0.535911 13.4294C-0.17862 12.1918 -0.178619 10.667 0.535912 9.42943L4.8253 2C5.53983 0.762396 6.86033 6.54528e-07 8.2894 8.16046e-07L16.8682 3.37702e-07Z"
                    fill="#DD9034"
                  />
                </svg>
                <span className={styles.line}></span>
              </span>

              <span style={{ fontSize: 18, fontWeight: 700 }}>
                Boost your Online Brand
              </span>
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.6 }}>
              Reflect your brand with a personalized Hive. Set your schedule,
              choose public or private access, and embed it effortlessly on your
              website for enhanced customer engagement solutions.
            </div>
          </div>
          <div className={styles.section4_left_boxs_small}>
            <AddIcon></AddIcon>
            <span style={{marginTop: 2}}>Drop-In Video</span>
          </div>
          <div className={styles.section4_left_boxs_small}>
            <AddIcon></AddIcon>
            <span style={{marginTop: 2}}>Always Available, Anywhere</span>
          </div>
          <div className={styles.section4_left_boxs_small}>
            <AddIcon></AddIcon>
            <span>Global Reach, Local Touch</span>
          </div>
          <Button
            style={{ fontSize: 14, marginTop: 8 }}
            type="primary"
            shape="round"
            size="large"
            icon={<SvgIcon ty="sun" />}
          >
            Start For Free
          </Button>
        </div>
      </div>
      <div className={styles.section4_right} style={{marginBottom: 64}}>
        <img src={"/section4/bg2.png"} alt="" />
      </div>
    </div>
  );
}

function AddIcon() {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        position: "relative",
      }}
    >
      <svg
        width="26"
        height="23"
        viewBox="0 0 26 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.8682 -7.48729e-06C18.2972 -7.57522e-06 19.6177 0.762388 20.3323 1.99999L24.6216 9.42942C25.3362 10.667 25.3362 12.1918 24.6216 13.4294L20.3323 20.8589C19.6177 22.0965 18.2972 22.8589 16.8682 22.8589L8.2894 22.8589C6.86033 22.8589 5.53982 22.0965 4.82529 20.8589L0.535911 13.4294C-0.17862 12.1918 -0.178619 10.667 0.535912 9.42942L4.8253 1.99999C5.53983 0.762388 6.86033 -6.87147e-06 8.2894 -6.95941e-06L16.8682 -7.48729e-06Z"
          fill="white"
        />
      </svg>

      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 0V8" stroke="#DD9034" />
          <path d="M8 4L0 4" stroke="#DD9034" />
        </svg>
      </span>
    </div>
  );
}
