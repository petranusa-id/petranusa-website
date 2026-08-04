type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  center = true,
}: Props) {
  return (
    <div className={center ? "text-center" : ""}>

      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 max-w-3xl text-gray-600 mx-auto leading-8">
          {subtitle}
        </p>
      )}

    </div>
  );
}
