import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <span className="indexCtasGitHubButtonWrapper_AOht">
        <img src="https://gitee.com/dgiiot/dgiot/badge/star.svg?theme=gvp" alt="gvp"/>
        </span>
                <p></p>
                <p className="hero__subtitle">
                    <Translate>Dgiot helps developers quickly connect subsystems to achieve data aggregation with a few
                        lines of code, and can also achieve common device access with zero code</Translate>
                </p>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="DGIOT让万物互联变得更简单 <head />"
        >
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}

