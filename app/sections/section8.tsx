import { SvgIcon } from "../components/svg";
import styles from "@/styles/home_page.module.scss";
import { DownloadBtn } from "./section2";

export function Section8() {
  return (
    <div className={styles.section8}>
      <img src="/section8/bg.png" alt="" />
      <div className={styles.section8_content}>
        <div className={styles.section8_header}>
        <div style={{ fontWeight: 500, fontSize: 24, marginBottom: 8 }}>
          Improve Your Digital Customer Engagement
        </div>
        <div>Join SoHive and change how you</div>
        <div>connect with and grow your community</div>
      </div>
      <div className={styles.section8_btns}>
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
