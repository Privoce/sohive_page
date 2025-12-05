import { SvgIcon } from "../components/svg";
import styles from "@/styles/home_page.module.scss";

export function Section5() {
  return (
    <div className={styles.section5}>
      <div className={styles.section5_header}>
        <SvgIcon ty="logo_only"></SvgIcon>
        <div>
          What Makes{" "}
          <span style={{ position: "relative" }}>
            <span style={{ color: "#FF8E26" }}>SoHive SO UNIQUE</span>
            <span style={{ position: "absolute", right: 0, bottom: -16 }}>
              <SvgIcon ty="divider" width={320} strokeWidth={8}></SvgIcon>
            </span>
          </span>
          ?
        </div>
      </div>
      <div className={styles.section5_boxs}>
        <div className={styles.section5_boxs_item}>
          {/* <div className={styles.section5_boxs_item_img}></div> */}
          <div style={{ fontWeight: 700, fontSize: 18 }}>
            Anyone, Anywhere, Anytime can join
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
            Allow prospects to join your live chat without needing an
            invitation, making it easy to connect with new customers and expand
            your reach without any barriers.
          </div>
        </div>
        <div className={styles.section5_boxs_item}>
          {/* <div className={styles.section5_boxs_item_img}></div> */}
          <div style={{ fontWeight: 700, fontSize: 18 }}>
            Patent-Protected Technology
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
            Our platform is built on proprietary, patent-protected innovation
            that competitors cannot replicate. This ensures your business stays
            ahead with unique capabilities and long-term differentiation in the
            market.
          </div>
        </div>
        <div className={styles.section5_boxs_item}>
          {/* <div className={styles.section5_boxs_item_img}></div> */}
          <div style={{ fontWeight: 700, fontSize: 18 }}>
            Built for E-Commerce Leaders
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
            Designed specifically for high-volume online brands, the system
            scales seamlessly with customer demand. From conversion optimization
            to customer experience, every feature is tailored to help e-commerce
            teams drive measurable growth.
          </div>
        </div>
        <div className={styles.section5_boxs_item}>
          {/* <div className={styles.section5_boxs_item_img}></div> */}
          <div style={{ fontWeight: 700, fontSize: 18 }}>
            Secure, Compliant, and Reliable
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
            Enterprise-grade encryption and data protection ensure every
            interaction is safe and compliant with global standards. With a
            highly reliable infrastructure, your team can operate confidently
            knowing uptime and customer privacy are always safeguarded.
          </div>
        </div>
      </div>
    </div>
  );
}
