import { Box, Text, Image } from "@mantine/core";
import { useState, type FC, type CSSProperties } from "react";
import { Link, useNavigate } from "react-router-dom";
import { presidentsData } from "./presidentsData"; 
import { IconUser } from "@tabler/icons-react";

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: -50,
    gap: 20,
    padding: "60px 0 50px 0",
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
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 30,
    marginTop: 20,
  },
  box: { 
    position: "relative", 
    marginBottom: 60 
  },
  imageMain: {
    background: "var(--white-300)",
    border: "1px solid var(--white-100)",
    borderRadius: 15,
    padding: 5,
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "350px",
  },
    imageBox: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
  },
  imageWrapper: {
    position: "relative",
    background: "var(--white-100)",
    padding: 3,
    borderRadius: 12,
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
    background: "var(--white-300)",
    border: "1px solid var(--white-100)",
    borderRadius: 14,
    padding: 3,
    display: "flex",
    width: "80%",
    margin: "0 auto",
  },
  boxWrapper: {
    background: "var(--white-100)",
    border: "1px solid var(--white-300)",
    borderRadius: 10,
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
};

const Presidents: FC = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<number | null>(null);
  const [hoverProfile, setHoverProfile] = useState<number | null>(null);

  const handleBoxClick = (presidentId: number) => navigate(`/about/${presidentId}`);

  return (
    <Box style={styles.container}>
      <Text style={styles.topText}>Presidents</Text>
      <Text style={styles.header}>Presidents to Date</Text>

      <Box style={styles.body}>
        {presidentsData.map((president, index) => (
          <Box 
            key={index} 
            style={styles.box}
            onClick={() => handleBoxClick(president.id)}
          >
            <Box style={styles.imageMain}>
              <Box
                style={styles.imageWrapper}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <Box style={styles.imageBox}>
                  <Box style={styles.imageWrapper}>
                    {president.img && president.img.trim() !== "" ? (
                      <Image
                        src={president.img}
                        alt={president.name}
                        style={{
                          ...styles.image,
                          transform: hovered === index ? "scale(1.08)" : "scale(1.0)",
                        }}
                      />
                    ) : (
                      <Box
                        style={{
                          ...styles.image,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "var(--white-300)",
                        }}
                      >
                        <IconUser size={300} style={{marginTop: 20}} color="var(--black-200)" />
                      </Box>
                    )}
                  </Box>
                </Box>
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
    </Box>
  );
};

export default Presidents;
