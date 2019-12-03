import {Request, Response} from "express";
import { ContactController } from "../controllers/ContactController";
import * as cors from "cors";

export class Routes {
    public contactController: ContactController = new ContactController();


    public routes(app): void {
        //options for cors midddleware
        const options: cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
            preflightContinue: false
        };

        app.use(cors(options));

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            });

        app.route('/contact')
            .get(this.contactController.getContacts)
            .post(this.contactController.addNewContact);

        app.route('/contact/:contactId')
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact)
    }
}