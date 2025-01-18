// only work in product env
export default function ErrorBoundary({
  error,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <p>{error.message}</p>
    </div>
  );
}
