import { Box, Text } from "@mantine/core";
import type { FC, CSSProperties } from "react";
import StructureImg from "@/assets/structure.svg";

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    padding: "60px 0",
    background: "var(--green-300)",
    marginTop: 60,
  },
  topText: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: "uppercase",
    color: "var(--green-100)",
    letterSpacing: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: 600,
    color: "var(--black-100)",
  },
  body: {
    width: "80%",
    display: "flex",
    background: "var(--white-300)",
    border: "1px solid var(--white-100)",
    borderRadius: 18,
    padding: 3,
    marginTop: 20,
  },
  wrapper: {
    background: "var(--white-100)",
    border: "1px solid var(--white-300)",
    borderRadius: 16,
    padding: 40,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

const Structure: FC = () => (
  <Box style={styles.container}>
    <Text style={styles.topText}>Structure</Text>
    <Text style={styles.header}>Structure of Cooperative Movement in Nigeria</Text>

    <Box style={styles.body}>
      <Box style={styles.wrapper}>
        <img src={StructureImg} alt="Cooperative Structure" style={styles.image} />
      </Box>
    </Box>
  </Box>
);

export default Structure;
