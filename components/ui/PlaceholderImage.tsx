type PlaceholderImageProps = {
  className?: string;
};

export function PlaceholderImage({ className }: PlaceholderImageProps) {
  return (
    <div aria-hidden="true" className={`bg-navy-950/[0.04] ${className ?? ""}`} />
  );
}
