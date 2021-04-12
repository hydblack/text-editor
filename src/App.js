import { Card, Input } from 'antd';
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  StrikethroughOutlined,
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {
  // useEffect,
  useRef,
  useState
} from 'react';

function App() {
  const { TextArea } = Input;
  const testArea = useRef(null);
  const [weight, setWeight] = useState("normal")
  const [style, setStyle] = useState("normal")
  const [align, setAlign] = useState("left")
  const [decoration, setDecoration] = useState("")
  const fontWeight = () => {
    if (weight === "normal") {
      setWeight("bold")
    } else {
      setWeight("normal")
    }
  }
  const fontStyle = () => {
    if (style === "normal") {
      setStyle("italic")
    } else {
      setStyle("normal")
    }
  }
  const textAlign = (e) => {
    if (e.target.dataset.icon === "align-left") {
      setAlign("left")
    } else if (e.target.dataset.icon === "align-center") {
      setAlign("center")
    } else {
      setAlign("right")
    }
  }
  const textDecoration = (e) => {
    if (e.target.dataset.icon === "underline") {
      setDecoration("underline")
    } else {
      setDecoration("line-through")
    }
    if (decoration === "underline" || decoration === "line-through") {
      setDecoration("none")
    }
  }
  return (
    <div className="App">
      <Card title="富文本编辑器垃圾版" style={{ width: "50%", margin: "auto", marginTop: 100 }}>
        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 20 }}>
          <BoldOutlined onClick={fontWeight} />
          <ItalicOutlined onClick={fontStyle} />
          <UnderlineOutlined onClick={textDecoration} />
          <StrikethroughOutlined onClick={textDecoration} />
          <AlignLeftOutlined onClick={textAlign} />
          <AlignCenterOutlined onClick={textAlign} />
          <AlignRightOutlined onClick={textAlign} />
        </div>
        <TextArea ref={testArea}
          style={{
            fontWeight: weight,
            fontStyle: style,
            textAlign: align,
            height: 200,
            textDecoration: decoration
          }} />
      </Card>
    </div>
  );
}

export default App;
