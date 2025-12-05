import type { Metadata } from "next";
import "@/styles/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

export const metadata: Metadata = {
  title: "Sohive",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FF8E26",
        },
        components: {
          Button: {
            defaultColor: "#8c8c8c",
          },
        },
      }}
    >
      <html lang="en">
        <body style={{display: "flex", alignItems: "flex-start", justifyContent: "center"}}>
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </html>
    </ConfigProvider>
  );
}
