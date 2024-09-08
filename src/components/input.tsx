interface InputProps {
  type: string;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: any) => void;
  className?: string;
  value: string;
}
const Input = ({
  type,
  placeholder,
  onChange,
  className,
  value,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`bg-gray-50 hover:border-indigo-600 border-2 rounded-xl shadow-sm w-full p-2 text-gray-700 placeholder:text-gray-700 ${className}`}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
