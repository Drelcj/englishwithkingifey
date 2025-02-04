import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Link href={href} passHref>
      <button className="btn btn-link font-normal w-full text-sm">
        {label}
      </button>
    </Link>
  )
}


