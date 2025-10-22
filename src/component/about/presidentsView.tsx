import type { FC, CSSProperties } from "react";
import { Box, Text, Image } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { presidentsData, type President } from "./presidentsData";
import DownloadIcon from "@/assets/icons/download";
import { IconUser } from "@tabler/icons-react";

const truncateText = (text: string, limit = 250): string =>
  text.length > limit ? `${text.slice(0, limit).trim()}…` : text;

const styles: Record<string, CSSProperties> = {
  container: {
    paddingTop: 60,
    width: "88%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    paddingBottom: 30,
  },
  body: {
    display: "flex",
    flexDirection: "column",
  },
  box: {
    display: "flex",
    flexDirection: "column",
  },
  topLeft: {
    background: "var(--white-200)",
    padding: 1.5,
    borderRadius: 8,
    marginRight: "auto",
  },
  backIcon: {
    background: "var(--white-200)",
    border: "1px solid var(--white-100)",
    padding: 2,
    borderRadius: 6,
    color: "var(--black-200)",
    cursor: "pointer",
  },
  wrapper: {
    width: "60%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 30,
  },
  topBox: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  presidentName: {
    fontSize: 45,
    fontWeight: 700,
    color: "var(--green-400)",
    textTransform: "capitalize",
  },
  presidentDate: {
    fontSize: 12,
    fontWeight: 500,
    color: "var(--black-100)",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  summaryBox: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: "70%",
  },
  hr: {
    border: "none",
    borderTop: "0.5px solid var(--green-100)",
    margin: "15px 0",
  },
  summaryText: {
    fontSize: 14,
    color: "var(--black-100)",
    lineHeight: 1.7,
    textAlign: "center",
  },
  portraitBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
  },
  imageBox: {
    background: "var(--white-200)",
    padding: 3,
    borderRadius: 15,
    width: "100%",
    height: "100%",
  },
  imageWrapper: {
    background: "var(--white-100)",
    border: "1px solid var(--white-200)",
    padding: 5,
    borderRadius: 12,
  },
  image: {
    width: 600,
    height: 600,
    objectFit: "cover",
    objectPosition: "top",
    borderRadius: 10,
  },
  downloadBox: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
  },
  downloadCircle: {
    background: "var(--green-400)",
    borderRadius: "50%",
    width: 18,
    height: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--white-100)",
  },
  downloadText: {
    fontSize: 12,
    fontWeight: 550,
    color: "var(--green-400)",
  },
  aboutWrapper: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    gap: 20,
    marginTop: 23,
  },
  aboutBox: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  aboutHeader: {
    fontSize: 14,
    fontWeight: 550,
    color: "var(--green-100)",
  },
  markdown: {
    width: "100%",
  },
  text: {
    fontSize: 13,
    fontWeight: 400,
    color: "var(--black-100)",
    lineHeight: 1.7,
    overflowWrap: "break-word",
    wordBreak: "break-word",
    whiteSpace: "normal",
    textAlign: "justify",
  },
};

const MarkdownRenderer: FC<{ content: string }> = ({ content }) => (
  <Box style={styles.markdown}>
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{
        br: () => <Box style={{ display: "block", height: 0 }} />,
        p: ({ children }) => (
          <Text style={{ ...styles.text, marginBottom: 15, lineHeight: 1.8 }}>
            {children}
          </Text>
        ),
      }}
    >
      {content.replace(/<br\s*\/?>\s*<br\s*\/?>/g, "<br />")}
    </ReactMarkdown>
  </Box>
);

const PresidentsView: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const president: President | undefined = presidentsData.find(
    (_, index) => index === Number(id)
  );

  if (!president) return <Navigate to="/presidents" replace />;

  const handleDownload = (): void => {
    if (!president.img) return;
    
    const link = document.createElement("a");
    link.href = president.img;
    link.download = `${president.name.replace(/\s+/g, "_")}.webp`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.body}>
        <Box style={styles.box}>
          <Box style={styles.topLeft}>
            <Box style={styles.backIcon} onClick={() => navigate("/about")}>
              <IconChevronLeft size={16} />
            </Box>
          </Box>

          <Box style={styles.wrapper}>
            <Box style={styles.topBox}>
              <Text style={styles.presidentName}>{president.name}</Text>
              <Text style={styles.presidentDate}>
                - PRESIDENT ({president.date}) -
              </Text>
            </Box>

            <Box style={styles.summaryBox}>
              <hr style={styles.hr} />
              <Text style={styles.summaryText}>
                {truncateText(president.about, 250)}
              </Text>
              <hr style={styles.hr} />
            </Box>

            <Box style={styles.portraitBox}>
              <Box style={styles.imageBox}>
                <Box style={styles.imageWrapper}>
                  {president.img ? (
                    <Image
                      src={president.img}
                      alt={president.name}
                      style={styles.image}
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
                      <IconUser
                        size={500}
                        color="var(--black-200)"
                      />
                    </Box>
                  )}
                </Box>
              </Box>

              <Box style={styles.downloadBox} onClick={handleDownload}>
                <Box style={styles.downloadCircle}>
                  <DownloadIcon width={10} height={10} />
                </Box>
                <Text style={styles.downloadText}>
                  Download Official Portrait
                </Text>
              </Box>
            </Box>

            <Box style={styles.aboutWrapper}>
              <Box style={styles.aboutBox}>
                <Text style={styles.aboutHeader}>About {president.name}</Text>
                <MarkdownRenderer content={president.about} />
              </Box>

              <Box style={styles.aboutBox}>
                <Text style={styles.aboutHeader}>Early Life</Text>
                <MarkdownRenderer content={president.early} />
              </Box>

              <Box style={styles.aboutBox}>
                <Text style={styles.aboutHeader}>Career</Text>
                <MarkdownRenderer content={president.career} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PresidentsView;
