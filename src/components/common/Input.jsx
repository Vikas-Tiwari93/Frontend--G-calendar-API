export default function Input({ type, placeholder, name, value, onChange }) {
  return (
    <span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </span>
  );
}
