export default function WelcomeBanner() {
  return (
    <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-lg">
      <h1 className="text-4xl font-bold">
        Welcome back 👋
      </h1>

      <p className="mt-3 max-w-2xl text-blue-100">
        Track your blood glucose, manage meals, monitor insulin,
        and build healthier habits every day.
      </p>
    </div>
  );
}