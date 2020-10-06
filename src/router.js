import express from 'express';

const router = express.Router();

router.get('/health-check', (req, res) => {
    res.send("I am OK");
});

export default router;