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
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgMarginTop, setImgMarginTop] = useState<number>(0);

  useEffect(() => {
    if (mainRef.current && imgRef.current) {
      console.warn(
        Math.abs(mainRef.current.clientHeight - imgRef.current.height! + 100)
      );
      setImgMarginTop(
        Math.abs(mainRef.current.clientHeight - imgRef.current.height! + 100)
      );
    }
  }, [mainRef, imgRef]);

  return (
    <div className={styles.page}>
      <img
        ref={imgRef}
        style={{
          marginTop: imgMarginTop,
        }}
        className={styles.container_bg_left}
        src="/home_page/bg_left.jpg"
        alt=""
      />

      <div className={styles.container}>
        <div className={styles.header}>
          <Header></Header>
        </div>
        <div className={styles.main_section} ref={mainRef}>
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
                <div
                  className={styles.main_section_description}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    paddingRight: 0
                  }}
                >
                  <div className={styles.main_section_description} style={{paddingRight: 16}}>
                    <div>
                      SoHive makes online shopping feel human. Drop‑in video
                    </div>
                    <div>
                      widgets let your customers connect instantly, ask
                      questions,{" "}
                    </div>
                    <div>and build trust — right when it matters most.</div>
                  </div>
                  <div id="sohive-widget-board">
                    <div className="hexagon_shadow">
                      <svg
                        version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 300 300"
                        width="100"
                        height="100"
                      >
                        <defs>
                          <image
                            width="248"
                            height="244"
                            id="img1"
                            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAAD0CAYAAAC2E+twAAAAAXNSR0IB2cksfwAATwRJREFUeJztXXV8FUfXnr/fvi2lpfq2X1vaV2q0BQLBEyCCJHhcNgkQNFhwW6BQLLjr4u5OcXf3QELc3fV8cyYhyZWQzObe7E3Y8/s9HbZwV2bOM2fkzDnk98Y+5F1BAzNv8h9zgXzb0p180tqNfNjWmbzf1pG8164SsHIin9oJ5AfHfuQ3YQhp3n806eQ/hbiIc4V+s5eJo5etF6dv2CEu3HlQXLHvqLj20Elxw9HT4tYT5zSw/e8L4p6zl8WDF6+JR6/cFI9dvVWrcfjSDXH/+avirtOXxK0nNeti8/Gz4uoDx8VFtM5mbtolTlq9WRy5ZJ04YO5y0Xv6QrHH+JmC1ZCJxKz3CPKj6yDyRVcv8p61c4VthW1ap60TbWNX8g1t6/80E1jbK61/SkDxF6gO/EbxY1MvUr+FB/mMEruOpTP5ZwVK8k+qSF9ShfqFkrnTyKmC1/QF4qil68XZm/eIaw6eFHeevigev3ZbuvrwKTx6FQLBkdEQFZ8IiSlpkJqRCRlZ2ZCTmwd5BQUaKCgohHdR8KvzteoiNz+f1VNyWjrEJiZDeGwcBEdEw5PgMLj97CWcvfMADly4Jm04ekpcsOOAOGaZRIm/QLQeNknAdvmyixdrp3LbkOIDSvRPKdG/o23/X6oDDUxAH1WCGxA/NfEmPzT3JF/QRv6oAmJ/YONCfnQZSOxH/ykMXbCKKtV+cd+5K9Ktp4EQEhXLyJuZnQMFhe8mSZWSQlrfWTk5rP5fR8XA5QdPgY4KpHnb9onDFq4W7EdNI796+pEPafuVR/QPLZ3I521cyfctPKlOeCmulyrBqwi02r/QYdk3tOf+lDbsP98yFP+kkwf53Wc48Zg2X5i9ebd06OJ1ZpXjklOY1VHF9KSAtktsUjI8Dg6FgxevSwt3HBS9ZywUzPuNYpa9vKF7PQtX8n8t3MkvlOS/mYCeqgSXARyG/cfci3zd0o18ZFG+1f6czqmthk4kE1ZuFHacvig9DgqBtMwspXVXFRmCI6vnIeGU7NekGRt3Cj3G/UW+69VXb7ujNf+qlRv5t7nAjIDS+qoSnBP1acN9SRuwTlv987M61i7kN68hZMCcZcKGI6cYsVFBVKn5kpuXz9ZD9tKp1djlktBm0HhSr5O7rg7QufkXVEfqNxMU11eV4JXEb429yX+a0fk2G5I76SV3fYe+RPhzvrDu0EnpUdBryM7NVVonVTGC4NQqNCYO9py9JPkvWSc0plOwf1hpzc3bFs3L/93ck+mO0vqrEvwtYMNy2hv/q7Ub+aCdLrnft3Imvwp+xH/xWvHIlZsQT+fXqtR+yczOhuuPn8OszbvFdkMnkY86uGnqBcWXrV2Z7vxqAnqsErwccn9PLfdntKH0WW1s1G5jppOlew6LOE9TF87ePcFtuN1nLkn9Zi8VvnXop6MjqDvfUR2qbdtoir9AVYErof8192Lzqff1DMs/snUlXcfOIOsP/y2GRMUorWeqKCgp6Rlw9MotGLJglVjfwVdrhZ0O1ynJUZdq0+q64i9QVfzcxIt8hcNyPeSuZ+eJ821y4MI1MT1LXR1XBSAvPx/uPH8Fk9dsERt4DtHZRkNdQqcopfVaJTgjtzf5rrkHc2DRJnfdTu7EVQwg6BaKnmWqqPJG8vML4OaTFzBuxQYRXWA1RnxUl75t4c50S2n9fqcJjsOo7ym5P7bQ9V76hJLbe8ZCQodjInpAqaKKtqA34oOXwSCu3SL+4qZFcgtnplu/mymv5+8kwf8w82GHRv5F50zaTix1bFxIt3EzyG5quVWnFVXeJjhcv/zgCfjNXyl+ZOeh4dqKuoWOMH/UcJIr/gKyCN6iN/NS05l3WzmzE147Tl8Us1THFVUqIXl0uH7h3iPwnDZf+NTOs/RcAtWtf7VyI783U17f3ymCN2nel9RnQ3PdeXcDjyFk4Y4DYkxiktJ6oyuF+VBYkEuLHCjMy4aC3EwoyMmAguw0yM9KhfzMFIpkLSRBfkYiRQLkpcebBPBd2Dvhu+m8bzL7Fvwm9m30G/Fb2TfTb8c6MEXBadymY2ekrmOmk39aOWsM1VHXmrbwVVzv3wmCN2zSmzS1GkA+b+2iMzT/zsGXiGu3ikERUdWvIXQ+V5CbwZQ/NzkCcuICITviHmQGX4aMwDOQ8fQYpD/cB2l3d0Da7a2QenMjpF5fBylXV0HK5WWQfHExJJ+fTzGvBEnnAyDp7GxIOv0XJJ6cRiGaCKayd8J3Sz4XoPHO7Bvot6RcWsq+Db+RfevtLezb0x/sZXWR8eI0rZtLtI7uQk7sC1Zn2HkU5KTTqlTGRwH3ydcd+lvEs+dlh+qoa79Y9Ga6p7T+13qCt247kPwfHZq/b6k5NP/Q1pV4/jlfOHf3YbUoA1qj/KwUyE0Mhqyw25BJSZz+YB+k3pCoci+BZEqAhKPjIW6/H8Tt9oXY7R4Qs9kRojf2hOgN3SBqvT1EresMUWs7QtQaG4hc1Q4iV1pSWGhiRWuIWNacopmJgb4TfTed98VvWGUFUauti75tnR37Vvzm6I09IHqzE60Ld1onfVjdJBwZC0mnpkPKhQW0M1gLafd3Q8bzU5AVehNy4l/ROk6mRr/6XIlfhEaA/5J14je9+pRuneHBFKpzbajuKa3/tZrgTVv0I02tfdmwqSy5/9HekXQYIRI8t52Tl2e0xi/My4LcpFBqea4wS5RyeSkkHpsAsZTAMVscIHJdJ6rc7anit4Hwpc1Lsay5el3BdcSylhCxsi1Eru1AO4LuELurD+0gx7LRQNq93ZAZdAlyE4JZGxhTcGX9zO0H4Dt7iVDXttSltS4lebMOA0jL1gMU50GtJbiFrR+LzKE9NP/JbRCZv/2AmJCcaoQmL4R8OnTMosPttId72ZA0bt9gZo2QzOFLmxUrrHkNKZtxlsq+bwQdEURR6x+3dwAkn5nN2iAr7BZrEzDSUD4jOxt2nb4otR40TmOojrrXpbu/4jyolQRv2YYOj6z6kg+1HFpwaO7z12LhxpMXBm5mOqemQ/Cs8DuQdmcrmwPHbveESDr01LA+NQ3LOEsTAnaoMbQNEo9PZm2SGXqDtVFRMCjDCp5Cm7Byo/hvp/5lzpA7E7MO/UhbKz/F+VCrCI6LGx26jSCftNE9SNKs3xiy5cRZKSvHcPM0XOhhFpsqEc6j0YJELG9ZZNVUKI9lLWibdIf4w6Mh9c4WZtGxzQwtp27eA5+/FgkYO+CNvqFTlQ3VxUZN+ijOi1pDcOwxG3boqxP9FCNsTli1yWAHSAoL8ug8LwjS7u+BxBOTIYoOw4ushwkotQo9aM7aCDvhtPt72Wo8tqGhJDUjAzYdPyP95j20zPlxOiW09iEdO41QnBe1guCNzfsQu14jddxRP6C9qvOkOcKFu48M0ph56XFs6ybpzEyI3tQLwpe/Iba5Wpp6SacTUZt6QuLf02gbnoK8VMNtk0bEJaC/uvBtz9LQT+irbmnvR5o2rxl744q/wNtg02EYadSpL/lAy3r/7DqILNx5UEpMTatiExZCXkoU2+LCLZvINTZGsjYqjA3casQ2xP323MQQMMTcHAM7Yoy3nuNnkvfal544+3d7T2LXZaTi/KjRBDdr5ku6Oo4kdbUW1j7q6E4Gzl0u3H3xqorcLoSchBBIvbWZbXVFLG+tuJKqqBqwDWN2eEHKtXWQHRtokJV29IpcvPOg+G2Z8+O44NahxzBi3qKf4jypsQS36+JPGtn309kWaztkAtlx6qJUpVhqtOFz418y54qYbW6KK6YKwyJ6swOkXF4OOdFPDOIee/f5K3CbEiDUtXUp2Tb7nlrxnr3GKM6TGknw5q37Ezsnf52oqN/QXvSvjTvFyPjEKpE7O+ohJF9aAlEbe0IYnceFLTFXy1pWRq63h6Rz85inYWFB1UiOGWrWHDwhtew/RuMwinXPoaS1hWl7uCn+AtrA43lOzmPJp200F9YwRY2bOLdqC2t0WJ5Ne3X0kIrc0I0qQ1MVtRiR6zpD0tkAdi6gqpYcQ2uPWrZe+MS+9MTZd+08iJv7RMU5U6MIjj1iB8cROv7mPzj1J/O375cSUuQvrOUmhbEDEFGbnYqHc03fsZJ3lVrp95X7/qW/wz1zNlxPqNqaDZ4423VG08MNrbid0whi0Xaw4rypEQT/w6w3cXUbT+ppWW90NvCYNk/A8LdyJS8tmi2oRdM5d9gSrd7+nbk257zmub956T0qdV197x+Fc/IbEuSlRFaJ5CHRsTB+5Ubxc3uhNHqQBdVNj0lMd5Xmj8kTHJ1aOjiP0NkWa+g9HKOiStkyPdby02Mh9c5WiN76LpObh3zmMu7/hlzmlbw25vvr/j56iwvbQsNz7HIFD6Ocvf0Aeoz7SygbjbVx536kQ8dhivPHpAmOLqmCMEknkMPHndyJ3/yVwpPgUFmNgieQ0p8eg9i9A0sVQMU7Bxyyx+0dBBnP/q7SqTQMvYw+GP92GaARGMLFfRxzzFKaRyZL8HbUend2HUnqaGUladzHn2C0DVn+5rioFvkQEk/9BeErLYsb21wt39EyfIUF1YUZVCfuQ1UcYa49egYu4hzhH+2dSubiTez6kY6dhyvOI5MkODrvu7tPIPW0XFI/7exJ/BevEZ6HRshqiLxUOu++thYipa6gtAV5Z7CU87qagdtnKVdWsbP9cgWDeS7be0T60XVg6UjT0pkIXpOImXlfxflkcgTvRHu+Vt0GsDxRZQluNWwSwdzPclIN4QkjPD8cvV1QXulVmBSitjhD2p1tdD4u35/iUVAI9Ju1RPjAutT5pZG9L+nR07ScXxR/AXTa7+EyhtTVmnt/1dWbTF23TYiMS+Cv/cJ8yHx9DeKPjIOwZS0UVygVJoalzSHuwHDIeHmuKBikDMEF3w1HTksNvYdpuLD27iOS5q36K84rkyG4fRd/0rCzr4ZLKoZh6jhiCjly+aYkZ6aEJ4ow6B86OiiuTCpMEhGrrJjDU07ia1kER3n0KgT6Uitep4wLaxM6EnV0HKc4r0yC4Ois7+o5XidSy9c9+5AZG3aK0Qn8Q6jCvBxIf3ocYnb1VVyJVJg2ord50GncPjqdk5faCq24dOSUZNbbv9Rnw9KJOHiOJS3bmEb8NkUf7uw0nvzcwUfDer9xSb10/4m8So+8DwnHp9CheUsILW7I0DJQr9Xrkj8vbQHxh8dAZsh1WbqGEhwZDaOWri9JmoC6/IO1F/HymqI4uRUleIvW/YmrzwTyoVZ2kp/dB5Gluw9LuN/IK/mZCZByY0PJqnnZBlVLtdRXRqzpAMlXVjLdkSOY/mj/+auS1dCJpVac6nQHx+HEsp3yLqwKWu9xpFFXzUTs6JKKKWSuPZLhklpYwBbW4g6OrJbhnYrag9i9g5jugMxTZ+jCOm7FRuGzLl6lZyesBeLmOuHdJDhabxev8Tq5xX51H0xW7T8mpctIGpiXFgMpV1bQHtnWJCyDWtacMnxlW6Y7OSwSDL/gNu7hyzckW39Rw4rbO/uTNgofJ632B/6B1tt5HPlfZx+tSC1uZPD8lcLT12HcFYy5r9KfHoXobQKELi5qOFa+gXqtXldwjbqT9mAv0yU5Ep+cArO37BHrl4n88m17d+LpMendInibtoNIN1d/5qRfluBmff3Jtr/PS7kyspNkxzyHhL+nlyysKa0s6nXNuw5b1grij01guiRHcDv30v3H4DgJXVhLj5N2dBpO2lsPeTcIjsEcnF3G6cQ4r9PBlQyau1x4JsN6YxbL1Pu7IWqzo2YDqqVacpa4OIu6hFlS5UhSWjoEbNsn/du5NGFCfRtP4uM9RbHjpNVuvTs6jdCx3g19hrMDJRgah08KISv8LsQfGU8byFyzZ1ahC16lN5V78z5D7r2pDqEuZQZfBbmHUa4+fAruUwME3O59E4W1q9tIYm0ztHYTHA+UeHpMJB9rBXOo18mDjFi0RngZxn8YH+OZJ19dDeG4sKY0eVTUCuAibdKFRUy35EhGVjasPXRSwhgGpcdJXUifPlMUSUFcbQ+yth1KOrjoBnNoNWAs2Xn6ooT7iVxSkA/pL8+zLQ6llUJF7UL0Dh+mW3JTFz8JDoXB81YKdTsWZSjFQ1SN7XwVseLVZL17E2+vyaSepab1/hiPgy5ZJ7wI4z8OWrQtthzCV9vQRmlS3DhNiodp6rX+66aci1BKv6/c96/a88JXWEIy1S2522YYv23DsdNSkz6lLqz1LJ3ZkehGTas3KES1PARXETu7j9Sx3paDx5O9565wW28Mg5vx4gzE7PY1SI+tQoU2Ynb5Qvrjo7JDLr8IjYChC1eXWnGq+1YOlAd21ZvXrBqsdx/i4TFeJxTTF12KkgeGxfDPdXITQyHx7FwIW24BRb2visqhKWdpKvfmfUbV7426lXByGtM1OZKTlwc49Wzef3SpFacc8PaeVK1W3OgP6NipKJiD5nFQJ9Jt7Azh75t3uSuuIDeTZQCN2uhQTqOq1+q1Ya4j1tkxXcvPSpVFckxeOGHlxpJY6iwoBJ2LV2doJ6PeHMPXdHcapXMc9HvHfiRg614pPpm/4rIi70PckbFsrhSyyIyiiVqqpVFKJHnckXGQGXJNFsExeeGRKzcljExUGhTCiXj7TCJNqymvmVFvjqFktYM5vG/lTBwnzhLO3XnAX2Ho1HJnO0Ss76LR64ZoDbfU6/KumxZfN63kNc/9S+9RuWtjvr+c++t/34h1XSDl+nqme3IkPDYBxq/cJHxqJ5RYcRunYaRb9+oJ7WQ8692sL3F0G0s+tNB0avmv8wCycMcBKTE1nbuysiKo9T40RmtIpUKFcRG7dwjTPTnCrPjlm1L7oaVWHDPm9nQdQ5o0M36OcaPduEeP0eR/tprBHDA7I4a4wWyNvJKflUJ70nUQsdqG9rBmKlRUG8JWWDLdy0uLlUXy+KQUmLFhp/BZGSv+rbVAevUaWzMJ3rxlf+LoOU4nt/evHn4EszRmZmdzVlHRWe/YfYMVb2wV7yZi9g6G9MCzspIYFhYCnLn9QLIqY8XxOGl319HMfbvGEbyXwxjS2F5z7v2BtTML5nDzaSB3BeVnJEDytbUQvtq2eAFEhSws5izl3Luy18Z8/6rcu5xr1L2kS8sgNzWGW39R4qgVx6AQ/9e9d4kV/7WDD3F3M252UoPfEIPNuVDr/YFWbu+fXAeSJbsPS6kZnAHuaI+Z8fI8xOzuX1zZyq+u1thyMWep9PvKfX8jPT96py+kvzgj2/nl0KXrUtcxf2pY8W4u/qRFa+MFaDTozfBInIuLnmAOtm7El869770I4q4U5tRyZi6ELmtBK7mxiirBjLM0lXvzPsM49w5d1prq4hzIiZeXijg2KRnmb98vYsz/N9z4v/YexNWIoZ0MejMMMtfNbaTOcdBGfUaQDUdPSTm5fM77GAI59dEhiNzsQnvnxqVY1Fi9lnVtVnxtVslrnvuXuUelro35/nLuX7n3j9zsBGkPD1Dd5F1HKhKMN9hlzHShZNuYcqWXxxjStr2faRMcrbe72wSd3N51O7iRQQErhIev+APMY1D6hNOzIHRp8yr0zCpUGA6hS1tAwqmZkBPHv5aEgtGCp63fLn3vUBpw9Bc6F/dwN85c3KDWu5PzCDavKEvwpn1Hki0nzvFb7/wcSHt8GKK2uBZXLu8QUC3V0jhlxAYHSL2/Bwpy5aUhPn3rPrhM1gzthAEajWHFDXITPFDi5TWRfKx1HPRze4GMX7lRCIni3z/MjnkG8SemQsgSc1C611ahQgOLzZkLa1b4PVkET05Lh5X7j0nflgnQiNlJvYRJ7Gi1yREcgzl0ch2hkx3UdoRIDl2+IRUU8IW/wcygKXd3QoTUA17TCn290Ewt1dKkyvC1nSH5+kbIz0ySRfL7L4PBdfJc4X0b15K5eOPOmGPcsMdJq3wDDEPj4z2ZHYXTOA7a1ZtMWr1ZkHMcNCvqMcQfm0yttzr3VmGiQCt+aBRkht6WRfD0rCyYv22/9JswpHS3CYNCeIwnjQ14nLTKN7CyGULsWTCHMnNvOrfoPGoaOXb1lsT74QXZaZByGw+UdFW+EVWoeAswmlDytfWQlyEv7dHVR8+g/5ylQp3iHOPvt3MiZvb9iZ2dv2kQHI+D+vhM1snt/b1TPzJv234xIYX3OGiRS2rM/pF0KGSmQoXJI3r3AJZnXI4LK4Z22nnqgkaAxrqWTsTLeyJp2sIwB1Gq9GM7e3/SuvsALZdUF+I+dZ5w9eEz7g/OS4+HpCsrIWyVbfF8x0wt1dKky7DllpB4fiHkJvHHFUQJiYqBIfNXCZ92KT2I0sjelzg4GOYginzrXXwcVNt6/89lAFm086CEQeC5pLAAMoIuQ8zeoUWVp8Lw4FVgU4OJvnf0zr6Q/vw0FMqw4pjJB3MCWPhN0AgK0a/fFNKsZdWDQsj+oX0Xf51gDnWsnYnw5wLh5tMX3B+KUVKTLi2HsJVWWo3aWL1Wr036OnSZBSSenQc5MuO3PQ+JgMmrNwufdfEuseJmdGTs6DhOGYI3be5LnD3G6YRi+tltEFl94LiEwd95BJ3301+cZT2hRuWpMCyMacGrY3RgwveO3OIOaRiFVUYsdYwqjAvSnUdOLTWWlujCOpY0b9W/+gmOwRx+6qAZzAEPlAyYu1xWdtCchGBIODMHQpa0VJ4EKlTIQMjiZhB3fCpkRz/l1n+UhJQ0mLt1r/iDY78SK85yjFfxOKks6+3qOZ58pBWK6VdPP7L+8N9SVo4Ml9QnRyFyq5fijaRCRVUQsbHYhTWP80h0sZy7/QAcJswscWHFubidwwjSorV8K879g+7dR7FgDhrZQW1dyYA5y4QnwfxzkJy4VxB/6i/Vequo8QhZ3Bxij02C7KjHsgiOLqwLdhyQ/us6sIRb/7b2JM7O8ufiXP8YV/Uc3UaznqUswX/3HiYrOyjGOE+9vw8iNzkp3jgqVBgC4eu6QsqtbbJjqV9//By8/lxQkp2UHURx8ietLAYan+C9eo0hP3bUDObAsoMuXisrOyg668ceGQevFzWFYFo5KlTUdLxe2BRi9g+DDJaCmF8ys3NAOnJKMus9QiMohCBMNi7B21gOIl2c/XWOg7YaNJbsPnOZO78YRklNvrERwtbaFVeMmVqqZa0oQ1daQ9LllZCXJi8F8fOQcOb88lGHN3nNnEhHp+GyspNW6h+xUEx0HvCZVjCHT+08ycgl64RXEVGcn1AImWF3IObgaMWHVCpUGAPRewYzxy10v+aV7Jxc2Hz8jGTmU2rF69t4kt4+/DnGK/WPMJhDR6cROqGYrIZMJPvOX5EKCvmOg+ZnJDIn/dDVHVhlKN3jqqVaGroMWd4OEi9iFFZe41ckgXTK60eteF3bUive1X0Use0wzLAEx0yIXl6TdLKDftWjN5m+YYcYlZDI9eLMqSXwHHPSD15gpkJFrUXkNgHSnhyT6fxSAJhau/WAsaW+JpSDvn2nMjdxgxG8A+0xOrn6kw/albHeVk6k5/iZwpnb/OlccpPDIfH8YtrDWSreACpUGBMhS1pB/OnZbCtYjoTHxsO4FRsEnAoXHSd1JGZ2/Yid/UjDEBytd5/eU3SCOfxfzz5k5sZdEoaB5RFmvZ+fhqgdvmwYU4IFZjX/uiIo/X7qtSLXEejC+uiwbBdWtOItB44p3bWiXPTwHF/pHONv/Usb26Gki8coDZfU99o7ke5jZwhnbsmx3hGQcHYevF7aRvHe1RAIms8Ppd9ZRfXi9ZKWEH9yOrXiL7n5goIRkcZSK16vs0fRvnixFe/YqXI5xsv9Cwzm0Ntnss6BEgwUF7Btn5SYmsb1ogV52ZD68ACEb3RSvNKrgiADQulvUVE9CMMUxLd3MA7wCi5gH792W8L4hiUBGi2cmBVvUom5eLl/0cluBGndTTOYw3tWzsRh4izh4j1+V7yc2BcQd3wavF7UTPEKlwM51lq16ioYFppD7KFxjANyBKfCM6Qdwtc9+pTMxRva9yPdu4+WR/DG1Hr3ch6jkx20PrXeszfvkeKTU7he8I31jtjorHxlcyJofuMiLGhc+mcjXSv9rSqMh7C1XRkHCnIyuAleiFb86m2N46R42Kt3b5E0af720E7lWm/tYA6YHdR58hzh4n1+652NB0qOT4fgGma9NQhYTVD6m1UYCdSKIweyIh9x8wclNikF/pR2iP/XozQ7qVnXAaRnz7eHdtL5H+YtfEkvtzGkjpb1/s1zCFm5/7iUnsmXzQEPlKTc3QXh63uWzDtNvlSA2JrW3ETqQS0NWoZRDqB7NnKCV9CV7MK9R9BzwsySvGYf4HFS55Eso2+lCd6z5xidYA6YX6z/nGWy8ovh0bm4o5NZDxas9cGmeK04ufVYclOqH/W6CteUAzEHR1XpOGnAtr1i/eKMKMjR760F4u4+qXIEN2/Rj7gK40ldrWAODbyHknWH/5bwpAuPMOt9bw+ESw4aH2yqUJrU6nC99iN0jR3lxG522EqOnL39QOo2ZnqZAI2OxM5xRLlWXOOiR8/RLGSrdnbQwfNWygrmkBX5AGKPTqJzb3PFK7YilBKrkUmVweriW+3CwqaUExMhM+SGLIInpabBnC17xO969S3hKIZ2cnYZ/3aCYzCHrk7+5EOtAyXN+8s9DppK5xsbIHR1ZzDmFpMh8IoSyZShdP2oMCyQE0mXVsgOCnHt0TNwnRJQEtoJj3Db9BpGWlsOKp/g9l392dy7LLk/6exJRi9dL7yOiuF+iYyQmxC9b5jilVk5mIa1Lr9USV7bELnTl3FEjqRlZMKS3Yel/7oOKHVAa+9OnJ11rTj7D+6ldXEYwdKmlCV4w97+LLd3bh6n9c5OY6uFoas6lnhtmSxMYK5dKShdTyoMCjxOihzJS5eX1wydzfDAV9lkCZ0ph5tq7Yuz/3TsPIx82tqV/LNtmUCKHVzJ4IAVwjMZYZAzw+5B9IGRiveSFeHVPDoEnteolqExg2r1TR/IkYwgeaGdcC4+ezOdi/fsW7KiXt/Kk9h10UxcyHzOLewH6+57ew0lG46c4g+kmEOt980txXNvtDzalsh0rpUno9LAOb7WNGDBm46Btz6Lf1MyKqroWk77ab9feddy7l/Z96+K/mm+L5uLX1nDOCNHcEW965g/NZIldOnlz3bDSghu22kY+ay1m86+9yC03iFyrPcd2jON0vxIEwQqNlNyUyqV+m2ZeyjdLu8aonYPZJyRI5j/b+7WvcKbFXXkMHK5S7dSK07a2A3WCYP8i9tgsvrgcQnTm/II2/e+swNC13ZVvOIqgg45TOFa7m8M/nw5dWrGWRrzGaZ27/KfEbLCmnFGzr44eredvHFXw0cdudzQ2pedJ2EE/6KVm04CQe8ZC4W7z/mjUGTjibFjU+gwpIniBK6Q4IoPj2sG5CuvMVD7CI6IPTJRthWPTUyGKWu3Cl929S5jxV2JRbuiOOoszlNZ643pf5fvPSqlZ/H5nBfm5UDqo0MQvtFZcfIak9ym0Fko8Xxj1avSumAKCF3fHZJvbIL8bP59cTwvfuzKLclq6MTSKbalMzG37s+ivuic93abGiDcehrI/aCc+FcQ//dMCFpkXvziSu8dl18aUgmVtqbV/3zN0pBrDxW3X2VhGnpW6fenI97o/SOoFb/NzTuUqPhEmLBqk/BJcew25PRXdGTehlpxzVhr3XsTdIPDyTuPYLyptCfHIXyLR7V4dlUZlVZoY3QWhiNXdT6/BCX1qElOw649lNd2jSpZyoEx713xM0JWd4LkW1shP4ePeyj5BQWw6/RFqZnvKI3Ybb9Y+GgS3NJvPDly+abE+4C8tFgWA/r1srYm0EtWXFZeiQ3XWWjcWzapFHq+QlBaT6q1XNScjoBnQE4C/4lNlMdBIeAzY5GAMROLrLgT+bqVeynBP+zgRoYtXC0Ec7ulFkLG6+sQtWcIyJl/VDdQcV4WK9DLMnij/AbvLPQorCGVnPdeJZZSRqmvLo1PcuV1proQsdWbRR2GQv5sKGmZmbBo10HxX8WLbSzzUBuXUoL/5DaIrDt8kt8tFQ+VXJfg9coOivf41a1Ib+ss9Hce8n5jmOdrEZbjurxnqzAsgpda0pHwctk5zc7cui+1GVSaKAEPoRSHQnYkjhNnC1cfPuW+aXbMM4g5Ookqg5niFaTC8Chv9MB/H+W/xeRB6zb6gD9khd+VRXBMlDBw7nKhXie3ksU29ocv7DzJxFWbxcg4Tsd3OpRIf3Yawrd4yh72VXfJrFpAaal4oxoJBrG4801w7m8iemSsMkzqBakPD0FhId9IGgUDsizccUD6xcOvxIoXea4JQ8jm42f5z3xnp0DS1bXwerkV97BPqesSggdUvTG0Owt9pbZiVuY3L+dV7fnaQ3t5HYSyaw/68LLk27VX8Q28qm/06/LfP3ipBSScXwJ56fKG6ceu3gJMTKJB8C5jpguXHsiIlorD88PjoCadyiohkIE7i/Ig+zcynl8eMbnqqNhCK7n2UOE9azmi9w6TPUzH058jFq0V/2ld5MDGjoX6zV8lBkdGc96qkGUJDd8qKF4hvAQ35L3eBkP9prLPN8RwWp0rK49QOkzHrKTAmZYbBXMW0GG6+K8uRavpBJfVZ27cxe3cUpCXBSl3dkHIajvFK4QHhpx3mwrB8c+GGE6rq+OmgeBl7SH5+kbIl3GMFKfZ6PTyk8egIoL/6DGYbDp2Rirg7C3yMxIg4cISCFrcUvEKUQoVDrUN9JuKnm+w4fQbKLX2wFkq3f7GQtDC5hB3ajZL1ilHLt1/DNbDJ7N5OOkwXBRO3brHfZPsmOcQc2ic4pWhNOQQ1RDkNgoUXnuQA8XrzEiI2jsUssL4eYkSFBENXtMXiO9ZuxCCf3j0KoT7Jhmvr0HEzv5FClsGpnytErwccM67jTE1kQtT0i9DXuPWc3rgWVkET0hJhbHLJebVRkYvWy/iBjmX0OF82rO/IWyji3JKKRMGb4zyrIuM38h5flWH0xoWWkYdKk3w8p5X0xG6piukPDgoy201MzsbArbuFf/nPICQP9dvF/mzhdbMBTZjQFELboDhtCG/uSprD+owXRNVWWhDd/OV+46JvwlDCZm3bb+YmsGXDA39z5OurmMvUZGFMJXSaAQvvn9gQEONkvc3Rn2/clCl+xqwYzMITETPDFUGLW7DFrFzZTi84HL55uNnxKa+owhZvu+omJWTy0fwzGRIvLQSgpe0MW6j1RQlkPOsKr6fSvDajaCFLSDu9FzITYnkJjjKnrOXpfZDJhCy/vDfIh4Y5yJ4RiIknF8EQYtaGHVuZTCYQIMZEsYgojbxK7wu7/3k/MYQUFrHDIxXC5pC7InpkJPInxMQ5fDlG9Bp5FQLjH3OTXDMxhB/OgDwBJnSFWEqCJShcIEyFdQQ1rbKQ38ZnY9KcD7EHJ4A2TEvZBH8yJWbUudR04hMgsdD3Km5gD7oSlszk2l8+pzAuYiGRcTl/A3PexqEjFW4X4l1Dqj62oMhy9qFxpTg45UjePyZedSCNzGBijAdFJG1CLy/qey/N8RwWof8ckt9kPMbFXrqkRL86BQWzFQmwYES3IKsPnBCzMnjS0/EhuhnKcEXNlO+IkwMaE14LQrPvzfEcFpd+DJ94PQ39vg0yEngd0JD2X/hqmQzfDIhAdv2iinpGXwEZ4tsC+HVolaKV4QposgiG2fYaIjhtIZVrSKqvPYQYPjr2oBXC5pB3N8zISc5nJvchYWFsPHYGdHMdyQhk1ZvFmMSk7hugGlWEq+shqClbRWviHcOhhxOv/n7qiCgamsPhioVbxcDA41n/LlFkJsWy03w7NxcWLL7kPiL+2BC/Oav5D4LXpCbBcm3t8PrlR2LGstIiyY1e/HFhJVOi2xVRVXWHgyFovZ+U5qG3umW2u9Z/nsHL20PiVfXU2PK78mWlpEJf0rbxfq9+hLiMnkudyaTwoI8SH14GELW9lBeWSurUAp0Hob8jcbwuqrDaT0W1RD1K2ftwVBQWr8MjeAVtpB8ZxcU5vMlAEXBfGVDFqwSP+7sQYjN0Enk+NVbnMkOCiH9xTkI2+yheEVUN+SMDgw6ojDAcNpodSNj7aHIAv+hZZH5r5XWC0MjdH1PSH10DIocT/nkWUg4uIlzxX+0dyTkZ08/IsnYKsuKfABR+/yLFVdboU3r2tiQY+WVmk4Yk+Dy36lhlWFK+maIazyKjQlF5Mj5Ow+hnd+EooAPX3X1JjM27BDxDCmP5KVGs6gTL+c1MehiibFKuZVd7cpuAoSrGuR0VA2LrXJVYBp6ZogS98Bj2R54MDe5c3LzYOuJc9J/nAcUhWx638aZ9Jm5WHgSzOfziqlOcREgaGk7MPSCiXHAWckG7AB4f/O25xuvY1F27UGX8I3KELeismEFbV+zgCvoeJIMHcp4BXMbTJd2iJ939iwNm4zz8BPX73DNwzGjaMrDQxCytptBF0uMBiN2CBV1Bry/qUzHU91Qcu1Bd0j+h+a10rplYLAFtts7WNwFXrn7/BX0m7VU+EdxEkL2n++d+hE8IJ7NeWw0I/QOROweDIZYJDH6tdE6Ap7OgOc3+qEkYXmtvpzfvK0sJXdZNNRTd3L0pew93nZdFX2sXJuHb/WB9JeXuMmNsvfsZandkImamU3qdHAjwxetFl5H8W2q56XGsDOr6HVjiIUS46OCxjD26IDnNxU8k4cclSOrcqMDPmgTXWmdMixezm8KMcxFlT+NcFpmFvy1cZf4vaOvJsERtiOmkFM373EN05nDy50d8HqVPej2rKaIishv5NFBCbEr+Ru9z+OfA1d+KFw+4atj7YHvXcuSvPYgaGl7SLomsTUuXgkMjwSPafOFN1lNNAj+vfMAsoJFd+HbWE8PugoRuwZoKaMpl7zEN9DoQGMoyPMbPb28LLJVbN35phuGX3vgvS7/3eToRcNKllXRv4rq9A8I2+IFac/PcJMb/c/Rn6VZv1ElnNYg+Ed0mD5kwSrhZRhfiJjc1GiIPzMfXi1sWUYJtRXZlK4rS3pe8HQGPL/R/yzDWEF9pORBZTsDOb+pTGkK+mS4axyexx6fLmt7DA+Mzdu2j4VKfsPp99uWITii5YAxZO+5K1xZTpjb6uNjELrBtRxlNEVoV64xRwdvewfef6tp4Q0xnNYhjtJrD1ydS1my8NZpeXVcUVlVvSu/DF7ZEZJv75S1en7zSSC4Tw0Q0HvtDZ8/tHTWJPgX9l7sdBlvnvDs2BcQc0SEwHmNDVAJ1U10fYQ35OigMp1CZYd3+p5fxeF0uQT6o+JrY609VOp+SuuO4RGxaxBkhN7iJjfmBV998ITUwHNICZf/Sa33p61dNQmO6DZuhnD+7kOuB+Rnp0HS9Y0QtLwDVNRLmU5pzE5DbmdR2d+UfZYBhtN6CVRZVLIzkPWb8q5NQX8MW76kU9z4swvolDeGm+Cvo2Jg6ILVAk6zS6x3WyfybUt3XYLXd+xHFu48KPHGSk8PvkZ7ID8tBVRhdBhsOK2PUJUBT2cg5zfl3aN2IVRygJRHR6GwMJ+Ld3iG5MCFq1LrgWM1ePx5G1fSoFVvQj5o66TxF/+0ciLOk+YIVx8+43pQHmYbvbSKBYF4MeePUsz9wySvSxXNGGV1oazSV3E4/VZCKbX2oAlT0h9DXgfObwYxx6ZBdnwQF+dQQqNjYcwySajbyb3M4poT+YZa7xZt+hPyKWW6thX/t1N/snjXISmNw4oXFhZAWuB5CN/WR/NDTLCsPvIZqrOozL+t6nD6bcTT9xx9HQxPyfNvG5qE3hirDNngDMl3d0NhfjYXuYus9zWpzeAJGvytZ+FC2nUcQn5v7EPID5YCY3zZf/ChjQvx+WuRcD8wmOuBOUnhEHdqDrxknm2lZDK5spp65+rpSHg6LZ4OoDxSVubevNdv/zeK64sxSwyPfGwqZEU+4uIaSkxiMkxdt038UmNrzInUbysw680IbtlxMPmEMl7biv/q6UfWHjop5eRW3j+9oPgAymvJySR6Rr2l0s809HVJaajh9NsIV714Mad2W24sg1d1guR7e9lCNY+gY8vfN+5i9hKhLG+Ry206DyYNzXoXEby1xUDyYzsvUkfLitexdibeMxYK917wxWXGTfrYkzPZvEJDIU0Fhuh1OUujdRp6YJjhdEWENv7ag+J6Ug0InN8Uoo9MhOw4/rk3BkqdsnarhvX+gOJ3277E2nYoIzcj+B+U6Z26DqNzcV0r/ovbYLLm4EmJx321IC8bUh4dpvMKF8Ur8G0kV6o0SKdRkeJUSKDKDp/lkLPqaw6K60c1ATmCc2/kDI+g9T55/Y7U0X8K0bTezsS+hz9p2KR3KcHxP+2s/chP7b1pD6Bpxet2cCODAlYIGOOJR7LjXkLM8enwYl4TxSvR5GBkC/4GhrWoFVtsQz1b8fapLtC5d/SJ6ZAZwedzgpKYmgazt+wRv+vVt3TuTbn7QzuBtLceUkLuEoI3atKH2FHmf2zhrGPFG/cZQbacOCvxZD8pyMuBlAcH4PW6XspX5DsO4w+n9d+/5B20SVvO75Sup+pG8MpOjCP5OXxJR9B6oyNaz/EzNebeH1k6E5uuQ0mjpn10CY6wthlCWnUfSHsCTYJ/ZOtGBsxdLjwJ4gvphHt60cemUStupnhlqjDccJrdT7XYVWsLyonIg2Nl7XvHJ6XAzE27xG979in1XUEHtfYCse8yUoPcGgTHcbur6zi9Vvxnt0Fk+d6jXN5thfl5dC5+jM4zXBWvUBVlYABy6tyrAov91ut3EMiJpLt7GEd4pKCgEI5duSXZjhA1p9KUs3a9/HWstwbBmRW3HUpa67HidW1diM+MRdwJErITXkPMiZm0x2qqeKWqKAc85OS5n0pk/QgwY5zIiubzFEWJo9Z7xoYdwlfde2tY78Zd+um13joEb0x7AGeXseRjS90V9f+5DGTebclp6ZV+IRaY8dHRon1xpStWhQoTQPDqLowTvCvneIT75I27UqeRUzWNL5179+49mTRp1rdigiPaW/uR1l0G6PqoWzsT9ylzhSsPn3K9WE5iKMSenK1acRXvPJAD0UcmQ04S33oWSnRCEkxbt034V3efMivnjsScjrg724/QS269BMd98V4Oo8knevbFv3PwJXO37pVwmb6ygqdjMARN6BZveE4/Umko3ciGgtL1qIIfyIGUR0e4T4zl5efD/gvXpLZ+EzX4WI/OvX18RI197woJjmhtOZDYOgwn77fVXHD7Z3sn4jhhlnDpwROuF8QzrnHnFsHLha3h+Wz6sbN/Ly7/qPZrpYlpEHIrWH/qtbzrwPnNGQdwRMsrmP0XT4zVK05mwLzW6Ai7ebeBxKaM11qlCY5W3Ml5DDuVom3Ff3DqRxbtPCgl8czFC/Ih9fkpCN0sKN6LqlChBF6vc6AcOM3WpXgErfeec5cly8HjdVbOvbwmkUZvsd7lEvyNFe/pPkrnpNl7Vs7EYdJs7qgvGJwx7txCeLmIWvE5vysLE+vdua+Vrj8VXGDnvU/OkhetJTIG/JesEz7p5FEmHJMTMe9SsfV+K8H/oHByGkt+7OCtY8W/phN9PKYWFc8Ru62wENKDrkD4ziFllFah0gR69CpB6fpTS64ydEvfolDIHMFMUfAkJ3qRNuntr8G/j9u4EA/3CXSk/XZyv5XgiJatBxBHj9E6K+oI62GTycGL17kisOZlJELClXXwaplV8ce/wW/Ve20CvbpsKFFf6rXsaxyxxp1fBrkp0VzkRnkRGg54FqSubWlQFgyF7CCMIW3b+1VI7goJjnByHku+t/LUIfiXXVgEViE0Oq7yb4xWPPg6hO8eBqU9nJJQvneXV6qoGaDWe5svpL44jwtRXOTOzcuHrSfPSeZ9R2ruZNkIxNVtPFsnMwjBW1Ar3s1lJPnQUteKt/ObQPacuyLl51f+5fOzUiDx2kYIWtEJino6pfCmEUynt6/4Wsn6UsGLl0vaQfzFlZCbxmEEi+VFWAQMnrdCqFPGeuNI2s7Fn7RtVznrXSmCI7p28yc/23izWMsaK3kd3Ynf/JXCs9dhXC+fFfkYog5NgucBjbWUuLrLmgal6kktucu5DSFirz9khNzmJndGVjasOXRSauBRJs45xU8dfIir64RKk7vSBG/a3Jf0chlN6ljqHkT5zXsoWX/kFF9QCExaeG8vBK/tySrjWXGPV91lTYNS9aSW/CWOUBNvbuUOxYSCZz4wmlLZJII4gnbwGMPWxQxOcESXriPJjzY+rCfRDgqBx0kfB/GlO82KfgpRR0Rqxc1opTQoVuLqLt/ARHr9css3UKqe1JKrpNY7cv8YyAi7y01uTAG8ct8x6RdPPw2efW8tEHe3iVzk5iI4OrN3dx7FnNt1rLgwlKw+cELCoUVlBZ3tk+/vh9frnLSUWBmYQq//tlJFzUHQSntIurWdO5gDyrVHz1gK4Pe0rDfOvVtZDDQewRFWNkNIux6DdZxfPqAv4zolQLjM6cKakxwBMacDIHBBC6rIDRRDUcOYZqlkvajgB4Ypiz72J2TFveQmd1xyCszatFus7+irMfdGXxRHx7Hc5OYmODq1u7iOZU7uOi6sDr5kzpa9Ujx9ycpKkQvrGQjd2huezWqgKJTu9fVB6TpRwY/Xkgsk44ESTpdUDOZw/OptyW70NA1eYbTjHq6jSfOW/YxPcGbFrYeQNt10g0IwF9aJs4QLvC6syZEQe3YhBC5sRXvAX4t7QqVKU4PS9aGWPOULPA56cqasUEyYxGC6tEP4pkcfDV6ZdetPHJ3GySK3LIKjc7uT82i9QSG+7tmHzNy0S4rjseJ4nDTwPIRu72cEgsiACVgBxetAhSyEbHKHlCfH6ciULxQTHig5euWmZDtCMwwy5vce0G8qaSbTessiOIIFheg6UCfM8nvtHYndqGnCqZv3+D4wPQ7iL62CwMWWwHrDWb8qW7IGU7BU+vvVkrt8saA5G4niuhKvPA8Jh4mrNglfdBE0gjk06zGIdOs+Sja5ZRMc5+KOTqP1Jkv4zF4g9GXFyDiOgyhQCBmhd5hjwHNmRX81DVS3FVD6e1XI1pOwHQMh7dUVpss8kp2bC6sPHJea9R+tGcyBWu++faboDaRodIIj2ln5ERuHYbrHSSlshk8mx67ekng+NT8rFRKuSvBqua3yDabTgEYuVdRovFxsAXEXlst2Se07a4nWcVBHYk5HyJ3syg/FZHSCsxV1l3GknoVu+uHPi6y4EMFlxQEywu5DxIEx8GzO74o3mgoVlcLs3yBs1xBID7rGTe7UzEzYeOy09IvHYA3+fGThQryEiVW23lUiOKKN5UDSw32U3uOkbfwmFB0nLai8HS/IyYDE2zsgaFUX5RtOhYpK4NUya4i/tgHyMpK5CY4BTPvNXip8YF061cURsbl9f2JtU3EwB6MTHOHgOEZvUIiP6ZDDf9Ea4VV4FNdHo4NA9PEZ8DygieKNp0LF2/B8biOIPDQRMmXk9sYkIjM37pT+5zpIc+5Nrbeb63gWcMUkCN6ydX/S3XWkXiveeuBYsvvsZQm3ASorRS6sByF4nYPiDahCxdvwamVnNuKU45KKB0q6j5shvGddyhtMINjRaThp136wQchtEIIjHKkV/95aNyhEvU6eZMTiNUJgWCTXx2cnhED0iZmqFVdhsmDW+/BkyJSToSQ5BRbtOiiVjXHOgjnYCmxdy1DkNhjBW1ArjkEh6uix4mZ9/cnm42eknNzKb/4XFuRCypMT8Hqjp+INqUKFPgSv7QXJ9/ZzZyhBQT8Rp0mzhbI8eZ8FcxhJ2hrQehuM4IgePUaTn229dAhex8aF+Py1SLj9jM/5nsVSP78UAhdZwNOZDeAprVS1VEtTKF/Mbw4xpwIgJ4E/xnlSahpMXrNF/LaXrwZPfuzoQzzc+Y+DVhvBzVv2I47uY0hdC10r/pPrILJk92EpJZ1jrlJYAGmvLkPYzkGlFfwG6rV6reB1yGZvSH12ih2W4hHcTzp7+4FkPVw7OygGcxgr6zhotRGcWfGeo8mPtt46QSE+pFbc688FwvXHz7kqJC89HuIvogtrWzYswspVS7VUsnwxvwXEnlkIOUn8Lqno3RmwdZ/4VdfSXac3oZjcXQ1vvQ1O8KYtfEkvtzGkjh4r/oPTADJ/+36RJyMK9nnpwdcgfNdQWrlavaoKFdWOBhC61RfSXpzljnGO4cUPXbxetHJeNpYChmJyG8sdikkRgiM6dh5O2jkM0bHi77V3IvZj/iSnb96TeCoGY1phbCvckmBDJRUqFEIgRkm9vAbyMvg8NFHCY+Nh5OK14uda1vt/tj6kswFcUquN4Jhj3MNjPPlYT1CIL7t5k2nrt4sxiUlclZMZ9QQiD06EZ7P/ULyRVbybeDbnDwjf4w/pofxRUjHG+b5zV6TGWjHOMXBKV0d/0thcf25vkyQ4wrbjMNKmu56gEBT2o/8UTt+6z1VB6EiQeGsHvFphp3hDq3g3EbSyCyRckSAvi884oYRGx8L4lRuFep3cNY6DWjkOJd26Ve04qCIEb2zeh7i5j9MboPFf3XzIn9IOMTaJz3c3M/o5teITVCuuotrxbHZDiDwsyoqSitZ75+mLEnp1arhyY3ZQYRILZlrjCI7A0E7tevrpPU6K2wRHrtzkmosX5udA0v2DELSmB630X4srXy3V0vjlq9VdIfnhERbPn1cevXoNGFZcO79Y8y4DSdt2hnVqqVaCN2pCrbjbOL0BGr8ozmsWFsN3fjY7IRSiT/wFz+Y2BaV7dRXvBp7PawHRR2fI2hZLz8piwRz+8Bqmof+ftHEhgufESucXM0mCIzB/sa3zcN3QThQdR4jk8OUbXNlJMVJlCu1Jg9c5Q1HvqoIPDThLU7k37zMMd+/XGzwg+d4+7iipKPcDg8F31hLhQw3r7URsHYYb7DioogTHFXVP2lPpW1H/wl4guPAQEh3LVWk5SeEQe3oe7VmbldOo6nX512WtU2Wuee4vl+DGeH8599ctnwU0gdgzC2RFSc3IwgwlR6WfPPy05t4uxNl5fKVye5s8wREW7QYRZ6+x5H092Umb+o4iW0+e5zqIwlxYg65A6PZB8GTmLxS/qqVaGqUM2eTNdA0j//LK1YdP2YGSf7Qv1Xs8Ut3MbgA7nFUd5K4WguM8w9l5HPmpg+5BFMxrNnj+CuFxUAhX5eVlJkL85XXwYolVcYOoUGFYBC5pD7HnljJd45XktHQI2LZP+t5B80DJ53Tu7eIyvtrIXS0ER6ATfXfXUeUeJ914DI+T8sxxClkMrLBdfmwohQ1SdtilXqvXVb1G3Up9fhZ4o6SiYH4xZ3GuznFQ5IChj4OaBMERDg5jyQ9WukEhPrLF7KTLuK14flYKi8IauMxG8d5eRVk04Lw2NTSAFwstmG7JiZKKJyYX7Dgg/eDYX0PP69t4kp69RlcruauV4M1b9SP2Tv6krp65+O9ew4h05G9OK14chXXfGHg663cTUAwVtQGoS2E7h0BmGJ+35Ru5dP8xOE6ao2G9MTtoR6cRlAPVN/eudoIj7LqMID/beLO4zxpBIaxdiPdfi4T7gXyrlQW5mZB0dw+8Wt0Dnvz1s4oK8QtnaSr35n2G/Hu/Wt0dEm5sYbrFK3FJKTBjw07p2zL5xYqyg/oQpyrkF6sxBDdv4Uu6UiuuL0Dj755DqBU/xW3FM6OeMTfCp7MbFTUS9sRqqZYySrTecl1S0Z8DQzF1HTNd8zgo1fXOzv6kZRvjHAc1KYIjunQbSf5n46NznLSurQvBDA/3eK14cRTWoLWOxb2wChXy8HKFPdMlOVFSo+IT4c/128WvuvfWsN7fWgnEybl6V84VJXiT5r6kp+sYvVb8Vw8/smLfUSktk294lJMYxmJkPZvfXHElUVEz8Xx+C4g69ifTJV7Jzy+AQ5euSzYjNEMxoY53cvAnzatx31txgiNYUAhHPx0r/r6VM0HngPN3+QLJF7L4bVcgdIcfKD/PVVHz8CuE7R5etC1GdYlXXoZHgv/itcJHnT00rPd/bb1Jz55jFCO3YgRv0syXCF4TWf5jbSte36k/mbdtn5SQkspVyRhlA6NtvFhiXdxov6ilWlaqfLG4HcRf28gi+fJKTl4e7Dh1QWrVX/M4aB3LIuvdTIGVc8UJjsDMiRY9BumGdrJyIj3G/SWcvsWXYxwlPewehO8bA09m/QbKWwUVNQG4sBa+fyxkRj7m1jeUp6/DYcj8VUK9ju4a1rtJ1/6kZy9lrbeiBMcwNe4e48lHeqz4Vz16E1ywwIULHsHzukl398GrNb0UVxwVNQNBa3uxrVaMN8Armdk5sP7w35JZ7xGaC8bUevv6TiFNm/u+uwRHtLf2I217+Ok9TtrWbwLZc+6yhAsYPJKbEg2x55bA84WW8Jg2oAoV5eH5/FYQe2Yx5CSGc5Mb5cbj5+Axbb7wT+tSI4X5xZp3H0w6dTZeIMUaQ3DMMe7sMpbUs3TRIfinnT3JyCVrufOaYTjb9JDbdKg+mg3VWWPO+Fkt1VKjRN0I2zWMLc7SsR83ufFAycKdB6T/uAzQdL2mI9LePqJBcnvXeIIjrGyGsKAQ7+ux4m0GjiW7Tl/iyk6KwvKM39nFhupKWwkVponA5R0h4fomyMvkz+uNcuXBU3CbEiD8w0rzQIl5l4GkQ6fhivPKZAjeiFpxD48J5GM9VrxeJw8yfOEa4XkI/xAK9zNjzyyC5wvaaDTsE62GVq/fvetnAc0g+uRsyIoNlEVu3OHBDCU/OPXTDOZArbc71WUcmSrNK5MhOMKi7SDi6j1O73HSBsIQgnGtMrI4szjSoXpG+H2W4vXpHLOi4ZmKdx5PZjdk07f04Ouy9rzzCwrg6JWbUueRUzV9OFgwh4HEshoCKdY4gmNQCDe3CeTHjvqzkwp/LhBuPHnB3RiF+XmQ8uRveL3NV3HFUmEaCN7oDkkPDslK+4sSGhMHE1dtEj4rk6GErRlZuBJHp7GKc8kkCY5AK97TY4zeMMs/ewwmy/eiCyt/2NrctHiIv7oRXq7sorhyqVAWL5bYQNyFVZCTzB8hFQWt96GL1yWb4ZO1XFIdSQeHYaS15SDFeWSyBEcr7uo6nnxnrRsU4gNrF+I+dZ5w9dEzWQ2TFRcEMafm0fm4heJKpkIZPJuHvuYzIDPyiSwdQsEAoeOWbxA+7SJoel9Sne3loLxTi0kTHIE5xrs7j9Lr/PJNz75k5qZd3BlRUAoL8iAt6CpEHJwET+eaK65sKqoXT2Y3hrA9o5ivuZzwxyjpdPS4+fhZqWkfzfxiGMyhh/too+T2rnUER2BQiB9tdHOMv9fekdiPmkaOX7vNlRGlhOR5OZD67Axt6JGswZVWOhXVRO5Zf0DIjsGQ8ui4rCAObwRz2w+Ys0wjQwnq6H86+NC5tzLBHGokwTHHuL2jv96DKP8qcmEVeF1Y3wjueaIr6+stfeHxzN8UVz4VRsbMBhC0wQMSbm5nazFyBV1Sl+4+rOOSigdKOlJdNVZu71pJcERnO3/yo7UeK07RfuhEsv/8VW7nlzeCgfQSb+6A4M0+jOSPqCKoqH1g5F7vBvFXN8leVHsjuIPTa+IsAdeCylrv+u0F0tPB9FbOTZ7g6ObXw3m03rxmGEt94NzlwsNXr2U3WG56HLPkOHRTh+u1Dzgsx1Faws2dkJPC6eqsJa+jYjHOmoj59DRdUp2InYM/MTNibu9aS3BEeys/YtljMKmjx4X1FzfcNjsipWbIn1PhcD2ZzsvC9o2GZ/NaMsV4VKwgallzy6dzm0HorqGQdP8A7cjlD8tRMPXvtpPnJathWpFaqE5i2DE88qw0T2oswTGvmaPzWL15zT6wcSHuUwKEy/flb3mg5GenQsrT0xBxeDI8X2Kt+LBSRdWAbRi+fxwkPTpGO/CkKukGyquIKPCbt0L4zF5zW+wjqpNWXYcSMyPn9q7VBEe0pVa8pf0Avc4vuOA2df02kTd5obYU5OdAesgtiDm7FILWudC52x/waPovKmoQsM1erurJ2hC3Q/Nl5PHWFvQ3X3XguPSz2yAdl9TGnfuZ1IGSGktwdH7p1nMU+bSNrhVHtBwwlmw+flbMyuE/rK8hhQWQHf8aEm7tZMO7ZwssqUUoViC0DmppmiVto2fzW7M2i7++hbWhnESB2oIeawcvXgfHibM0kge+OVDi4jaOHZJSmh81nuAIzMTY2m4g25LQ8VO3diHOk+eQM7fuy9ob1xaMCINnyeMur6dKMwKeL7YuJboK08GMX+H5wna0jYZD3MVVrM3yc9INoQJMngSHQr/ZS8V6nTW9KtGpxbzTANKmrem5pNZYgiM6dxlBPm/jqnfb7OuefcjUdduEkKiqDdVLhFrznJRoSH1xDmLPL4eQ7YPo3M4GHs9qrLxiv+PANni+qD1rk5izi2gbXYCc5HBZp8LKk/jkFFi1/7j0k7vm0Bx1r14bF9KdjiiV5kOtI3izlv1I2y5+pK4e5xdEi4FjyabjZyR0SDCcFEBuaiyL+BF/bTNEHpkGQRsEOiRsQ+d8jRRX9ncFOL9+Nq81vFrvTtvgT4i7uoG1SU5KFMiJxPI2Qd+K/ReusqE5Bv/UXFijc29rX+ZOrTQfah3BER06DyNftHIj77fVJXhdWzd2pPTsrQds/mRoyc9Oh+y4IEh5dgbir6yHiMPTIHhzH2bZnwY0p5ZFJbzBCD2rITyd25xaaisI3uQNEYemQNylNZD85G/WBnlZfOG0eeTBy2AYFLBC/KKrl471/orqnrXtUMV5UGsJjs4vtl2G6nV+Yavq3XyI/5K14r0Xr4ymACjoz4yWPSP0LiQ9PEIJvwGiTy+giihCyM4hELTRi63ovljSgS3WobKqK/NlCEzrAveqny2woB1kBwhc1YONjNDpKPzAJIg6NY+tgeCZbZxb43QpP0e+v0Nl5enrMPhr407xe0dfHd3CmIHmVv1NKlJLrSM4ok27weQHC0+9aY8Qf3gNxaQJYlgMf15nOYKn1HIzkiAnKQIyo57SoeNVSHl8AhLv7oV4OpSMPbcMok7OgfAjUyBs7ximxK+3DaDW35d2BN4UQik2eNJhqCu8XOsIgat7QOBKewhcYWfioO+4qjt7Z3x3/Iay3xRMO7vX9Fvxm0Ppt+OJrghaF5En5rAtrfirEiTc2QvJj49D2ssrLDZ5TlI4rdNEWWGM5UpSWjos33tUbDtkou7osK0z+bqlB2naUvkQyLWe4Lht1sJ6IPmytf4FN9zSsBg8gaw5eELkzYxiUCnMZwnskPyYLQPjw2XHBjIFzgi7xyxTWvANNpdkCCpC6stLkPL8DKQ8/ZspffKjYyaO4yxiDr4zvvub7yj9ruuQQb8Vs3Xit2fFBLK6yEmJgdz0RLbyjZ2kkoLrNhieu5P/FPK+jauGPr1PgbpmZlGz5t01luAI9B76bytB75lxtpVh40Lsx0wn209dEKviyqpK7Zec3Dw4dvUWeE1fIHxk66ajSx9ZuJCfW3qbTAjkd4LgiEbN+5BvWrqXO1RHkncbO4NsPXFOxPjVqqiiLWi5D166DsKf88VPOrnrDs2pAfm2hQdp2LTmzbtrPMERPzfzJp/R4ZM+N9ailXVX0p2SfNPxM2K8ksN1VUxO0rOyYd/5q+A5DcntoaM7bGjeyo382NRLcT1/ZwnegOKHFp7kkza68dRL3Ao7uhOHibPI1pPnVJKrwgSnbeiG6j1jofilvW4UX1zb+ZgOzes3E5iOKa3n7yzBEb+aeZNv6DCqbjlbZ8ySd3AjXemcfO2hk2JwZDQUKq1hqigmMYlJsPXkeclNnCt82lk3uOebk2LftPQgDahuKa3f7zzBET/ShviWNkh5Xm7seKm1M2nqO4pMXrNFPH/3IXAnUVClRgsmsHzw6jUEbN0rtvObSMrGVdP2NUdd+l+T2kHuWkFwxM90rvR1K3e9mVHKAp0YfGYsEracOCsFRURDQaFqz2u7YBTe41dvw8il68XfhaFE+3RYycElqjv/ovPun2vBvLvWEfw3iv+aC2xh5APL8gnOvJLo0Mx+9DQyZ8se8QK15snp6ip7bRRcJb/3IogdHPGevlD4xqFvuTqB7s+oO/+m8+7fTECfVYLrAS6I/IeS/IvWrnqPlmrAyon86DaICNPmC8v2HJEwqF5KeoY6P68FgtlvHgeHwqZjZyW/eSsF8z7+pE45Q3I2faOW+3OqM6g7vzauPUPzWkdwBLPkTQU61Kp4uM56bitn8oNjf+I0aY6AgfUwWuuzkHAW5F6VmiMZWVmAC6iHLt2Q0FXZZ8ZCAYfj5c21y865v6S68h9zz1pnuWslwd+QHPcvv2npxiJfVkTyN0T/ukdv0s5vAsFeH606ejg9CQqFuOQUtkijiukIrp2kpGWwAyInb9wFbK+RS9YK1kMnke/oUBwdnd7W3rgVhjsv/9fSnfzP3KvWkrtWEvwNyX9u4sW83TCBgj6/9fLwCZ2j/+41DD3hhOELV4sLduwXd5+5LF26/xhehkeyWF24Ci83LrsqfIL1nE4tNNY7BkHEDCMHLlyVVh04Lo5csl50mjRbwPb6XCvb59vI/dEbcjetfXPud4Lgb/AjJTm6G37axqVcj7e3WnZqCer36kua9PUn3cZMF/rPWSZOXbdNXLL7sLjp2Bnx4MXruO0m3XoaCI+DQiAoMgYw6wrut8YlpTClxJNKOL9Py8hkHUNmtiYwnhz6RKMiFxQU1HjgefzcvDzIzs1lC13a34vTH3Q2SaYWODE1jUVQiUtKhpiEJAiPjYcXoRFscezKg6dw9OpNafOJs+KinQdF3OLsR+vfYcJMofXAseRnt8Gkrh4vtLeBzbepLtSnOvFTk9q1Wv5OEhzRoLE3+b6ZQL5u5UbqWbiU679eGfyjfZF33L+6+pDvevYl/3UfTJr3G0Wshk4Suo7+U3SePEdEDynfWUvFQQHLxWF0BDBq6Xpx/IqNokgVdLq0Q8S5/hv8RTFn8x5x/vb9tNM4JK7Ye7TGY/neI4yQAVv3ibM27db4XgR2kJNWbxbHLpdEPL8/ZMEqccDcZWKfmUtEdB3tNWGW2Ml/img5eLzwm9dQUp/W85ddvEjdDm+fT7+1oy5jtf9tTq12LXFiqQz+H0uvwJ/8SM12AAAAAElFTkSuQmCC"
                          />
                        </defs>
                        <style></style>
                        <use
                          id="Screenshot 2025-11-27 at 9.50.04 AM"
                          href="#img1"
                          x="23"
                          y="25"
                        />
                      </svg>
                      <div className="haxagon_data">
                        <div className="status" id="status">
                          <svg
                            stroke="#fff"
                            fill="#fff"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="16px"
                            width="16px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M24 5.25v13a.75.75 0 0 1-1.136.643L16.5 15.075v2.175A1.75 1.75 0 0 1 14.75 19h-13A1.75 1.75 0 0 1 0 17.25v-11C0 5.284.784 4.5 1.75 4.5h13c.966 0 1.75.784 1.75 1.75v2.175l6.364-3.818A.75.75 0 0 1 24 5.25Zm-9 1a.25.25 0 0 0-.25-.25h-13a.25.25 0 0 0-.25.25v11c0 .138.112.25.25.25h13a.25.25 0 0 0 .25-.25v-11Zm1.5 7.075 6 3.6V6.575l-6 3.6Z"></path>
                          </svg>
                          <span
                            className="status-dot"
                            id="statusDot"
                            style={{ background: "#2ecc71" }}
                          ></span>
                        </div>
                        <div className="nums" id="nums">
                          2 / 5
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.main_section_divider}>
              <SvgIcon ty="divider" height={12} width={609} />
            </div>
            <div className={styles.main_section_btns}>
              <div className={styles.main_section_btns_fake}>
                <div style={{ height: 18, width: 18 }}>
                  <SvgIcon
                    ty="hexagon"
                    height={18}
                    width={18}
                    color="#8099EE"
                  ></SvgIcon>
                </div>

                <span style={{ marginTop: 4 }}>
                  <strong>Host Live Office Hours</strong> — Be available when
                  your customers need you most
                  {/* Host live office hours effortlessly */}
                </span>
              </div>
              <div className={styles.main_section_btns_fake}>
                <div style={{ height: 18, width: 18 }}>
                  <SvgIcon
                    ty="hexagon"
                    height={18}
                    width={18}
                    color="#F5A448"
                  ></SvgIcon>
                </div>
                <span style={{ marginTop: 4 }}>
                  <strong>Engage in Real-Time Discussions</strong> — Answer
                  questions, showcase products, close sales, provide live
                  support
                </span>
              </div>
              <div className={styles.main_section_btns_fake}>
                <div style={{ height: 18, width: 18 }}>
                  {" "}
                  <SvgIcon
                    ty="hexagon"
                    height={18}
                    width={18}
                    color="#F49346"
                  ></SvgIcon>
                </div>
                <span style={{ marginTop: 4 }}>
                  <strong>Collaborate Instantly</strong> — Shoppers drop in
                  without an invitation for authentic conversations
                </span>
              </div>
              <div className={styles.main_section_btns_fake}>
                <div style={{ height: 18, width: 18 }}>
                  <SvgIcon
                    ty="hexagon"
                    height={18}
                    width={18}
                    color="#C07823"
                  ></SvgIcon>
                </div>

                <span style={{ marginTop: 4 }}>
                  <strong>Build Community</strong> — Create your branded virtual
                  space to be personal and authentic
                </span>
              </div>
            </div>
            <Button
             onClick={() => window.open("https://sohive.com/signup", "_self")}
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
          <div className={styles.main_section_right}>
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
