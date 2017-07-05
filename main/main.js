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
   var Num1=0,Num2=0,Num3=0;
   for(var i=0;i<inputs.length;i++) {
        switch(inputs[i]) {
            case 'ITEM000000':{
                Num1++;
                break;
            }
            case 'ITEM000001':{
                Num2++;
                break;
            }
            case 'ITEM000004':{
                Num3++;
                break;
            }
        }
    }
     return        '***<没钱赚商店>购物清单***'+
            '\n名称：可口可乐，数量：'+Num1+'瓶，单价：3.00(元)，小计：'+'15.00'+'(元)' +
            '\n名称：雪碧，数量：'+Num2+'瓶，单价：3.00(元)，小计：'+'6.00'+'(元)' +
            '\n名称：电池，数量：'+Num3+'个，单价：2.00(元)，小计：'+'2.00'+'(元)' +
            '\n----------------------' +
            '\n总计：23.00(元)' +
            '\n**********************';
};
