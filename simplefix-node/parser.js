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
const data = require("./data.js")
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

      // Parsed "tag=value" pairs, removed from the buffer, but not
      // yet returned as a message.
      this.pairs = [];

      // Copy raw field length tags.
      this.raw_len_tags = data.RAW_LEN_TAGS();

      // Copy raw field data tags.
      this.raw_data_tags = data.RAW_DATA_TAGS();

      // Parsed length of data field.
      this.raw_len = 0;

      // Stop tag (default).
      this.stop_tag = default_stop_tag;

      // Stop character (optional).
      this.stop_char = null;

    } // End of constructor

    

  } // End of FixParser class

} // End of module.exports
