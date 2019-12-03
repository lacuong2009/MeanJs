"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ContactSchema_1 = require("../models/ContactSchema");
const Contact = mongoose.model('Contact', ContactSchema_1.ContactSchema);
/**
 * ContactController
 */
class ContactController {
    /**
     *
     * @param req
     * @param res
     */
    addNewContact(req, res) {
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
    getContacts(req, res) {
        Contact.find({}, (err, contact) => {
            if (err) {
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
    getContactWithID(req, res) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    /**
     * @param req
     * @param res
     */
    updateContact(req, res) {
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    /**
     * @param req
     * @param res
     */
    deleteContact(req, res) {
        Contact.remove({ _id: req.params.contactId }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=ContactController.js.map