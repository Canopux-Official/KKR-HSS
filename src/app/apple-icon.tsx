import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#5C1A2E",
          color: "#B8956A",
          fontSize: 96,
          fontWeight: 700,
        }}
      >
        K
      </div>
    ),
    { ...size }
  );
}
