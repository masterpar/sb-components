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

}

const MyLabel = ({
                     label = 'No Label',
                     size = 'normal',
                    allCaps = false,
                    color = 'primary',
                    fontColor
                 }: Props) => {
    return (
        <span
            className={`label ${ size } text-${ color } `}
            style={{ color: fontColor}}
        >
          { allCaps ?  label.toUpperCase() : label }
        </span>
    );
};

export default MyLabel;
