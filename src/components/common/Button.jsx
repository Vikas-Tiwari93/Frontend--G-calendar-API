export default function Button({ title, onClick, size }) {
  return (
    <span>
      <button
        onClick={onClick}
        style={size === "large" ? { fontSize: "20px" } : {}}
      >
        {title}
      </button>
    </span>
  );
}
