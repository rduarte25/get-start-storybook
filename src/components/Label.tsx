import "./label.css";

export interface LabelProps {
  /**
   * capitalize the text
   */
  AllCaps?: boolean;
  /**
   * Choose the color of the text
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * This is the color of the label
   */
  fontColor?: string;
  /**
  * This is the content of the label
  */
  label?: string;
  /**
   * These are the types of labels
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * This is the background color of the label
   */
  backgroundColor?: string;
}

/**
 * Hashtag
 */
export const Label = ({
  label   = "No label",
  size    = "normal",
  AllCaps = false,
  color   = "primary",
  fontColor = 'black',
  backgroundColor = 'transparent',
  ...props
}: LabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor, backgroundColor }} >
      {AllCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};
