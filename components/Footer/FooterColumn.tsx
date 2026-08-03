interface Props {
  title: string;
  items: string[];
}

export default function FooterColumn({
  title,
  items,
}: Props) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-slate-400 transition hover:text-[#19D3B4]"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}