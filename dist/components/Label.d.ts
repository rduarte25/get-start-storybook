/// <reference types="react" />
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
export declare const Label: ({ label, size, AllCaps, color, fontColor, backgroundColor, ...props }: LabelProps) => JSX.Element;
