import { Box, Text } from "@mantine/core";
import type { FC, CSSProperties } from "react";
import { cooperativeData, type Cooperative} from "@/component/cooperative/cooperativeData";

const truncateText = (text: string, limit = 120): string =>
  text.length > limit ? `${text.slice(0, limit).trim()}…` : text;

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 20,
    padding: "100px 0",
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
  subText: {
    maxWidth: 600,
    color: "var(--black-200)",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.6,
  },
  body: {
    width: "90%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 10,
    boxSizing: "border-box",
    marginTop: 40,
  },
  box: {
    background: "var(--white-300)",
    borderRadius: 14,
    padding: 3,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "100%", 
  },
  boxWrapper: {
    width: "100%",
    background: "var(--white-100)",
    borderRadius: 12,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    flex: 1, 
  },
  boxMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    textAlign: "left",
    gap: 8,
    flex: 1, 
  },
  tallBox: {
    gridRow: "span 2",
  },
  iconCircle: {
    width: 35,
    height: 35,
    borderRadius: 8,
    background: "var(--white-300)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    background: "var(--white-300)",
    borderRadius: 10,
    padding: 10,
    textAlign: "justify",
    width: "100%",
    flex: 1,
  },
  boxHeader: {
    fontSize: 12,
    fontWeight: 500,
    color: "var(--black-100)",
  },
  boxSub: {
    fontSize: 11,
    fontWeight: 450,
    color: "var(--black-200)",
    lineHeight: 1.6,
  },
};

const Principles: FC = () => {
  const reorderedData = cooperativeData.map((item) => {
    if (item.id === 4) return cooperativeData.find((i) => i.id === 7)!;
    if (item.id === 7) return cooperativeData.find((i) => i.id === 4)!;
    return item;
  });

  return (
    <Box style={styles.container}>
      <Text style={styles.topText}>Principles</Text>
      <Text style={styles.header}>Browse all CFN'S Cooperative Principles</Text>
      <Text style={styles.subText}>
        Core principles guiding CFN’s commitment to advancing the cooperative movement.
      </Text>

      <Box style={styles.body}>
        {reorderedData.map((cooperative: Cooperative) => (
          <Box
            key={cooperative.id}
            style={{
              ...styles.box,
              ...(cooperative.id === 7 ? styles.tallBox : {}),
            }}
          >
            <Box style={styles.boxWrapper}>
              <Box style={styles.boxMain}>
                <Box style={styles.iconCircle}>{cooperative.icon}</Box>
                <Box style={styles.boxText}>
                  <Text style={styles.boxHeader}>{cooperative.title}</Text>
                  <Text style={styles.boxSub}>
                    {cooperative.id === 7
                      ? truncateText(cooperative.text, 505)
                      : truncateText(cooperative.text, 120)}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Principles;
