import express from 'express';

import { BACKEND_URL } from "@repo/common/common";

const app = express();


console.log({ BACKEND_URL });

app.get('/', (req, res) => {
    return res.json({
        message: "body"
    })
})

app.listen(8080, () => {
    console.log('server running on 3000');
})