import { Box, Text } from "@mantine/core";
import { type FC, type CSSProperties, useState } from "react";
import { IconCircleFilled } from "@tabler/icons-react";

interface ContentItem {
  text: string;
  color: string;
  border: string;
  marginBottom?: number;
}

type Tab = "mission" | "vision";

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
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
    gap: 20,
    marginTop: 20,
  },
  leftBox: {
    background: "var(--white-100)",
    border: "1px solid var(--white-300)",
    borderRadius: 12,
    padding: 3,
    flex: 1,
    display: "flex",
    height: 200,
  },
  leftWrapper: {
    background: "var(--white-300)",
    border: "1px solid var(--white-100)",
    borderRadius: 10,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 20,
    gap: 10,
  },
  tab: {
    cursor: "pointer",
    fontSize: 20,
    fontWeight: 700,
    color: "var(--black-200)",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  activeTab: {
    color: "var(--black-100)",
  },
  bottomDivider: {
    width: "100%",
    height: "0.5px",
    backgroundColor: "var(--black-200)",
    border: "none",
    opacity: 0.5,
  },
  rightBox: {
    background: "var(--white-300)",
    border: "1px solid var(--white-100)",
    borderRadius: 12,
    padding: 3,
    flex: 2,
    height: 200,
    display: "flex",
    flexDirection: "column",
  },
  rightWrapper: {
    background: "var(--white-100)",
    border: "1px solid var(--white-300)",
    borderRadius: 10,
    padding: 20,
    flex: 1,
    height: 200,
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: 15,
  },
  itemText: {
    fontSize: 14,
    fontWeight: 450,
    color: "var(--black-200)",
    lineHeight: 1.6,
    textAlign: "justify",
  },
};

const missionContent: ContentItem[] = [
  {
    text: "To represent the cooperative sector in dialogue with the Government for favorable legislation.",
    color: "var(--white-300)",
    border: "var(--black-200)",
    marginBottom: 20,
  },
  {
    text: "To organise programs that foster unity, knowledge acquisition and welfare of members.",
    color: "var(--white-300)",
    border: "var(--black-200)",
  },
  {
    text: "To attract development partners to the Cooperative Movement in Nigeria.",
    color: "var(--white-300)",
    border: "var(--black-200)",
  },
];

const visionContent: ContentItem[] = [
  {
    text: "To be a foremost non-governmental organization for economic empowerment and prosperity of Nigeria.",
    color: "var(--white-300)",
    border: "var(--black-200)",
    marginBottom: 20,
  },
];

const Values: FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("mission");
  const currentContent = activeTab === "mission" ? missionContent : visionContent;

  return (
    <Box style={styles.container}>
      <Text style={styles.topText}>Values</Text>
      <Text style={styles.header}>Mission and Vision</Text>

      <Box style={styles.body}>
        <Box style={styles.leftBox}>
          <Box style={styles.leftWrapper}>
            <hr style={styles.bottomDivider} />
            <Text
              style={{ ...styles.tab, ...(activeTab === "mission" ? styles.activeTab : {}) }}
              onClick={() => setActiveTab("mission")}
            >
              Our Mission
            </Text>
            <hr style={styles.bottomDivider} />
            <Text
              style={{ ...styles.tab, ...(activeTab === "vision" ? styles.activeTab : {}) }}
              onClick={() => setActiveTab("vision")}
            >
              Our Vision
            </Text>
          </Box>
        </Box>

        <Box style={styles.rightBox}>
          <Box style={styles.rightWrapper}>
            {currentContent.map((item, index) => (
              <Box key={index} style={{ ...styles.item, marginBottom: item.marginBottom || 15 }}>
                <Box
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: item.color,
                    border: `2px solid ${item.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: item.marginBottom,
                  }}
                >
                  <IconCircleFilled size={8} color={item.color} />
                </Box>
                <Text style={styles.itemText}>{item.text}</Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Values;
