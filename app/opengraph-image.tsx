import { ImageResponse } from "next/og";

export const alt = "Éclat de Noor MedAesthetic Manager Vorschau";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#f5f0e8",
          color: "#2a1b14",
          fontFamily: "Georgia, serif",
          padding: 42,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            border: "2px solid #d8b28f",
            borderRadius: 48,
            background: "#fbf7f0",
            padding: 50,
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", right: -20, top: 10, width: 340, height: 340, borderRadius: 999, background: "#d8b28f", opacity: 0.42 }} />
          <div style={{ position: "absolute", left: 44, bottom: -70, width: 300, height: 300, borderRadius: 999, background: "#ead8c4", opacity: 0.78 }} />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "68%" }}>
            <div style={{ fontFamily: "Arial, sans-serif", fontSize: 26, fontWeight: 700, letterSpacing: 4, color: "#8a563d", marginBottom: 34 }}>ÉCLAT DE NOOR</div>
            <div style={{ fontSize: 78, lineHeight: 0.95, fontWeight: 500 }}>MedAesthetic</div>
            <div style={{ fontSize: 78, lineHeight: 1.08, fontWeight: 500 }}>Manager</div>
            <div style={{ fontFamily: "Arial, sans-serif", fontSize: 31, color: "#6f5a4d", marginTop: 28 }}>Fotodokumentation · Aufklärung · Reminder · Termine</div>
            <div style={{ display: "flex", width: 430, height: 64, alignItems: "center", justifyContent: "center", borderRadius: 32, background: "#3b261d", color: "#ead6c1", fontFamily: "Arial, sans-serif", fontSize: 24, fontWeight: 700, marginTop: 52 }}>
              DSGVO-orientiert für DACH-Praxen
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32%" }}>
            <div style={{ width: 250, height: 360, borderRadius: 42, background: "#2a1b14", padding: 14, display: "flex" }}>
              <div style={{ flex: 1, borderRadius: 34, background: "#f5f0e8", padding: 18, display: "flex", flexDirection: "column", justifyContent: "center", gap: 22 }}>
                <div style={{ display: "flex", borderRadius: 24, background: "#fbf7f0", border: "1px solid #d8b28f", padding: 18, gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 20, background: "#744532" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                    <div style={{ height: 10, borderRadius: 5, background: "#744532", opacity: 0.72 }} />
                    <div style={{ height: 8, width: 102, borderRadius: 4, background: "#725746", opacity: 0.55 }} />
                  </div>
                </div>
                <div style={{ alignSelf: "flex-end", width: 144, borderRadius: 22, background: "#3b261d", padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ height: 8, borderRadius: 4, background: "#ead6c1" }} />
                  <div style={{ height: 8, width: 74, borderRadius: 4, background: "#d8b28f" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
