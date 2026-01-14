import styles from "@/styles/footer.module.scss";
import { SvgIcon } from "./svg";

export function Footer() {
  const list = [
    [
      {
        label: "Solutions",
        onclick: () => {
          window.open("https://sohive.com/signup", "_self");
        },
      },
      {
        label: "How to start",
        onclick: () => {
          window.open("https://sohive.com/signup", "_self");
        },
      },
      {
        label: "Unique Benefits",
        onclick: () => {
          // 页面滚动到id为"benefits"的位置
          const el = document.getElementById("benefits");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      },
      {
        label: "Business Solutions",
        onclick: () => {
          const el = document.getElementById("solutions");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      },
    ],
    [
      {
        label: "FAQ",
      },
      // {
      //   label: "Blog",
      // },
      {
        label: "Terms and Conditions",
        onclick: () => {
          window.open("https://sohive.com/termsandconditions", "_self");
        },
      },
      {
        label: "Privacy Policy",
        onclick: () => {
          window.open("https://sohive.com/privacypolicy.html", "_self");
        },
      },
    ],
    [
      {
        label: "Contact Us",
        onclick: () => {
          window.open("https://sohive.com/contactus", "_self");
        },
      },
      {
        label: "About Us",
        onclick: () => {
          window.open("https://sohive.com/aboutus", "_self");
        },
      },
      {
        label: "Plans and Pricing",
        onclick: () => {
          window.open("https://sohive.com/signup", "_self");
        },
      },
      {
        label: "Tell Us What You Think",
        onclick: () => {
          window.open("https://sohive.com/signup", "_self");
        },
      },
    ],
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container_mid}>
        <SvgIcon ty="logo"></SvgIcon>
        {list.map((item) => (
          <div key={item[0].label} className={styles.container_column}>
            {item.map((subItem) => (
              <div
                key={subItem.label}
                className={styles.container_item}
                onClick={() => subItem.onclick && subItem.onclick()}
                style={{ cursor: "pointer" }}
              >
                {subItem.label}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.container_right}>
        <div className={styles.container_right_btns}>
          <IconBtn ty="1"></IconBtn>
          <IconBtn ty="2"></IconBtn>
          <IconBtn ty="3"></IconBtn>
        </div>
        <div
          style={{
            color: "#9F9F9F",
            fontSize: 12,
            width: "100%",
            textAlign: "end",
          }}
        >
          SoHive, LLC 2021-2025 All Rights Reserved
        </div>
      </div>
    </div>
  );
}

function IconBtn({ ty }: { ty: "1" | "2" | "3" }) {
  return (
    <div className={styles.icon_btn}>
      <span>
        <svg
          width="45"
          height="40"
          viewBox="0 0 45 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.5122 -5.77944e-05C32.7338 -5.76903e-05 33.8626 0.651648 34.4733 1.70957L43.8377 17.929C44.4485 18.987 44.4485 20.2904 43.8377 21.3483L34.4733 37.5678C33.8626 38.6257 32.7338 39.2774 31.5122 39.2774L12.7835 39.2774C11.562 39.2774 10.4332 38.6257 9.82238 37.5678L0.458067 21.3483C-0.152723 20.2904 -0.152723 18.987 0.458067 17.929L9.82239 1.70957C10.4332 0.65165 11.562 -5.68571e-05 12.7835 -5.66737e-05L31.5122 -5.77944e-05Z"
            fill="#F4A548"
          />
        </svg>
      </span>

      <span className={styles.icon_btn_inner}>
        {ty === "1" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M16.125 3.375H7.875C5.38972 3.375 3.375 5.38972 3.375 7.875V16.125C3.375 18.6103 5.38972 20.625 7.875 20.625H16.125C18.6103 20.625 20.625 18.6103 20.625 16.125V7.875C20.625 5.38972 18.6103 3.375 16.125 3.375Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.875 8.25C17.4963 8.25 18 7.74632 18 7.125C18 6.50368 17.4963 6 16.875 6C16.2537 6 15.75 6.50368 15.75 7.125C15.75 7.74632 16.2537 8.25 16.875 8.25Z"
              fill="white"
            />
          </svg>
        )}
        {ty === "2" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.25 10.5V16.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.25 10.5V16.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.25 13.125C11.25 12.4288 11.5266 11.7611 12.0188 11.2688C12.5111 10.7766 13.1788 10.5 13.875 10.5C14.5712 10.5 15.2389 10.7766 15.7312 11.2688C16.2234 11.7611 16.5 12.4288 16.5 13.125V16.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.25 8.625C8.87132 8.625 9.375 8.12132 9.375 7.5C9.375 6.87868 8.87132 6.375 8.25 6.375C7.62868 6.375 7.125 6.87868 7.125 7.5C7.125 8.12132 7.62868 8.625 8.25 8.625Z"
              fill="white"
            />
          </svg>
        )}
        {ty === "3" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.125 19.3059C14.3891 19.8246 9.61081 19.8246 4.87497 19.3059C4.05259 19.2118 3.24602 18.4488 3.11505 17.6249C2.54156 13.8968 2.54156 10.103 3.11505 6.37492C3.24606 5.55108 4.05255 4.78813 4.87497 4.6939C9.61081 4.17528 14.3891 4.17528 19.125 4.6939C19.9471 4.78815 20.7541 5.55102 20.8849 6.37492C21.4584 10.103 21.4584 13.8968 20.8849 17.6249C20.754 18.4487 19.9475 19.2118 19.125 19.3059Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 12L10.5 9V15L15 12Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </div>
  );
}
