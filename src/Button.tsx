import styles from './Button.module.css';

export type ButtonType = 'primary' | 'ghost';
export type ButtonSize = 'default' | 'large';

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  type = 'primary',
  size = 'default',
  label,
  onClick,
  disabled = false,
}: ButtonProps) {
  const className = `${styles.button} ${styles[type]} ${styles[size]}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
