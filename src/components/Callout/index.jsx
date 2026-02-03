import React from "react";

import styles from "./styles.module.css";

const VARIANT_LABELS = {
  note: "Note",
  lore: "Lore",
  hook: "Adventure Hook",
  secret: "Secret",
  rumor: "Rumor",
};

export default function Callout({ title, variant = "note", children }) {
  const label = title ?? VARIANT_LABELS[variant] ?? "Note";
  return (
    <aside className={styles.callout} data-variant={variant}>
      <div className={styles.heading}>{label}</div>
      <div className={styles.body}>{children}</div>
    </aside>
  );
}

