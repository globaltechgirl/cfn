import { Box, Text } from "@mantine/core";
import { IconUsers, IconHeartHandshake, IconTargetArrow } from "@tabler/icons-react";
import type { FC, CSSProperties, ReactNode } from "react";

interface Principle {
  icon: ReactNode;
  title: string;
  text: string;
}

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    background: "var(--green-300)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: 30,
    gap: 20,
    padding: "60px 0",
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
    background: "var(--white-100)",
    border: "1px solid var(--white-100)",
    borderRadius: 18,
    padding: 30,
    width: "90%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 15,
    boxSizing: "border-box",
    marginTop: 40,
  },
  box: {
    background: "var(--white-100)",
    border: "1px solid var(--white-300)",
    borderRadius: 12,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    gap: 25,
  },
  tallBox: {
    gridRow: "span 2",
  },
  iconCircle: {
    background: "var(--green-200)",
    borderRadius: 12,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  boxText: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  boxHeader: {
    fontSize: 14,
    fontWeight: 500,
    color: "var(--black-100)",
  },
  boxSub: {
    fontSize: 12,
    fontWeight: 450,
    color: "var(--black-200)",
    lineHeight: 1.5,
  },
};

const principles: Principle[] = [
  {
    icon: <IconUsers size={26} color="var(--white-100)" />,
    title: "Autonomy and Independence",
    text: "Cooperatives are autonomous, self-help organisations controlled by their members to maintain their cooperative autonomy.",
  },
  {
    icon: <IconHeartHandshake size={26} color="var(--white-100)" />,
    title: "Voluntary and Open Membership",
    text: "Cooperatives are voluntary organisations open to all persons without discrimination.",
  },
  {
    icon: <IconTargetArrow size={26} color="var(--white-100)" />,
    title: "Concern for Community",
    text: "Cooperatives work for the sustainable development of their communities through policies approved by their members.",
  },
  {
    icon: <IconUsers size={26} color="var(--white-100)" />,
    title: "Member Economic Participation",
    text: "Members contribute equitably to, and democratically control, the capital of their cooperative. At least part of that capital is usually the common property of the cooperative. Members usually receive limited compensation, if any, on capital subscribed as a condition of membership. Members allocate surpluses for any or all of the following purposes: developing their cooperative, possibly by setting up reserves, part of which at least would be indivisible; benefiting members in proportion to their transactions with the cooperative; and supporting other activities.",
  },
  {
    icon: <IconHeartHandshake size={26} color="var(--white-100)" />,
    title: "Democratic Member Control",
    text: "Cooperatives are democratic organisations controlled by their members, who actively participate in setting their policies.",
  },
  {
    icon: <IconTargetArrow size={26} color="var(--white-100)" />,
    title: "Education, Training, and Information",
    text: "Cooperatives provide education and training for their members to ensure effective contribution.",
  },
  {
    icon: <IconHeartHandshake size={26} color="var(--white-100)" />,
    title: "Cooperation among Cooperatives",
    text: "Cooperatives serve their members most effectively by working together through different structures.",
  },
];

const Principles: FC = () => {
  return (
    <Box style={styles.container}>
      <Text style={styles.topText}>Principles</Text>
      <Text style={styles.header}>Browse all CFN'S Cooperative Principles</Text>
      <Text style={styles.subText}>
        Core principles guiding CFN’s commitment to advancing the cooperative movement.
      </Text>

      <Box style={styles.body}>
        {principles.map((principle, index) => (
          <Box
            key={index}
            style={{
              ...styles.box,
              ...(index === 3 ? styles.tallBox : {}),
            }}
          >
            <Box style={styles.iconCircle}>{principle.icon}</Box>
            <Box style={styles.boxText}>
              <Text style={styles.boxHeader}>{principle.title}</Text>
              <Text style={styles.boxSub}>{principle.text}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Principles;
