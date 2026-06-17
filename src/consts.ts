import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "junnpp",
  DESCRIPTION:
    "데이터로 의사결정을 돕는 박준혁의 기록 공간. 반짝임보다 꾸준히 공부하고 기록하며 성장합니다.",
  EMAIL: "junnh.park@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 4,
  NUM_PROJECTS_ON_HOMEPAGE: 4,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "박준혁 · Data Analyst. 게임 데이터로 마케팅·사업 의사결정을 돕고, 공부한 것을 기록합니다.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "분석하며 배운 것, 다시 꺼내 쓸 방법론, 공부한 내용을 기록합니다.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "조이시티 마케팅 데이터 분석 대표 사례 — 문제 / 가설 / 분석 / 결과.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/junnppp",
  },
];
