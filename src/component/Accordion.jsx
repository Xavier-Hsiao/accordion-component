import { useState } from "react";
import styles from "./Accordion.module.scss";

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`${styles.item} ${isOpen ? styles.open : ""}`}
      onClick={handleToggle}
    >
      <p className={styles.number}>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.icon}>{isOpen ? "-" : "+"}</p>
      {isOpen && <div className={styles.contentBox}>{text}</div>}
    </div>
  );
}

export default function Accordion({ data }) {
  return (
    <div className={styles.accordion}>
      {data.map((item, i) => (
        <AccordionItem
          title={item.title}
          text={item.text}
          num={i}
          key={i + item.title}
        />
      ))}
    </div>
  );
}
