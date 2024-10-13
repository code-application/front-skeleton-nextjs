import type { FC } from "react";

/**
 * TSDocSampleのプロパティ
 */
export interface TSDocSampleProps {
  /** コンポーネントに表示するタイトル */
  title: string;
  /** タイトルの下に表示するオプションのサブタイトル */
  subtitle?: string;
}

/**
 * タイトルとオプションのサブタイトルを表示するサンプルコンポーネント
 *
 * @example
 * ```tsx
 * <TSDocSample title="Hello, World!" subtitle="This is a subtitle." />
 * ```
 */
export const TSDocSample: FC<TSDocSampleProps> = ({
  title,
  subtitle,
}: TSDocSampleProps): JSX.Element => {
  return (
    <div className="p-4 border rounded shadow">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <h2 className="text-xl text-gray-600">{subtitle}</h2>}
    </div>
  );
};

export default TSDocSample;
