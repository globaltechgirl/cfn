import Events1 from "@/assets/events1.jpg";
import Events2 from "@/assets/events2.jpg";
import Events3 from "@/assets/events3.jpg";

export interface EventsItem {
  id: number;
  wallpaper: string;
  title: string;
}

export const eventsData: EventsItem[] = [
  {
    id: 1,
    wallpaper: Events1,
    title: "2021 CFN Summit"
  },
  {
    id: 2,
    wallpaper: Events2,
    title: "Day 1"
  },
  {
    id: 3,
    wallpaper: Events3,
    title: "Day 2"
  },
];
