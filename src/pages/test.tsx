import { type FC, type CSSProperties, useEffect, useMemo, type JSX } from "react";
import { Box, Text } from "@mantine/core";
import CFNLogo from "@/assets/cfn.svg";

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 20,
    padding: "60px 0",
  },
  topText: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: "uppercase",
    color: "var(--green-100)",
    letterSpacing: "1px",
  },
  header: {
    fontSize: 30,
    fontWeight: 600,
    color: "var(--black-100)",
  },
  body: {
    width: "88%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 20,
    marginTop: 40,
    alignItems: "stretch",
  },
  box: {
    background: "var(--white-300)",
    borderRadius: 15,
    padding: 3,
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
  },
  wrapper: {
    background: "var(--white-100)",
    border: "1px solid var(--white-300)",
    borderRadius: 12,
    padding: 5,
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    width: "100%",
  },
  infoWrapper: {
    padding: "10px 80px 10px 50px",
    background: "var(--white-300)",
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    gap: 20,
    width: "100%",
  },
  infoBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 15,
    width: "60%",
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: "var(--black-100)",
  },
  text: {
    fontSize: 13,
    fontWeight: 500,
    color: "var(--black-200)",
    lineHeight: 1.6,
    textAlign: "justify",
  },
  iconsSlider: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 30,
    width: "50%",
    position: "relative",
    marginRight: "auto",
    overflow: "hidden",
    height: 220,
  },
  iconsColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  iconWrapper: {
    background: "var(--white-100)",
    borderRadius: 12,
    padding: 3,
    width: "fit-content",
  },
  iconBox: {
    background: "var(--white-300)",
    borderRadius: 10,
    padding: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollUp: { animation: "scrollUp 100s linear infinite" },
  scrollDown: { animation: "scrollDown 100s linear infinite" },
};

const useScrollKeyframes = (): void => {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("scroll-keyframes")) return; 

    const style = document.createElement("style");
    style.id = "scroll-keyframes";
    style.innerHTML = `
      @keyframes scrollUp {
        0% { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }
      @keyframes scrollDown {
        0% { transform: translateY(-50%); }
        100% { transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }, []);
};

const useContinuousIcons = (repeat: number = 50) => {
  const baseIcons = useMemo(
    () => [
      <img src={CFNLogo} alt="CFN Logo" key="1" style={{ width: 50, height: 50 }} />,
      <img src={CFNLogo} alt="CFN Logo" key="2" style={{ width: 50, height: 50 }} />,
      <img src={CFNLogo} alt="CFN Logo" key="3" style={{ width: 50, height: 50 }} />,
      <img src={CFNLogo} alt="CFN Logo" key="4" style={{ width: 50, height: 50 }} />,
      <img src={CFNLogo} alt="CFN Logo" key="5" style={{ width: 50, height: 50 }} />,
      <img src={CFNLogo} alt="CFN Logo" key="6" style={{ width: 50, height: 50 }} />,
    ],
    []
  );

  return useMemo(
    () =>
      Array.from(
        { length: repeat * baseIcons.length },
        (_, i) => baseIcons[i % baseIcons.length]
      ),
    [baseIcons, repeat]
  );
};

interface IconsColumnProps {
  direction: "up" | "down";
  icons: JSX.Element[];
}

const IconsColumn: FC<IconsColumnProps> = ({ direction, icons }) => (
  <Box
    style={{
      ...styles.iconsColumn,
      ...(direction === "up" ? styles.scrollUp : styles.scrollDown),
    }}
  >
    {icons.map((icon, i) => (
      <Box key={`${direction}-${i}`} style={styles.iconWrapper}>
        <Box style={styles.iconBox}>{icon}</Box>
      </Box>
    ))}
  </Box>
);

const CooperativeValues: FC = () => {
  useScrollKeyframes();
  const continuousIcons = useContinuousIcons(20);

  return (
    <Box style={styles.container}>
      <Text style={styles.topText}>Values</Text>
      <Text style={styles.header}>Cooperative Values</Text>

      <Box style={styles.body}>
        <Box style={styles.box}>
          <Box style={styles.wrapper}>
            <Box style={styles.infoWrapper}>
              <Box style={styles.infoBox}>
                <Text style={styles.title}>Cooperative Values</Text>
                <Text style={styles.text}>
                  Cooperatives are based on the values of self-help,
                  self-responsibility, democracy, equality, equity, and
                  solidarity. In the tradition of their founders, cooperative
                  members believe in the ethical values of honesty, openness,
                  social responsibility, and caring for others.
                </Text>
              </Box>

              <Box style={styles.iconsSlider}>
                <IconsColumn direction="up" icons={continuousIcons} />
                <IconsColumn direction="down" icons={continuousIcons} />
                <IconsColumn direction="up" icons={continuousIcons} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CooperativeValues;
