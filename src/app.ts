import { Cat } from "./app.model";
import * as express from "express";

const app: express.Express = express();

const port = 8000;

app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ test: "heelo" });
});

// :id : 변수로 사용 가능
app.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const cats = Cat.find((cat) => {
      return cat.id === params.id;
    });

    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

app.post("/test", (req, res) => {
  res.send({ person: "yoon" });
});

// 404 middleware
app.use((req, res, next) => {
  console.log("EEROR");
  res.send({ error: "404 not found error" });
});

app.listen(port, () => {
  console.log(`Example App Listening at http://localhost:${port}`);
});
