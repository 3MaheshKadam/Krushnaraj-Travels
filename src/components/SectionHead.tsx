export default function SectionHead({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mb-10 max-w-[62ch]">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent-strong">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-primary-strong md:text-3xl">
        {title}
      </h2>
      {body ? <p className="mt-3 text-base text-ink-soft">{body}</p> : null}
    </div>
  );
}
