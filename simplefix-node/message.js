#!/usr/bin/env node
/*****************************************************************
SimpleFIX
Copyright (C) 2020, Jonathon Murphy.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*******************************************************************/

// Implements generic FIX protocol.
//
// Each message is a collection of tag+value pairs.  Tags are integers,
// but values are converted to strings when they're set (if not
// before).  The pairs are maintained in order of creation.  Duplicates
// and repeating groups are allowed.
//
// If tags 8, 9 or 10 are not supplied, they will be automatically
// added in the correct location, and with correct values.  You can
// supply these tags in the wrong order for testing error handling.

const { startOfHeaderString } = require('./constants')

module.exports = {

  convertToString: (value) => { // DONE
    /*
    Make a FIX value from a string, bytes, or number.
    Returns a string
    */
    if (Buffer.isBuffer(value) || typeof value == 'number') {
      return value.toString();
    } else if (typeof value == 'string') {
      return value;
    } else {
      console.error("This doesn't seem to be a number, string, or Buffer obj")
    }

  },

  FixMessage: class {
    /*
    FIX protocol message.

    FIX messages consist of an ordered list of tag=value pairs.  Tags
    are numbers, represented on the wire as strings.  Values may have
    various types, again all presented as strings on the wire.

    This class stores a FIX message: it does not perform any validation
    of the content of tags or values, nor the presence of tags required
    for compliance with a specific FIX protocol version.
    */

    constructor() {
      /* Initialise a FIX message.*/
      this.beginString = null;
      this.messageType = null;
      this.pairs = [];
      this.headerIndex = 0;
    }

    count() {
      /* Return the number of pairs in this message. */
      return this.pairs.length;
    }

    appendPair(tag, value, header=false) { // DONE
      /*
      Append a tag=value pair to this message.

      :param tag: Integer or string FIX tag number.
      :param value: FIX tag value.
      :param header: Append to header if True; default to body.

      Both parameters are explicitly converted to strings before
      storage, so it's ok to pass integers if that's easier for
      your program logic.

      Note: a 'null' value will be silently ignored, and
      no field is appended.
      */
      if (tag == null || value == null) {
        return;
      }

      if (tag == 8 || parseInt(tag) == 8) {
        this.beginString = module.exports.convertToString(value)
      }

      if (tag == 35 || parseInt(tag) == 35) {
        this.messageType = module.exports.convertToString(value)
      }

      if (header) {
        this.pairs.splice(this.headerIndex, 0, [module.exports.convertToString(tag), module.exports.convertToString(value)])
        this.headerIndex++;
      } else {
        this.pairs.push([module.exports.convertToString(tag), module.exports.convertToString(value)])
      }
    }

    // append_utc_datetime(tag, fmt, ts, precision, header) {
    //   /*(Internal) Append formatted datetime.*/
    //   // TODO: Finish this and the other append_time methods
    //   let t;
    //   if (ts == null) {
    //     t = new Date().getUTCDate()
    //   } else if (typeof ts == "number") {
    //     t = new Date(ts).getUTCDate()
    //   } else {
    //     t = ts
    //   }
    //
    //   s = t.
    // },
    //
    // append_utc_time(tag, timestamp=null, precision=3, header=false) {
    //   /*
    //   Append a field with a UTCTimestamp value.
    //
    //   :param tag: Integer or string FIX tag number.
    //   :param timestamp: Time value, see below.
    //   :param precision: Number of decimal places: 0, 3 (ms) or 6 (us).
    //   :param header: Append to FIX header if True; default to body.
    //
    //   The `timestamp` value should be a datetime, such as created by
    //   datetime.datetime.utcnow(); a float, being the number of seconds
    //   since midnight 1 Jan 1970 UTC, such as returned by time.time();
    //   or, None, in which case datetime.datetime.utcnow() is used to
    //   get the current UTC time.
    //
    //   Precision values other than zero (seconds), 3 (milliseconds),
    //   or 6 (microseconds) will raise an exception.  Note that prior
    //   to FIX 5.0, only values of 0 or 3 comply with the standard.
    //   */
    //
    // },

    appendString(field, header=false) { // DONE
      /*
      Append a tag=value pair in string format.

      :param field: String "tag=value" to be appended to this message.
      :param header: Append to header if True; default to body.

      The string is split at the first '=' character, and the resulting
      tag and value strings are appended to the message.
      */

      // Split into tag and value
      let bits = field.split('=');
      if (bits.length != 2) {
        throw "Field missing '=' separator.";
      }


      // Check that tag is an integer
      let tag_int = parseInt(bits[0])
      if (isNaN(tag_int)) {
        throw "Tag value must be an integer"
      }

      // Save
      this.appendPair(tag_int, bits[1], header=header)
    }

    appendStrings(stringList, header=false) { // Done
      // TODO: Add checker for stringList = array object
      /*
      Append tag=pairs for each supplied string.

      :param string_list: List of "tag=value" strings.
      :param header: Append to header if True; default to body.

      Each string is split, and the resulting tag and value strings
      are appended to the message.
      */
      for (let string of stringList) {
        this.appendString(string, header=header)
      }
    }

    appendData(lengthTag, valueTag, data, header=false) { // DONE
      /*
      Append raw data, possibly including a embedded SOH.

      :param lengthTag: Tag number for length field.
      :param valueTag: Tag number for value field.
      :param data: Raw data byte string.
      :param header: Append to header if True; default to body.

      Appends two pairs: a length pair, followed by a data pair,
      containing the raw data supplied.  Example fields that should
      use this method include: 95/96, 212/213, 354/355, etc.
      */

      this.appendPair(lengthTag, data.length, header=header)
      this.appendPair(valueTag, data, header=header)
    }

    get(tag, nth=1) { // DONE
      /*
      Return n-th value for tag.

      :param tag: FIX field tag number.
      :param nth: Index of tag if repeating, first is 1.
      :return: None if nothing found, otherwise value matching tag.

      Defaults to returning the first matching value of 'tag', but if
      the 'nth' parameter is overridden, can get repeated fields.
      */

      tag = module.exports.convertToString(tag);
      nth = parseInt(nth);

      for (let tagValuePair of this.pairs) {
        if (tagValuePair[0] == tag) {
          nth--
          if (nth == 0) {
            return tagValuePair[1]
          }
        }
      }
      return null
    }

    remove(tag, nth=1) { // DONE
      /*
      Remove the n-th occurrence of tag in this message.

      :param tag: FIX field tag number to be removed.
      :param nth: Index of tag if repeating, first is 1.
      :returns: Value of the field if removed, None otherwise.
      */

      tag = module.exports.convertToString(tag);
      nth = parseInt(nth);

      for (let i = 0; i < this.pairs.length; i++) {
        let tagValuePair = this.pairs[i]
        if (tag == tagValuePair[0]) {
          nth--
          if (nth == 0) {
            this.pairs.splice(i, 1)
            return tagValuePair[1]
          }
        }
      }
      return null
    }

    encode(raw=false) { // DONE
      /*
      Convert message to on-the-wire FIX format.

      :param raw: If True, encode pairs exactly as provided.

      Unless 'raw' is set, this function will calculate and
      correctly set the BodyLength (9) and Checksum (10) fields, and
      ensure that the BeginString (8), Body Length (9), Message Type
      (35) and Checksum (10) fields are in the right positions.

      This function does no further validation of the message content.
      */

      let array = [];
      let string = '';

      let importantTags = [8, 9, 35, 10];

      if (raw) {
      // Walk pairs, creating string.
        for (let tagValuePair of this.pairs) {
          string += tagValuePair[0] + '=' + tagValuePair[1] + startOfHeaderString;
        }
        return Buffer.from(string, 'utf8');
      }

      // Cooked
      for (let tagValuePair of this.pairs) {
        if (importantTags.includes(tagValuePair[0]) === true) {
          string += tagValuePair[0] + '=' + tagValuePair[1] + startOfHeaderString;
        }
      }

      // Prepend the message type.
      if (this.messageType == null) {
        console.error("No message type set")
      }

      string = '35=' + this.messageType + startOfHeaderString + string;

      // Calculate body length.
      //
      // From first byte after body length field, to the delimiter
      // before the checksum (which shouldn't be there yet).
      let bodyLength = string.length

      // Prepend begin-string and body-length.
      if (this.beginString == null) {
        console.error("No begin string set")
      }

      string = "8=" + this.beginString + startOfHeaderString +
        "9=" + module.exports.convertToString(bodyLength) + startOfHeaderString +
        string;

      // Calculate and append the checksum
      let checksum = 0;
      for (let character of string.split('')) {
        // console.log(character)
        checksum += character.charCodeAt(0);
      }

      string += "10=" + module.exports.convertToString(checksum % 256) + startOfHeaderString;

      return Buffer.from(string);


    }

  }
}
