import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/ContactSchema';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

/**
 * ContactController
 */
export class ContactController {
    /**
     *
     * @param req
     * @param res
     */
    public addNewContact(req: Request, res: Response) {
        let newContact = new Contact(req.body);

        newContact.save((err, contact) => {
            if (err) {
                res.send(err);
            }

            res.json(contact);
        });
    }

    /**
     * Get all contacts
     * @param req
     * @param res
     */
    public getContacts (req: Request, res: Response) {
        Contact.find({}, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    /**
     *
     * @param req
     * @param res
     */
    public getContactWithID (req: Request, res: Response) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    /**
     * @param req
     * @param res
     */
    public updateContact (req: Request, res: Response) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    /**
     * @param req
     * @param res
     */
    public deleteContact (req: Request, res: Response) {
        Contact.remove({ _id: req.params.contactId }, (err, contact) => {
            if(err){
                res.send(err);
            }

            res.json({ message: 'Successfully deleted contact!'});
        });
    }
}