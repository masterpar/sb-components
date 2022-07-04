/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
     * Este es el mensaje etiqueta
     */
    label: string;
    /**
     * Tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitulizar
     */
    allCaps: boolean;
    /**
     * color
     * */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * color label
     * */
    fontColor?: string;
    /**
     * Color de fondo
     * */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: Props) => JSX.Element;
