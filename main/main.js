const loadAllItems = require('./loadAllItems.js');

var menu = loadAllItems();
var inputs = [
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000001',
            'ITEM000001',
            'ITEM000004'
        ];

module.exports = function main() {
    console.log('***<没钱赚商店>购物清单***\n') 
   var CNum=0,SNum=0,BNum=0;
   for(let i=0;i<inputs.length;i++) {
        switch(inputs[i]) {
            case 'ITEM000000':{
                CNum++;
                break;
            }
            case 'ITEM000001':{
                SNum++;
                break;
            }
            case 'ITEM000004':{
                BNum++;
                break;
            }
        }
};
