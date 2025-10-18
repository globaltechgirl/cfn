import { type FC, type CSSProperties, useRef } from "react";
import { Box, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { cooperativeData, type Cooperative } from "./cooperativeData";

const groupOffsets = ["8%", "28.5%", "48.5%"] as const;

const styles: Record<string, CSSProperties> = {
  container: {
    width: "88%",
    height: "125vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "60px 0",
    position: "relative",
    overflow: "hidden",
  },
  headingsRow: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "relative",
    zIndex: 2,
  },
  headingItem: {
    flex: 1,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  headingText: {
    fontSize: 13,
    fontWeight: 550,
    color: "var(--black-200)",
    marginBottom: 6,
    background: "var(--white-100)",
    opacity: 0.4,
    zIndex: 3,
  },
  dashedLine: {
    marginTop: 30,
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: 0.5,
    height: "125vh",
    backgroundImage:
      "repeating-linear-gradient(to bottom, var(--black-200) 0 8px, transparent 8px 16px)",
    backgroundRepeat: "repeat-y",
    backgroundSize: "2px 16px",
    opacity: 0.4,
    zIndex: 1,
  },
  scrollArea: {
    display: "flex",
    overflow: "hidden",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    width: "100%",
    paddingBottom: 60,
    minHeight: "125vh",
    position: "relative",
    zIndex: 2,
    marginTop: -40,
  },
  group: {
    flex: "0 0 100%",
    scrollSnapAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 30,
    height: "100%",
    position: "relative",
  },
  groupWrapperBase: {
    width: "100%",
    maxWidth: 480,
    background: "var(--white-300)",
    borderRadius: 14,
    padding: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    transition: "transform 0.5s ease, opacity 0.4s ease",
  },
  groupBox: {
    width: "100%",
    background: "var(--white-100)",
    border: "1px solid var(--white-300)",
    borderRadius: 12,
    padding: 5,
  },
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    transition: "transform 0.5s ease, opacity 0.4s ease",
  },
  cardBox: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  cardIcon: {
    width: 35,
    height: 35,
    borderRadius: 8,
    background: "var(--white-300)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 500,
    color: "var(--black-100)",
  },
  textBox: {
    background: "var(--white-300)",
    borderRadius: 10,
    padding: 10,
    textAlign: "justify",
  },
  cardText: {
    fontSize: 11,
    fontWeight: 450,
    color: "var(--black-200)",
    lineHeight: 1.6,
  },
  arrowBox: {
    background: "var(--white-300)",
    borderRadius: "50%",
    padding: 2,
    transform: "rotate(-45deg)",
    zIndex: 5,
    position: "absolute",
    bottom: 30,
    cursor: "pointer",
    transition: "background 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowButton: {
    background: "var(--white-100)",
    border: "1px solid var(--white-300)",
    borderRadius: "50%",
    padding: 4,
  },
};

const CooperativeCard: FC<{ item: Cooperative }> = ({ item }) => (
  <Box style={styles.groupBox}>
    <Box style={styles.card}>
      <Box style={styles.cardBox}>
        <Box style={styles.cardIcon}>{item.icon}</Box>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </Box>
      <Box style={styles.textBox}>
        <Text style={styles.cardText}>{item.text}</Text>
      </Box>
    </Box>
  </Box>
);

const ComplicatedPrinciples: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, clientWidth, scrollWidth } = container;
    const next = scrollLeft + clientWidth;

    container.scrollTo({
      left: next >= scrollWidth ? 0 : next,
      behavior: "smooth",
    });
  };

  const groupedData = Array.from({ length: Math.ceil(cooperativeData.length / 3) }, (_, i) =>
    cooperativeData.slice(i * 3, i * 3 + 3)
  );

  const headings = ["Cooperation", "Participation", "Democracy", "Independence", "Community"];

  return (
    <Box style={styles.container}>
      <Box style={styles.headingsRow}>
        {headings.map((title) => (
          <Box key={title} style={styles.headingItem}>
            <Text style={styles.headingText}>{title}</Text>
            <Box style={styles.dashedLine} />
          </Box>
        ))}
      </Box>

      <Box ref={scrollRef} style={styles.scrollArea}>
        {groupedData.map((group, i) => (
          <Box key={i} style={styles.group}>
            {group.map((item, j) => (
              <Box
                key={item.title}
                style={{
                  ...styles.groupWrapperBase,
                  marginLeft: groupOffsets[j],
                }}
              >
                <CooperativeCard item={item} />
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      <Box style={styles.arrowBox} onClick={handleScroll}>
        <Box style={styles.arrowButton}>
          <IconArrowRight size={14} color="var(--black-200)" />
        </Box>
      </Box>
    </Box>
  );
};

export default ComplicatedPrinciples;
