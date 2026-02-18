import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { CgClose } from 'react-icons/cg'
import Image from "next/image";

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
    const pathname = usePathname();

    useEffect(() => {
        closeNav();
    }, [pathname, closeNav]);

    return (
        <div>
            <div
                onClick={closeNav}
                className={`fixed inset-0 transition-all duration-500 z-[1001] bg-black/60
                ${showNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />

            <div className={`fixed top-0 left-0 ${navOpen} h-full transform transition-all duration-500
            w-[75%] sm:w-[55%] bg-primary z-[1050] flex flex-col`}>

                <div className="flex items-center justify-between px-8 py-6 border-b border-white/20">
                    <Image src="/Logo.png" alt="Logo" width={100} height={50} className="object-contain" />
                    <CgClose
                        onClick={closeNav}
                        className='cursor-pointer w-6 h-6 text-white hover:text-secondary transition-colors duration-200'
                    />
                </div>

                <nav className="flex flex-col px-8 py-8 space-y-2">
                    {navLinks.map((link, index) => (
                        <Link key={link.id} href={link.url}>
                            <p className={`text-white text-lg font-light py-3 border-b border-white/10
                            hover:text-secondary hover:pl-2 transition-all duration-200`}
                                style={{ animationDelay: `${index * 50}ms` }}>
                                {link.label}
                            </p>
                        </Link>
                    ))}
                </nav>

                <div className="mt-auto px-8 pb-10">
                    <Link
                        href="/mizac-tipleri"
                        className="block text-center rounded py-3 px-6 text-white text-sm
                        bg-secondary hover:bg-hover transition-all duration-200"
                    >
                        Mizaç Tipini Keşfet
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MobileNav