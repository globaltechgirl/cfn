import type { FC, CSSProperties } from "react";
import { Box, Text, Image } from "@mantine/core";
import { IconClock, IconChevronLeft } from "@tabler/icons-react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { mediaData } from "./mediaData";

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    paddingBottom: 30,
    marginTop: 60,
  },
  body: {
    width: "88%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  box: {
    display: "flex",
    flexDirection: "column",
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 30,
  },
  topLeft: {
    background: "var(--white-300)",
    border: "1px solid var(--white-100)",
    padding: 1.5,
    borderRadius: 8,
  },
  backIcon: {
    background: "var(--white-300)",
    border: "1px solid var(--white-100)",
    padding: 2,
    borderRadius: 6,
    color: "var(--black-200)",
    cursor: "pointer",
  },
  topRight: {
    display: "flex",
    alignItems: "center",
    gap: 25,
  },
  time: {
    fontSize: 12,
    fontWeight: 500,
    color: "var(--black-100)",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  clockBox: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    color: "var(--green-100)",
  },
  clockText: {
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  labelBox: {
    background: "var(--white-300)",
    border: "1px solid var(--white-100)",
    padding: 1.5,
    borderRadius: 8,
  },
  label: {
    background: "var(--white-300)",
    border: "1px solid var(--white-100)",
    borderRadius: 6,
    padding: "2px 6px",
    color: "var(--black-100)",
    fontSize: 10,
    fontWeight: 500,
    textTransform: "capitalize",
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    color: "var(--black-100)",
    textTransform: "capitalize",
    textDecoration: "underline",
    textUnderlineOffset: 2,
    marginBottom: 40,
  },
  wallpaperBox: {
    background: "var(--white-300)",
    padding: 3,
    borderRadius: 15,
    width: "100%",
    height: "100%",
    marginBottom: 60,
  },
  wallpaperWrapper: {
    background: "var(--white-100)",
    border: "1px solid var(--white-300)",
    padding: 5,
    borderRadius: 12,
    overflow: "hidden",
  },
  wallpaper: {
    width: "100%",
    height: 350,
    objectFit: "cover",
    objectPosition: "top",
    display: "block",
    borderRadius: 10,
  },
  markdown: {
    width: "100%",
  },
  text: {
    fontSize: 14,
    fontWeight: 400,
    color: "var(--black-100)",
    lineHeight: 1.7,
    overflowWrap: "break-word",
    wordBreak: "break-word",
    whiteSpace: "normal",
    textAlign: "justify",
  },
};

const Views: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const mediaItem = mediaData.find((item) => item.id === Number(id));
  if (!mediaItem) return <Navigate to="/media" replace />;

  return (
    <Box style={styles.container}>
      <Box style={styles.body}>
        <Box style={styles.box}>
          <Box style={styles.topRow}>
            <Box style={styles.topLeft}>
              <Box style={styles.backIcon} onClick={() => navigate("/media")}>
                <IconChevronLeft size={16} />
              </Box>
            </Box>

            <Box style={styles.topRight}>
              <Text style={styles.time}>{mediaItem.time}</Text>
              <Box style={styles.clockBox}>
                <IconClock size={13} />
                <Text style={styles.clockText}>{mediaItem.clock}</Text>
              </Box>
              <Box style={styles.labelBox}>
                <Text style={styles.label}>{mediaItem.label}</Text>
              </Box>
            </Box>
          </Box>

          <Text style={styles.title}>{mediaItem.title}</Text>

          <Box style={styles.wallpaperBox}>
            <Box style={styles.wallpaperWrapper}>
              <Image
                src={mediaItem.wallpaper}
                alt={mediaItem.title}
                style={styles.wallpaper}
              />
            </Box>
          </Box>

          <Box style={styles.markdown}>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                br: () => <Box style={{ display: "block", height: 10 }} />,
                p: ({ children }) => (
                  <Text
                    style={{
                      ...styles.text,
                      marginBottom: 15,
                      lineHeight: 1.8,
                    }}
                  >
                    {children}
                  </Text>
                ),
                ol: ({ children }) => (
                  <ol
                    style={{
                      listStyleType: "decimal",
                      listStylePosition: "outside",
                      paddingLeft: 30,
                      marginLeft: 10,
                    }}
                  >
                    {children}
                  </ol>
                ),
                ul: ({ children }) => (
                  <ul
                    style={{
                      listStyleType: "disc",
                      listStylePosition: "outside",
                      paddingLeft: 30,
                      marginLeft: 10,
                    }}
                  >
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li
                    style={{
                      lineHeight: 1.8,
                      textAlign: "justify",
                      paddingLeft: 30,
                      marginLeft: 10,
                    }}
                  >
                    {children}
                  </li>
                ),
              }}
            >
              {mediaItem.text.replace(/<br\s*\/?>\s*<br\s*\/?>/g, "<br />")}
            </ReactMarkdown>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Views;
