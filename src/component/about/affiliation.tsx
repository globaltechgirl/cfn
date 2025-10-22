import { Box, Text } from "@mantine/core";
import type { FC, CSSProperties } from "react";
import AffiliationImg from "@/assets/affiliation.webp";

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 25,
    padding: "40px 0",
  },
  quotes: {
    fontSize: 30,
    fontWeight: 900,
    letterSpacing: -5,
    color: "var(--black-200)",
  },
  summary: {
    width: "60%",
    fontSize: 25,
    fontWeight: 500,
    color: "var(--black-100)",
    lineHeight: 1.6,
    textAlign: "center",
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    marginTop: 25,
  },
  imageBox: {
    background: "var(--white-200)",
    borderRadius: 18,
    padding: 3,
    width: 200,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top",
    borderRadius: 16,
  },
  titleBox: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
    color: "var(--black-100)",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 600,
    color: "var(--black-200)",
  },
};

const Affiliation: FC = () => (
  <Box style={styles.container}>
    <Text style={styles.quotes}>//</Text>

    <Text style={styles.summary}>
      Cooperative Federation of Nigeria (CFN) is a member of International Cooperative Alliance (ICA), the global Cooperative Apex, and Board Member of the ICA Africa, the Regional Cooperative Apex.
    </Text>

    <Box style={styles.bottom}>
      <Box style={styles.imageBox}>
        <img src={AffiliationImg} alt="Cooperative Affiliation" style={styles.image} />
      </Box>

      <Box style={styles.titleBox}>
        <Text style={styles.title}>Affiliation</Text>
        <Text style={styles.subtitle}>Cooperative Federation of Nigeria (CFN)</Text>
      </Box>
    </Box>
  </Box>
);

export default Affiliation;
