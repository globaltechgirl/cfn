import { IconUsers, IconHeartHandshake, IconTargetArrow } from "@tabler/icons-react";
import type { ReactNode } from "react";

export interface Cooperative {
  icon: ReactNode;
  title: string;
  text: string;
}

export const cooperativeData: Cooperative[] = [
  {
    icon: <IconUsers size={16} color="var(--black-200)" />,
    title: "Autonomy and Independence",
    text: `
Cooperatives are autonomous, self-help organisations controlled by their members. If they enter into agreements with other organisations, including governments, or raise capital from external sources, they do so on terms that ensure democratic control by their members and maintain their cooperative autonomy.
    `,
  },
  {
    icon: <IconHeartHandshake size={16} color="var(--black-200)" />,
    title: "Voluntary and Open Membership",
    text: `
Cooperatives are voluntary organisations, open to all persons able to use their services and willing to accept the responsibilities of membership, without gender, social, racial, political or religious discrimination.
    `,
  },
  {
    icon: <IconTargetArrow size={16} color="var(--black-200)" />,
    title: "Concern for Community",
    text: `
Cooperatives serve their members most effectively and strengthen the cooperative movement by working together through local, national, regional and international structures.
    `,
  },
  {
    icon: <IconHeartHandshake size={16} color="var(--black-200)" />,
    title: "Democratic Member Control",
    text: `
Cooperatives are democratic organisations controlled by their members, who actively participate in setting their policies and making decisions. Men and women serving as elected representatives are accountable to the membership. In primary cooperatives members have equal voting rights (one member, one vote) and cooperatives at other levels are also organised in a democratic manner.
    `,
  },
  {
    icon: <IconTargetArrow size={16} color="var(--black-200)" />,
    title: "Education, Training, and Information",
    text: `
Cooperatives provide education and training for their members, elected representatives, managers, and employees so they can contribute effectively to the development of their co-operatives. They inform the general public - particularly young people and opinion leaders - about the nature and benefits of co-operation.
    `,
  },
  {
    icon: <IconHeartHandshake size={16} color="var(--black-200)" />,
    title: "Cooperation among Cooperatives",
    text: `
Cooperatives work for the sustainable development of their communities through policies approved by their members.
    `,
  },
  {
    icon: <IconUsers size={16} color="var(--black-200)" />,
    title: "Member Economic Participation",
    text: `
Members contribute equitably to, and democratically control, the capital of their cooperative. At least part of that capital is usually the common property of the cooperative. Members usually receive limited compensation, if any, on capital subscribed as a condition of membership. Members allocate surpluses for any or all of the following purposes: developing their cooperative, possibly by setting up reserves, part of which at least would be indivisible; benefiting members in proportion to their transactions with the cooperative; and supporting other activities approved by the membership.
    `,
  },
];