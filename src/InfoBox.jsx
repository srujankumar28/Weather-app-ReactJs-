import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import "./InfoBox.css";

export default function InfoBox({info}) {
  const INIT_URL =
    "https://tse1.mm.bing.net/th?id=OIP.fiaM0Ro5LhoBgyuKJabw4gHaE7&pid=Api&P=0&h=180";
    const RAIN_URL="https://tse4.mm.bing.net/th?id=OIP.-GcxhRDDg1QjiXkyfTq13gHaE8&pid=Api&P=0&h=180";
    const HOT_URL="https://tse4.mm.bing.net/th?id=OIP.o1qmckAT9R2ECtRv3dUsgAAAAA&pid=Api&P=0&h=180";
    const COLD_URL="https://tse2.mm.bing.net/th?id=OIP.JZ3FnujXLigK4EKNBZ7s6gHaEK&pid=Api&P=0&h=180";
 
  return (
    <div className="InfoBox">
     
      <div className="cardcontainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature= {info.temp}&deg;C</p>
            <p>Humidity= {info.humidity}</p>
            <p>Min Temp= {info.tempMin}&deg;C</p>
            <p>Max Temp= {info.tempmax}&deg;C</p>
            <p>
              The weather can be described as <i>{info.weather}</i> and feels
              like {info.feelsLike}&deg;C
            </p>

            <p></p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
