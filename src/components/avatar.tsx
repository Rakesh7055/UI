import img from "../assets/google.svg";

interface ButtonProps {
  className?: string;
}

const Avatar = ({ className }: ButtonProps) => {
  return (
    <div className={` rounded-full overflow-hidden flex ${className}`}>
      <img src={img} alt="A" />
    </div>
  );
};

export default Avatar;
