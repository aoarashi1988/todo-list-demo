import './index.css';

interface CheckBoxProps {
  checked: boolean;
}
export default function CheckBox(props: CheckBoxProps) {
  const { checked } = props;
  const className = checked
    ? 'checkbox checkbox-checked'
    : 'checkbox checkbox-unchecked';
  return (
    <span className={className}>
      {checked ? <span className="checkbox-inner" /> : null}
    </span>
  );
}
