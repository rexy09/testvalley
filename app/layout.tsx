// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata = {
  title: "테스트밸리 - 전자제품 사는게 즐겁다",
  description:
    "새 상품 구매부터 체험, 검증된 중고, 수리비 보장, 합리적인 중고판매까지 전자제품의 모든 것을 함께 하세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={{ primaryColor: "teal" }}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
