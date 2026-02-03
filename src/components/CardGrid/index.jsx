import React from "react";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

export default function CardGrid({ items, title }) {
  return (
    <section className={styles.section}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      <div className={styles.grid}>
        {items.map((item) => (
          <Link key={item.to} className={styles.card} to={item.to}>
            <div className={styles.cardTitle}>{item.title}</div>
            {item.description ? (
              <div className={styles.cardDescription}>{item.description}</div>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}

