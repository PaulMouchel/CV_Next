import Link from 'next/link'
import { useRouter } from 'next/router'

const Tab = ({children, path, className, style}) => {
    const router = useRouter()

    return (
        <Link href={path}>
            <a>
                <li 
                className={`px-3 block md:inline ${router.pathname === path && "text-red"} ${className}`} 
                style={style}>
                    {children}
                </li>
            </a>
        </Link>
    )
}

export default Tab;