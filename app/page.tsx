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
import { Section7 } from "./sections/section7";
import { Section8 } from "./sections/section8";

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
    <div className={styles.page}>
      <img
        className={styles.container_bg_left}
        src="/home_page/bg_left.jpg"
        alt=""
      />

      <div className={styles.container}>
        <div className={styles.header}>
          <Header></Header>
        </div>
        <div className={styles.main_section} ref={mainRef}>
          {/* <div style={{height: 630, width: "100%"}}></div> */}
          {/* <img
          className={styles.container_bg_right}
          src="/home_page/bg_right.png"
          alt=""
        /> */}
          <video
            src="/bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            style={{ zIndex: 111 }}
            className={styles.container_bg_right}
          ></video>
          <div className={styles.container_bg_words}>
            <div style={{ marginBottom: 12 }}>How It Works</div>
            <ol>
              <li>
                <strong>Drop‑In Widget</strong>: Embed SoHive’s patented video
                engagement widget directly into your product pages in minutes.
              </li>
              <li>
                <strong>Instant Connection</strong>: Customers click to join a
                live video session — no downloads, no friction.
              </li>
              <li>
                <strong>Trust at Scale</strong>: Answer questions, showcase
                products, and close sales in real time.
              </li>
            </ol>
          </div>
          {/* <video className={styles.container_bg_right} src=""></video> */}
          <div className={styles.main_section_inner}>
            <div className={styles.main_section_inner_wrapper}>
              <SvgIcon ty="logo_left"></SvgIcon>
              <div className={styles.main_section_content}>
                <div className={styles.main_section_title}>
                  <div className={styles.main_section_title_h1}>
                    Turn Browsers into Buyers with
                  </div>
                  <div className={styles.main_section_title_h1}>
                    Interactive Video Engagement
                  </div>
                </div>
                <div className={styles.main_section_description}>
                  <div>
                    SoHive makes online shopping feel human. Drop‑in video
                  </div>
                  <div>
                    widgets let your customers connect instantly, ask questions,{" "}
                  </div>
                  <div>and build trust — right when it matters most.</div>
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
                  <strong>Host Live Office Hours</strong> — Be available when
                  your customers need you most
                  {/* Host live office hours effortlessly */}
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
                  <strong>Engage in Real-Time Discussions</strong> — Answer
                  questions, showcase products, close sales, provide live
                  support
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
                  <strong>Collaborate Instantly</strong> — Shoppers drop in
                  without an invitation for authentic conversations
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
                  <strong>Build Community</strong> — Create your branded virtual
                  space to be personal and authentic
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
        <Section7></Section7>
        <Section8></Section8>
        <Footer></Footer>
      </div>
    </div>
  );
}
