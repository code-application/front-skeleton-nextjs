import fs from "node:fs";
import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {};

/**
 * 環境変数を読み込む
 *
 * @param {string} profile プロファイル名
 */
const loadEnv = (profile) => {
  const envFilePath = path.resolve(`./env/env.${profile}.json`);
  const env = {
    ...JSON.parse(fs.readFileSync(envFilePath, "utf-8")),
    NEXT_PUBLIC_PROFILE: profile,
  };

  for (const [key, value] of Object.entries(env)) {
    process.env[key] = value;
  }
};

// デフォルトでは開発環境上での動作を想定している
loadEnv(process.env.PROFILE || "dev");

export default nextConfig;
