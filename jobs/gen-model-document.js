const path = require('path');
const fs = require('fs').promises;
const table = require('markdown-table');
/**
 * Generate markdown document from the attributes
 * @param {Object} attrs
 */
function genModel(model, attrs) {
  let doc = `

## ${model}
  `;
  const tbl = [['key', 'type', 'description', 'detail']];
  Object.keys(attrs).forEach((k) => {
    const tr = [];
    const desc = attrs[k];
    tr.push(k);
    tr.push(desc.type ? desc.type : '外键');
    tr.push(desc.description);
    let detail;
    if (desc.collection) {
      detail = `**复数**: ✔️ **表**: ${desc.collection}`;
    }
    tr.push(detail);
    tbl.push(tr);
  });
  return doc + `

  ${table(tbl)}
  `;
}
async function buildDoc() {
  // TODO
  const dir = path.resolve(__dirname, '../api/models');
  const files = await fs.readdir(dir);
  let doc = `
# 数据库结构

`;
  files.forEach((file) => {
    const { attributes } = require(path.resolve(
      __dirname,
      '../api/models',
      file
    ));
    doc += genModel(path.basename(file, '.js'), attributes);
    // console.log(Object.keys(attributes).length);
  });
  return doc;
}

async function genDoc() {
  console.log('正在创建...');

  const doc = await buildDoc();
  console.log('正在写入...');
  await fs.writeFile('./docs/docs/数据库结构.md', doc);
  console.log('完成.');
}
genDoc();
