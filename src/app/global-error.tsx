"use client";

interface ErrorProps {
  error: {
    message: string;
  };
}

const GlobalError: React.FC<ErrorProps> = ({ error }) => {
  if (error.message.includes("400")) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Bad Request (400)</h1>
        <p className="mt-4">リクエストが不正です。</p>
      </div>
    );
  }

  if (error.message.includes("500")) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Server Error (500)</h1>
        <p className="mt-4">サーバーエラーが発生しました。</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Unexpected Error</h1>
      <p className="mt-4">{error.message}</p>
    </div>
  );
};

export default GlobalError;
