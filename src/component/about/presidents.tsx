import { Box, Text, Image } from "@mantine/core";
import { useState } from "react";
import type { FC, CSSProperties } from "react";
import { Link } from "react-router-dom";

import President1 from "@/assets/president1.webp";
import President2 from "@/assets/president2.webp";
import President3 from "@/assets/president3.webp";
import President6 from "@/assets/president6.webp";
import President7 from "@/assets/president7.webp";
import President8 from "@/assets/president8.webp";
import President9 from "@/assets/president9.webp";

interface President {
  date: string;
  name: string;
  img: string;
  link: string;
}

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
    marginBottom: 60,
  },
  imageMain: {
    background: "var(--white-300)",
    border: "1px solid var(--white-100)",
    borderRadius: 14,
    padding: 3,
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "350px",
  },
  imageWrapper: {
    position: "relative",
    background: "var(--white-100)",
    border: "1px solid var(--white-300)",
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
    color: "white",
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

const presidentsData: President[] = [
  { date: "1992 - 1997", name: "Hon. Chief Akinpelu Obisesan", img: President1, link: "/presidents/akinpelu-obisesan" },
  { date: "1992 - 1997", name: "Pastor E. T. Latunde", img: President2, link: "/presidents/et-latunde" },
  { date: "1992 - 1997", name: "Chief J. E. Babatola", img: President3, link: "/presidents/je-babatola" },
  { date: "1992 - 1997", name: "Chief S. O. Somoye", img: President1, link: "/presidents/so-somoye" },
  { date: "1992 - 1997", name: "Chief Remi Obisesan", img: President1, link: "/presidents/remi-obisesan" },
  { date: "1997", name: "Chief Richard Iyasere", img: President6, link: "/presidents/richard-iyasere" },
  { date: "1997 - 2009", name: "Sir Adeola Ayoola", img: President7, link: "/presidents/adeola-ayoola" },
  { date: "2009 - 2017", name: "Engr. Jibrin Bala Abuja", img: President8, link: "/presidents/jibrin-bala-abuja" },
  { date: "2017 till date", name: "High Chief Oriyomi Ayeola", img: President9, link: "/presidents/oriyomi-ayeola" },
];

const Presidents: FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [hoverProfile, setHoverProfile] = useState<number | null>(null);

  return (
    <Box style={styles.container}>
      <Text style={styles.topText}>Presidents</Text>
      <Text style={styles.header}>Presidents to Date</Text>

      <Box style={styles.body}>
        {presidentsData.map((president, index) => (
          <Box key={index} style={styles.box}>
            <Box style={styles.imageMain}>
              <Box
                style={styles.imageWrapper}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <Image
                  src={president.img}
                  alt={president.name}
                  style={{
                    ...styles.image,
                    transform:
                      hovered === index ? "scale(1.08)" : "scale(1.0)",
                  }}
                />
                <Box
                  style={{
                    ...styles.overlay,
                    opacity: hovered === index ? 1 : 0,
                  }}
                >
                  <Link
                    to={president.link}
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
