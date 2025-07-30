import "./global.css";
import StyledComponentsRegistry from "./lib/registry";
import ThemeProviders from "./providers/ThemeProviders";
import { ApolloProviders } from "./providers/ApolloProviders";
import ThemeToggle from "./components/ThemeToggle";

export const metadata = {
  title: "Country List",
  description: "Next.js + Apollo + Dark/Light Theme",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ApolloProviders>
            <ThemeProviders>
              <ThemeToggle />
              {children}
            </ThemeProviders>
          </ApolloProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
