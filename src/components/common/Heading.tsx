import icon from '../../assets/icon/headingicon.svg'
interface Prop {
    label: string,
    className?: string,
    isIcon?: boolean
}
const Heading = ({ label, className, isIcon = false }: Prop) => {
    return (
        <div>
            <h1 className={`text-sm flex items-center gap-2 text-gray-900 ${className}`}>
                {
                    isIcon && <span><img src={icon} width={30} /></span>
                }

                {label}
            </h1>
        </div>
    )
}

export default Heading