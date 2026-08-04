import Link from "next/link";

type Props = {
  items: {
    label: string;
    href?: string;
  }[];
};

export default function Breadcrumb({
  items,
}: Props) {
  return (
    <nav className="text-sm text-gray-500">

      {items.map((item, index) => (
        <span key={item.label}>

          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-green-700"
            >
              {item.label}
            </Link>
          ) : (
            item.label
          )}

          {index < items.length - 1 && " / "}

        </span>
      ))}

    </nav>
  );
}
