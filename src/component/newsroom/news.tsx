import { useState, type FC, type CSSProperties } from "react";
import { Box, Text, Image, ActionIcon } from "@mantine/core";
import { IconClock, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { newsroomData, type NewsroomItem } from "./newsroomData";

const truncateText = (text: string, limit = 70): string =>
  text.length > limit ? `${text.slice(0, limit).trim()}…` : text;

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 20,
    paddingBottom: 30,
  },
  body: {
    width: "88%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    alignItems: "stretch",
  },
  box: {
    background: "var(--white-200)",
    borderRadius: 15,
    padding: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    cursor: "pointer",
  },
  wrapper: {
    background: "var(--white-100)",
    border: "1px solid var(--white-200)",
    borderRadius: 12,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    width: "100%",
    flex: 1,
  },
  imageBox: {
    background: "var(--white-200)",
    borderRadius: 10,
    width: "100%",
    height: 200,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    transition: "transform 0.5s ease",
  },
  infoBox: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
    flex: 1,
    width: "100%",
  },
  time: {
    fontSize: 11,
    fontWeight: 500,
    color: "var(--black-100)",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 14,
    fontWeight: 550,
    color: "var(--black-100)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  },
  bottomRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 5,
  },
  label: {
    background: "var(--green-100)",
    color: "var(--white-100)",
    fontSize: 10,
    fontWeight: 450,
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
    fontSize: 10,
    fontWeight: 450,
    color: "var(--black-300)",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  pagination: {
    display: "flex",
    alignItems: "center",
    gap: 30,
    marginTop: 40,
  },
  pageCircleWrapper: {
    display: "flex",
    gap: 20,
  },
  pageCircle: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  activePage: {
    background: "var(--white-200)",
  },
  paginationText: {
    fontSize: 10.5,
    fontWeight: 450,
    letterSpacing: 1,
    cursor: "pointer",
  },
  arrowIcon: {
    padding: 0,
    background: "transparent",
    color: "var(--black-300)",
  },
};

const News: FC = () => {
  const navigate = useNavigate();
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hovered, setHovered] = useState<number | null>(null);

  const totalPages = Math.ceil(newsroomData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = newsroomData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageClick = (page: number) => setCurrentPage(page);
  const handleBoxClick = (itemId: number) => navigate(`/newsroom/${itemId}`);

  return (
    <Box style={styles.container}>
      <Box style={styles.body}>
        {currentItems.map((item: NewsroomItem, index: number) => (
          <Box
            key={item.id}
            style={{ ...styles.box, margin: 0, flex: "0 0 350px" }}
            onClick={() => handleBoxClick(item.id)}
          >
            <Box style={styles.wrapper}>
              <Box
                style={styles.imageBox}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <Image
                  src={item.wallpaper}
                  alt={item.title}
                  style={{
                    ...styles.image,
                    transform: hovered === index ? "scale(1.08)" : "scale(1.0)",
                  }}
                />
              </Box>

              <Box style={styles.infoBox}>
                <Text style={styles.time}>{item.time}</Text>
                <Text style={styles.title}>{truncateText(item.title, 70)}</Text>

                <Box style={styles.bottomRow}>
                  <Text style={styles.label}>{item.label}</Text>
                  <Box style={styles.clockBox}>
                    <IconClock size={13} color="var(--black-300)" />
                    <Text style={styles.clockText}>{item.clock}</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box style={styles.pagination}>
        <Text
          style={styles.paginationText}
          onClick={() => handlePageClick(1)}
        >
          FIRST PAGE (1)
        </Text>

        <ActionIcon
          style={styles.arrowIcon}
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        >
          <IconChevronLeft size={14} />
        </ActionIcon>

        <Box style={styles.pageCircleWrapper}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Box
              key={page}
              style={{
                ...styles.pageCircle,
                ...(currentPage === page ? styles.activePage : {}),
              }}
              onClick={() => handlePageClick(page)}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "var(--black-100)",
                }}
              >
                {page}
              </Text>
            </Box>
          ))}
        </Box>

        <ActionIcon
          style={styles.arrowIcon}
          onClick={() =>
            setCurrentPage(Math.min(currentPage + 1, totalPages))
          }
        >
          <IconChevronRight size={14} />
        </ActionIcon>

        <Text
          style={styles.paginationText}
          onClick={() => handlePageClick(totalPages)}
        >
          LAST PAGE ({totalPages})
        </Text>
      </Box>
    </Box>
  );
};

export default News;
