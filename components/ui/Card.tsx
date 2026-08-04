type Props = {
  children: React.ReactNode;
};

export default function Card({
  children,
}: Props) {
  return (
    <div className="rounded-3xl bg-white border shadow-sm p-8 hover:shadow-xl transition">

      {children}

    </div>
  );
}
