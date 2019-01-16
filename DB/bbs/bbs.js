const NUMPERPAGE = 10; // # of bb per page.

var pool = require('../pool').getPool(); //get pool.



exports.writeBoard = function (_data, _callback) {
  var query = "INSERT INTO bbs SET ?";

  pool.getConnection(function (_err, _conn) {
    if (_err)
      throw _err;
    _conn.query(query, _data, function (_err, _results) {
      if (_err) {
        console.log(this.sql);
        throw _err;
      }
      _callback();
    });
  });
}



exports.getBbsList = function (_data, _callback) {
  var offset = (_data.page - 1) * NUMPERPAGE;

  var query = "SELECT bbs.serial, bbs.title, bbs.time, user.nickname  FROM bbs INNER JOIN user ON bbs.user_serial=user.serial ";
  var withBack = " ORDER BY bbs.serial DESC LIMIT " + NUMPERPAGE + " OFFSET " + offset;

  pool.getConnection(function (_err, _conn) {
    if (_err)
      throw _err;
    _conn.query(query + withBack, function (_err, _results) {
      if (_err) {
        console.log(this.sql);
        throw _err;
      }
      _callback(_results);
    });
  });
}

exports.getPages = function (_callback) {
  var query = "SELECT count(*) AS count FROM bbs INNER JOIN user ON bbs.user_serial=user.serial";

  pool.getConnection(function (_err, _conn) {
    if (_err)
      throw _err;
    _conn.query(query, function (_err, _results) {
      if (_err) {
        console.log(this.sql);
        throw _err;
      }
      _callback((_results[0].count % NUMPERPAGE == 0) ? Math.floor(_results[0].count / NUMPERPAGE) : Math.floor(_results[0].count / NUMPERPAGE) + 1);
    });
  });
}

exports.getBb = function (_data, _callback) {
  var query = "SELECT bbs.time, bbs.serial,bbs.title,bbs.content,user.nickname FROM bbs INNER JOIN user ON bbs.user_serial=user.serial";
  var where = " WHERE bbs.serial=?";

  pool.getConnection(function (_err, _conn) {
    if (_err)
      throw _err;
    _conn.query(query + where, [_data], function (_err, _results) {
      if (_err) {
        console.log(this.sql);
        throw _err;
      }
      _callback(_results[0]);
    })
  });
}