#!/usr/bin/env node
/*****************************************************************
SimpleFIX
Copyright (C) 2017-2020, David Arnold.

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

const constants = require("./constants.js");
const message = require("./message.js");
const data = require("./data.js");


// By default, messages are terminated by the Checksum (10) tag.
const default_stop_tag = 10;

module.exports = {

  FixParser: class {
    /*
    FIX protocol message parser.

    This class translates FIX application messages in raw (wire)
    format into instance of the FixMessage class.

    It does not perform any validation of the fields, their presence
    or absence in a particular message, the data types of fields, or
    the values of enumerations.

    It is suitable for streaming processing, accumulating byte data
    from a network connection, and returning complete messages as they
    are delivered, potentially in multiple fragments
    */

    constructor(this) {

      // Internal buffer used to accumulate message data.
      this.buffer = '';

      // Parsed "tag=value" pairs, removed from the buffer, but not
      // yet returned as a message.
      this.pairs = [];

      // Copy raw field length tags.
      this.rawLengthTags = data.rawLengthTags();

      // Copy raw field data tags.
      this.rawDataTags = data.rawDataTags();

      // Parsed length of data field.
      this.rawLength = 0;

      // Stop tag (default).
      this.stopTag = default_stop_tag;

      // Stop character (optional).
      this.stopCharacter = null;

    } // End of constructor

    addRaw(lengthTag, valueTag) { // TEST
      /*
      Define the tags used for a private raw data field.

      :param length_tag: tag number of length field.
      :param value_tag: tag number of value field.

      Data fields are not terminated by the SOH character as is usual for
      FIX, but instead have a second, preceding field that specifies the
      length of the value in bytes.  The parser is initialised with all the
      data fields defined in FIX.5.0, but if your application uses private
      data fields, you can add them here, and the parser will process them
      correctly.
      */
      this.rawLengthTags.append(lengthTag);
      this.rawDataTags.append(valueTag);
    }

    removeRaw(lengthTag, valueTag) { // TEST
      /*
      Remove the tags for a data type field.

      :param length_tag: tag number of the length field.
      :param value_tag: tag number of the value field.

      You can remove either private or standard data field definitions in
      case a particular application uses them for a field of a different
      type.
      */

      for (let i = 0; i < this.rawLengthTags.length; i++) {
        let currentLengthTag = this.rawLengthTags[i]
        if (lengthTag == currentLengthTag) {
          this.rawLengthTags.splice(i, 1)
        }
      }

      for (let i = 0; i < this.rawDataTags.length; i++) {
        let currentDataTag = this.rawDataTags[i]
        if (valueTag == currentLengthTag) {
          this.rawLerawDataTagsngthTags.splice(i, 1)
        }
      }

    }

    reset() { // TEST
      /*
      Reset the internal parser state.

      This will discard any appended buffer content, and any fields
      parsed so far.
      */

      this.buffer = '';
      this.pairs = [];
      this.rawLength = 0;

    }

    setMessageTerminator(tag=null, character=null) { // TODO
      /*
      Set the end-of-message detection scheme.

      :param tag: FIX tag number of terminating field.  Default is 10.
      :param char: Alternative, terminating character.

      By default, messages are terminated by the FIX Checksum (10)
      field.  This can be changed to use a different tag, or a reserved
      character using this function.

      Note that only one of 'tag' or 'char' should be set, using a
      named parameter.
      */

      if (tag && char) {
        console.error("Only supply one of 'tag' or 'char'.")
      } else if (!tag && !char) {
        console.error("Please supply either 'tag' or 'char'.")
      } else if (tag) {
        this.stopTag = tag
        this. stopCharacter = null
      } else {
        this.stopTag = null
        // No idea how to do t his in Node
        // let bs = char.encode() if type(char) is str else char // From Python
        // self.stop_char = bs[0] // From Python
      }



    }

    appendBuffer(buffer) { // TEST
      /*
      Append a byte string to the parser buffer.

      :param buf: byte string to append.

      The parser maintains an internal buffer of bytes to be parsed.
      As raw data is read, it can be appended to this buffer.  Each
      call to get_message() will try to remove the bytes of a
      complete messages from the head of the buffer.
      */

      this.buffer += convertToString(buffer)

    }

    getBuffer() { // TEST
      /*
      Return a reference to the internal buffer.
      */
      return this.buffer;
    }

    getMessage() { // TODO
      /*Process the accumulated buffer and return the first message.

      If the buffer starts with FIX fields other than BeginString
      (8), these are discarded until the start of a message is
      found.

      If no BeginString (8) field is found, this function returns
      None.  Similarly, if (after a BeginString) no Checksum (10)
      field is found, the function returns None.

      Otherwise, it returns a simplefix.FixMessage instance
      initialised with the fields from the first complete message
      found in the buffer.*/

      // Break buffer into tag=value pairs
      let start = 0;
      let point = 0;
      let inTag = true;
      let tag = 0;

      while (point < this.buffer.length) {
        let c = Buffer.from(buffer.charAt(point), 'utf8');
        if (inTag && c == equalByte) {
          let tagString = this.buffer.slice(start, point);
          point++;

          tag = parseInt(tagString)
          if (this.rawDataTags.contains(tag) && this.rawLength > 0) {
            if (this.rawLength > this.buffer.length - point) {
              return;
            } else {
              // let value = this.buffer(something something)
              this.pairs.append([tag, value]);
              // this.buffer = this.buffer[point + self.raw_len + 1:]
              point = 0;
              this.rawLength = 0;
              start = point;
            }
          } else {
            inTag = false;
            start = point;
          }
        } else if (c == this.stopCharacter) {
          if (start != point) {
            value = this.buffer.slice(start, point);
            this.pairs.push([tag, value]);
            this.buffer = this.buffer.slice(point + 1,)
          } else {
            this.buffer = this.buffer.splice(1,)
          }
          return;
        } else if (c = constants.startOfHeaderString) {
          value = this.buffer.splice(start, point);
          this.pairs.push([tag, value]);
          this.buffer = this.buffer.slice(point + 1,)
          if (tag == this.stopTag) {
            return;
          }
          start = 0;
          point = -1;
          inTag = true;
          if (this.rawLengthTags.contains(tag)) {
            this.rawLength = parseInt(value);
          }
        }
        point++;
      }
      // Check first pair is FIX BeginString.
      while (this.pairs && this.pairs[0][0] != 8) {
        // Discard pairs until we find the beginning of a message.
        // TODO I think this is where the missing heartbeat bug might be 
        this.pairs.pop(0)
      }
      if () {

      }
      if () {

      }
      for () {

      }

      return m;

    }



  } // End of FixParser class

} // End of module.exports
