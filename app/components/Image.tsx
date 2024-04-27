export default function ImageGenerator({ profileUrl }: { profileUrl: string }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        opacity: 1,
        background: "linear-gradient(270.83deg, #FF7425 0%, #BA57E9 0%, #005AFF 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "16px 32px 0 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            alignItems: "center",
            padding: "0px 32px 0px 32px",
            borderRadius: "20px 20px 42px 20px",
          }}
        >
          <img src="https://intervee.s3.amazonaws.com/Group+36764.png" height={"50px"} width={"80px"}></img>
          <h1 style={{ fontWeight: "800" }}>ConvoGrid</h1>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    border: "4px solid white", // Border color with full opacity
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Grey color with 50% opacity

    marginTop: "54px",
    padding: "16px 16px 16px 16px",
    borderRadius: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow for better contrast
  }}
>
  <img src={profileUrl} alt="Bot" style={{ height: "200px", width: "200px", opacity: "1 !important", borderRadius: "16px" }} />
  <p style={{ fontStyle: "bold", fontSize: "32px", fontWeight: "bold", color: "white", opacity: "1 !important" }}>Andrew Huberman</p>
</div>
      </div>
    </div>
  );
}
