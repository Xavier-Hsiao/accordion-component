import styles from "./Accordion.module.scss";

function AccordionItem({ num, title, text }) {
  return (
    <div className={styles.item}>
      <p className={styles.number}>{num}</p>
      <p className={styles.text}>{title}</p>
      <p className={styles.icon}>-</p>
      <div className={styles.contentBox}>{text}</div>
    </div>
  );
}

export default function Accordion({ data }) {
  return (
    <div className={styles.accordion}>
      {data.map((item, i) => (
        <AccordionItem title={item.title} text={item.text} num={i} key={i} />
      ))}
    </div>
  );
}
