
export default function ImageGenerator({ profileUrl }: { profileUrl: string }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexWrap: "nowrap",
        backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={profileUrl} alt="Bot" style={{ height: "500px", margin: "0 75px" }} />
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 40,
          fontStyle: "normal",
          color: "black",
          marginTop: 30,
          lineHeight: 1.8,
          whiteSpace: "pre-wrap",
        }}
      >
        <b>Convogrid</b>
      </div>
    </div>
  );
}
