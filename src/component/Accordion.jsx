import styles from "./Accordion.module.scss";

function AccordionItem({ num, title, text }) {
  return (
    <div className={styles.item}>
      <p className={styles.number}>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className={styles.title}>{title}</p>
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
