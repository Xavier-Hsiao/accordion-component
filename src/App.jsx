import Accordion from "./component/Accordion";
import styles from "./App.module.scss";

const faqs = [
  {
    title: "是誰住在深海的大鳳梨裡？",
    text: "你以為我要說海綿寶寶對不對.......阿呀，還真被你給猜對了，是的船長！",
  },
  {
    title: "為什麼派大星心情不好？",
    text: "因為他看不到自己的額頭。",
  },
  {
    title: "請問你養的貓咪叫什麼名字？",
    text: "她叫做咪球球，是一隻白底虎斑的米克斯，2024/1 就三歲囉，我沒遇過這麼有個性、這麼愛叫的貓咪......",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
