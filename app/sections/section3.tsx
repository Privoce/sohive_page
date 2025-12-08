import { SvgIcon } from "../components/svg";
import styles from "@/styles/home_page.module.scss";

export function Section3() {
  return (
    <div className={styles.section3}>
      <div className={styles.section3_title}>
        <SvgIcon ty="logo_only"></SvgIcon>
        <div className={styles.section3_title_text}>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", bottom: -16 }}>
              <SvgIcon
                ty="divider"
                height={12}
                width={212}
                strokeWidth={10}
              ></SvgIcon>
            </span>
            <span style={{ color: "#FF8E26" }}>SoHive helps</span> you embrace
            these trends
          </div>
          <div style={{ position: "relative" }}>
            to boost engagement,{" "}
            <span style={{ color: "#FF8E26" }}>personalization and growth</span>
            <span style={{ position: "absolute", bottom: -24, right: 0 }}>
              {" "}
              <SvgIcon
                ty="divider"
                height={12}
                width={448}
                strokeWidth={4}
              ></SvgIcon>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.section3_box}>
        <div className={styles.section3_box_item}>
          <span
            style={{
              position: "absolute",
              zIndex: 111,
              left: "-30px",
              top: "38%",
            }}
          >
            <SvgIcon ty="logo_fly" height={68} width={68}></SvgIcon>
          </span>

          <img
            src={"/section3/bg1.png"}
            alt=""
            style={{ position: "absolute", top: 0, right: 0 }}
          />
          <div className={styles.section3_box_item_header}>
            <HexagonIcon ty="1"></HexagonIcon>
          </div>
          <div>
            <div style={{ position: "relative", marginBottom: 4 }}>
              <span style={{ fontSize: 64, fontWeight: 700, width: "100%" }}>
                86%
              </span>
              <span style={{ position: "absolute", bottom: 0, left: 0 }}>
                {" "}
                <SvgIcon
                  ty="divider"
                  height={12}
                  width={130}
                  strokeWidth={16}
                ></SvgIcon>
              </span>
            </div>
            <div style={{ height: "fit-content", fontSize: 14 }}>
              of consumers say personalization leads to a 3x higher conversion
              rate and boosts website conversions.**
            </div>
          </div>
        </div>
        <div className={styles.section3_box_item}>
          <span
            style={{
              position: "absolute",
              zIndex: 111,
              left: "-84px",
              top: "44%",
            }}
          >
            <SvgIcon ty="logo_fly" height={120} width={120}></SvgIcon>
          </span>
          <img
            src={"/section3/bg2.png"}
            alt=""
            style={{ position: "absolute", top: 0, right: 0 }}
          />
          <div className={styles.section3_box_item_header}>
            <HexagonIcon ty="2" color="#8099EE"></HexagonIcon>
          </div>
          <div>
            <div style={{ position: "relative", marginBottom: 4 }}>
              <span style={{ fontSize: 64, fontWeight: 700, width: "100%" }}>
                80%
              </span>
              <span style={{ position: "absolute", bottom: 0, left: 0 }}>
                {" "}
                <SvgIcon
                  ty="divider"
                  height={12}
                  width={130}
                  strokeWidth={16}
                ></SvgIcon>
              </span>
            </div>
            <div style={{ height: "fit-content", fontSize: 14 }}>
              of consumers prefer brands with personalized digital customer
              engagement.**
            </div>
          </div>
        </div>
        <div className={styles.section3_box_item}>
          <span
            style={{
              position: "absolute",
              zIndex: 111,
              right: "-84px",
              top: "18%",
            }}
          >
            <SvgIcon ty="logo_fly" height={136} width={136}></SvgIcon>
          </span>
          <img
            src={"/section3/bg3.png"}
            alt=""
            style={{ position: "absolute", top: 0, right: 0 }}
          />
          <div className={styles.section3_box_item_header}>
            <HexagonIcon ty="3"></HexagonIcon>
          </div>
          <div>
            <div style={{ position: "relative", marginBottom: 4 }}>
              <span style={{ fontSize: 64, fontWeight: 700, width: "100%" }}>
                80%
              </span>
              <span style={{ position: "absolute", bottom: 0, left: 0 }}>
                {" "}
                <SvgIcon
                  ty="divider"
                  height={12}
                  width={130}
                  strokeWidth={16}
                ></SvgIcon>
              </span>
            </div>
            <div style={{ height: "fit-content", fontSize: 14 }}>
              of customers say the experience a company provides is as important
              as its products and services.*
            </div>
          </div>
        </div>
        <div className={styles.section3_box_item}>
          <span
            style={{
              position: "absolute",
              zIndex: 111,
              right: "-34px",
              top: "54%",
            }}
          >
            <SvgIcon ty="logo_fly" height={68} width={68}></SvgIcon>
          </span>
          <img
            src={"/section3/bg4.png"}
            alt=""
            style={{ position: "absolute", top: 0, right: 0 }}
          />
          <div className={styles.section3_box_item_header}>
            <HexagonIcon ty="4" color="#C07823"></HexagonIcon>
          </div>
          <div>
            <div style={{ position: "relative", marginBottom: 4 }}>
              <span style={{ fontSize: 64, fontWeight: 700, width: "100%" }}>
                51%
              </span>
              <span style={{ position: "absolute", bottom: 0, left: 0 }}>
                {" "}
                <SvgIcon
                  ty="divider"
                  height={12}
                  width={130}
                  strokeWidth={16}
                ></SvgIcon>
              </span>
            </div>
            <div style={{ height: "fit-content", fontSize: 14 }}>
              of people feel online collaboration tools make companies more
              innovative and open to teamwork.*
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          letterSpacing: 1.2,
          marginTop: 16,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <span style={{ color: "#DD9034" }}>
          *SoHive helps you embrace these trends
        </span>{" "}
        to boost engagement, personalization and growth */}
        <div className={styles.section4_left_header} style={{width: "fit-content"}}>
          <div>
            <SvgIcon ty="logo_only"></SvgIcon>
          </div>
          <div style={{ marginBottom: 12 }}>
            <div style={{ position: "relative", width: "fit-content" }}>
              <span style={{ color: "#FF8E26" }}> SoHive helps</span>&nbsp;you
              embrace these trends
              <span style={{ position: "absolute", left: 0, bottom: -20 }}>
                <SvgIcon ty="divider" width={220} strokeWidth={8}></SvgIcon>
              </span>
            </div>
            <div style={{ position: "relative" }}>
              to boost engagement,
              <span style={{ color: "#FF8E26" }}>
                {" "}
                personalization and growth
              </span>
              <span style={{ position: "absolute", right: 0, bottom: -24 }}>
                <SvgIcon ty="divider" width={480} strokeWidth={4}></SvgIcon>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HexagonIcon({
  ty,
  color = "#F59346",
}: {
  ty: "1" | "2" | "3" | "4";
  color?: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <svg
        width="80"
        height="91"
        viewBox="0 0 80 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.2266 1.51782C38.5587 0.160287 41.4413 0.160287 43.7734 1.51782L75.7734 20.1448C78.0808 21.488 79.5 23.9573 79.5 26.6272V63.9944C79.4999 66.6642 78.0807 69.1326 75.7734 70.4758L43.7734 89.1028C41.4413 90.4603 38.5587 90.4603 36.2266 89.1028L4.22656 70.4758C1.91933 69.1326 0.500059 66.6641 0.5 63.9944L0.5 26.6272C0.5 23.9573 1.91915 21.488 4.22656 20.1448L36.2266 1.51782Z"
          fill={color}
        />
      </svg>
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {ty === "1" && (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.5004 10.5L25.5004 28.5L18.0004 21L4.50037 34.5"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M43.5004 22.5V10.5H31.5004"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
        {ty === "2" && (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 40.5C24 40.5 5.25 30 5.25 17.25C5.25038 14.9965 6.03122 12.8127 7.45977 11.0699C8.88832 9.32701 10.8764 8.13272 13.086 7.69003C15.2956 7.24734 17.5903 7.58358 19.58 8.64158C21.5697 9.69958 23.1315 11.414 24 13.4935L24 13.4935C24.8685 11.414 26.4303 9.69959 28.42 8.64158C30.4097 7.58358 32.7044 7.24734 34.914 7.69003C37.1236 8.13272 39.1117 9.32701 40.5402 11.0699C41.9688 12.8127 42.7496 14.9965 42.75 17.25C42.75 30 24 40.5 24 40.5Z"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
        {ty === "3" && (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42 39H6V9"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M39.0004 12L24.0004 27L18.0004 21L6.00037 33"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M39.0004 19.5V12H31.5004"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
        {ty === "4" && (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5001 30C21.8848 30 26.2501 25.6348 26.2501 20.25C26.2501 14.8652 21.8848 10.5 16.5001 10.5C11.1153 10.5 6.75006 14.8652 6.75006 20.25C6.75006 25.6348 11.1153 30 16.5001 30Z"
              stroke="white"
              strokeWidth="2"
              stroke-miterlimit="10"
            />
            <path
              d="M29.1398 10.8632C30.4809 10.4853 31.8873 10.3992 33.2644 10.6107C34.6415 10.8222 35.9573 11.3264 37.1232 12.0892C38.289 12.852 39.2779 13.8558 40.0231 15.033C40.7684 16.2102 41.2527 17.5334 41.4435 18.9135C41.6343 20.2936 41.5271 21.6986 41.1292 23.0339C40.7313 24.3691 40.0518 25.6035 39.1367 26.654C38.2215 27.7045 37.0918 28.5468 35.8237 29.1239C34.5557 29.7011 33.1786 29.9998 31.7854 30"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.99927 37.0119C4.52202 34.8459 6.54357 33.0781 8.89324 31.8577C11.2429 30.6372 13.8517 30.0001 16.4994 30C19.1471 29.9999 21.756 30.6368 24.1058 31.8571C26.4555 33.0773 28.4772 34.845 30.0001 37.0109"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M31.7854 30C34.4333 29.9981 37.0428 30.6343 39.3927 31.8546C41.7427 33.075 43.764 34.8437 45.2855 37.0109"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </span>
    </div>
  );
}
