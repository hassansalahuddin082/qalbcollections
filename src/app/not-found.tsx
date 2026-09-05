import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-6xl font-bold text-maroon">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink">
        This page has run out of time.
      </h1>
      <p className="mt-2 text-sm text-ink/60">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-cream transition-transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
