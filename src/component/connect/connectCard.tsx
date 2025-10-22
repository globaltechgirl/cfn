import { Box, Text } from "@mantine/core";
import { IconMail, IconBuilding, IconPhone, IconArrowUp, IconQuestionMark } from "@tabler/icons-react";
import type { FC, CSSProperties } from "react";
import { useState } from "react";

const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    gap: 30,
    width: "88%",
    padding: "40px 0",
    height: "auto",
  },
  left: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    gap: 63,
    textAlign: "left",
    height: "100%",
  },
  topBox: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  connectWrapper: {
    background: "var(--white-200)",
    borderRadius: 20,
    padding: 3,
    width: "fit-content",
  },
  connectFlex: {
    background: "var(--white-100)",
    borderRadius: 18,
    padding: "3px 10px 3px 3px",
    display: "flex",
    alignItems: "center",
    flex: 1,
    gap: 8,
  },
  iconBox: {
    background: "var(--white-200)",
    padding: 6,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--black-200",
  },
  topText: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  boxText: {
    fontSize: 10,
    fontWeight: 600,
    color: "var(--black-200)",
  },
  header: {
    fontSize: 20,
    fontWeight: 700,
    color: "var(--black-200)",
  },
  subtext: {
    fontSize: 11,
    fontWeight: 500,
    color: "var(--black-200)",
  },
  infoMain: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  infoWrapper: {
    background: "var(--white-200)",
    borderRadius: 14,
    padding: 3,
  },
  infoBox: {
    background: "var(--white-100)",
    borderRadius: 12,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  infoLeft: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  iconsBox: {
    background: "var(--white-200)",
    padding: 10,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--black-100)"
  },
  infoTextBox: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  smallText: {
    fontSize: 11,
    fontWeight: 550,
    color: "var(--black-100)",
  },
  bigText: {
    fontSize: 10,
    fontWeight: 450,
    color: "var(--black-200)",
  },
  arrowCircle: {
    background: "var(--white-200)",
    borderRadius: "50%",
    padding: 6,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease",
    transform: "rotate(45deg)",
  },
  right: {
    flex: 1,
    background: "var(--white-200)",
    borderRadius: 14,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    gap: 5,
    alignItems: "stretch",
    height: "100%",
  },
  input: {
    width: "100%",
    height: 45,
    background: "var(--white-100)",
    borderRadius: 10,
    padding: 10,
    border: "none",
    outline: "none",
    fontSize: 11,
    fontWeight: 500,
    color: "var(--black-200)",
    flexShrink: 0,
  },
  messageInput: {
    width: "100%",
    height: 220,
    background: "var(--white-100)",
    borderRadius: 10,
    padding: 10,
    border: "none",
    outline: "none",
    resize: "none",
    fontSize: 11,
    fontWeight: 500,
    color: "var(--black-200)",
    minHeight: 100, 
  },
  submitWrapper: {
    width: "100%",
    height: 45,
    background: "var(--white-100)",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  submitBox: {
    width: "99%",
    height: 40,
    background: "var(--white-200)",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 11,
    fontWeight: 600,
    color: "var(--black-200)",
    flexShrink: 0, 
  },
};

const ConnectCard: FC = () => {
  const emails = [
    "coopnigeria@yahoo.com",
    "https://facebook.com/cfn",
    "https://instagram.com/cfn",
    "https://linkedin.com/company/cfn",
    "https://x.com/cfn",
  ];
  const locations = [
    "Plot No. 193, Cadastral Zone B09, Kado District, Abuja.",
    "2nd Floor, LASCOFED Office Complex, Plot 13, Isaacstan Close, Off Wempco Road, Ogba, Lagos.",
  ];
  const phones = ["0802 311 7726", "0803 838 4706"];

  const [emailIndex, setEmailIndex] = useState(0);
  const [locationIndex, setLocationIndex] = useState(0);
  const [phoneIndex, setPhoneIndex] = useState(0);

  const handleCycle = (setter: any, max: number) => {
    setter((prev: number) => (prev + 1) % max);
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.left}>
        <Box style={styles.topBox}>
          <Box style={styles.connectWrapper}>
            <Box style={styles.connectFlex}>
            <Box style={styles.iconBox}>
              <IconQuestionMark size={14} />
            </Box>
            <Text style={styles.boxText}>Connect</Text>
          </Box>
          </Box>
          <Box style={styles.topText}>
            <Text style={styles.header}>Get in touch</Text>
            <Text style={styles.subtext}>
              Connect with CFN using any of the suggestions below.
            </Text>
          </Box>
        </Box>

        <Box style={styles.infoMain}>
        <Box style={styles.infoWrapper}>
          <Box style={styles.infoBox}>
          <Box style={styles.infoLeft}>
            <Box style={styles.iconsBox}>
              <IconMail size={18} color="var(--black-200)" />
            </Box>
            <Box style={styles.infoTextBox}>
              <Text style={styles.smallText}>Reach CFN</Text>
              <Text
                style={styles.bigText}
                component="a"
                href={emails[emailIndex].includes("@") ? `mailto:${emails[emailIndex]}` : emails[emailIndex]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {emails[emailIndex]}
              </Text>
            </Box>
          </Box>
          <Box
            style={styles.arrowCircle}
            onClick={() => handleCycle(setEmailIndex, emails.length)}
          >
            <IconArrowUp size={14} color="var(--black-200)" />
          </Box>
        </Box>
        </Box>

        <Box style={styles.infoWrapper}>
          <Box style={styles.infoBox}>
          <Box style={styles.infoLeft}>
            <Box style={styles.iconsBox}>
              <IconBuilding size={18} color="var(--black-200)" />
            </Box>
            <Box style={styles.infoTextBox}>
              <Text style={styles.smallText}>CFN Location</Text>
              <Text style={styles.bigText}>{locations[locationIndex]}</Text>
            </Box>
          </Box>
          <Box
            style={styles.arrowCircle}
            onClick={() => handleCycle(setLocationIndex, locations.length)}
          >
            <IconArrowUp size={14} color="var(--black-200)" />
          </Box>
        </Box>
        </Box>

        <Box style={styles.infoWrapper}>
          <Box style={styles.infoBox}>
          <Box style={styles.infoLeft}>
            <Box style={styles.iconsBox}>
              <IconPhone size={18} color="var(--black-200)" />
            </Box>
            <Box style={styles.infoTextBox}>
              <Text style={styles.smallText}>Call CFN</Text>
              <Text style={styles.bigText}>{phones[phoneIndex]}</Text>
            </Box>
          </Box>
          <Box
            style={styles.arrowCircle}
            onClick={() => handleCycle(setPhoneIndex, phones.length)}
          >
            <IconArrowUp size={14} color="var(--black-200)" />
          </Box>
        </Box>
        </Box>
        </Box>
      </Box>

      <Box style={styles.right}>
        <input placeholder="Name" style={styles.input} />
        <input placeholder="Email" style={styles.input} />
        <textarea placeholder="Message" style={styles.messageInput} />
        <Box style={styles.submitWrapper}>
          <Box style={styles.submitBox}>Submit</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ConnectCard;
