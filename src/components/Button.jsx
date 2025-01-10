const Button = ({title, id, leftIcon, rightIcon, containerCLass}) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full
    bg-violet-50 px-7 py-3 text-black ${containerCLass}`}>
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
