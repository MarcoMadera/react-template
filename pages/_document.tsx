import { Head, Main, NextScript, Html } from "next/document";
import { ReactElement } from "react";

export default function Document(): ReactElement {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div>
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
