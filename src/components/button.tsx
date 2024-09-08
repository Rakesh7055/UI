interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-indigo-600  px-4 py-2 rounded-lg font-normal text-white ${className}`}
    >
      {text}
    </button>
  );
};

interface ToggleButtonProps {
  onClick: () => void;
  isToggled: boolean;
}

export const ToggleButton = ({ isToggled, onClick }: ToggleButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-border rounded-full h-4 bg-transparent w-1/4`}
    >
      <div
        className={`border-2 border-primary bg-muted rounded-full w-4 h-4 -translate-y-1/2  ${
          isToggled ? "translate-x-1/2" : "-translate-x-full"
        }`}
      ></div>
    </button>
  );
};
