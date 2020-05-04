import { AddressInfo } from "net";
import app from './Presentation/index';

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.log(`Failure upon starting server.`);
    }
});