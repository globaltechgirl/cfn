import type { FC, CSSProperties } from "react";
import { Box, Text, Image } from "@mantine/core";
import { IconClock } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import News from "./news";
import { mediaData, type MediaItem } from "./mediaData";

const truncateWords = (text: string, wordLimit = 10): string => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "…"
    : text;
};

const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    marginTop: 0,
  },
  featuredBox: {
    position: "relative",
    width: "98%",
    height: 480,
    borderRadius: 15,
    overflow: "hidden",
    background: "var(--white-300)",
    padding: 3,
    marginBottom: 40,
    cursor: "pointer",
  },
  imageBox: {
    background: "var(--white-100)",
    border: "1px solid var(--white-300)",
    borderRadius: 12,
    padding: 5,
    width: "100%",
    height: "100%",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 12,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top",
    display: "block",
  },
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
  },
  overlayInfo: {
    position: "absolute",
    bottom: 10,
    left: 10,
    width: "40%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    zIndex: 2,
    marginLeft: 60,
    marginBottom: 30,
  },
  topRow: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  time: {
    fontSize: 13,
    fontWeight: 500,
    color: "var(--white-100)",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    color: "var(--white-100)",
    textTransform: "capitalize",
    textDecoration: "underline",
    textUnderlineOffset: 2,
  },
  bodyText: {
    fontSize: 15,
    color: "var(--white-100)",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  label: {
    background: "var(--green-100)",
    color: "var(--white-100)",
    fontSize: 11,
    fontWeight: 500,
    borderRadius: 6,
    padding: "2px 6px",
    textTransform: "capitalize",
  },
  clockBox: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  clockText: {
    fontSize: 11,
    fontWeight: 500,
    color: "var(--white-300)",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
};

const MediaMain: FC = () => {
  const navigate = useNavigate();
  const featured: MediaItem = mediaData[7];

  const handleFeaturedClick = () => navigate(`/media/${featured.id}`);

  return (
    <Box style={styles.container}>
      <Box style={styles.featuredBox} onClick={handleFeaturedClick}>
        <Box style={styles.imageBox}>
          <Box style={styles.imageWrapper}>
            <Image
              src={featured.wallpaper}
              alt={featured.title}
              style={styles.img}
            />
            <Box style={styles.gradientOverlay} />
          </Box>
        </Box>

        <Box style={styles.overlayInfo}>
          <Box style={styles.topRow}>
            <Text style={styles.time}>{featured.time}</Text>
            <Text style={styles.title}>
              {truncateWords(featured.title, 10)}
            </Text>
          </Box>
          <Text style={styles.bodyText}>
            {truncateWords(featured.text, 20)}
          </Text>

          <Box style={styles.bottomRow}>
            <Text style={styles.label}>{featured.label}</Text>
            <Box style={styles.clockBox}>
              <IconClock size={13} color="var(--white-100)" />
              <Text style={styles.clockText}>{featured.clock}</Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <News />
    </Box>
  );
};

export default MediaMain;
