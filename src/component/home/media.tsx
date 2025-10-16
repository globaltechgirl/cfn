import { Box, Text, Image } from "@mantine/core";
import { IconClock } from "@tabler/icons-react";
import type { FC, CSSProperties } from "react";
import CFNLogo from "@/assets/cfn.svg";

interface MediaItem {
  img: string;
  time: string;
  title: string;
  label: string;
  clock: string;
}

const truncateText = (text: string, limit = 70): string =>
  text.length > limit ? `${text.slice(0, limit).trim()}…` : text;

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: -10,
    gap: 20,
    padding: "40px 0",
  },
  topText: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: "uppercase",
    color: "var(--green-100)",
    letterSpacing: "1px",
  },
  header: {
    fontSize: 30,
    fontWeight: 600,
    color: "var(--black-100)",
  },
  subText: {
    maxWidth: 600,
    color: "var(--black-200)",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.6,
  },
  body: {
    width: "88%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 20,
    marginTop: 40,
  },
  box: {
    background: "var(--white-200)",
    border: "1px solid var(--white-300)",
    borderRadius: 15,
    padding: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
  },
  wrapper: {
    background: "var(--white-100)",
    border: "1px solid var(--white-300)",
    borderRadius: 12,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    width: "100%",
  },
  imageBox: {
    background: "var(--white-200)",
    borderRadius: 12,
    width: "100%",
    height: 200,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  infoBox: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  time: {
    fontSize: 12,
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
    background: "var(--green-200)",
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
};

const mediaData: MediaItem[] = [
  {
    img: CFNLogo,
    time: "2 SEP. 2019",
    title:
      "Communique of the pre-AGM national conference of the Cooperative Federation of Nigeria (CFN) and its launching of the UN International Year of Cooperatives, held in Port Harcourt, Rivers State, 27th–30th August 2012.",
    label: "Communique",
    clock: "1 min read",
  },
  {
    img: CFNLogo,
    time: "2 SEP. 2019",
    title:
      "Communique of CFN capacity building workshop for CFN board members held at FOMWAN Complex, Abuja, 18th February 2014.",
    label: "Communique",
    clock: "3 min read",
  },
  {
    img: CFNLogo,
    time: "2 SEP. 2019",
    title:
      "The communique issued by participants at the Cooperative Federation of Nigeria workshop/annual general meeting held at the Hills Station Hotel Jos, Plateau State on 24th–25th November 2015.",
    label: "Communique",
    clock: "2 min read",
  },
];

const Media: FC = () => (
  <Box style={styles.container}>
    <Text style={styles.topText}>Media</Text>
    <Text style={styles.header}>Stay Informed with the Latest media</Text>
    <Text style={styles.subText}>
      Read the latest updates and events from the Cooperative Federation of Nigeria.
    </Text>

    <Box style={styles.body}>
      {mediaData.map((item, index) => (
        <Box key={index} style={styles.box}>
          <Box style={styles.wrapper}>
            <Box style={styles.imageBox}>
              <Image src={item.img} alt="CFN Logo" style={styles.img} />
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
  </Box>
);

export default Media;
