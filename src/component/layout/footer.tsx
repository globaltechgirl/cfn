import { Box, Text } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import type { FC, CSSProperties } from "react";
import { Link } from "react-router-dom"; 

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    background: "var(--black-300)",
    borderTop: "1px solid var(--white-200)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 0 30px",
    marginTop: 20,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 80px",
    gap: 20,
  },
  topSection: {
    display: "grid",
    gridTemplateColumns: "1.8fr 1fr 1fr",
    alignItems: "flex-start",
    gap: 0,
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  header: {
    fontSize: 14,
    fontWeight: 600,
    color: "var(--green-100)",
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    fontWeight: 450,
    color: "var(--white-100)",
    lineHeight: 1.6,
    width: "80%",
  },
  socialBox: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    marginTop: 10,
  },
  socialIconBox: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  linkText: {
    fontSize: 12,
    fontWeight: 450,
    color: "var(--white-100)",
    cursor: "pointer",
    transition: "0.2s",
  },
  contactText: {
    fontSize: 12,
    fontWeight: 450,
    color: "var(--white-100)",
  },
  bottomDivider: {
    width: "100%",
    height: "0.5px",
    backgroundColor: "var(--black-200)",
    border: "none",
    opacity: 0.5,
    marginTop: 20,
  },
  bottomText: {
    width: "100%",
    color: "var(--white-100)",
    fontSize: 10,
    fontWeight: 400,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 10,
    textAlign: "left",
  },
};

const Footer: FC = () => {
  return (
    <Box style={styles.container}>
      <Box style={styles.wrapper}>
        <Box style={styles.topSection}>
          <Box style={styles.column}>
            <Text style={styles.header}>About CFN</Text>
            <Text style={styles.text}>
              Cooperative Federation of Nigeria (CFN) is the Umbrella Body for all cooperatives in
              Nigeria. It was formed in 1944 as “Nigeria Co-operative Federation Ltd.”
            </Text>

            <Box style={styles.socialBox}>
              {[
                IconBrandFacebook,
                IconBrandX,
                IconBrandInstagram,
                IconBrandLinkedin,
              ].map((Icon, index) => (
                <Box key={index} style={styles.socialIconBox}>
                  <Icon size={20} color={"var(--white-100)"} />
                </Box>
              ))}
            </Box>
          </Box>

          <Box style={styles.column}>
            <Text style={styles.header}>Quick Links</Text>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Text style={styles.linkText}>About CFN</Text>
              </Link>

              <Link to="/cooperative" style={{ textDecoration: "none" }}>
                <Text style={styles.linkText}>Cooperative</Text>
              </Link>

              <Link to="/newsroom" style={{ textDecoration: "none" }}>
                <Text style={styles.linkText}>Newsroom</Text>
              </Link>

              <Link to="/events" style={{ textDecoration: "none" }}>
                <Text style={styles.linkText}>Events</Text>
              </Link>
          </Box>

          <Box style={styles.column}>
            <Text style={styles.header}>Contact</Text>
            <Text style={styles.contactText}>0802 311 7726, 0803 838 4706</Text>
            <Text style={styles.contactText}>coopnigeria@yahoo.com</Text>
          </Box>
        </Box>

        <hr style={styles.bottomDivider} />
        <Text style={styles.bottomText}>© 2019 Cooperative Federation of Nigeria</Text>
      </Box>
    </Box>
  );
};

export default Footer;
