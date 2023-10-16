import { AppProps, type Handlers } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fresh Image Plugin Demo</title>
        <link href="/style.css" rel="stylesheet" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
