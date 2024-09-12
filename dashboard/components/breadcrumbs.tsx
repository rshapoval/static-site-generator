import Link from "next/link";

interface BreadcrumbsLink {
  text: string;
  url?: string;
}

interface BreadcrumbsProps {
  links: BreadcrumbsLink[];
}

export default function Breadcrumbs({ links }: BreadcrumbsProps) {
  return (
    <ul className="mr-2 mb-4">
      {links.map((link, i) => (
        <li key="i">
          {!link.url ? (
            <span>{link.text}</span>
          ) : (
            <Link href={link.url || "#"}>{link.text}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
