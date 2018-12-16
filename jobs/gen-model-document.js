const path = require('path');
const fs = require('fs').promises;

/**
 * Generate markdown document from the attributes
 * @param {Object} attrs
 */
function genModel(model, attrs) {
  let doc = `

## ${model}
  `;
  Object.keys(attrs).forEach((k) => {
    const desc = attrs[k];
    if (desc.type) {
      // is primitives
      doc += `

- ${k}

    **类型**: ${desc.type}
      `;
      if (desc.description) {
        doc += `
    **说明**: ${desc.description}
      `;
      }
      if(desc.defaultsTo) {
        doc += `
    **默认值**: ${desc.defaultsTo}
        `;
      }
    } else {
      // is association
      doc += `

- ${k}

      `;
      if(desc.collection) {
        doc += `
    **关系**: ${desc.collection}
    **复数**: ✔
        `;
      }
      if(desc.via) {
        doc += `
    **外键**: ${desc.via}
        `;
      }
      if(desc.model) {
        doc += `
    **关系**: ${desc.model}
    **复数**: ❌
        `;
      }
      if(desc.unique) {
        doc +=`
    **唯一性**: ✔  
        `;
      }
    }
  });
  return doc;
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
