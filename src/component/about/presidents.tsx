import { Box, Text, Image } from "@mantine/core";
import { useState, type FC, type CSSProperties } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconUser } from "@tabler/icons-react";

import { presidentsData } from "./presidentsData";
import { executivesData } from "./executivesData";

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: -50,
    gap: 20,
    padding: "60px 0 50px",
    overflow: "hidden",
  },
  topTabsWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    background: "var(--white-100)",
    borderRadius: 8,
    padding: 2.5,
    border: "1.5px solid var(--white-200)",
  },
  tabBox: {
    padding: "4px 12px",
    borderRadius: 6,
    fontSize: 10,
    fontWeight: 600,
    color: "var(--black-200)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  activeTab: {
    background: "var(--white-200)",
    color: "var(--black-100)",
  },
  bodyWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
  },
  body: {
    width: "80%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 30,
    marginTop: 20,
    transition: "opacity 0.4s ease",
  },
  hidden: {
    opacity: 0,
    pointerEvents: "none",
    position: "absolute",
  },
  visible: {
    opacity: 1,
    pointerEvents: "auto",
    position: "relative",
  },
  box: { 
    position: "relative", 
    marginBottom: 60 
  },
  imageMain: {
    background: "var(--white-200)",
    borderRadius: 15,
    padding: 3,
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "350px",
  },
  imageWrapper: {
    position: "relative",
    background: "var(--white-100)",
    padding: 3,
    borderRadius: 10,
    overflow: "hidden",
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top",
    borderRadius: 10,
    transition: "transform 0.5s ease",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.45)",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.4s ease",
    color: "#fff",
  },
  viewProfileBox: {
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.3)",
    padding: "4px 10px",
    borderRadius: 8,
    fontSize: 11,
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    gap: 6,
    textDecoration: "none",
    color: "#fff",
    transition: "background 0.3s ease, transform 0.3s ease",
  },
  viewProfileBoxHover: {
    background: "rgba(255,255,255,0.25)",
    transform: "translateY(-2px)",
  },
  arrow: {
    transform: "rotate(45deg)",
    fontSize: 12,
  },
  boxMain: {
    position: "absolute",
    bottom: -45,
    left: 0,
    right: 0,
    background: "var(--white-200)",
    borderRadius: 15,
    padding: 3,
    display: "flex",
    width: "80%",
    margin: "0 auto",
  },
  boxWrapper: {
    background: "var(--white-100)",
    border: "1px solid var(--white-200)",
    borderRadius: 12,
    padding: "15px 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 15,
    fontWeight: 600,
    color: "var(--black-100)",
  },
  date: {
    fontSize: 12,
    fontWeight: 450,
    color: "var(--black-200)",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  executiveCard: {
    background: "var(--white-200)",
    borderRadius: 15,
    padding: 2,
    display: "flex",
    width: "80%",
    margin: "0 auto",
  },
  executiveWrapper: {
    background: "var(--white-100)",
    borderRadius: 12,
    padding: 3,
    width: "100%",
  },
  executiveBox: {
    background: "var(--white-200)",
    borderRadius: 10,
    padding: "15px 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
};

const Presidents: FC = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<number | null>(null);
  const [hoverProfile, setHoverProfile] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"presidents" | "executives">("presidents");

  const handleBoxClick = (id: number) => navigate(`/about/${id}`);

  return (
    <Box style={styles.container}>
      <Box style={styles.topTabsWrapper}>
        {["presidents", "executives"].map((tab) => (
          <Box
            key={tab}
            style={{
              ...styles.tabBox,
              ...(activeTab === tab ? styles.activeTab : {}),
            }}
            onClick={() => setActiveTab(tab as "presidents" | "executives")}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Box>
        ))}
      </Box>

      <Box style={styles.bodyWrapper}>
        <Box
          style={{
            ...styles.body,
            ...(activeTab === "presidents" ? styles.visible : styles.hidden),
          }}
        >
          {presidentsData.map((president, index) => (
            <Box key={president.id} style={styles.box} onClick={() => handleBoxClick(president.id)}>
              <Box style={styles.imageMain}>
                <Box
                  style={styles.imageWrapper}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {president.img ? (
                    <Image
                      src={president.img}
                      alt={president.name}
                      style={{
                        ...styles.image,
                        transform: hovered === index ? "scale(1.08)" : "scale(1)",
                      }}
                    />
                  ) : (
                    <Box
                      style={{
                        ...styles.image,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "var(--white-200)",
                      }}
                    >
                      <IconUser size={300} color="var(--black-200)" style={{ marginTop: 20 }} />
                    </Box>
                  )}

                  <Box
                    style={{
                      ...styles.overlay,
                      opacity: hovered === index ? 1 : 0,
                    }}
                  >
                    <Link
                      to={`/about/${president.id}`}
                      style={{
                        ...styles.viewProfileBox,
                        ...(hoverProfile === index ? styles.viewProfileBoxHover : {}),
                      }}
                      onMouseEnter={() => setHoverProfile(index)}
                      onMouseLeave={() => setHoverProfile(null)}
                    >
                      View Profile <span style={styles.arrow}>↑</span>
                    </Link>
                  </Box>
                </Box>
              </Box>

              <Box style={styles.boxMain}>
                <Box style={styles.boxWrapper}>
                  <Text style={styles.date}>{president.date}</Text>
                  <Text style={styles.name}>{president.name}</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          style={{
            ...styles.body,
            ...(activeTab === "executives" ? styles.visible : styles.hidden),
          }}
        >
          {executivesData.map((executive) => (
            <Box key={executive.id} style={styles.executiveCard}>
              <Box style={styles.executiveWrapper}>
                <Box style={styles.executiveBox}>
                  <Text style={styles.date}>{executive.role}</Text>
                  <Text style={styles.name}>{executive.name}</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Presidents;
