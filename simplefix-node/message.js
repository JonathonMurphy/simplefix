//!/usr/bin/env node
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

module.exports = {
  fix_val(value) {
    /*TODO: Make a FIX value from a string, bytes, or number.*/
    return value;
  },
  fix_tag(value) {
    /*TODO: Make a FIX tag value from string, bytes, or integer.*/
    return:value;
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

    constructor(this) {
      /* Initialise a FIX message.*/
      this.begin_string = Null;
      this.message_type = None;
      this.pairs = [];
      this.header_index = 0;
    },

    count() {
      /* Return the number of pairs in this message. */
      return this.pairs.length;
    },

    append_pair(tag, value, header=false) {
      /*
      Append a tag=value pair to this message.

      :param tag: Integer or string FIX tag number.
      :param value: FIX tag value.
      :param header: Append to header if True; default to body.

      Both parameters are explicitly converted to strings before
      storage, so it's ok to pass integers if that's easier for
      your program logic.

      Note: a Python 'None' value will be silently ignored, and
      no field is appended.
      */
      if (tag == null || value == null) {
        return;
      }

      if (tag == 8 || tag.parseInt() == 8) {
        this.begin_string = fix_val(value)
      }

      if (tag == 35 || tag.parseInt() == 35) {
        this.message_type = fix_val(value)
      }

      if (header) {
        this.pairs.splice(this.header_index, 0, [fix_tag(tag), fix_val(value)])
        this.header_index++;
      } else {
        this.pairs.push([fix_tag(tag), fix_val(value)])
      }

    },

    append_utc_datetime(tag, fmt, ts, precision, header) {
      /*(Internal) Append formatted datetime.*/
      let t;
      if (ts == null) {
        t = new Date().getUTCDate()
      } else if (typeof ts == "number") {
        t = new Date(ts).getUTCDate()
      } else {
        t = ts
      }

      s = t.
    },

    append_utc_time(tag, timestamp=null, precision=3, header=false) {
      /*
      Append a field with a UTCTimestamp value.

      :param tag: Integer or string FIX tag number.
      :param timestamp: Time value, see below.
      :param precision: Number of decimal places: 0, 3 (ms) or 6 (us).
      :param header: Append to FIX header if True; default to body.

      The `timestamp` value should be a datetime, such as created by
      datetime.datetime.utcnow(); a float, being the number of seconds
      since midnight 1 Jan 1970 UTC, such as returned by time.time();
      or, None, in which case datetime.datetime.utcnow() is used to
      get the current UTC time.

      Precision values other than zero (seconds), 3 (milliseconds),
      or 6 (microseconds) will raise an exception.  Note that prior
      to FIX 5.0, only values of 0 or 3 comply with the standard.
      */

    }

  }
}
