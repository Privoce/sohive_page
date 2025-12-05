"use client";
import { Header } from "./components/header";
import styles from "@/styles/home_page.module.scss";
import { SvgIcon } from "./components/svg";
import { Button } from "antd";
import { Section1 } from "./sections/section1";
import { useEffect, useMemo, useRef, useState } from "react";
import { Section2 } from "./sections/section2";
import { Section3 } from "./sections/section3";
import { Section4 } from "./sections/section4";
import { Section5 } from "./sections/section5";
import { Section6 } from "./sections/section6";
import { Footer } from "./components/footer";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  const [mainHeight, setMainHeight] = useState<number>(603 - 154);
  useEffect(() => {
    function updateHeight() {
      if (mainRef.current) {
        setMainHeight(mainRef.current.clientHeight - 154);
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [mainRef]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header></Header>
      </div>
      <div className={styles.main_section} ref={mainRef}>
        <img
          className={styles.container_bg_left}
          src="/home_page/bg_left.png"
          alt=""
        />
        <img
          className={styles.container_bg_right}
          src="/home_page/bg_right.png"
          alt=""
        />
        <div className={styles.main_section_inner}>
          <div className={styles.main_section_inner_wrapper}>
            <SvgIcon ty="logo_left"></SvgIcon>
            <div className={styles.main_section_content}>
              <div className={styles.main_section_title}>
                <div className={styles.main_section_title_h1}>
                  Experience personalized
                </div>
                <div className={styles.main_section_title_h1}>
                  virtual rooms with SoHive:
                </div>
              </div>
              <div className={styles.main_section_description}>
                24/7 drop-in and scheduled sessions, drop-in video chats, shared
                experiences, and seamless digital customer engagement—all in one
                platform.
              </div>
            </div>
          </div>
          <div className={styles.main_section_divider}>
            <SvgIcon ty="divider" height={12} width={609} />
          </div>
          <div className={styles.main_section_btns}>
            <div className={styles.main_section_btns_fake}>
              <SvgIcon
                ty="hexagon"
                height={18}
                width={18}
                color="#8099EE"
              ></SvgIcon>
              <span style={{ marginTop: 4 }}>
                Host live office hours effortlessly
              </span>
            </div>
            <div className={styles.main_section_btns_fake}>
              <SvgIcon
                ty="hexagon"
                height={18}
                width={18}
                color="#F5A448"
              ></SvgIcon>
              <span style={{ marginTop: 4 }}>
                Engage in real-time discussions
              </span>
            </div>
            <div className={styles.main_section_btns_fake}>
              <SvgIcon
                ty="hexagon"
                height={18}
                width={18}
                color="#F49346"
              ></SvgIcon>
              <span style={{ marginTop: 4 }}>
                Enhance your strategy with online collaboration tools
              </span>
            </div>
            <div className={styles.main_section_btns_fake}>
              <SvgIcon
                ty="hexagon"
                height={18}
                width={18}
                color="#C07823"
              ></SvgIcon>
              <span style={{ marginTop: 4 }}>
                Build communities with virtual rooms
              </span>
            </div>
          </div>
          <Button
            style={{
              fontSize: 16,
              marginLeft: 72,
              padding: "24px 44px",
              fontWeight: 700,
            }}
            type="primary"
            shape="round"
            size="large"
          >
            Get Started
          </Button>
        </div>
      </div>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Footer></Footer>
    </div>
  );
}
