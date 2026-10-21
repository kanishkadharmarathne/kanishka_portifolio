import Link from "next/link";

const Navlink = ({href, title, active, onClick}) => {
    return (
        <Link
            href = {href}
            onClick={onClick}
            className={`relative block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                active ? "text-ink bg-white/[0.06]" : "text-muted hover:text-ink"
            }`}
        >
            {title}
            {active && (
                <span className="absolute inset-x-3 -bottom-px h-px bg-linear-to-r from-accent to-accent-2" />
            )}
        </Link>

    );
};

export default Navlink;
