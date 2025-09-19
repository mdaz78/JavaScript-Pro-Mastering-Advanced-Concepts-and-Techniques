/**
 * Getters and Setters exercise
 *
 * Create a class UserProfile that encapsulates a user's profile information.
 *
 * This class should have fields for username, email, and birthdate. Use getters
 * and setters when creating these fields. Use setters to validate that the
 * username is a non-empty string, the email includes an '@' symbol, and the
 * birthdate is a valid date string.
 *
 * If the username is an empty string or not a string - throw an error with the
 * message of 'Invalid username.'
 *
 * If the email does not include a @ character - throw an error with the message
 * of 'Invalid email.'
 *
 * If the birthdate is not a valid date string, throw an error with the message of
 * 'Invalid birthdate.' - Note that the valid expected date string format is
 * YYYY-MM-DD . For example, '1990-12-31' is a valid date string.

 * Make sure to also use the setters that you write (with the implemented
 * validations) in the constructor function of the class, so it also validates
 * the fields when the object is initially created from the class (i.e., when the
 * constructor function is initially executed).
 */

class UserProfile {
  #username;
  #email;
  #birthdate;

  constructor(userName, email, birthdate) {
    this.username = userName;
    this.email = email;
    this.birthdate = birthdate;
  }

  get username() {
    return this.#username;
  }

  get email() {
    return this.#email;
  }

  get birthdate() {
    return this.#birthdate;
  }

  set username(userName) {
    if (typeof userName !== 'string' || userName.length <= 0) {
      throw new Error('Invalid username.');
    } else {
      this.#username = userName;
    }
  }

  set email(email) {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (email.length > 254 || !emailRegex.test(email)) {
      throw new Error('Invalid email.');
    } else {
      this.#email = email;
    }
  }

  set birthdate(birthdate) {
    if (typeof birthdate !== 'string') {
      throw new Error('Invalid birthdate.');
    }

    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(birthdate)) {
      throw new Error('Invalid birthdate.');
    }

    const parts = birthdate.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    const date = new Date(Date.UTC(year, month - 1, day));

    if (
      date.getUTCFullYear() !== year ||
      date.getUTCMonth() !== month - 1 ||
      date.getUTCDate() !== day
    ) {
      throw new Error('Invalid birthdate.');
    }

    this.#birthdate = birthdate;
  }
}
