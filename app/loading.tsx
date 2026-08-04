export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">

      <div className="flex flex-col items-center">

        <div className="h-16 w-16 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>

        <p className="mt-6 text-gray-600">

          Loading...

        </p>

      </div>

    </div>
  );
}
