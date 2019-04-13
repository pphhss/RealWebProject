var config = {

};

config.db = {
  connectionLimit: 50,
  host: "localhost",  // Please input MySQL server IP
  user: "root",       // Please input MYSQL ID
  password: "root",   // Please input MySQl password
  database: 'myapp'
};
config.server = {
  port: 3000
};

config.cloud={
    fileTag:"-ppphhhsss-", // 파일 구분자
    saveDirectory:"cloudData/" // 파일을 저장할 위치
}


module.exports = config;