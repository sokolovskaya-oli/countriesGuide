import ThemeToggle from "./components/ThemeToggle";
import StyledComponentsRegistry from "./lib/registry";
import ApolloProviders from "./providers/ApolloProviders";
import ThemeProviders from "./providers/ThemeProviders";

export const metadata = {
  title: "Countries App",
  description: "List of countries using GraphQL API",
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
