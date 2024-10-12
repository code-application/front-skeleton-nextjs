import Link from "next/link";

const HomePage: React.FC = async () => {
  const message = await (async () => {
    try {
      const response = await fetch("https://example.com/hello");
      const responseBody = await response.json();
      return responseBody.message;
    } catch (error) {
      console.error("API の呼び出しに失敗しました: ", error);
      return "Dummy message";
    }
  })();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>message: {message}</p>
      <p>API_BASE_URL: {process.env.NEXT_PUBLIC_API_BASE_URL}</p>
      <p>
        <Link
          href="/test-sample"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Go to Test Sample Page
        </Link>
      </p>
    </div>
  );
};

export default HomePage;
