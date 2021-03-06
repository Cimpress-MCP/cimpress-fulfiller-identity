/**
 * Objects of fulfiller class are either required or returned by the methods of the FulfillerIdentityClient.
 */
class Fulfiller {

  constructor(fulfillerId, internalFulfillerId, name, email, phone, language, links, archived = false) {
    this._fulfillerId = fulfillerId;
    this._internalFulfillerId = internalFulfillerId;
    this._name = name;
    this._email = email;
    this._phone = phone;
    this._language = language;
    this._archived = archived || false;
    this._links = links;
  }

  /**
   * Returns the fulfiller id.
   * @returns {*}
   */
  get fulfillerId() {
    return this._fulfillerId;
  }

  /**
   * Returns the internal fulfiller id.
   * @returns {*}
   */
  get internalFulfillerId() {
    return this._internalFulfillerId;
  }

  /**
   * Returns the name of the fulfiller.
   * @returns {*}
   */
  get name() {
    return this._name;
  }

  /**
   * Changes the name of the fulfiller in the object.
   * @param value
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Returns the fufliller contact point email address.
   * @returns {*}
   */
  get email() {
    return this._email;
  }

  /**
   * Sets the fuliller contact point email address in the object.
   * @param value
   */
  set email(value) {
    this._email = value;
  }

  /**
   * Gets the fulfiller contact point phone number.
   * @returns {*}
   */
  get phone() {
    return this._phone;
  }

  /**
   * Sets the fulfiller contact point phone number in the object.
   * @param value
   */
  set phone(value) {
    this._phone = value;
  }

  /***
   * Gets the fulfiller perferred language
   * @returns {*}
   */
  get language() {
    return this._language;
  }

  /**
   * Sets the fulfiller preferred language in the object.
   * @param value
   */
  set language(value) {
    this._language = value;
  }

  /**
   * Gets the flag indicating whether the fulfiller is archived.
   * @returns {boolean|*}
   */
  get archived() {
    return this._archived;
  }

  /**
   * Sets the fulfiller as archived in the object.
   * @param {boolean|*} value
   */
  set archived(value) {
    this._archived = value;
  }

  getSecurityGroupUrl() {
    return this._links && this._links.fulfillerCoamAdminGroup ? this._links.fulfillerCoamAdminGroup.href : null;
  }

  getLogoUrl() {
    return this._links && this._links.fulfillerLogo ? this._links.fulfillerLogo.href : null;
  }

  getFulfillerContactsUrl() {
    return this._links && this._links.fulfillerContacts ? this._links.fulfillerContacts.href : null;
  }

  getFulfillerFulfillmentLocationsUrl() {
    return this._links && this._links.fulfillmentLocations ? this._links.fulfillmentLocations.href : null;
  }

  toJSON() {
    return {
      fulfillerId: this.fulfillerId,
      internalFulfillerId: this.internalFulfillerId,
      name: this.name,
      email: this.email,
      phone: this.phone,
      language: this.language,
      archived: this.archived
    };
  }

}

module.exports = Fulfiller;