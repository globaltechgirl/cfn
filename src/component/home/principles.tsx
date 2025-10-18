import { Box, Text } from "@mantine/core";
import type { FC, CSSProperties } from "react";
import { cooperativeData, type Cooperative} from "@/component/cooperative/cooperativeData";

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    background: "var(--green-300)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: 30,
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
  subText: {
    maxWidth: 600,
    color: "var(--black-200)",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.6,
  },
  body: {
    background: "var(--white-100)",
    border: "1px solid var(--white-100)",
    borderRadius: 18,
    padding: 30,
    width: "90%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 15,
    boxSizing: "border-box",
    marginTop: 40,
  },
  box: {
    background: "var(--white-100)",
    border: "1px solid var(--white-300)",
    borderRadius: 12,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    gap: 25,
  },
  tallBox: {
    gridRow: "span 2",
  },
  iconCircle: {
    background: "var(--green-200)",
    borderRadius: 12,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  boxText: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  boxHeader: {
    fontSize: 14,
    fontWeight: 500,
    color: "var(--black-100)",
  },
  boxSub: {
    fontSize: 12,
    fontWeight: 450,
    color: "var(--black-200)",
    lineHeight: 1.5,
  },
};

const Principles: FC = () => {
  return (
    <Box style={styles.container}>
      <Text style={styles.topText}>Principles</Text>
      <Text style={styles.header}>Browse all CFN'S Cooperative Principles</Text>
      <Text style={styles.subText}>
        Core principles guiding CFN’s commitment to advancing the cooperative movement.
      </Text>

      <Box style={styles.body}>
        {cooperativeData.map((cooperative: Cooperative, index: number) => (
          <Box
            key={index}
            style={{
              ...styles.box,
              ...(index === 3 ? styles.tallBox : {}),
            }}
          >
            <Box style={styles.iconCircle}>{cooperative.icon}</Box>
            <Box style={styles.boxText}>
              <Text style={styles.boxHeader}>{cooperative.title}</Text>
              <Text style={styles.boxSub}>{cooperative.text}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Principles;
