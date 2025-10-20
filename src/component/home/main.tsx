import { useEffect, useState, type FC, type CSSProperties } from "react";
import { Box, Text } from "@mantine/core";
import { Plus } from "tabler-icons-react";

import DeltaLogo from "@/assets/delta.webp";
import LagosLogo from "@/assets/lagos.webp";
import AnambraLogo from "@/assets/anambra.png";
import NigerLogo from "@/assets/niger.webp";
import PlateauLogo from "@/assets/plateau.webp";
import KanoLogo from "@/assets/kano.webp";
import OsunLogo from "@/assets/osun.jpg";
import Layout from "@/assets/layout.svg";

import Principles from "./principles";
import Media from "./media";

const LOGOS = [DeltaLogo, LagosLogo, AnambraLogo, NigerLogo, PlateauLogo, KanoLogo, OsunLogo];
const REPEATED_LOGOS = Array.from({ length: 50 }).flatMap(() => LOGOS);

const SLIDER_TEXTS = [
  "Building cooperative strength nationwide",
  "Empowering local economies through unity",
  "Driving sustainable cooperative growth",
  "Creating opportunities for every member",
];

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 100,
    paddingBottom: 60,
    marginBottom: "-20px",
    position: "relative",
    width: "100%",
    overflow: "hidden",
  },
  box: {
    border: "1px solid var(--white-100)",
    borderRadius: 20,
    padding: "4px 0",
    maxWidth: 230,
    width: "100%",
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
    margin: "25px 0 80px",
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
  hr: {
    width: "100%",
    height: 0.5,
    background: "var(--white-400)",
    border: "none",
    opacity: 0.5,
    position: "relative",
  },
  plusIcon: {
    position: "absolute",
    color: "var(--white-400)",
    background: "var(--white-100)",
    zIndex: 2,
    width: 16,
    opacity: 0.5,
  },
  mapImageContainer: {
    position: "relative",
    width: "94%",
    margin: "0 auto",
    padding: 15,
  },
  mapImageWrapper: {
    borderRadius: 15,
    background: "var(--white-300)",
    padding: 3,
  },
  mapImageMain: {
    borderRadius: 12,
    background: "var(--white-100)",
    padding: 3,
  },
  mapImage: {
    width: "100%",
    height: 400,
    objectPosition: "50% 30%",
    objectFit: "cover",
    borderRadius: 10,
    display: "block",
    background: "var(--white-300)",
  },
  logoSliderContainer: {
    padding: 25,
    width: "88%",
    overflow: "hidden",
    margin: "0 auto",
    maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
    position: "relative",
  },
  logoSlider: {
    display: "flex",
    gap: 50,
    width: "max-content",
    animation: "scroll 300s linear infinite",
  },
  logoWrapper: {
    borderRadius: "50%",
    width: 60,
    height: 60,
    padding: 3,
    background: "var(--white-300)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    padding: 5,
    borderRadius: "50%",
    background: "var(--white-100)",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
  verticalLine: {
    position: "absolute",
    width: 0.5,
    background: "var(--white-400)",
    opacity: 0.5,
    zIndex: 0,
  },
} satisfies Record<string, CSSProperties>;

const addGlobalAnimations = (): void => {
  if (document.getElementById("global-animations")) return;

  const style = document.createElement("style");
  style.id = "global-animations";
  style.innerHTML = `
    @keyframes wave {
      0%,100% { transform: translateY(0); }
      25% { transform: translateY(-3px); }
      50% { transform: translateY(3px); }
      75% { transform: translateY(-1px); }
    }
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;
  document.head.appendChild(style);
};

const Main: FC = () => {
  const slides = [...SLIDER_TEXTS, ...SLIDER_TEXTS, ...SLIDER_TEXTS];
  const [index, setIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    addGlobalAnimations();
    const interval = setInterval(() => setIndex((prev) => prev + 1), 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index >= SLIDER_TEXTS.length * 2) {
      setTransitionEnabled(false);
      setIndex(0);
    } else {
      setTransitionEnabled(true);
    }
  }, [index]);

  return (
    <Box style={styles.container}>
      <Box style={{ ...styles.verticalLine, left: "3%", top: 0, bottom: 0 }} />
      <Box style={{ ...styles.verticalLine, right: "3%", top: 0, bottom: 0 }} />
      <Plus style={{ ...styles.plusIcon, left: "2.4%", top: -6 }} />
      <Plus style={{ ...styles.plusIcon, right: "2.4%", top: -6 }} />

      <Box style={styles.box}>
        <Box style={styles.sliderTextWrapper}>
          <Box
            style={{
              ...styles.sliderTextList,
              transition: transitionEnabled ? "transform 0.5s ease-in-out" : "none",
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
          <span style={styles.spanText}>access to Cooperative Services and Opportunities</span> in Nigeria.
        </Text>
      </Box>

      <Box style={styles.hr} />

      <Box style={{ position: "relative", width: "100%" }}>
        <Box style={{ ...styles.verticalLine, left: "3%", top: 0, bottom: 0 }} />
        <Box style={{ ...styles.verticalLine, right: "3%", top: 0, bottom: 0 }} />
        <Plus style={{ ...styles.plusIcon, left: "2.4%", top: -12 }} />
        <Plus style={{ ...styles.plusIcon, right: "2.4%", top: -12 }} />

        <Box style={styles.logoSliderContainer}>
          <Box style={styles.logoSlider}>
            {REPEATED_LOGOS.map((logo, i) => (
              <Box key={i} style={styles.logoWrapper}>
                <Box style={styles.logoBox}>
                  <img src={logo} alt={`logo-${i}`} style={styles.logoImage} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box style={styles.hr} />

        <Plus style={{ ...styles.plusIcon, left: "2.4%", top: "98" }} />
        <Plus style={{ ...styles.plusIcon, right: "2.4%", top: "98" }} />

        <Box style={styles.mapImageContainer}>
          <Box style={styles.mapImageWrapper}>
            <Box style={styles.mapImageMain}>
              <img src={Layout} alt="Map Layout" style={styles.mapImage} />
            </Box>
          </Box>
          <Box style={{ ...styles.hr, position: "absolute", bottom: 0 }} />
        </Box>

        <Plus style={{ ...styles.plusIcon, left: "2.4%", bottom: -12 }} />
        <Plus style={{ ...styles.plusIcon, right: "2.4%", bottom: -12 }} />
      </Box>

      <Principles />

      <Media />
    </Box>
  );
};

export default Main;
