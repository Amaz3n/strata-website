import { ImageResponse } from "next/og"

export const alt = "Arc residential construction software"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          color: "#f8fafc",
          background:
            "radial-gradient(circle at 10% 0%, #1e3a8a 0%, #0f172a 42%, #020617 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: 2,
            opacity: 0.92,
          }}
        >
          ARC
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            Residential Construction Software
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#bfdbfe",
            }}
          >
            Pipeline, scheduling, financials, and warranty in one connected platform.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
