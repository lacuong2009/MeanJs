"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContactController_1 = require("../controllers/ContactController");
const cors = require("cors");
class Routes {
    constructor() {
        this.contactController = new ContactController_1.ContactController();
    }
    routes(app) {
        //options for cors midddleware
        const options = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
            preflightContinue: false
        };
        app.use(cors(options));
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        app.route('/contact')
            .get(this.contactController.getContacts)
            .post(this.contactController.addNewContact);
        app.route('/contact/:contactId')
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map