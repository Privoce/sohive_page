"use client";

import styles from "@/styles/header.module.scss";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { useState } from "react";
import { SvgIcon } from "./svg";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Solutions",
    key: "solutions",
    children: [],
  },
  {
    label: "How to start",
    key: "how_to_start",
  },
  {
    label: "Plans",
    key: "plans",
  },
  {
    key: "about_us",
    label: "About Us",
    children: [],
  },
  {
    key: "contact_us",
    label: "Contact Us",
  },
];

export function Header() {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className={styles.container}>
      <div style={{ height: 90, display: "flex", alignItems: "flex-end" }}>
        <SvgIcon ty="logo" />
      </div>

      <div className={styles.menu}>
        <Menu
          style={{ backgroundColor: "transparent" }}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>

      <div className={styles.buttons}>
        <DonwloadButton />
        <Button
          style={{
            backgroundColor: "rgba(255, 142, 38, 0.1)",
            color: "#000",
            fontSize: 14,
          }}
          variant="outlined"
          color="primary"
          shape="round"
          size="large"
          icon={<SvgIcon ty="logo_small" />}
        >
          Sign In
        </Button>
        <Button
          style={{ fontSize: 14 }}
          type="primary"
          shape="round"
          size="large"
          icon={<SvgIcon ty="sun" />}
        >
          Try For Free
        </Button>
      </div>
    </div>
  );
}

export function DonwloadButton() {
  return (
    <Button
      style={{
        backgroundColor: "#ECEFF9",
        borderColor: "#6689FF",
        color: "#000",
        fontSize: 14,
      }}
      color="primary"
      variant="outlined"
      shape="round"
      size="large"
      icon={
        <div
          style={{
            display: "inline-flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 8,
            height: "100%",
          }}
        >
          <SvgIcon ty="ios" />
          <SvgIcon ty="google_shop" />
        </div>
      }
    >
      Download
    </Button>
  );
}
