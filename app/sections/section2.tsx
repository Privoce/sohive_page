import { Button } from "antd";
import { SvgIcon } from "../components/svg";
import styles from "@/styles/home_page.module.scss";
import { ReactNode } from "react";

export function Section2() {
  return (
    <div className={styles.section2}>
      <div className={styles.section2_bg_mid}>
        <svg
          width="1106"
          height="833"
          viewBox="0 0 1106 833"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.34"
            d="M198.958 0.411748C28.6224 117.792 -175.333 172.377 266.179 481.326C818.069 867.511 609.353 465.091 467.51 405.443C348.726 355.491 646.01 1175.44 1129.51 662.854"
            stroke="#AAA9AA"
            strokeDasharray="10 10"
          />
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          left: -8,
          bottom: -20,
          //   filter: "grayscale(0.4)",
        }}
      >
        <svg
          width="90"
          height="161"
          viewBox="0 0 90 161"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.4654 5.99986C39.2534 5.99987 45.5258 9.62137 48.9199 15.4999L80.7437 70.6197C84.1375 76.4981 84.1377 83.7409 80.7439 89.6193L48.9206 144.739C45.5266 150.617 39.2539 154.239 32.4659 154.239L-31.1812 154.239C-37.9691 154.239 -44.2417 150.617 -47.6357 144.739L-79.4586 89.6197C-82.8526 83.7411 -82.8523 76.4978 -79.4583 70.6192L-47.6351 15.4997C-44.3471 9.80501 -38.3581 6.22809 -31.8158 6.01004L-31.1808 6.00003L32.4654 5.99986Z"
            stroke="rgba(255, 142, 38, 0.1)"
            strokeWidth="12"
          />
        </svg>
      </div>

      <div className={styles.section2_content}>
        <div className={styles.section2_content_title}>
          Build Your{" "}
          <span className={styles.section2_content_title_wei}>
            <span style={{ fontWeight: 700 }}>Hive in Minutes</span>

            <svg
              style={{ position: "absolute", bottom: -12, right: 0 }}
              width={250}
              height={12}
              viewBox="0 0 609 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0671387 9.15354C89.4005 6.15354 363.567 -5.32193 608.067 9.15354"
                stroke="#F4A548"
                strokeWidth="8"
              />
            </svg>
          </span>
        </div>
        <div className={styles.section2_content_inner}>
          <div className={styles.section2_content_inner_left}>
            <div className={styles.section2_content_inner_left_desc}>
              <HexagonBtn num={1} />
              <div className={styles.section2_content_inner_left_desc_words}>
                <div
                  className={styles.section2_inline}
                  style={{ fontSize: 24, fontWeight: 700 }}
                >
                  Easy Sign Up
                </div>
                <div
                  className={styles.section2_inline}
                  style={{ lineHeight: 1.5 }}
                >
                  {/* <span>Download the SoHive mobile app </span>
                  <span>or sign up online to create</span>
                  <span>your profile in under a minute.</span> */}
                  <span>
                    Sign up on the web app or mobile apps to create your user
                    profile in minutes
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.section2_content_inner_left_btns}>
              <DownloadBtn
                icon={<SvgIcon ty="ios" height={40} width={40} />}
                label="App Store"
              ></DownloadBtn>

              <DownloadBtn
                icon={
                  <SvgIcon
                    ty="google_shop"
                    height={36}
                    width={32}
                    style={{ marginLeft: 16 }}
                  />
                }
                label="Play Market"
              ></DownloadBtn>
            </div>
          </div>
          <div className={styles.section2_content_inner_mid}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <HexagonBtn num={2} />
              <div
                style={{
                  display: "flex",
                  height: "100px",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div style={{ width: "100%", fontSize: 24 }}>
                  <strong>Create your Hive</strong>
                  &nbsp;(dedicated virtual room) on the webite
                </div>
                <div style={{ width: "100%" }}>Manage Hives – Add Hive</div>
              </div>
            </div>

            {/* <img
              className={styles.section2_content_inner_mid_img}
              src="/section2/phone1.png"
              alt=""
            /> */}
            <img
              className={styles.section2_content_inner_mid_img}
              src="/section2/bg_mid.jpg"
              alt=""
            />
            <img src="/section2/pbg1.png" alt="" />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginTop: 16,
              }}
            >
              <HexagonBtn num={3} />
              <div
                style={{
                  display: "flex",
                  height: "100px",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div style={{ width: "100%", fontSize: 24 }}>
                  <strong>Easily embed your Hive</strong>
                  &nbsp; on your website or share your drop-in video URL with
                  others for instant meetings
                </div>
                {/* <div style={{ width: "100%" }}>Manage Hives – Add Hive</div> */}
              </div>
            </div>
          </div>
          <div className={styles.section2_content_inner_right}>
            <img
              className={styles.section2_content_inner_right_img}
              src="/section2/phone2.png"
              alt=""
            />
            <img src="/section2/pbg2.png" alt="" />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                bottom: "-115px",
                left: -10,
                transform: "translateY(50%)",
                position: "absolute",
              }}
            >
              <HexagonBtn num={4} />
              <div
                style={{
                  display: "flex",
                  height: "100px",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 0,
                  marginTop: 48,
                }}
              >
                <div style={{ width: "100%", fontSize: 16 }}>
                  {/* <strong>Easily embed your Hive</strong>
                  &nbsp; on your website or share your drop-in video URL with
                  others for instant meetings */}
                  <div>Download the SoHive mobile app to:</div>
                  <ul>
                    <li>
                      get a text message as soon as someone visits your Hive
                    </li>
                    <li>View your notifications</li>
                    <li>Share your virtual room URL</li>
                  </ul>
                </div>
                {/* <div style={{ width: "100%" }}>Manage Hives – Add Hive</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DownloadBtn({
  width = 204,
  icon,
  label,
  download = "Download",
  fontSizeLB = 20,
}: {
  width?: number;
  download?: string;
  icon: ReactNode;
  label: string;
  fontSizeLB?: number;
}) {
  return (
    <Button
      style={{
        backgroundColor: "rgba(255, 142, 38, 0.1)",
        color: "#000",
        fontSize: 14,
        borderRadius: 20,
        padding: "32px 16px",
        width: width,
      }}
      variant="outlined"
      color="primary"
      size="large"
      icon={icon}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 4,
          marginLeft: 12,
        }}
      >
        <div style={{ fontSize: 12 }}>{download}</div>
        <div style={{ fontSize: fontSizeLB, fontWeight: 700 }}>{label}</div>
      </div>
    </Button>
  );
}

function HexagonBtn({ num }: { num: number }) {
  return (
    <div
      style={{
        position: "relative",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <img src="/section2/p1.png" alt="" />
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: 700,
          fontSize: 34,
        }}
      >
        {num}
      </span>
    </div>
  );
}
