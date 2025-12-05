import { SvgIcon } from "../components/svg";
import styles from "@/styles/home_page.module.scss";
import { DownloadBtn } from "./section2";

export function Section6() {
  return (
    <div className={styles.section6}>
      <img
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
        }}
        src="/section6/bg.png"
        alt=""
      />
      <div className={styles.section6_inner}>
        <div className={styles.section6_header}>
          <SvgIcon ty="logo_only"></SvgIcon>
          <div style={{ fontSize: 34, fontWeight: 700 }}>
            <span style={{ position: "relative" }}>
              <span style={{ color: "#FF8E26" }}>Available on </span>
              <span style={{ position: "absolute", right: 0, bottom: -16 }}>
                <SvgIcon ty="divider" width={210} strokeWidth={8}></SvgIcon>
              </span>
            </span>
            iOS, Android and Web
          </div>
        </div>
        <div
          style={{
            width: 500,
            margin: "8px 64px",
            lineHeight: 1.6,
            fontSize: 16,
          }}
        >
          SoHive gives you a flexible video engagement solution that&apos;s
          ready to use on both iOS and Android devices, as well as any web
          browser. Stay connected from anywhere and deliver effective customer
          engagement solutions effortlessly by connecting with anyone, anywhere,
          anytime.
        </div>
        <div className={styles.section6_btns}>
          <DownloadBtn
            width={160}
            fontSizeLB={18}
            icon={<SvgIcon ty="ios" height={28} width={28} />}
            label="App Store"
          ></DownloadBtn>

          <DownloadBtn
            width={160}
            fontSizeLB={18}
            icon={
              <SvgIcon
                ty="google_shop"
                height={28}
                width={22}
                style={{ marginLeft: 8 }}
              />
            }
            label="Play Store"
          ></DownloadBtn>
          <DownloadBtn
            width={160}
            fontSizeLB={18}
            icon={<SvgIcon ty="computer" height={32} width={32} />}
            label="Web App"
            download="Sign In/ Up"
          ></DownloadBtn>
        </div>
      </div>
    </div>
  );
}
