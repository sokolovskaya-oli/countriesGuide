"use client";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { useState } from "react";

export default function StyledComponentsRegistry({ children }) {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });

  return (
    <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
  );
}
