import { Button, Collapse } from "antd";
import { SvgIcon } from "../components/svg";
import styles from "@/styles/home_page.module.scss";
import { useState, useEffect } from "react";

export function Section4() {
  const list = [
    {
      title: "Boost your Online Brand",
      content: `Reflect your brand with a personalized Hive. Set your schedule,
              choose public or private access, and embed it effortlessly on your
              website for enhanced customer engagement solutions.`,
      icon: true,
    },
    { title: "Drop-In Video", content: "", icon: true },
    { title: "Always Available, Anywhere", content: "", icon: true },
    { title: "Global Reach, Local Touch", content: "", icon: true },
  ];

  const [openKey, setOpenKey] = useState<number[]>([0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setOpenKey([0]); // 客户端挂载后再设置初始打开状态
  }, []);

  return (
    <div className={styles.section4} id="solutions">
      <div className={styles.section4_left}>
        <div className={styles.section4_left_header}>
          <div>
            <SvgIcon ty="logo_only"></SvgIcon>
          </div>
          <div style={{ marginBottom: 12 }}>
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
          {list.map((item, index) => (
            <Collapse
              activeKey={openKey}
              onChange={(e) => {
                setOpenKey(e.map((key) => Number(key)));
              }}
              key={index}
              style={{ background: "transparent" }}
              styles={{
                root: {
                  width: "100%",
                },
                header: {
                  padding: item.icon ? "16px 24px" : "12px 16px",
                  borderRadius: openKey.includes(index)
                    ? "32px 32px 0 0"
                    : "32px",
                  // backgroundColor: openKey.includes(index)
                  //   ? "#dd9034"
                  //   : "#f9f2eb",
                  backgroundColor: "#f9f2eb",
                },
                body: {
                  borderRadius: "0px 0px 32px 32px",
                  padding: "0 24px 16px 24px",
                  // backgroundColor: openKey.includes(index)
                  //   ? "#dd9034"
                  //   : "#f9f2eb",
                  backgroundColor: "#f9f2eb",
                },
              }}
              items={[
                {
                  key: index,
                  label: (
                    <div
                      style={{
                        fontWeight: item.icon ? 700 : 400,
                        fontSize: item.icon ? 18 : 14,
                        display: "flex",
                        alignItems: "center",
                        gap: item.icon ? 0 : 8,
                      }}
                    >
                      {/* {!item.icon && <AddIcon></AddIcon>} */}
                      {item.title}
                    </div>
                  ),
                  children: item.content ? (
                    <div style={{ lineHeight: 1.6, fontSize: 14 }}>
                      {item.content}
                    </div>
                  ) : null,
                },
              ]}
              bordered={false}
              expandIcon={(prop) =>
                item.icon ? (
                  <span style={{ marginTop: 8 }}>
                    <HexagonBtn
                      ty={prop.isActive ? "minus" : "normal"}
                    ></HexagonBtn>
                  </span>
                ) : null
              }
              expandIconPlacement="start"
            ></Collapse>
          ))}
          <Button
            style={{ fontSize: 14, marginTop: 8 }}
            type="primary"
            shape="round"
            size="large"
            icon={<SvgIcon ty="sun" />}
            onClick={() => window.open("https://sohive.com/signup", "_self")}
          >
            Start For Free
          </Button>
        </div>
      </div>
      <div className={styles.section4_right} style={{ marginBottom: 64 }}>
        <img src={"/section4/bg2.png"} alt="" />
      </div>
    </div>
  );
}

function HexagonBtn({ ty = "normal" }: { ty?: "normal" | "minus" }) {
  return (
    <div
      style={{
        position: "relative",
        height: "fit-content",
        width: "fit-content",
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
          d="M16.8682 3.37702e-07C18.2972 1.08085e-07 19.6177 0.762396 20.3323 2L24.6216 9.42943C25.3362 10.667 25.3362 12.1918 24.6216 13.4294L20.3323 20.8589C19.6177 22.0965 18.2972 22.8589 16.8682 22.8589L8.28939 22.8589C6.86033 22.8589 5.53983 22.0965 4.82529 20.8589L0.535911 13.4294C-0.17862 12.1918 -0.178619 10.667 0.535912 9.42943L4.8253 2C5.53983 0.762396 6.86033 6.54528e-07 8.2894 8.16046e-07L16.8682 3.37702e-07Z"
          fill={ty === "normal" ? "#fff" : "#DD9034"}
        />
      </svg>

      <span
        style={{
          position: "absolute",
          top: ty === "normal" ? "46%" : "54%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {ty === "normal" ? (
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
        ) : (
          <span className={styles.line}></span>
        )}
      </span>
    </div>
  );
}
