
export default function ImageGenerator({ profileUrl }: { profileUrl: string }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        opacity: 1,
        background: "linear-gradient(270.83deg, #FF7425 0%, #BA57E9 10.66%, #005AFF 100%)"

      }}
    >
      <div
        style={{
          display: "flex",
          padding:"16px 32px 0 60px",
          
        }}

      >
        <div style={{
          display: "flex",
          backgroundColor:"white",
          alignItems:"center",
          padding:"0px 32px 0px 32px",
          borderRadius:"24px 20px 52px 24px",
        }}> 
        <img src="https://intervee.s3.amazonaws.com/Group+36764.png" height={"50px"} width={"80px"}></img>
                <h1 style={{fontWeight:"800"}}>ConvoGrid</h1>
        </div>

        
      </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent:"center",
          alignItems:"center",
          opacity:0.3,
          border: "4px solid rgba(255, 255, 255, 1)", // Border color with opacity 1
          backgroundColor:"white",

          padding:"16px 32px 16px 32px",
          borderRadius:"16px"
        }}
      >
        <img src={profileUrl} alt="Bot" style={{ height: "250px",width:"250px" ,opacity:"1 !important",borderRadius:"16px"}} />
        <p style={{fontStyle:"bold",fontSize:"32px",fontWeight:"1200",color:"white",opacity:"1 !important"}}> Andrew Huberman</p>
      </div>
      </div>

    </div>
  );
}
