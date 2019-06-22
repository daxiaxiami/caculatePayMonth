/**
逾期利率上浮 50% 
如果借款的年利率是 6%的话
罚息利率：6% x (1 + 50%) = 9%
每个月利率：9% / 12 = 0.0075
每个月偿还能力 5000
 */
class ReducePay {
    constructor(rate, pay) {
        this.month = 0;
        this.rate = rate;
        this.pay = pay;
    }
 /**
  * @input sum 上个月欠款账目
  *         rate 利率
  *         pay 每月还款金额
  * @ouput 下个月还剩待还账目
  */
  repay(sum, rate, pay) {
    return sum + (sum * rate) - pay;
}

/**
 * 输入月份输出年
 * @input month
 * @output year month
 */
 formatMonth(month) {
    let year = parseInt(month/12);
    let restMonth = month % 12
    return `总共还： ${year}年${restMonth}月`
}
/**
 * 循环执行 repay 直到 返回的数字 < 0 停止
 * @input 150000
 * @output month 多少年多少个月还完
 */
 getTime(debt) {
    let rest = this.repay(debt, this.rate, this.pay);
    if(rest > 0) {
        this.month ++
        console.log(`第${this.month}个月  您还了 5000  还剩${rest.toFixed(2)}元 加油`);
        this.getTime(rest);
    }else {
        console.log(`============+++ 恭喜你还完啦 +++=========== 
    
    老子陈三万 再也不欠账啦`, this.formatMonth(this.month));
    }
}

}
/**
 * 实例化，每个月rate 0.0075，每个月还款 5000
 */
const Rage = 0.0075; // rate
const Pay = 5000;  // pay every month
let pay = new ReducePay(Rage, Pay);
pay.getTime(150000)


