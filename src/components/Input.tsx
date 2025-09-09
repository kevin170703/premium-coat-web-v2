export default function Input({
  label,
  placeholder,
  type = "text",
  id,
  onChange,
  value,
  name,
  disabled = false,
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={id}
      className={`min-w-max w-full max-h-max flex flex-col py-3 px-5 rounded-full bg-white transition-all focus-within:border-primary border border-[#ccc] ${
        disabled ? "text-[#999] cursor-not-allowed" : "text-black"
      }`}
    >
      <label className="text-text-secondary text-[10px] font-medium text-start">
        {label}
      </label>

      <input
        required={required}
        id={id}
        type={type}
        placeholder={placeholder}
        className="text-base font-medium outline-none bg-transparent "
        onChange={onChange}
        value={value}
        name={name}
        disabled={disabled}
      />
    </label>
  );
}
