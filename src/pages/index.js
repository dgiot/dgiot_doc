import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Translate, {
	translate
} from '@docusaurus/Translate';

function HomepageHeader() {
	const {
		siteConfig
	} = useDocusaurusContext();
	return (
		<header className={styles.heroBanner,styles.hero}>
            <div className={styles.container}>
                <img src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/atom/djs.png"/>
            </div>

            <div className={styles.container1}>
                            <h1 className={styles.hero1}>DGIOT</h1>
                            <h1 className={styles.hero2}>让万物互联变得更简单</h1>
                            <span className="indexCtasGitHubButtonWrapper_AOht">
                    <img src="https://gitee.com/dgiiot/dgiot/badge/star.svg?theme=gvp" alt="gvp"/>
                    </span>
                            <p></p>
                            <p className="hero__subtitle">
                            <a  href="/docs/product_doc/docs/deployment_details/">
                              <button className={styles.buttons1}>进入文档 →</button>
                            </a>
                            <a  href="https://prod.dgiotcloud.cn/#/login">
                              <button className={styles.buttons2}>进入控制台</button>
                            </a>
                            </p>
            </div>
        </header>
	);
}

export default function Home() {
	const {
		siteConfig
	} = useDocusaurusContext();
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