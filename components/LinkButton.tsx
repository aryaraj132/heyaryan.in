type Props = {
  href: string;
  targetBlank?: boolean;
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
};

const LinkButton: React.FC<Props> = ({
  href,
  targetBlank = false,
  outline = false,
  className = "",
  children,
}) => {
  return (
    <a
      role="button"
      className={`${
        outline
          ? "border border-darkred hover:bg-darkred dark:border-lightred dark:hover:bg-lightred text-darkred hover:text-cardlight dark:text-lightred dark:hover:text-carddark transition"
          : "bg-darkred hover:bg-marrslight active:bg-marrsdark dark:hover:bg-carrilight dark:active:bg-carridark dark:bg-lightred text-bglight"
      } py-2 px-3 rounded lg:text-xl ${className} outline-darkred dark:outline-lightred focus-visible:outline-double outline-offset-2`}
      href={href}
      target={`${targetBlank ? "_blank" : "_self"}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
