const faker = require('faker');
const _ = require('lodash');

const cats = [
  '面部护理',
  '底妆彩妆',
  '休闲零食',
  '身体护理',
  '美容美发',
  '生活用品',
  '个人护理',
  '保健养生',
  '时尚潮品',
  '母婴用品',
];
const arrayElement = faker.random.arrayElement;
const fakeImage = (w, h) => `http://dummyimage.com/${w}x${h}`;
const randomChinese = (start, end) => {
  start = start || 19968;
  end = end || 30000;
  return String.fromCharCode(_.random(start, end));
};

const loremWord = (n) =>
  _.range(0, n)
    .map(() => randomChinese())
    .join('');

async function initCategory() {
  await Category.createEach(cats.map((c) => ({ title: c })));
}
async function initTag() {
  // create 200 tags
  const cats = await Category.find();
  let tags = _.range(0, 200).map(() => ({
    title: loremWord(arrayElement([2, 3, 4])),
    belongsTo: arrayElement(cats).id,
  }));
  // add sepcial tag to '母婴用品'
  const bc = cats.find((c) => c.title === '母婴用品');
  const ts = ['奶粉', '纸尿裤'];
  const tts = ts.map((t) => ({
    title: t,
    belongsTo: bc.id,
  }));
  tags = [...tags, ...tts];
  await Tag.createEach(tags);
}
async function initBrand() {
  const brands = _.range(0, 30).map(() => ({
    title: faker.company.companyName(),
    description: faker.lorem.paragraph(),
  }));
  await Brand.createEach(brands);
}
async function initProduct() {
  const categories = await Category.find().populate('tags');
  const brands = await Brand.find();
  const ps = _.range(0, 300).map(() => {
    const c = arrayElement(categories);
    return {
      title: faker.lorem.word(),
      quantity: _.random(10, 9999),
      sales: _.random(5, 1000000),
      images: [],
      price: _.random(10, 500, true).toFixed(2),
      tariff: _.random(0.01, 0.3, true),
      postage: _.random(5, 20),
      description: faker.lorem.sentence(20),
      redeemCost: _.random(1, 100) * 100,
      reddemRestrict: _.random(1, 5),
      supportSeven: faker.random.boolean(),
      spec: _.random(20, 100),
      origin: faker.random.arrayElement([
        'japan',
        'china',
        'english',
        'america',
        'australia',
      ]),
      sotreMethod: faker.lorem.sentence(),
      productionDate: faker.date.past(),
      shelfLife: _.random(1, 20),
      shelfLifeUnit: faker.random.arrayElement([
        '天',
        '月',
        '年',
        '小时',
        '周',
      ]),
      expressProvider: faker.random.arrayElement([
        '快递100',
        '顺丰',
        '汇通',
        '圆通',
      ]),
      serviceProvider: faker.lorem.sentence(),
      hint: faker.lorem.paragraph(),
      group: arrayElement(['in-sale', 'starter']),
      brand: arrayElement(brands).id,
      category: c.id,
      tag: arrayElement(c.tags).id,
    };
  });
  await Product.createEach(ps);
}
async function initUser() {
  const genUser = (other) => ({
    ...{
      emailAddress: faker.internet.email(),
      name: faker.lorem.word(),
      password: faker.lorem.sentence(),
      fullName: faker.name.findName(),
      isSuperAdmin: false,
      nickname: faker.name.title(),
      avatar: faker.image.avatar(),
      phone: faker.phone.phoneNumber(),
      money: _.random(500, 10000),
      invitationCode: faker.random.uuid(),
      lampPoints: _.random(500, 10000),
      points: _.random(500, 20000),
      IDVerified: false,
    },
    ...other,
  });
  const users = _.range(0, 20).map(genUser);
  users.push(
    genUser({
      name: 'test',
      nickname: 'testtest',
      password: await sails.helpers.passwords.hashPassword('123456'),
      avatar: faker.image.avatar(),
    })
  );
  // and for each user create a cart
  await User.createEach(users);
}
async function initCart() {
  const users = await User.find();
  const carts = _.range(0, users.length).map(() => ({}));
  await Cart.createEach(carts);
  const cs = await Cart.find();
  const ps = [];
  cs.forEach((cart, index) => {
    ps.push(User.addToCollection(users[index].id, 'cart').members([cart.id]));
  });
  await Promise.all(ps);
}
async function initReview() {
  const products = await Product.find();
  const users = await User.find();
  const reviews = _.range(0, 2000).map(() => {
    return {
      content: faker.lorem.sentences(2),
      upvotesCount: _.random(2, 200),
      commentsCount: _.random(1, 10),
      sharesCount: _.random(2, 200),
      owner: arrayElement(users).id,
      about: arrayElement(products).id,
    };
  });
  await Review.createEach(reviews);
}
async function initIdentity() {
  const users = await User.find();
  const ids = _.range(0, 40).map(() => ({
    name: faker.name.findName(),
    number: faker.random.uuid(),
    portrait: fakeImage(480, 320),
    back: fakeImage(480, 320),
    owner: arrayElement(users).id,
  }));
  await Identity.createEach(ids);
}
async function initComment() {
  // for every review, create comments
}
async function initAddress() {
  const users = await User.find();
  const addrs = _.range(0, 100).map(() => {
    return {
      reciever: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      province: faker.address.state(),
      area: faker.address.city(),
      county: faker.lorem.word(),
      detail: faker.address.secondaryAddress(),
      postCode: faker.address.zipCode,
      owner: arrayElement(users).id,
    };
  });
  await Address.createEach(addrs);
}
async function initOrder() {
  const users = await User.find();
  const orders = _.range(0, 200).map(() => ({
    shippedAt: faker.date.past(),
    deliveredAt: faker.date.recent(),
    payedAt: faker.date.past(),
    status: arrayElement([
      'toPay',
      'closed',
      'finished',
      'cancelled',
      'toShip',
      'toConfirm',
    ]),
    owner: arrayElement(users).id,
  }));
  await Order.createEach(orders);
}
async function initOrderItem() {
  const orders = await Order.find();
  const products = await Product.find();
  const items = _.range(0).map(() => ({
    quantity: _.random(0, 10),
    price: _.random(10, 200, true).toFixed(2),
    order: arrayElement(orders).id,
    product: arrayElement(products).id,
  }));
  await OrderItem.createEach(items);
}
async function initMessage() {
  const users = await User.find();
  const msgs = _.range(0, 100).map(() => ({
    title: faker.lorem.word(),
    digest: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(3),
    owner: arrayElement(users).id,
  }));
  await Message.createEach(msgs);
}
module.exports = {
  friendlyName: 'Init db',

  description: '',

  inputs: {},

  exits: {
    success: {
      description: 'All done.',
    },
  },

  fn: async function() {
    // TODO
    await initCategory();
    await initTag();
    await initBrand();
    await initProduct();
    await initUser();
    await initCart();
    await initReview();
    await initIdentity();
    await initComment();
    await initAddress();
    await initOrder();
    await initOrderItem();
    await initMessage();
  },
};
