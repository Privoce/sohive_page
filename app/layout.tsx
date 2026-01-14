import type { Metadata } from "next";
import "@/styles/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

export const metadata: Metadata = {
  title: {
    default:
      "Build Virtual Communities with Drop-in Video | SoHive Drop-in Virtual Rooms & Online Communities – No Code",
    template: "%s | SoHive",
  },
  description:
    "Deliver personalized customer experiences with drop-in video and shared sessions. No apps, no code—just better engagement and sales outcomes. Engage customers in virtual communities with drop-in video chats, live sessions, and shared experiences. No code or apps—just seamless engagement. 24/7 drop-in video, live chat, and shared sessions in one no-code platform. Attract prospects and drive customer engagement with zero app installs.",
  openGraph: {
    title: "SoHive: Drop-in Virtual Communities that Engage",
    description:
      "Deliver personalized customer experiences with drop-in video and shared sessions. No apps, no code—just better engagement and sales outcomes. Engage customers in virtual communities with drop-in video chats, live sessions, and shared experiences. No code or apps—just seamless engagement. 24/7 drop-in video, live chat, and shared sessions in one no-code platform. Attract prospects and drive customer engagement with zero app installs.",
    url: "https://sohive.com",
    siteName: "SoHive",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoHive: Drop-in Virtual Communities that Engage",
    description:
      "Deliver personalized customer experiences with drop-in video and shared sessions. No apps, no code—just better engagement and sales outcomes. Engage customers in virtual communities with drop-in video chats, live sessions, and shared experiences. No code or apps—just seamless engagement. 24/7 drop-in video, live chat, and shared sessions in one no-code platform. Attract prospects and drive customer engagement with zero app installs.",
    images: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: {
      rel: "icon",
      url: "/favicon.ico",
    },
  },
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
        <body>
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </html>
    </ConfigProvider>
  );
}
