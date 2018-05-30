import bodyParser from 'body-parser';
import path from 'path';

const router = (app) => {
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../../index.html'));
    })
}

export default router;