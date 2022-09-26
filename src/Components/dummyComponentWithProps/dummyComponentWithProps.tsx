type Props = {
  text: string;
};

export default function DummyComponentWithProps({ text }: Props) {
  return (
    <div className="dummyCompWithPropsClass">
      <h1>{text}</h1>
      <span> This is dummpy component static text</span>
    </div>
  );
}
