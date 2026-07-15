import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

async function loadPlayfairBold() {
  return readFile(
    join(
      process.cwd(),
      "node_modules/@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff"
    )
  );
}

export async function buildShareImage(size: { width: number; height: number }) {
  const playfairBold = await loadPlayfairBold();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 28px",
            borderRadius: 999,
            border: "2px solid #EAEAEA",
            color: "#999999",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          Plataforma Digital
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Playfair Display",
            fontWeight: 700,
            fontSize: 128,
            color: "#111111",
            letterSpacing: -2,
          }}
        >
          LS Store
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#999999",
          }}
        >
          O futuro do varejo digital
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Playfair Display",
          data: playfairBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
