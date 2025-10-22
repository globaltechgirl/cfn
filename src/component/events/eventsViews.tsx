import { useState, type FC, type CSSProperties } from "react";
import { Box, Text, Image, ActionIcon } from "@mantine/core";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import { useParams } from "react-router-dom";

import { cfnsummitData } from "./2021Summitdata";
import { dayoneData } from "./day1data";
import { daytwoData } from "./day2data";

interface EventImage {
  id: number;
  img: string;
}

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
    alignItems: "stretch",
    gap: 20,
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
    border: "1px solid var(--white-200)",
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
  popupOverlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  popupWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
    width: "100%",
    maxWidth: "95%",
  },
  popupImageWrapper: {
    background: "var(--white-300)",
    borderRadius: 15,
    padding: 3,
    width: "60%",
  },
  popupImageMain: {
    background: "var(--white-100)",
    border: "1px solid var(--white-200)",
    borderRadius: 12,
    padding: 3,
  },
  popupImageBox: {
    borderRadius: 10,
    width: "100%",
    height: "auto",
    overflow: "hidden",
  },
  popupImage: {
    width: "100%",
    height: "auto",
    maxHeight: "80vh",
    objectFit: "cover",
    objectPosition: "center",
  },
  arrowWrapper: {
    background: "var(--white-300)",
    padding: 1.5,
    borderRadius: 7,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
  },
  arrowBox: {
    background: "var(--white-200)",
    border: "1.5px solid var(--white-100)",
    padding: 2,
    borderRadius: 6,
    color: "var(--black-200)",
  },
  closeBox: {
    background: "var(--white-300)",
    padding: 1.5,
    borderRadius: 7,
    position: "absolute",
    top: 0,
    right: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  closeButton: {
    background: "var(--white-200)",
    border: "1.5px solid var(--white-100)",
    padding: 2,
    borderRadius: 6,
    color: "var(--black-200)",
  },
};

const EventsViews: FC = () => {
  const { id } = useParams<{ id: string }>();
  const eventId = Number(id);

  const getEventData = (): EventImage[] => {
    switch (eventId) {
      case 1:
        return cfnsummitData;
      case 2:
        return dayoneData;
      case 3:
        return daytwoData;
      default:
        return [];
    }
  };

  const eventData = getEventData();

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const totalPages = Math.ceil(eventData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = eventData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) =>
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => setSelectedIndex(index);
  const handleClosePopup = () => setSelectedIndex(null);

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === currentItems.length - 1 ? 0 : (prev ?? 0) + 1
    );
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === 0 ? currentItems.length - 1 : (prev ?? 0) - 1
    );
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.body}>
        {currentItems.map((item, index) => (
          <Box
            key={item.id}
            style={{ ...styles.box, flex: "0 0 350px" }}
            onClick={() => handleImageClick(index)}
          >
            <Box style={styles.wrapper}>
              <Box
                style={styles.imageBox}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={item.img}
                  alt={`Event ${item.id}`}
                  style={{
                    ...styles.image,
                    transform:
                      hoveredIndex === index ? "scale(1.08)" : "scale(1.0)",
                  }}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {totalPages > 1 && (
        <Box style={styles.pagination}>
          <Text style={styles.paginationText} onClick={() => handlePageChange(1)}>
            FIRST PAGE (1)
          </Text>

          <ActionIcon
            style={styles.arrowIcon}
            onClick={() => handlePageChange(currentPage - 1)}
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
                onClick={() => handlePageChange(page)}
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
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <IconChevronRight size={14} />
          </ActionIcon>

          <Text
            style={styles.paginationText}
            onClick={() => handlePageChange(totalPages)}
          >
            LAST PAGE ({totalPages})
          </Text>
        </Box>
      )}

      {selectedIndex !== null && (
        <Box style={styles.popupOverlay} onClick={handleClosePopup}>
          <Box style={styles.popupWrapper} onClick={(e) => e.stopPropagation()}>
            <Box style={styles.arrowWrapper} onClick={handlePrev}>
              <Box style={styles.arrowBox}>
                <IconChevronLeft size={16} />
              </Box>
            </Box>

            <Box style={styles.popupImageWrapper}>
              <Box style={styles.popupImageMain}>
                <Box style={styles.popupImageBox}>
                  <Image
                    src={currentItems[selectedIndex].img}
                    alt={`Popup ${selectedIndex}`}
                    style={styles.popupImage}
                  />
                </Box>
              </Box>
            </Box>

            <Box style={styles.arrowWrapper} onClick={handleNext}>
              <Box style={styles.arrowBox}>
                <IconChevronRight size={16} />
              </Box>
            </Box>

            <Box style={styles.closeBox} onClick={handleClosePopup}>
              <Box style={styles.closeButton}>
                <IconX size={14} />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default EventsViews;
