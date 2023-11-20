import { buildWebpack } from "@packages/build-config";
import path from "path";
import { Configuration, container } from "webpack";
import packageJson from "./package.json";

interface IEnvCfg {
  mode: "development" | "production";
  port?: number;
}

const webpackConfig = (env: IEnvCfg): Configuration => {
  const isDev = env.mode === "development";

  const config = buildWebpack({
    mode: env.mode || "development",
    port: env.port || 7002,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", "index.html"),
      icon: path.resolve(__dirname, "public", "favicon.png"),
      public: path.resolve(__dirname, "public"),
    },
  });

  const moduleFederation = new container.ModuleFederationPlugin({
    name: "admin", //  имя микрофронта контейнера
    filename: "remoteEntry.js", //  имя файла который будем подключать к хосту
    exposes: {
      // Здесь можем экспортировать компоненты для других приложений. (Что мы хотим предоставить контейнеру)
      "./Router": "./src/components/Router/Router.tsx",
    },
    shared: {
      // определяет модули, которые будут совместно использоваться (shared) между различными приложениями
      ...packageJson.dependencies,
      react: {
        eager: true, // загружать модуль сразу после того, как был загружен инициализирующий модуль
        requiredVersion: packageJson.dependencies["react"],
      },

      "react-router-dom": { eager: true, requiredVersion: packageJson.dependencies["react-router-dom"] },

      "react-dom": { eager: true, requiredVersion: packageJson.dependencies["react-dom"] },
    },
  });

  config.plugins.push(moduleFederation);

  return config;
};

export default webpackConfig;

