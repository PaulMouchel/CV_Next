import Link from 'next/link'
import { useRouter } from 'next/router'

const Tab = ({children, path}) => {
    const router = useRouter()

    return (
        <li className={`mx-3 hidden md:inline ${router.pathname === path && "text-red"}`}><Link href={path}><a>{children}</a></Link></li>
    )
}

export default Tab;