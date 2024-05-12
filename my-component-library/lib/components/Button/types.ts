export type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
  label : string;
  isLoading?: boolean;
};
