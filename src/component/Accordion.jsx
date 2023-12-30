import { useState } from "react";
import styles from "./Accordion.module.scss";

export default function Accordion({ data }) {
  // To allow only one item be opened, we need to define the state here, storing index
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className={styles.accordion}>
      {data.map((item, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={item.title}
          num={i}
          key={i + item.title}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  // Determine whether the current item should be opened or closed based on whether its index (num) matches the index stored in the state (curOpen)
  const isOpen = num === curOpen;

  // `onOpen` here is basically `setCurOpen`. So we update the index stored in the `curOpen` state variable.
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`${styles.item} ${isOpen ? styles.open : ""}`}
      onClick={handleToggle}
    >
      <p className={styles.number}>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.icon}>{isOpen ? "-" : "+"}</p>
      {isOpen && <div className={styles.contentBox}>{children}</div>}
    </div>
  );
}
