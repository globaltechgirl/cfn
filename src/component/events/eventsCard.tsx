import { Box } from "@mantine/core";
import { useEffect, useRef, useState, type FC, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { eventsData } from "./eventsData";

interface EventItem {
  id: number;
  title: string;
  wallpaper: string;
}

const styles: Record<string, CSSProperties> = {
  container: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
  },
  timelineLine: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: 1,
    height: "100%",
    background: "linear-gradient(to bottom, var(--white-200), var(--white-200))",
    borderRadius: 10,
    zIndex: 0,
    transition: "background 0.3s ease",
  },
  timelineItem: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: "200px 0",
  },
  numberMain: {
    position: "absolute",
    left: "50%",
    top: 0,
    transform: "translateX(-50%)",
    background: "var(--white-200)",
    borderRadius: "50%",
    color: "var(--black-200)",
    padding: 1.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
    cursor: "pointer",
  },
  numberCircle: {
    width: 22,
    height: 22,
    background: "var(--white-200)",
    border: "1.5px solid var(--white-100)",
    borderRadius: "50%",
    color: "var(--black-200)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    fontSize: 10,
    cursor: "pointer",
  },
  cardWrapper: {
    background: "var(--white-200)",
    borderRadius: 15,
    padding: 3,
    overflow: "hidden",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: "-150px",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardMain: {
    background: "var(--white-100)",
    borderRadius: 12,
    padding: 5,
  },
  cardBox: {
    background: "var(--white-200)",
    borderRadius: 10,
    width: 450,
    height: 300,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  titleBox: {
    position: "absolute",
    top: "-140px",
    background: "var(--white-200)",
    padding: 1.5,
    borderRadius: 8,
  },
  titleWrapper: {
    background: "var(--white-100)",
    padding: 1.5,
    borderRadius: 8,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 600,
    color: "var(--black-200)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    background: "var(--white-200)",
    padding: "2px 10px",
    borderRadius: 6,
  },
  left: {
    position: "absolute",
    right: "55%",
  },
  right: {
    position: "absolute",
    left: "55%",
  },
};

const EventsCard: FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const fraction = scrollTop / docHeight;
      setScrollPercent(fraction);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!lineRef.current) return;

    const darkColor = "var(--black-200)";
    const lightColor = "var(--white-200)";
    const progress = Math.min(scrollPercent * 200, 200);
    lineRef.current.style.background = `linear-gradient(to bottom, ${darkColor} ${progress}%, ${lightColor} ${progress}%)`;
  }, [scrollPercent]);

  const handleCardClick = (id: number): void => {
    navigate(`/events/${id}`);
  };

  return (
    <Box style={styles.container}>
      <Box ref={lineRef} style={styles.timelineLine} />

      {eventsData.map((event: EventItem, index: number) => {
        const isRight = index % 2 === 0;
        const sideStyle = isRight ? styles.right : styles.left;
        const titlePosition = isRight
          ? { right: "calc(55%)" }
          : { left: "calc(55%)" };

        return (
          <Box key={event.id} style={styles.timelineItem}>
            <Box style={{ ...styles.numberMain, top: "-200px" }}>
              <Box style={styles.numberCircle}>{event.id}</Box>
            </Box>

            <Box
              style={{ ...styles.cardWrapper, ...sideStyle }}
              onClick={() => handleCardClick(event.id)}
            >
              <Box style={styles.cardMain}>
                <Box style={styles.cardBox}>
                  <img
                    src={event.wallpaper}
                    alt={event.title}
                    style={styles.image}
                  />
                </Box>
              </Box>
            </Box>

            <Box style={{ ...styles.titleBox, ...titlePosition }}>
              <Box style={styles.titleWrapper}>
                <Box style={styles.titleText}>{event.title}</Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default EventsCard;
