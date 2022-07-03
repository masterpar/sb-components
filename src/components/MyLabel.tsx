import './mylabel.css'

export interface Props {
    /**
     * Este es el mensaje etiqueta
     */
    label: string
    /**
     * Tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3'
    /**
     * Capitulizar
     */
    allCaps: boolean
    /**
     * color
     * */
    color?: 'primary' | 'secondary' | 'tertiary'
    /**
     * color label
     * */
    fontColor?: string
    /**
     * Color de fondo
     * */
    backgroundColor?: string

}

const MyLabel = ({
                     label = 'No Label',
                     size = 'normal',
                    allCaps = false,
                    color = 'primary',
                    fontColor,
                    backgroundColor= ' transparent'
                 }: Props) => {
    return (
        <span
            className={`label ${ size } text-${ color } `}
            style={{ color: fontColor, backgroundColor }}
        >
          { allCaps ?  label.toUpperCase() : label }
        </span>
    );
};

export default MyLabel;
