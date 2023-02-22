import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Router, { useRouter } from "next/router";

const logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 981 994"
    width="24"
    height="24"
    className="fill-black dark:fill-white"
  >
    <path d="M949 430 577 38a119 119 0 0 0-174 0L31 430c-38 41-33 76-27 90 5 11 20 39 64 39h55v302c0 68 48 133 117 133h158V675c0-35-5-54 30-54h125c34 0 29 19 29 54v319h158c69 0 118-65 118-133V559h54c44 0 59-28 64-39 6-14 11-49-27-90Z" />
  </svg>
);

const config: DocsThemeConfig = {
  logo,
  project: {
    link: "https://github.com/stoicperson/portfolio",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra/tree/main/",
  useNextSeoProps() {
    const { pathname } = useRouter();
    if (pathname !== "/") {
      return {
        titleTemplate: "%s - Park min",
      };
    }
    return {
      titleTemplate: "%s",
    };
  },
  head: function useHead() {
    const { title } = useConfig();
    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="ko" />
        <meta name="description" content="Park Min's portfolio website" />
        <meta name="og:description" content="Park Min's portfolio website" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:image" content={socialCard} /> */}
        <meta name="twitter:site:domain" content="parkmin.site" />
        <meta name="twitter:url" content="https://parkmin.site" />
        <meta
          name="og:title"
          content={
            title ? title + "- Park min" : "Park Min's portfolio website"
          }
        />
        {/* // <meta name="og:image" content={socialCard} /> */}
        <meta name="apple-mobile-web-app-title" content="Park Min" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </>
    );
  },
  editLink: {
    text: "",
  },
  feedback: {
    content: "페이지에 오류가 있나요? 피드백 해주세요!",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center text-sm sm:items-start">
        <p>MIT © {new Date().getFullYear()} 박 민</p>
      </div>
    ),
  },
};

export default config;
