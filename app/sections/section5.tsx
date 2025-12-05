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
          <div className={styles.section5_boxs_item_img}></div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>Anyone can join</div>
          <div style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
            Allow prospects to join your live chat without needing an
            invitation, making it easy to connect with new customers and expand
            your reach without any barriers.
          </div>
        </div>
        <div className={styles.section5_boxs_item}>
          <div className={styles.section5_boxs_item_img}></div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>
            Set It and Forget It
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
            Simply add your SoHive link to your website once, and forget about
            constant updates. Your virtual room stays active without the need to
            create new meeting links.
          </div>
        </div>
        <div className={styles.section5_boxs_item}>
          <div className={styles.section5_boxs_item_img}></div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>Easy to Join</div>
          <div style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
            Joining a Hive is straightforward and hassle-free. Users connect
            instantly, enhancing your digital customer engagement efforts and
            making every interaction smooth and effective.
          </div>
        </div>
        <div className={styles.section5_boxs_item}>
          <div className={styles.section5_boxs_item_img}></div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>
            Effortless Management
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
            Manage your virtual room easily with SoHive’s user-friendly
            platform. Make updates to your Hive without changing your website.
            SoHive manages the changes behind the scenes, instantly reflecting
            adjustments in the Hive Tile.
          </div>
        </div>
      </div>
    </div>
  );
}
