import { AcademicCapIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="md:h-50 flex h-20 shrink-0 items-end rounded-lg bg-yellow-500 p-4">
        <AcademicCapIcon height={50} />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6  rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-5">
          <AcademicCapIcon height={80} />
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to TodoViewstats.</strong> Where we are going to use
            server components for the state management.
          </p>
          <Link
            href="/login"
            className="flex gap-5 place-self-center rounded-lg bg-yellow-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-yellow-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
