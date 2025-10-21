import { Box, Text } from "@mantine/core";
import { useEffect, useState, type FC, type CSSProperties } from "react";

import DeltaLogo from "@/assets/delta.webp";
import LagosLogo from "@/assets/lagos.webp";
import AnambraLogo from "@/assets/anambra.png";
import NigerLogo from "@/assets/niger.webp";
import PlateauLogo from "@/assets/plateau.webp";
import KanoLogo from "@/assets/kano.webp";
import OsunLogo from "@/assets/osun.jpg";
import Principles from "@/component/home/principles";
import Media from "./media";

interface MapPinProps {
  image: string;
  left: string;
  top: string;
  delay?: number;
}

const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 25,
    marginTop: 100,
  },
  box: {
    border: "1px solid var(--white-100)",
    borderRadius: 20,
    padding: "4px 0",
    maxWidth: 230,
    width: "100%",
    overflow: "hidden",
    background: "var(--green-300)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    height: 25,
  },
  sliderTextWrapper: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    height: "100%",
  },
  sliderTextList: {
    display: "flex",
  },
  sliderItem: {
    minWidth: "100%",
    textAlign: "center",
    fontSize: 9.5,
    fontWeight: 600,
    color: "var(--black-100)",
    whiteSpace: "nowrap",
  },
  layeredTextContainer: {
    lineHeight: 1.1,
    textAlign: "center",
    maxWidth: "70%",
  },
  centerText: {
    fontSize: 60,
    fontWeight: 700,
    color: "var(--black-100)",
  },
  spanText: {
    fontSize: 60,
    fontWeight: 700,
    color: "var(--green-100)",
    animation: "wave 3s ease-in-out infinite",
  },
  mapImageContainer: {
    marginTop: 30,
    position: "relative",
    width: 1012,
    height: 578,
  },
  mapImageStyle: {
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    objectPosition: "center center",
    objectFit: "contain",
  },
};

const addGlobalAnimations = (): void => {
  if (document.getElementById("global-animations")) return;

  const style = document.createElement("style");
  style.id = "global-animations";
  style.innerHTML = `
    @keyframes wave {
      0%, 100% { transform: translateY(0); }
      25% { transform: translateY(-3px); }
      50% { transform: translateY(3px); }
      75% { transform: translateY(-1px); }
    }

    @keyframes floatPin {
      0%, 100% { transform: translate(-50%, -100%) translateY(0); }
      50% { transform: translate(-50%, -100%) translateY(-8px); }
    }
  `;
  document.head.appendChild(style);
};

const MapPin: FC<MapPinProps> = ({ image, left, top, delay = 0 }) => (
  <Box
    style={{
      position: "absolute",
      left,
      top,
      transform: "translate(-50%, -100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      animation: `floatPin 3s ease-in-out ${delay}s infinite`,
    }}
  >
    <Box
      style={{
        borderRadius: "50%",
        boxShadow:
          "rgba(0, 0, 0, 0.18) 0px 0.6px 0.6px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.28px 2.28px -2.5px, rgba(0, 0, 0, 0.06) 0px 10px 10px -3.75px, rgba(0, 0, 0, 0.07) 0px 2px 8px 0px",
        background: "var(--white-300)",
        border: "1px solid var(--white-100)",
        width: 35,
        height: 35,
        padding: 3,
      }}
    >
      <Box
        style={{
          borderRadius: "50%",
          border: "1.5px solid var(--white-100)",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          padding: 0.5,
        }}
      >
        <img
          src={image}
          alt="pin"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
          }}
        />
      </Box>
    </Box>
  </Box>
);

const Main: FC = () => {
  const texts = [
    "Building cooperative strength nationwide",
    "Empowering local economies through unity",
    "Driving sustainable cooperative growth",
    "Creating opportunities for every member",
  ];

  const slides = [...texts, ...texts, ...texts];
  const [index, setIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    addGlobalAnimations();

    const interval = setInterval(() => setIndex((prev) => prev + 1), 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index >= texts.length * 2) {
      setTransitionEnabled(false);
      setIndex(0);
    } else {
      setTransitionEnabled(true);
    }
  }, [index, texts.length]);

  return (
    <Box style={styles.container}>
      <Box style={styles.box}>
        <Box style={styles.sliderTextWrapper}>
          <Box
            style={{
              ...styles.sliderTextList,
              transition: transitionEnabled
                ? "transform 0.5s ease-in-out"
                : "none",
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {slides.map((text, i) => (
              <Text key={i} style={styles.sliderItem}>
                {text}
              </Text>
            ))}
          </Box>
        </Box>
      </Box>

      <Box style={styles.layeredTextContainer}>
        <Text style={styles.centerText}>
          Simplifying equitable{" "}
          <span style={styles.spanText}>
            access to Cooperative Services and Opportunities
          </span>{" "}
          in Nigeria.
        </Text>
      </Box>

      <Box style={styles.mapImageContainer}>
        <img
          decoding="async"
          src="https://framerusercontent.com/images/T9pETFKL6i2BZsIuOvF8uWuhQ.svg"
          alt="Nigeria Map"
          style={styles.mapImageStyle}
        />

        <MapPin left="79.2%" top="10%" image={DeltaLogo} />
        <MapPin left="30.8%" top="31%" image={LagosLogo} />
        <MapPin left="43%" top="56%" image={KanoLogo} />
        <MapPin left="31.8%" top="77%" image={OsunLogo} />
        <MapPin left="59.8%" top="34%" image={AnambraLogo} />
        <MapPin left="77.5%" top="61%" image={PlateauLogo} />
        <MapPin left="53.2%" top="82%" image={NigerLogo} />
      </Box>

      <Principles />

      <Media />
    </Box>
  );
};

export default Main;
