import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    // avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: 'Master'
  }
];

const Users = [];

for (let i = 0; i < 16; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    firstName: Mock.mock('@cfirst'),
    lastName: Mock.mock('@clast'),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    tel:/^1[0-9]{10}$/,
    'cid|1':['身份证','驾驶证','护照'],
    time: Mock.mock('@datetime'),
    sex: Mock.Random.integer(0, 1),
    google: Mock.Random.boolean(5, 5, false),
    telCertification: Mock.Random.boolean(5, 5, false),
    'certification|1':['是','否'],
    useable: Mock.Random.boolean(5, 5, false),
    isActive: Mock.Random.boolean(5, 5, false),
    isTradeable: Mock.Random.boolean(2, 8, false),
    url: Mock.mock('@url'),
    email: Mock.mock('@email'),
    moneyAccount: Mock.mock('@integer(10000)'),
    "balance|100-1000000.1-10": 1,
    "freezenBalance|10-10000.1-10": 1,
    'tradeCoin|1':['BTC','LTC', 'ETC'],
    'priceCoin|1':['BNT','USDT'],
    "buyRate|0-1.1-10": 1,
    "sellRate|0-10.1-10": 1,
    proType: Mock.Random.boolean(2, 8, false),
    "price|123.3": 1,
    number: Mock.mock('@increment(1000)'),
    coinName: Mock.mock('@tld'),
    publicName: Mock.mock('@ctitle()'),
    coinAddress: Mock.mock('@guid'),
    ip: Mock.mock('@ip'),
    dive: Mock.mock('@protocol'),
    info: Mock.mock('@csentence'),
  }));
}

export { LoginUsers, Users };
