"use client";

import styles from "@/styles/header.module.scss";
import type { MenuProps } from "antd";
import { Button, Menu, Popover } from "antd";
import { useState } from "react";
import { SvgIcon } from "./svg";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Solutions",
    key: "solutions",
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
  },
  {
    key: "contact_us",
    label: "Contact Us",
  },
];

export function Header() {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    switch (e.key) {
      case "solutions":
        break;
      case "how_to_start":
        break;
      case "plans":
        break;
      case "about_us":
        window.open("https://sohive.com/aboutus", "_self");
        break;
      case "contact_us":
        window.open("https://sohive.com/contactus", "_self");
        break;
      default:
        break;
    }
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
          onClick={() => window.open("https://sohive.com/Login", "_self")}
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
          onClick={() => window.open("https://sohive.com/signup", "_self")}
        >
          Try For Free
        </Button>
      </div>
    </div>
  );
}

export function DonwloadButton() {
  return (
    <Popover
      styles={{
        container: { background: "linear-gradient(#F4A64B 0% , #C26D00 100%)" },
        content: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        arrow: { color: "#F4A64B" },
      }}
      trigger={"click"}
      content={
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div style={{ color: "#fff" }}>Scan to download the app</div>
          <img src="/qrcode.png"></img>
        </div>
      }
    >
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
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="80" height="80" x="336" y="336" rx="8" ry="8"></rect>
              <rect width="64" height="64" x="272" y="272" rx="8" ry="8"></rect>
              <rect width="64" height="64" x="416" y="416" rx="8" ry="8"></rect>
              <rect width="48" height="48" x="432" y="272" rx="8" ry="8"></rect>
              <rect width="48" height="48" x="272" y="432" rx="8" ry="8"></rect>
              <path d="M448 32H304a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8zM208 32H64a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8zm32 104H64a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V304a32 32 0 0 0-32-32zm-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8z"></path>
            </svg>
            <SvgIcon ty="ios" />
            <SvgIcon ty="google_shop" />
          </div>
        }
      >
        Download
      </Button>
    </Popover>
  );
}
