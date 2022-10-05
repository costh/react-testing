type Props = {
  text: string;
  color: string;
};

export default function DummyComponentWithProps({ text, color }: Props) {
  return (
    <div className="dummyCompWithPropsClass">
      <h1>{text}</h1>
      <span style={{color: color}}> This is dummpy component static text</span>
    </div>
  );
}
