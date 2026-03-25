/**
 * Botão estilizado como âncora <a>; repassa props extras para o link.
 */
import styles from "../Button/button.module.css"

const Button = ({ link, children, ...props }) => {
    return (
        <div className={styles.WrapperButton}>
            <a href={link} className={styles.linkBtn} {...props}>
                {children || 'Clique aqui'}
            </a>
        </div>
    )
}
export default Button;