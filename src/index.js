import { app, port } from "./app.js";

app.listen(port, () => {
    console.log(`Regions API is running on port ${port}`);
});
