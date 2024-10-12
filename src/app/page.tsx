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
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p>message: {message}</p>
      <p>API_BASE_URL: {process.env.NEXT_PUBLIC_API_BASE_URL}</p>
      <p className="mb-4">
        <Link
          href="/test-sample"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Go to Test Sample Page
        </Link>
      </p>
      <p>
        <Link
          href="/daisyui-sample"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Go to daisyUI Sample Page
        </Link>
      </p>
    </div>
  );
};

export default HomePage;
